(this.webpackJsonpreact_calendar=this.webpackJsonpreact_calendar||[]).push([[0],{15:function(e,t,c){},24:function(e,t,c){},30:function(e,t,c){},31:function(e,t,c){"use strict";c.r(t);var s=c(1),d=c.n(s),j=c(17),l=c.n(j),r=c(9),n=c(2),i=c(7);function a(){var e=!0,t=document.querySelectorAll('input[type="checkbox"]'),c=document.querySelector(".selectBox"),s=document.getElementById("checkBoxes");c.addEventListener("click",(function(){e?(s.style.display="block",s.style.zIndex="100",e=!1):(s.style.display="none",e=!0)}));var d=Array.prototype.slice.call(t),j=d.shift();j.addEventListener("click",(function(){if(j.checked){var e,c=Object(i.a)(t);try{for(c.s();!(e=c.n()).done;){e.value.checked=!0}}catch(l){c.e(l)}finally{c.f()}}else{var s,d=Object(i.a)(t);try{for(d.s();!(s=d.n()).done;){s.value.checked=!1}}catch(l){d.e(l)}finally{d.f()}}}));var l,r=Object(i.a)(d);try{for(r.s();!(l=r.n()).done;){l.value.addEventListener("click",(function(){var e,t=0,c=Object(i.a)(d);try{for(c.s();!(e=c.n()).done;){e.value.checked&&(t+=1)}}catch(s){c.e(s)}finally{c.f()}d.length===t&&!1===j.checked&&(j.checked=!0),d.length!==t&&j.checked&&(j.checked=!1)}))}}catch(n){r.e(n)}finally{r.f()}}c(15);var h=c(0);var b=function(){return Object(s.useEffect)(a,[]),Object(h.jsxs)("div",{className:"input-group mb-3",children:[Object(h.jsx)("label",{className:"input-group-text",htmlFor:"participants",children:"Participants"}),Object(h.jsxs)("div",{className:"multipleSelection",children:[Object(h.jsxs)("div",{className:"selectBox",children:[Object(h.jsx)("select",{className:"form-select",id:"participants",children:Object(h.jsx)("option",{defaultValue:!0,children:"Choose..."})}),Object(h.jsx)("div",{className:"overSelect"})]}),Object(h.jsxs)("div",{id:"checkBoxes",children:[Object(h.jsxs)("label",{htmlFor:"first",children:[Object(h.jsx)("input",{type:"checkbox",id:"first"}),"All members"]}),Object(h.jsxs)("label",{htmlFor:"second",children:[Object(h.jsx)("input",{type:"checkbox",id:"second"}),"Jhon"]}),Object(h.jsxs)("label",{htmlFor:"third",children:[Object(h.jsx)("input",{type:"checkbox",id:"third"}),"Mila"]}),Object(h.jsxs)("label",{htmlFor:"fourth",children:[Object(h.jsx)("input",{type:"checkbox",id:"fourth"}),"Sam"]}),Object(h.jsxs)("label",{htmlFor:"fifth",children:[Object(h.jsx)("input",{type:"checkbox",id:"fifth"}),"Molly"]}),Object(h.jsxs)("label",{htmlFor:"sixth",children:[Object(h.jsx)("input",{type:"checkbox",id:"sixth"}),"Garry"]}),Object(h.jsxs)("label",{htmlFor:"seventh",children:[Object(h.jsx)("input",{type:"checkbox",id:"seventh"}),"Liza"]}),Object(h.jsxs)("label",{htmlFor:"eighth",children:[Object(h.jsx)("input",{type:"checkbox",id:"eighth"}),"Mike"]})]})]})]})};c(24);var o=function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("p",{children:Object(h.jsx)("span",{className:"error-msg",children:"Failed to create an event. Time slot is already booked."})}),Object(h.jsx)("div",{className:"form-container",children:Object(h.jsxs)("form",{name:"eventForm",children:[Object(h.jsx)("input",{id:"name",className:"form-control text-field",type:"text",placeholder:"Name of the event",maxLength:"60"}),Object(h.jsx)(b,{}),Object(h.jsxs)("div",{className:"input-group mb-3",children:[Object(h.jsx)("label",{className:"input-group-text",htmlFor:"day",children:"Day"}),Object(h.jsxs)("select",{className:"form-select",id:"day",children:[Object(h.jsx)("option",{defaultValue:!0,children:"Choose..."}),Object(h.jsx)("option",{value:"Mon",children:"Monday"}),Object(h.jsx)("option",{value:"Tue",children:"Tuesday"}),Object(h.jsx)("option",{value:"Wed",children:"Wednesday"}),Object(h.jsx)("option",{value:"Thu",children:"Thursday"}),Object(h.jsx)("option",{value:"Fri",children:"Friday"})]})]}),Object(h.jsxs)("div",{className:"input-group mb-3",children:[Object(h.jsx)("label",{className:"input-group-text",htmlFor:"time",children:"Time"}),Object(h.jsxs)("select",{className:"form-select",id:"time",children:[Object(h.jsx)("option",{defaultValue:!0,children:"Choose..."}),Object(h.jsx)("option",{value:"10",children:"10-00"}),Object(h.jsx)("option",{value:"11",children:"11-00"}),Object(h.jsx)("option",{value:"12",children:"12-00"}),Object(h.jsx)("option",{value:"13",children:"13-00"}),Object(h.jsx)("option",{value:"14",children:"14-00"}),Object(h.jsx)("option",{value:"15",children:"15-00"}),Object(h.jsx)("option",{value:"16",children:"16-00"}),Object(h.jsx)("option",{value:"17",children:"17-00"}),Object(h.jsx)("option",{value:"18",children:"18-00"})]})]}),Object(h.jsxs)("div",{className:"submit-wrapper",children:[Object(h.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"}),Object(h.jsx)(r.b,{to:"/react_calendar",className:"btn btn-success",role:"button",children:"Cancel"})]})]})})]})};c(30);function x(){var e=!0,t=document.querySelectorAll('input[type="checkbox"]'),c=document.querySelector(".selectBox"),s=document.getElementById("checkBoxes");c.addEventListener("click",(function(){e?(s.style.display="block",s.style.zIndex="100",e=!1):(s.style.display="none",e=!0)}));var d=Array.prototype.slice.call(t),j=d.shift();j.addEventListener("click",(function(){if(j.checked){var e,c=Object(i.a)(t);try{for(c.s();!(e=c.n()).done;){e.value.checked=!0}}catch(l){c.e(l)}finally{c.f()}}else{var s,d=Object(i.a)(t);try{for(d.s();!(s=d.n()).done;){s.value.checked=!1}}catch(l){d.e(l)}finally{d.f()}}}));var l,r=Object(i.a)(d);try{for(r.s();!(l=r.n()).done;){l.value.addEventListener("click",(function(){var e,t=0,c=Object(i.a)(d);try{for(c.s();!(e=c.n()).done;){e.value.checked&&(t+=1)}}catch(s){c.e(s)}finally{c.f()}d.length===t&&!1===j.checked&&(j.checked=!0),d.length!==t&&j.checked&&(j.checked=!1)}))}}catch(n){r.e(n)}finally{r.f()}}var O=function(){return Object(s.useEffect)(x,[]),Object(h.jsxs)("div",{className:"multipleSelection",children:[Object(h.jsxs)("div",{className:"selectBox",children:[Object(h.jsx)("select",{className:"form-select",id:"participants",children:Object(h.jsx)("option",{defaultValue:!0,children:"Choose..."})}),Object(h.jsx)("div",{className:"overSelect"})]}),Object(h.jsxs)("div",{id:"checkBoxes",children:[Object(h.jsxs)("label",{htmlFor:"first",children:[Object(h.jsx)("input",{type:"checkbox",id:"first",defaultChecked:!0}),"All members"]}),Object(h.jsxs)("label",{htmlFor:"second",children:[Object(h.jsx)("input",{type:"checkbox",id:"second",defaultChecked:!0}),"Jhon"]}),Object(h.jsxs)("label",{htmlFor:"third",children:[Object(h.jsx)("input",{type:"checkbox",id:"third",defaultChecked:!0}),"Mila"]}),Object(h.jsxs)("label",{htmlFor:"fourth",children:[Object(h.jsx)("input",{type:"checkbox",id:"fourth",defaultChecked:!0}),"Sam"]}),Object(h.jsxs)("label",{htmlFor:"fifth",children:[Object(h.jsx)("input",{type:"checkbox",id:"fifth",defaultChecked:!0}),"Molly"]}),Object(h.jsxs)("label",{htmlFor:"sixth",children:[Object(h.jsx)("input",{type:"checkbox",id:"sixth",defaultChecked:!0}),"Garry"]}),Object(h.jsxs)("label",{htmlFor:"seventh",children:[Object(h.jsx)("input",{type:"checkbox",id:"seventh",defaultChecked:!0}),"Liza"]}),Object(h.jsxs)("label",{htmlFor:"eighth",children:[Object(h.jsx)("input",{type:"checkbox",id:"eighth",defaultChecked:!0}),"Mike"]})]})]})};function u(){return Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("nav",{className:"navbar navbar-light bg-light",children:Object(h.jsxs)("div",{className:"container-fluid",children:[Object(h.jsx)("span",{className:"navbar-brand mb-0 h1",children:"Calendar"}),Object(h.jsxs)("div",{className:"btn__group",children:[Object(h.jsxs)("div",{className:"input-group mb-3 select-names",children:[Object(h.jsx)("label",{className:"input-group-text",htmlFor:"participants",children:"Participants"}),Object(h.jsx)(O,{})]}),Object(h.jsx)(r.b,{to:"/react_calendar/create-event",className:"btn btn-success",role:"button",id:"new-event-btn",children:"New event +"})]})]})}),Object(h.jsxs)("table",{className:"table table-bordered text-center",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"Name"}),Object(h.jsx)("th",{id:"Mon",children:"Mon"}),Object(h.jsx)("th",{id:"Tue",children:"Tue"}),Object(h.jsx)("th",{id:"Wed",children:"Wed"}),Object(h.jsx)("th",{id:"Thu",children:"Thu"}),Object(h.jsx)("th",{id:"Fri",children:"Fri"})]})}),Object(h.jsxs)("tbody",{children:[Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{id:"10",children:"10:00"}),Object(h.jsx)("td",{headers:"Mon 10"}),Object(h.jsx)("td",{headers:"Tue 10"}),Object(h.jsx)("td",{headers:"Wed 10"}),Object(h.jsx)("td",{headers:"Thu 10"}),Object(h.jsx)("td",{headers:"Fri 10"})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{id:"11",children:"11:00"}),Object(h.jsx)("td",{headers:"Mon 11"}),Object(h.jsx)("td",{headers:"Tue 11"}),Object(h.jsx)("td",{headers:"Wed 11"}),Object(h.jsx)("td",{headers:"Thu 11"}),Object(h.jsx)("td",{headers:"Fri 11"})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{id:"12",children:"12:00"}),Object(h.jsx)("td",{headers:"Mon 12"}),Object(h.jsx)("td",{headers:"Tue 12"}),Object(h.jsx)("td",{headers:"Wed 12"}),Object(h.jsx)("td",{headers:"Thu 12"}),Object(h.jsx)("td",{headers:"Fri 12"})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{id:"13",children:"13:00"}),Object(h.jsx)("td",{headers:"Mon 13"}),Object(h.jsx)("td",{headers:"Tue 13"}),Object(h.jsx)("td",{headers:"Wed 13"}),Object(h.jsx)("td",{headers:"Thu 13"}),Object(h.jsx)("td",{headers:"Fri 13"})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{id:"14",children:"14:00"}),Object(h.jsx)("td",{headers:"Mon 14"}),Object(h.jsx)("td",{headers:"Tue 14"}),Object(h.jsx)("td",{headers:"Wed 14"}),Object(h.jsx)("td",{headers:"Thu 14"}),Object(h.jsx)("td",{headers:"Fri 14"})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{id:"15",children:"15:00"}),Object(h.jsx)("td",{headers:"Mon 15"}),Object(h.jsx)("td",{headers:"Tue 15"}),Object(h.jsx)("td",{headers:"Wed 15"}),Object(h.jsx)("td",{headers:"Thu 15"}),Object(h.jsx)("td",{headers:"Fri 15"})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{id:"16",children:"16:00"}),Object(h.jsx)("td",{headers:"Mon 16"}),Object(h.jsx)("td",{headers:"Tue 16"}),Object(h.jsx)("td",{headers:"Wed 16"}),Object(h.jsx)("td",{headers:"Thu 16"}),Object(h.jsx)("td",{headers:"Fri 16"})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{id:"17",children:"17:00"}),Object(h.jsx)("td",{headers:"Mon 17"}),Object(h.jsx)("td",{headers:"Tue 17"}),Object(h.jsx)("td",{headers:"Wed 17"}),Object(h.jsx)("td",{headers:"Thu 17"}),Object(h.jsx)("td",{headers:"Fri 17"})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{id:"18",children:"18:00"}),Object(h.jsx)("td",{headers:"Mon 18"}),Object(h.jsx)("td",{headers:"Tue 18"}),Object(h.jsx)("td",{headers:"Wed 18"}),Object(h.jsx)("td",{headers:"Thu 18"}),Object(h.jsx)("td",{headers:"Fri 18"})]})]})]})]})}var p=function(){return Object(h.jsx)(r.a,{children:Object(h.jsxs)(n.c,{children:[Object(h.jsx)(n.a,{exact:!0,path:"/react_calendar",children:Object(h.jsx)(u,{})}),Object(h.jsx)(n.a,{path:"/react_calendar/create-event",children:Object(h.jsx)(o,{})})]})})},m=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,32)).then((function(t){var c=t.getCLS,s=t.getFID,d=t.getFCP,j=t.getLCP,l=t.getTTFB;c(e),s(e),d(e),j(e),l(e)}))};l.a.render(Object(h.jsx)(d.a.StrictMode,{children:Object(h.jsx)(p,{})}),document.getElementById("root")),m()}},[[31,1,2]]]);
//# sourceMappingURL=main.a893b3d8.chunk.js.map