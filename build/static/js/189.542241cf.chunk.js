(this.webpackJsonpdesk_client=this.webpackJsonpdesk_client||[]).push([[189],{261:function(e,a,t){"use strict";var n=t(7),l=t(12),r=t(0),c=t.n(r),s=t(1),o=t.n(s),i=t(5),u=t.n(i),d=t(4),m=["className","cssModule","innerRef","tag"],p={tag:d.t,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},f=function(e){var a=e.className,t=e.cssModule,r=e.innerRef,s=e.tag,o=Object(l.a)(e,m),i=Object(d.p)(u()(a,"card-body"),t);return c.a.createElement(s,Object(n.a)({},o,{className:i,ref:r}))};f.propTypes=p,f.defaultProps={tag:"div"},a.a=f},263:function(e,a,t){"use strict";var n=t(7),l=t(12),r=t(0),c=t.n(r),s=t(1),o=t.n(s),i=t(5),u=t.n(i),d=t(4),m=["className","cssModule","row","disabled","check","inline","tag"],p={children:o.a.node,row:o.a.bool,check:o.a.bool,inline:o.a.bool,disabled:o.a.bool,tag:d.t,className:o.a.string,cssModule:o.a.object},f=function(e){var a=e.className,t=e.cssModule,r=e.row,s=e.disabled,o=e.check,i=e.inline,p=e.tag,f=Object(l.a)(e,m),b=Object(d.p)(u()(a,!!r&&"row",o?"form-check":"form-group",!(!o||!i)&&"form-check-inline",!(!o||!s)&&"disabled"),t);return"fieldset"===p&&(f.disabled=s),c.a.createElement(p,Object(n.a)({},f,{className:b}))};f.propTypes=p,f.defaultProps={tag:"div"},a.a=f},265:function(e,a,t){"use strict";var n=t(7),l=t(12),r=t(16),c=t(13),s=t(0),o=t.n(s),i=t(1),u=t.n(i),d=t(5),m=t.n(d),p=t(4),f=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],b={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:p.t,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},h=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(r.a)(t)),t.focus=t.focus.bind(Object(r.a)(t)),t}Object(c.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.type,c=e.bsSize,s=e.valid,i=e.invalid,u=e.tag,d=e.addon,b=e.plaintext,h=e.innerRef,g=Object(l.a)(e,f),E=["radio","checkbox"].indexOf(r)>-1,v=new RegExp("\\D","g"),y=u||("select"===r||"textarea"===r?r:"input"),O="form-control";b?(O+="-plaintext",y=u||"input"):"file"===r?O+="-file":"range"===r?O+="-range":E&&(O=d?null:"form-check-input"),g.size&&v.test(g.size)&&(Object(p.v)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),c=g.size,delete g.size);var N=Object(p.p)(m()(a,i&&"is-invalid",s&&"is-valid",!!c&&"form-control-"+c,O),t);return("input"===y||u&&"function"===typeof u)&&(g.type=r),g.children&&!b&&"select"!==r&&"string"===typeof y&&"select"!==y&&(Object(p.v)('Input with a type of "'+r+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),o.a.createElement(y,Object(n.a)({},g,{ref:h,className:N,"aria-invalid":i}))},a}(o.a.Component);h.propTypes=b,h.defaultProps={type:"text"},a.a=h},266:function(e,a,t){"use strict";var n=t(7),l=t(12),r=t(0),c=t.n(r),s=t(1),o=t.n(s),i=t(5),u=t.n(i),d=t(4),m=["className","cssModule","tag"],p={tag:d.t,className:o.a.string,cssModule:o.a.object},f=function(e){var a=e.className,t=e.cssModule,r=e.tag,s=Object(l.a)(e,m),o=Object(d.p)(u()(a,"card-header"),t);return c.a.createElement(r,Object(n.a)({},s,{className:o}))};f.propTypes=p,f.defaultProps={tag:"div"},a.a=f},379:function(e,a,t){"use strict";var n=t(7),l=t(12),r=t(0),c=t.n(r),s=t(1),o=t.n(s),i=t(5),u=t.n(i),d=t(4),m=["className","cssModule","hidden","widths","tag","check","size","for"],p=o.a.oneOfType([o.a.number,o.a.string]),f=o.a.oneOfType([o.a.bool,o.a.string,o.a.number,o.a.shape({size:p,order:p,offset:p})]),b={children:o.a.node,hidden:o.a.bool,check:o.a.bool,size:o.a.string,for:o.a.string,tag:d.t,className:o.a.string,cssModule:o.a.object,xs:f,sm:f,md:f,lg:f,xl:f,widths:o.a.array},h={tag:"label",widths:["xs","sm","md","lg","xl"]},g=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},E=function(e){var a=e.className,t=e.cssModule,r=e.hidden,s=e.widths,o=e.tag,i=e.check,p=e.size,f=e.for,b=Object(l.a)(e,m),h=[];s.forEach((function(a,n){var l=e[a];if(delete b[a],l||""===l){var r,c=!n;if(Object(d.n)(l)){var s,o=c?"-":"-"+a+"-";r=g(c,a,l.size),h.push(Object(d.p)(u()(((s={})[r]=l.size||""===l.size,s["order"+o+l.order]=l.order||0===l.order,s["offset"+o+l.offset]=l.offset||0===l.offset,s))),t)}else r=g(c,a,l),h.push(r)}}));var E=Object(d.p)(u()(a,!!r&&"sr-only",!!i&&"form-check-label",!!p&&"col-form-label-"+p,h,!!h.length&&"col-form-label"),t);return c.a.createElement(o,Object(n.a)({htmlFor:f},b,{className:E}))};E.propTypes=b,E.defaultProps=h,a.a=E},389:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));var n=t(18),l=t(17),r=Object(n.a)((function e(){Object(l.a)(this,e),this.id=0,this.createdBy="",this.createdOn="2019-01-06T17:16:40",this.updatedBy="",this.updatedOn="2019-01-06T17:16:40",this.deletedBy="",this.deletedOn="2019-01-06T17:16:40",this.isSoftDeleted=!0}))},391:function(e,a,t){"use strict";var n=t(7),l=t(12),r=t(0),c=t.n(r),s=t(1),o=t.n(s),i=t(5),u=t.n(i),d=t(4),m=["className","cssModule","tag"],p={tag:d.t,className:o.a.string,cssModule:o.a.object},f=function(e){var a=e.className,t=e.cssModule,r=e.tag,s=Object(l.a)(e,m),o=Object(d.p)(u()(a,"card-title"),t);return c.a.createElement(r,Object(n.a)({},s,{className:o}))};f.propTypes=p,f.defaultProps={tag:"div"},a.a=f},978:function(e,a,t){"use strict";t.r(a);var n=t(30),l=t(67),r=t(0),c=t.n(r),s=t(27),o=t(53),i=t(794),u=t(783),d=t(788),m=t(789),p=t(790),f=t(791),b=t(792),h=t(793),g=t(387),E=t(464),v=t.n(E),y=t(465),O=t.n(y),N=t(258),j=t(2),C=t(304),I=t(266),B=t(391),P=t(261),x=t(263),T=t(379),w=t(265),k=t(94),z=t(273),M=t(18),S=t(17),R=t(19),A=t(20),L=function(e){Object(R.a)(t,e);var a=Object(A.a)(t);function t(){var e;Object(S.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).code="",e.name="",e.address="",e.cityId=0,e.stateId=0,e.CountryId=0,e.phoneNumber="",e.telephoneNumber="",e.postalCode="",e}return Object(M.a)(t)}(t(389).a),V=t(21),D=function(e,a,t){var l=Object(r.useState)(e),c=Object(n.a)(l,2),s=c[0],o=c[1],i=Object(r.useState)({}),u=Object(n.a)(i,2),d=u[0],m=u[1];return{values:s,setValues:o,errors:d,setErrors:m,handleInputChange:function(e){var t=e.target,n=t.name,l=t.value,r=Object(V.a)({},n,l);o(Object(j.a)(Object(j.a)({},s),r)),a(r)},resetForm:function(){o(Object(j.a)({},e)),m({}),t(0)}}},F=new L;var J={createCompanyBranch:o.c,updateCompanyBranch:o.e},_=Object(s.b)((function(e){return{companyBranchList:e.companyBranch.list}}),J)((function(e){var a=Object.assign({},e),t=Object(N.useToasts)().addToast,n=function(){return!0},l=D(F,n,a.setCurrentId),s=l.values,o=l.setValues,i=l.setErrors,u=l.handleInputChange,d=l.resetForm,m=[{value:"ocean",label:"Ocean"},{value:"blue",label:"Blue"},{value:"purple",label:"Purple"},{value:"red",label:"Red"},{value:"orange",label:"Orange"}];return Object(r.useEffect)((function(){0!==a.currentId&&(o(Object(j.a)({},a.companyBranchList.find((function(e){return e.id===a.currentId})))),i({}))}),[a.currentId,a.companyBranchList,i,o]),c.a.createElement(c.a.Fragment,null,c.a.createElement("form",{onSubmit:function(e){e.preventDefault();var n=function(){d(),t("Submitted successfully",{appearance:"success"})};0===a.currentId?a.createCompanyBranch(s,n):a.updateCompanyBranch(a.currentId,s,n)}},c.a.createElement(C.a,null,c.a.createElement(I.a,null,c.a.createElement(B.a,null,"Create Company Branch")),c.a.createElement(P.a,null,c.a.createElement(x.a,null,c.a.createElement(T.a,{for:"basicInput"},"Enter Branch Name"),c.a.createElement(w.a,{id:"basicInput",placeholder:"Branch Name",type:"text",name:"name",value:s.name,onChange:u,className:"form-control"})),c.a.createElement(x.a,null,c.a.createElement(T.a,{for:"basicInput"},"Enter Address"),c.a.createElement(w.a,{type:"text",id:"basicInput",placeholder:"Branch Address",name:"address",value:s.address,onChange:u,className:"form-control"})),c.a.createElement(x.a,null,c.a.createElement(T.a,{for:"basicInput"},"Select Country"),c.a.createElement(z.a,{className:"React",classNamePrefix:"select",defaultValue:m[2],name:"loading",options:m,isLoading:!0})),c.a.createElement(x.a,null,c.a.createElement(T.a,{for:"basicInput"},"Select State"),c.a.createElement(z.a,{className:"React",classNamePrefix:"select",defaultValue:m[2],name:"loading",options:m,isLoading:!0})),c.a.createElement(x.a,null,c.a.createElement(T.a,{for:"basicInput"},"Select City"),c.a.createElement(z.a,{className:"React",classNamePrefix:"select",defaultValue:m[2],name:"loading",options:m,isLoading:!0})),c.a.createElement(x.a,null,c.a.createElement(T.a,{for:"basicInput"},"Enter Phone Number"),c.a.createElement(w.a,{type:"text",id:"basicInput",placeholder:"Phone Number",name:"phoneNumber",value:s.phoneNumber,onChange:u,className:"form-control"})),c.a.createElement(x.a,null,c.a.createElement(T.a,{for:"basicInput"},"Enter Telephone Number"),c.a.createElement(w.a,{type:"text",id:"basicInput",placeholder:"Telephone Number",name:"telephoneNumber",value:s.telephoneNumber,onChange:u,className:"form-control"})),c.a.createElement(x.a,null,c.a.createElement(T.a,{for:"basicInput"},"Enter Post Code"),c.a.createElement(w.a,{type:"text",id:"basicInput",placeholder:"Post Code",name:"postCode",value:s.postCode,onChange:u,className:"form-control"})))),c.a.createElement(k.a.Ripple,{type:"submit",color:"primary"},"Submit")))})),q=t(959),G=["classes"],H={fetchAllCompanyBranch:o.d,deleteCompanyBranch:o.b};a.default=Object(s.b)((function(e){return{companyBranchList:e.companyBranch.list}}),H)(Object(g.a)((function(e){return{root:{"& .MuiTableCell-head":{fontSize:"1.25rem"}},paper:{margin:e.spacing(2),padding:e.spacing(2)}}}))((function(e){var a=e.classes,t=Object(l.a)(e,G),s=Object(r.useState)(0),o=Object(n.a)(s,2),g=o[0],E=o[1],y=c.a.useState(0),j=Object(n.a)(y,2),C=j[0],I=j[1],B=c.a.useState(5),P=Object(n.a)(B,2),x=P[0],T=P[1];Object(r.useEffect)((function(){t.fetchAllCompanyBranch()}),[t]);var w=Object(N.useToasts)().addToast;return c.a.createElement("div",{className:"row"},c.a.createElement("div",{item:!0,className:"col-md-3"},c.a.createElement(_,{currentId:g,setCurrentId:E})),c.a.createElement("div",{item:!0,className:"col-md-9"},c.a.createElement("h1",null,"Company Branch List"),c.a.createElement(i.a,{color:"success",style:{marginTop:"3px"},type:"submit",className:"btn btn-primary",onClick:_},"Add"),c.a.createElement(u.a,null,c.a.createElement(d.a,null,c.a.createElement(m.a,{className:a.root},c.a.createElement(p.a,null,c.a.createElement(f.a,null,"Name"),c.a.createElement(f.a,null,"Address"),c.a.createElement(f.a,null,"City"),c.a.createElement(f.a,null,"State"),c.a.createElement(f.a,null,"Country"),c.a.createElement(f.a,null,"Phone Number"),c.a.createElement(f.a,null,"Telephone Number"),c.a.createElement(f.a,null,"Post Code"),c.a.createElement(f.a,null,"Actions"))),c.a.createElement(b.a,null,t.companyBranchList.map((function(e,a){var n,l,r,s,o,u,d;return c.a.createElement(p.a,{key:a,hover:!0},c.a.createElement(f.a,null,e.name),c.a.createElement(f.a,null,null!==(n=e.address)&&void 0!==n?n:"N?A"),c.a.createElement(f.a,null,null!==(l=e.cityId)&&void 0!==l?l:"N?A"),c.a.createElement(f.a,null,null!==(r=e.stateId)&&void 0!==r?r:"N?A"),c.a.createElement(f.a,null,null!==(s=e.countryId)&&void 0!==s?s:"N?A"),c.a.createElement(f.a,null,null!==(o=e.phoneNumber)&&void 0!==o?o:"N?A"),c.a.createElement(f.a,null,null!==(u=e.telephoneNumber)&&void 0!==u?u:"N?A"),c.a.createElement(f.a,null,null!==(d=e.postalCode)&&void 0!==d?d:"N?A"),c.a.createElement(f.a,null,c.a.createElement(h.a,{variant:"text"},c.a.createElement(i.a,null,c.a.createElement(v.a,{color:"primary",onClick:function(){E(e.id)}})),c.a.createElement(i.a,null,c.a.createElement(O.a,{color:"secondary",onClick:function(){return a=e.id,void(window.confirm("Are you sure to delete this record?")&&t.deleteCompanyBranch(a,(function(){return w("Deleted successfully",{appearance:"info"})})));var a}})))))}))))),c.a.createElement(q.a,{rowsPerPageOptions:[5,10,25],component:"div",count:t.companyBranchList.length,rowsPerPage:x,page:C,onPageChange:function(e,a){I(a)},onRowsPerPageChange:function(e){T(parseInt(e.target.value,10)),I(0)}})))})))}}]);
//# sourceMappingURL=189.542241cf.chunk.js.map