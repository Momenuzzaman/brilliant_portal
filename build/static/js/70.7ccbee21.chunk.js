/*! For license information please see 70.7ccbee21.chunk.js.LICENSE.txt */
(this.webpackJsonpdesk_client=this.webpackJsonpdesk_client||[]).push([[70],{251:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(100);t.a=function(e){var t=e.className,a=e.icon,n=e.color,i=(e.permission,e.type),c=(e.url,e.func),s=e.name;return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,{onClick:c,color:n,type:i,className:t}," ",a,s," "))}},253:function(e,t,a){"use strict";var n=a(10),r=a(3),o=a.n(r),i=a(103),c=a(101);function s(){s=function(){return e};var e={},t=Object.prototype,a=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},r=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(e,t,a){return Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(k){c=function(e,t,a){return e[t]=a}}function l(e,t,a,n){var r=t&&t.prototype instanceof d?t:d,o=Object.create(r.prototype),i=new w(n||[]);return o._invoke=function(e,t,a){var n="suspendedStart";return function(r,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===r)throw o;return S()}for(a.method=r,a.arg=o;;){var i=a.delegate;if(i){var c=E(i,a);if(c){if(c===f)continue;return c}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===n)throw n="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);n="executing";var s=u(e,t,a);if("normal"===s.type){if(n=a.done?"completed":"suspendedYield",s.arg===f)continue;return{value:s.arg,done:a.done}}"throw"===s.type&&(n="completed",a.method="throw",a.arg=s.arg)}}}(e,a,i),o}function u(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(k){return{type:"throw",arg:k}}}e.wrap=l;var f={};function d(){}function p(){}function m(){}var v={};c(v,r,(function(){return this}));var h=Object.getPrototypeOf,b=h&&h(h(x([])));b&&b!==t&&a.call(b,r)&&(v=b);var g=m.prototype=d.prototype=Object.create(v);function y(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function j(e,t){var n;this._invoke=function(r,o){function i(){return new t((function(n,i){!function n(r,o,i,c){var s=u(e[r],e,o);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==typeof f&&a.call(f,"__await")?t.resolve(f.__await).then((function(e){n("next",e,i,c)}),(function(e){n("throw",e,i,c)})):t.resolve(f).then((function(e){l.value=e,i(l)}),(function(e){return n("throw",e,i,c)}))}c(s.arg)}(r,o,n,i)}))}return n=n?n.then(i,i):i()}}function E(e,t){var a=e.iterator[t.method];if(void 0===a){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,E(e,t),"throw"===t.method))return f;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var n=u(a,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,f;var r=n.arg;return r?r.done?(t[e.resultName]=r.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,f):r:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,f)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function N(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function w(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function x(e){if(e){var t=e[r];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(a.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:S}}function S(){return{value:void 0,done:!0}}return p.prototype=m,c(g,"constructor",m),c(m,"constructor",p),p.displayName=c(m,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,c(e,i,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},y(j.prototype),c(j.prototype,o,(function(){return this})),e.AsyncIterator=j,e.async=function(t,a,n,r,o){void 0===o&&(o=Promise);var i=new j(l(t,a,n,r),o);return e.isGeneratorFunction(a)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},y(g),c(g,i,"Generator"),c(g,r,(function(){return this})),c(g,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var a in e)t.push(a);return t.reverse(),function a(){for(;t.length;){var n=t.pop();if(n in e)return a.value=n,a.done=!1,a}return a.done=!0,a}},e.values=x,w.prototype={constructor:w,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(N),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(a,n){return i.type="throw",i.arg=e,t.next=a,n&&(t.method="next",t.arg=void 0),!!n}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=a.call(o,"catchLoc"),s=a.call(o,"finallyLoc");if(c&&s){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),N(a),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var n=a.completion;if("throw"===n.type){var r=n.arg;N(a)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,a){return this.delegate={iterator:x(e),resultName:t,nextLoc:a},"next"===this.method&&(this.arg=void 0),f}},e}function l(){return(l=Object(n.a)(s().mark((function e(t){var a,n,r,l,u=arguments;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=u.length>1&&void 0!==u[1]?u[1]:{},n=u.length>2&&void 0!==u[2]?u[2]:"",e.prev=2,e.next=5,o.a.post("".concat(c.a).concat(t),a,n||"");case 5:return r=e.sent,e.next=8,r;case 8:return e.abrupt("return",e.sent);case 11:throw e.prev=11,e.t0=e.catch(2),404===(null===e.t0||void 0===e.t0||null===(l=e.t0.response)||void 0===l?void 0:l.status)&&i.a.push("/404"),e.t0;case 15:case"end":return e.stop()}}),e,null,[[2,11]])})))).apply(this,arguments)}t.a=function(e){return l.apply(this,arguments)}},256:function(e,t,a){"use strict";var n=a(7),r=a(11),o=a(0),i=a.n(o),c=a(1),s=a.n(c),l=a(6),u=a.n(l),f=a(5),d=["className","cssModule","widths","tag"],p=s.a.oneOfType([s.a.number,s.a.string]),m=s.a.oneOfType([s.a.bool,s.a.number,s.a.string,s.a.shape({size:s.a.oneOfType([s.a.bool,s.a.number,s.a.string]),order:p,offset:p})]),v={tag:f.t,xs:m,sm:m,md:m,lg:m,xl:m,className:s.a.string,cssModule:s.a.object,widths:s.a.array},h={tag:"div",widths:["xs","sm","md","lg","xl"]},b=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},g=function(e){var t=e.className,a=e.cssModule,o=e.widths,c=e.tag,s=Object(r.a)(e,d),l=[];o.forEach((function(t,n){var r=e[t];if(delete s[t],r||""===r){var o=!n;if(Object(f.n)(r)){var i,c=o?"-":"-"+t+"-",d=b(o,t,r.size);l.push(Object(f.p)(u()(((i={})[d]=r.size||""===r.size,i["order"+c+r.order]=r.order||0===r.order,i["offset"+c+r.offset]=r.offset||0===r.offset,i)),a))}else{var p=b(o,t,r);l.push(p)}}})),l.length||l.push("col");var p=Object(f.p)(u()(t,l),a);return i.a.createElement(c,Object(n.a)({},s,{className:p}))};g.propTypes=v,g.defaultProps=h,t.a=g},260:function(e,t,a){"use strict";var n=a(7),r=a(11),o=a(0),i=a.n(o),c=a(1),s=a.n(c),l=a(6),u=a.n(l),f=a(5),d=["className","cssModule","innerRef","tag"],p={tag:f.t,className:s.a.string,cssModule:s.a.object,innerRef:s.a.oneOfType([s.a.object,s.a.string,s.a.func])},m=function(e){var t=e.className,a=e.cssModule,o=e.innerRef,c=e.tag,s=Object(r.a)(e,d),l=Object(f.p)(u()(t,"card-body"),a);return i.a.createElement(c,Object(n.a)({},s,{className:l,ref:o}))};m.propTypes=p,m.defaultProps={tag:"div"},t.a=m},262:function(e,t,a){"use strict";var n=a(7),r=a(11),o=a(15),i=a(12),c=a(0),s=a.n(c),l=a(1),u=a.n(l),f=a(6),d=a.n(f),p=a(5),m=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],v={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:p.t,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},h=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(o.a)(a)),a.focus=a.focus.bind(Object(o.a)(a)),a}Object(i.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,o=e.type,i=e.bsSize,c=e.valid,l=e.invalid,u=e.tag,f=e.addon,v=e.plaintext,h=e.innerRef,b=Object(r.a)(e,m),g=["radio","checkbox"].indexOf(o)>-1,y=new RegExp("\\D","g"),j=u||("select"===o||"textarea"===o?o:"input"),E="form-control";v?(E+="-plaintext",j=u||"input"):"file"===o?E+="-file":"range"===o?E+="-range":g&&(E=f?null:"form-check-input"),b.size&&y.test(b.size)&&(Object(p.v)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),i=b.size,delete b.size);var O=Object(p.p)(d()(t,l&&"is-invalid",c&&"is-valid",!!i&&"form-control-"+i,E),a);return("input"===j||u&&"function"===typeof u)&&(b.type=o),b.children&&!v&&"select"!==o&&"string"===typeof j&&"select"!==j&&(Object(p.v)('Input with a type of "'+o+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete b.children),s.a.createElement(j,Object(n.a)({},b,{ref:h,className:O,"aria-invalid":l}))},t}(s.a.Component);h.propTypes=v,h.defaultProps={type:"text"},t.a=h},263:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(0),r=a.n(n).a.createContext({})},276:function(e,t,a){"use strict";var n=a(7),r=a(11),o=a(0),i=a.n(o),c=a(1),s=a.n(c),l=a(6),u=a.n(l),f=a(5),d=["className","cssModule","row","disabled","check","inline","tag"],p={children:s.a.node,row:s.a.bool,check:s.a.bool,inline:s.a.bool,disabled:s.a.bool,tag:f.t,className:s.a.string,cssModule:s.a.object},m=function(e){var t=e.className,a=e.cssModule,o=e.row,c=e.disabled,s=e.check,l=e.inline,p=e.tag,m=Object(r.a)(e,d),v=Object(f.p)(u()(t,!!o&&"row",s?"form-check":"form-group",!(!s||!l)&&"form-check-inline",!(!s||!c)&&"disabled"),a);return"fieldset"===p&&(m.disabled=c),i.a.createElement(p,Object(n.a)({},m,{className:v}))};m.propTypes=p,m.defaultProps={tag:"div"},t.a=m},278:function(e,t,a){"use strict";var n=a(7),r=a(11),o=a(15),i=a(12),c=a(0),s=a.n(c),l=a(1),u=a.n(l),f=a(6),d=a.n(f),p=a(5),m=["className","cssModule","inline","tag","innerRef"],v={children:u.a.node,inline:u.a.bool,tag:p.t,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},h=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(o.a)(a)),a.submit=a.submit.bind(Object(o.a)(a)),a}Object(i.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.submit=function(){this.ref&&this.ref.submit()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,o=e.inline,i=e.tag,c=e.innerRef,l=Object(r.a)(e,m),u=Object(p.p)(d()(t,!!o&&"form-inline"),a);return s.a.createElement(i,Object(n.a)({},l,{ref:c,className:u}))},t}(c.Component);h.propTypes=v,h.defaultProps={tag:"form"},t.a=h},327:function(e,t,a){"use strict";var n=a(7),r=a(11),o=a(0),i=a.n(o),c=a(1),s=a.n(c),l=a(6),u=a.n(l),f=a(5),d=["className","cssModule","tabs","pills","vertical","horizontal","justified","fill","navbar","card","tag"],p={tabs:s.a.bool,pills:s.a.bool,vertical:s.a.oneOfType([s.a.bool,s.a.string]),horizontal:s.a.string,justified:s.a.bool,fill:s.a.bool,navbar:s.a.bool,card:s.a.bool,tag:f.t,className:s.a.string,cssModule:s.a.object},m=function(e){var t=e.className,a=e.cssModule,o=e.tabs,c=e.pills,s=e.vertical,l=e.horizontal,p=e.justified,m=e.fill,v=e.navbar,h=e.card,b=e.tag,g=Object(r.a)(e,d),y=Object(f.p)(u()(t,v?"navbar-nav":"nav",!!l&&"justify-content-"+l,function(e){return!1!==e&&(!0===e||"xs"===e?"flex-column":"flex-"+e+"-column")}(s),{"nav-tabs":o,"card-header-tabs":h&&o,"nav-pills":c,"card-header-pills":h&&c,"nav-justified":p,"nav-fill":m}),a);return i.a.createElement(b,Object(n.a)({},g,{className:y}))};m.propTypes=p,m.defaultProps={tag:"ul",vertical:!1},t.a=m},332:function(e,t,a){"use strict";var n=a(7),r=a(11),o=a(0),i=a.n(o),c=a(1),s=a.n(c),l=a(6),u=a.n(l),f=a(5),d=["className","cssModule","active","tag"],p={tag:f.t,active:s.a.bool,className:s.a.string,cssModule:s.a.object},m=function(e){var t=e.className,a=e.cssModule,o=e.active,c=e.tag,s=Object(r.a)(e,d),l=Object(f.p)(u()(t,"nav-item",!!o&&"active"),a);return i.a.createElement(c,Object(n.a)({},s,{className:l}))};m.propTypes=p,m.defaultProps={tag:"li"},t.a=m},333:function(e,t,a){"use strict";var n=a(7),r=a(11),o=a(15),i=a(12),c=a(0),s=a.n(c),l=a(1),u=a.n(l),f=a(6),d=a.n(f),p=a(5),m=["className","cssModule","active","tag","innerRef"],v={tag:p.t,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),disabled:u.a.bool,active:u.a.bool,className:u.a.string,cssModule:u.a.object,onClick:u.a.func,href:u.a.any},h=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Object(o.a)(a)),a}Object(i.a)(t,e);var a=t.prototype;return a.onClick=function(e){this.props.disabled?e.preventDefault():("#"===this.props.href&&e.preventDefault(),this.props.onClick&&this.props.onClick(e))},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,o=e.active,i=e.tag,c=e.innerRef,l=Object(r.a)(e,m),u=Object(p.p)(d()(t,"nav-link",{disabled:l.disabled,active:o}),a);return s.a.createElement(i,Object(n.a)({},l,{ref:c,onClick:this.onClick,className:u}))},t}(s.a.Component);h.propTypes=v,h.defaultProps={tag:"a"},t.a=h},340:function(e,t,a){"use strict";var n=a(7),r=a(12),o=a(0),i=a.n(o),c=a(1),s=a.n(c),l=a(6),u=a.n(l),f=a(263),d=a(5),p={tag:d.t,activeTab:s.a.any,className:s.a.string,cssModule:s.a.object},m=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={activeTab:a.props.activeTab},a}return Object(r.a)(t,e),t.getDerivedStateFromProps=function(e,t){return t.activeTab!==e.activeTab?{activeTab:e.activeTab}:null},t.prototype.render=function(){var e=this.props,t=e.className,a=e.cssModule,r=e.tag,o=Object(d.q)(this.props,Object.keys(p)),c=Object(d.p)(u()("tab-content",t),a);return i.a.createElement(f.a.Provider,{value:{activeTabId:this.state.activeTab}},i.a.createElement(r,Object(n.a)({},o,{className:c})))},t}(o.Component);t.a=m,m.propTypes=p,m.defaultProps={tag:"div"}},344:function(e,t,a){"use strict";a.d(t,"a",(function(){return v}));var n=a(7),r=a(11),o=a(0),i=a.n(o),c=a(1),s=a.n(c),l=a(6),u=a.n(l),f=a(263),d=a(5),p=["className","cssModule","tabId","tag"],m={tag:d.t,className:s.a.string,cssModule:s.a.object,tabId:s.a.any};function v(e){var t=e.className,a=e.cssModule,o=e.tabId,c=e.tag,s=Object(r.a)(e,p),l=function(e){return Object(d.p)(u()("tab-pane",t,{active:o===e}),a)};return i.a.createElement(f.a.Consumer,null,(function(e){var t=e.activeTabId;return i.a.createElement(c,Object(n.a)({},s,{className:l(t)}))}))}v.propTypes=m,v.defaultProps={tag:"div"}},802:function(e,t,a){"use strict";a.r(t);var n=a(29),r=a(0),o=a.n(r),i=a(3),c=a.n(i),s=a(33),l=a(265),u=a(275),f=a(277),d=a(260),p=a(327),m=a(332),v=a(333),h=a(340),b=a(344),g=a(278),y=a(276),j=a(256),E=a(262),O=a(101),N=a(102),w=(a(253),a(251));t.default=function(){var e=Object(r.useState)(!1),t=Object(n.a)(e,2),a=t[0],i=t[1],x=Object(r.useState)("1"),S=Object(n.a)(x,2),k=S[0],T=S[1],L=Object(r.useState)([]),M=Object(n.a)(L,2),I=M[0],C=M[1],P=Object(r.useState)([]),R=Object(n.a)(P,2),z=R[0],D=R[1],_=Object(r.useState)([]),F=Object(n.a)(_,2),G=F[0],q=F[1],A=Object(r.useState)([]),U=Object(n.a)(A,2),J=U[0],Y=U[1],B=Object(r.useState)("Select University..."),V=Object(n.a)(B,2),H=V[0],K=V[1],Q=Object(r.useState)(0),W=Object(n.a)(Q,2),X=W[0],Z=W[1],$=Object(r.useState)("Select Program Level..."),ee=Object(n.a)($,2),te=ee[0],ae=ee[1],ne=Object(r.useState)(0),re=Object(n.a)(ne,2),oe=re[0],ie=re[1],ce=Object(r.useState)("Select Department..."),se=Object(n.a)(ce,2),le=se[0],ue=se[1],fe=Object(r.useState)(0),de=Object(n.a)(fe,2),pe=de[0],me=de[1],ve=Object(r.useState)("Select Sub Department..."),he=Object(n.a)(ve,2),be=he[0],ge=he[1],ye=Object(r.useState)(0),je=Object(n.a)(ye,2),Ee=je[0],Oe=je[1],Ne=Object(s.g)();Object(r.useEffect)((function(){Object(N.a)("UniversityDD/Index").then((function(e){C(e)})).catch(),Object(N.a)("ProgramLevel/Index").then((function(e){D(e)})).catch(),Object(N.a)("Department/Index").then((function(e){q(e)})).catch(),Object(N.a)("SubDepartment/Index").then((function(e){Y(e)})).catch()}),[]);var we=I.map((function(e){return{label:e.name,value:e.id}})),xe=z.map((function(e){return{label:e.name,value:e.id}})),Se=G.map((function(e){return{label:e.name,value:e.id}})),ke=J.map((function(e){return{label:e.name,value:e.id}})),Te=function(e){T(e),"2"==e&&Ne.push("/addSubjectFee")};return o.a.createElement("div",null,o.a.createElement(u.a,{className:"uapp-card-bg"},o.a.createElement(f.a,{className:"page-header"},o.a.createElement("h3",{className:"text-light"},"Add Subject Information"),o.a.createElement("div",{className:"page-header-back-to-home"},o.a.createElement("span",{onClick:function(){Ne.push("/")},className:"text-light"}," ",o.a.createElement("i",{className:"fas fa-arrow-circle-left"})," Back to Dashboard")))),o.a.createElement(u.a,null,o.a.createElement(d.a,null,o.a.createElement(p.a,{tabs:!0},o.a.createElement(m.a,null,o.a.createElement(v.a,{active:"1"===k,onClick:function(){return Te("1")}},"Subject Information")),o.a.createElement(m.a,null,a?o.a.createElement(v.a,{active:"2"===k,onClick:function(){return Te("2")}},"Subject Fee Information"):o.a.createElement(v.a,{disabled:!0,active:"2"===k},"Subject Fee Information"))),o.a.createElement(h.a,{activeTab:k},o.a.createElement(b.a,{tabId:"1"},o.a.createElement(g.a,{onSubmit:function(e){e.preventDefault();var t=new FormData(e.target);c.a.post("".concat(O.a,"Subject/Create"),t).then((function(e){var t,a,n,r;localStorage.setItem("subId",null===e||void 0===e||null===(t=e.data)||void 0===t||null===(a=t.result)||void 0===a?void 0:a.id);var o=null===e||void 0===e||null===(n=e.data)||void 0===n||null===(r=n.result)||void 0===r?void 0:r.id;200===e.status&&!0===e.data.isSuccess&&(i(!0),Ne.push({pathname:"/addSubjectFee",id:o}))}))},className:"mt-5"},o.a.createElement(y.a,{row:!0,className:"has-icon-left position-relative"},o.a.createElement(j.a,{md:"2"},o.a.createElement("span",null,"Subject Name ",o.a.createElement("span",{className:"text-danger"},"*")," ")),o.a.createElement(j.a,{md:"6"},o.a.createElement(E.a,{type:"text",name:"name",id:"name",placeholder:"Enter Subject Name",required:!0}))),o.a.createElement(y.a,{row:!0,className:"has-icon-left position-relative"},o.a.createElement(j.a,{md:"2"},o.a.createElement("span",null,"Description ",o.a.createElement("span",{className:"text-danger"},"*")," ")),o.a.createElement(j.a,{md:"6"},o.a.createElement(E.a,{type:"textarea",rows:"4",placeholder:"Enter description",required:!0,name:"description",id:"description"}))),o.a.createElement(y.a,{row:!0,className:"has-icon-left position-relative"},o.a.createElement(j.a,{md:"2"},o.a.createElement("span",null,"Duration ",o.a.createElement("span",{className:"text-danger"},"*")," ")),o.a.createElement(j.a,{md:"6"},o.a.createElement(E.a,{type:"text",name:"duration",id:"duration",placeholder:"Enter duration",required:!0}))),o.a.createElement(y.a,{row:!0,className:"has-icon-left position-relative"},o.a.createElement(j.a,{md:"2"},o.a.createElement("span",null,"University ",o.a.createElement("span",{className:"text-danger"},"*")," ")),o.a.createElement(j.a,{md:"6"},o.a.createElement(l.a,{options:we,value:{label:H,value:X},onChange:function(e){return t=e.label,a=e.value,K(t),void Z(a);var t,a},name:"universityId",id:"universityId"}))),o.a.createElement(y.a,{row:!0,className:"has-icon-left position-relative"},o.a.createElement(j.a,{md:"2"},o.a.createElement("span",null,"Program level ",o.a.createElement("span",{className:"text-danger"},"*")," ")),o.a.createElement(j.a,{md:"6"},o.a.createElement(l.a,{options:xe,value:{label:te,value:oe},onChange:function(e){return t=e.label,a=e.value,ae(t),void ie(a);var t,a},name:"programLevelId",id:"programLevelId"}))),o.a.createElement(y.a,{row:!0,className:"has-icon-left position-relative"},o.a.createElement(j.a,{md:"2"},o.a.createElement("span",null,"Department ",o.a.createElement("span",{className:"text-danger"},"*")," ")),o.a.createElement(j.a,{md:"6"},o.a.createElement(l.a,{options:Se,value:{label:le,value:pe},onChange:function(e){return t=e.label,a=e.value,ue(t),void me(a);var t,a},name:"departmentId",id:"departmentId"}))),o.a.createElement(y.a,{row:!0,className:"has-icon-left position-relative"},o.a.createElement(j.a,{md:"2"},o.a.createElement("span",null,"Sub-department ",o.a.createElement("span",{className:"text-danger"},"*")," ")),o.a.createElement(j.a,{md:"6"},o.a.createElement(l.a,{options:ke,value:{label:be,value:Ee},onChange:function(e){return t=e.label,a=e.value,ge(t),void Oe(a);var t,a},name:"subDepartmentId",id:"subDepartmentId"}))),o.a.createElement(y.a,{row:!0,className:"has-icon-left position-relative",style:{display:"flex",justifyContent:"end"}},o.a.createElement(j.a,{md:"5"},o.a.createElement(w.a,{type:"submit",className:"mr-1 mt-3 badge-primary",name:"Submit",permission:6})))))))))}}}]);
//# sourceMappingURL=70.7ccbee21.chunk.js.map