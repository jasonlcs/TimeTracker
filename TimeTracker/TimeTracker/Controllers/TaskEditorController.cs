﻿using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TimeTracker.DAL;
using TimeTracker.DAL.DBModels.Task;
using TimeTracker.DAL.Models;
using TimeTracker.Helper.Auth;
using TimeTracker.Models;
using TimeTracker.Models.Task;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace TimeTracker.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    [Authorize]
    [AuthorizeRole(UserRoles.User)]
    public class TaskEditorController : ControllerBase
    {
        protected readonly ApplicationDbContext _context;
        protected readonly TaskHandler _taskHandler;

        public TaskEditorController(ApplicationDbContext applicationDbContext, TaskHandler taskHandler)
        {
            this._context = applicationDbContext;
            this._taskHandler = taskHandler;
        }


        [HttpPost]
        public IActionResult GetAccounts()
        {
            var accounts = this._context.User.Where(x => x.AccountStatus == AccountStatus.Approved).AsNoTracking().ToList();
            var returnData = new List<ApprovedUser>();
            foreach (var account in accounts)
            {
                returnData.Add(new ApprovedUser(account));
            }
            return Ok(returnData);
        }

        [HttpPost]
        public IActionResult GetPeriods()
        {
            var result = this._context.Period.Select( x => x ).AsNoTracking().ToList();
            return Ok(result);
        }

        [HttpPost]
        public IActionResult GetTaskTypes()
        {
            var result = this._context.TaskType.Select(x => x).AsNoTracking().ToList();
            return Ok(result);
        }

        [HttpPost]
        public IActionResult GetTaskSources()
        {
            var result = this._context.TaskSource.Select(x => x).AsNoTracking().ToList();
            return Ok(result);
        }
        

        [HttpPost]
        public IActionResult GetDaysData(QueryTasks queryTasks)
        {
            var result = this._taskHandler.GetDaysData(queryTasks);

            return Ok(result);
        }

        [HttpPost]
        public IActionResult CreateTask(CreateTask createTask)
        {
            var taskDays = this._taskHandler.CreateAndSelectTaskDay(createTask.Tasks, createTask.OwnerGuid);

            this._taskHandler.CreateTasks(createTask.Tasks, taskDays);

            var tasksGuids = createTask.Tasks.Select(x => x.Guid).ToList();

            // TODO
            // 要用 WS 把新增的訊息派送給有訂閱的client

            return Ok(tasksGuids);
        }
    }
}
