/*! For license information please see 239.f45ea021.chunk.js.LICENSE.txt */
(this.webpackJsonpdesk_client=this.webpackJsonpdesk_client||[]).push([[239],{257:function(e,t,r){"use strict";var a=r(10),n=r(3),o=r.n(n),i=r(157),c=r(47);function l(){l=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},n=a.iterator||"@@iterator",o=a.asyncIterator||"@@asyncIterator",i=a.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(L){c=function(e,t,r){return e[t]=r}}function u(e,t,r,a){var n=t&&t.prototype instanceof h?t:h,o=Object.create(n.prototype),i=new O(a||[]);return o._invoke=function(e,t,r){var a="suspendedStart";return function(n,o){if("executing"===a)throw new Error("Generator is already running");if("completed"===a){if("throw"===n)throw o;return j()}for(r.method=n,r.arg=o;;){var i=r.delegate;if(i){var c=x(i,r);if(c){if(c===m)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===a)throw a="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);a="executing";var l=s(e,t,r);if("normal"===l.type){if(a=r.done?"completed":"suspendedYield",l.arg===m)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(a="completed",r.method="throw",r.arg=l.arg)}}}(e,r,i),o}function s(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(L){return{type:"throw",arg:L}}}e.wrap=u;var m={};function h(){}function d(){}function p(){}var f={};c(f,n,(function(){return this}));var v=Object.getPrototypeOf,y=v&&v(v(N([])));y&&y!==t&&r.call(y,n)&&(f=y);var g=p.prototype=h.prototype=Object.create(f);function E(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function b(e,t){var a;this._invoke=function(n,o){function i(){return new t((function(a,i){!function a(n,o,i,c){var l=s(e[n],e,o);if("throw"!==l.type){var u=l.arg,m=u.value;return m&&"object"==typeof m&&r.call(m,"__await")?t.resolve(m.__await).then((function(e){a("next",e,i,c)}),(function(e){a("throw",e,i,c)})):t.resolve(m).then((function(e){u.value=e,i(u)}),(function(e){return a("throw",e,i,c)}))}c(l.arg)}(n,o,a,i)}))}return a=a?a.then(i,i):i()}}function x(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,x(e,t),"throw"===t.method))return m;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var a=s(r,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,m;var n=a.arg;return n?n.done?(t[e.resultName]=n.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,m):n:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,m)}function T(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function w(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(T,this),this.reset(!0)}function N(e){if(e){var t=e[n];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,o=function t(){for(;++a<e.length;)if(r.call(e,a))return t.value=e[a],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:j}}function j(){return{value:void 0,done:!0}}return d.prototype=p,c(g,"constructor",p),c(p,"constructor",d),d.displayName=c(p,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,c(e,i,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},E(b.prototype),c(b.prototype,o,(function(){return this})),e.AsyncIterator=b,e.async=function(t,r,a,n,o){void 0===o&&(o=Promise);var i=new b(u(t,r,a,n),o);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},E(g),c(g,i,"Generator"),c(g,n,(function(){return this})),c(g,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var a=t.pop();if(a in e)return r.value=a,r.done=!1,r}return r.done=!0,r}},e.values=N,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(w),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function a(r,a){return i.type="throw",i.arg=e,t.next=r,a&&(t.method="next",t.arg=void 0),!!a}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],i=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(e,t){for(var a=this.tryEntries.length-1;a>=0;--a){var n=this.tryEntries[a];if(n.tryLoc<=this.prev&&r.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),w(r),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var a=r.completion;if("throw"===a.type){var n=a.arg;w(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:N(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),m}},e}var u=localStorage.getItem("token");function s(){return(s=Object(a.a)(l().mark((function e(t){var r,a,n,s=arguments;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=s.length>1&&void 0!==s[1]?s[1]:{},s.length>2&&void 0!==s[2]?s[2]:"",e.prev=2,e.next=5,o.a.post("".concat(c.a).concat(t),r,{headers:{authorization:u}});case 5:return a=e.sent,e.next=8,a;case 8:return e.abrupt("return",e.sent);case 11:throw e.prev=11,e.t0=e.catch(2),404===(null===e.t0||void 0===e.t0||null===(n=e.t0.response)||void 0===n?void 0:n.status)&&i.a.push("/404"),e.t0;case 15:case"end":return e.stop()}}),e,null,[[2,11]])})))).apply(this,arguments)}t.a=function(e){return s.apply(this,arguments)}},912:function(e,t,r){"use strict";r.r(t);var a=r(282),n=r(29),o=r(0),i=r.n(o),c=r(306),l=r(265),u=r(350),s=r(267),m=r(279),h=r(270),d=r(268),p=r(96),f=r(758),v=r(311),y=r(310),g=r(324),E=r(272),b=r(33),x=r(103),T=r(257),w=r(303),O=r(255);t.default=function(){var e=Object(b.g)(),t=Object(b.h)();localStorage.getItem("examTestTypeAttributeId");(null===t||void 0===t?void 0:t.examTestTypeId)&&localStorage.setItem("examTestTypeAttributeId",null===t||void 0===t?void 0:t.examTestTypeId);var r=Object(o.useState)([]),N=Object(n.a)(r,2),j=N[0],L=N[1],S=Object(o.useState)(!1),I=Object(n.a)(S,2),k=I[0],A=I[1],_=Object(o.useState)([]),G=Object(n.a)(_,2),F=G[0],D=G[1],C=Object(o.useState)("Field type"),P=Object(n.a)(C,2),B=P[0],Y=P[1],q=Object(o.useState)(""),J=Object(n.a)(q,2),z=J[0],R=J[1],U=Object(O.useToasts)().addToast;Object(o.useEffect)((function(){Object(x.a)("FieldType/GetAll").then((function(e){D(e)})),Object(x.a)("ExamTestTypeAttribute/GetByExamTestType/".concat(localStorage.getItem("examTestTypeAttributeId"))).then((function(e){L(e)}))}),[]);var H=function(){A(!1)},K=null===F||void 0===F?void 0:F.map((function(e){return{label:e.name,value:e.id}}));return i.a.createElement("div",null,i.a.createElement(c.a,{className:"uapp-card-bg"},i.a.createElement(l.a,{className:"page-header"},i.a.createElement("h3",{className:"text-light"},"Exam Test Type Attribute Details "),i.a.createElement("div",{className:"page-header-back-to-home"},i.a.createElement("span",{className:"text-light",onClick:function(){e.push("/examTestType")}}," ",i.a.createElement("i",{className:"fas fa-arrow-circle-left"})," Back to Exam Test Type List")))),i.a.createElement("div",{className:""},i.a.createElement(c.a,null,i.a.createElement(u.a,{className:"pt-3"},i.a.createElement(s.a,{md:"4"},i.a.createElement(c.a,{className:"uapp-card-bg mx-2"},i.a.createElement(l.a,{className:"page-header"},i.a.createElement("h3",{className:"text-light"},"Add Attribute"))),i.a.createElement(m.a,{className:"mt-5 mx-3",onSubmit:function(e){e.preventDefault();var t,r=new FormData(e.target),n=Object(a.a)(r.values());try{for(n.s();!(t=n.n()).done;){var o=t.value;console.log(typeof o)}}catch(i){n.e(i)}finally{n.f()}Object(T.a)("ExamTestTypeAttribute/Create",r).then((function(e){var t;console.log(e),U(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.message,{appearance:"error",autoDismiss:!0}),Object(x.a)("ExamTestTypeAttribute/GetByExamTestType/".concat(localStorage.getItem("examTestTypeAttributeId"))).then((function(e){console.log(e),L(e)}))}))}},i.a.createElement("input",{type:"hidden",name:"examTestTypeId",id:"examTestTypeId",value:localStorage.getItem("examTestTypeAttributeId")}),i.a.createElement(h.a,{row:!0,className:"has-icon-left position-relative"},i.a.createElement(s.a,{md:"4"},i.a.createElement("span",null,"Name ",i.a.createElement("span",{className:"text-danger"},"*")," ")),i.a.createElement(s.a,{md:"8"},i.a.createElement(d.a,{type:"text",name:"name",id:"name",placeholder:"Enter name",required:!0}))),i.a.createElement(h.a,{row:!0,className:"has-icon-left position-relative"},i.a.createElement(s.a,{md:"4"},i.a.createElement("span",null,"Field Type ",i.a.createElement("span",{className:"text-danger"},"*")," ")),i.a.createElement(s.a,{md:"8"},i.a.createElement(E.a,{options:K,value:{label:B,value:z},onChange:function(e){return t=e.label,r=e.value,Y(t),void R(r);var t,r},name:"fieldTypeId",id:"fieldTypeId",required:!0}))),i.a.createElement(h.a,{className:"has-icon-left position-relative",style:{display:"flex",justifyContent:"end"}},i.a.createElement(p.a.Ripple,{type:"submit",className:"mr-1 mt-3 badge-primary"},"Submit")))),i.a.createElement(s.a,{md:"8"},i.a.createElement("div",{className:"table-responsive page-header "},i.a.createElement(f.a,{className:"table-sm table-bordered"},i.a.createElement("thead",{className:"thead-uapp-bg"},i.a.createElement("tr",{style:{textAlign:"center"}},i.a.createElement("th",null," Name"),i.a.createElement("th",null,"Type"),i.a.createElement("th",null,"Action"))),i.a.createElement("tbody",null,null===j||void 0===j?void 0:j.map((function(e,t){return i.a.createElement("tr",{key:null===e||void 0===e?void 0:e.id},i.a.createElement("td",null,null===e||void 0===e?void 0:e.name),i.a.createElement("td",null,null===e||void 0===e?void 0:e.fieldTypeName),i.a.createElement("td",null,i.a.createElement(p.a,{className:"mx-2",onClick:function(){return null===e||void 0===e||e.name,null===e||void 0===e||e.id,void A(!0)},color:"danger"},i.a.createElement("i",{className:"fas fa-trash-alt"})),i.a.createElement(v.a,{isOpen:k,toggle:H,className:"uapp-modal"},i.a.createElement(y.a,null,i.a.createElement("p",null,"Are You Sure to Delete this? Once Deleted it can't be Undone!")),i.a.createElement(g.a,null,i.a.createElement(p.a,{color:"danger",onClick:function(){return t=e,console.log(t),void Object(w.a)("ExamTestTypeAttribute/Delete/".concat(null===t||void 0===t?void 0:t.id)).then((function(e){console.log(e),A(!1),U(e,{appearance:"error",autoDismiss:!0}),Object(x.a)("ExamTestTypeAttribute/GetByExamTestType/".concat(localStorage.getItem("examTestTypeAttributeId"))).then((function(e){console.log(e),L(e)}))}));var t}},"YES"),i.a.createElement(p.a,{onClick:H},"NO")))))}))))))))))}}}]);
//# sourceMappingURL=239.f45ea021.chunk.js.map