/*! For license information please see 212.32c87ef0.chunk.js.LICENSE.txt */
(this.webpackJsonpdesk_client=this.webpackJsonpdesk_client||[]).push([[212],{248:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(98);t.a=function(e){var t=e.className,n=e.icon,r=e.color,i=(e.permission,e.type),c=(e.url,e.func),s=e.name,l=e.disable;return a.a.createElement(a.a.Fragment,null,a.a.createElement(o.a,{onClick:c,color:r,type:i,className:t,disabled:l}," ",n,s," "))}},250:function(e,t,n){"use strict";var r=n(9),a=n(3),o=n.n(a),i=n(151),c=n(29);function s(){s=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},a=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(L){c=function(e,t,n){return e[t]=n}}function l(e,t,n,r){var a=t&&t.prototype instanceof h?t:h,o=Object.create(a.prototype),i=new N(r||[]);return o._invoke=function(e,t,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return O()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var c=w(i,n);if(c){if(c===d)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var s=u(e,t,n);if("normal"===s.type){if(r=n.done?"completed":"suspendedYield",s.arg===d)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r="completed",n.method="throw",n.arg=s.arg)}}}(e,n,i),o}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(L){return{type:"throw",arg:L}}}e.wrap=l;var d={};function h(){}function f(){}function m(){}var p={};c(p,a,(function(){return this}));var v=Object.getPrototypeOf,y=v&&v(v(j([])));y&&y!==t&&n.call(y,a)&&(p=y);var g=m.prototype=h.prototype=Object.create(p);function b(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){var r;this._invoke=function(a,o){function i(){return new t((function(r,i){!function r(a,o,i,c){var s=u(e[a],e,o);if("throw"!==s.type){var l=s.arg,d=l.value;return d&&"object"==typeof d&&n.call(d,"__await")?t.resolve(d.__await).then((function(e){r("next",e,i,c)}),(function(e){r("throw",e,i,c)})):t.resolve(d).then((function(e){l.value=e,i(l)}),(function(e){return r("throw",e,i,c)}))}c(s.arg)}(a,o,r,i)}))}return r=r?r.then(i,i):i()}}function w(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method))return d;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var r=u(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,d;var a=r.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,d):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,d)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function S(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function N(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function j(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:O}}function O(){return{value:void 0,done:!0}}return f.prototype=m,c(g,"constructor",m),c(m,"constructor",f),f.displayName=c(m,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,c(e,i,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},b(E.prototype),c(E.prototype,o,(function(){return this})),e.AsyncIterator=E,e.async=function(t,n,r,a,o){void 0===o&&(o=Promise);var i=new E(l(t,n,r,a),o);return e.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},b(g),c(g,i,"Generator"),c(g,a,(function(){return this})),c(g,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=j,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return i.type="throw",i.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),s=n.call(o,"finallyLoc");if(c&&s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),S(n),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;S(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:j(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),d}},e}var l=localStorage.getItem("token");function u(){return(u=Object(r.a)(s().mark((function e(t){var n,r,a,u=arguments;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=u.length>1&&void 0!==u[1]?u[1]:{},u.length>2&&void 0!==u[2]?u[2]:"",e.prev=2,e.next=5,o.a.post("".concat(c.a).concat(t),n,{headers:{authorization:l}});case 5:return r=e.sent,e.next=8,r;case 8:return e.abrupt("return",e.sent);case 11:throw e.prev=11,e.t0=e.catch(2),404===(null===e.t0||void 0===e.t0||null===(a=e.t0.response)||void 0===a?void 0:a.status)&&i.a.push("/404"),e.t0;case 15:case"end":return e.stop()}}),e,null,[[2,11]])})))).apply(this,arguments)}t.a=function(e){return u.apply(this,arguments)}},251:function(e,t,n){"use strict";var r=n(9),a=n(3),o=n.n(a),i=(n(151),n(29));function c(){c=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},a=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function s(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(L){s=function(e,t,n){return e[t]=n}}function l(e,t,n,r){var a=t&&t.prototype instanceof h?t:h,o=Object.create(a.prototype),i=new N(r||[]);return o._invoke=function(e,t,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return O()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var c=w(i,n);if(c){if(c===d)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var s=u(e,t,n);if("normal"===s.type){if(r=n.done?"completed":"suspendedYield",s.arg===d)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r="completed",n.method="throw",n.arg=s.arg)}}}(e,n,i),o}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(L){return{type:"throw",arg:L}}}e.wrap=l;var d={};function h(){}function f(){}function m(){}var p={};s(p,a,(function(){return this}));var v=Object.getPrototypeOf,y=v&&v(v(j([])));y&&y!==t&&n.call(y,a)&&(p=y);var g=m.prototype=h.prototype=Object.create(p);function b(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){var r;this._invoke=function(a,o){function i(){return new t((function(r,i){!function r(a,o,i,c){var s=u(e[a],e,o);if("throw"!==s.type){var l=s.arg,d=l.value;return d&&"object"==typeof d&&n.call(d,"__await")?t.resolve(d.__await).then((function(e){r("next",e,i,c)}),(function(e){r("throw",e,i,c)})):t.resolve(d).then((function(e){l.value=e,i(l)}),(function(e){return r("throw",e,i,c)}))}c(s.arg)}(a,o,r,i)}))}return r=r?r.then(i,i):i()}}function w(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method))return d;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var r=u(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,d;var a=r.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,d):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,d)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function S(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function N(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function j(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:O}}function O(){return{value:void 0,done:!0}}return f.prototype=m,s(g,"constructor",m),s(m,"constructor",f),f.displayName=s(m,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,s(e,i,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},b(E.prototype),s(E.prototype,o,(function(){return this})),e.AsyncIterator=E,e.async=function(t,n,r,a,o){void 0===o&&(o=Promise);var i=new E(l(t,n,r,a),o);return e.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},b(g),s(g,i,"Generator"),s(g,a,(function(){return this})),s(g,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=j,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return i.type="throw",i.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),s=n.call(o,"finallyLoc");if(c&&s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),S(n),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;S(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:j(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),d}},e}var s=localStorage.getItem("token");function l(){return(l=Object(r.a)(c().mark((function e(t){var n,r,a=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:{},a.length>2&&void 0!==a[2]?a[2]:"",e.prev=2,e.next=5,o.a.put("".concat(i.a).concat(t),n,{headers:{authorization:s}});case 5:return r=e.sent,e.next=8,r;case 8:return e.abrupt("return",e.sent);case 11:return e.prev=11,e.t0=e.catch(2),e.abrupt("return",e.t0);case 14:case"end":return e.stop()}}),e,null,[[2,11]])})))).apply(this,arguments)}t.a=function(e){return l.apply(this,arguments)}},254:function(e,t,n){"use strict";var r=n(11),a=n(15),o=n(0),i=n.n(o),c=n(2),s=n.n(c),l=n(8),u=n.n(l),d=n(7),h=["className","cssModule","innerRef","tag"],f={tag:d.t,className:s.a.string,cssModule:s.a.object,innerRef:s.a.oneOfType([s.a.object,s.a.string,s.a.func])},m=function(e){var t=e.className,n=e.cssModule,o=e.innerRef,c=e.tag,s=Object(a.a)(e,h),l=Object(d.p)(u()(t,"card-body"),n);return i.a.createElement(c,Object(r.a)({},s,{className:l,ref:o}))};m.propTypes=f,m.defaultProps={tag:"div"},t.a=m},259:function(e,t,n){"use strict";var r=n(11),a=n(15),o=n(0),i=n.n(o),c=n(2),s=n.n(c),l=n(8),u=n.n(l),d=n(7),h=["className","cssModule","tag"],f={tag:d.t,className:s.a.string,cssModule:s.a.object},m=function(e){var t=e.className,n=e.cssModule,o=e.tag,c=Object(a.a)(e,h),s=Object(d.p)(u()(t,"card-header"),n);return i.a.createElement(o,Object(r.a)({},c,{className:s}))};m.propTypes=f,m.defaultProps={tag:"div"},t.a=m},291:function(e,t,n){"use strict";var r=n(11),a=n(15),o=n(0),i=n.n(o),c=n(2),s=n.n(c),l=n(8),u=n.n(l),d=n(7),h=["className","cssModule","color","body","inverse","outline","tag","innerRef"],f={tag:d.t,inverse:s.a.bool,color:s.a.string,body:s.a.bool,outline:s.a.bool,className:s.a.string,cssModule:s.a.object,innerRef:s.a.oneOfType([s.a.object,s.a.string,s.a.func])},m=function(e){var t=e.className,n=e.cssModule,o=e.color,c=e.body,s=e.inverse,l=e.outline,f=e.tag,m=e.innerRef,p=Object(a.a)(e,h),v=Object(d.p)(u()(t,"card",!!s&&"text-white",!!c&&"card-body",!!o&&(l?"border":"bg")+"-"+o),n);return i.a.createElement(f,Object(r.a)({},p,{className:v,ref:m}))};m.propTypes=f,m.defaultProps={tag:"div"},t.a=m},969:function(e,t,n){"use strict";n.r(t);var r=n(19),a=n(0),o=n.n(a),i=n(37),c=n(36),s=n(291),l=n(259),u=n(254),d=n(98),h=n(100),f=n(250),m=n(252),p=n(251),v=(n(248),n(14));t.default=function(){var e=Object(i.i)().idVal,t=Object(i.g)(),n=Object(a.useState)("11"),y=Object(r.a)(n,2),g=(y[0],y[1],Object(a.useState)({})),b=Object(r.a)(g,2),E=b[0],w=b[1],x=Object(m.useToasts)().addToast,S=Object(a.useState)(""),N=Object(r.a)(S,2),j=N[0],O=N[1],L=Object(a.useState)([]),k=Object(r.a)(L,2),T=(k[0],k[1],localStorage.getItem("userType")),I=Object(a.useState)(!1),_=Object(r.a)(I,2),G=_[0],P=_[1],C=Object(a.useState)(!1),F=Object(r.a)(C,2),D=F[0],M=F[1];Object(a.useEffect)((function(){Object(h.a)("StudentConsent/Get/".concat(e)).then((function(e){console.log(e,"resStudentData"),w(e)})),fetch("https://geolocation-db.com/json/").then((function(e){return null===e||void 0===e?void 0:e.json()})).then((function(e){console.log(e),O(e)}))}),[G]);function A(e){return new Date(e).toString([],{year:"numeric",month:"long",day:"numeric"})}return o.a.createElement("div",null,o.a.createElement(s.a,{className:"uapp-card-bg"},o.a.createElement(l.a,{className:"page-header"},o.a.createElement("h3",{className:"text-white"},"Student Declaration"),o.a.createElement("div",{className:"page-header-back-to-home"},o.a.createElement("span",{className:"text-white"}," ","92% Completed")))),o.a.createElement(s.a,null,o.a.createElement(u.a,null,o.a.createElement("div",{className:"container"},o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement("h5",{className:"mb-3"}," ",o.a.createElement("b",{className:"bg-u"},"Student Declaration")," ")),o.a.createElement("span",{className:"conscentText-style"},"I hereby agree and accept that SMS Higher Education Group (SMSHEG) have the authority of processing personal data contained in this form or other data which SMSHEG may obtain from other people and sources. I agree also to the processing of such data for any purposes connected with my University Admission requirements or any legitimate reason including communication with me following the completion of my admission and enrolment. In addition, I agree to allow SMSHEG processing personal data described as Special Category Data as defined under the General Data Protection Regulation. The processing to be undertaken for any purposes as indicated in the declaration above. In addition to the Privacy Notice linked to this form please also see our Corporate Privacy Policy on our website; ",o.a.createElement(c.a,{to:"/https://smsheg.co.uk/404",target:"_blank"},"https://smsheg.co.uk/privacypolicy.")),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("span",{className:"conscentText-style"},"1. I understand and accept this statement."),o.a.createElement("br",null),o.a.createElement("span",{className:"conscentText-style"},"2. I have submitted all documents relevant to my application including all qualifications studied either in the UK or overseas. I take full responsibility and accountability for the originality of the certificates."),o.a.createElement("br",null),o.a.createElement("span",{className:"conscentText-style"},"3. I certify that the qualifications submitted for admission purposes are certified and awarded to me and I have given permission to SMSHEG to verify and cross check them. I understand that proving a false declaration is totally unacceptable and is deemed to be malpractice and/or fraud."),o.a.createElement("br",null),o.a.createElement("span",{className:"conscentText-style"},"4. My contact information is up-to-date and will inform the University I apply to of any change, and I will notify the University promptly of any changes to the information which I have submitted an application on enrolment."),o.a.createElement("br",null),o.a.createElement("span",{className:"conscentText-style"},"5. We provide guidance and support to our students, no one is allowed to help the students in their coursework."),o.a.createElement("br",null),o.a.createElement("span",{className:"conscentText-style"},"6. Everybody needs to follow the universities\u2019 guidelines and respect their decisions."),o.a.createElement("br",null),o.a.createElement("span",{className:"conscentText-style"},"7. Our registered student cannot be passed at to any other agency or third party."),o.a.createElement("br",null),o.a.createElement("span",{className:"conscentText-style"},"8. Follow the university guidelines, only offer our listed courses to the students."),o.a.createElement("br",null),o.a.createElement("span",{className:"conscentText-style"},"9. Do not make any prior commitment to the student regarding interview, admission, student finance, courses."),o.a.createElement("br",null),o.a.createElement("span",{className:"conscentText-style"},"10. Do not compare with the policy of other agency or organisation and only follow our guidelines."),o.a.createElement("br",null),o.a.createElement("span",{className:"conscentText-style"},"11. Do not engage in any activity likely to damage SMS Higher Education Group\u2019s or our partner\u2019s reputations, the activity must be prohibited which likely to damage the academic or professional reputation of any university or other entity associated with the course."),o.a.createElement("br",null),o.a.createElement("span",{className:"conscentText-style"},"12. Always ensure to advice is given in a professional and accurate manner."),o.a.createElement("br",null),o.a.createElement("span",{className:"conscentText-style"},"13. Anyone not able to follow any of these conditions, their contract will be immediately terminated and might miss out from any outstanding commissions and bonuses."),o.a.createElement("br",null),o.a.createElement("span",{className:"conscentText-style"},"14. I confirm my email address is accurate and can be considered as my signature."))),null==E||0==(null===E||void 0===E?void 0:E.isDeclared)?o.a.createElement("div",{className:"conscentSign-style ms-md-3 py-1 mt-2"},o.a.createElement("span",{className:"inner-term-style"},"Terms and Conditions has not Signed yet !!!!")):o.a.createElement("div",{className:"conscentSign-style2 ms-md-3 py-1 mt-2 text-white"},o.a.createElement("span",{className:"inner-term-style"},"Terms and Conditions Signed Successfully.")),o.a.createElement("div",{className:" mt-1"},T==(null===v.a||void 0===v.a?void 0:v.a.SystemAdmin)||T==(null===v.a||void 0===v.a?void 0:v.a.Admin)||T==(null===v.a||void 0===v.a?void 0:v.a.ComplianceManager)?o.a.createElement(o.a.Fragment,null,null==E||1==(null===E||void 0===E?void 0:E.consentSignStatusId)?o.a.createElement("div",{className:"mb-1 text-right"},o.a.createElement(d.a,{color:"primary",onClick:function(){M(!0),Object(p.a)("StudentConsent/SendEmail/".concat(e)).then((function(n){var r,a;(M(!1),200==(null===n||void 0===n?void 0:n.status)&&1==(null===n||void 0===n||null===(r=n.data)||void 0===r?void 0:r.isSuccess))?(x("Email Sending is in Process",{appearance:"success",autoDismiss:!0}),P(!G),t.push("/studentProfile/".concat(e))):x(null===n||void 0===n||null===(a=n.data)||void 0===a?void 0:a.message,{appearance:"error",autoDismiss:!0})}))},disabled:D},"Send Email & Finish")):null!==E&&2==(null===E||void 0===E?void 0:E.consentSignStatusId)?o.a.createElement("div",{className:"mb-1 text-right"},o.a.createElement("span",{className:"text-info"}," Email is sent with credentails "),o.a.createElement(d.a,{color:"primary",onClick:function(){M(!0),Object(p.a)("StudentConsent/SendEmail/".concat(e)).then((function(e){var t,n;(M(!1),200==(null===e||void 0===e?void 0:e.status)&&1==(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.isSuccess))?(x("Email Sending is in Process",{appearance:"success",autoDismiss:!0}),P(!G)):x(null===e||void 0===e||null===(n=e.data)||void 0===n?void 0:n.message,{appearance:"error",autoDismiss:!0})}))},disabled:D},"Send Email Again")):null!==E&&3==(null===E||void 0===E?void 0:E.consentSignStatusId)?o.a.createElement("div",{className:"mb-1 text-right"},o.a.createElement("span",null,"Conscent Signed on: ",o.a.createElement("span",{className:"fw-style"},A(null===E||void 0===E?void 0:E.consentSignTime))),o.a.createElement("br",null),o.a.createElement("span",null,"Conscent Signed FromIp:",o.a.createElement("span",{className:"fw-style"}," ",null===E||void 0===E?void 0:E.consentFromIp))):null):T==(null===v.a||void 0===v.a?void 0:v.a.Student)?null==E||0==(null===E||void 0===E?void 0:E.isDeclared)?o.a.createElement("div",{className:"mt-1 text-right"},o.a.createElement(d.a,{color:"primary",onClick:function(t){var n=new FormData;n.append("StudentId",e),n.append("IpAddress",null===j||void 0===j?void 0:j.IPv4),Object(f.a)("StudentConsent/Sign",n).then((function(e){var t,n,r;200==(null===e||void 0===e?void 0:e.status)&&1==(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.isSuccess)?(x(null===e||void 0===e||null===(n=e.data)||void 0===n?void 0:n.message,{appearance:"success",autoDismiss:!0}),P(!G)):x(null===e||void 0===e||null===(r=e.data)||void 0===r?void 0:r.message,{appearance:"error",autoDismiss:!0})}))}},"Accept Terms and Conditions")):o.a.createElement("div",{className:"mb-1 text-left ms-md-4  "},o.a.createElement("span",null,"Conscent Signed on: ",o.a.createElement("span",{className:"fw-style"},A(null===E||void 0===E?void 0:E.consentSignTime))),o.a.createElement("br",null),o.a.createElement("span",null,"Conscent Signed FromIp:",o.a.createElement("span",{className:"fw-style"}," ",null===E||void 0===E?void 0:E.consentFromIp))):null))))}}}]);
//# sourceMappingURL=212.32c87ef0.chunk.js.map