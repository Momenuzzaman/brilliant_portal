/*! For license information please see 171.47f5057f.chunk.js.LICENSE.txt */
(this.webpackJsonpdesk_client=this.webpackJsonpdesk_client||[]).push([[171],{253:function(e,t,r){"use strict";var n=r(10),a=r(3),o=r.n(a),c=r(103),i=r(101);function l(){l=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",c=n.toStringTag||"@@toStringTag";function i(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{i({},"")}catch(N){i=function(e,t,r){return e[t]=r}}function u(e,t,r,n){var a=t&&t.prototype instanceof f?t:f,o=Object.create(a.prototype),c=new O(n||[]);return o._invoke=function(e,t,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return L()}for(r.method=a,r.arg=o;;){var c=r.delegate;if(c){var i=w(c,r);if(i){if(i===h)continue;return i}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=s(e,t,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===h)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(e,r,c),o}function s(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(N){return{type:"throw",arg:N}}}e.wrap=u;var h={};function f(){}function m(){}function p(){}var d={};i(d,a,(function(){return this}));var v=Object.getPrototypeOf,y=v&&v(v(j([])));y&&y!==t&&r.call(y,a)&&(d=y);var g=p.prototype=f.prototype=Object.create(d);function b(e){["next","throw","return"].forEach((function(t){i(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){var n;this._invoke=function(a,o){function c(){return new t((function(n,c){!function n(a,o,c,i){var l=s(e[a],e,o);if("throw"!==l.type){var u=l.arg,h=u.value;return h&&"object"==typeof h&&r.call(h,"__await")?t.resolve(h.__await).then((function(e){n("next",e,c,i)}),(function(e){n("throw",e,c,i)})):t.resolve(h).then((function(e){u.value=e,c(u)}),(function(e){return n("throw",e,c,i)}))}i(l.arg)}(a,o,n,c)}))}return n=n?n.then(c,c):c()}}function w(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method))return h;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=s(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,h;var a=n.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,h):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,h)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function k(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function j(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:L}}function L(){return{value:void 0,done:!0}}return m.prototype=p,i(g,"constructor",p),i(p,"constructor",m),m.displayName=i(p,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,i(e,c,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},b(E.prototype),i(E.prototype,o,(function(){return this})),e.AsyncIterator=E,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var c=new E(u(t,r,n,a),o);return e.isGeneratorFunction(r)?c:c.next().then((function(e){return e.done?e.value:c.next()}))},b(g),i(g,c,"Generator"),i(g,a,(function(){return this})),i(g,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=j,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return c.type="throw",c.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],c=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var i=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(i&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=e,c.arg=t,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(c)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),k(r),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;k(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:j(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},e}function u(){return(u=Object(n.a)(l().mark((function e(t){var r,n,a,u,s=arguments;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=s.length>1&&void 0!==s[1]?s[1]:{},n=s.length>2&&void 0!==s[2]?s[2]:"",e.prev=2,e.next=5,o.a.post("".concat(i.a).concat(t),r,n||"");case 5:return a=e.sent,e.next=8,a;case 8:return e.abrupt("return",e.sent);case 11:throw e.prev=11,e.t0=e.catch(2),404===(null===e.t0||void 0===e.t0||null===(u=e.t0.response)||void 0===u?void 0:u.status)&&c.a.push("/404"),e.t0;case 15:case"end":return e.stop()}}),e,null,[[2,11]])})))).apply(this,arguments)}t.a=function(e){return u.apply(this,arguments)}},767:function(e,t,r){"use strict";r.r(t);var n=r(8),a=r(29),o=r(0),c=r.n(o),i=r(25),l=r(265),u=r(252),s=r(275),h=r(277),f=r(260),m=r(278),p=r(276),d=r(256),v=r(306),y=r(100),g=r(351),b=r(349),E=(r(112),r(33)),w=r(253),x=r(102);t.default=Object(i.b)((function(e){return{roleList:e.roleDataReducer.roles}}))((function(e){var t=Object(o.createRef)(),r=e.roleList[0],k=Object(o.useState)(!1),O=Object(a.a)(k,2),j=O[0],L=O[1],N=Object(o.useState)([]),S=Object(a.a)(N,2),_=S[0],C=S[1],P=Object(o.useState)("Select Role..."),A=Object(a.a)(P,2),G=A[0],F=A[1],R=Object(o.useState)(""),I=Object(a.a)(R,2),T=I[0],D=I[1],B=Object(o.useState)(!1),Y=Object(a.a)(B,2),J=Y[0],q=Y[1],z=Object(o.useState)([]),H=Object(a.a)(z,2),K=H[0],M=H[1],Q=(Object(i.c)(),Object(u.useToasts)().addToast),U=Object(E.g)(),V=null===r||void 0===r?void 0:r.map((function(e){return{label:e.name,value:e.id}}));return c.a.createElement("div",null,c.a.createElement(s.a,{className:"uapp-card-bg"},c.a.createElement(h.a,{className:"page-header "},c.a.createElement("h3",{className:"text-light"},"Assign Permissions"),c.a.createElement("div",{className:"page-header-back-to-home"},c.a.createElement("span",{onClick:function(){U.push("/")},className:"text-light"}," ",c.a.createElement("i",{className:"fas fa-arrow-circle-left"})," Back to Dashboard")))),c.a.createElement(s.a,null,c.a.createElement(h.a,null,"Select Role"),c.a.createElement(f.a,null,c.a.createElement(m.a,{onSubmit:function(e){if(e.preventDefault(),L(!0),J){C([]);var t=new FormData;t.append("RoleId",T),t.append("CheckedArr",K);Object(w.a)("RolePermission/Assign",t).then((function(e){M([]),Q(e,{appearance:"Permission Assigned Successfully"==e?"success":"error",autoDismiss:!0})}))}},ref:t},c.a.createElement(p.a,{row:!0},c.a.createElement(d.a,{sm:"6",md:"4",lg:"3"},c.a.createElement(l.a,{options:V,value:{label:G,value:T},onChange:function(e){return function(e,t){C([]),K=[],F(e),D(t);Object(x.a)("RolePermission/GetCheckBoxes/".concat(t)).then((function(e){C(e);var t=K;if(e.length>0)for(var r=0;r<e.length;r++){var a=e[r];if(1==a.isChecked){var o=a.permissionId.toString();t.push(o),M(Object(n.a)(t))}}}))}(e.label,e.value)},name:"type",id:"type"}))),c.a.createElement(p.a,null,c.a.createElement(v.a,null,c.a.createElement(d.a,{sm:"12"},_.length>0&&c.a.createElement("div",{className:"form-check"},c.a.createElement("input",{className:"form-check-input",onChange:function(e){return function(e){var t=[],r=e.target.checked;1==r&&(_.map((function(e){var r=e.id.toString();t.push(r),document.getElementById(e.id).checked=!0})),M([].concat(t))),0==r&&(_.map((function(e){document.getElementById(e.id).checked=!1})),M([]))}(e)},type:"checkbox",name:""}),c.a.createElement("label",{className:"form-check-label",htmlFor:""},"Select All"))),null!=T&&(null===_||void 0===_?void 0:_.map((function(e){return c.a.createElement(d.a,{xs:"6",sm:"4",md:"3",key:e.id},c.a.createElement("div",{className:"form-check"},c.a.createElement("input",{className:"form-check-input",onChange:function(e){return function(e){var t=e.target.id;if(1==e.target.checked)M([].concat(Object(n.a)(K),[t]));else{var r=K.indexOf(t);r>-1&&K.splice(r,1)}}(e)},type:"checkbox",name:"",id:e.id,defaultChecked:e.isChecked}),c.a.createElement("label",{className:"form-check-label",htmlFor:""},e.permissionName)))}))))),c.a.createElement(p.a,{style:{display:"flex",justifyContent:"space-between"}},c.a.createElement(v.a,null,c.a.createElement(d.a,null,c.a.createElement(y.a.Ripple,{type:"submit",className:"mr-1 mt-3 badge-primary"},"Submit"))))),c.a.createElement(g.a,{isOpen:j,toggle:function(){return L(!j)},className:"uapp-modal"},c.a.createElement(b.a,null,c.a.createElement("p",null,"Are You Sure to Assign Selected Permissions?"),c.a.createElement(v.a,{className:"mt-3"},c.a.createElement(d.a,{md:"6",className:"text-left"},c.a.createElement(y.a,{color:"success",onClick:function(){return q(!0)}},"Yes")),c.a.createElement(d.a,{md:"6",className:"text-right"},c.a.createElement(y.a,{color:"danger",onClick:function(){return L(!1)}},"Cancel"))))))))}))}}]);
//# sourceMappingURL=171.47f5057f.chunk.js.map