(this.webpackJsonpdesk_client=this.webpackJsonpdesk_client||[]).push([[92],{252:function(e,t,a){"use strict";var n=a(0),c=a.n(n),l=a(96);t.a=function(e){var t=e.className,a=e.icon,n=e.color,s=(e.permission,e.type),i=(e.url,e.func),o=e.name,r=e.disable;return c.a.createElement(c.a.Fragment,null,c.a.createElement(l.a,{onClick:i,color:n,type:s,className:t,disabled:r}," ",a,o," "))}},264:function(e,t,a){"use strict";var n=a(6),c=a(12),l=a(0),s=a.n(l),i=a(1),o=a.n(i),r=a(5),u=a.n(r),d=a(4),m=["className","cssModule","innerRef","tag"],p={tag:d.t,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},b=function(e){var t=e.className,a=e.cssModule,l=e.innerRef,i=e.tag,o=Object(c.a)(e,m),r=Object(d.p)(u()(t,"card-body"),a);return s.a.createElement(i,Object(n.a)({},o,{className:r,ref:l}))};b.propTypes=p,b.defaultProps={tag:"div"},t.a=b},265:function(e,t,a){"use strict";var n=a(6),c=a(12),l=a(0),s=a.n(l),i=a(1),o=a.n(i),r=a(5),u=a.n(r),d=a(4),m=["className","cssModule","tag"],p={tag:d.t,className:o.a.string,cssModule:o.a.object},b=function(e){var t=e.className,a=e.cssModule,l=e.tag,i=Object(c.a)(e,m),o=Object(d.p)(u()(t,"card-header"),a);return s.a.createElement(l,Object(n.a)({},i,{className:o}))};b.propTypes=p,b.defaultProps={tag:"div"},t.a=b},266:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(0),c=a.n(n).a.createContext({})},267:function(e,t,a){"use strict";var n=a(6),c=a(12),l=a(0),s=a.n(l),i=a(1),o=a.n(i),r=a(5),u=a.n(r),d=a(4),m=["className","cssModule","widths","tag"],p=o.a.oneOfType([o.a.number,o.a.string]),b=o.a.oneOfType([o.a.bool,o.a.number,o.a.string,o.a.shape({size:o.a.oneOfType([o.a.bool,o.a.number,o.a.string]),order:p,offset:p})]),f={tag:d.t,xs:b,sm:b,md:b,lg:b,xl:b,className:o.a.string,cssModule:o.a.object,widths:o.a.array},v={tag:"div",widths:["xs","sm","md","lg","xl"]},j=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},g=function(e){var t=e.className,a=e.cssModule,l=e.widths,i=e.tag,o=Object(c.a)(e,m),r=[];l.forEach((function(t,n){var c=e[t];if(delete o[t],c||""===c){var l=!n;if(Object(d.n)(c)){var s,i=l?"-":"-"+t+"-",m=j(l,t,c.size);r.push(Object(d.p)(u()(((s={})[m]=c.size||""===c.size,s["order"+i+c.order]=c.order||0===c.order,s["offset"+i+c.offset]=c.offset||0===c.offset,s)),a))}else{var p=j(l,t,c);r.push(p)}}})),r.length||r.push("col");var p=Object(d.p)(u()(t,r),a);return s.a.createElement(i,Object(n.a)({},o,{className:p}))};g.propTypes=f,g.defaultProps=v,t.a=g},268:function(e,t,a){"use strict";var n=a(6),c=a(12),l=a(17),s=a(13),i=a(0),o=a.n(i),r=a(1),u=a.n(r),d=a(5),m=a.n(d),p=a(4),b=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],f={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:p.t,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},v=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(l.a)(a)),a.focus=a.focus.bind(Object(l.a)(a)),a}Object(s.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,l=e.type,s=e.bsSize,i=e.valid,r=e.invalid,u=e.tag,d=e.addon,f=e.plaintext,v=e.innerRef,j=Object(c.a)(e,b),g=["radio","checkbox"].indexOf(l)>-1,h=new RegExp("\\D","g"),E=u||("select"===l||"textarea"===l?l:"input"),y="form-control";f?(y+="-plaintext",E=u||"input"):"file"===l?y+="-file":"range"===l?y+="-range":g&&(y=d?null:"form-check-input"),j.size&&h.test(j.size)&&(Object(p.v)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),s=j.size,delete j.size);var O=Object(p.p)(m()(t,r&&"is-invalid",i&&"is-valid",!!s&&"form-control-"+s,y),a);return("input"===E||u&&"function"===typeof u)&&(j.type=l),j.children&&!f&&"select"!==l&&"string"===typeof E&&"select"!==E&&(Object(p.v)('Input with a type of "'+l+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete j.children),o.a.createElement(E,Object(n.a)({},j,{ref:v,className:O,"aria-invalid":r}))},t}(o.a.Component);v.propTypes=f,v.defaultProps={type:"text"},t.a=v},270:function(e,t,a){"use strict";var n=a(6),c=a(12),l=a(0),s=a.n(l),i=a(1),o=a.n(i),r=a(5),u=a.n(r),d=a(4),m=["className","cssModule","row","disabled","check","inline","tag"],p={children:o.a.node,row:o.a.bool,check:o.a.bool,inline:o.a.bool,disabled:o.a.bool,tag:d.t,className:o.a.string,cssModule:o.a.object},b=function(e){var t=e.className,a=e.cssModule,l=e.row,i=e.disabled,o=e.check,r=e.inline,p=e.tag,b=Object(c.a)(e,m),f=Object(d.p)(u()(t,!!l&&"row",o?"form-check":"form-group",!(!o||!r)&&"form-check-inline",!(!o||!i)&&"disabled"),a);return"fieldset"===p&&(b.disabled=i),s.a.createElement(p,Object(n.a)({},b,{className:f}))};b.propTypes=p,b.defaultProps={tag:"div"},t.a=b},279:function(e,t,a){"use strict";var n=a(6),c=a(12),l=a(17),s=a(13),i=a(0),o=a.n(i),r=a(1),u=a.n(r),d=a(5),m=a.n(d),p=a(4),b=["className","cssModule","inline","tag","innerRef"],f={children:u.a.node,inline:u.a.bool,tag:p.t,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},v=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(l.a)(a)),a.submit=a.submit.bind(Object(l.a)(a)),a}Object(s.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.submit=function(){this.ref&&this.ref.submit()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,l=e.inline,s=e.tag,i=e.innerRef,r=Object(c.a)(e,b),u=Object(p.p)(m()(t,!!l&&"form-inline"),a);return o.a.createElement(s,Object(n.a)({},r,{ref:i,className:u}))},t}(i.Component);v.propTypes=f,v.defaultProps={tag:"form"},t.a=v},282:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(67);function c(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(n.a)(e))){var t=0,a=function(){};return{s:a,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,l,s=!0,i=!1;return{s:function(){c=e[Symbol.iterator]()},n:function(){var e=c.next();return s=e.done,e},e:function(e){i=!0,l=e},f:function(){try{s||null==c.return||c.return()}finally{if(i)throw l}}}}},337:function(e,t,a){"use strict";var n=a(6),c=a(12),l=a(0),s=a.n(l),i=a(1),o=a.n(i),r=a(5),u=a.n(r),d=a(4),m=["className","cssModule","tabs","pills","vertical","horizontal","justified","fill","navbar","card","tag"],p={tabs:o.a.bool,pills:o.a.bool,vertical:o.a.oneOfType([o.a.bool,o.a.string]),horizontal:o.a.string,justified:o.a.bool,fill:o.a.bool,navbar:o.a.bool,card:o.a.bool,tag:d.t,className:o.a.string,cssModule:o.a.object},b=function(e){var t=e.className,a=e.cssModule,l=e.tabs,i=e.pills,o=e.vertical,r=e.horizontal,p=e.justified,b=e.fill,f=e.navbar,v=e.card,j=e.tag,g=Object(c.a)(e,m),h=Object(d.p)(u()(t,f?"navbar-nav":"nav",!!r&&"justify-content-"+r,function(e){return!1!==e&&(!0===e||"xs"===e?"flex-column":"flex-"+e+"-column")}(o),{"nav-tabs":l,"card-header-tabs":v&&l,"nav-pills":i,"card-header-pills":v&&i,"nav-justified":p,"nav-fill":b}),a);return s.a.createElement(j,Object(n.a)({},g,{className:h}))};b.propTypes=p,b.defaultProps={tag:"ul",vertical:!1},t.a=b},342:function(e,t,a){"use strict";var n=a(6),c=a(12),l=a(0),s=a.n(l),i=a(1),o=a.n(i),r=a(5),u=a.n(r),d=a(4),m=["className","cssModule","active","tag"],p={tag:d.t,active:o.a.bool,className:o.a.string,cssModule:o.a.object},b=function(e){var t=e.className,a=e.cssModule,l=e.active,i=e.tag,o=Object(c.a)(e,m),r=Object(d.p)(u()(t,"nav-item",!!l&&"active"),a);return s.a.createElement(i,Object(n.a)({},o,{className:r}))};b.propTypes=p,b.defaultProps={tag:"li"},t.a=b},343:function(e,t,a){"use strict";var n=a(6),c=a(12),l=a(17),s=a(13),i=a(0),o=a.n(i),r=a(1),u=a.n(r),d=a(5),m=a.n(d),p=a(4),b=["className","cssModule","active","tag","innerRef"],f={tag:p.t,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),disabled:u.a.bool,active:u.a.bool,className:u.a.string,cssModule:u.a.object,onClick:u.a.func,href:u.a.any},v=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Object(l.a)(a)),a}Object(s.a)(t,e);var a=t.prototype;return a.onClick=function(e){this.props.disabled?e.preventDefault():("#"===this.props.href&&e.preventDefault(),this.props.onClick&&this.props.onClick(e))},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,l=e.active,s=e.tag,i=e.innerRef,r=Object(c.a)(e,b),u=Object(p.p)(m()(t,"nav-link",{disabled:r.disabled,active:l}),a);return o.a.createElement(s,Object(n.a)({},r,{ref:i,onClick:this.onClick,className:u}))},t}(o.a.Component);v.propTypes=f,v.defaultProps={tag:"a"},t.a=v},352:function(e,t,a){"use strict";var n=a(6),c=a(13),l=a(0),s=a.n(l),i=a(1),o=a.n(i),r=a(5),u=a.n(r),d=a(266),m=a(4),p={tag:m.t,activeTab:o.a.any,className:o.a.string,cssModule:o.a.object},b=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={activeTab:a.props.activeTab},a}return Object(c.a)(t,e),t.getDerivedStateFromProps=function(e,t){return t.activeTab!==e.activeTab?{activeTab:e.activeTab}:null},t.prototype.render=function(){var e=this.props,t=e.className,a=e.cssModule,c=e.tag,l=Object(m.q)(this.props,Object.keys(p)),i=Object(m.p)(u()("tab-content",t),a);return s.a.createElement(d.a.Provider,{value:{activeTabId:this.state.activeTab}},s.a.createElement(c,Object(n.a)({},l,{className:i})))},t}(l.Component);t.a=b,b.propTypes=p,b.defaultProps={tag:"div"}},354:function(e,t,a){"use strict";a.d(t,"a",(function(){return f}));var n=a(6),c=a(12),l=a(0),s=a.n(l),i=a(1),o=a.n(i),r=a(5),u=a.n(r),d=a(266),m=a(4),p=["className","cssModule","tabId","tag"],b={tag:m.t,className:o.a.string,cssModule:o.a.object,tabId:o.a.any};function f(e){var t=e.className,a=e.cssModule,l=e.tabId,i=e.tag,o=Object(c.a)(e,p),r=function(e){return Object(m.p)(u()("tab-pane",t,{active:l===e}),a)};return s.a.createElement(d.a.Consumer,null,(function(e){var t=e.activeTabId;return s.a.createElement(i,Object(n.a)({},o,{className:r(t)}))}))}f.propTypes=b,f.defaultProps={tag:"div"}},840:function(e,t,a){"use strict";a.r(t);var n=a(282),c=a(29),l=a(0),s=a.n(l),i=a(272),o=a(306),r=a(265),u=a(264),d=a(337),m=a(342),p=a(343),b=a(352),f=a(354),v=a(279),j=a(268),g=a(270),h=a(267),E=a(758),y=a(3),O=a.n(y),N=a(47),S=a(33),T=a(255),x=a(252),k=a(103);t.default=function(){var e=Object(l.useState)("5"),t=Object(c.a)(e,2),a=t[0],y=t[1],D=Object(l.useState)([]),M=Object(c.a)(D,2),R=M[0],C=M[1],I=Object(l.useState)("Select Document Group"),w=Object(c.a)(I,2),z=w[0],P=w[1],A=Object(l.useState)(0),G=Object(c.a)(A,2),q=G[0],F=G[1],L=Object(l.useState)(!1),U=Object(c.a)(L,2),B=U[0],H=U[1],J=Object(l.useState)([]),K=Object(c.a)(J,2),Y=K[0],_=K[1],V=Object(l.useState)("Select Application type"),Q=Object(c.a)(V,2),W=Q[0],X=Q[1],Z=Object(l.useState)(0),$=Object(c.a)(Z,2),ee=$[0],te=$[1],ae=Object(l.useState)(!1),ne=Object(c.a)(ae,2),ce=ne[0],le=ne[1],se=Object(l.useState)([]),ie=Object(c.a)(se,2),oe=ie[0],re=ie[1],ue=Object(l.useState)(!1),de=Object(c.a)(ue,2),me=de[0],pe=de[1],be=Object(l.useState)(0),fe=Object(c.a)(be,2),ve=fe[0],je=fe[1],ge=Object(S.i)().id;console.log(ge,"SubIddddd"),Object(l.useEffect)((function(){Object(k.a)("DocumentGroupDD/Index").then((function(e){console.log(e,"response"),C(e)})),Object(k.a)("ApplicationTypeDD/Index").then((function(e){console.log(e,"response"),_(e)})),Object(k.a)("SubjectDocumentRequirement/GetBySubject/".concat(ge)).then((function(e){console.log(e,"ssxcsxs"),re(e)}))}),[ge,me]);var he=R.map((function(e){return{label:null===e||void 0===e?void 0:e.name,value:null===e||void 0===e?void 0:e.id}})),Ee=Y.map((function(e){return{label:null===e||void 0===e?void 0:e.name,value:null===e||void 0===e?void 0:e.id}})),ye=Object(S.g)(),Oe=Object(T.useToasts)().addToast,Ne=function(e){y(e),"1"==e&&ye.push("/editSubject/".concat(ge)),"2"==e&&ye.push("/editSubjectFee/".concat(ge)),"3"==e&&ye.push("/editDeliveryPattern/".concat(ge)),"4"==e&&ye.push("/editSubjectRequirements/".concat(ge)),"5"==e&&ye.push("/editSubjectDocumentRequirement/".concat(ge))},Se=localStorage.getItem("token");return s.a.createElement("div",null,s.a.createElement(o.a,{className:"uapp-card-bg"},s.a.createElement(r.a,{className:"page-header"},s.a.createElement("h3",{className:"text-light"},"Add Subject Delivery Pattern"),s.a.createElement("div",{className:"page-header-back-to-home"},s.a.createElement("span",{onClick:function(){ye.push("/subjectList")},className:"text-light"}," ",s.a.createElement("i",{className:"fas fa-arrow-circle-left"})," Back to Subject List")))),s.a.createElement(o.a,null,s.a.createElement(u.a,null,s.a.createElement(d.a,{tabs:!0},s.a.createElement(m.a,null,s.a.createElement(p.a,{active:"1"===a,onClick:function(){return Ne("1")}},"Subject Information")),s.a.createElement(m.a,null,s.a.createElement(p.a,{active:"2"===a,onClick:function(){return Ne("2")}},"Subject Fee Information")),s.a.createElement(m.a,null,s.a.createElement(p.a,{active:"3"===a,onClick:function(){return Ne("3")}},"Delivery Pattern")),s.a.createElement(m.a,null,s.a.createElement(p.a,{active:"4"===a,onClick:function(){return Ne("4")}},"Requirement")),s.a.createElement(m.a,null,s.a.createElement(p.a,{active:"5"===a,onClick:function(){return Ne("5")}},"Document Requirement"))),s.a.createElement(b.a,{activeTab:a},s.a.createElement(f.a,{tabId:"5"},s.a.createElement("div",{className:"row mt-5"},s.a.createElement("div",{className:"col-6"},s.a.createElement("div",{className:"hedding-titel d-flex justify-content-between mb-2"},s.a.createElement("div",null,s.a.createElement("h5",null," ",s.a.createElement("b",null,"Add Document Required")," "),s.a.createElement("div",{className:"bg-h"}))),s.a.createElement(v.a,{onSubmit:function(e){e.preventDefault();var t,a=new FormData(e.target),c=Object(n.a)(a);try{for(c.s();!(t=c.n()).done;){var l=t.value;console.log("values",l)}}catch(s){c.e(s)}finally{c.f()}0===q?H(!0):0===ee?le(!0):0!=ve?O.a.put("".concat(N.a,"SubjectDocumentRequirement/Update"),a,{headers:{"Content-Type":"application/json",authorization:Se}}).then((function(e){var t,a;(console.log(e),200===e.status&&!0===e.data.isSuccess)?(Oe(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.message,{appearance:"success",autoDismiss:!0}),pe(!me),P("Select Document Group"),F(0),X("Select Application type"),te(0),je(0)):(Oe(null===e||void 0===e||null===(a=e.data)||void 0===a?void 0:a.message,{appearance:"success",autoDismiss:!0}),P("Select Document Group"),F(0),X("Select Application type"),te(0),je(0))})):O.a.post("".concat(N.a,"SubjectDocumentRequirement/Create"),a,{headers:{"Content-Type":"application/json",authorization:Se}}).then((function(e){var t,a;(console.log(e),200===e.status&&!0===e.data.isSuccess)?(Oe(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.message,{appearance:"success",autoDismiss:!0}),pe(!me),P("Select Document Group"),F(0),X("Select Application type"),te(0)):(Oe(null===e||void 0===e||null===(a=e.data)||void 0===a?void 0:a.message,{appearance:"success",autoDismiss:!0}),P("Select Document Group"),F(0),X("Select Application type"),te(0))}))},className:""},0!=ve?s.a.createElement(j.a,{type:"hidden",id:"id",name:"id",value:ve}):null,s.a.createElement(g.a,{row:!0,className:"has-icon-left position-relative"},s.a.createElement(j.a,{type:"hidden",id:"subjectId",name:"subjectId",value:ge})),s.a.createElement(g.a,{row:!0,className:"has-icon-left position-relative"},s.a.createElement(h.a,{md:"4"},s.a.createElement("span",null,"Document Group ",s.a.createElement("span",{className:"text-danger"},"*")," ")),s.a.createElement(h.a,{md:"8"},s.a.createElement(i.a,{options:he,value:{label:z,value:q},onChange:function(e){return t=e.label,a=e.value,H(!1),P(t),void F(a);var t,a},name:"documentGroupId",id:"documentGroupId"}),B&&s.a.createElement("span",{className:"text-danger"},"You must select document group"))),s.a.createElement(g.a,{row:!0,className:"has-icon-left position-relative"},s.a.createElement(h.a,{md:"4"},s.a.createElement("span",null,"Application Type"," ",s.a.createElement("span",{className:"text-danger"},"*")," ")),s.a.createElement(h.a,{md:"8"},s.a.createElement(i.a,{options:Ee,value:{label:W,value:ee},onChange:function(e){return t=e.label,a=e.value,le(!1),X(t),void te(a);var t,a},name:"applicationTypeId",id:"applicationTypeId"}),ce&&s.a.createElement("span",{className:"text-danger"},"You must select application type"))),s.a.createElement(g.a,{className:"has-icon-left position-relative",style:{display:"flex",justifyContent:"space-between"}}),s.a.createElement(g.a,{className:"has-icon-left position-relative",style:{display:"flex",justifyContent:"end"}},s.a.createElement(x.a,{type:"submit",className:"mt-3 badge-primary",name:"Submit",permission:6})))),s.a.createElement("div",{className:"col-6"},s.a.createElement("div",{className:"hedding-titel d-flex justify-content-between mb-4"},s.a.createElement("div",null,s.a.createElement("h5",null," ",s.a.createElement("b",null,"Document Requirement List")," "),s.a.createElement("div",{className:"bg-h"}))),s.a.createElement("div",{className:"table-responsive"},s.a.createElement(E.a,{className:"table-sm table-bordered"},s.a.createElement("thead",{className:"thead-uapp-bg"},s.a.createElement("tr",{style:{textAlign:"center"}},s.a.createElement("th",null,"SL/NO"),s.a.createElement("th",null,"Document Group"),s.a.createElement("th",{className:"text-center"},"Application Type"),s.a.createElement("th",null,"Action"))),s.a.createElement("tbody",null,null===oe||void 0===oe?void 0:oe.map((function(e,t){var a;return s.a.createElement("tr",{key:e.id,style:{textAlign:"center"}},s.a.createElement("th",{scope:"row"},t+1),s.a.createElement("td",null,null===e||void 0===e||null===(a=e.documentGroup)||void 0===a?void 0:a.title),s.a.createElement("td",{className:"text-center"},1===(null===e||void 0===e?void 0:e.applicationTypeId)?"Home":2===(null===e||void 0===e?void 0:e.applicationTypeId)?"EU/UK":"International"),s.a.createElement("td",null,s.a.createElement(x.a,{func:function(){return function(e){var t,a;console.log("documentList",e),je(null===e||void 0===e?void 0:e.id),P(null===e||void 0===e||null===(t=e.documentGroup)||void 0===t?void 0:t.title),F(null===e||void 0===e||null===(a=e.documentGroup)||void 0===a?void 0:a.id),X(1===(null===e||void 0===e?void 0:e.applicationTypeId)?"Home":2===(null===e||void 0===e?void 0:e.applicationTypeId)?"EU/UK":"International"),te(null===e||void 0===e?void 0:e.applicationTypeId)}(e)},className:"mx-1 btn-sm",color:"warning",icon:s.a.createElement("i",{className:"fas fa-edit"}),permission:6})))}))))))))))))}}}]);
//# sourceMappingURL=92.2c98ff67.chunk.js.map