(this.webpackJsonpdesk_client=this.webpackJsonpdesk_client||[]).push([[52],{239:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(318);var r=n(302),o=n(319);function c(e,t){return Object(a.a)(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,r,o=[],c=!0,s=!1;try{for(n=n.call(e);!(c=(a=n.next()).done)&&(o.push(a.value),!t||o.length!==t);c=!0);}catch(l){s=!0,r=l}finally{try{c||null==n.return||n.return()}finally{if(s)throw r}}return o}}(e,t)||Object(r.a)(e,t)||Object(o.a)()}},242:function(e,t,n){"use strict";function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n.d(t,"a",(function(){return a}))},243:function(e,t,n){"use strict";function a(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function r(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}n.d(t,"a",(function(){return r}))},244:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",(function(){return a}))},245:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(12);function r(e,t){if(null==e)return{};var n,r,o=Object(a.a)(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}},249:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(346);var r=n(320),o=n(302);function c(e){return function(e){if(Array.isArray(e))return Object(a.a)(e)}(e)||Object(r.a)(e)||Object(o.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},264:function(e,t,n){"use strict";var a=n(6),r=n(12),o=n(0),c=n.n(o),s=n(1),l=n.n(s),i=n(5),u=n.n(i),f=n(4),d=["className","cssModule","innerRef","tag"],p={tag:f.t,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},m=function(e){var t=e.className,n=e.cssModule,o=e.innerRef,s=e.tag,l=Object(r.a)(e,d),i=Object(f.p)(u()(t,"card-body"),n);return c.a.createElement(s,Object(a.a)({},l,{className:i,ref:o}))};m.propTypes=p,m.defaultProps={tag:"div"},t.a=m},265:function(e,t,n){"use strict";var a=n(6),r=n(12),o=n(0),c=n.n(o),s=n(1),l=n.n(s),i=n(5),u=n.n(i),f=n(4),d=["className","cssModule","tag"],p={tag:f.t,className:l.a.string,cssModule:l.a.object},m=function(e){var t=e.className,n=e.cssModule,o=e.tag,s=Object(r.a)(e,d),l=Object(f.p)(u()(t,"card-header"),n);return c.a.createElement(o,Object(a.a)({},s,{className:l}))};m.propTypes=p,m.defaultProps={tag:"div"},t.a=m},268:function(e,t,n){"use strict";var a=n(6),r=n(12),o=n(17),c=n(13),s=n(0),l=n.n(s),i=n(1),u=n.n(i),f=n(5),d=n.n(f),p=n(4),m=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],b={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:p.t,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},y=function(e){function t(t){var n;return(n=e.call(this,t)||this).getRef=n.getRef.bind(Object(o.a)(n)),n.focus=n.focus.bind(Object(o.a)(n)),n}Object(c.a)(t,e);var n=t.prototype;return n.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},n.focus=function(){this.ref&&this.ref.focus()},n.render=function(){var e=this.props,t=e.className,n=e.cssModule,o=e.type,c=e.bsSize,s=e.valid,i=e.invalid,u=e.tag,f=e.addon,b=e.plaintext,y=e.innerRef,g=Object(r.a)(e,m),h=["radio","checkbox"].indexOf(o)>-1,v=new RegExp("\\D","g"),O=u||("select"===o||"textarea"===o?o:"input"),j="form-control";b?(j+="-plaintext",O=u||"input"):"file"===o?j+="-file":"range"===o?j+="-range":h&&(j=f?null:"form-check-input"),g.size&&v.test(g.size)&&(Object(p.v)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),c=g.size,delete g.size);var E=Object(p.p)(d()(t,i&&"is-invalid",s&&"is-valid",!!c&&"form-control-"+c,j),n);return("input"===O||u&&"function"===typeof u)&&(g.type=o),g.children&&!b&&"select"!==o&&"string"===typeof O&&"select"!==O&&(Object(p.v)('Input with a type of "'+o+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),l.a.createElement(O,Object(a.a)({},g,{ref:y,className:E,"aria-invalid":i}))},t}(l.a.Component);y.propTypes=b,y.defaultProps={type:"text"},t.a=y},270:function(e,t,n){"use strict";var a=n(6),r=n(12),o=n(0),c=n.n(o),s=n(1),l=n.n(s),i=n(5),u=n.n(i),f=n(4),d=["className","cssModule","row","disabled","check","inline","tag"],p={children:l.a.node,row:l.a.bool,check:l.a.bool,inline:l.a.bool,disabled:l.a.bool,tag:f.t,className:l.a.string,cssModule:l.a.object},m=function(e){var t=e.className,n=e.cssModule,o=e.row,s=e.disabled,l=e.check,i=e.inline,p=e.tag,m=Object(r.a)(e,d),b=Object(f.p)(u()(t,!!o&&"row",l?"form-check":"form-group",!(!l||!i)&&"form-check-inline",!(!l||!s)&&"disabled"),n);return"fieldset"===p&&(m.disabled=s),c.a.createElement(p,Object(a.a)({},m,{className:b}))};m.propTypes=p,m.defaultProps={tag:"div"},t.a=m},302:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(346);function r(e,t){if(e){if("string"===typeof e)return Object(a.a)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(a.a)(e,t):void 0}}},306:function(e,t,n){"use strict";var a=n(6),r=n(12),o=n(0),c=n.n(o),s=n(1),l=n.n(s),i=n(5),u=n.n(i),f=n(4),d=["className","cssModule","color","body","inverse","outline","tag","innerRef"],p={tag:f.t,inverse:l.a.bool,color:l.a.string,body:l.a.bool,outline:l.a.bool,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},m=function(e){var t=e.className,n=e.cssModule,o=e.color,s=e.body,l=e.inverse,i=e.outline,p=e.tag,m=e.innerRef,b=Object(r.a)(e,d),y=Object(f.p)(u()(t,"card",!!l&&"text-white",!!s&&"card-body",!!o&&(i?"border":"bg")+"-"+o),n);return c.a.createElement(p,Object(a.a)({},b,{className:y,ref:m}))};m.propTypes=p,m.defaultProps={tag:"div"},t.a=m},318:function(e,t,n){"use strict";function a(e){if(Array.isArray(e))return e}n.d(t,"a",(function(){return a}))},319:function(e,t,n){"use strict";function a(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}n.d(t,"a",(function(){return a}))},320:function(e,t,n){"use strict";function a(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}n.d(t,"a",(function(){return a}))},346:function(e,t,n){"use strict";function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}n.d(t,"a",(function(){return a}))},377:function(e,t,n){"use strict";var a=n(6),r=n(12),o=n(0),c=n.n(o),s=n(1),l=n.n(s),i=n(5),u=n.n(i),f=n(4),d=["className","cssModule","hidden","widths","tag","check","size","for"],p=l.a.oneOfType([l.a.number,l.a.string]),m=l.a.oneOfType([l.a.bool,l.a.string,l.a.number,l.a.shape({size:p,order:p,offset:p})]),b={children:l.a.node,hidden:l.a.bool,check:l.a.bool,size:l.a.string,for:l.a.string,tag:f.t,className:l.a.string,cssModule:l.a.object,xs:m,sm:m,md:m,lg:m,xl:m,widths:l.a.array},y={tag:"label",widths:["xs","sm","md","lg","xl"]},g=function(e,t,n){return!0===n||""===n?e?"col":"col-"+t:"auto"===n?e?"col-auto":"col-"+t+"-auto":e?"col-"+n:"col-"+t+"-"+n},h=function(e){var t=e.className,n=e.cssModule,o=e.hidden,s=e.widths,l=e.tag,i=e.check,p=e.size,m=e.for,b=Object(r.a)(e,d),y=[];s.forEach((function(t,a){var r=e[t];if(delete b[t],r||""===r){var o,c=!a;if(Object(f.n)(r)){var s,l=c?"-":"-"+t+"-";o=g(c,t,r.size),y.push(Object(f.p)(u()(((s={})[o]=r.size||""===r.size,s["order"+l+r.order]=r.order||0===r.order,s["offset"+l+r.offset]=r.offset||0===r.offset,s))),n)}else o=g(c,t,r),y.push(o)}}));var h=Object(f.p)(u()(t,!!o&&"sr-only",!!i&&"form-check-label",!!p&&"col-form-label-"+p,y,!!y.length&&"col-form-label"),n);return c.a.createElement(l,Object(a.a)({htmlFor:m},b,{className:h}))};h.propTypes=b,h.defaultProps=y,t.a=h},383:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(19),r=n(18),o=Object(a.a)((function e(){Object(r.a)(this,e),this.id=0,this.createdBy="",this.createdOn="2019-01-06T17:16:40",this.updatedBy="",this.updatedOn="2019-01-06T17:16:40",this.deletedBy="",this.deletedOn="2019-01-06T17:16:40",this.isSoftDeleted=!0}))},453:function(e,t,n){"use strict";var a=n(6),r=n(12),o=n(0),c=n.n(o),s=n(1),l=n.n(s),i=n(5),u=n.n(i),f=n(4),d=["className","cssModule","tag"],p={tag:f.t,className:l.a.string,cssModule:l.a.object},m=function(e){var t=e.className,n=e.cssModule,o=e.tag,s=Object(r.a)(e,d),l=Object(f.p)(u()(t,"card-title"),n);return c.a.createElement(o,Object(a.a)({},s,{className:l}))};m.propTypes=p,m.defaultProps={tag:"div"},t.a=m},460:function(e,t){function n(t){return e.exports=n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,n(t)}e.exports=n,e.exports.__esModule=!0,e.exports.default=e.exports},957:function(e,t,n){"use strict";n.r(t);var a=n(29),r=n(68),o=n(0),c=n.n(o),s=n(26),l=n(57),i=n(787),u=n(776),f=n(781),d=n(782),p=n(783),m=n(784),b=n(785),y=n(786),g=n(381),h=n(461),v=n.n(h),O=n(462),j=n.n(O),E=n(255),N=n(2),S=n(306),w=n(265),x=n(453),T=n(264),I=n(270),M=n(377),k=n(268),F=n(96),P=n(19),z=n(18),C=n(20),R=n(21),A=function(e){Object(C.a)(n,e);var t=Object(R.a)(n);function n(){return Object(z.a)(this,n),t.apply(this,arguments)}return Object(P.a)(n)}(n(383).a),L=n(22),_=function(e,t,n){var r=Object(o.useState)(e),c=Object(a.a)(r,2),s=c[0],l=c[1],i=Object(o.useState)({}),u=Object(a.a)(i,2),f=u[0],d=u[1];return{values:s,setValues:l,errors:f,setErrors:d,handleInputChange:function(e){var n=e.target,a=n.name,r=n.value,o=Object(L.a)({},a,r);l(Object(N.a)(Object(N.a)({},s),o)),t(o)},resetForm:function(){l(Object(N.a)({},e)),d({}),n(0)}}},D=new A;var B={createNoticeForEmployee:l.c,updateNoticeForEmployee:l.e},V=Object(s.b)((function(e){return{noticeForEmployeeList:e.noticeForEmployee.list}}),B)((function(e){var t=Object.assign({},e),n=Object(E.useToasts)().addToast,a=function(){return!0},r=_(D,a,t.setCurrentId),s=r.values,l=r.setValues,i=(r.errors,r.setErrors),u=r.handleInputChange,f=r.resetForm;return Object(o.useEffect)((function(){0!=t.currentId&&(l(Object(N.a)({},t.noticeForEmployeeList.find((function(e){return e.id==t.currentId})))),i({}))}),[t.currentId]),c.a.createElement(c.a.Fragment,null,c.a.createElement("form",{onSubmit:function(e){e.preventDefault();var a=function(){f(),n("Submitted successfully",{appearance:"success"})};0==t.currentId?t.createNoticeForEmployee(s,a):t.updateNoticeForEmployee(t.currentId,s,a)}},c.a.createElement(S.a,null,c.a.createElement(w.a,null,c.a.createElement(x.a,null,"Create Notice For Employee")),c.a.createElement(T.a,null,c.a.createElement(I.a,null,c.a.createElement(M.a,{for:"basicInput"},"Enter Notice Title"),c.a.createElement(k.a,{id:"basicInput",placeholder:"Notice Title",type:"text",name:"name",value:s.noticeTitle,onChange:u,className:"form-control"})),c.a.createElement(I.a,null,c.a.createElement(M.a,{for:"basicInput"},"Enter Notice Content"),c.a.createElement(k.a,{type:"textarea",id:"basicInput",placeholder:"Notice Content",name:"address",value:s.noticeContent,onChange:u,className:"form-control"})))),c.a.createElement(F.a.Ripple,{type:"submit",color:"primary"},"Submit")))})),J=n(935),U=["classes"],$={fetchAllNoticeForEmployee:l.d,deleteNoticeForEmployee:l.b};t.default=Object(s.b)((function(e){return{noticeForEmployeeList:e.noticeForEmployee.list}}),$)(Object(g.a)((function(e){return{root:{"& .MuiTableCell-head":{fontSize:"1.25rem"}},paper:{margin:e.spacing(2),padding:e.spacing(2)}}}))((function(e){var t=e.classes,n=Object(r.a)(e,U),s=Object(o.useState)(0),l=Object(a.a)(s,2),g=l[0],h=l[1],O=c.a.useState(0),N=Object(a.a)(O,2),S=N[0],w=N[1],x=c.a.useState(5),T=Object(a.a)(x,2),I=T[0],M=T[1];Object(o.useEffect)((function(){n.fetchAllNoticeForEmployee()}),[]);var k=Object(E.useToasts)().addToast;return c.a.createElement("div",{className:"row"},c.a.createElement("div",{item:!0,className:"col-md-3"},c.a.createElement(V,{currentId:g,setCurrentId:h})),c.a.createElement("div",{item:!0,className:"col-md-9"},c.a.createElement("h1",null,"Employee Notice List"),c.a.createElement(i.a,{color:"success",style:{marginTop:"3px"},type:"submit",className:"btn btn-primary",onClick:V},"Add"),c.a.createElement(u.a,null,c.a.createElement(f.a,null,c.a.createElement(d.a,{className:t.root},c.a.createElement(p.a,null,c.a.createElement(m.a,null,"Notice Item"),c.a.createElement(m.a,null,"Employee Id"),c.a.createElement(m.a,null,"Actions"))),c.a.createElement(b.a,null,n.noticeForEmployeeList.map((function(e,t){var a;return c.a.createElement(p.a,{key:t,hover:!0},c.a.createElement(m.a,null,e.noticeItemId),c.a.createElement(m.a,null,null!==(a=e.employeeId)&&void 0!==a?a:"N?A"),c.a.createElement(m.a,null,c.a.createElement(y.a,{variant:"text"},c.a.createElement(i.a,null,c.a.createElement(v.a,{color:"primary",onClick:function(){h(e.id)}})),c.a.createElement(i.a,null,c.a.createElement(j.a,{color:"secondary",onClick:function(){return t=e.id,void(window.confirm("Are you sure to delete this record?")&&n.deleteNoticeForEmployee(t,(function(){return k("Deleted successfully",{appearance:"info"})})));var t}})))))}))))),c.a.createElement(J.a,{rowsPerPageOptions:[5,10,25],component:"div",count:n.noticeForEmployeeList.length,rowsPerPage:I,page:S,onPageChange:function(e,t){w(t)},onRowsPerPageChange:function(e){M(parseInt(e.target.value,10)),w(0)}})))})))}}]);
//# sourceMappingURL=52.1a14f884.chunk.js.map