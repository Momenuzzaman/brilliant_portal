/*! For license information please see 225.44935bad.chunk.js.LICENSE.txt */
(this.webpackJsonpdesk_client=this.webpackJsonpdesk_client||[]).push([[225],{256:function(t,e,r){"use strict";var n=r(10),a=r(3),o=r.n(a),i=r(157),c=r(47);function l(){l=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(S){c=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var a=e&&e.prototype instanceof f?e:f,o=Object.create(a.prototype),i=new N(n||[]);return o._invoke=function(t,e,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return j()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=b(i,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=s(t,e,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===h)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(t,r,i),o}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(S){return{type:"throw",arg:S}}}t.wrap=u;var h={};function f(){}function m(){}function d(){}var p={};c(p,a,(function(){return this}));var v=Object.getPrototypeOf,g=v&&v(v(O([])));g&&g!==e&&r.call(g,a)&&(p=g);var y=d.prototype=f.prototype=Object.create(p);function E(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){var n;this._invoke=function(a,o){function i(){return new e((function(n,i){!function n(a,o,i,c){var l=s(t[a],t,o);if("throw"!==l.type){var u=l.arg,h=u.value;return h&&"object"==typeof h&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(h).then((function(t){u.value=t,i(u)}),(function(t){return n("throw",t,i,c)}))}c(l.arg)}(a,o,n,i)}))}return n=n?n.then(i,i):i()}}function b(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,b(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=s(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,h;var a=n.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function O(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:j}}function j(){return{value:void 0,done:!0}}return m.prototype=d,c(y,"constructor",d),c(d,"constructor",m),m.displayName=c(d,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,c(t,i,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},E(w.prototype),c(w.prototype,o,(function(){return this})),t.AsyncIterator=w,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var i=new w(u(e,r,n,a),o);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},E(y),c(y,i,"Generator"),c(y,a,(function(){return this})),c(y,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=O,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;L(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:O(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t}var u=localStorage.getItem("token");function s(){return(s=Object(n.a)(l().mark((function t(e){var r,n,a=arguments;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a.length>1&&void 0!==a[1]?a[1]:{},a.length>2&&void 0!==a[2]?a[2]:"",t.prev=2,t.next=5,o.a.put("".concat(c.a).concat(e),r,{headers:{authorization:u}});case 5:return n=t.sent,t.next=8,n;case 8:return t.abrupt("return",t.sent);case 11:throw t.prev=11,t.t0=t.catch(2),404===t.t0.response.status&&i.a.push("/404"),t.t0;case 15:case"end":return t.stop()}}),t,null,[[2,11]])})))).apply(this,arguments)}e.a=function(t){return s.apply(this,arguments)}},257:function(t,e,r){"use strict";var n=r(10),a=r(3),o=r.n(a),i=r(157),c=r(47);function l(){l=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(S){c=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var a=e&&e.prototype instanceof f?e:f,o=Object.create(a.prototype),i=new N(n||[]);return o._invoke=function(t,e,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return j()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=b(i,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=s(t,e,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===h)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(t,r,i),o}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(S){return{type:"throw",arg:S}}}t.wrap=u;var h={};function f(){}function m(){}function d(){}var p={};c(p,a,(function(){return this}));var v=Object.getPrototypeOf,g=v&&v(v(O([])));g&&g!==e&&r.call(g,a)&&(p=g);var y=d.prototype=f.prototype=Object.create(p);function E(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){var n;this._invoke=function(a,o){function i(){return new e((function(n,i){!function n(a,o,i,c){var l=s(t[a],t,o);if("throw"!==l.type){var u=l.arg,h=u.value;return h&&"object"==typeof h&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(h).then((function(t){u.value=t,i(u)}),(function(t){return n("throw",t,i,c)}))}c(l.arg)}(a,o,n,i)}))}return n=n?n.then(i,i):i()}}function b(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,b(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=s(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,h;var a=n.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function O(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:j}}function j(){return{value:void 0,done:!0}}return m.prototype=d,c(y,"constructor",d),c(d,"constructor",m),m.displayName=c(d,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,c(t,i,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},E(w.prototype),c(w.prototype,o,(function(){return this})),t.AsyncIterator=w,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var i=new w(u(e,r,n,a),o);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},E(y),c(y,i,"Generator"),c(y,a,(function(){return this})),c(y,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=O,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;L(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:O(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t}var u=localStorage.getItem("token");function s(){return(s=Object(n.a)(l().mark((function t(e){var r,n,a,s=arguments;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=s.length>1&&void 0!==s[1]?s[1]:{},s.length>2&&void 0!==s[2]?s[2]:"",t.prev=2,t.next=5,o.a.post("".concat(c.a).concat(e),r,{headers:{authorization:u}});case 5:return n=t.sent,t.next=8,n;case 8:return t.abrupt("return",t.sent);case 11:throw t.prev=11,t.t0=t.catch(2),404===(null===t.t0||void 0===t.t0||null===(a=t.t0.response)||void 0===a?void 0:a.status)&&i.a.push("/404"),t.t0;case 15:case"end":return t.stop()}}),t,null,[[2,11]])})))).apply(this,arguments)}e.a=function(t){return s.apply(this,arguments)}},969:function(t,e,r){"use strict";r.r(e);var n=r(29),a=r(0),o=r.n(a),i=r(33),c=r(255),l=r(306),u=r(265),s=r(264),h=r(103),f=r(257),m=r(256),d=r(303),p=r(270),v=r(267),g=r(268),y=r(96),E=function(t){var e=t.id,r=t.handleRange,n=t.handleFrom,a=t.handleTo,i=t.handleCommission,c=t.rangeName,l=(t.setRangeName,t.from),u=(t.setFrom,t.to),s=(t.setTo,t.handleSubmit),h=t.commission,f=(t.setCommission,t.data);return o.a.createElement("div",null,o.a.createElement("div",{className:"mb-4"},o.a.createElement("span",{className:"branch-title-style2"},"Add Commission Information")),o.a.createElement("form",{onSubmit:s},(null===f||void 0===f?void 0:f.id)?o.a.createElement("input",{type:"hidden",name:"id",id:"id",value:null===f||void 0===f?void 0:f.id}):null,o.a.createElement("input",{type:"hidden",name:"commissionGroupId",id:"commissionGroupId",value:e}),o.a.createElement(p.a,{row:!0,className:"has-icon-left position-relative"},o.a.createElement(v.a,{md:"4"},o.a.createElement("span",null,"Price Range Name ",o.a.createElement("span",{className:"text-danger"}))),o.a.createElement(v.a,{md:"8"},o.a.createElement(g.a,{type:"text",name:"priceRangeName",id:"priceRangeName",value:c,onChange:r,required:!0}))),o.a.createElement(p.a,{row:!0,className:"has-icon-left position-relative"},o.a.createElement(v.a,{md:"4"},o.a.createElement("span",null,"Student Range From ",o.a.createElement("span",{className:"text-danger"}))),o.a.createElement(v.a,{md:"8"},o.a.createElement(g.a,{type:"text",name:"rangeFrom",id:"rangeFrom",value:l,onChange:n,required:!0}))),o.a.createElement(p.a,{row:!0,className:"has-icon-left position-relative"},o.a.createElement(v.a,{md:"4"},o.a.createElement("span",null,"Student Range To ",o.a.createElement("span",{className:"text-danger"}))),o.a.createElement(v.a,{md:"8"},o.a.createElement(g.a,{type:"text",name:"rangeTo",id:"rangeTo",value:u,onChange:a,required:!0}))),o.a.createElement(p.a,{row:!0,className:"has-icon-left position-relative"},o.a.createElement(v.a,{md:"4"},o.a.createElement("span",null,"Commission Amount ",o.a.createElement("span",{className:"text-danger"}))),o.a.createElement(v.a,{md:"8"},o.a.createElement(g.a,{type:"text",name:"commissionAmount",id:"commissionAmount",value:h,onChange:i,required:!0}))),o.a.createElement("div",{className:"d-flex justify-content-end mt-3"},o.a.createElement("div",null,o.a.createElement(y.a,{color:"primary",type:"submit"},"Submit")))))},w=r(758),b=r(459),x=r(311),L=r(310),N=r(324),O=function(t){var e=t.list,r=t.toggleUpdate,n=t.toggleDanger,a=t.deleteModal,i=t.setDeleteModal,c=t.confirmDelete;return o.a.createElement("div",null,o.a.createElement("div",{className:"mb-4"},o.a.createElement("span",{className:"branch-title-style2"},"Commission Price List")),o.a.createElement(w.a,{className:"table-sm table-bordered"},o.a.createElement("thead",{className:"thead-uapp-bg"},o.a.createElement("tr",{style:{textAlign:"center"}},o.a.createElement("th",null,"Price Range Name"),o.a.createElement("th",null,"Student From"),o.a.createElement("th",null,"Student To"),o.a.createElement("th",null,"Commission"),o.a.createElement("th",null,"Action"))),o.a.createElement("tbody",null,null===e||void 0===e?void 0:e.map((function(t,e){return o.a.createElement("tr",{key:e,style:{textAlign:"center"}},o.a.createElement("td",null,null===t||void 0===t?void 0:t.priceRangeName),o.a.createElement("td",null,null===t||void 0===t?void 0:t.rangeFrom),o.a.createElement("td",null,null===t||void 0===t?void 0:t.rangeTo),o.a.createElement("td",null,null===t||void 0===t?void 0:t.commissionAmount),o.a.createElement("td",{style:{width:"15%"},className:"text-center"},o.a.createElement(b.a,{variant:"text"},o.a.createElement(y.a,{className:"me-1 btn-sm",color:"warning",onClick:function(){return r(t)}},o.a.createElement("i",{className:"fas fa-edit"})),o.a.createElement(y.a,{className:"ms-1 btn-sm",color:"danger",onClick:function(){return n(t)}},o.a.createElement("i",{className:"fas fa-trash-alt"}))),o.a.createElement(x.a,{isOpen:a,toggle:function(){return i(!a)},className:"uapp-modal"},o.a.createElement(L.a,null,o.a.createElement("p",null,"Are You Sure to Delete this ? Once Deleted it can't be Undone!")),o.a.createElement(N.a,null,o.a.createElement(y.a,{color:"danger",onClick:c},"YES"),o.a.createElement(y.a,{onClick:function(){return i(!1)}},"NO")))))})))))};e.default=function(){var t=Object(i.i)().id,e=Object(i.g)(),r=Object(a.useState)(""),p=Object(n.a)(r,2),v=p[0],g=p[1],y=Object(a.useState)(""),w=Object(n.a)(y,2),b=w[0],x=w[1],L=Object(a.useState)(""),N=Object(n.a)(L,2),j=N[0],S=N[1],k=Object(a.useState)(""),_=Object(n.a)(k,2),G=_[0],T=_[1],F=Object(a.useState)(!1),P=Object(n.a)(F,2),C=P[0],R=P[1],D=Object(a.useState)([]),A=Object(n.a)(D,2),I=A[0],Y=A[1],q=Object(a.useState)({}),M=Object(n.a)(q,2),U=M[0],z=M[1],J=Object(a.useState)({}),B=Object(n.a)(J,2),H=B[0],K=B[1],Q=Object(a.useState)(!1),V=Object(n.a)(Q,2),W=V[0],X=V[1],Z=Object(c.useToasts)().addToast;Object(a.useEffect)((function(){Object(h.a)("GroupPriceRange/Index/".concat(t)).then((function(t){Y(t)}))}),[C]);return o.a.createElement("div",null,o.a.createElement(l.a,{className:"uapp-card-bg"},o.a.createElement(u.a,{className:"page-header"},o.a.createElement("h3",{className:"text-light"},"Commission Price List"),o.a.createElement("div",{className:"page-header-back-to-home"},o.a.createElement("span",{className:"text-light",onClick:function(){e.push("/")}}," ",o.a.createElement("i",{className:"fas fa-arrow-circle-left"})," Back to Dashboard")))),o.a.createElement(l.a,null,o.a.createElement(s.a,null,o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-5"},o.a.createElement(E,{id:t,handleRange:function(t){g(t.target.value)},handleFrom:function(t){x(t.target.value)},handleTo:function(t){S(t.target.value)},handleCommission:function(t){T(t.target.value)},rangeName:v,setRangeName:g,from:b,setFrom:x,to:j,setTo:S,handleSubmit:function(t){t.preventDefault();var e=new FormData(t.target);U.id?Object(m.a)("GroupPriceRange/Update",e).then((function(t){var e;200==(null===t||void 0===t?void 0:t.status)&&(Z(null===t||void 0===t||null===(e=t.data)||void 0===e?void 0:e.message,{appearance:"success",autoDismiss:!0}),g(""),x(""),S(""),T(""),z({}),R(!C))})):Object(f.a)("GroupPriceRange/Create",e).then((function(t){var e;200==(null===t||void 0===t?void 0:t.status)&&(Z(null===t||void 0===t||null===(e=t.data)||void 0===e?void 0:e.message,{appearance:"success",autoDismiss:!0}),g(""),x(""),S(""),T(""),R(!C))}))},commission:G,setCommission:T,data:U})),o.a.createElement("div",{className:"col-md-7"},o.a.createElement(O,{list:I,toggleUpdate:function(t){z(t),g(null===t||void 0===t?void 0:t.priceRangeName),x(null===t||void 0===t?void 0:t.rangeFrom),S(null===t||void 0===t?void 0:t.rangeTo),T(null===t||void 0===t?void 0:t.commissionAmount)},toggleDanger:function(t){K(t),X(!0)},deleteModal:W,setDeleteModal:X,confirmDelete:function(){Object(d.a)("GroupPriceRange/Delete/".concat(null===H||void 0===H?void 0:H.id)).then((function(t){Z(t,{appearance:"error",autoDismiss:!0}),K({}),g(""),x(""),S(""),T(""),R(!C),R(!C),X(!1)}))}}))))))}}}]);
//# sourceMappingURL=225.44935bad.chunk.js.map