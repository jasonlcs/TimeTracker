(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-da9561ba"],{"0f83":function(e,t,a){"use strict";a("5465")},3289:function(e,t,a){},5465:function(e,t,a){},"59d4":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("Container",[a("div",{staticClass:"TaskEditor"},[a("TwoColumn",{scopedSlots:e._u([{key:"left",fn:function(){return[a("MetaDisplayer",{attrs:{singleSelectTarget:"",selectedUsers:e.targetUsers,selectedDates:e.targetDates,width:e.widthMetaDisplayer},on:{"update:selectedUsers":function(t){e.targetUsers=t},"update:selected-users":function(t){e.targetUsers=t},"update:selectedDates":function(t){e.targetDates=t},"update:selected-dates":function(t){e.targetDates=t}}}),a("TaskPeriodSimpleSummary",{ref:"summary",attrs:{isReactiveMode:"",selectedUsers:e.targetUsers,daysData:e.daysData,selectedDates:e.targetDates}})]},proxy:!0},{key:"right",fn:function(){return[a("TaskDayTimeline",{staticClass:"margin-center",attrs:{user:e.targetUser,dateRange:e.targetDates},on:{updateDaysData:e.HandleUpdateDaysData}})]},proxy:!0}])})],1)])},i=[],r=(a("a9e3"),a("a6f4")),s=a("3d0f"),o=a("8a26"),l=a("51ec"),u=a("ff18"),c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"TaskDayTimeline",attrs:{"align-top":""}},[a("SimpleTransition",{attrs:{enterAnimation:"animate__backInDown",leaveAnimation:"animate__backOutUp"}},[e.isShowContent?a("div",{staticClass:"task-timeline-line"}):e._e()]),a("div",{staticClass:"task-timeline-body"},[e.isShowContent?a("RippleTransitionFlip",e._l(e.daysData,(function(t,n){return a("div",{key:n,staticClass:"timeline-row",class:{"focus-row":t.isFormClicked},attrs:{"data-index":n}},[a("TaskDayTimelineTitle",{staticClass:"timeline-row-title",attrs:{dayData:t,user:e.user},on:{input:e.EmitUpdateDaysData}}),a("TaskDayForm",{staticClass:"timeline-row-form",attrs:{dayData:t,user:e.user},on:{handleClickTableForm:e.HandleClickTableForm,input:e.EmitUpdateDaysData}})],1)})),0):e._e()],1)],1)},d=[],m=(a("4160"),a("159b"),a("5530")),f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"TaskDayForm"},[e.isOptionsReady?a("TableForm",{directives:[{name:"on-clickaway",rawName:"v-on-clickaway",value:function(){return e.dayData.isFormClicked=!1},expression:"() => dayData.isFormClicked = false"}],staticClass:"table-form",class:e.GetFormClass(e.dayData),attrs:{isReadonly:!e.dayData.isFormClicked||e.dayData.isLeave,options:e.options},on:{addRows:function(t){return e.HandleAddRows(e.dayData,t)},removeRows:function(t){return e.HandleRemoveRows(e.dayData,t)},moveRows:function(t){return e.HandleMoveRows(e.dayData,t)},emptyCells:function(t){return e.HandleEmptyCells(e.dayData,t)},modifyCells:function(t){return e.HandleModifyCells(e.dayData,t)},input:function(t){return e.$emit("input")}},nativeOn:{click:function(t){return e.HandleClickTableForm(e.dayData)}},model:{value:e.dayData.formData,callback:function(t){e.$set(e.dayData,"formData",t)},expression:"dayData.formData"}}):e._e()],1)},p=[],y=(a("d81d"),a("723b")),v=a("c512");let k={singleSelect:"singleSelect",number:"number",textarea:"textarea"},D={singleSelect:()=>0,number:()=>0,textarea:()=>""},b={singleSelect:Number,number:Number,textarea:String};function T(e){let t=e.head.length,a=Array(t).fill(void 0);for(let i in e.head){let t=e.head[i].cellType;a[i]=D[t]()}let n={};return a.forEach((t,a)=>{let i=e.head[a].relatedKey;n[i]=t}),n}function w(e,t){return`${e}_${t}`}var g={resizeTriggerBlockRowClass:"resize-trigger-block-row",resizeTriggerBlockColClass:"resize-trigger-block-col",startResizeRowEmitName:"startResizeRow",startResizeColEmitName:"startResizeCol",resizedRowEmitName:"resizedRow",resizedColEmitName:"resizedCol",addRowEmitName:"addRows",removeRowsEmitName:"removeRows",moveRowEmitName:"moveRows",cellModifiedEmitName:"modifyCells",emptyCellEmitName:"emptyCells",cellTypes:k,valueTypes:b,defaultValue:D,GetDefaultRow:T,GetCellRefName:w},C=function(e){return e.map((function(e){return{name:e.displayName,value:e.id}}))||[]},h=function(e){return{head:[{title:"時數",relatedKey:"consumeTime",cellType:g.cellTypes.number,style:{width:"80px","min-width":"80px"},options:{step:.5,min:0,max:12}},{title:"工作類型",relatedKey:"taskType",cellType:g.cellTypes.singleSelect,style:{width:"160px","min-width":"160px"},options:C(e.taskTypes)},{title:"工作來源",relatedKey:"taskSource",cellType:g.cellTypes.singleSelect,style:{width:"160px","min-width":"160px"},options:C(e.taskSources)},{title:"工作名稱",relatedKey:"taskName",cellType:g.cellTypes.textarea,options:{maxLength:256,isSuggestions:!0,throttle:250}},{title:"工作內容",relatedKey:"taskContent",cellType:g.cellTypes.textarea,options:{maxLength:256,isSuggestions:!0,throttle:250}}]}},O=a("aad1"),j=a("7b28"),R=Object(r["defineComponent"])({name:"TaskDayForm",props:{user:{type:Object},dayData:{type:Object}},directives:{onClickaway:y["directive"]},components:{},setup:function(e,t){var a=t.emit,n=t.root,i=n.$store,s=n.$router,o=(n.$route,i),l=s,u=new v["a"](o,l),c=new v["b"](o),d=Object(r["ref"])(!1);function m(e){var t=function(e){return!!e.isLeave||0==e.formData.length&&0==e.isFormClicked};return{"light-form":t(e)}}function f(){a("handleClickTableForm",e.dayData)}function p(t,a){var n,i=a.map((function(e){return{guid:Object(O["a"])(),displayOrder:e.newIndex,date:t.date,taskType:Object(j["a"])(o.state.taskParameters.taskTypes,t.formData[e.newIndex].taskType),taskSource:Object(j["a"])(o.state.taskParameters.taskSources,t.formData[e.newIndex].taskSource),taskName:t.formData[e.newIndex].taskName,taskContent:t.formData[e.newIndex].taskContent}})),r={ownerGuid:null===(n=e.user)||void 0===n?void 0:n.guid,tasks:i};u.CreateTask(r,d,(function(e){var n=e.data;a.forEach((function(e,a){t.formData[e.newIndex].guid=n[a]})),r.tasks.forEach((function(e,t){return e.guid=n[t]})),c.CreateTask(r)}))}function y(t,a){var n;c.DeleteTasks({ownerGuid:null===(n=e.user)||void 0===n?void 0:n.guid,date:t.date,taskGuids:a.map((function(e){return e.value.guid}))})}function k(t,a){c.UpdateTaskRowOrder(a.map((function(a){var n;return{ownerGuid:null===(n=e.user)||void 0===n?void 0:n.guid,guid:t.formData[a.newIndex].guid,date:t.date,displayOrder:a.newIndex}})))}function D(t,a){function n(e,t){return"taskType"==e?Object(j["b"])(o.state.taskParameters.taskTypes,t):"taskSource"==e?Object(j["b"])(o.state.taskParameters.taskSources,t):t}var i=[];a.forEach((function(a){var r;null!==a.newValue&&i.push({ownerGuid:null===(r=e.user)||void 0===r?void 0:r.guid,guid:t.formData[a.rowIndex].guid,date:t.date,relatedKey:a.relatedKey,value:n(a.relatedKey,a.newValue)})})),i.length>0&&c.UpdateTaskCol(i)}function b(e,t){D(e,t)}return Object(r["watch"])(d,(function(){d.value?o.commit("TurnOnLoading"):o.commit("TurnOffLoading")})),{options:Object(r["computed"])((function(){return h(o.state.taskParameters)})),isOptionsReady:Object(r["computed"])((function(){return o.state.taskParameters.taskTypes.length>0&&o.state.taskParameters.taskSources.length>0})),GetFormClass:m,HandleClickTableForm:f,HandleAddRows:p,HandleRemoveRows:y,HandleMoveRows:k,HandleEmptyCells:b,HandleModifyCells:D}}}),x=R,S=(a("b907"),a("2877")),E=Object(S["a"])(x,f,p,!1,null,null,null),L=E.exports,F=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"TaskDayTimelineTitle text-h5 font-weight-bold py-3 px-4",class:{active:!e.dayData.isLeave},on:{click:function(t){return e.HandleClickIsLeave(e.dayData)}}},[e.dayData.isLeave?a("v-icon",{staticClass:"icon"},[e._v("mdi-marker-cancel")]):a("v-icon",{staticClass:"icon"},[e._v("mdi-pencil")]),e._v(" "+e._s(e.FormatDate(e.dayData.date,"MM/DD"))+" "),a("SimpleTransition",{attrs:{mode:"out-in"}},[e.dayData.isLeave?a("div",{staticClass:"is-leave"},[a("v-checkbox",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{"input-value":"false",label:"Leave",disabled:!0,color:"blue lighten-5"}})],1):e._e()])],1)},_=[],U=a("6ebf"),N=a("5858"),$=Object(r["defineComponent"])({name:"TaskDayTimelineTitle",props:{user:{type:Object},dayData:{type:Object}},components:{SimpleTransition:U["a"]},setup:function(e,t){var a=t.emit,n=t.root,i=n.$store,s=(n.$router,n.$route,i),o=new v["b"](s);function l(t){var n;t.isLeave=!t.isLeave,o.UpdateIsLeave({ownerGuid:null===(n=e.user)||void 0===n?void 0:n.guid,date:t.date,isLeave:t.isLeave}),a("input")}var u=Object(r["computed"])((function(){var t;return null!==(t=e.dayData)&&void 0!==t&&t.isLeave?"accent":"primary"}));return{color:u,HandleClickIsLeave:l,FormatDate:N["a"]}}}),H=$,G=(a("0f83"),Object(S["a"])(H,F,_,!1,null,null,null)),I=G.exports,z=a("18a7"),M=a("f7fe"),P=a.n(M),K=Object(r["defineComponent"])({name:"TaskDayTimeline",props:{user:{type:Object},dateRange:{type:Object}},components:{TaskDayForm:L,TaskDayTimelineTitle:I,RippleTransitionFlip:z["a"],SimpleTransition:U["a"]},setup:function(e,t){var a=t.emit,n=t.root,i=n.$store,s=n.$router,o=(n.$route,i),l=s,u=new v["a"](o,l),c=new v["b"](o),d=new v["c"](o),f=Object(r["ref"])([]),p=Object(r["ref"])(!1);function y(e){f.value.forEach((function(e){return e.isFormClicked=!1})),e.isFormClicked=!0}Object(r["watch"])(p,(function(){p.value?o.commit("TurnOnLoading"):o.commit("TurnOffLoading")}));var k=function(e,t){var a=[],n={};return t.forEach((function(e){return n[e.date]=e})),e.forEach((function(e){var t={guid:"",date:e,isLeave:!1,isFormClicked:!1,formData:[]};a.push(Object(m["a"])(Object(m["a"])({},t),n[e]))})),a},D=Object(r["ref"])(!1);function b(){var t,a,n,i,r,s=Object(N["b"])(null===(t=e.dateRange)||void 0===t?void 0:t.startDate,null===(a=e.dateRange)||void 0===a?void 0:a.endDate);if(0!=s.length){var l={ownerGuid:null===(n=e.user)||void 0===n?void 0:n.guid,startDate:null===(i=e.dateRange)||void 0===i?void 0:i.startDate,endDate:null===(r=e.dateRange)||void 0===r?void 0:r.endDate};f.value=[],u.GetDaysData(l,p,(function(e){var t=e.data;t.forEach((function(e){return e.formData.forEach((function(t){t.date=e.date,t.taskSource=Object(j["d"])(o.state.taskParameters.taskSources,t.taskSource),t.taskType=Object(j["d"])(o.state.taskParameters.taskTypes,t.taskType)}))})),f.value=k(s,t),setTimeout((function(){return D.value=!0}),150)})),c.Unsubscribe(),c.Subscribe(l)}}function T(){a("updateDaysData",f.value)}return Object(r["watch"])((function(){return[e.user,e.dateRange]}),P()((function(){D.value=!1,b()}),500)),Object(r["watch"])((function(){return[f.value]}),(function(){return T()})),d.InitListener(f,T),{isLoading:p,isShowContent:D,daysData:f,HandleClickTableForm:y,EmitUpdateDaysData:T}}}),A=K,V=(a("9dd7"),Object(S["a"])(A,c,d,!1,null,"654b3ae3",null)),B=V.exports,J=a("de3a"),W=Object(r["defineComponent"])({name:"TaskEditor",props:{widthMetaDisplayer:{type:Number,default:300}},components:{Container:s["a"],TwoColumn:o["a"],MetaDisplayer:l["a"],TaskPeriodSimpleSummary:u["a"],TaskDayTimeline:B},setup:function(e,t){var a=t.refs,n=t.root,i=n.$store,s=n.$router,o=(n.$route,i),l=s,u=(new v["a"](o,l),new v["b"](o)),c=new J["a"](o,l),d=Object(r["ref"])([]),m=Object(r["computed"])((function(){return d.value[0]})),f=Object(r["ref"])({}),p=Object(r["ref"])([]),y=Object(r["ref"])(!1);function k(){c.GetTaskSources(y),c.GetTaskTypes(y),c.GetDayWorkLimitTime(y)}function D(e){p.value=e,a.summary.InitSummary()}return Object(r["watch"])(y,(function(){y.value?o.commit("TurnOnLoading"):o.commit("TurnOffLoading")})),k(),Object(r["onUnmounted"])((function(){u.Unsubscribe()})),{targetUser:m,targetUsers:d,targetDates:f,daysData:p,HandleUpdateDaysData:D}}}),q=W,Q=(a("f204"),Object(S["a"])(q,n,i,!1,null,null,null));t["default"]=Q.exports},"9dd7":function(e,t,a){"use strict";a("f3bf")},b907:function(e,t,a){"use strict";a("3289")},e523:function(e,t,a){},f204:function(e,t,a){"use strict";a("e523")},f3bf:function(e,t,a){}}]);
//# sourceMappingURL=chunk-da9561ba.6c15e9a6.js.map