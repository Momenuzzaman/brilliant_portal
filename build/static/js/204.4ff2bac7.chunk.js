/*! For license information please see 204.4ff2bac7.chunk.js.LICENSE.txt */
(this.webpackJsonpdesk_client=this.webpackJsonpdesk_client||[]).push([[204],{253:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(94);t.a=function(e){var t=e.className,n=e.icon,a=e.color,i=(e.permission,e.type),c=(e.url,e.func),l=e.name,u=e.disable;return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,{onClick:c,color:a,type:i,className:t,disabled:u}," ",n,l," "))}},256:function(e,t,n){"use strict";var a=n(10),r=n(3),o=n.n(r),i=n(155),c=n(47);function l(){l=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},r=a.iterator||"@@iterator",o=a.asyncIterator||"@@asyncIterator",i=a.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(L){c=function(e,t,n){return e[t]=n}}function u(e,t,n,a){var r=t&&t.prototype instanceof d?t:d,o=Object.create(r.prototype),i=new x(a||[]);return o._invoke=function(e,t,n){var a="suspendedStart";return function(r,o){if("executing"===a)throw new Error("Generator is already running");if("completed"===a){if("throw"===r)throw o;return S()}for(n.method=r,n.arg=o;;){var i=n.delegate;if(i){var c=w(i,n);if(c){if(c===m)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===a)throw a="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a="executing";var l=s(e,t,n);if("normal"===l.type){if(a=n.done?"completed":"suspendedYield",l.arg===m)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(a="completed",n.method="throw",n.arg=l.arg)}}}(e,n,i),o}function s(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(L){return{type:"throw",arg:L}}}e.wrap=u;var m={};function d(){}function p(){}function h(){}var f={};c(f,r,(function(){return this}));var v=Object.getPrototypeOf,y=v&&v(v(N([])));y&&y!==t&&n.call(y,r)&&(f=y);var E=h.prototype=d.prototype=Object.create(f);function g(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function b(e,t){var a;this._invoke=function(r,o){function i(){return new t((function(a,i){!function a(r,o,i,c){var l=s(e[r],e,o);if("throw"!==l.type){var u=l.arg,m=u.value;return m&&"object"==typeof m&&n.call(m,"__await")?t.resolve(m.__await).then((function(e){a("next",e,i,c)}),(function(e){a("throw",e,i,c)})):t.resolve(m).then((function(e){u.value=e,i(u)}),(function(e){return a("throw",e,i,c)}))}c(l.arg)}(r,o,a,i)}))}return a=a?a.then(i,i):i()}}function w(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method))return m;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var a=s(n,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,m;var r=a.arg;return r?r.done?(t[e.resultName]=r.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,m):r:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,m)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function x(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function N(e){if(e){var t=e[r];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,o=function t(){for(;++a<e.length;)if(n.call(e,a))return t.value=e[a],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:S}}function S(){return{value:void 0,done:!0}}return p.prototype=h,c(E,"constructor",h),c(h,"constructor",p),p.displayName=c(h,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,c(e,i,"GeneratorFunction")),e.prototype=Object.create(E),e},e.awrap=function(e){return{__await:e}},g(b.prototype),c(b.prototype,o,(function(){return this})),e.AsyncIterator=b,e.async=function(t,n,a,r,o){void 0===o&&(o=Promise);var i=new b(u(t,n,a,r),o);return e.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},g(E),c(E,i,"Generator"),c(E,r,(function(){return this})),c(E,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var a=t.pop();if(a in e)return n.value=a,n.done=!1,n}return n.done=!0,n}},e.values=N,x.prototype={constructor:x,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function a(n,a){return i.type="throw",i.arg=e,t.next=n,a&&(t.method="next",t.arg=void 0),!!a}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],i=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(e,t){for(var a=this.tryEntries.length-1;a>=0;--a){var r=this.tryEntries[a];if(r.tryLoc<=this.prev&&n.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),j(n),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var a=n.completion;if("throw"===a.type){var r=a.arg;j(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:N(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),m}},e}var u=localStorage.getItem("token");function s(){return(s=Object(a.a)(l().mark((function e(t){var n,a,r,s=arguments;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=s.length>1&&void 0!==s[1]?s[1]:{},s.length>2&&void 0!==s[2]?s[2]:"",e.prev=2,e.next=5,o.a.post("".concat(c.a).concat(t),n,{headers:{authorization:u}});case 5:return a=e.sent,e.next=8,a;case 8:return e.abrupt("return",e.sent);case 11:throw e.prev=11,e.t0=e.catch(2),404===(null===e.t0||void 0===e.t0||null===(r=e.t0.response)||void 0===r?void 0:r.status)&&i.a.push("/404"),e.t0;case 15:case"end":return e.stop()}}),e,null,[[2,11]])})))).apply(this,arguments)}t.a=function(e){return s.apply(this,arguments)}},257:function(e,t,n){"use strict";var a=n(10),r=n(3),o=n.n(r),i=(n(155),n(47));function c(){c=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},r=a.iterator||"@@iterator",o=a.asyncIterator||"@@asyncIterator",i=a.toStringTag||"@@toStringTag";function l(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(L){l=function(e,t,n){return e[t]=n}}function u(e,t,n,a){var r=t&&t.prototype instanceof d?t:d,o=Object.create(r.prototype),i=new x(a||[]);return o._invoke=function(e,t,n){var a="suspendedStart";return function(r,o){if("executing"===a)throw new Error("Generator is already running");if("completed"===a){if("throw"===r)throw o;return S()}for(n.method=r,n.arg=o;;){var i=n.delegate;if(i){var c=w(i,n);if(c){if(c===m)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===a)throw a="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a="executing";var l=s(e,t,n);if("normal"===l.type){if(a=n.done?"completed":"suspendedYield",l.arg===m)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(a="completed",n.method="throw",n.arg=l.arg)}}}(e,n,i),o}function s(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(L){return{type:"throw",arg:L}}}e.wrap=u;var m={};function d(){}function p(){}function h(){}var f={};l(f,r,(function(){return this}));var v=Object.getPrototypeOf,y=v&&v(v(N([])));y&&y!==t&&n.call(y,r)&&(f=y);var E=h.prototype=d.prototype=Object.create(f);function g(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function b(e,t){var a;this._invoke=function(r,o){function i(){return new t((function(a,i){!function a(r,o,i,c){var l=s(e[r],e,o);if("throw"!==l.type){var u=l.arg,m=u.value;return m&&"object"==typeof m&&n.call(m,"__await")?t.resolve(m.__await).then((function(e){a("next",e,i,c)}),(function(e){a("throw",e,i,c)})):t.resolve(m).then((function(e){u.value=e,i(u)}),(function(e){return a("throw",e,i,c)}))}c(l.arg)}(r,o,a,i)}))}return a=a?a.then(i,i):i()}}function w(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method))return m;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var a=s(n,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,m;var r=a.arg;return r?r.done?(t[e.resultName]=r.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,m):r:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,m)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function x(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function N(e){if(e){var t=e[r];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,o=function t(){for(;++a<e.length;)if(n.call(e,a))return t.value=e[a],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:S}}function S(){return{value:void 0,done:!0}}return p.prototype=h,l(E,"constructor",h),l(h,"constructor",p),p.displayName=l(h,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,l(e,i,"GeneratorFunction")),e.prototype=Object.create(E),e},e.awrap=function(e){return{__await:e}},g(b.prototype),l(b.prototype,o,(function(){return this})),e.AsyncIterator=b,e.async=function(t,n,a,r,o){void 0===o&&(o=Promise);var i=new b(u(t,n,a,r),o);return e.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},g(E),l(E,i,"Generator"),l(E,r,(function(){return this})),l(E,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var a=t.pop();if(a in e)return n.value=a,n.done=!1,n}return n.done=!0,n}},e.values=N,x.prototype={constructor:x,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function a(n,a){return i.type="throw",i.arg=e,t.next=n,a&&(t.method="next",t.arg=void 0),!!a}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],i=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(e,t){for(var a=this.tryEntries.length-1;a>=0;--a){var r=this.tryEntries[a];if(r.tryLoc<=this.prev&&n.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),j(n),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var a=n.completion;if("throw"===a.type){var r=a.arg;j(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:N(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),m}},e}var l=localStorage.getItem("token");function u(){return(u=Object(a.a)(c().mark((function e(t){var n,a,r=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.length>1&&void 0!==r[1]?r[1]:{},r.length>2&&void 0!==r[2]?r[2]:"",e.prev=2,e.next=5,o.a.put("".concat(i.a).concat(t),n,{headers:{authorization:l}});case 5:return a=e.sent,e.next=8,a;case 8:return e.abrupt("return",e.sent);case 11:return e.prev=11,e.t0=e.catch(2),e.abrupt("return",e.t0);case 14:case"end":return e.stop()}}),e,null,[[2,11]])})))).apply(this,arguments)}t.a=function(e){return u.apply(this,arguments)}},321:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(94);t.a=function(e){var t=e.isDisabled,n=e.className,a=(e.icon,e.color),i=(e.permission,e.type),c=(e.url,e.func),l=e.name;return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a.Ripple,{disabled:t,onClick:c,color:a,type:i,className:n},l))}},326:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(357),i=n.n(o);t.a=function(){return r.a.createElement("div",{className:"text-center"},r.a.createElement("img",{className:"img-fluid",src:i.a}))}},843:function(e,t,n){"use strict";n.r(t);var a=n(30),r=n(0),o=n.n(r),i=n(34),c=n(304),l=n(266),u=n(261),s=n(310),m=n(365),d=n(308),p=n(274),h=n(263),f=n(270),v=n(265),y=n(94),E=n(766),g=n(358),b=n(313),w=n(379),O=n(273),j=n(258),x=n(101),N=n(256),S=n(257),L=n(293),D=n(253),k=n(321),G=n(326);t.default=function(){var e=Object(r.useState)(""),t=Object(a.a)(e,2),n=t[0],_=t[1],T=Object(r.useState)(""),I=Object(a.a)(T,2),C=I[0],A=I[1],F=Object(i.g)(),P=Object(r.useState)(!1),Y=Object(a.a)(P,2),M=Y[0],U=Y[1],z=Object(r.useState)(!1),q=Object(a.a)(z,2),B=q[0],H=q[1],J=Object(r.useState)(!1),K=Object(a.a)(J,2),W=K[0],R=K[1],V=Object(r.useState)(!1),Q=Object(a.a)(V,2),X=Q[0],Z=Q[1],$=Object(r.useState)(!1),ee=Object(a.a)($,2),te=ee[0],ne=ee[1],ae=Object(r.useState)([]),re=Object(a.a)(ae,2),oe=re[0],ie=re[1],ce=Object(r.useState)("Select Application Type"),le=Object(a.a)(ce,2),ue=le[0],se=le[1],me=Object(r.useState)(0),de=Object(a.a)(me,2),pe=de[0],he=de[1],fe=Object(r.useState)(!1),ve=Object(a.a)(fe,2),ye=ve[0],Ee=ve[1],ge=Object(r.useState)([]),be=Object(a.a)(ge,2),we=be[0],Oe=be[1],je=Object(r.useState)([]),xe=Object(a.a)(je,2),Ne=xe[0],Se=xe[1],Le=Object(r.useState)("Select Document"),De=Object(a.a)(Le,2),ke=De[0],Ge=De[1],_e=Object(r.useState)(0),Te=Object(a.a)(_e,2),Ie=Te[0],Ce=Te[1],Ae=Object(r.useState)(!1),Fe=Object(a.a)(Ae,2),Pe=Fe[0],Ye=Fe[1],Me=Object(r.useState)(null),Ue=Object(a.a)(Me,2),ze=Ue[0],qe=Ue[1],Be=Object(r.useState)(!1),He=Object(a.a)(Be,2),Je=He[0],Ke=He[1],We=Object(r.useState)(0),Re=Object(a.a)(We,2),Ve=Re[0],Qe=Re[1],Xe=Object(r.useState)(void 0),Ze=Object(a.a)(Xe,2),$e=Ze[0],et=Ze[1],tt=Object(r.useState)([]),nt=Object(a.a)(tt,2),at=nt[0],rt=nt[1],ot=Object(r.useState)(""),it=Object(a.a)(ot,2),ct=it[0],lt=it[1],ut=Object(r.useState)(0),st=Object(a.a)(ut,2),mt=st[0],dt=st[1],pt=Object(r.useState)(""),ht=Object(a.a)(pt,2),ft=ht[0],vt=ht[1],yt=Object(r.useState)(0),Et=Object(a.a)(yt,2),gt=Et[0],bt=Et[1],wt=Object(r.useState)(!0),Ot=Object(a.a)(wt,2),jt=Ot[0],xt=Ot[1],Nt=Object(j.useToasts)().addToast;Object(r.useEffect)((function(){Object(x.a)("ApplicationTypeDD/Index").then((function(e){ie(e),xt(!1)})),Ve>0&&Object(x.a)("DocumentGroupDocument/GetByGroup/".concat(Ve)).then((function(e){rt(e),xt(!1)})),Object(x.a)("DocumentDD/Index").then((function(e){Se(e),xt(!1)})),Object(x.a)("DocumentGroup/Index").then((function(e){Oe(e),xt(!1)}))}),[te,Ve]);var St=null===Ne||void 0===Ne?void 0:Ne.map((function(e){return{label:null===e||void 0===e?void 0:e.name,value:null===e||void 0===e?void 0:e.id}})),Lt=function(e){qe(e.target.value),Ke(!1)},Dt=oe.map((function(e){return{label:null===e||void 0===e?void 0:e.name,value:null===e||void 0===e?void 0:e.id}})),kt=function(){U(!1),_(""),A(""),se("Select Application Type"),he(0),et(void 0)},Gt=function(){H(!1),lt(""),dt(0)},_t=function(){vt(""),bt(0),R(!1)},Tt=function(){Z(!1),Ge("Select Document"),Ce(0),qe(null),Qe(0),Ke(!1),Ye(!1)},It=function(e){e.preventDefault();var t=new FormData(e.target);0==Ie?Ye(!0):null===ze?Ke(!0):Object(N.a)("DocumentGroupDocument/Create",t).then((function(e){var t,n,a;200==(null===e||void 0===e?void 0:e.status)&&1==(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.isSuccess)?(Nt(null===e||void 0===e||null===(n=e.data)||void 0===n?void 0:n.message,{appearance:"success",autoDismiss:!0}),ne(!te),Ge("Select Document"),Ce(0),qe(null)):Nt(null===e||void 0===e||null===(a=e.data)||void 0===a?void 0:a.message,{appearance:"error",autoDismiss:!0})}))};return o.a.createElement("div",null,jt?o.a.createElement(G.a,null):o.a.createElement("div",null,o.a.createElement(c.a,{className:"uapp-card-bg"},o.a.createElement(l.a,{className:"page-header"},o.a.createElement("h3",{className:"text-white"},"Subject Document Group"),o.a.createElement("div",{className:"page-header-back-to-home"},o.a.createElement("span",{onClick:function(){F.push("/")},className:"text-white"}," ",o.a.createElement("i",{className:"fas fa-arrow-circle-left"})," Back to Dashboard")))),o.a.createElement(c.a,null,o.a.createElement(l.a,null,o.a.createElement(D.a,{className:"btn btn-uapp-add",func:function(){return U(!0)},icon:o.a.createElement("i",{className:"fas fa-plus"}),name:" Add New Document Group",permission:6}),o.a.createElement("div",null," ",o.a.createElement("b",null," ","Total"," ",o.a.createElement("span",{className:"badge badge-primary"},null===we||void 0===we?void 0:we.length)," ","Subject Document Group Found"," "))),o.a.createElement(u.a,null,o.a.createElement("div",null,o.a.createElement(s.a,{isOpen:M,toggle:kt,className:"uapp-modal2"},o.a.createElement(m.a,null,"Add Document Group"),o.a.createElement(d.a,null,o.a.createElement(p.a,{onSubmit:function(e){e.preventDefault();var t=new FormData(e.target);if(0===pe)Ee(!0);else if(void 0!=$e)Object(S.a)("DocumentGroup/Update",t).then((function(e){var t;ne(!te),U(!1),Nt(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.message,{appearance:"success",autoDismiss:!0}),_(""),A(""),se("Select Application Type"),he(0),et(void 0)}));else Object(N.a)("DocumentGroup/Create",t).then((function(e){var t;ne(!te),U(!1),Nt(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.message,{appearance:"success",autoDismiss:!0}),_(""),A(""),se("Select Application Type"),he(0)}))}},void 0!=$e?o.a.createElement("input",{type:"hidden",name:"id",id:"id",value:$e}):null,o.a.createElement(h.a,{row:!0,className:"has-icon-left position-relative"},o.a.createElement(f.a,{md:"4"},o.a.createElement("span",null,"Application Type ",o.a.createElement("span",{className:"text-danger"},"*")," ")),o.a.createElement(f.a,{md:"8"},o.a.createElement(O.a,{options:Dt,value:{label:ue,value:pe},onChange:function(e){return t=e.label,n=e.value,se(t),he(n),void Ee(!1);var t,n},name:"applicationTypeId",id:"applicationTypeId"}),ye&&o.a.createElement("span",{className:"text-danger"},"You must select application type."))),o.a.createElement(h.a,{row:!0,className:"has-icon-left position-relative"},o.a.createElement(f.a,{md:"4"},o.a.createElement("span",null,"Title ",o.a.createElement("span",{className:"text-danger"},"*")," ")),o.a.createElement(f.a,{md:"8"},o.a.createElement(v.a,{type:"text",required:!0,name:"title",id:"title",value:n,placeholder:"Write Title",onChange:function(e){return _(e.target.value)}}))),o.a.createElement(h.a,{row:!0,className:"has-icon-left position-relative"},o.a.createElement(f.a,{md:"4"},o.a.createElement("span",null,"Details ",o.a.createElement("span",{className:"text-danger"},"*")," ")),o.a.createElement(f.a,{md:"8"},o.a.createElement(v.a,{type:"textarea",required:!0,rows:"6",name:"details",id:"details",value:C,placeholder:"Write Details",onChange:function(e){return A(e.target.value)}}))),o.a.createElement(h.a,{className:"has-icon-left position-relative",style:{display:"flex",justifyContent:"space-between"}},o.a.createElement(y.a,{color:"danger",className:"mr-1 mt-3",onClick:kt},"Close"),o.a.createElement(k.a,{color:"primary",type:"submit",className:"mr-0 mt-3",name:"Submit",permission:6})))))),o.a.createElement("div",{className:"table-responsive"},o.a.createElement(E.a,{className:"table-sm table-bordered"},o.a.createElement("thead",{className:"thead-uapp-bg"},o.a.createElement("tr",{style:{textAlign:"center"}},o.a.createElement("th",null,"SL/NO"),o.a.createElement("th",null,"Title"),o.a.createElement("th",null,"Details"),o.a.createElement("th",null,"Application type"),o.a.createElement("th",null,"Documents"),o.a.createElement("th",null,"Action"))),o.a.createElement("tbody",null,null===we||void 0===we?void 0:we.map((function(e,t){return o.a.createElement("tr",{key:null===e||void 0===e?void 0:e.id,style:{textAlign:"center"}},o.a.createElement("th",{scope:"row"},t+1),o.a.createElement("td",null,null===e||void 0===e?void 0:e.title),o.a.createElement("td",{className:"text-center"},null===e||void 0===e?void 0:e.details),o.a.createElement("td",{className:"text-center"},1===(null===e||void 0===e?void 0:e.applicationTypeId)?o.a.createElement("span",null,"Home"):2===(null===e||void 0===e?void 0:e.applicationTypeId)?o.a.createElement("span",null,"EU/UK"):o.a.createElement("span",null,"International")),o.a.createElement("td",null,o.a.createElement(D.a,{name:"View",color:"success",func:function(){return function(e){Qe(null===e||void 0===e?void 0:e.id),Z(!0)}(e)},className:"mx-1 btn-sm"})),o.a.createElement("td",null,o.a.createElement(g.a,null,o.a.createElement(D.a,{func:function(){return function(e){U(!0),se(1===(null===e||void 0===e?void 0:e.applicationTypeId)?"Home":2===(null===e||void 0===e?void 0:e.applicationTypeId)?"EU/UK":"International"),he(null===e||void 0===e?void 0:e.applicationTypeId),_(null===e||void 0===e?void 0:e.title),A(null===e||void 0===e?void 0:e.details),et(null===e||void 0===e?void 0:e.id)}(e)},className:"mx-1 btn-sm",color:"warning",icon:o.a.createElement("i",{className:"fas fa-edit"}),permission:6}),o.a.createElement(D.a,{className:"mx-1 btn-sm",func:function(){return t=null===e||void 0===e?void 0:e.title,n=null===e||void 0===e?void 0:e.id,lt(t),dt(n),void H(!0);var t,n},color:"danger",icon:o.a.createElement("i",{className:"fas fa-trash-alt"}),permission:6})),o.a.createElement(s.a,{size:"xl",isOpen:X,toggle:Tt,className:"pt-5"},o.a.createElement(m.a,null,"Document Group"),o.a.createElement(d.a,null,o.a.createElement("div",{className:"row container pt-5"},o.a.createElement("div",{className:"col-md-4 col-sm-12"},o.a.createElement("div",{className:"hedding-titel d-flex justify-content-between mb-4"},o.a.createElement("div",null,o.a.createElement("h5",null," ",o.a.createElement("b",null,"Document List")," "),o.a.createElement("div",{className:"bg-h"}))),o.a.createElement("div",{className:"table-responsive"},o.a.createElement(E.a,{borderless:!0,className:"table-sm"},o.a.createElement("tbody",null,at.length<1?o.a.createElement("span",null,"There is no data added here."):o.a.createElement(o.a.Fragment,null,null===at||void 0===at?void 0:at.map((function(e,t){var n;return o.a.createElement("tr",{key:e.id},o.a.createElement("td",null,o.a.createElement("i",{className:"fas fa-chevron-circle-right"})," ",null===e||void 0===e||null===(n=e.document)||void 0===n?void 0:n.name),o.a.createElement("td",null,o.a.createElement(D.a,{className:"mx-1 btn-sm",func:function(){return function(e){var t;vt(null===e||void 0===e||null===(t=e.document)||void 0===t?void 0:t.name),bt(null===e||void 0===e?void 0:e.id),R(!0)}(e)},color:"danger",icon:o.a.createElement("i",{className:"fas fa-trash-alt"}),permission:6}),o.a.createElement(s.a,{isOpen:W,toggle:_t,className:"uapp-modal"},o.a.createElement(d.a,null,o.a.createElement("p",null,"Are You Sure to Delete this"," ",o.a.createElement("b",null,ft)," ","? Once Deleted it can't be Undone!")),o.a.createElement(b.a,null,o.a.createElement(y.a,{color:"danger",onClick:function(){return e=gt,void Object(L.a)("DocumentGroupDocument/Delete/".concat(e)).then((function(e){R(!1),ne(!te),Nt(e,{appearance:"error",autoDismiss:!0}),vt(""),bt(0)}));var e}},"YES"),o.a.createElement(y.a,{color:"primary",onClick:_t},"NO")))))}))))))),o.a.createElement("div",{className:"col-md-8 col-sm-12"},o.a.createElement(p.a,{onSubmit:It,className:""},o.a.createElement("div",{className:"hedding-titel d-flex justify-content-between mb-4"},o.a.createElement("div",null,o.a.createElement("h5",null," ",o.a.createElement("b",null,"Add to group")," "),o.a.createElement("div",{className:"bg-h"}))),o.a.createElement(h.a,{row:!0,className:"has-icon-left position-relative"},o.a.createElement(v.a,{type:"hidden",id:"documentGroupId",name:"documentGroupId",value:Ve})),o.a.createElement(h.a,{row:!0,className:"has-icon-left position-relative"},o.a.createElement(f.a,{md:"4"},o.a.createElement("span",null,"Document"," ",o.a.createElement("span",{className:"text-danger"},"*")," ")),o.a.createElement(f.a,{md:"8"},o.a.createElement(O.a,{options:St,value:{label:ke,value:Ie},onChange:function(e){return t=e.label,n=e.value,Ye(!1),Ge(t),void Ce(n);var t,n},name:"documentId",id:"documentId"}),Pe&&o.a.createElement("span",{className:"text-danger"},"Document must be selected."))),o.a.createElement(h.a,{row:!0,className:"has-icon-left position-relative"},o.a.createElement(f.a,{md:"4"},o.a.createElement("span",null,"Is Mandatory"," ",o.a.createElement("span",{className:"text-danger"},"*")," ")),o.a.createElement(f.a,{md:"8"},o.a.createElement(h.a,{check:!0,inline:!0},o.a.createElement(v.a,{className:"form-check-input",type:"radio",id:"isMandatory",onChange:Lt,name:"isMandatory",value:"true",checked:"true"==ze}),o.a.createElement(w.a,{className:"form-check-label",check:!0,htmlFor:"isMandatory"},"Yes")),o.a.createElement(h.a,{check:!0,inline:!0},o.a.createElement(v.a,{className:"form-check-input",type:"radio",id:"isMandatory",onChange:Lt,name:"isMandatory",value:"false",checked:"false"==ze}),o.a.createElement(w.a,{className:"form-check-label",check:!0,htmlFor:"isMandatory"},"No")),o.a.createElement("br",null),Je&&o.a.createElement("span",{className:"text-danger"},"Is mandatory must be selected."))),o.a.createElement(h.a,{className:"has-icon-left position-relative"},o.a.createElement(o.a.Fragment,null,o.a.createElement(h.a,{className:"has-icon-left position-relative",style:{display:"flex",justifyContent:"end"}},o.a.createElement(D.a,{color:"primary",type:"submit",className:"ms-lg-3 ms-sm-1 mt-3",name:"Submit",permission:6})))))))),o.a.createElement(b.a,null,o.a.createElement(y.a,{color:"danger",onClick:Tt},"Close"))),o.a.createElement(s.a,{isOpen:B,toggle:Gt,className:"uapp-modal"},o.a.createElement(d.a,null,o.a.createElement("p",null,"Are You Sure to Delete this"," ",o.a.createElement("b",null,ct)," ? Once Deleted it can't be Undone!")),o.a.createElement(b.a,null,o.a.createElement(y.a,{color:"danger",onClick:function(){return e=mt,void Object(L.a)("DocumentGroup/Delete/".concat(e)).then((function(e){H(!1),ne(!te),Nt(e,{appearance:"error",autoDismiss:!0}),lt(""),dt(0)}));var e}},"YES"),o.a.createElement(y.a,{onClick:Gt},"NO")))))})))))))))}}}]);
//# sourceMappingURL=204.4ff2bac7.chunk.js.map