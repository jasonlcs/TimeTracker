using AutoMapper;
using EFCoreSecondLevelCacheInterceptor;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using Microsoft.AspNetCore.SpaServices;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using System;
using System.IO;
using System.Security.Claims;
using System.Threading.Tasks;
using TimeTracker.DAL;
using TimeTracker.DAL.DBModels.Auth;
using TimeTracker.Helper.Extensions;
using TimeTracker.Hubs;
using VueCliMiddleware;

namespace TimeTracker
{
    public class Startup
    {
        protected readonly string corsPolicy = "CorsPolicy";

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            // Auto Mapper
            var mapperConfig = new MapperConfiguration(cfg =>
            {
                cfg.AddProfile(new MappingProfile());
            });
            IMapper mapper = mapperConfig.CreateMapper();
            services.AddSingleton(mapper);

            // Add Cache for DB Context
            // https://github.com/VahidN/EFCoreSecondLevelCacheInterceptor#2--add-secondlevelcacheinterceptor-to-your-dbcontextoptionsbuilder-pipeline
            services.AddEFSecondLevelCache(options =>
            {
                //options.UseMemoryCacheProvider(CacheExpirationMode.Absolute, TimeSpan.FromSeconds(5))
                options.UseMemoryCacheProvider(CacheExpirationMode.Absolute, TimeSpan.FromMinutes(30))
                //options.UseMemoryCacheProvider()
                .DisableLogging(true);
                //.DisableLogging(false);
                //options.CacheAllQueries(CacheExpirationMode.Absolute, TimeSpan.FromMinutes(30));
            });

            // DB Context
            services.InitDB(Configuration);

            // Basic DB Context without cache
            //services.AddDbContext<ApplicationDbContext>(options =>
            //    options.UseSqlServer(connectionString));
            services.AddScoped<IUserAuthHandler<User, int>, UserAuthHandler>();
            services.AddScoped<TaskHandler>();
            services.AddScoped<TaskReportHandler>();
            services.AddScoped<ParameterHandler>();            

            // Web Socket
            services.AddTransient<WSHubHandler<WSHub>>();
            services.AddSignalR();
            services.AddSingleton<IUserIdProvider, UserIdProvider>();

            // Session
            services.AddDistributedMemoryCache();
            services.AddSession(options =>
            {
                // https://docs.microsoft.com/en-us/aspnet/core/fundamentals/app-state?view=aspnetcore-5.0#session-options
                options.Cookie.Name = "TTSK"; // Time Tracker Session Key
                options.IdleTimeout = TimeSpan.FromSeconds(10);
                options.Cookie.HttpOnly = true;
                options.Cookie.IsEssential = true;
            });

            // NOTE: PRODUCTION Ensure this is the same path that is specified in your webpack output
            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "ClientApp/dist";
            });

            services.AddControllers()
                .ConfigureApiBehaviorOptions(options => {
                    //  Format return message from ModelState
                    options.InvalidModelStateResponseFactory = actionContext =>
                    {
                        var modelState = actionContext.ModelState.Values;
                        return new BadRequestObjectResult(actionContext.ModelState);
                    };
                });

            // Add service and create Policy with options
            services.AddCors(options => {});

            // Add cookie-based authentication
            services.AddAuthentication(CookieAuthenticationDefaults.AuthenticationScheme)
                .AddCookie(options =>
                {
                    // Return 401 instead of 302 when accessing resouce without authorization
                    // (Default behavior will redirect to login url)
                    options.Events.OnRedirectToLogin = context =>
                    {
                        context.Response.StatusCode = StatusCodes.Status401Unauthorized;
                        return Task.CompletedTask;
                    };

                    options.Events.OnRedirectToAccessDenied = context =>
                    {
                        context.Response.StatusCode = StatusCodes.Status403Forbidden;
                        return Task.CompletedTask;
                    };
                });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                // Add global cors policy
                app.UseCors(x => x
                    .AllowAnyMethod()
                    .AllowAnyHeader()
                    .SetIsOriginAllowed(origin => true) // allow any origin
                    .AllowCredentials()); // allow credentials
            }
            else
            {
                app.UseExceptionHandler("/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseDeveloperExceptionPage();
            app.UseHttpsRedirection();

            // Static files
            app.UseStaticFiles();
            app.UseSpaStaticFiles();

            // optional base path for IIS virtual app/directory
            //app.UsePathBase("/optionalpath");

            // Routing
            app.UseRouting();

            // Authentication
            app.UseAuthentication();
            app.UseAuthorization();
            // app.UseSession();

            app.UseEndpoints(endpoints =>
            {
                //endpoints.MapControllerRoute(
                //    name: "default",
                //    pattern: "{controller}/{action=Index}/{id?}");

                endpoints.MapControllers();
                endpoints.MapHub<WSHub>("/wssync");
            });

            app.UseSpa(spa =>
            {
                spa.Options.SourcePath = "ClientApp";
            });

            if (Boolean.Parse(Configuration.GetSection("IsLaunchSPAServer").Value))
            {
                UseVueSPAServerWithVisualStudio(app);
            }
        }

        /// <summary>
        /// Launch SPA server with Visual Studio
        /// </summary>
        /// <param name="app"></param>
        protected void UseVueSPAServerWithVisualStudio(IApplicationBuilder app)
        {
            app.UseEndpoints(endpoints =>
            {
                // use vuecliproxy for dev
                endpoints.MapToVueCliProxy(
                    "{*path}",
                    new SpaOptions { SourcePath = "ClientApp" },
                    npmScript: (System.Diagnostics.Debugger.IsAttached) ? "serve" : null,
                    regex: "Compiled successfully",
                    forceKill: true,
                    wsl: false // Set to true if you are using WSL on windows. For other operating systems it will be ignored
                    );
            });
        }
    }
}
