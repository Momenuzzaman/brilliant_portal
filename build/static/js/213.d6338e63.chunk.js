/*! For license information please see 213.d6338e63.chunk.js.LICENSE.txt */
(this.webpackJsonpdesk_client=this.webpackJsonpdesk_client||[]).push([[213],{256:function(t,e,r){"use strict";var n=r(10),a=r(3),o=r.n(a),i=r(157),c=r(47);function l(){l=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(S){c=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var a=e&&e.prototype instanceof f?e:f,o=Object.create(a.prototype),i=new L(n||[]);return o._invoke=function(t,e,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return O()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=w(i,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=u(t,e,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===h)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(t,r,i),o}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(S){return{type:"throw",arg:S}}}t.wrap=s;var h={};function f(){}function p(){}function d(){}var m={};c(m,a,(function(){return this}));var v=Object.getPrototypeOf,y=v&&v(v(N([])));y&&y!==e&&r.call(y,a)&&(m=y);var g=d.prototype=f.prototype=Object.create(m);function b(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){var n;this._invoke=function(a,o){function i(){return new e((function(n,i){!function n(a,o,i,c){var l=u(t[a],t,o);if("throw"!==l.type){var s=l.arg,h=s.value;return h&&"object"==typeof h&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(h).then((function(t){s.value=t,i(s)}),(function(t){return n("throw",t,i,c)}))}c(l.arg)}(a,o,n,i)}))}return n=n?n.then(i,i):i()}}function w(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=u(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,h;var a=n.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function N(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:O}}function O(){return{value:void 0,done:!0}}return p.prototype=d,c(g,"constructor",d),c(d,"constructor",p),p.displayName=c(d,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,c(t,i,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},b(E.prototype),c(E.prototype,o,(function(){return this})),t.AsyncIterator=E,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var i=new E(s(e,r,n,a),o);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},b(g),c(g,i,"Generator"),c(g,a,(function(){return this})),c(g,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=N,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),x(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;x(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:N(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t}var s=localStorage.getItem("token");function u(){return(u=Object(n.a)(l().mark((function t(e){var r,n,a=arguments;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a.length>1&&void 0!==a[1]?a[1]:{},a.length>2&&void 0!==a[2]?a[2]:"",t.prev=2,t.next=5,o.a.put("".concat(c.a).concat(e),r,{headers:{authorization:s}});case 5:return n=t.sent,t.next=8,n;case 8:return t.abrupt("return",t.sent);case 11:throw t.prev=11,t.t0=t.catch(2),404===t.t0.response.status&&i.a.push("/404"),t.t0;case 15:case"end":return t.stop()}}),t,null,[[2,11]])})))).apply(this,arguments)}e.a=function(t){return u.apply(this,arguments)}},257:function(t,e,r){"use strict";var n=r(10),a=r(3),o=r.n(a),i=r(157),c=r(47);function l(){l=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(S){c=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var a=e&&e.prototype instanceof f?e:f,o=Object.create(a.prototype),i=new L(n||[]);return o._invoke=function(t,e,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return O()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=w(i,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=u(t,e,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===h)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(t,r,i),o}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(S){return{type:"throw",arg:S}}}t.wrap=s;var h={};function f(){}function p(){}function d(){}var m={};c(m,a,(function(){return this}));var v=Object.getPrototypeOf,y=v&&v(v(N([])));y&&y!==e&&r.call(y,a)&&(m=y);var g=d.prototype=f.prototype=Object.create(m);function b(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){var n;this._invoke=function(a,o){function i(){return new e((function(n,i){!function n(a,o,i,c){var l=u(t[a],t,o);if("throw"!==l.type){var s=l.arg,h=s.value;return h&&"object"==typeof h&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(h).then((function(t){s.value=t,i(s)}),(function(t){return n("throw",t,i,c)}))}c(l.arg)}(a,o,n,i)}))}return n=n?n.then(i,i):i()}}function w(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=u(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,h;var a=n.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function N(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:O}}function O(){return{value:void 0,done:!0}}return p.prototype=d,c(g,"constructor",d),c(d,"constructor",p),p.displayName=c(d,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,c(t,i,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},b(E.prototype),c(E.prototype,o,(function(){return this})),t.AsyncIterator=E,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var i=new E(s(e,r,n,a),o);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},b(g),c(g,i,"Generator"),c(g,a,(function(){return this})),c(g,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=N,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),x(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;x(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:N(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t}var s=localStorage.getItem("token");function u(){return(u=Object(n.a)(l().mark((function t(e){var r,n,a,u=arguments;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=u.length>1&&void 0!==u[1]?u[1]:{},u.length>2&&void 0!==u[2]?u[2]:"",t.prev=2,t.next=5,o.a.post("".concat(c.a).concat(e),r,{headers:{authorization:s}});case 5:return n=t.sent,t.next=8,n;case 8:return t.abrupt("return",t.sent);case 11:throw t.prev=11,t.t0=t.catch(2),404===(null===t.t0||void 0===t.t0||null===(a=t.t0.response)||void 0===a?void 0:a.status)&&i.a.push("/404"),t.t0;case 15:case"end":return t.stop()}}),t,null,[[2,11]])})))).apply(this,arguments)}e.a=function(t){return u.apply(this,arguments)}},349:function(t,e,r){"use strict";var n=r(0),a=r.n(n),o=r(96);e.a=function(t){var e=t.className,r=(t.icon,t.color),n=(t.permission,t.type),i=(t.url,t.func),c=t.name;return a.a.createElement(a.a.Fragment,null,a.a.createElement(o.a.Ripple,{onClick:i,color:r,type:n,className:e},c))}},814:function(t,e,r){"use strict";r.r(e);var n=r(29),a=r(0),o=r.n(a),i=r(33),c=r(306),l=r(265),s=r(264),u=r(96),h=r(311),f=r(310),p=r(324),d=r(279),m=r(350),v=r(267),y=r(270),g=r(268),b=(r(3),r(255)),E=(r(344),r(103)),w=(r(47),r(349),r(303)),j=r(257),x=r(256);e.default=function(){var t=Object(a.useState)([]),e=Object(n.a)(t,2),r=e[0],L=e[1],N=Object(a.useState)(!1),O=Object(n.a)(N,2),S=O[0],k=O[1],I=Object(a.useState)(!1),_=Object(n.a)(I,2),C=_[0],A=_[1],G=Object(a.useState)(!1),U=Object(n.a)(G,2),P=U[0],T=U[1],F=Object(a.useState)(!1),D=Object(n.a)(F,2),Y=D[0],B=(D[1],Object(a.useState)(!1)),M=Object(n.a)(B,2),K=M[0],R=M[1],z=Object(a.useState)(!1),H=Object(n.a)(z,2),J=H[0],q=H[1],Q=Object(a.useState)(0),V=Object(n.a)(Q,2),W=V[0],X=V[1],Z=Object(a.useState)(""),$=Object(n.a)(Z,2),tt=($[0],$[1]),et=Object(i.i)().id,rt=Object(i.g)(),nt=Object(b.useToasts)().addToast;Object(a.useEffect)((function(){Object(E.a)("UniversityCampusSubject/GetAllSubjectByCampus/".concat(et)).then((function(t){console.log("MultipleSubList",t),L([]),L(t)}))}),[et,Y]);console.log("checkbox",S,C,P),console.log("successBefore post",Y);return console.log("successAfter post",Y),o.a.createElement("div",null,o.a.createElement(c.a,{className:"uapp-card-bg"},o.a.createElement(l.a,{className:"page-header"},o.a.createElement("h3",{className:"text-light"},"Assign Subject to Campus"),o.a.createElement("div",{className:"page-header-back-to-home"},o.a.createElement("span",{onClick:function(){rt.push("/campusDetails/".concat(et))},className:"text-light"}," ",o.a.createElement("i",{className:"fas fa-arrow-circle-left"})," Back to Campus Details")))),o.a.createElement("div",{className:" info-item mt-4"},o.a.createElement(c.a,{className:"uapp-employee-search"},o.a.createElement(s.a,{className:"search-card-body"},o.a.createElement("div",{className:"container test-score-div-1-style mt-1 mb-4"},o.a.createElement("div",{className:"d-flex justify-content-between"},o.a.createElement("span",{className:"test-score-span-1-style my-auto"},"Assign all subjects on this campus with all application types. [Is not recommended]"),o.a.createElement(u.a,{onClick:function(){return q(!0)},color:"primary"},"Assign All"))),o.a.createElement(h.a,{isOpen:J,toggle:function(){return q(!K)},className:"uapp-modal"},o.a.createElement(f.a,null,o.a.createElement("p",null,"Are You Sure to Assign All Subjects?")),o.a.createElement(p.a,null,o.a.createElement(u.a,{onClick:function(){Object(x.a)("UniversityCampusSubject/AssignAllSubject/".concat(et)).then((function(t){200===t.status&&!0===t.data.isSuccess&&(nt(t.data.message,{appearance:"success",autoDismiss:!0}),Object(E.a)("UniversityCampusSubject/GetAllSubjectByCampus/".concat(et)).then((function(t){console.log("MultipleSubList",t),L([]),L(t)})),q(!1))}))},color:"danger"},"YES"),o.a.createElement(u.a,{color:"primary",onClick:function(){return q(!1)}},"NO"))),o.a.createElement("div",{className:"container test-score-div-1-style mt-1 mb-4"},o.a.createElement("span",{className:"test-score-span-1-style"},o.a.createElement("div",null,o.a.createElement("span",null,"Assign individual subjects with specific application types.")))),o.a.createElement(d.a,null,o.a.createElement(m.a,{className:"text-center"},o.a.createElement(v.a,{xs:"6",sm:"4",md:"2"}),o.a.createElement(v.a,{xs:"6",sm:"4",md:"3"},o.a.createElement("span",null,"Is accept home ")),o.a.createElement(v.a,{xs:"6",sm:"4",md:"2"},o.a.createElement("span",null,"Is accept EU_UK ")),o.a.createElement(v.a,{xs:"6",sm:"4",md:"3"},o.a.createElement("span",null,"Is accept international")),o.a.createElement(v.a,{xs:"6",sm:"4",md:"2"})),null===r||void 0===r?void 0:r.map((function(t,e){return o.a.createElement(m.a,{key:e},o.a.createElement(v.a,{xs:"6",sm:"4",md:"2",key:e,className:"mt-2"},o.a.createElement("div",{className:""},null===t||void 0===t?void 0:t.subjectName)),o.a.createElement(v.a,{xs:"6",sm:"4",md:"3",className:"text-center mt-2"},o.a.createElement(y.a,{check:!0,inline:!0},o.a.createElement(g.a,{className:"form-check-input",type:"checkbox",id:e,name:null===t||void 0===t?void 0:t.subjectName,onChange:function(e){k(!1),k(!S),X(null===t||void 0===t?void 0:t.subjectId),tt(null===t||void 0===t?void 0:t.subjectName),localStorage.setItem("subjectIdCheck",null===t||void 0===t?void 0:t.subjectName)},defaultChecked:null===t||void 0===t?void 0:t.isAcceptHome}))),o.a.createElement(v.a,{xs:"6",sm:"4",md:"2",className:"text-center mt-2"},o.a.createElement(y.a,{check:!0,inline:!0},o.a.createElement(g.a,{className:"form-check-input",type:"checkbox",id:e,name:null===t||void 0===t?void 0:t.subjectName,onChange:function(e){A(!1),A(!C),X(null===t||void 0===t?void 0:t.subjectId),tt(null===t||void 0===t?void 0:t.subjectName),localStorage.setItem("subjectIdCheck",null===t||void 0===t?void 0:t.subjectName)},defaultChecked:null===t||void 0===t?void 0:t.isAcceptEU_UK}))),o.a.createElement(v.a,{xs:"6",sm:"4",md:"3",className:"text-center mt-2"},o.a.createElement(y.a,{check:!0,inline:!0},o.a.createElement(g.a,{className:"form-check-input",type:"checkbox",id:e,name:null===t||void 0===t?void 0:t.subjectName,onChange:function(e){T(!1),T(!P),X(null===t||void 0===t?void 0:t.subjectId),tt(null===t||void 0===t?void 0:t.subjectName),localStorage.setItem("subjectIdCheck",null===t||void 0===t?void 0:t.subjectName)},defaultChecked:null===t||void 0===t?void 0:t.isAcceptInternational}))),o.a.createElement(v.a,{xs:"6",sm:"4",md:"2",className:"text-center mt-2"},o.a.createElement(y.a,{check:!0,inline:!0},(null===t||void 0===t?void 0:t.isAssigned)?o.a.createElement(u.a,{onClick:function(){return e=t,console.log("ppppp",e),localStorage.setItem("subjeId",null===e||void 0===e?void 0:e.id),localStorage.setItem("subjeName",null===e||void 0===e?void 0:e.subjectName),void R(!0);var e},color:"danger"},"Remove"):o.a.createElement(u.a,{id:null===t||void 0===t?void 0:t.subjectId,onClick:function(e){return function(t,e){t.preventDefault();var r={campusId:null===e||void 0===e?void 0:e.campusId,subjectId:null===e||void 0===e?void 0:e.subjectId,isAcceptHome:S,isAcceptEU_UK:C,isAcceptInternational:P};(null===e||void 0===e?void 0:e.subjectId)===W?Object(j.a)("UniversityCampusSubject/Create",r).then((function(t){var e,r;1==(null===t||void 0===t||null===(e=t.data)||void 0===e?void 0:e.isSuccess)&&200==(null===t||void 0===t?void 0:t.status)&&(nt(null===t||void 0===t||null===(r=t.data)||void 0===r?void 0:r.message,{appearance:"success",autoDismiss:!0}),Object(E.a)("UniversityCampusSubject/GetAllSubjectByCampus/".concat(et)).then((function(t){console.log("MultipleSubList",t),L([]),L(t)})))})):alert("Click the right button"),console.log("subdataaaaa",r)}(e,t)},color:"primary"},"Add"))))})),o.a.createElement(h.a,{isOpen:K,toggle:function(){return R(!K)},className:"uapp-modal"},o.a.createElement(f.a,null,o.a.createElement("p",null,"Are You Sure to Remove this"," ",o.a.createElement("b",null,localStorage.getItem("subjeName"))," ? Once Deleted it can't be Undone!")),o.a.createElement(p.a,null,o.a.createElement(u.a,{onClick:function(){return t=localStorage.getItem("subjeId"),void Object(w.a)("UniversityCampusSubject/Delete/".concat(t)).then((function(t){k(!1),A(!1),T(!1),R(!1),nt(t,{appearance:"error",autoDismiss:!0}),L([]),console.log("multiple array",r),Object(E.a)("UniversityCampusSubject/GetAllSubjectByCampus/".concat(et)).then((function(t){console.log("MultipleSubList",t),L(t)})),localStorage.removeItem("subjeId"),localStorage.removeItem("subjeName"),console.log("checkboxDelete",S,C,P)}));var t},color:"danger"},"YES"),o.a.createElement(u.a,{onClick:function(){return R(!1)}},"NO"))))))))}}}]);
//# sourceMappingURL=213.d6338e63.chunk.js.map