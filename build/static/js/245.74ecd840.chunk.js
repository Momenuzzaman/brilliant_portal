(this.webpackJsonpdesk_client=this.webpackJsonpdesk_client||[]).push([[245],{253:function(e,a,t){"use strict";var n=t(0),c=t.n(n),l=t(94);a.a=function(e){var a=e.className,t=e.icon,n=e.color,r=(e.permission,e.type),s=(e.url,e.func),i=e.name,m=e.disable;return c.a.createElement(c.a.Fragment,null,c.a.createElement(l.a,{onClick:s,color:n,type:r,className:a,disabled:m}," ",t,i," "))}},344:function(e,a,t){"use strict";var n=t(0),c=t.n(n),l=t(33),r=t(94);a.a=function(e){var a=e.url,t=e.color,n=e.className,s=e.icon,i=(e.permission,e.name),m=e.func,o=e.target,u=e.activeStyle;return c.a.createElement(c.a.Fragment,null,c.a.createElement(l.a,{to:a,activeStyle:u,target:o},c.a.createElement(r.a,{color:t,className:n,onClick:m},s," ",i)))}},350:function(e,a,t){"use strict";var n=t(0),c=t.n(n),l=t(347),r=t(270);a.a=function(e){var a,t,n,s,i=e.dataPerPage,m=e.totalData,o=e.paginate,u=e.currentPage,p=Math.ceil(m/i),E=u-5,d=u+4;E<=0&&(d-=E-1,E=1),d>p&&(d=p)>10&&(E=d-9),a=u,t=p;for(var b=[],f=(s=d,n=E,n);f<=s;f++)b.push(f);return c.a.createElement(l.a,null,c.a.createElement(r.a,{md:"6"},c.a.createElement("nav",{className:"page navigation uapp-pagination"},c.a.createElement("ul",{className:"pagination ml-2"},a>1&&c.a.createElement(c.a.Fragment,null,c.a.createElement("li",{className:"pagination-item pagination-First"},c.a.createElement("p",{style:{cursor:"pointer"},onClick:function(){return o(1)},className:"page-link"},"First")),c.a.createElement("li",{className:"pagination-item"},c.a.createElement("p",{style:{cursor:"pointer"},onClick:function(){return o(a-1)},className:"page-link"},c.a.createElement("i",{className:"fas fa-chevron-left"})))),b.map((function(e){return a==e?c.a.createElement("li",{key:e,className:"pagination-item "},c.a.createElement("p",{style:{cursor:"pointer"},onClick:function(){return o(e)},className:"page-link page-active"},e)):c.a.createElement("li",{key:e,className:"pagination-item"},c.a.createElement("p",{style:{cursor:"pointer"},onClick:function(){return o(e)},className:"page-link"},e))})),a<t&&c.a.createElement(c.a.Fragment,null,c.a.createElement("li",{className:"pagination-item"},c.a.createElement("p",{style:{cursor:"pointer"},onClick:function(){return o(a+1)},className:"page-link"},c.a.createElement("i",{className:"fas fa-chevron-right"}))),c.a.createElement("li",{className:"pagination-item pagination-Last"},c.a.createElement("p",{style:{cursor:"pointer"},onClick:function(){return o(t)},className:"page-link"},"Last")))))),c.a.createElement(r.a,{md:"6",style:{textAlign:"right",marginTop:"1.5%",paddingRight:"2.5%"}},c.a.createElement("h5",null,"Total Results Found: ",m)))}},884:function(e,a,t){"use strict";t.r(a);var n=t(30),c=t(0),l=t.n(c),r=t(27),s=t(304),i=t(266),m=t(261),o=t(347),u=t(270),p=t(766),E=t(358),d=(t(350),t(34)),b=t(258),f=(t(715),t(101)),g=t(293),N=t(344),h=t(253);a.default=Object(r.b)((function(e){return{employeeTypeList:e.employeeTypeDataReducer.employeeType}}))((function(e){var a=Object(d.g)(),t=Object(c.useState)([]),r=Object(n.a)(t,2),O=(r[0],r[1],Object(c.useState)(1)),y=Object(n.a)(O,2),j=(y[0],y[1],Object(c.useState)("Select Employee Type...")),v=Object(n.a)(j,2),k=(v[0],v[1]),S=Object(c.useState)(0),x=Object(n.a)(S,2),T=(x[0],x[1],Object(c.useState)("")),C=Object(n.a)(T,2),w=(C[0],C[1],Object(c.useState)(15)),F=Object(n.a)(w,2),I=(F[0],F[1],Object(c.useState)(0)),L=Object(n.a)(I,2),M=(L[0],L[1],Object(c.useState)(!1)),A=Object(n.a)(M,2),D=(A[0],A[1],Object(c.useState)(1)),P=Object(n.a)(D,2),R=P[0],J=(P[1],Object(c.useState)(!1)),_=Object(n.a)(J,2),B=_[0],G=(_[1],Object(c.useState)(!1)),q=Object(n.a)(G,2),z=(q[0],q[1],e.employeeTypeList[0]),H=Object(d.h)(),K=Object(b.useToasts)().addToast,Q=Object(c.useState)([]),U=Object(n.a)(Q,2),V=U[0],W=U[1];Object(c.useEffect)((function(){void 0!=H.id&&(localStorage.setItem("locationId",H.id),k(H.name))}),[]);[10,15,20,30,50,100,3e3].map((function(e){return{label:e,value:e}})),null===z||void 0===z||z.map((function(e){return{label:e.name,value:e.id}}));Object(c.useEffect)((function(){Object(f.a)("MenuItem/Index").then((function(e){W(e)}))}),[]);return l.a.createElement("div",null,l.a.createElement(s.a,{className:"uapp-card-bg"},l.a.createElement(i.a,{className:"page-header"},l.a.createElement("h3",{className:"text-white"},"Menu List"),l.a.createElement("div",{className:"page-header-back-to-home"},l.a.createElement("span",{onClick:function(){a.push("/")},className:"text-white"}," ",l.a.createElement("i",{className:"fas fa-arrow-circle-left"})," Back to Dashboard")))),l.a.createElement(s.a,null,l.a.createElement(m.a,null,l.a.createElement(o.a,{className:"mb-3"},l.a.createElement(u.a,{lg:"6",md:"5",sm:"6",xs:"4"},l.a.createElement(h.a,{func:function(){a.push("/addMenu")},className:"btn btn-uapp-add ",icon:l.a.createElement("i",{className:"fas fa-plus"}),name:" Add Menu",permission:6}))),B?l.a.createElement("h2",{className:"text-center"},"Loading..."):l.a.createElement("div",{className:"table-responsive"},l.a.createElement(p.a,{className:"table-sm table-bordered"},l.a.createElement("thead",{className:"thead-uapp-bg"},l.a.createElement("tr",{style:{textAlign:"center"}},l.a.createElement("th",null,"SL/NO"),l.a.createElement("th",null,"Title"),l.a.createElement("th",null,"Icon"),l.a.createElement("th",null,"Type"),l.a.createElement("th",null,"Display Order"),l.a.createElement("th",{className:"text-center"},"Action"))),l.a.createElement("tbody",null,null===V||void 0===V?void 0:V.map((function(e,a){return l.a.createElement("tr",{key:e.id,style:{textAlign:"center"}},l.a.createElement("th",{scope:"row"},R+a),l.a.createElement("td",null,e.title),l.a.createElement("td",null,e.icon),l.a.createElement("td",null,e.type),l.a.createElement("td",null,e.displayOrder),l.a.createElement("td",{className:"text-center"},l.a.createElement(E.a,{variant:"text"},l.a.createElement(h.a,{color:"danger",func:function(){return a=e.id,void Object(g.a)("MenuItem/Delete/".concat(a)).then((function(e){K(e,{appearance:"Employee has been created successfully!"==e?"success":"error"});var t=V.filter((function(e){return e.id!=a}));W(t)}));var a},className:"mr-2 btn-sm",icon:l.a.createElement("i",{className:"fas fa-trash-alt"}),permission:6}),l.a.createElement(N.a,{url:"/employeeGeneralInfo/",color:"warning",className:" btn-sm",icon:l.a.createElement("i",{className:"fas fa-edit"})}))))}))))))))}))}}]);
//# sourceMappingURL=245.74ecd840.chunk.js.map