/*! For license information please see 223.5220d1ab.chunk.js.LICENSE.txt */
(this.webpackJsonpdesk_client=this.webpackJsonpdesk_client||[]).push([[223],{249:function(t,e,r){"use strict";var n=r(0),a=r.n(n),o=r(97);e.a=function(t){var e=t.className,r=t.icon,n=t.color,i=(t.permission,t.type),c=(t.url,t.func),l=t.name,u=t.disable;return a.a.createElement(a.a.Fragment,null,a.a.createElement(o.a,{onClick:c,color:n,type:i,className:e,disabled:u}," ",r,l," "))}},251:function(t,e,r){"use strict";var n=r(9),a=r(3),o=r.n(a),i=r(152),c=r(29);function l(){l=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(_){c=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var a=e&&e.prototype instanceof f?e:f,o=Object.create(a.prototype),i=new O(n||[]);return o._invoke=function(t,e,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return N()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=b(i,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=s(t,e,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===h)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(t,r,i),o}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(_){return{type:"throw",arg:_}}}t.wrap=u;var h={};function f(){}function p(){}function d(){}var v={};c(v,a,(function(){return this}));var m=Object.getPrototypeOf,y=m&&m(m(j([])));y&&y!==e&&r.call(y,a)&&(v=y);var g=d.prototype=f.prototype=Object.create(v);function w(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){var n;this._invoke=function(a,o){function i(){return new e((function(n,i){!function n(a,o,i,c){var l=s(t[a],t,o);if("throw"!==l.type){var u=l.arg,h=u.value;return h&&"object"==typeof h&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(h).then((function(t){u.value=t,i(u)}),(function(t){return n("throw",t,i,c)}))}c(l.arg)}(a,o,n,i)}))}return n=n?n.then(i,i):i()}}function b(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,b(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=s(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,h;var a=n.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function j(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:N}}function N(){return{value:void 0,done:!0}}return p.prototype=d,c(g,"constructor",d),c(d,"constructor",p),p.displayName=c(d,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,c(t,i,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},w(E.prototype),c(E.prototype,o,(function(){return this})),t.AsyncIterator=E,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var i=new E(u(e,r,n,a),o);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},w(g),c(g,i,"Generator"),c(g,a,(function(){return this})),c(g,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=j,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;L(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:j(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t}var u=localStorage.getItem("token");function s(){return(s=Object(n.a)(l().mark((function t(e){var r,n,a,s=arguments;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=s.length>1&&void 0!==s[1]?s[1]:{},s.length>2&&void 0!==s[2]?s[2]:"",t.prev=2,t.next=5,o.a.post("".concat(c.a).concat(e),r,{headers:{authorization:u}});case 5:return n=t.sent,t.next=8,n;case 8:return t.abrupt("return",t.sent);case 11:throw t.prev=11,t.t0=t.catch(2),404===(null===t.t0||void 0===t.t0||null===(a=t.t0.response)||void 0===a?void 0:a.status)&&i.a.push("/404"),t.t0;case 15:case"end":return t.stop()}}),t,null,[[2,11]])})))).apply(this,arguments)}e.a=function(t){return s.apply(this,arguments)}},252:function(t,e,r){"use strict";var n=r(9),a=r(3),o=r.n(a),i=(r(152),r(29));function c(){c=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(_){l=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var a=e&&e.prototype instanceof f?e:f,o=Object.create(a.prototype),i=new O(n||[]);return o._invoke=function(t,e,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return N()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=b(i,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=s(t,e,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===h)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(t,r,i),o}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(_){return{type:"throw",arg:_}}}t.wrap=u;var h={};function f(){}function p(){}function d(){}var v={};l(v,a,(function(){return this}));var m=Object.getPrototypeOf,y=m&&m(m(j([])));y&&y!==e&&r.call(y,a)&&(v=y);var g=d.prototype=f.prototype=Object.create(v);function w(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){var n;this._invoke=function(a,o){function i(){return new e((function(n,i){!function n(a,o,i,c){var l=s(t[a],t,o);if("throw"!==l.type){var u=l.arg,h=u.value;return h&&"object"==typeof h&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(h).then((function(t){u.value=t,i(u)}),(function(t){return n("throw",t,i,c)}))}c(l.arg)}(a,o,n,i)}))}return n=n?n.then(i,i):i()}}function b(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,b(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=s(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,h;var a=n.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function j(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:N}}function N(){return{value:void 0,done:!0}}return p.prototype=d,l(g,"constructor",d),l(d,"constructor",p),p.displayName=l(d,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,l(t,i,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},w(E.prototype),l(E.prototype,o,(function(){return this})),t.AsyncIterator=E,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var i=new E(u(e,r,n,a),o);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},w(g),l(g,i,"Generator"),l(g,a,(function(){return this})),l(g,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=j,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;L(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:j(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t}var l=localStorage.getItem("token");function u(){return(u=Object(n.a)(c().mark((function t(e){var r,n,a=arguments;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a.length>1&&void 0!==a[1]?a[1]:{},a.length>2&&void 0!==a[2]?a[2]:"",t.prev=2,t.next=5,o.a.put("".concat(i.a).concat(e),r,{headers:{authorization:l}});case 5:return n=t.sent,t.next=8,n;case 8:return t.abrupt("return",t.sent);case 11:return t.prev=11,t.t0=t.catch(2),t.abrupt("return",t.t0);case 14:case"end":return t.stop()}}),t,null,[[2,11]])})))).apply(this,arguments)}e.a=function(t){return u.apply(this,arguments)}},308:function(t,e,r){"use strict";var n=r(0),a=r.n(n),o=r(335),i=r.n(o);e.a=function(){return a.a.createElement("div",{className:"text-center"},a.a.createElement("img",{className:"img-fluid",src:i.a}))}},348:function(t,e,r){"use strict";var n=r(0),a=r.n(n),o=r(36);e.a=function(t){var e=t.style,r=t.url,n=t.className,i=(t.icon,t.permission),c=(t.name,t.data),l=[1,2,3,4,6];return a.a.createElement(a.a.Fragment,null,(null===l||void 0===l?void 0:l.includes(i))?a.a.createElement(o.a,{style:e,className:n,to:r},a.a.createElement("span",null,c)):null)}},802:function(t,e,r){"use strict";r.r(e);var n=r(19),a=r(0),o=r.n(a),i=r(30),c=r(37),l=r(292),u=r(260),s=r(255),h=r(300),f=r(336),p=r(299),d=r(268),v=r(265),m=r(256),y=r(263),g=r(97),w=r(765),E=(r(475),r(253)),b=r(455),x=r(36),L=r(99),O=r(251),j=(r(290),r(252)),N=(r(249),r(348)),_=r(308);e.default=Object(i.b)((function(t){return{univerSityTypeList:t.universityTypeDataReducer.universityTypes}}))((function(t){var e=t.univerSityTypeList[0];console.log("uniType",e);var r=Object(a.useState)(0),k=Object(n.a)(r,2),S=(k[0],k[1]),T=Object(a.useState)(""),G=Object(n.a)(T,2),F=(G[0],G[1]),P=Object(c.g)(),C=Object(i.c)(),I=Object(a.useState)(!1),U=Object(n.a)(I,2),A=U[0],D=U[1],Y=Object(a.useState)(!1),z=Object(n.a)(Y,2),J=(z[0],z[1],Object(a.useState)(!1)),R=Object(n.a)(J,2),V=R[0],B=R[1],q=Object(E.useToasts)().addToast,H=Object(a.useState)([]),K=Object(n.a)(H,2),M=K[0],Q=K[1],W=Object(a.useState)({}),X=Object(n.a)(W,2),Z=X[0],$=X[1],tt=Object(a.useState)(!0),et=Object(n.a)(tt,2),rt=et[0],nt=et[1];Object(a.useEffect)((function(){Object(L.a)("UniversityType/Index").then((function(t){Q(t),S(null===t||void 0===t?void 0:t.id),C(Object(b.a)(t)),nt(!1)}))}),[V]);var at=function(){D(!1),$({})};return o.a.createElement("div",null,rt?o.a.createElement(_.a,null):o.a.createElement("div",null,o.a.createElement(l.a,{className:"uapp-card-bg"},o.a.createElement(u.a,{className:"page-header"},o.a.createElement("h3",{className:"text-white"},"University Types"),o.a.createElement("div",{className:"page-header-back-to-home"},o.a.createElement("span",{onClick:function(){P.push("/")},className:"text-white"}," ",o.a.createElement("i",{className:"fas fa-arrow-circle-left"})," Back to Dashboard")))),o.a.createElement(l.a,null,o.a.createElement(u.a,null,o.a.createElement("br",null),o.a.createElement("div",null," ",o.a.createElement("b",null," Total ",o.a.createElement("span",{className:"badge badge-primary"},M.length)," University Types Found "))),o.a.createElement(s.a,null,o.a.createElement(x.a,{to:"/newform"}),o.a.createElement("div",null,o.a.createElement(h.a,{isOpen:A,toggle:at,className:"uapp-modal"},o.a.createElement(f.a,null,"Add University Type"),o.a.createElement(p.a,null,o.a.createElement(d.a,{onSubmit:function(t){t.preventDefault();var e=new FormData(t.target);(null===Z||void 0===Z?void 0:Z.id)?Object(j.a)("UniversityType/Update",e).then((function(t){var e;B(!V),D(!1),q(null===t||void 0===t||null===(e=t.data)||void 0===e?void 0:e.message,{appearance:"warning",autoDismiss:!0}),$({})})):($({}),Object(O.a)("UniversityType/Create",e).then((function(t){var e;B(!V),q(null===t||void 0===t||null===(e=t.data)||void 0===e?void 0:e.message,{appearance:"success",autoDismiss:!0}),D(!1),F(""),$({})})))}},o.a.createElement(v.a,{row:!0,className:"has-icon-left position-relative"},(null===Z||void 0===Z?void 0:Z.id)?o.a.createElement(m.a,{type:"hidden",name:"id",id:"id",defaultValue:null===Z||void 0===Z?void 0:Z.id}):null),o.a.createElement(v.a,{row:!0,className:"has-icon-left position-relative"},o.a.createElement(y.a,{md:"4"},o.a.createElement("span",null,"Name")),o.a.createElement(y.a,{md:"8"},o.a.createElement(m.a,{type:"text",name:"name",id:"name",defaultValue:null===Z||void 0===Z?void 0:Z.name,placeholder:"Create University Type",onChange:function(t){return F(t.target.value)}}))),o.a.createElement(v.a,{className:"has-icon-left position-relative",style:{display:"flex",justifyContent:"space-between"}},o.a.createElement(g.a,{color:"danger",className:"mr-1 mt-3",onClick:at},"Close"),o.a.createElement(g.a.Ripple,{color:"warning",type:"submit",className:"mr-1 mt-3"},"Submit"))))),o.a.createElement("div",null)),o.a.createElement("div",{className:"table-responsive"},o.a.createElement(w.a,{className:"table-sm table-bordered"},o.a.createElement("thead",{className:"thead-uapp-bg"},o.a.createElement("tr",{style:{textAlign:"center"}},o.a.createElement("th",null,"SL/NO"),o.a.createElement("th",null,"Name"),o.a.createElement("th",{className:"text-center"},"Universities"))),o.a.createElement("tbody",null,null===e||void 0===e?void 0:e.map((function(t,e){return o.a.createElement("tr",{key:t.id,style:{textAlign:"center"}},o.a.createElement("th",{scope:"row"},e+1),o.a.createElement("td",null,null===t||void 0===t?void 0:t.name),o.a.createElement("td",{className:"text-center"},o.a.createElement(N.a,{url:{pathname:"/universityList",universityType:null===t||void 0===t?void 0:t.id,universityName:null===t||void 0===t?void 0:t.name},className:"badge badge-pill badge-primary",data:null===t||void 0===t?void 0:t.universityCount,permission:6})))})))))))))}))}}]);
//# sourceMappingURL=223.5220d1ab.chunk.js.map