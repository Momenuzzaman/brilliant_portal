(this.webpackJsonpdesk_client=this.webpackJsonpdesk_client||[]).push([[287],{248:function(e,t,a){"use strict";var n=a(0),c=a.n(n),l=a(98);t.a=function(e){var t=e.className,a=e.icon,n=e.color,i=(e.permission,e.type),o=(e.url,e.func),s=e.name,r=e.disable;return c.a.createElement(c.a.Fragment,null,c.a.createElement(l.a,{onClick:o,color:n,type:i,className:t,disabled:r}," ",a,s," "))}},869:function(e,t,a){"use strict";a.r(t);var n=a(31),c=a(19),l=a(0),i=a.n(l),o=a(265),s=a(291),r=a(259),u=a(254),m=a(306),d=a(308),p=a(309),v=a(316),b=a(319),E=a(267),f=a(255),j=a(264),y=a(262),h=a(764),S=a(332),O=a(299),g=a(298),N=a(300),D=a(98),x=a(36),I=a(3),k=a.n(I),w=a(29),G=a(37),C=a(252),T=a(248),q=a(100),A=a(289);t.default=function(){var e=Object(l.useState)("5"),t=Object(c.a)(e,2),a=t[0],I=t[1],U=Object(l.useState)([]),R=Object(c.a)(U,2),L=R[0],P=R[1],F=Object(l.useState)("Select Document Group"),z=Object(c.a)(F,2),B=z[0],H=z[1],J=Object(l.useState)(0),K=Object(c.a)(J,2),Y=K[0],_=K[1],M=Object(l.useState)(!1),Q=Object(c.a)(M,2),V=Q[0],W=Q[1],X=Object(l.useState)([]),Z=Object(c.a)(X,2),$=Z[0],ee=Z[1],te=Object(l.useState)("Select Application type"),ae=Object(c.a)(te,2),ne=ae[0],ce=ae[1],le=Object(l.useState)(0),ie=Object(c.a)(le,2),oe=ie[0],se=ie[1],re=Object(l.useState)(!1),ue=Object(c.a)(re,2),me=ue[0],de=ue[1],pe=Object(l.useState)([]),ve=Object(c.a)(pe,2),be=ve[0],Ee=ve[1],fe=Object(l.useState)(!1),je=Object(c.a)(fe,2),ye=je[0],he=je[1],Se=Object(l.useState)(0),Oe=Object(c.a)(Se,2),ge=Oe[0],Ne=Oe[1],De=Object(l.useState)(!1),xe=Object(c.a)(De,2),Ie=xe[0],ke=xe[1],we=Object(l.useState)(0),Ge=Object(c.a)(we,2),Ce=Ge[0],Te=Ge[1],qe=Object(l.useState)(""),Ae=Object(c.a)(qe,2),Ue=Ae[0],Re=Ae[1],Le=Object(l.useState)(!1),Pe=Object(c.a)(Le,2),Fe=Pe[0],ze=Pe[1],Be=Object(l.useState)(!1),He=Object(c.a)(Be,2),Je=He[0],Ke=He[1],Ye=Object(G.i)(),_e=Ye.id,Me=Ye.subjId;Object(l.useEffect)((function(){Object(q.a)("DocumentGroupDD/Index").then((function(e){console.log(e,"response"),P(e)})),Object(q.a)("ApplicationTypeDD/Index").then((function(e){console.log(e,"response"),ee(e)})),Object(q.a)("SubjectDocumentRequirement/GetBySubject/".concat(Me)).then((function(e){console.log(e,"ssxcsxs"),Ee(e)}))}),[Me,ye]);var Qe=L.map((function(e){return{label:null===e||void 0===e?void 0:e.name,value:null===e||void 0===e?void 0:e.id}})),Ve=$.map((function(e){return{label:null===e||void 0===e?void 0:e.name,value:null===e||void 0===e?void 0:e.id}})),We=Object(G.g)(),Xe=Object(C.useToasts)().addToast,Ze=function(e){I(e),"1"==e&&We.push("/addUniversitySubject/".concat(_e,"/").concat(Me)),"2"==e&&We.push("/addUniversitySubjectFee/".concat(_e,"/").concat(Me)),"3"==e&&We.push("/addUniversitySubjectDeliveryPattern/".concat(_e,"/").concat(Me)),"4"==e&&We.push("/addUniversitySubjectRequirements/".concat(_e,"/").concat(Me)),"5"==e&&We.push("/addUniversitySubjectDocumentRequirement/".concat(_e,"/").concat(Me))},$e=localStorage.getItem("token"),et=function(){ke(!1),Re(""),Te(0)};return i.a.createElement("div",null,i.a.createElement(s.a,{className:"uapp-card-bg"},i.a.createElement(r.a,{className:"page-header"},i.a.createElement("h3",{className:"text-white"},"Subject Document Requirement"),i.a.createElement("div",{className:"page-header-back-to-home"},i.a.createElement("span",{onClick:function(){We.push("/universitySubjectList/".concat(_e))},className:"text-white"}," ",i.a.createElement("i",{className:"fas fa-arrow-circle-left"})," Back to University Subject List")))),i.a.createElement(s.a,null,i.a.createElement(u.a,null,i.a.createElement(m.a,{tabs:!0},i.a.createElement(d.a,null,i.a.createElement(p.a,{active:"1"===a,onClick:function(){return Ze("1")}},"Subject Information")),i.a.createElement(d.a,null,i.a.createElement(p.a,{active:"2"===a,onClick:function(){return Ze("2")}},"Subject Fee Information")),i.a.createElement(d.a,null,i.a.createElement(p.a,{active:"3"===a,onClick:function(){return Ze("3")}},"Delivery Pattern")),i.a.createElement(d.a,null,i.a.createElement(p.a,{active:"4"===a,onClick:function(){return Ze("4")}},"Requirement")),i.a.createElement(d.a,null,i.a.createElement(p.a,{active:"5"===a,onClick:function(){return Ze("5")}},"Document Requirement"))),i.a.createElement(v.a,{activeTab:a},i.a.createElement(b.a,{tabId:"5"},i.a.createElement("div",{className:"row mt-5"},i.a.createElement("div",{className:"col-6"},i.a.createElement("div",{className:"hedding-titel d-flex justify-content-between mb-2"},i.a.createElement("div",null,i.a.createElement("h5",null," ",i.a.createElement("b",null,"Add Document Required")," "),i.a.createElement("div",{className:"bg-h"}))),i.a.createElement(E.a,{onSubmit:function(e){e.preventDefault();var t,a=new FormData(e.target),c=Object(n.a)(a);try{for(c.s();!(t=c.n()).done;){var l=t.value;console.log("values",l)}}catch(i){c.e(i)}finally{c.f()}0===Y?W(!0):0===oe?de(!0):0!=ge?(ze(!0),k.a.put("".concat(w.a,"SubjectDocumentRequirement/Update"),a,{headers:{"Content-Type":"application/json",authorization:$e}}).then((function(e){var t,a;(ze(!1),console.log(e),200===e.status&&!0===e.data.isSuccess)?(Xe(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.message,{appearance:"success",autoDismiss:!0}),he(!ye),H("Select Document Group"),_(0),ce("Select Application type"),se(0),Ne(0)):(Xe(null===e||void 0===e||null===(a=e.data)||void 0===a?void 0:a.message,{appearance:"success",autoDismiss:!0}),H("Select Document Group"),_(0),ce("Select Application type"),se(0),Ne(0))}))):(ze(!0),k.a.post("".concat(w.a,"SubjectDocumentRequirement/Create"),a,{headers:{"Content-Type":"application/json",authorization:$e}}).then((function(e){var t,a;(ze(!1),console.log(e),200===e.status&&!0===e.data.isSuccess)?(Xe(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.message,{appearance:"success",autoDismiss:!0}),he(!ye),H("Select Document Group"),_(0),ce("Select Application type"),se(0)):(Xe(null===e||void 0===e||null===(a=e.data)||void 0===a?void 0:a.message,{appearance:"success",autoDismiss:!0}),H("Select Document Group"),_(0),ce("Select Application type"),se(0))})))},className:""},0!=ge?i.a.createElement(f.a,{type:"hidden",id:"id",name:"id",value:ge}):null,i.a.createElement(j.a,{row:!0,className:"has-icon-left position-relative"},i.a.createElement(f.a,{type:"hidden",id:"subjectId",name:"subjectId",value:Me})),i.a.createElement(j.a,{row:!0,className:"has-icon-left position-relative"},i.a.createElement(y.a,{md:"4"},i.a.createElement("span",null,"Document Group ",i.a.createElement("span",{className:"text-danger"},"*")," ")),i.a.createElement(y.a,{md:"8"},i.a.createElement(o.a,{options:Qe,value:{label:B,value:Y},onChange:function(e){return t=e.label,a=e.value,W(!1),H(t),void _(a);var t,a},name:"documentGroupId",id:"documentGroupId"}),V&&i.a.createElement("span",{className:"text-danger"},"Document group is required"))),i.a.createElement(j.a,{row:!0,className:"has-icon-left position-relative"},i.a.createElement(y.a,{md:"4"},i.a.createElement("span",null,"Application Type"," ",i.a.createElement("span",{className:"text-danger"},"*")," ")),i.a.createElement(y.a,{md:"8"},i.a.createElement(o.a,{options:Ve,value:{label:ne,value:oe},onChange:function(e){return t=e.label,a=e.value,de(!1),ce(t),void se(a);var t,a},name:"applicationTypeId",id:"applicationTypeId"}),me&&i.a.createElement("span",{className:"text-danger"},"Application type is required"))),i.a.createElement(j.a,{className:"has-icon-left position-relative",style:{display:"flex",justifyContent:"space-between"}}),i.a.createElement(j.a,{className:"has-icon-left position-relative",style:{display:"flex",justifyContent:"end"}},i.a.createElement(T.a,{type:"submit",className:"mt-3 badge-primary",name:"Save",permission:6,disable:Fe})))),i.a.createElement("div",{className:"col-6"},i.a.createElement("div",{className:"hedding-titel d-flex justify-content-between mb-4"},i.a.createElement("div",null,i.a.createElement("h5",null," ",i.a.createElement("b",null,"Document Requirement List")," "),i.a.createElement("div",{className:"bg-h"}))),be<1?i.a.createElement("div",null,"No data available"):i.a.createElement("div",{className:"table-responsive"},i.a.createElement(h.a,{className:"table-sm table-bordered"},i.a.createElement("thead",{className:"thead-uapp-bg"},i.a.createElement("tr",{style:{textAlign:"center"}},i.a.createElement("th",null,"SL/NO"),i.a.createElement("th",null,"Document Group"),i.a.createElement("th",{className:"text-center"},"Application Type"),i.a.createElement("th",null,"Action"))),i.a.createElement("tbody",null,null===be||void 0===be?void 0:be.map((function(e,t){var a;return i.a.createElement("tr",{key:e.id,style:{textAlign:"center"}},i.a.createElement("th",{scope:"row"},t+1),i.a.createElement("td",null,null===e||void 0===e||null===(a=e.documentGroup)||void 0===a?void 0:a.title),i.a.createElement("td",{className:"text-center"},1===(null===e||void 0===e?void 0:e.applicationTypeId)?"Home":2===(null===e||void 0===e?void 0:e.applicationTypeId)?"EU/UK":"International"),i.a.createElement("td",null,i.a.createElement(S.a,null,i.a.createElement(T.a,{func:function(){return function(e){var t,a;console.log("documentList",e),Ne(null===e||void 0===e?void 0:e.id),H(null===e||void 0===e||null===(t=e.documentGroup)||void 0===t?void 0:t.title),_(null===e||void 0===e||null===(a=e.documentGroup)||void 0===a?void 0:a.id),ce(1===(null===e||void 0===e?void 0:e.applicationTypeId)?"Home":2===(null===e||void 0===e?void 0:e.applicationTypeId)?"EU/UK":"International"),se(null===e||void 0===e?void 0:e.applicationTypeId)}(e)},className:"mx-1 btn-sm",color:"warning",icon:i.a.createElement("i",{className:"fas fa-edit"}),permission:6}),i.a.createElement(T.a,{className:"mx-1 btn-sm",func:function(){return function(e){var t;console.log(e),Re(null===e||void 0===e||null===(t=e.documentGroup)||void 0===t?void 0:t.title),Te(null===e||void 0===e?void 0:e.id),ke(!0)}(e)},color:"danger",icon:i.a.createElement("i",{className:"fas fa-trash-alt"}),permission:6})),i.a.createElement(O.a,{isOpen:Ie,toggle:et,className:"uapp-modal"},i.a.createElement(g.a,null,i.a.createElement("p",null,"Are You Sure to Delete this ",i.a.createElement("b",null,Ue)," ? Once Deleted it can't be Undone!")),i.a.createElement(N.a,null,i.a.createElement(D.a,{disabled:Je,color:"danger",onClick:function(){return function(e){Ke(!0);Object(A.a)("SubjectDocumentRequirement/Delete/".concat(e)).then((function(e){Ke(!1),ke(!1),he(!ye),Xe(e,{appearance:"error",autoDismiss:!0}),Re(""),Te(0)}))}(Ce)}},"YES"),i.a.createElement(D.a,{onClick:et},"NO")))))}))))))),i.a.createElement("div",{className:"d-flex justify-content-between"},i.a.createElement("div",null,i.a.createElement(T.a,{func:function(){We.push("/addUniversitySubjectRequirements/".concat(_e,"/").concat(Me))},color:"warning uapp-form-button float-right",name:"Previous Page",permission:6})),i.a.createElement("div",{className:"d-flex justify-content-end"},i.a.createElement(x.a,{to:"/universitySubjectList/".concat(_e)},i.a.createElement(D.a,{color:"primary",className:"mr-2"},"Go to University Subject List")),i.a.createElement(T.a,{func:function(){We.push({pathname:"/subjectProfile/".concat(Me),unnniId:_e})},color:"primary",name:"Go to Subject Profile",permission:6}))))))))}}}]);
//# sourceMappingURL=287.6d1d0d66.chunk.js.map