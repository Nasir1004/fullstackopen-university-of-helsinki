(this.webpackJsonpnotes=this.webpackJsonpnotes||[]).push([[0],{16:function(e,t,n){e.exports=n(41)},40:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(14),c=n.n(o),u=n(2),l=n.n(u),i=n(15),s=n(3),m=function(e){var t=e.note,n=e.toggleImportance,a=t.important?"make not important":"make important";return r.a.createElement("li",{className:"note"},t.content,r.a.createElement("button",{onClick:n},a))},p=function(e){var t=e.message;return null===t?null:r.a.createElement("div",{className:"error"},t)},f=n(4),d=n.n(f),v="http://localhost:3001/api/notes",b=null,g=function(){var e=d.a.get(v),t={id:1e4,content:"This note is not saved to server",date:"2019-05-30T17:30:31.098Z",important:!0};return e.then((function(e){return e.data.concat(t)}))},h=function(e){var t,n;return l.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return t={headers:{Authorization:b}},a.next=3,l.a.awrap(d.a.post(v,e,t));case 3:return n=a.sent,a.abrupt("return",n.data);case 5:case"end":return a.stop()}}))},E=function(e,t){return d.a.put("".concat(v,"/").concat(e),t).then((function(e){return e.data}))},w=function(e){b="bearer ".concat(e)},O=function(e){var t;return l.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l.a.awrap(d.a.post("http://localhost:3001/api/login",e));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}))},j=function(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)(""),u=Object(s.a)(c,2),f=u[0],d=u[1],v=Object(a.useState)(!0),b=Object(s.a)(v,2),j=b[0],S=b[1],y=Object(a.useState)(null),k=Object(s.a)(y,2),x=k[0],N=k[1],I=Object(a.useState)(""),C=Object(s.a)(I,2),D=C[0],J=C[1],T=Object(a.useState)(""),U=Object(s.a)(T,2),z=U[0],A=U[1],B=Object(a.useState)(null),M=Object(s.a)(B,2),P=M[0],W=M[1];Object(a.useEffect)((function(){g().then((function(e){o(e)}))}),[]),Object(a.useEffect)((function(){var e=window.localStorage.getItem("loggedNoteappUser");if(e){var t=JSON.parse(e);W(t),w(t.token)}}),[]);var Z=function(e){e.preventDefault();var t={content:f,date:(new Date).toISOString(),important:Math.random()>.5,id:n.length+1};h(t).then((function(e){o(n.concat(e)),d("")}))},q=function(e){d(e.target.value)},F=function(e){var t;return l.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return e.preventDefault(),n.prev=1,n.next=4,l.a.awrap(O({username:D,password:z}));case 4:t=n.sent,window.localStorage.setItem("loggedNoteappUser",JSON.stringify(t)),w(t.token),W(t),J(""),A(""),n.next=16;break;case 12:n.prev=12,n.t0=n.catch(1),N("Wrong credentials"),setTimeout((function(){N(null)}),5e3);case 16:case"end":return n.stop()}}),null,null,[[1,12]])},G=j?n:n.filter((function(e){return e.important}));return r.a.createElement("div",null,r.a.createElement("h1",null,"Notes"),r.a.createElement(p,{message:x}),null===P?r.a.createElement("form",{onSubmit:F},r.a.createElement("div",null,"username",r.a.createElement("input",{type:"text",value:D,name:"Username",onChange:function(e){var t=e.target;return J(t.value)}})),r.a.createElement("div",null,"password",r.a.createElement("input",{type:"password",value:z,name:"Password",onChange:function(e){var t=e.target;return A(t.value)}})),r.a.createElement("button",{type:"submit"},"login")):r.a.createElement("div",null,r.a.createElement("p",null,P.username," logged-in "," ",r.a.createElement("button",{type:"submit",onClick:function(e){e.preventDefault(),window.localStorage.removeItem("loggedNoteappUser")}},"logout")),r.a.createElement("form",{onSubmit:Z},r.a.createElement("input",{value:f,onChange:q}),r.a.createElement("button",{type:"submit"},"save"))),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return S(!j)}},"show ",j?"important":"all")),r.a.createElement("ul",null,G.map((function(e,t){return r.a.createElement(m,{key:t,note:e,toggleImportance:function(){return function(e){"http://localhost:3001/notes/".concat(e);var t=n.find((function(t){return t.id===e})),a=Object(i.a)({},t,{important:!t.important});E(e,a).then((function(t){o(n.map((function(n){return n.id!==e?n:t})))})).catch((function(e){N("Note '".concat(t.content,"' was already removed from server")),setTimeout((function(){N(null)}),5e3)}))}(e.id)}})}))))};n(40);c.a.render(r.a.createElement(j,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.780c2e68.chunk.js.map