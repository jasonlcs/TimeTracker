(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-56927b24"],{1675:function(t,e,n){},"1c65":function(t,e,n){"use strict";n("ab82")},3272:function(t,e,n){"use strict";n("1675")},3305:function(t,e,n){},"4ab0":function(t,e,n){(function(e,i){t.exports=i(n("efc7"))})(0,(function(t){"use strict";t=t&&t.hasOwnProperty("default")?t["default"]:t;var e=new Map,n={name:"Claw",bind:function(n,i){var a=i.arg,o=i.value,r=e.get(n);r||e.set(n,r=new t(n)),r.on(a,o)},update:function(t,n){var i=n.arg,a=n.value,o=e.get(t);o.off(i),o.on(i,a)},unbind:function(t,n){var i=n.arg,a=e.get(t);a.off(i),a.isIdle&&e.delete(t)}};return"undefined"!=typeof window&&window.Vue&&window.Vue.directive(n.name,n),n}))},"51e0":function(t,e,n){"use strict";n("8458")},5986:function(t,e,n){},"76d6":function(t,e,n){},8458:function(t,e,n){},"87c2":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Container",[n("Center",{staticClass:"IndividualSettings"},[n("Settings")],1)],1)},a=[],o=n("a6f4"),r=n("3d0f"),s=n("9fb8"),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Settings"},[n("v-card",{attrs:{elevation:"10",width:"600",outlined:"",shaped:""}},[n("v-card-title",{staticClass:"title flex-center text-h4 my-4 font-weight-black"},[n("v-icon",{staticClass:"title text-h4",attrs:{left:""}},[t._v("mdi-account-circle")]),t._v("個人資訊/設定")],1),n("v-divider",{staticClass:"mb-4"}),n("v-card-title",{staticClass:"setting-info"},[n("v-container",{staticClass:"px-6",attrs:{fluid:""}},[n("v-row",{attrs:{"no-gutters":""}},[n("v-col",[n("SettingsImageEditor",{staticClass:"my-6"})],1)],1),n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{attrs:{cols:"4"}},[t._v(" Account status ")]),n("v-col",{attrs:{cols:"8"}},[n("v-text-field",{class:{"warn-account":t.accountRemind.length>0},attrs:{"error-messages":t.accountRemind,outlined:"",dense:"",disabled:""},model:{value:t.accountStatus,callback:function(e){t.accountStatus=e},expression:"accountStatus"}})],1)],1),n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{attrs:{cols:"4"}},[t._v(" Email ")]),n("v-col",{attrs:{cols:"8"}},[n("v-text-field",{attrs:{outlined:"",dense:"",disabled:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1)],1),n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{attrs:{cols:"4"}},[t._v(" Roles ")]),n("v-col",{attrs:{cols:"8"}},[n("v-text-field",{attrs:{outlined:"",dense:"",disabled:""},model:{value:t.roles,callback:function(e){t.roles=e},expression:"roles"}})],1)],1),n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{attrs:{cols:"4"}},[t._v(" Name ")]),n("v-col",{attrs:{cols:"8"}},[n("v-text-field",{attrs:{outlined:"",dense:"",counter:"",maxlength:"256",label:"Edit Name","append-icon":"mdi-square-edit-outline",loading:t.isUpdateNameLoading},nativeOn:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.HandleUpdateName(e)}},scopedSlots:t._u([{key:"append",fn:function(){return[t.isUpdateName?n("v-btn",{staticClass:"btn-upload-name",attrs:{depressed:"","x-small":"",text:""},on:{click:t.HandleUpdateName}},[n("v-icon",[t._v("mdi-upload")])],1):t._e()]},proxy:!0}]),model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1)],1),n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"reset-password",attrs:{cols:"4"},on:{click:t.ToggleIsResetPassword}},[t._v(" Reset Password ")]),n("v-col",{attrs:{cols:"8"}},[n("v-text-field",{attrs:{type:"password","error-messages":t.passwordErrorMessage,outlined:"",dense:"",label:t.isResetPassword?"Current Password":"Click Reset Password to reset","append-icon":t.isResetPassword?"mdi-eye":"",disabled:!t.isResetPassword},nativeOn:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.HandleUpdatePassword(e)}},model:{value:t.currentPassword,callback:function(e){t.currentPassword=e},expression:"currentPassword"}})],1)],1),t.isResetPassword?n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{attrs:{cols:"4"}}),n("v-col",{attrs:{cols:"8"}},[n("v-text-field",{attrs:{type:"password",outlined:"",dense:"",label:"New Password","append-icon":"mdi-eye"},nativeOn:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.HandleUpdatePassword(e)}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),n("v-col",{attrs:{cols:"4"}}),n("v-col",{attrs:{cols:"8"}},[n("v-text-field",{attrs:{type:"password",outlined:"",dense:"",label:"Comfirm Password","append-icon":"mdi-eye"},nativeOn:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.HandleUpdatePassword(e)}},model:{value:t.comfirmPassword,callback:function(e){t.comfirmPassword=e},expression:"comfirmPassword"}})],1),n("v-col",{attrs:{cols:"4"}}),n("v-col",{attrs:{cols:"8"}},[n("v-btn",{staticClass:"text-capitalize",attrs:{color:"primary",loading:t.isUpdatePasswordLoading,elevation:"2",large:"",rounded:"",disabled:!t.isUpdatePassword},on:{click:t.HandleUpdatePassword}},[n("v-icon",{attrs:{left:""}},[t._v("mdi-send")]),t._v(" Reset Password ")],1)],1)],1):t._e()],1)],1)],1)],1)},c=[],d=(n("4160"),n("a15b"),n("b0c0"),n("159b"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"SettingsImageEditor"},[n("SimpleImageEditorModal",{attrs:{image:t.userImage,isLoading:t.isLoading,isOpenModal:t.isOpenSimpleImageEditor},on:{"update:isOpenModal":function(e){t.isOpenSimpleImageEditor=e},"update:is-open-modal":function(e){t.isOpenSimpleImageEditor=e},updateImage:t.UpdateUserImage,deleteImage:t.DeleteUserImage}}),n("v-btn",{staticClass:"update-icon",class:{"use-image":t.isUseUserImage},attrs:{icon:"",elevation:t.isUseUserImage?4:0},on:{click:function(e){t.isOpenSimpleImageEditor=!0}}},[t.isUseUserImage?n("v-img",{staticClass:"user-image-big",attrs:{src:t.userImage}}):n("v-icon",{staticClass:"default-icon"},[t._v("mdi-account-circle")])],1)],1)}),u=[],p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"SimpleImageEditorModal"},[n("v-dialog",{attrs:{persistent:t.imageBase64.length>0,width:t.width},model:{value:t.isOpenModalRef,callback:function(e){t.isOpenModalRef=e},expression:"isOpenModalRef"}},[n("v-card",{staticClass:"simple-imagee-ditor-content pa-8 pt-0",attrs:{loading:t.isLoading}},[n("v-container",{staticClass:"pt-14"},[n("v-row",{staticClass:"justify-center"},[n("SimpleImageEditor",{attrs:{width:t.width,isLoading:t.isLoading,image:t.imageBase64,refs:"imageEditor"},on:{"update:image":function(e){t.imageBase64=e},deleteImage:t.HandleClickDelete}})],1)],1),n("v-card-actions",{staticClass:"justify-center"},[n("v-btn",{staticClass:"action-btn pl-5 pr-6",attrs:{rounded:"",elevation:"4",large:"",loading:t.isLoading,disabled:t.isDisabledOK,color:"primary"},on:{click:t.HandleClickOK}},[n("v-icon",{attrs:{left:""}},[t._v("mdi-check")]),t._v(" OK ")],1),n("v-btn",{staticClass:"action-btn pl-5 pr-6",attrs:{rounded:"",elevation:"4",large:"",color:"accent"},on:{click:t.HandleClickCancel}},[n("v-icon",{attrs:{left:""}},[t._v("mdi-close")]),t._v(" Cancel ")],1)],1)],1)],1)],1)},g=[],f=(n("a9e3"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"SimpleImageEditor"},[n("VImageInput",{ref:"VImageInput",staticClass:"editor",attrs:{clearable:"",clearIcon:"mdi-image-remove","image-format":"jpeg",disabled:t.isLoading,"image-quality":.85,imageHeight:256,imageWidth:256},model:{value:t.imageBase64,callback:function(e){t.imageBase64=e},expression:"imageBase64"}}),t.imageBase64.length>0?n("v-btn",{staticClass:"delete-btn",attrs:{icon:"",disabled:t.isLoading},on:{click:t.HandleClickDelete}},[n("v-icon",[t._v("mdi-delete")])],1):t._e()],1)}),m=[],h=n("e032"),v=n.n(h),y=Object(o["defineComponent"])({name:"SimpleImageEditor",props:{image:{type:String,default:""},isLoading:{type:Boolean,default:!1}},components:{VImageInput:v.a},setup:function(t,e){var n=e.emit,i=e.refs,a=Object(o["computed"])({get:function(){return t.image||""},set:function(t){return n("update:image",t||"")}});function r(){var t;null===(t=i.VImageInput)||void 0===t||t.clear()}function s(){r(),n("deleteImage")}return{imageBase64:a,Clear:r,HandleClickDelete:s}}}),b=y,I=(n("1c65"),n("afb7"),n("2877")),w=Object(I["a"])(b,f,m,!1,null,"4fba027a",null),O=w.exports,C=Object(o["defineComponent"])({name:"SimpleImageEditorModal",props:{image:{type:String,default:""},isOpenModal:{type:Boolean},isLoading:{type:Boolean,default:!1},width:{type:Number,default:500}},components:{SimpleImageEditor:O},setup:function(t,e){var n=e.emit,i=(e.refs,Object(o["ref"])(t.image)),a=function(){return i.value=t.image||""};Object(o["watch"])((function(){return t.image}),a),Object(o["watch"])((function(){return t.isOpenModal}),(function(){return a}));var r=Object(o["computed"])({get:function(){return t.isOpenModal},set:function(t){return n("update:isOpenModal",t)}});function s(){n("updateImage",i.value)}function l(){r.value=!1}function c(){n("deleteImage")}var d=Object(o["computed"])((function(){return!!t.isLoading||(0==i.value.length||t.image==i.value)}));return{isOpenModalRef:r,isDisabledOK:d,imageBase64:i,HandleClickOK:s,HandleClickCancel:l,HandleClickDelete:c}}}),S=C,k=(n("e3ac"),Object(I["a"])(S,p,g,!1,null,null,null)),j=k.exports,x=n("04b0"),D=n("880d"),M=n("5fdc"),H=Object(o["defineComponent"])({name:"SettingsImageEditor",props:{},components:{SimpleImageEditorModal:j},setup:function(t,e){e.emit;var n=e.root,i=n.$store,a=n.$router,r=i,s=a,l=Object(x["useToast"])(),c=new M["a"](r,s),d=Object(o["ref"])(""),u=Object(o["ref"])(!1),p=Object(o["ref"])(!1),g=Object(o["computed"])((function(){return d.value.length>0}));function f(){c.GetImage(u,(function(t){d.value=t.data}))}function m(t){c.CreateOrUpdateImage(t,u,(function(){d.value=t,Object(D["b"])("Update image success.",l),p.value=!1}),(function(){Object(D["c"])("Sorry, the image is not updated.",l)}))}function h(){c.DeleteImage(u,(function(){d.value="",Object(D["b"])("Delete image success.",l),p.value=!1}),(function(){Object(D["c"])("Sorry, the image is not deleted.",l)}))}return f(),{isLoading:u,isOpenSimpleImageEditor:p,isUseUserImage:g,userImage:d,UpdateUserImage:m,DeleteUserImage:h}}}),E=H,R=(n("3272"),Object(I["a"])(E,d,u,!1,null,"1be278f2",null)),L=R.exports,B=n("0fb2"),P=n("8798"),T=n("6120"),U=Object(o["defineComponent"])({name:"Settings",components:{SettingsImageEditor:L},setup:function(t,e){e.emit;var n=e.root,i=n.$store,a=n.$router,r=i,s=a,l=new B["a"](r,s),c=Object(x["useToast"])(),d=Object(o["computed"])((function(){return T["a"][r.state.authentication.claims.accountStatus]})),u=Object(o["computed"])((function(){return Object(P["a"])(r.state.authentication.claims.accountStatus)})),p=Object(o["computed"])((function(){return r.state.authentication.claims.email})),g=Object(o["computed"])((function(){var t=[];return r.state.authentication.claims.userRoles.forEach((function(e){t.push(e.displayName)})),t.join(", ")})),f=Object(o["ref"])(r.state.authentication.claims.name),m=Object(o["computed"])((function(){return f.value!=r.state.authentication.claims.name&&f.value.length>0})),h=Object(o["ref"])(!1);function v(){m.value&&l.UpdateName({name:f.value},h)}var y=Object(o["ref"])(!1),b=Object(o["ref"])(""),I=Object(o["ref"])(""),w=Object(o["ref"])(""),O=Object(o["ref"])(""),C=Object(o["computed"])((function(){return b.value.length>0&&I.value==w.value&&I.value.length>0}));function S(){y.value=!y.value}var k=Object(o["ref"])(!1);function j(){C.value&&(O.value="",l.UpdatePassword({currentPassword:b.value,password:I.value},k,(function(){Object(D["b"])("Password changed!.",c),y.value=!1,b.value="",I.value="",w.value="",O.value=""}),(function(t){400==t.response.status&&(O.value=t.response.data["Fail"][0])})))}return{accountStatus:d,accountRemind:u,email:p,roles:g,name:f,isUpdateName:m,isUpdateNameLoading:h,HandleUpdateName:v,isResetPassword:y,ToggleIsResetPassword:S,currentPassword:b,password:I,comfirmPassword:w,passwordErrorMessage:O,isUpdatePassword:C,isUpdatePasswordLoading:k,HandleUpdatePassword:j}}}),V=U,_=(n("51e0"),n("ff8f"),Object(I["a"])(V,l,c,!1,null,"47af6ec0",null)),W=_.exports,z=Object(o["defineComponent"])({name:"IndividualSettings",props:{},components:{Container:r["a"],Center:s["a"],Settings:W}}),N=z,$=Object(I["a"])(N,i,a,!1,null,"74462c89",null);e["default"]=$.exports},a15b:function(t,e,n){"use strict";var i=n("23e7"),a=n("44ad"),o=n("fc6a"),r=n("a640"),s=[].join,l=a!=Object,c=r("join",",");i({target:"Array",proto:!0,forced:l||!c},{join:function(t){return s.call(o(this),void 0===t?",":t)}})},ab82:function(t,e,n){},afb7:function(t,e,n){"use strict";n("76d6")},e032:function(t,e,n){!function(e,i){t.exports=i(n("4ab0"))}(0,(function(t){"use strict";t=t&&t.hasOwnProperty("default")?t.default:t;var e={functional:!0,render:function(t,e){var n=e.listeners,i=e.parent,a=e.props;return t("VBtn",{class:"ma-1",props:{disabled:i.disabled,flat:!0,icon:!0},on:n},[t("VIcon",{style:a.iconStyle},a.icon)])}};function n(){}var i={data:function(){return{cancel:n,dragging:!1,error:null,failed:!1,file:null,loaded:!1,loading:!1,progress:0,result:null}},methods:{load:function(t){var e,i=this;(e=function(){i.cancel();var e=new FileReader,n=new Promise((function(n,a){e.addEventListener("progress",(function(e){var n=e.loaded;i.progress=n,i.$emit("progress",{file:t,loaded:n})})),e.addEventListener("load",(function(){var a=e.result;Object.assign(i,{loaded:!0,result:a}),i.$emit("load",{file:t,result:a}),n()})),e.addEventListener("abort",(function(){i.$emit("cancel",{file:t}),n()})),e.addEventListener("error",a)}));return e.readAsDataURL(t),Object.assign(i,{cancel:function(){1===e.readyState&&e.abort()},error:null,failed:!1,file:t,loaded:!1,loading:!1,progress:0,result:null}),n},new Promise((function(t){t(e())}))).catch((function(e){Object.assign(i,{error:e,failed:!0}),i.$emit("error",{error:e,file:t})})).finally((function(){Object.assign(i,{cancel:n,loading:!1})}))},onChange:function(t){t.preventDefault();var e=t.target.files;e&&e.length&&this.load(e[0])},onClick:function(t){t.preventDefault();var e=this.$refs.input;e&&(e.value=null,e.click())},onDragEnter:function(t){t.preventDefault(),this.dragging=!0},onDragLeave:function(t){t.preventDefault(),this.dragging=!1},onDragOver:function(t){t.preventDefault()},onDrop:function(t){t.preventDefault(),this.dragging=!1;var e=t.dataTransfer.files;e&&e.length&&this.load(e[0])}},render:function(t){var e=this,n=e.$scopedSlots,i=e.cancel,a=e.dragging,o=e.error,r=e.failed,s=e.file,l=e.loaded,c=e.loading,d=e.onChange,u=e.onClick,p=e.onDragEnter,g=e.onDragLeave,f=e.onDragOver,m=e.onDrop,h=e.progress,v=e.result;return t("div",[t("input",{style:{display:"none"},attrs:{type:"file"},on:{change:d},ref:"input"}),n.default({cancel:i,dragging:a,error:o,failed:r,file:s,loaded:l,loading:c,onClick:u,onDragEnter:p,onDragLeave:g,onDragOver:f,onDrop:m,progress:h,result:v})])}},a={functional:!0,inject:{theme:{default:{isDark:!1}}},render:function(t,e){var n=e.data,a=e.injections,o=e.listeners,r=e.parent,s=r.disabled,l=r.uploadIcon,c=r.uploadIconStyle,d=a.theme,u=o.load,p=n.style;return t(i,{style:p,scopedSlots:{default:function(e){e.cancel,e.dragging,e.failed,e.loading;var n=e.onClick,i=e.onDragEnter,a=e.onDragLeave,o=e.onDragOver,r=e.onDrop;return e.progress,t("div",Object.assign({},{style:Object.assign({},{alignItems:"center",border:"1px dashed rgba("+(d.isDark?"255,255,255,0.7":"0,0,0,0.54")+")",borderRadius:"6px",display:"flex",height:"100%",justifyContent:"center",width:"100%"},s?{}:{cursor:"pointer"})},s?{}:{on:{click:n,dragenter:i,dragleave:a,dragover:o,drop:r}}),[t("VIcon",{large:!0,style:c},l)])}},on:{load:function(t){var e=t.result;u(e)}}})}};function o(t,e,n){return Math.min(Math.max(t,e),n)}var r={checkeredBackground:function(){return["url('data:image/svg+xml;base64,"+btoa('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2 2" fill-opacity="0.2"><rect x="1" width="1" height="1"/><rect y="1" width="1" height="1"/></svg>')+"')","center center / 16px 16px","repeat","#fff"].join(" ")},computedMaxCroppingLeft:function(){return Math.max(0,this.scaledRotatedInternalImageWidthDifference)},computedMaxCroppingTop:function(){return Math.max(0,this.scaledRotatedInternalImageHeightDifference)},computedMaxScaling:function(){return Math.max(this.imageMaxScaling,this.computedMinScaling)},computedMinCroppingLeft:function(){return Math.min(0,this.scaledRotatedInternalImageWidthDifference)},computedMinCroppingTop:function(){return Math.min(0,this.scaledRotatedInternalImageHeightDifference)},computedMinScaling:function(){switch(this.imageMinScaling){case"cover":return Math.max(this.relativeRotatedInternalImageWidth,this.relativeRotatedInternalImageHeight);case"contain":return Math.min(this.relativeRotatedInternalImageWidth,this.relativeRotatedInternalImageHeight)}return 0},croppingLeft:{get:function(){return Math.round(o(this.scaledRotatedInternalImageWidthDifference*this.dirtyOriginLeft,this.computedMinCroppingLeft,this.computedMaxCroppingLeft))},set:function(t){var e=this.scaledRotatedInternalImageWidthDifference;this.dirtyOriginLeft=e?t/e:.5}},croppingTop:{get:function(){return Math.round(o(this.scaledRotatedInternalImageHeightDifference*this.dirtyOriginTop,this.computedMinCroppingTop,this.computedMaxCroppingTop))},set:function(t){var e=this.scaledRotatedInternalImageHeightDifference;this.dirtyOriginTop=e?t/e:.5}},relativeRotatedInternalImageHeight:function(){return this.imageHeight/this.rotatedInternalImageHeight},relativeRotatedInternalImageWidth:function(){return this.imageWidth/this.rotatedInternalImageWidth},rotatedInternalImageHeight:function(){return this.rotated?this.internalImageWidth:this.internalImageHeight},rotatedInternalImageWidth:function(){return this.rotated?this.internalImageHeight:this.internalImageWidth},scaledRotatedInternalImageHeight:function(){return Math.round(this.scaling*this.rotatedInternalImageHeight)},scaledRotatedInternalImageHeightDifference:function(){return this.imageHeight-this.scaledRotatedInternalImageHeight},scaledRotatedInternalImageWidth:function(){return Math.round(this.scaling*this.rotatedInternalImageWidth)},scaledRotatedInternalImageWidthDifference:function(){return this.imageWidth-this.scaledRotatedInternalImageWidth},scaling:{get:function(){return o(this.dirtyScaling,this.computedMinScaling,this.computedMaxScaling)},set:function(t){this.dirtyScaling=t}},updateImageData:function(){var t=this,e=this,n=e.croppingLeft,i=e.croppingTop,a=e.debounce,o=e.flippedHorizontally,r=e.flippedVertically,s=e.imageBackgroundColor,l=e.imageFormat,c=e.imageHeight,d=e.imageQuality,u=e.imageWidth,p=e.internalImageData,g=e.internalImageHeight,f=e.internalImageWidth,m=e.rotated,h=e.scaling;return setTimeout((function(){var e;if(p){var a=new Image;a.src=p;var v=document.createElement("canvas"),y=v.getContext("2d");v.width=u,v.height=c,s&&(y.fillStyle=s,y.fillRect(0,0,u,c)),y.translate(n,i),y.scale(h,h),m&&(y.translate(g,0),y.rotate(Math.PI/2)),o&&(y.translate(f,0),y.scale(-1,1)),r&&(y.translate(0,g),y.scale(1,-1)),y.drawImage(a,0,0),o&&(y.translate(u,0),y.scale(-1,1)),r&&(y.translate(0,c),y.scale(1,-1)),e=v.toDataURL("image/"+l,d)}else e=null;t.imageData=e}),a)}},s="VImageInput",l={type:Boolean,default:!1},c={type:String,default:"$vuetify.icons.clear"},d={type:Number,default:0},u={type:Boolean,default:!1},p={type:String,default:"mdi-flip-horizontal"},g={type:String,default:"mdi-flip-vertical"},f={type:Boolean,default:!1},m={type:Boolean,default:!1},h={type:Boolean,default:!1},v={type:String,default:"png"},y={type:Number,default:256},b={type:Number,default:1},I={type:String,default:"cover"},w={type:Number,default:256},O={type:String,default:"rgba(0,0,0,0.5)"},C={type:String,default:"#fff"},S={type:String,default:"4px"},k={type:String,default:"50px"},j={type:Boolean,default:!1},x={type:String,default:"mdi-rotate-right"},D={type:String,default:"mdi-rotate-left"},M={type:String,default:"mdi-upload"},H={clearable:l,clearIcon:c,clearIconStyle:Object,debounce:d,disabled:u,flipHorizontallyIcon:p,flipHorizontallyIconStyle:Object,flipVerticallyIcon:g,flipVerticallyIconStyle:Object,fullHeight:f,fullWidth:m,hideActions:h,imageBackgroundColor:String,imageFormat:v,imageHeight:y,imageMaxScaling:b,imageMinScaling:I,imageQuality:{},imageWidth:w,name:String,overlayBackgroundColor:O,overlayBorderColor:C,overlayBorderWidth:S,overlayPadding:k,readonly:j,rotateClockwiseIcon:x,rotateClockwiseIconStyle:Object,rotateCounterClockwiseIcon:D,rotateCounterClockwiseIconStyle:Object,scalingSliderColor:String,uploadIcon:M,uploadIconStyle:Object,value:String,backgroundColor:{},maxScaling:{},minScaling:{},rotateCounterclockwiseIcon:{},rotateCounterclockwiseIconStyle:{}},E={name:s,components:{MyActionButton:e,MyClearButton:{functional:!0,render:function(t,e){var n=e.parent;return t("MyActionButton",{props:{icon:n.clearIcon,iconStyle:n.clearIconStyle},on:{click:n.clear}})}},MyFileUpload:a,MyFlipHorizontallyButton:{functional:!0,render:function(t,e){var n=e.parent;return t("MyActionButton",{props:{icon:n.flipHorizontallyIcon,iconStyle:n.flipHorizontallyIconStyle},on:{click:n.flipHorizontally}})}},MyFlipVerticallyButton:{functional:!0,render:function(t,e){var n=e.parent;return t("MyActionButton",{props:{icon:n.flipVerticallyIcon,iconStyle:n.flipVerticallyIconStyle},on:{click:n.flipVertically}})}},MyRotateClockwiseButton:{functional:!0,render:function(t,e){var n=e.parent;return t("MyActionButton",{props:{icon:n.rotateClockwiseIcon,iconStyle:n.rotateClockwiseIconStyle},on:{click:n.rotateClockwise}})}},MyRotateCounterClockwiseButton:{functional:!0,render:function(t,e){var n=e.parent;return t("MyActionButton",{props:{icon:n.rotateCounterClockwiseIcon,iconStyle:n.rotateCounterClockwiseIconStyle},on:{click:n.rotateCounterClockwise}})}},MyScalingSlider:{functional:!0,render:function(t,e){var n=e.parent;return t("VSlider",{class:"mx-2 my-1",props:{color:n.scalingSliderColor,disabled:n.disabled,hideDetails:!0,max:n.computedMaxScaling,min:n.computedMinScaling,step:.001,value:n.scaling},on:{input:n.scaleTo}})}}},directives:{Claw:t},inject:{theme:{default:{isDark:!1}}},props:H,data:function(){return{dirtyOriginLeft:.5,dirtyOriginTop:.5,dirtyScaling:0,flippedHorizontally:!1,flippedVertically:!1,imageData:null,internalImageData:null,internalImageHeight:0,internalImageWidth:0,rotated:!1}},computed:r,watch:{imageData:function(t){this.$emit("input",t)},updateImageData:function(t,e){clearTimeout(e)},value:{handler:function(t){this.load(t)},immediate:!0}},created:function(){var t=this.$props,e=this.constructor.super.util.warn;Object.entries({imageBackgroundColor:"backgroundColor",imageMaxScaling:"maxScaling",imageMinScaling:"minScaling",rotateCounterClockwiseIcon:"rotateCounterclockwiseIcon",rotateCounterClockwiseIconStyle:"rotateCounterclockwiseIconStyle"}).forEach((function(n){var i=n[0],a=n[1];void 0!==t[a]&&e("["+s+"]: The property '"+a+"' has been renamed to '"+i+"'.")}))},methods:{clear:function(){this.internalImageData=null},flipHorizontally:function(){this.rotated?this.flippedVertically=!this.flippedVertically:this.flippedHorizontally=!this.flippedHorizontally,this.dirtyOriginLeft=1-this.dirtyOriginLeft},flipVertically:function(){this.rotated?this.flippedHorizontally=!this.flippedHorizontally:this.flippedVertically=!this.flippedVertically,this.dirtyOriginTop=1-this.dirtyOriginTop},load:function(t){var e=this;if((this.imageData||t)&&this.imageData!==t){var n=new Image;n.addEventListener("load",(function(){var i=n.naturalWidth,a=n.naturalHeight;e.internalImageData=i&&a?t:null,e.internalImageWidth=i,e.internalImageHeight=a,e.flippedHorizontally=!1,e.flippedVertically=!1,e.rotated=!1,e.scaling=0,e.dirtyOriginLeft=.5,e.dirtyOriginTop=.5})),n.src=t}},onPan:function(t){this.croppingLeft+=t.x-t.previousX,this.croppingTop+=t.y-t.previousY},rotateClockwise:function(){this.rotated?(this.rotated=!1,this.flippedHorizontally=!this.flippedHorizontally,this.flippedVertically=!this.flippedVertically):this.rotated=!0;var t=this.dirtyOriginTop;this.dirtyOriginTop=this.dirtyOriginLeft,this.dirtyOriginLeft=1-t},rotateCounterClockwise:function(){this.rotated?this.rotated=!1:(this.rotated=!0,this.flippedHorizontally=!this.flippedHorizontally,this.flippedVertically=!this.flippedVertically);var t=this.dirtyOriginLeft;this.dirtyOriginLeft=this.dirtyOriginTop,this.dirtyOriginTop=1-t},scaleTo:function(t){this.scaling=t}},render:function(t){return t("div",{style:Object.assign({},{display:["-ms-inline-grid","inline-grid"],gridColumns:"1fr auto",gridRows:"1fr auto",gridTemplateColumns:"1fr auto",gridTemplateRows:"1fr auto"},this.fullHeight?{height:"100%"}:{},this.fullWidth?{width:"100%"}:{})},[t("div",{style:{gridColumn:1,gridRow:1,overflow:"hidden",position:"relative"}},[t("div",Object.assign({},{style:Object.assign({},{alignItems:"center",background:this.checkeredBackground,display:"flex",height:"100%",justifyContent:"center",overflow:"hidden",padding:"calc("+this.overlayPadding+" + "+this.overlayBorderWidth+")",position:"relative",width:"100%",zIndex:0},this.internalImageData||this.readonly?{}:{opacity:0,pointerEvents:"none",visibility:"hidden"})},this.internalImageData?this.disabled||this.readonly?{}:{directives:[{name:"Claw",arg:"pan",value:this.onPan}]}:{}),[t("div",{style:{boxShadow:"0 0 4000px 4000px "+this.overlayBackgroundColor,maxHeight:"100%",maxWidth:"100%",outline:this.overlayBorderWidth+" solid "+this.overlayBorderColor,pointerEvents:"none"}},[t("div",{style:Object.assign({},{height:this.imageHeight+"px",position:"relative",width:this.imageWidth+"px",zIndex:-1},this.imageBackgroundColor?{backgroundColor:this.imageBackgroundColor}:{})},(this.internalImageData?[t("img",{style:{pointerEvents:"none",position:"absolute",transform:["translate("+this.croppingLeft+"px,"+this.croppingTop+"px)","scale("+this.scaling+")"].concat(this.rotated?["translateX("+this.internalImageHeight+"px)","rotate(90deg)"]:[],this.flippedVertically?["translateY("+this.internalImageHeight+"px)","scaleY(-1)"]:[],this.flippedHorizontally?["translateX("+this.internalImageWidth+"px)","scaleX(-1)"]:[]).join(" "),transformOrigin:"0 0"},attrs:{src:this.internalImageData}})]:[]).concat(this.internalImageData&&this.imageData?[t("input",{attrs:{name:this.name,type:"hidden",value:this.imageData}})]:[]))])])].concat(this.internalImageData||this.readonly?[]:[t("MyFileUpload",{style:{bottom:0,left:0,position:"absolute",right:0,top:0},on:{load:this.load}})])),t("div",{style:Object.assign({},{display:"flex",flexDirection:"column",gridColumn:2,gridRow:1,justifyContent:"center"},this.internalImageData?{}:{opacity:0,pointerEvents:"none",visibility:"hidden"})},(this.clearable?[t("MyClearButton"),t("VSpacer")]:[]).concat(this.hideActions||this.readonly?[]:[t("MyRotateClockwiseButton"),t("MyRotateCounterClockwiseButton"),t("MyFlipHorizontallyButton"),t("MyFlipVerticallyButton")])),t("div",{style:Object.assign({},{gridColumn:1,gridRow:2},this.internalImageData?{}:{opacity:0,pointerEvents:"none",visibility:"hidden"})},this.hideActions||this.readonly?[]:[t("MyScalingSlider")])])}};return"undefined"!=typeof window&&window.Vue&&window.Vue.component(E.name,E),E}))},e3ac:function(t,e,n){"use strict";n("3305")},efc7:function(t,e,n){!function(e,n){t.exports=n()}(0,(function(){"use strict";function t(t){return void 0===t}function e(){}var n={t:e,n:e,o:e,i:e,e:e,u:e};function i(t,e,n,i){return Math.hypot(n-t,i-e)}var a={mousedown:function(t){this.t(t)},mousemove:function(t){this.n(t)},mouseup:function(t){this.o(t)},touchend:function(t){this.i(t)},touchmove:function(t){this.e(t)},touchstart:function(t){this.u(t)}},o=function(){function e(t,e){var n=this;void 0===e&&(e={});var i=e.delay;void 0===i&&(i=500);var o=e.distance;void 0===o&&(o=1),this.target=t,Object.assign(this,{delay:i,distance:o}),this.c(),this.r={};var r,s,l,c=(r=a,s=function(t){return t.bind(n)},l={},Object.entries(r).forEach((function(t){var e=t[0],n=t[1];l[e]=s(n)})),l),d=c.mousedown,u=c.mousemove,p=c.mouseup,g=c.touchend,f=c.touchmove,m=c.touchstart;this.s={mousedown:d,touchend:g,touchmove:f,touchstart:m},this.a={mousemove:u,mouseup:p}}var o={isIdle:{configurable:!0}};return e.prototype.h=function(){var t=this;Object.entries(this.s).forEach((function(e){var n=e[0],i=e[1];t.target.addEventListener(n,i)})),Object.entries(this.a).forEach((function(t){var e=t[0],n=t[1];window.addEventListener(e,n)}))},e.prototype.f=function(){var t=this;Object.entries(this.s).forEach((function(e){var n=e[0],i=e[1];t.target.removeEventListener(n,i)})),Object.entries(this.a).forEach((function(t){var e=t[0],n=t[1];window.removeEventListener(e,n)}))},e.prototype.on=function(t,e){this.isIdle&&this.h(),t=t.toLowerCase();var n=this.r[t];return n||(this.r[t]=n=[]),n.push(e),this},e.prototype.off=function(e,n){if(t(e))this.r={};else if(e=e.toLowerCase(),t(n))delete this.r[e];else{var i=this.r[e];if(i){var a=i.indexOf(n);0<=a&&(i.splice(a,1),i.length||delete this.r[e])}}return this.isIdle&&this.f(),this},e.prototype.trigger=function(t,e){t=t.toLowerCase();var n=this.r[t];return n&&n.forEach((function(t){t(e)})),this},o.isIdle.get=function(){return function(t){for(var e in t)if(n=t,i=e,Object.prototype.hasOwnProperty.call(n,i))return!1;var n,i;return!0}(this.r)},e.prototype.v=function(t){this.m=Object.assign({},n,t)},e.prototype.c=function(){var t,e,n,a,o,r=this,s=function(t){return function(e){e.preventDefault(),0<e.touches.length&&(n=e.touches[0].clientX,a=e.touches[0].clientY),t()}},l=function(t){return function(e){e.preventDefault(),n=e.clientX,a=e.clientY,t()}},c=function(t){return function(e){1===e.which&&l(t)(e)}},d=function(){e=Date.now();var o=n,d=a,u=setTimeout((function(){e=Date.now(),r.trigger("holdStart",{pointerType:t,timeStamp:e,x:o,y:d});var u=e,p=function(){e=Date.now(),r.trigger("holdEnd",{initialTimeStamp:u,pointerType:t,timeStamp:e,x:o,y:d}),r.c()},g=function(){i(o,d,n,a)>=r.distance&&p()},f={};switch(t){case"touch":Object.assign(f,{u:s(p),e:s(g),i:s(p)});break;case"mouse":Object.assign(f,{n:l(g),o:c(p)})}r.v(f)}),r.delay),p=function(){if(e=Date.now(),i(o,d,n,a)>=r.distance){clearTimeout(u),r.trigger("panStart",{pointerType:t,timeStamp:e,x:o,y:d});var p=e,g=p,f=o,m=d,h=function(){r.trigger("pan",{initialTimeStamp:p,initialX:o,initialY:d,pointerType:t,previousTimeStamp:g,previousX:f,previousY:m,timeStamp:e,x:n,y:a})};h();var v=function(){e=Date.now(),h(),g=e,f=n,m=a},y=function(){e=Date.now(),r.trigger("panEnd",{initialTimeStamp:p,initialX:o,initialY:d,pointerType:t,timeStamp:e,x:n,y:a}),r.c()},b={};switch(t){case"touch":Object.assign(b,{u:s(y),e:s(v),i:s(y)});break;case"mouse":Object.assign(b,{n:l(v),o:c(y)})}r.v(b)}},g=function(){clearTimeout(u),e=Date.now(),r.trigger("tap",{pointerType:t,timeStamp:e,x:n,y:a}),r.c()},f={};switch(t){case"touch":Object.assign(f,{u:s((function(){clearTimeout(u),r.c()})),e:s(p),i:s(g)});break;case"mouse":Object.assign(f,{n:l(p),o:c(g)})}r.v(f)};this.v({u:(o=function(){t="touch",d()},function(t){1===t.touches.length&&s(o)(t)}),t:c((function(){t="mouse",d()}))})},Object.defineProperties(e.prototype,o),e}();return Object.keys(n).forEach((function(t){Object.defineProperty(o.prototype,t,{get:function(){return this.m[t]}})})),o}))},ff8f:function(t,e,n){"use strict";n("5986")}}]);
//# sourceMappingURL=chunk-56927b24.48eb52a7.js.map