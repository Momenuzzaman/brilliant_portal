/*! For license information please see 229.f668a094.chunk.js.LICENSE.txt */
(this.webpackJsonpdesk_client=this.webpackJsonpdesk_client||[]).push([[229],{257:function(e,t,r){"use strict";var n=r(10),a=r(3),o=r.n(a),i=r(157),c=r(47);function l(){l=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(I){c=function(e,t,r){return e[t]=r}}function u(e,t,r,n){var a=t&&t.prototype instanceof m?t:m,o=Object.create(a.prototype),i=new x(n||[]);return o._invoke=function(e,t,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return T()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=w(i,r);if(c){if(c===p)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=s(e,t,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===p)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(e,r,i),o}function s(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(I){return{type:"throw",arg:I}}}e.wrap=u;var p={};function m(){}function f(){}function h(){}var d={};c(d,a,(function(){return this}));var v=Object.getPrototypeOf,y=v&&v(v(L([])));y&&y!==t&&r.call(y,a)&&(d=y);var g=h.prototype=m.prototype=Object.create(d);function E(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function b(e,t){var n;this._invoke=function(a,o){function i(){return new t((function(n,i){!function n(a,o,i,c){var l=s(e[a],e,o);if("throw"!==l.type){var u=l.arg,p=u.value;return p&&"object"==typeof p&&r.call(p,"__await")?t.resolve(p.__await).then((function(e){n("next",e,i,c)}),(function(e){n("throw",e,i,c)})):t.resolve(p).then((function(e){u.value=e,i(u)}),(function(e){return n("throw",e,i,c)}))}c(l.arg)}(a,o,n,i)}))}return n=n?n.then(i,i):i()}}function w(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method))return p;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var n=s(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,p;var a=n.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,p):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,p)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function x(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function L(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:T}}function T(){return{value:void 0,done:!0}}return f.prototype=h,c(g,"constructor",h),c(h,"constructor",f),f.displayName=c(h,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,c(e,i,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},E(b.prototype),c(b.prototype,o,(function(){return this})),e.AsyncIterator=b,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var i=new b(u(t,r,n,a),o);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},E(g),c(g,i,"Generator"),c(g,a,(function(){return this})),c(g,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=L,x.prototype={constructor:x,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,p):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),p},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),j(r),p}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;j(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:L(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),p}},e}var u=localStorage.getItem("token");function s(){return(s=Object(n.a)(l().mark((function e(t){var r,n,a,s=arguments;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=s.length>1&&void 0!==s[1]?s[1]:{},s.length>2&&void 0!==s[2]?s[2]:"",e.prev=2,e.next=5,o.a.post("".concat(c.a).concat(t),r,{headers:{authorization:u}});case 5:return n=e.sent,e.next=8,n;case 8:return e.abrupt("return",e.sent);case 11:throw e.prev=11,e.t0=e.catch(2),404===(null===e.t0||void 0===e.t0||null===(a=e.t0.response)||void 0===a?void 0:a.status)&&i.a.push("/404"),e.t0;case 15:case"end":return e.stop()}}),e,null,[[2,11]])})))).apply(this,arguments)}t.a=function(e){return s.apply(this,arguments)}},349:function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=r(96);t.a=function(e){var t=e.className,r=(e.icon,e.color),n=(e.permission,e.type),i=(e.url,e.func),c=e.name;return a.a.createElement(a.a.Fragment,null,a.a.createElement(o.a.Ripple,{onClick:i,color:r,type:n,className:t},c))}},972:function(e,t,r){"use strict";r.r(t);var n=r(29),a=r(0),o=r.n(a),i=r(272),c=r(306),l=r(265),u=r(453),s=r(264),p=r(279),m=r(270),f=r(267),h=r(500),d=r(268),v=r(26),y=r(255),g=r(33),E=r(103),b=r(257),w=r(349);t.default=Object(v.b)((function(e){return{parentMenuItems:e.parentMenuItemReducer.parentMenus}}))((function(e){var t=e.parentMenuItems[0],r=Object(v.c)(),O=Object(a.createRef)(),j=Object(a.useState)(""),x=Object(n.a)(j,2),L=(x[0],x[1]),T=Object(a.useState)(""),I=Object(n.a)(T,2),N=(I[0],I[1]),S=Object(a.useState)("Select Type..."),k=Object(n.a)(S,2),_=k[0],M=k[1],C=Object(a.useState)("Select Parent..."),P=Object(n.a)(C,2),G=P[0],F=P[1],Y=Object(a.useState)(null),D=Object(n.a)(Y,2),q=D[0],R=D[1],A=Object(a.useState)(0),J=Object(n.a)(A,2),U=J[0],z=J[1],B=Object(a.useState)(null),H=Object(n.a)(B,2),K=(H[0],H[1],Object(a.useState)(null)),Q=Object(n.a)(K,2),V=(Q[0],Q[1],Object(y.useToasts)().addToast),W=Object(g.g)(),X=localStorage.getItem("current_user");Object(a.useEffect)((function(){Object(E.a)("RoleMenuItem/Index/".concat(null===X||void 0===X?void 0:X.displayUserType)).then((function(e){localStorage.setItem("menu",JSON.stringify(e)),r({type:"StoreParentMenuItem",payload:e})}))}),[r]);var Z=["item","collapse"].map((function(e){return{label:e,value:e}})),$=null===t||void 0===t?void 0:t.map((function(e){return{label:e.title,value:e.id}}));return o.a.createElement("div",null,o.a.createElement(c.a,{className:"uapp-card-bg"},o.a.createElement(l.a,{className:"page-header"},o.a.createElement("h3",{className:"text-light"},"Assign Menu"),o.a.createElement("div",{className:"page-header-back-to-home"},o.a.createElement("span",{onClick:function(){W.push("/")},className:"text-light"}," ",o.a.createElement("i",{class:"fas fa-arrow-circle-left"})," Back to Dashboard")))),o.a.createElement(c.a,null,o.a.createElement(l.a,null,o.a.createElement(u.a,null,"Create Menu")),o.a.createElement(s.a,null,o.a.createElement(p.a,{onSubmit:function(e){e.preventDefault();var t=new FormData(e.target);Object(b.a)("MenuItem/Create",t).then((function(e){var t;V(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.message,{appearance:"success",autoDismiss:!0})}))},ref:O},o.a.createElement(m.a,{row:!0},o.a.createElement(f.a,{md:"2"},o.a.createElement("i",{id:"titleTooltip",class:"fas fa-info-circle menuIcon"}),o.a.createElement("span",{className:"pl-2"},"Title")),o.a.createElement(h.a,{placement:"top",target:"titleTooltip"},"Your Menu Title"),o.a.createElement(f.a,{md:"10",lg:"6"},o.a.createElement(d.a,{type:"text",name:"title",id:"title",placeholder:"Menu Title",onChange:function(e){return L(e.target.value)},required:!0}))),o.a.createElement(m.a,{row:!0},o.a.createElement(f.a,{md:"2"},o.a.createElement("i",{id:"iconTooltip",class:"fas fa-info-circle menuIcon"}),o.a.createElement("span",{className:"pl-2"},"Icon")),o.a.createElement(h.a,{placement:"top",target:"iconTooltip"},"Your Menu Icon"),o.a.createElement(f.a,{md:"10",lg:"6"},o.a.createElement(d.a,{type:"text",name:"icon",id:"icon",placeholder:"Icon",required:!0}))),o.a.createElement(m.a,{row:!0},o.a.createElement(f.a,{md:"2"},o.a.createElement("i",{id:"typeTooltip",class:"fas fa-info-circle menuIcon"}),o.a.createElement("span",{className:"pl-2"},"Type")),o.a.createElement(h.a,{placement:"top",target:"typeTooltip"},"Your Menu Type"),o.a.createElement(f.a,{md:"10",lg:"6"},o.a.createElement(i.a,{options:Z,value:{label:_,value:_},onChange:function(e){return t=e.label,e.value,void M(t);var t},name:"type",id:"type"}))),"item"==_&&o.a.createElement(m.a,{row:!0},o.a.createElement(f.a,{md:"2"},o.a.createElement("i",{id:"urlTooltip",class:"fas fa-info-circle menuIcon"}),o.a.createElement("span",{className:"pl-2"},"Target Url")),o.a.createElement(h.a,{placement:"top",target:"urlTooltip"},"Your Menu Url"),o.a.createElement(f.a,{md:"10",lg:"6"},o.a.createElement(d.a,{type:"text",name:"navLink",id:"navLink",placeholder:"Nav Link",onChange:function(e){return N(e.target.value)},required:!0}))),"item"==_&&o.a.createElement(m.a,{row:!0},o.a.createElement(f.a,{md:"2"},o.a.createElement("i",{id:"parentIdTooltip",class:"fas fa-info-circle menuIcon"}),o.a.createElement("span",{className:"pl-2"},"Parent")),o.a.createElement(h.a,{placement:"top",target:"parentIdTooltip"},"Parent Menu's Title"),o.a.createElement(f.a,{md:"10",lg:"6"},o.a.createElement(i.a,{options:$,value:{label:G,value:q},onChange:function(e){return t=e.label,r=e.value,F(t),void R(r);var t,r},name:"parentId",id:"parentId",required:!0}))),o.a.createElement(m.a,{row:!0},o.a.createElement(f.a,{md:"2"},o.a.createElement("i",{id:"orderTooltip",class:"fas fa-info-circle menuIcon"}),o.a.createElement("span",{className:"pl-2"},"Display Order")),o.a.createElement(h.a,{placement:"top",target:"orderTooltip"},"Order"),o.a.createElement(f.a,{md:"10",lg:"6"},o.a.createElement(d.a,{type:"number",name:"displayOrder",value:U,id:"displayOrder",placeholder:"Order",onChange:function(e){z(e)}}))),o.a.createElement(m.a,{style:{display:"flex",justifyContent:"space-between"}},o.a.createElement(w.a,{type:"submit",className:"mr-1 mt-3 badge-primary",name:"Submit",permission:6}))))))}))}}]);
//# sourceMappingURL=229.f668a094.chunk.js.map