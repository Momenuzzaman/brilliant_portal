/*! For license information please see 194.59214938.chunk.js.LICENSE.txt */
(this.webpackJsonpdesk_client=this.webpackJsonpdesk_client||[]).push([[194],{248:function(t,e,r){"use strict";var n=r(0),a=r.n(n),o=r(98);e.a=function(t){var e=t.className,r=t.icon,n=t.color,i=(t.permission,t.type),c=(t.url,t.func),l=t.name,s=t.disable;return a.a.createElement(a.a.Fragment,null,a.a.createElement(o.a,{onClick:c,color:n,type:i,className:e,disabled:s}," ",r,l," "))}},250:function(t,e,r){"use strict";var n=r(9),a=r(3),o=r.n(a),i=r(151),c=r(29);function l(){l=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(_){c=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var a=e&&e.prototype instanceof h?e:h,o=Object.create(a.prototype),i=new L(n||[]);return o._invoke=function(t,e,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return j()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=E(i,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=u(t,e,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===f)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(t,r,i),o}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(_){return{type:"throw",arg:_}}}t.wrap=s;var f={};function h(){}function d(){}function p(){}var m={};c(m,a,(function(){return this}));var v=Object.getPrototypeOf,y=v&&v(v(O([])));y&&y!==e&&r.call(y,a)&&(m=y);var g=p.prototype=h.prototype=Object.create(m);function w(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){var n;this._invoke=function(a,o){function i(){return new e((function(n,i){!function n(a,o,i,c){var l=u(t[a],t,o);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(f).then((function(t){s.value=t,i(s)}),(function(t){return n("throw",t,i,c)}))}c(l.arg)}(a,o,n,i)}))}return n=n?n.then(i,i):i()}}function E(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method))return f;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var n=u(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,f;var a=n.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function N(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(N,this),this.reset(!0)}function O(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:j}}function j(){return{value:void 0,done:!0}}return d.prototype=p,c(g,"constructor",p),c(p,"constructor",d),d.displayName=c(p,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,c(t,i,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},w(b.prototype),c(b.prototype,o,(function(){return this})),t.AsyncIterator=b,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var i=new b(s(e,r,n,a),o);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},w(g),c(g,i,"Generator"),c(g,a,(function(){return this})),c(g,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=O,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),x(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;x(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:O(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}var s=localStorage.getItem("token");function u(){return(u=Object(n.a)(l().mark((function t(e){var r,n,a,u=arguments;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=u.length>1&&void 0!==u[1]?u[1]:{},u.length>2&&void 0!==u[2]?u[2]:"",t.prev=2,t.next=5,o.a.post("".concat(c.a).concat(e),r,{headers:{authorization:s}});case 5:return n=t.sent,t.next=8,n;case 8:return t.abrupt("return",t.sent);case 11:throw t.prev=11,t.t0=t.catch(2),404===(null===t.t0||void 0===t.t0||null===(a=t.t0.response)||void 0===a?void 0:a.status)&&i.a.push("/404"),t.t0;case 15:case"end":return t.stop()}}),t,null,[[2,11]])})))).apply(this,arguments)}e.a=function(t){return u.apply(this,arguments)}},251:function(t,e,r){"use strict";var n=r(9),a=r(3),o=r.n(a),i=(r(151),r(29));function c(){c=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(_){l=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var a=e&&e.prototype instanceof h?e:h,o=Object.create(a.prototype),i=new L(n||[]);return o._invoke=function(t,e,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return j()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=E(i,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=u(t,e,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===f)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(t,r,i),o}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(_){return{type:"throw",arg:_}}}t.wrap=s;var f={};function h(){}function d(){}function p(){}var m={};l(m,a,(function(){return this}));var v=Object.getPrototypeOf,y=v&&v(v(O([])));y&&y!==e&&r.call(y,a)&&(m=y);var g=p.prototype=h.prototype=Object.create(m);function w(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){var n;this._invoke=function(a,o){function i(){return new e((function(n,i){!function n(a,o,i,c){var l=u(t[a],t,o);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(f).then((function(t){s.value=t,i(s)}),(function(t){return n("throw",t,i,c)}))}c(l.arg)}(a,o,n,i)}))}return n=n?n.then(i,i):i()}}function E(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method))return f;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var n=u(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,f;var a=n.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function N(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(N,this),this.reset(!0)}function O(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:j}}function j(){return{value:void 0,done:!0}}return d.prototype=p,l(g,"constructor",p),l(p,"constructor",d),d.displayName=l(p,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,l(t,i,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},w(b.prototype),l(b.prototype,o,(function(){return this})),t.AsyncIterator=b,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var i=new b(s(e,r,n,a),o);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},w(g),l(g,i,"Generator"),l(g,a,(function(){return this})),l(g,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=O,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),x(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;x(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:O(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}var l=localStorage.getItem("token");function s(){return(s=Object(n.a)(c().mark((function t(e){var r,n,a=arguments;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a.length>1&&void 0!==a[1]?a[1]:{},a.length>2&&void 0!==a[2]?a[2]:"",t.prev=2,t.next=5,o.a.put("".concat(i.a).concat(e),r,{headers:{authorization:l}});case 5:return n=t.sent,t.next=8,n;case 8:return t.abrupt("return",t.sent);case 11:return t.prev=11,t.t0=t.catch(2),t.abrupt("return",t.t0);case 14:case"end":return t.stop()}}),t,null,[[2,11]])})))).apply(this,arguments)}e.a=function(t){return s.apply(this,arguments)}},254:function(t,e,r){"use strict";var n=r(11),a=r(15),o=r(0),i=r.n(o),c=r(2),l=r.n(c),s=r(8),u=r.n(s),f=r(7),h=["className","cssModule","innerRef","tag"],d={tag:f.t,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},p=function(t){var e=t.className,r=t.cssModule,o=t.innerRef,c=t.tag,l=Object(a.a)(t,h),s=Object(f.p)(u()(e,"card-body"),r);return i.a.createElement(c,Object(n.a)({},l,{className:s,ref:o}))};p.propTypes=d,p.defaultProps={tag:"div"},e.a=p},259:function(t,e,r){"use strict";var n=r(11),a=r(15),o=r(0),i=r.n(o),c=r(2),l=r.n(c),s=r(8),u=r.n(s),f=r(7),h=["className","cssModule","tag"],d={tag:f.t,className:l.a.string,cssModule:l.a.object},p=function(t){var e=t.className,r=t.cssModule,o=t.tag,c=Object(a.a)(t,h),l=Object(f.p)(u()(e,"card-header"),r);return i.a.createElement(o,Object(n.a)({},c,{className:l}))};p.propTypes=d,p.defaultProps={tag:"div"},e.a=p},291:function(t,e,r){"use strict";var n=r(11),a=r(15),o=r(0),i=r.n(o),c=r(2),l=r.n(c),s=r(8),u=r.n(s),f=r(7),h=["className","cssModule","color","body","inverse","outline","tag","innerRef"],d={tag:f.t,inverse:l.a.bool,color:l.a.string,body:l.a.bool,outline:l.a.bool,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},p=function(t){var e=t.className,r=t.cssModule,o=t.color,c=t.body,l=t.inverse,s=t.outline,d=t.tag,p=t.innerRef,m=Object(a.a)(t,h),v=Object(f.p)(u()(e,"card",!!l&&"text-white",!!c&&"card-body",!!o&&(s?"border":"bg")+"-"+o),r);return i.a.createElement(d,Object(n.a)({},m,{className:v,ref:p}))};p.propTypes=d,p.defaultProps={tag:"div"},e.a=p},302:function(t,e,r){"use strict";var n=r(0),a=r.n(n),o=r(98);e.a=function(t){var e=t.isDisabled,r=t.className,n=(t.icon,t.color),i=(t.permission,t.type),c=(t.url,t.func),l=t.name;return a.a.createElement(a.a.Fragment,null,a.a.createElement(o.a.Ripple,{disabled:e,onClick:c,color:n,type:i,className:r},l))}},958:function(t,e,r){"use strict";r.r(e);var n=r(19),a=r(0),o=r.n(a),i=r(37),c=r(291),l=r(259),s=r(254),u=r(100),f=(r(252),r(248));r(302),r(250),r(251),r(289);e.default=function(){var t=Object(a.useState)({}),e=Object(n.a)(t,2),r=e[0],h=e[1],d=Object(a.useState)([]),p=Object(n.a)(d,2),m=p[0],v=p[1],y=Object(i.i)().officerId,g=Object(i.g)(),w=Object(i.h)();Object(a.useEffect)((function(){Object(u.a)("AdmissionOfficer/Profile/".concat(y)).then((function(t){h(t),v(null===t||void 0===t?void 0:t.admissionManager)}))}),[y]);return o.a.createElement("div",null,o.a.createElement(c.a,{className:"uapp-card-bg"},o.a.createElement(l.a,{className:"page-header"},o.a.createElement("h3",{className:"text-white"},"Admission Officer Details"),o.a.createElement("div",{className:"page-header-back-to-home"},o.a.createElement("span",{onClick:function(){void 0!=w.managerId&&void 0!=w.providerId?g.push("/providerAdmissionManager/".concat(w.managerId,"/").concat(w.providerId)):g.push("/admissionOfficerList")},className:"text-white"}," ",o.a.createElement("i",{className:"fas fa-arrow-circle-left"})," ",void 0!=w.managerId&&void 0!=w.providerId?"Back to Admission Manager Details":"Back to Admission Officer List")))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-8 col-sm-12"},o.a.createElement(c.a,{className:"uapp-employee-profile-right"},o.a.createElement("div",{className:"uapp-profile-CardHeader"},o.a.createElement("div",{className:"py-3"},o.a.createElement("h5",{className:"py-1"},"Name:"," ",o.a.createElement("span",{className:"text-primary"},null===r||void 0===r?void 0:r.nameTittleName," ",null===r||void 0===r?void 0:r.firstName," ",null===r||void 0===r?void 0:r.lastName)," "),o.a.createElement("h5",{className:"py-1"},"Provider:"," ",o.a.createElement("span",{className:"text-primary"},null===r||void 0===r?void 0:r.providerName)," "),o.a.createElement("h5",{className:"py-1"}," ","Email:"," ",o.a.createElement("span",{className:"text-primary"},null===r||void 0===r?void 0:r.email)," "),o.a.createElement("h5",{className:"py-1"}," ","Phone Number:"," ",o.a.createElement("span",{className:"text-primary"},null===r||void 0===r?void 0:r.phoneNumber)," "))),o.a.createElement(s.a,null,o.a.createElement("div",null,o.a.createElement("ul",{className:"uapp-ul text-center"},o.a.createElement("h5",null," ","State:"," ",o.a.createElement("span",{className:"text-primary"},null===r||void 0===r?void 0:r.stateName)," "),o.a.createElement("h5",null," ","City:"," ",o.a.createElement("span",{className:"text-primary"},null===r||void 0===r?void 0:r.city)," ")))))),o.a.createElement("div",{className:"col-md-4 col-sm-12",style:{marginTop:"40px"}},o.a.createElement(c.a,{className:"container py-4"},o.a.createElement("div",{className:"hedding-titel d-flex justify-content-between ms-1"},o.a.createElement("div",null,o.a.createElement("h5",null," ",o.a.createElement("b",null,"Admission Manager List")," "),o.a.createElement("div",{className:"bg-h"}))),null===m||void 0===m?void 0:m.map((function(t,e){return o.a.createElement("div",{key:e,className:"customCard rounded mt-3"},o.a.createElement("div",{className:"d-flex justify-content-between"},o.a.createElement("div",null,o.a.createElement("span",null,null===t||void 0===t?void 0:t.nameTittleName," ",null===t||void 0===t?void 0:t.firstName," ",null===t||void 0===t?void 0:t.lastName),o.a.createElement("br",null),o.a.createElement("span",null,null===t||void 0===t?void 0:t.email)),o.a.createElement("div",null,o.a.createElement(f.a,{func:function(){return function(t){g.push({pathname:"/providerAdmissionManager/".concat(null===t||void 0===t?void 0:t.id,"/").concat(null===r||void 0===r?void 0:r.providerId),officerId:y})}(t)},color:"primary",className:"mx-1 btn-sm",icon:o.a.createElement("i",{className:"fas fa-eye"}),permission:6}))))}))))))}}}]);
//# sourceMappingURL=194.59214938.chunk.js.map