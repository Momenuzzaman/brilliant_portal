(this.webpackJsonpdesk_client=this.webpackJsonpdesk_client||[]).push([[115],{258:function(e,a,t){"use strict";var n=t(7),r=t(12),c=t(0),l=t.n(c),s=t(1),i=t.n(s),o=t(5),u=t.n(o),d=t(4),m=["className","cssModule","innerRef","tag"],f={tag:d.t,className:i.a.string,cssModule:i.a.object,innerRef:i.a.oneOfType([i.a.object,i.a.string,i.a.func])},p=function(e){var a=e.className,t=e.cssModule,c=e.innerRef,s=e.tag,i=Object(r.a)(e,m),o=Object(d.p)(u()(a,"card-body"),t);return l.a.createElement(s,Object(n.a)({},i,{className:o,ref:c}))};p.propTypes=f,p.defaultProps={tag:"div"},a.a=p},260:function(e,a,t){"use strict";var n=t(7),r=t(12),c=t(0),l=t.n(c),s=t(1),i=t.n(s),o=t(5),u=t.n(o),d=t(4),m=["className","cssModule","row","disabled","check","inline","tag"],f={children:i.a.node,row:i.a.bool,check:i.a.bool,inline:i.a.bool,disabled:i.a.bool,tag:d.t,className:i.a.string,cssModule:i.a.object},p=function(e){var a=e.className,t=e.cssModule,c=e.row,s=e.disabled,i=e.check,o=e.inline,f=e.tag,p=Object(r.a)(e,m),b=Object(d.p)(u()(a,!!c&&"row",i?"form-check":"form-group",!(!i||!o)&&"form-check-inline",!(!i||!s)&&"disabled"),t);return"fieldset"===f&&(p.disabled=s),l.a.createElement(f,Object(n.a)({},p,{className:b}))};p.propTypes=f,p.defaultProps={tag:"div"},a.a=p},262:function(e,a,t){"use strict";var n=t(7),r=t(12),c=t(16),l=t(13),s=t(0),i=t.n(s),o=t(1),u=t.n(o),d=t(5),m=t.n(d),f=t(4),p=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],b={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:f.t,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},v=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(c.a)(t)),t.focus=t.focus.bind(Object(c.a)(t)),t}Object(l.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,c=e.type,l=e.bsSize,s=e.valid,o=e.invalid,u=e.tag,d=e.addon,b=e.plaintext,v=e.innerRef,h=Object(r.a)(e,p),g=["radio","checkbox"].indexOf(c)>-1,j=new RegExp("\\D","g"),O=u||("select"===c||"textarea"===c?c:"input"),E="form-control";b?(E+="-plaintext",O=u||"input"):"file"===c?E+="-file":"range"===c?E+="-range":g&&(E=d?null:"form-check-input"),h.size&&j.test(h.size)&&(Object(f.v)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),l=h.size,delete h.size);var y=Object(f.p)(m()(a,o&&"is-invalid",s&&"is-valid",!!l&&"form-control-"+l,E),t);return("input"===O||u&&"function"===typeof u)&&(h.type=c),h.children&&!b&&"select"!==c&&"string"===typeof O&&"select"!==O&&(Object(f.v)('Input with a type of "'+c+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete h.children),i.a.createElement(O,Object(n.a)({},h,{ref:v,className:y,"aria-invalid":o}))},a}(i.a.Component);v.propTypes=b,v.defaultProps={type:"text"},a.a=v},263:function(e,a,t){"use strict";var n=t(7),r=t(12),c=t(0),l=t.n(c),s=t(1),i=t.n(s),o=t(5),u=t.n(o),d=t(4),m=["className","cssModule","tag"],f={tag:d.t,className:i.a.string,cssModule:i.a.object},p=function(e){var a=e.className,t=e.cssModule,c=e.tag,s=Object(r.a)(e,m),i=Object(d.p)(u()(a,"card-header"),t);return l.a.createElement(c,Object(n.a)({},s,{className:i}))};p.propTypes=f,p.defaultProps={tag:"div"},a.a=p},267:function(e,a,t){"use strict";var n=t(7),r=t(12),c=t(0),l=t.n(c),s=t(1),i=t.n(s),o=t(5),u=t.n(o),d=t(4),m=["className","cssModule","widths","tag"],f=i.a.oneOfType([i.a.number,i.a.string]),p=i.a.oneOfType([i.a.bool,i.a.number,i.a.string,i.a.shape({size:i.a.oneOfType([i.a.bool,i.a.number,i.a.string]),order:f,offset:f})]),b={tag:d.t,xs:p,sm:p,md:p,lg:p,xl:p,className:i.a.string,cssModule:i.a.object,widths:i.a.array},v={tag:"div",widths:["xs","sm","md","lg","xl"]},h=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},g=function(e){var a=e.className,t=e.cssModule,c=e.widths,s=e.tag,i=Object(r.a)(e,m),o=[];c.forEach((function(a,n){var r=e[a];if(delete i[a],r||""===r){var c=!n;if(Object(d.n)(r)){var l,s=c?"-":"-"+a+"-",m=h(c,a,r.size);o.push(Object(d.p)(u()(((l={})[m]=r.size||""===r.size,l["order"+s+r.order]=r.order||0===r.order,l["offset"+s+r.offset]=r.offset||0===r.offset,l)),t))}else{var f=h(c,a,r);o.push(f)}}})),o.length||o.push("col");var f=Object(d.p)(u()(a,o),t);return l.a.createElement(s,Object(n.a)({},i,{className:f}))};g.propTypes=b,g.defaultProps=v,a.a=g},269:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));var n=t(0),r=t.n(n).a.createContext({})},271:function(e,a,t){"use strict";var n=t(7),r=t(12),c=t(16),l=t(13),s=t(0),i=t.n(s),o=t(1),u=t.n(o),d=t(5),m=t.n(d),f=t(4),p=["className","cssModule","inline","tag","innerRef"],b={children:u.a.node,inline:u.a.bool,tag:f.t,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},v=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(c.a)(t)),t.submit=t.submit.bind(Object(c.a)(t)),t}Object(l.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,c=e.inline,l=e.tag,s=e.innerRef,o=Object(r.a)(e,p),u=Object(f.p)(m()(a,!!c&&"form-inline"),t);return i.a.createElement(l,Object(n.a)({},o,{ref:s,className:u}))},a}(s.Component);v.propTypes=b,v.defaultProps={tag:"form"},a.a=v},280:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));var n=t(66);function r(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(n.a)(e))){var a=0,t=function(){};return{s:t,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:t}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,c,l=!0,s=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return l=e.done,e},e:function(e){s=!0,c=e},f:function(){try{l||null==r.return||r.return()}finally{if(s)throw c}}}}},328:function(e,a,t){"use strict";var n=t(7),r=t(12),c=t(0),l=t.n(c),s=t(1),i=t.n(s),o=t(5),u=t.n(o),d=t(4),m=["className","cssModule","tabs","pills","vertical","horizontal","justified","fill","navbar","card","tag"],f={tabs:i.a.bool,pills:i.a.bool,vertical:i.a.oneOfType([i.a.bool,i.a.string]),horizontal:i.a.string,justified:i.a.bool,fill:i.a.bool,navbar:i.a.bool,card:i.a.bool,tag:d.t,className:i.a.string,cssModule:i.a.object},p=function(e){var a=e.className,t=e.cssModule,c=e.tabs,s=e.pills,i=e.vertical,o=e.horizontal,f=e.justified,p=e.fill,b=e.navbar,v=e.card,h=e.tag,g=Object(r.a)(e,m),j=Object(d.p)(u()(a,b?"navbar-nav":"nav",!!o&&"justify-content-"+o,function(e){return!1!==e&&(!0===e||"xs"===e?"flex-column":"flex-"+e+"-column")}(i),{"nav-tabs":c,"card-header-tabs":v&&c,"nav-pills":s,"card-header-pills":v&&s,"nav-justified":f,"nav-fill":p}),t);return l.a.createElement(h,Object(n.a)({},g,{className:j}))};p.propTypes=f,p.defaultProps={tag:"ul",vertical:!1},a.a=p},332:function(e,a,t){"use strict";var n=t(7),r=t(12),c=t(0),l=t.n(c),s=t(1),i=t.n(s),o=t(5),u=t.n(o),d=t(4),m=["className","cssModule","active","tag"],f={tag:d.t,active:i.a.bool,className:i.a.string,cssModule:i.a.object},p=function(e){var a=e.className,t=e.cssModule,c=e.active,s=e.tag,i=Object(r.a)(e,m),o=Object(d.p)(u()(a,"nav-item",!!c&&"active"),t);return l.a.createElement(s,Object(n.a)({},i,{className:o}))};p.propTypes=f,p.defaultProps={tag:"li"},a.a=p},333:function(e,a,t){"use strict";var n=t(7),r=t(12),c=t(16),l=t(13),s=t(0),i=t.n(s),o=t(1),u=t.n(o),d=t(5),m=t.n(d),f=t(4),p=["className","cssModule","active","tag","innerRef"],b={tag:f.t,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),disabled:u.a.bool,active:u.a.bool,className:u.a.string,cssModule:u.a.object,onClick:u.a.func,href:u.a.any},v=function(e){function a(a){var t;return(t=e.call(this,a)||this).onClick=t.onClick.bind(Object(c.a)(t)),t}Object(l.a)(a,e);var t=a.prototype;return t.onClick=function(e){this.props.disabled?e.preventDefault():("#"===this.props.href&&e.preventDefault(),this.props.onClick&&this.props.onClick(e))},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,c=e.active,l=e.tag,s=e.innerRef,o=Object(r.a)(e,p),u=Object(f.p)(m()(a,"nav-link",{disabled:o.disabled,active:c}),t);return i.a.createElement(l,Object(n.a)({},o,{ref:s,onClick:this.onClick,className:u}))},a}(i.a.Component);v.propTypes=b,v.defaultProps={tag:"a"},a.a=v},346:function(e,a,t){"use strict";var n=t(7),r=t(13),c=t(0),l=t.n(c),s=t(1),i=t.n(s),o=t(5),u=t.n(o),d=t(269),m=t(4),f={tag:m.t,activeTab:i.a.any,className:i.a.string,cssModule:i.a.object},p=function(e){function a(a){var t;return(t=e.call(this,a)||this).state={activeTab:t.props.activeTab},t}return Object(r.a)(a,e),a.getDerivedStateFromProps=function(e,a){return a.activeTab!==e.activeTab?{activeTab:e.activeTab}:null},a.prototype.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.tag,c=Object(m.q)(this.props,Object.keys(f)),s=Object(m.p)(u()("tab-content",a),t);return l.a.createElement(d.a.Provider,{value:{activeTabId:this.state.activeTab}},l.a.createElement(r,Object(n.a)({},c,{className:s})))},a}(c.Component);a.a=p,p.propTypes=f,p.defaultProps={tag:"div"}},349:function(e,a,t){"use strict";t.d(a,"a",(function(){return b}));var n=t(7),r=t(12),c=t(0),l=t.n(c),s=t(1),i=t.n(s),o=t(5),u=t.n(o),d=t(269),m=t(4),f=["className","cssModule","tabId","tag"],p={tag:m.t,className:i.a.string,cssModule:i.a.object,tabId:i.a.any};function b(e){var a=e.className,t=e.cssModule,c=e.tabId,s=e.tag,i=Object(r.a)(e,f),o=function(e){return Object(m.p)(u()("tab-pane",a,{active:c===e}),t)};return l.a.createElement(d.a.Consumer,null,(function(e){var a=e.activeTabId;return l.a.createElement(s,Object(n.a)({},i,{className:o(a)}))}))}b.propTypes=p,b.defaultProps={tag:"div"}},892:function(e,a,t){"use strict";t.r(a);var n=t(280),r=t(29),c=t(3),l=t.n(c),s=t(0),i=t.n(s),o=t(33),u=t(301),d=t(263),m=t(258),f=t(328),p=t(332),b=t(333),v=t(346),h=t(349),g=t(271),j=t(260),O=t(267),E=t(262),y=t(94),N=t(47),M=t(101),T=t(270);a.default=function(){var e=Object(o.i)().id,a=Object(s.useState)({}),t=Object(r.a)(a,2),c=t[0],x=t[1],k=Object(o.h)(),C=Object(s.useState)("Country"),w=Object(r.a)(C,2),S=w[0],R=w[1],I=Object(s.useState)(0),z=Object(r.a)(I,2),P=z[0],B=z[1],q=Object(s.useState)("State"),D=Object(r.a)(q,2),L=D[0],V=D[1],A=Object(s.useState)(0),F=Object(r.a)(A,2),G=F[0],J=F[1],U=Object(s.useState)([]),_=Object(r.a)(U,2),H=_[0],K=_[1],Q=Object(s.useState)([]),W=Object(r.a)(Q,2),X=W[0],Y=W[1];Object(s.useEffect)((function(){Object(M.a)("Country/Index").then((function(e){K(e)}))}),[]),Object(s.useEffect)((function(){Object(M.a)("Branch/Get/".concat(null===k||void 0===k?void 0:k.pathname)).then((function(e){var a,t;x(e),R(null===e||void 0===e||null===(a=e.country)||void 0===a?void 0:a.name),V(null===e||void 0===e||null===(t=e.state)||void 0===t?void 0:t.name)}))}),[]);var Z=Object(o.g)(),$=Object(s.useState)("1"),ee=Object(r.a)($,2),ae=ee[0],te=ee[1],ne=Object(s.useState)(!1),re=Object(r.a)(ne,2),ce=re[0],le=re[1],se=function(a){te(a),"2"==a&&Z.push("/updateBranchManager/".concat(e))},ie=null===H||void 0===H?void 0:H.map((function(e){return{label:e.name,value:e.id}})),oe=null===X||void 0===X?void 0:X.map((function(e){return{label:e.name,value:e.id}})),ue=function(e,a){R(e),B(a),function(e){Object(M.a)("State/GetbyCountryId/".concat(e)).then((function(e){Y(e)}))}(a),V("")},de=localStorage.getItem("token");return i.a.createElement("div",null,i.a.createElement(u.a,null,i.a.createElement(d.a,{className:"page-header"},i.a.createElement("h3",null,"Update Branch Information"),i.a.createElement("div",{className:"page-header-back-to-home"},i.a.createElement("span",{onClick:function(){Z.push("/branchList")}}," ",i.a.createElement("i",{className:"fas fa-arrow-circle-left"})," Back to Branch List")))),i.a.createElement(u.a,null,i.a.createElement(m.a,null,i.a.createElement(f.a,{tabs:!0},i.a.createElement(p.a,null,i.a.createElement(b.a,{active:"1"===ae,onClick:function(){return se("1")}},"Branch Information")),i.a.createElement(p.a,null,ce?i.a.createElement(b.a,{active:"2"===ae,onClick:function(){return se("2")}},"Manager Information"):i.a.createElement(b.a,{disabled:!0,active:"2"===ae},"Manager Information"))),i.a.createElement(v.a,{activeTab:ae},i.a.createElement(h.a,{tabId:"1"},i.a.createElement(g.a,{className:"mt-5",onSubmit:function(a){a.preventDefault();var t,r=new FormData(a.target),c=Object(n.a)(r.values());try{for(c.s();!(t=c.n()).done;)t.value}catch(s){c.e(s)}finally{c.f()}l.a.put("".concat(N.a,"Branch/Update"),r,{headers:{authorization:de}}).then((function(a){var t,n,r,c,l;localStorage.setItem("branchId",null===a||void 0===a||null===(t=a.data)||void 0===t||null===(n=t.result)||void 0===n?void 0:n.id);var s=null===a||void 0===a||null===(r=a.data)||void 0===r||null===(c=r.result)||void 0===c?void 0:c.id;200===(null===a||void 0===a?void 0:a.status)&&!0===(null===a||void 0===a||null===(l=a.data)||void 0===l?void 0:l.isSuccess)&&(le(!0),Z.push({pathname:"/updateBranchManager/".concat(e),id:s}))}))}},i.a.createElement("input",{type:"hidden",name:"id",id:"id",value:null===c||void 0===c?void 0:c.id}),i.a.createElement("input",{type:"hidden",name:"branchCode",id:"branchCode",value:null===c||void 0===c?void 0:c.branchCode}),i.a.createElement(j.a,{row:!0,className:"has-icon-left position-relative"},i.a.createElement(O.a,{md:"2"},i.a.createElement("span",null,"Branch Name ",i.a.createElement("span",{className:"text-danger"},"*")," ")),i.a.createElement(O.a,{md:"4"},i.a.createElement(E.a,{type:"text",name:"name",id:"name",defaultValue:null===c||void 0===c?void 0:c.name,required:!0}))),i.a.createElement(j.a,{row:!0,className:"has-icon-left position-relative"},i.a.createElement(O.a,{md:"2"},i.a.createElement("span",null,"Address Line ",i.a.createElement("span",{className:"text-danger"},"*")," ")),i.a.createElement(O.a,{md:"4"},i.a.createElement(E.a,{type:"text",name:"addressLine",id:"addressLine",defaultValue:null===c||void 0===c?void 0:c.addressLine,required:!0}))),i.a.createElement(j.a,{row:!0,className:"has-icon-left position-relative"},i.a.createElement(O.a,{md:"2"},i.a.createElement("span",null,"Email ",i.a.createElement("span",{className:"text-danger"},"*")," ")),i.a.createElement(O.a,{md:"4"},i.a.createElement(E.a,{type:"email",name:"email",id:"email",defaultValue:null===c||void 0===c?void 0:c.email,required:!0}))),i.a.createElement(j.a,{row:!0,className:"has-icon-left position-relative"},i.a.createElement(O.a,{md:"2"},i.a.createElement("span",null,"Phone Number ",i.a.createElement("span",{className:"text-danger"},"*")," ")),i.a.createElement(O.a,{md:"4"},i.a.createElement(E.a,{type:"text",name:"phoneNumber",id:"phoneNumber",defaultValue:null===c||void 0===c?void 0:c.phoneNumber}))),i.a.createElement(j.a,{row:!0,className:"has-icon-left position-relative"},i.a.createElement(O.a,{md:"2"},i.a.createElement("span",null,"Telephone Number ",i.a.createElement("span",{className:"text-danger"},"*")," ")),i.a.createElement(O.a,{md:"4"},i.a.createElement(E.a,{type:"text",name:"telePhoneNumber",id:"telePhoneNumber",defaultValue:null===c||void 0===c?void 0:c.telePhoneNumber,required:!0}))),i.a.createElement(j.a,{row:!0,className:"has-icon-left position-relative"},i.a.createElement(O.a,{md:"2"},i.a.createElement("span",null,"Country ",i.a.createElement("span",{className:"text-danger"},"*")," ")),i.a.createElement(O.a,{md:"4"},i.a.createElement(T.a,{options:ie,value:{label:S,value:P},onChange:function(e){return ue(e.label,e.value)},name:"countryId",id:"countryId",required:!0}))),i.a.createElement(j.a,{row:!0,className:"has-icon-left position-relative"},i.a.createElement(O.a,{md:"2"},i.a.createElement("span",null,"State ",i.a.createElement("span",{className:"text-danger"},"*")," ")),i.a.createElement(O.a,{md:"4"},i.a.createElement(T.a,{options:oe,value:{label:L,value:G},onChange:function(e){return a=e.label,t=e.value,V(a),void J(t);var a,t},name:"stateId",id:"stateId",required:!0}))),i.a.createElement(j.a,{row:!0,className:"has-icon-left position-relative",style:{display:"flex",justifyContent:"end"}},i.a.createElement(O.a,{md:"7"},i.a.createElement(y.a.Ripple,{type:"submit",className:"mr-1 mt-3 badge-primary"},"Submit")))))))))}}}]);
//# sourceMappingURL=115.b93ff419.chunk.js.map