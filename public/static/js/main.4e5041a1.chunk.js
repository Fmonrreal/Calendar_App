(this["webpackJsonpcalendar-app"]=this["webpackJsonpcalendar-app"]||[]).push([[0],{123:function(e,t,n){},125:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(8),c=n.n(r),o=n(9),s=n(26),i=n(37),u=n(5),l=n(16),d=n.n(l),j={uiOpenModal:"[ui] Open modal",uiCloseModal:"[ui] Close modal",eventSetActive:"[event] Set Active",eventLogout:"[event] Logout event",eventStartAddNew:"[event] Start add new",eventAddNew:"[event] Add new",eventClearActiveEvent:"[event] Clear active event",eventUpdated:"[event] Event updated",eventDeleted:"[event] Event deleted",eventLoaded:"[event] Events loaded",authChekingFinish:"[auth] Finish checking login state",authStartLogin:"[auth] Start login",authLogin:"[auth] Login",authStartRegister:"[auth] Start Register",authStartStartTokenRenew:"[auth] Start token new",authLogout:"[auth] Logout"},b={events:[],activeEvent:null},v={modalOpen:!1},m={checking:!0},p=Object(s.b)({ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j.uiOpenModal:return Object(u.a)(Object(u.a)({},e),{},{modalOpen:!0});case j.uiCloseModal:return Object(u.a)(Object(u.a)({},e),{},{modalOpen:!1});default:return e}},calendar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j.eventSetActive:return Object(u.a)(Object(u.a)({},e),{},{activeEvent:t.payload});case j.eventAddNew:return Object(u.a)(Object(u.a)({},e),{},{events:[].concat(Object(i.a)(e.events),[t.payload])});case j.eventClearActiveEvent:return Object(u.a)(Object(u.a)({},e),{},{activeEvent:null});case j.eventUpdated:return Object(u.a)(Object(u.a)({},e),{},{events:e.events.map((function(e){return e.id===t.payload.id?t.payload:e}))});case j.eventDeleted:return Object(u.a)(Object(u.a)({},e),{},{events:e.events.filter((function(t){return t.id!==e.activeEvent.id})),activeEvent:null});case j.eventLoaded:case j.eventLoaded:return Object(u.a)(Object(u.a)({},e),{},{events:Object(i.a)(t.payload)});case j.eventLogout:return Object(u.a)({},b);default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j.authLogin:return Object(u.a)(Object(u.a)({},e),{},{checking:!1},t.payload);case j.authCheckingFinish:return Object(u.a)(Object(u.a)({},e),{},{checking:!1});case j.authLogout:return{checking:!1};default:return e}}}),O=n(63),f="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.c,h=Object(s.d)(p,f(Object(s.a)(O.a))),x=n(33),g=n(10),y=n(17),N=(n(77),n(25)),w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(a.useState)(e),n=Object(y.a)(t,2),r=n[0],c=n[1],o=function(){c(e)},s=function(e){var t=e.target;c(Object(u.a)(Object(u.a)({},r),{},Object(N.a)({},t.name,t.value)))};return[r,s,o]},k=n(12),E=n.n(k),S=n(21),C=n(18),A=n.n(C),D="https://mern-calendar-backend-fermon.herokuapp.com/api",L=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",a="".concat(D,"/").concat(e);return"GET"===n?fetch(a):fetch(a,{method:n,headers:{"Content-type":"application/json"},body:JSON.stringify(t)})},T=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",a="".concat(D,"/").concat(e),r=localStorage.getItem("token")||"";return"GET"===n?fetch(a,{method:n,headers:{"x-token":r}}):fetch(a,{method:n,headers:{"Content-type":"application/json","x-token":r},body:JSON.stringify(t)})},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.map((function(e){return Object(u.a)(Object(u.a)({},e),{},{end:d()(e.end).toDate(),start:d()(e.start).toDate()})}))},I=function(e){return{type:j.eventAddNew,payload:e}},M=function(){return{type:j.eventClearActiveEvent}},R=function(e){return{type:j.eventUpdated,payload:e}},_=function(){return{type:j.eventDeleted}},F=function(e){return{type:j.eventLoaded,payload:e}},G=function(){return{type:j.authCheckingFinish}},U=function(e){return{type:j.authLogin,payload:e}},V=function(){return function(e){localStorage.clear(),e({type:j.eventLogout}),e(H())}},H=function(){return{type:j.authLogout}},J=n(2),B=function(){var e=Object(o.b)(),t=w({lEmail:"email3@email.com",lPassword:"123456"}),n=Object(y.a)(t,3),a=n[0],r=n[1],c=(n[2],w({rName:"Nando",rEmail:"nando@email.com",rPassword1:"123456",rPassword2:"123456"})),s=Object(y.a)(c,2),i=s[0],u=s[1],l=a.lEmail,d=a.lPassword,j=i.rName,b=i.rEmail,v=i.rPassword1,m=i.rPassword2;return Object(J.jsx)("div",{className:"container login-container",children:Object(J.jsxs)("div",{className:"row",children:[Object(J.jsxs)("div",{className:"col-md-6 login-form-1",children:[Object(J.jsx)("h3",{children:"Ingreso"}),Object(J.jsxs)("form",{onSubmit:function(t){var n,a;t.preventDefault(),e((n=l,a=d,function(){var e=Object(S.a)(E.a.mark((function e(t){var r,c;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L("auth",{email:n,password:a},"POST");case 2:return r=e.sent,e.next=5,r.json();case 5:(c=e.sent).ok?(localStorage.setItem("token",c.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(U({uid:c.uid,name:c.name}))):A.a.fire("Error",c.msg,"error");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(J.jsx)("div",{className:"form-group",children:Object(J.jsx)("input",{type:"text",className:"form-control",placeholder:"Correo",name:"lEmail",value:l,onChange:r})}),Object(J.jsx)("div",{className:"form-group",children:Object(J.jsx)("input",{type:"password",className:"form-control",placeholder:"Contrase\xf1a",name:"lPassword",value:d,onChange:r})}),Object(J.jsx)("div",{className:"form-group",children:Object(J.jsx)("input",{type:"submit",className:"btnSubmit",value:"Login"})})]})]}),Object(J.jsxs)("div",{className:"col-md-6 login-form-2",children:[Object(J.jsx)("h3",{children:"Registro"}),Object(J.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),v!==m)return A.a.fire("Error","Las contrase\xf1as deben de ser iguales","error");var n,a,r;e((n=b,a=v,r=j,function(){var e=Object(S.a)(E.a.mark((function e(t){var c,o;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L("auth/new",{email:n,password:a,name:r},"POST");case 2:return c=e.sent,e.next=5,c.json();case 5:(o=e.sent).ok?(localStorage.setItem("token",o.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(U({uid:o.uid,name:o.name}))):A.a.fire("Error",o.msg,"error");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(J.jsx)("div",{className:"form-group",children:Object(J.jsx)("input",{type:"text",className:"form-control",placeholder:"Nombre",name:"rName",value:j,onChange:u})}),Object(J.jsx)("div",{className:"form-group",children:Object(J.jsx)("input",{type:"email",className:"form-control",placeholder:"Correo",name:"rEmail",value:b,onChange:u})}),Object(J.jsx)("div",{className:"form-group",children:Object(J.jsx)("input",{type:"password",className:"form-control",placeholder:"Contrase\xf1a",name:"rPassword1",value:v,onChange:u})}),Object(J.jsx)("div",{className:"form-group",children:Object(J.jsx)("input",{type:"password",className:"form-control",placeholder:"Repita la contrase\xf1a",name:"rPassword2",value:m,onChange:u})}),Object(J.jsx)("div",{className:"form-group",children:Object(J.jsx)("input",{type:"submit",className:"btnSubmit",value:"Crear cuenta"})})]})]})]})})},X=n(51),q=function(){var e=Object(o.c)((function(e){return e.auth})).name,t=Object(o.b)();return Object(J.jsxs)("div",{className:"navbar navbar-dark bg-dark mb-4",children:[Object(J.jsx)("span",{className:"navbar-brand",children:e}),Object(J.jsxs)("button",{className:"btn btn-outline-danger",onClick:function(){t(V())},children:[Object(J.jsx)("i",{className:"fas fa-sign-out-alt"}),Object(J.jsx)("span",{children:" Salir"})]})]})},z={allDay:"Todo el d\xeda",previous:"<",next:">",today:"Hoy",month:"Mes",week:"Semana",day:"D\xeda",agenda:"Agenda",date:"Fecha",time:"Hora",event:"Evento",noEventsInRange:"No hay eventos en este rango",showMore:function(e){return"+ Ver m\xe1s (".concat(e,")")}},K=function(e){var t=e.event,n=t.title,a=t.user;return Object(J.jsxs)("div",{children:[Object(J.jsx)("span",{children:n}),Object(J.jsxs)("strong",{children:["-",a.name]})]})},Q=n(47),W=n.n(Q),Y=n(48),Z=n.n(Y),$=function(){return{type:j.uiOpenModal}},ee={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}};W.a.setAppElement("#root");var te=d()().minutes(0).seconds(0).add(1,"hours"),ne=te.clone().add(1,"hours"),ae={title:"",notes:"",start:te.toDate(),end:ne.toDate()},re=function(){var e=Object(o.c)((function(e){return e.ui})).modalOpen,t=Object(o.c)((function(e){return e.calendar})).activeEvent,n=Object(o.b)(),r=Object(a.useState)(te.toDate()),c=Object(y.a)(r,2),s=c[0],i=c[1],l=Object(a.useState)(ne.toDate()),b=Object(y.a)(l,2),v=b[0],m=b[1],p=Object(a.useState)(!0),O=Object(y.a)(p,2),f=O[0],h=O[1],x=Object(a.useState)(ae),g=Object(y.a)(x,2),w=g[0],k=g[1],C=w.notes,D=w.title,L=w.start,P=w.end;Object(a.useEffect)((function(){k(t||ae)}),[t,k]);var _=function(e){var t=e.target;k(Object(u.a)(Object(u.a)({},w),{},Object(N.a)({},t.name,t.value)))},F=function(){n({type:j.uiCloseModal}),n(M()),k(ae)};return Object(J.jsxs)(W.a,{isOpen:e,onRequestClose:F,style:ee,closeTimeoutMS:200,className:"modal",overlayClassName:"modal-fondo",children:[Object(J.jsx)("h1",{children:t?"Editar evento":"Nuevo evento"}),Object(J.jsx)("hr",{}),Object(J.jsxs)("form",{className:"container",onSubmit:function(e){e.preventDefault();var a,r=d()(L),c=d()(P);return r.isSameOrAfter(c)?A.a.fire("Error","La fecha fin debe de ser mayor a la fecha de inicio","error"):D.trim().length<2?h(!1):(n(t?(a=w,function(){var e=Object(S.a)(E.a.mark((function e(t){var n,r;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log(a),n=T("events/".concat(a.id),a,"PUT"),e.next=5,n;case 5:return e.next=7,e.sent.json();case 7:(r=e.sent).ok?t(R(a)):A.a.fire("Error",r.msg,"error"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}()):function(e){return function(){var t=Object(S.a)(E.a.mark((function t(n,a){var r,c,o,s,i;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a().auth,c=r.uid,o=r.name,t.prev=1,t.next=4,T("events",e,"POST");case 4:return s=t.sent,t.next=7,s.json();case 7:(i=t.sent).ok&&(e.id=i.evento.id,e.user={_id:c,name:o},console.log(e),n(I(e))),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e,n){return t.apply(this,arguments)}}()}(w)),h(!0),void F())},children:[Object(J.jsxs)("div",{className:"form-group",children:[Object(J.jsx)("label",{children:"Fecha y hora inicio"}),Object(J.jsx)(Z.a,{onChange:function(e){i(e),k(Object(u.a)(Object(u.a)({},w),{},{start:e}))},value:s,className:"form-control"})]}),Object(J.jsxs)("div",{className:"form-group",children:[Object(J.jsx)("label",{children:"Fecha y hora fin"}),Object(J.jsx)(Z.a,{onChange:function(e){m(e),k(Object(u.a)(Object(u.a)({},w),{},{end:e}))},value:v,minDate:s,className:"form-control"})]}),Object(J.jsx)("hr",{}),Object(J.jsxs)("div",{className:"form-group",children:[Object(J.jsx)("label",{children:"Titulo y notas"}),Object(J.jsx)("input",{type:"text",className:"form-control ".concat(!f&&"is-invalid"),placeholder:"T\xedtulo del evento",name:"title",autoComplete:"off",value:D,onChange:_}),Object(J.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"Una descripci\xf3n corta"})]}),Object(J.jsxs)("div",{className:"form-group",children:[Object(J.jsx)("textarea",{type:"text",className:"form-control",placeholder:"Notas",rows:"5",name:"notes",value:C,onChange:_}),Object(J.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"Informaci\xf3n adicional"})]}),Object(J.jsxs)("button",{type:"submit",className:"btn btn-outline-primary btn-block",children:[Object(J.jsx)("i",{className:"far fa-save"}),Object(J.jsx)("span",{children:" Guardar"})]})]})]})},ce=(n(118),n(119),function(){var e=Object(o.b)();return Object(J.jsx)("button",{className:"btn btn-primary fab",onClick:function(){e($())},children:Object(J.jsx)("i",{className:"fas fa-plus"})})}),oe=function(){var e=Object(o.b)();return Object(J.jsxs)("button",{className:"btn btn-danger fab-danger",onClick:function(){e(function(){var e=Object(S.a)(E.a.mark((function e(t,n){var a,r,c;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n().calendar.activeEvent.id,console.log(a),e.prev=2,r=T("events/".concat(a),{},"DELETE"),e.next=6,r;case 6:return e.next=8,e.sent.json();case 8:(c=e.sent).ok?t(_()):A.a.fire("Error",c.msg,"error"),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(t,n){return e.apply(this,arguments)}}())},children:[Object(J.jsx)("i",{className:"fas fa-trash"}),Object(J.jsx)("span",{children:"Borrar evento"})]})};d.a.locale("es");var se=Object(X.b)(d.a),ie=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.calendar})),n=t.events,r=t.activeEvent,c=Object(o.c)((function(e){return e.auth})).uid,s=Object(a.useState)(localStorage.getItem("lastView")||"month"),i=Object(y.a)(s,2),u=i[0],l=i[1];Object(a.useEffect)((function(){e(function(){var e=Object(S.a)(E.a.mark((function e(t){var n,a,r;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T("events");case 3:return n=e.sent,e.next=6,n.json();case 6:a=e.sent,r=P(a.eventos),t(F(r)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}())}),[e]);return Object(J.jsxs)("div",{className:"calendar-screen",children:[Object(J.jsx)(q,{}),Object(J.jsx)(X.a,{localizer:se,events:n,startAccessor:"start",endAccessor:"end",messages:z,eventPropGetter:function(e,t,n,a){return{style:{backgroundColor:c===e.user._id?"#367CF7":"#465660",borderRadius:"0px",opacity:.8,display:"block",color:"white"}}},onDoubleClickEvent:function(t){e($())},onSelectEvent:function(t){e({type:j.eventSetActive,payload:t})},onView:function(e){l(e),localStorage.setItem("lastView",e)},view:u,onSelectSlot:function(t){e(M())},selectable:!0,components:{event:K}}),Object(J.jsx)(ce,{}),r&&Object(J.jsx)(oe,{}),Object(J.jsx)(re,{})]})},ue=n(36),le=["isAuthenticated","component"],de=function(e){var t=e.isAuthenticated,n=e.component,a=Object(ue.a)(e,le);return Object(J.jsx)(g.b,Object(u.a)(Object(u.a)({},a),{},{component:function(e){return t?Object(J.jsx)(g.a,{to:"/"}):Object(J.jsx)(n,Object(u.a)({},e))}}))},je=["isAuthenticated","component"],be=function(e){var t=e.isAuthenticated,n=e.component,a=Object(ue.a)(e,je);return Object(J.jsx)(g.b,Object(u.a)(Object(u.a)({},a),{},{component:function(e){return t?Object(J.jsx)(n,Object(u.a)({},e)):Object(J.jsx)(g.a,{to:"/login"})}}))},ve=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.auth})),n=(t.checking,t.uid);return Object(a.useEffect)((function(){e(function(){var e=Object(S.a)(E.a.mark((function e(t){var n,a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T("auth/renew");case 2:return n=e.sent,e.next=5,n.json();case 5:(a=e.sent).ok?(localStorage.setItem("token",a.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(U({uid:a.uid,name:a.name}))):(A.a.fire("Error",a.msg,"error"),t(G));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),Object(J.jsx)(x.a,{children:Object(J.jsxs)(g.d,{children:[Object(J.jsx)(de,{exact:!0,path:"/login",component:B,isAuthenticated:!!n}),Object(J.jsx)(be,{exact:!0,path:"/",component:ie,isAuthenticated:!!n}),Object(J.jsx)(g.a,{to:"/"})]})})},me=function(){return Object(J.jsx)(o.a,{store:h,children:Object(J.jsx)(ve,{})})};n(123);c.a.render(Object(J.jsx)(me,{}),document.getElementById("root"))},77:function(e,t,n){}},[[125,1,2]]]);
//# sourceMappingURL=main.4e5041a1.chunk.js.map