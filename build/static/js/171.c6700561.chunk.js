(this.webpackJsonpdesk_client=this.webpackJsonpdesk_client||[]).push([[171],{264:function(e,a,t){"use strict";var n=t(6),r=t(12),l=t(0),s=t.n(l),c=t(1),i=t.n(c),o=t(5),u=t.n(o),d=t(4),m=["className","cssModule","innerRef","tag"],f={tag:d.t,className:i.a.string,cssModule:i.a.object,innerRef:i.a.oneOfType([i.a.object,i.a.string,i.a.func])},p=function(e){var a=e.className,t=e.cssModule,l=e.innerRef,c=e.tag,i=Object(r.a)(e,m),o=Object(d.p)(u()(a,"card-body"),t);return s.a.createElement(c,Object(n.a)({},i,{className:o,ref:l}))};p.propTypes=f,p.defaultProps={tag:"div"},a.a=p},265:function(e,a,t){"use strict";var n=t(6),r=t(12),l=t(0),s=t.n(l),c=t(1),i=t.n(c),o=t(5),u=t.n(o),d=t(4),m=["className","cssModule","tag"],f={tag:d.t,className:i.a.string,cssModule:i.a.object},p=function(e){var a=e.className,t=e.cssModule,l=e.tag,c=Object(r.a)(e,m),i=Object(d.p)(u()(a,"card-header"),t);return s.a.createElement(l,Object(n.a)({},c,{className:i}))};p.propTypes=f,p.defaultProps={tag:"div"},a.a=p},268:function(e,a,t){"use strict";var n=t(6),r=t(12),l=t(17),s=t(13),c=t(0),i=t.n(c),o=t(1),u=t.n(o),d=t(5),m=t.n(d),f=t(4),p=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],b={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:f.t,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},g=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(l.a)(t)),t.focus=t.focus.bind(Object(l.a)(t)),t}Object(s.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,l=e.type,s=e.bsSize,c=e.valid,o=e.invalid,u=e.tag,d=e.addon,b=e.plaintext,g=e.innerRef,h=Object(r.a)(e,p),v=["radio","checkbox"].indexOf(l)>-1,O=new RegExp("\\D","g"),j=u||("select"===l||"textarea"===l?l:"input"),E="form-control";b?(E+="-plaintext",j=u||"input"):"file"===l?E+="-file":"range"===l?E+="-range":v&&(E=d?null:"form-check-input"),h.size&&O.test(h.size)&&(Object(f.v)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),s=h.size,delete h.size);var y=Object(f.p)(m()(a,o&&"is-invalid",c&&"is-valid",!!s&&"form-control-"+s,E),t);return("input"===j||u&&"function"===typeof u)&&(h.type=l),h.children&&!b&&"select"!==l&&"string"===typeof j&&"select"!==j&&(Object(f.v)('Input with a type of "'+l+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete h.children),i.a.createElement(j,Object(n.a)({},h,{ref:g,className:y,"aria-invalid":o}))},a}(i.a.Component);g.propTypes=b,g.defaultProps={type:"text"},a.a=g},270:function(e,a,t){"use strict";var n=t(6),r=t(12),l=t(0),s=t.n(l),c=t(1),i=t.n(c),o=t(5),u=t.n(o),d=t(4),m=["className","cssModule","row","disabled","check","inline","tag"],f={children:i.a.node,row:i.a.bool,check:i.a.bool,inline:i.a.bool,disabled:i.a.bool,tag:d.t,className:i.a.string,cssModule:i.a.object},p=function(e){var a=e.className,t=e.cssModule,l=e.row,c=e.disabled,i=e.check,o=e.inline,f=e.tag,p=Object(r.a)(e,m),b=Object(d.p)(u()(a,!!l&&"row",i?"form-check":"form-group",!(!i||!o)&&"form-check-inline",!(!i||!c)&&"disabled"),t);return"fieldset"===f&&(p.disabled=c),s.a.createElement(f,Object(n.a)({},p,{className:b}))};p.propTypes=f,p.defaultProps={tag:"div"},a.a=p},377:function(e,a,t){"use strict";var n=t(6),r=t(12),l=t(0),s=t.n(l),c=t(1),i=t.n(c),o=t(5),u=t.n(o),d=t(4),m=["className","cssModule","hidden","widths","tag","check","size","for"],f=i.a.oneOfType([i.a.number,i.a.string]),p=i.a.oneOfType([i.a.bool,i.a.string,i.a.number,i.a.shape({size:f,order:f,offset:f})]),b={children:i.a.node,hidden:i.a.bool,check:i.a.bool,size:i.a.string,for:i.a.string,tag:d.t,className:i.a.string,cssModule:i.a.object,xs:p,sm:p,md:p,lg:p,xl:p,widths:i.a.array},g={tag:"label",widths:["xs","sm","md","lg","xl"]},h=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},v=function(e){var a=e.className,t=e.cssModule,l=e.hidden,c=e.widths,i=e.tag,o=e.check,f=e.size,p=e.for,b=Object(r.a)(e,m),g=[];c.forEach((function(a,n){var r=e[a];if(delete b[a],r||""===r){var l,s=!n;if(Object(d.n)(r)){var c,i=s?"-":"-"+a+"-";l=h(s,a,r.size),g.push(Object(d.p)(u()(((c={})[l]=r.size||""===r.size,c["order"+i+r.order]=r.order||0===r.order,c["offset"+i+r.offset]=r.offset||0===r.offset,c))),t)}else l=h(s,a,r),g.push(l)}}));var v=Object(d.p)(u()(a,!!l&&"sr-only",!!o&&"form-check-label",!!f&&"col-form-label-"+f,g,!!g.length&&"col-form-label"),t);return s.a.createElement(i,Object(n.a)({htmlFor:p},b,{className:v}))};v.propTypes=b,v.defaultProps=g,a.a=v},383:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var n=t(19),r=t(18),l=Object(n.a)((function e(){Object(r.a)(this,e),this.id=0,this.createdBy="",this.createdOn="2019-01-06T17:16:40",this.updatedBy="",this.updatedOn="2019-01-06T17:16:40",this.deletedBy="",this.deletedOn="2019-01-06T17:16:40",this.isSoftDeleted=!0}))},453:function(e,a,t){"use strict";var n=t(6),r=t(12),l=t(0),s=t.n(l),c=t(1),i=t.n(c),o=t(5),u=t.n(o),d=t(4),m=["className","cssModule","tag"],f={tag:d.t,className:i.a.string,cssModule:i.a.object},p=function(e){var a=e.className,t=e.cssModule,l=e.tag,c=Object(r.a)(e,m),i=Object(d.p)(u()(a,"card-title"),t);return s.a.createElement(l,Object(n.a)({},c,{className:i}))};p.propTypes=f,p.defaultProps={tag:"div"},a.a=p},952:function(e,a,t){"use strict";t.r(a);var n=t(29),r=t(68),l=t(0),s=t.n(l),c=t(26),i=t(53),o=t(776),u=t(781),d=t(782),m=t(783),f=t(784),p=t(785),b=t(786),g=t(787),h=t(381),v=t(32),O=t(461),j=t.n(O),E=t(462),y=t.n(E),N=t(255),T=t(2),z=t(19),M=t(18),k=t(20),w=t(21),D=function(e){Object(k.a)(t,e);var a=Object(w.a)(t);function t(){var e;Object(M.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).name="",e.departmentId="",e}return Object(z.a)(t)}(t(383).a),x=t(22),I=function(e,a,t){var r=Object(l.useState)(e),s=Object(n.a)(r,2),c=s[0],i=s[1],o=Object(l.useState)({}),u=Object(n.a)(o,2),d=u[0],m=u[1];return{values:c,setValues:i,errors:d,setErrors:m,handleInputChange:function(e){var t=e.target,n=t.name,r=t.value,l=Object(x.a)({},n,r);i(Object(T.a)(Object(T.a)({},c),l)),a(l)},resetForm:function(){i(Object(T.a)({},e)),m({}),t(0)}}},R=t(272),C=t(306),S=t(265),P=t(453),L=t(264),A=t(270),B=t(377),F=t(268),V=t(96),J=new D;var _={createDesignation:i.c,updateDesignation:i.e},q=Object(c.b)((function(e){return{designationList:e.designation.list}}),_)((function(e){var a=Object.assign({},e),t=Object(N.useToasts)().addToast,n=function(){return!0},r=I(J,n,a.setCurrentId),c=r.values,i=r.setValues,o=(r.errors,r.setErrors),u=r.handleInputChange,d=r.resetForm,m=[{value:"ocean",label:"Ocean"},{value:"blue",label:"Blue"},{value:"purple",label:"Purple"},{value:"red",label:"Red"},{value:"orange",label:"Orange"}];return Object(l.useEffect)((function(){0!=a.currentId&&(i(Object(T.a)({},a.designationList.find((function(e){return e.id==a.currentId})))),o({}))}),[a.currentId]),s.a.createElement(s.a.Fragment,null,s.a.createElement("h2",null,"Create Designation"),s.a.createElement("form",{onSubmit:function(e){e.preventDefault();var n=function(){d(),t("Submitted successfully",{appearance:"success"})};0==a.currentId?a.createDesignation(c,n):a.updateDesignation(a.currentId,c,n)}},s.a.createElement(C.a,null,s.a.createElement(S.a,null,s.a.createElement(P.a,null,"Create Designation")),s.a.createElement(L.a,null,s.a.createElement(A.a,null,s.a.createElement(B.a,{for:"basicInput"},"Enter Branch Name"),s.a.createElement(F.a,{id:"basicInput",placeholder:"Branch Name",type:"text",name:"name",value:c.name,onChange:u,className:"form-control"})),s.a.createElement(A.a,null,s.a.createElement(B.a,{for:"basicInput"},"Select Department"),s.a.createElement(R.a,{className:"React",classNamePrefix:"select",defaultValue:m[2],name:"loading",options:m,isLoading:!0})))),s.a.createElement(V.a.Ripple,{type:"submit",color:"primary"},"Submit")))})),G=["classes"],H={fetchAllDesignation:i.d,deleteDesignation:i.b};a.default=Object(c.b)((function(e){return{designationList:e.designation.list}}),H)(Object(h.a)((function(e){return{root:{"& .MuiTableCell-head":{fontSize:"1.25rem"}},paper:{margin:e.spacing(2),padding:e.spacing(2)}}}))((function(e){var a=e.classes,t=Object(r.a)(e,G),c=Object(l.useState)(0),i=Object(n.a)(c,2),h=i[0],O=i[1],E=Object(l.useState)([]),T=Object(n.a)(E,2),z=T[0],M=T[1];Object(l.useEffect)((function(){M(t.fetchAllDesignation())}),[z]);var k=Object(N.useToasts)().addToast;return s.a.createElement("div",{elevation:3},s.a.createElement("div",{className:"row"},s.a.createElement("div",{item:!0,className:"col-md-4"},s.a.createElement(q,{currentId:h,setCurrentId:O})),s.a.createElement("div",{item:!0,className:"col-md-8"},s.a.createElement("h1",null,"Designation List"),s.a.createElement(o.a,null,s.a.createElement(u.a,null,s.a.createElement(d.a,{className:a.root},s.a.createElement(m.a,null,s.a.createElement(f.a,null,"Name"),s.a.createElement(f.a,null,"Department"),s.a.createElement(f.a,null,"Employees"),s.a.createElement(f.a,null,"EmployeementTerms"),s.a.createElement(f.a,null,"Actions"))),s.a.createElement(p.a,null,t.designationList.map((function(e,a){var n,r,l;return s.a.createElement(m.a,{key:a,hover:!0},s.a.createElement(f.a,null,e.name),s.a.createElement(f.a,null,s.a.createElement(v.a,{to:"/stateList"},null!==(n=e.departmentCount)&&void 0!==n?n:"N/A")),s.a.createElement(f.a,null,s.a.createElement(v.a,{to:"/employeeList"},null!==(r=e.employeesCount)&&void 0!==r?r:"N/A")),s.a.createElement(f.a,null,s.a.createElement(v.a,{to:"/clientList"},null!==(l=e.employeementTermsCount)&&void 0!==l?l:"N/A")),s.a.createElement(f.a,null,s.a.createElement(b.a,{variant:"text"},s.a.createElement(g.a,null,s.a.createElement(j.a,{color:"primary",onClick:function(){O(e.id)}})),s.a.createElement(g.a,null,s.a.createElement(y.a,{color:"secondary",onClick:function(){return a=e.id,void(window.confirm("Are you sure to delete this record?")&&t.deleteDesignation(a,(function(){return k("Deleted successfully",{appearance:"info"})})));var a}})))))}))))))))})))}}]);
//# sourceMappingURL=171.c6700561.chunk.js.map