(this["webpackJsonpbloglist-frontend"]=this["webpackJsonpbloglist-frontend"]||[]).push([[0],{16:function(e,t,n){e.exports=n(39)},39:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),u=n(15),c=n.n(u),l=n(2),o=n.n(l),s=n(4),i=n(3),p=function(e){var t=e.blog;return r.a.createElement("div",null,t.title," ",t.author)},f=n(5),m=n.n(f),b=function(){return m.a.get("/api/blogs").then((function(e){return e.data}))},v={login:function(){var e=Object(s.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.post("/api/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},d=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],u=t[1],c=Object(a.useState)(null),l=Object(i.a)(c,2),f=(l[0],l[1]),m=Object(a.useState)(""),d=Object(i.a)(m,2),g=d[0],E=d[1],h=Object(a.useState)(""),j=Object(i.a)(h,2),O=j[0],w=j[1],x=Object(a.useState)(null),y=Object(i.a)(x,2),k=y[0],S=y[1];Object(a.useEffect)((function(){b().then((function(e){return u(e)}))}),[]);var C=function(){var e=Object(s.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,v.login({username:g,password:O});case 4:n=e.sent,S(n),E(""),w(""),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(1),f("wrong credentials"),setTimeout((function(){f(null)}),5e3);case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",null,null===k?r.a.createElement("form",{onSubmit:C},r.a.createElement("div",null,"username",r.a.createElement("input",{type:"text",value:g,name:"Username",onChange:function(e){var t=e.target;return E(t.value)}})),r.a.createElement("div",null,"password",r.a.createElement("input",{type:"password",value:O,name:"Password",onChange:function(e){var t=e.target;return w(t.value)}})),r.a.createElement("button",{type:"submit"},"login")):r.a.createElement("div",null,r.a.createElement("p",null,k.name," logged-in")),r.a.createElement("h2",null,"Notes"),n.map((function(e){return r.a.createElement(p,{key:e.id,blog:e})})))};c.a.render(r.a.createElement(d,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.ae2816a4.chunk.js.map