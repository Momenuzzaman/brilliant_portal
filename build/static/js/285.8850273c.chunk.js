(this.webpackJsonpdesk_client=this.webpackJsonpdesk_client||[]).push([[285],{249:function(e,t,a){"use strict";var n=a(0),c=a.n(n),l=a(97);t.a=function(e){var t=e.className,a=e.icon,n=e.color,o=(e.permission,e.type),i=(e.url,e.func),u=e.name,s=e.disable;return c.a.createElement(c.a.Fragment,null,c.a.createElement(l.a,{onClick:i,color:n,type:o,className:t,disabled:s}," ",a,u," "))}},856:function(e,t,a){"use strict";a.r(t);var n=a(31),c=a(19),l=a(0),o=a.n(l),i=a(266),u=a(292),s=a(260),r=a(255),m=a(307),d=a(309),p=a(310),b=a(317),v=a(320),E=a(268),j=a(256),f=a(265),h=a(263),S=a(765),O=a(333),y=a(300),N=a(299),g=a(301),D=a(97),I=a(3),x=a.n(I),k=a(29),w=a(37),G=a(253),C=a(249),T=a(99),q=a(290),A=a(36);t.default=function(){var e=Object(l.useState)("5"),t=Object(c.a)(e,2),a=t[0],I=t[1],R=Object(l.useState)([]),P=Object(c.a)(R,2),L=P[0],U=P[1],F=Object(l.useState)("Select Document Group"),B=Object(c.a)(F,2),z=B[0],H=B[1],J=Object(l.useState)(0),K=Object(c.a)(J,2),Y=K[0],_=K[1],M=Object(l.useState)(!1),Q=Object(c.a)(M,2),V=Q[0],W=Q[1],X=Object(l.useState)([]),Z=Object(c.a)(X,2),$=Z[0],ee=Z[1],te=Object(l.useState)("Select Application type"),ae=Object(c.a)(te,2),ne=ae[0],ce=ae[1],le=Object(l.useState)(0),oe=Object(c.a)(le,2),ie=oe[0],ue=oe[1],se=Object(l.useState)(!1),re=Object(c.a)(se,2),me=re[0],de=re[1],pe=Object(l.useState)([]),be=Object(c.a)(pe,2),ve=be[0],Ee=be[1],je=Object(l.useState)(!1),fe=Object(c.a)(je,2),he=fe[0],Se=fe[1],Oe=Object(l.useState)(0),ye=Object(c.a)(Oe,2),Ne=ye[0],ge=ye[1],De=Object(l.useState)(!1),Ie=Object(c.a)(De,2),xe=Ie[0],ke=Ie[1],we=Object(l.useState)(0),Ge=Object(c.a)(we,2),Ce=Ge[0],Te=Ge[1],qe=Object(l.useState)(""),Ae=Object(c.a)(qe,2),Re=Ae[0],Pe=Ae[1],Le=Object(l.useState)(!1),Ue=Object(c.a)(Le,2),Fe=Ue[0],Be=Ue[1],ze=Object(l.useState)(!1),He=Object(c.a)(ze,2),Je=He[0],Ke=He[1],Ye=Object(w.i)().id,_e=Object(w.h)();Object(l.useEffect)((function(){Object(T.a)("DocumentGroupDD/Index").then((function(e){console.log(e,"response"),U(e)})),Object(T.a)("ApplicationTypeDD/Index").then((function(e){console.log(e,"response"),ee(e)})),Object(T.a)("SubjectDocumentRequirement/GetBySubject/".concat(Ye)).then((function(e){console.log(e,"ssxcsxs"),Ee(e)}))}),[Ye,he]);var Me=L.map((function(e){return{label:null===e||void 0===e?void 0:e.name,value:null===e||void 0===e?void 0:e.id}})),Qe=$.map((function(e){return{label:null===e||void 0===e?void 0:e.name,value:null===e||void 0===e?void 0:e.id}})),Ve=Object(w.g)(),We=Object(G.useToasts)().addToast,Xe=function(e){I(e),"1"==e&&Ve.push({pathname:"/addSubject/".concat(Ye),subjectId:_e.subjectId}),"2"==e&&Ve.push({pathname:"/addSubjectFee/".concat(Ye),subjectId:_e.subjectId}),"3"==e&&Ve.push({pathname:"/addSubjectDeliveryPattern/".concat(Ye),subjectId:_e.subjectId}),"4"==e&&Ve.push({pathname:"/addSubjectRequirements/".concat(Ye),subjectId:_e.subjectId}),"5"==e&&Ve.push({pathname:"/addSubjectDocumentRequirement/".concat(Ye),subjectId:_e.subjectId})},Ze=localStorage.getItem("token"),$e=function(){ke(!1),Pe(""),Te(0)};return o.a.createElement("div",null,o.a.createElement(u.a,{className:"uapp-card-bg"},o.a.createElement(s.a,{className:"page-header"},o.a.createElement("h3",{className:"text-white"},"Subject Document Requirement"),o.a.createElement("div",{className:"page-header-back-to-home"},o.a.createElement("span",{onClick:function(){void 0!=_e.subjectId?Ve.push("/subjectProfile/".concat(_e.subjectId)):Ve.push("/subjectList")},className:"text-white"}," ",o.a.createElement("i",{className:"fas fa-arrow-circle-left"})," ",void 0!=_e.subjectId?"Back to Subject Profile":"Back to Subject List")))),o.a.createElement(u.a,null,o.a.createElement(r.a,null,o.a.createElement(m.a,{tabs:!0},o.a.createElement(d.a,null,o.a.createElement(p.a,{active:"1"===a,onClick:function(){return Xe("1")}},"Subject Information")),o.a.createElement(d.a,null,o.a.createElement(p.a,{active:"2"===a,onClick:function(){return Xe("2")}},"Subject Fee Information")),o.a.createElement(d.a,null,o.a.createElement(p.a,{active:"3"===a,onClick:function(){return Xe("3")}},"Delivery Pattern")),o.a.createElement(d.a,null,o.a.createElement(p.a,{active:"4"===a,onClick:function(){return Xe("4")}},"Requirement")),o.a.createElement(d.a,null,o.a.createElement(p.a,{active:"5"===a,onClick:function(){return Xe("5")}},"Document Requirement"))),o.a.createElement(b.a,{activeTab:a},o.a.createElement(v.a,{tabId:"5"},o.a.createElement("div",{className:"row mt-5"},o.a.createElement("div",{className:"col-6"},o.a.createElement("div",{className:"hedding-titel d-flex justify-content-between mb-2"},o.a.createElement("div",null,o.a.createElement("h5",null," ",o.a.createElement("b",null,"Document Required")," "),o.a.createElement("div",{className:"bg-h"}))),o.a.createElement(E.a,{onSubmit:function(e){e.preventDefault();var t,a=new FormData(e.target),c=Object(n.a)(a);try{for(c.s();!(t=c.n()).done;){var l=t.value;console.log("values",l)}}catch(o){c.e(o)}finally{c.f()}0===Y?W(!0):0===ie?de(!0):0!=Ne?(Be(!0),x.a.put("".concat(k.a,"SubjectDocumentRequirement/Update"),a,{headers:{"Content-Type":"application/json",authorization:Ze}}).then((function(e){var t,a;(Be(!1),200===e.status&&!0===e.data.isSuccess)?(We(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.message,{appearance:"success",autoDismiss:!0}),Se(!he),H("Select Document Group"),_(0),ce("Select Application type"),ue(0),ge(0)):(We(null===e||void 0===e||null===(a=e.data)||void 0===a?void 0:a.message,{appearance:"success",autoDismiss:!0}),H("Select Document Group"),_(0),ce("Select Application type"),ue(0),ge(0))}))):(Be(!0),x.a.post("".concat(k.a,"SubjectDocumentRequirement/Create"),a,{headers:{"Content-Type":"application/json",authorization:Ze}}).then((function(e){var t,a;(Be(!1),200===e.status&&!0===e.data.isSuccess)?(We(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.message,{appearance:"success",autoDismiss:!0}),Se(!he),H("Select Document Group"),_(0),ce("Select Application type"),ue(0)):(We(null===e||void 0===e||null===(a=e.data)||void 0===a?void 0:a.message,{appearance:"success",autoDismiss:!0}),H("Select Document Group"),_(0),ce("Select Application type"),ue(0))})))},className:""},0!=Ne?o.a.createElement(j.a,{type:"hidden",id:"id",name:"id",value:Ne}):null,o.a.createElement(f.a,{row:!0,className:"has-icon-left position-relative"},o.a.createElement(j.a,{type:"hidden",id:"subjectId",name:"subjectId",value:Ye})),o.a.createElement(f.a,{row:!0,className:"has-icon-left position-relative"},o.a.createElement(h.a,{md:"4"},o.a.createElement("span",null,"Document Group ",o.a.createElement("span",{className:"text-danger"},"*")," ")),o.a.createElement(h.a,{md:"8"},o.a.createElement(i.a,{options:Me,value:{label:z,value:Y},onChange:function(e){return t=e.label,a=e.value,W(!1),H(t),void _(a);var t,a},name:"documentGroupId",id:"documentGroupId"}),V&&o.a.createElement("span",{className:"text-danger"},"Document group is required"))),o.a.createElement(f.a,{row:!0,className:"has-icon-left position-relative"},o.a.createElement(h.a,{md:"4"},o.a.createElement("span",null,"Application Type"," ",o.a.createElement("span",{className:"text-danger"},"*")," ")),o.a.createElement(h.a,{md:"8"},o.a.createElement(i.a,{options:Qe,value:{label:ne,value:ie},onChange:function(e){return t=e.label,a=e.value,de(!1),ce(t),void ue(a);var t,a},name:"applicationTypeId",id:"applicationTypeId"}),me&&o.a.createElement("span",{className:"text-danger"},"Application type is required"))),o.a.createElement(f.a,{className:"has-icon-left position-relative",style:{display:"flex",justifyContent:"space-between"}}),o.a.createElement(f.a,{className:"has-icon-left position-relative",style:{display:"flex",justifyContent:"end"}},o.a.createElement(C.a,{type:"submit",className:"mt-3 badge-primary",name:"Save",permission:6,disable:Fe})))),o.a.createElement("div",{className:"col-6"},o.a.createElement("div",{className:"hedding-titel d-flex justify-content-between mb-4"},o.a.createElement("div",null,o.a.createElement("h5",null," ",o.a.createElement("b",null,"Document Requirement List")," "),o.a.createElement("div",{className:"bg-h"}))),ve<1?o.a.createElement("div",null,"No data available"):o.a.createElement("div",{className:"table-responsive"},o.a.createElement(S.a,{className:"table-sm table-bordered"},o.a.createElement("thead",{className:"thead-uapp-bg"},o.a.createElement("tr",{style:{textAlign:"center"}},o.a.createElement("th",null,"SL/NO"),o.a.createElement("th",null,"Document Group"),o.a.createElement("th",{className:"text-center"},"Application Type"),o.a.createElement("th",null,"Action"))),o.a.createElement("tbody",null,null===ve||void 0===ve?void 0:ve.map((function(e,t){var a;return o.a.createElement("tr",{key:e.id,style:{textAlign:"center"}},o.a.createElement("th",{scope:"row"},t+1),o.a.createElement("td",null,null===e||void 0===e||null===(a=e.documentGroup)||void 0===a?void 0:a.title),o.a.createElement("td",{className:"text-center"},1===(null===e||void 0===e?void 0:e.applicationTypeId)?"Home":2===(null===e||void 0===e?void 0:e.applicationTypeId)?"EU/UK":"International"),o.a.createElement("td",null,o.a.createElement(O.a,null,o.a.createElement(C.a,{func:function(){return function(e){var t,a;console.log("documentList",e),ge(null===e||void 0===e?void 0:e.id),H(null===e||void 0===e||null===(t=e.documentGroup)||void 0===t?void 0:t.title),_(null===e||void 0===e||null===(a=e.documentGroup)||void 0===a?void 0:a.id),ce(1===(null===e||void 0===e?void 0:e.applicationTypeId)?"Home":2===(null===e||void 0===e?void 0:e.applicationTypeId)?"EU/UK":"International"),ue(null===e||void 0===e?void 0:e.applicationTypeId)}(e)},className:"mx-1 btn-sm",color:"warning",icon:o.a.createElement("i",{className:"fas fa-edit"}),permission:6}),o.a.createElement(C.a,{className:"mx-1 btn-sm",func:function(){return function(e){var t;Pe(null===e||void 0===e||null===(t=e.documentGroup)||void 0===t?void 0:t.title),Te(null===e||void 0===e?void 0:e.id),ke(!0)}(e)},color:"danger",icon:o.a.createElement("i",{className:"fas fa-trash-alt"}),permission:6})),o.a.createElement(y.a,{isOpen:xe,toggle:$e,className:"uapp-modal"},o.a.createElement(N.a,null,o.a.createElement("p",null,"Are You Sure to Delete this ",o.a.createElement("b",null,Re)," ? Once Deleted it can't be Undone!")),o.a.createElement(g.a,null,o.a.createElement(D.a,{disabled:Je,color:"danger",onClick:function(){return function(e){Ke(!0);Object(q.a)("SubjectDocumentRequirement/Delete/".concat(e)).then((function(e){Be(!1),ke(!1),Se(!he),We(e,{appearance:"error",autoDismiss:!0}),Pe(""),Te(0)}))}(Ce)}},"YES"),o.a.createElement(D.a,{onClick:$e},"NO")))))}))))))),o.a.createElement("div",{className:"d-flex justify-content-between"},o.a.createElement("div",null,o.a.createElement(C.a,{func:function(){Ve.push({pathname:"/addSubjectRequirements/".concat(Ye),subjectId:_e.subjectId})},color:"warning uapp-form-button float-right",name:"Previous Page",permission:6})),o.a.createElement("div",{className:"d-flex justify-content-end"},o.a.createElement(A.a,{to:"/subjectList"},o.a.createElement(D.a,{color:"primary",className:"mr-1"},"Go to Subject List")),o.a.createElement(A.a,{to:"/subjectProfile/".concat(Ye)},o.a.createElement(D.a,{color:"primary",className:"ml-1"},"Go to Subject Profile")))))))))}}}]);
//# sourceMappingURL=285.8850273c.chunk.js.map