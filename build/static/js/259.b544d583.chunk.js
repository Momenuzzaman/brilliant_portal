/*! For license information please see 259.b544d583.chunk.js.LICENSE.txt */
(this.webpackJsonpdesk_client=this.webpackJsonpdesk_client||[]).push([[259],{256:function(e,t,r){"use strict";var n=r(10),a=r(3),o=r.n(a),c=r(155),i=r(47);function l(){l=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",c=n.toStringTag||"@@toStringTag";function i(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{i({},"")}catch(N){i=function(e,t,r){return e[t]=r}}function u(e,t,r,n){var a=t&&t.prototype instanceof f?t:f,o=Object.create(a.prototype),c=new k(n||[]);return o._invoke=function(e,t,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return L()}for(r.method=a,r.arg=o;;){var c=r.delegate;if(c){var i=w(c,r);if(i){if(i===h)continue;return i}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=s(e,t,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===h)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(e,r,c),o}function s(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(N){return{type:"throw",arg:N}}}e.wrap=u;var h={};function f(){}function m(){}function p(){}var d={};i(d,a,(function(){return this}));var v=Object.getPrototypeOf,y=v&&v(v(j([])));y&&y!==t&&r.call(y,a)&&(d=y);var g=p.prototype=f.prototype=Object.create(d);function b(e){["next","throw","return"].forEach((function(t){i(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){var n;this._invoke=function(a,o){function c(){return new t((function(n,c){!function n(a,o,c,i){var l=s(e[a],e,o);if("throw"!==l.type){var u=l.arg,h=u.value;return h&&"object"==typeof h&&r.call(h,"__await")?t.resolve(h.__await).then((function(e){n("next",e,c,i)}),(function(e){n("throw",e,c,i)})):t.resolve(h).then((function(e){u.value=e,c(u)}),(function(e){return n("throw",e,c,i)}))}i(l.arg)}(a,o,n,c)}))}return n=n?n.then(c,c):c()}}function w(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method))return h;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=s(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,h;var a=n.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,h):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,h)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function k(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function j(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:L}}function L(){return{value:void 0,done:!0}}return m.prototype=p,i(g,"constructor",p),i(p,"constructor",m),m.displayName=i(p,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,i(e,c,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},b(E.prototype),i(E.prototype,o,(function(){return this})),e.AsyncIterator=E,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var c=new E(u(t,r,n,a),o);return e.isGeneratorFunction(r)?c:c.next().then((function(e){return e.done?e.value:c.next()}))},b(g),i(g,c,"Generator"),i(g,a,(function(){return this})),i(g,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=j,k.prototype={constructor:k,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return c.type="throw",c.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],c=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var i=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(i&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=e,c.arg=t,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(c)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),O(r),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;O(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:j(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},e}var u=localStorage.getItem("token");function s(){return(s=Object(n.a)(l().mark((function e(t){var r,n,a,s=arguments;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=s.length>1&&void 0!==s[1]?s[1]:{},s.length>2&&void 0!==s[2]?s[2]:"",e.prev=2,e.next=5,o.a.post("".concat(i.a).concat(t),r,{headers:{authorization:u}});case 5:return n=e.sent,e.next=8,n;case 8:return e.abrupt("return",e.sent);case 11:throw e.prev=11,e.t0=e.catch(2),404===(null===e.t0||void 0===e.t0||null===(a=e.t0.response)||void 0===a?void 0:a.status)&&c.a.push("/404"),e.t0;case 15:case"end":return e.stop()}}),e,null,[[2,11]])})))).apply(this,arguments)}t.a=function(e){return s.apply(this,arguments)}},797:function(e,t,r){"use strict";r.r(t);var n=r(8),a=r(30),o=r(0),c=r.n(o),i=r(27),l=r(34),u=r(273),s=r(258),h=r(304),f=r(266),m=r(261),p=r(274),d=r(263),v=r(270),y=r(347),g=r(94),b=r(310),E=r(308),w=r(101),x=r(256),O=r(356);t.default=Object(i.b)((function(e){return{roleList:e.roleDataReducer.roles}}))((function(e){var t=Object(o.createRef)(),r=Object(o.useState)(!1),i=Object(a.a)(r,2),k=i[0],j=i[1],L=Object(o.useState)("Select Role..."),N=Object(a.a)(L,2),S=N[0],_=N[1],C=Object(o.useState)(""),I=Object(a.a)(C,2),A=I[0],G=I[1],R=Object(o.useState)([]),F=Object(a.a)(R,2),T=F[0],M=F[1],P=Object(o.useState)(!1),D=Object(a.a)(P,2),B=(D[0],D[1],Object(o.useState)([])),Y=Object(a.a)(B,2),J=Y[0],U=Y[1],z=Object(s.useToasts)().addToast,q=Object(l.g)(),H=JSON.parse(localStorage.getItem("permissions")),K=Object(o.useState)([]),Q=Object(a.a)(K,2),V=Q[0],W=Q[1];Object(o.useEffect)((function(){Object(w.a)("UserRole/Index").then((function(e){W(e)}))}),[]);var X=null===V||void 0===V?void 0:V.map((function(e){return{label:e.name,value:e.id}}));return c.a.createElement("div",null,c.a.createElement(h.a,{className:"uapp-card-bg"},c.a.createElement(f.a,{className:"page-header"},c.a.createElement("h3",{className:"text-white"},"Assign Menu"),c.a.createElement("div",{className:"page-header-back-to-home"},c.a.createElement("span",{onClick:function(){q.push("/")},className:"text-white"}," ",c.a.createElement("i",{className:"fas fa-arrow-circle-left"})," Back to Dashboard")))),c.a.createElement(h.a,null,c.a.createElement(f.a,null,c.a.createElement("div",{className:"container test-score-div-1-style mt-1 mb-4"},c.a.createElement("span",{className:"test-score-span-1-style"},"Assign or Revoke Menu for User Types."))),c.a.createElement(m.a,null,c.a.createElement(p.a,{onSubmit:function(e){e.preventDefault(),j(!0)},ref:t},c.a.createElement(d.a,{row:!0},c.a.createElement(v.a,{sm:"6",md:"4",lg:"3"},c.a.createElement(u.a,{options:X,value:{label:S,value:A},onChange:function(e){return function(e,t){M([]),J=[],_(e),G(t);Object(w.a)("RoleMenuItem/GetCheckBoxes/".concat(t)).then((function(e){M(e);var t=J;if(e.length>0)for(var r=0;r<e.length;r++){var a=e[r];if(1==a.isChecked){var o=a.id.toString();t.push(o),U(Object(n.a)(t))}}}))}(e.label,e.value)},name:"type",id:"type"}))),c.a.createElement(d.a,null,c.a.createElement(y.a,null,c.a.createElement(v.a,{sm:"12"},T.length>0&&c.a.createElement("div",{className:"form-check"},c.a.createElement("input",{className:"form-check-input",onChange:function(e){return function(e){var t=[],r=e.target.checked;1==r&&(T.map((function(e){var r=e.id.toString();t.push(r),document.getElementById(e.id).checked=!0})),U([].concat(t))),0==r&&(T.map((function(e){document.getElementById(e.id).checked=!1})),U([]))}(e)},type:"checkbox",name:""}),c.a.createElement("label",{className:"form-check-label",htmlFor:""},"Select All"))),A&&(null===T||void 0===T?void 0:T.map((function(e){return c.a.createElement(v.a,{xs:"6",sm:"4",md:"3",key:e.id},c.a.createElement("div",{className:"form-check"},c.a.createElement("input",{className:"form-check-input",type:"checkbox",onChange:function(e){return function(e){var t=e.target.id;if(1==e.target.checked)U([].concat(Object(n.a)(J),[t]));else{var r=J.indexOf(t);r>-1&&J.splice(r,1)}}(e)},name:"",id:e.id,defaultChecked:e.isChecked}),c.a.createElement("label",{className:"form-check-label",htmlFor:""},e.menuItem)))}))))),c.a.createElement(d.a,{style:{display:"flex",justifyContent:"space-between"}},c.a.createElement(y.a,null,c.a.createElement(v.a,null,(null===H||void 0===H?void 0:H.includes(null===O.a||void 0===O.a?void 0:O.a.Asign_Menu))?c.a.createElement(g.a.Ripple,{type:"submit",className:"mr-1 mt-3 badge-primary"},"Submit"):null)))),c.a.createElement(b.a,{isOpen:k,toggle:function(){return j(!k)},className:"uapp-modal"},c.a.createElement(E.a,null,c.a.createElement("p",null,"Are You Sure to Assign Selected Menus?"),c.a.createElement(y.a,{className:"mt-3"},c.a.createElement(v.a,{md:"6",className:"text-left"},c.a.createElement(g.a,{color:"success",onClick:function(){M([]);var e=new FormData;e.append("RoleId",A),e.append("CheckedArr",J),Object(x.a)("RoleMenuItem/Assign",e).then((function(e){var t;console.log("checking role menu action",e),U([]),z(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.message,{appearance:"success",autoDismiss:!0}),j(!1)}))}},"Yes")),c.a.createElement(v.a,{md:"6",className:"text-right"},c.a.createElement(g.a,{color:"danger",onClick:function(){return j(!1)}},"Cancel"))))))))}))}}]);
//# sourceMappingURL=259.b544d583.chunk.js.map