(this.webpackJsonpdesk_client=this.webpackJsonpdesk_client||[]).push([[9],{261:function(e,a,t){"use strict";var n=t(7),s=t(12),r=t(0),o=t.n(r),c=t(1),i=t.n(c),l=t(5),u=t.n(l),p=t(4),d=["className","cssModule","innerRef","tag"],f={tag:p.t,className:i.a.string,cssModule:i.a.object,innerRef:i.a.oneOfType([i.a.object,i.a.string,i.a.func])},m=function(e){var a=e.className,t=e.cssModule,r=e.innerRef,c=e.tag,i=Object(s.a)(e,d),l=Object(p.p)(u()(a,"card-body"),t);return o.a.createElement(c,Object(n.a)({},i,{className:l,ref:r}))};m.propTypes=f,m.defaultProps={tag:"div"},a.a=m},263:function(e,a,t){"use strict";var n=t(7),s=t(12),r=t(0),o=t.n(r),c=t(1),i=t.n(c),l=t(5),u=t.n(l),p=t(4),d=["className","cssModule","row","disabled","check","inline","tag"],f={children:i.a.node,row:i.a.bool,check:i.a.bool,inline:i.a.bool,disabled:i.a.bool,tag:p.t,className:i.a.string,cssModule:i.a.object},m=function(e){var a=e.className,t=e.cssModule,r=e.row,c=e.disabled,i=e.check,l=e.inline,f=e.tag,m=Object(s.a)(e,d),b=Object(p.p)(u()(a,!!r&&"row",i?"form-check":"form-group",!(!i||!l)&&"form-check-inline",!(!i||!c)&&"disabled"),t);return"fieldset"===f&&(m.disabled=c),o.a.createElement(f,Object(n.a)({},m,{className:b}))};m.propTypes=f,m.defaultProps={tag:"div"},a.a=m},265:function(e,a,t){"use strict";var n=t(7),s=t(12),r=t(16),o=t(13),c=t(0),i=t.n(c),l=t(1),u=t.n(l),p=t(5),d=t.n(p),f=t(4),m=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],b={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:f.t,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},h=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(r.a)(t)),t.focus=t.focus.bind(Object(r.a)(t)),t}Object(o.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.type,o=e.bsSize,c=e.valid,l=e.invalid,u=e.tag,p=e.addon,b=e.plaintext,h=e.innerRef,g=Object(s.a)(e,m),v=["radio","checkbox"].indexOf(r)>-1,j=new RegExp("\\D","g"),O=u||("select"===r||"textarea"===r?r:"input"),y="form-control";b?(y+="-plaintext",O=u||"input"):"file"===r?y+="-file":"range"===r?y+="-range":v&&(y=p?null:"form-check-input"),g.size&&j.test(g.size)&&(Object(f.v)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),o=g.size,delete g.size);var N=Object(f.p)(d()(a,l&&"is-invalid",c&&"is-valid",!!o&&"form-control-"+o,y),t);return("input"===O||u&&"function"===typeof u)&&(g.type=r),g.children&&!b&&"select"!==r&&"string"===typeof O&&"select"!==O&&(Object(f.v)('Input with a type of "'+r+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),i.a.createElement(O,Object(n.a)({},g,{ref:h,className:N,"aria-invalid":l}))},a}(i.a.Component);h.propTypes=b,h.defaultProps={type:"text"},a.a=h},266:function(e,a,t){"use strict";var n=t(7),s=t(12),r=t(0),o=t.n(r),c=t(1),i=t.n(c),l=t(5),u=t.n(l),p=t(4),d=["className","cssModule","tag"],f={tag:p.t,className:i.a.string,cssModule:i.a.object},m=function(e){var a=e.className,t=e.cssModule,r=e.tag,c=Object(s.a)(e,d),i=Object(p.p)(u()(a,"card-header"),t);return o.a.createElement(r,Object(n.a)({},c,{className:i}))};m.propTypes=f,m.defaultProps={tag:"div"},a.a=m},270:function(e,a,t){"use strict";var n=t(7),s=t(12),r=t(0),o=t.n(r),c=t(1),i=t.n(c),l=t(5),u=t.n(l),p=t(4),d=["className","cssModule","widths","tag"],f=i.a.oneOfType([i.a.number,i.a.string]),m=i.a.oneOfType([i.a.bool,i.a.number,i.a.string,i.a.shape({size:i.a.oneOfType([i.a.bool,i.a.number,i.a.string]),order:f,offset:f})]),b={tag:p.t,xs:m,sm:m,md:m,lg:m,xl:m,className:i.a.string,cssModule:i.a.object,widths:i.a.array},h={tag:"div",widths:["xs","sm","md","lg","xl"]},g=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},v=function(e){var a=e.className,t=e.cssModule,r=e.widths,c=e.tag,i=Object(s.a)(e,d),l=[];r.forEach((function(a,n){var s=e[a];if(delete i[a],s||""===s){var r=!n;if(Object(p.n)(s)){var o,c=r?"-":"-"+a+"-",d=g(r,a,s.size);l.push(Object(p.p)(u()(((o={})[d]=s.size||""===s.size,o["order"+c+s.order]=s.order||0===s.order,o["offset"+c+s.offset]=s.offset||0===s.offset,o)),t))}else{var f=g(r,a,s);l.push(f)}}})),l.length||l.push("col");var f=Object(p.p)(u()(a,l),t);return o.a.createElement(c,Object(n.a)({},i,{className:f}))};v.propTypes=b,v.defaultProps=h,a.a=v},272:function(e,a,t){"use strict";t.d(a,"a",(function(){return s}));var n=t(0),s=t.n(n).a.createContext({})},274:function(e,a,t){"use strict";var n=t(7),s=t(12),r=t(16),o=t(13),c=t(0),i=t.n(c),l=t(1),u=t.n(l),p=t(5),d=t.n(p),f=t(4),m=["className","cssModule","inline","tag","innerRef"],b={children:u.a.node,inline:u.a.bool,tag:f.t,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},h=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(r.a)(t)),t.submit=t.submit.bind(Object(r.a)(t)),t}Object(o.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.inline,o=e.tag,c=e.innerRef,l=Object(s.a)(e,m),u=Object(f.p)(d()(a,!!r&&"form-inline"),t);return i.a.createElement(o,Object(n.a)({},l,{ref:c,className:u}))},a}(c.Component);h.propTypes=b,h.defaultProps={tag:"form"},a.a=h},331:function(e,a,t){"use strict";var n=t(7),s=t(12),r=t(0),o=t.n(r),c=t(1),i=t.n(c),l=t(5),u=t.n(l),p=t(4),d=["className","cssModule","tabs","pills","vertical","horizontal","justified","fill","navbar","card","tag"],f={tabs:i.a.bool,pills:i.a.bool,vertical:i.a.oneOfType([i.a.bool,i.a.string]),horizontal:i.a.string,justified:i.a.bool,fill:i.a.bool,navbar:i.a.bool,card:i.a.bool,tag:p.t,className:i.a.string,cssModule:i.a.object},m=function(e){var a=e.className,t=e.cssModule,r=e.tabs,c=e.pills,i=e.vertical,l=e.horizontal,f=e.justified,m=e.fill,b=e.navbar,h=e.card,g=e.tag,v=Object(s.a)(e,d),j=Object(p.p)(u()(a,b?"navbar-nav":"nav",!!l&&"justify-content-"+l,function(e){return!1!==e&&(!0===e||"xs"===e?"flex-column":"flex-"+e+"-column")}(i),{"nav-tabs":r,"card-header-tabs":h&&r,"nav-pills":c,"card-header-pills":h&&c,"nav-justified":f,"nav-fill":m}),t);return o.a.createElement(g,Object(n.a)({},v,{className:j}))};m.propTypes=f,m.defaultProps={tag:"ul",vertical:!1},a.a=m},347:function(e,a,t){"use strict";var n=t(7),s=t(12),r=t(0),o=t.n(r),c=t(1),i=t.n(c),l=t(5),u=t.n(l),p=t(4),d=["className","cssModule","noGutters","tag","form","widths"],f=i.a.oneOfType([i.a.number,i.a.string]),m={tag:p.t,noGutters:i.a.bool,className:i.a.string,cssModule:i.a.object,form:i.a.bool,xs:f,sm:f,md:f,lg:f,xl:f},b={tag:"div",widths:["xs","sm","md","lg","xl"]},h=function(e){var a=e.className,t=e.cssModule,r=e.noGutters,c=e.tag,i=e.form,l=e.widths,f=Object(s.a)(e,d),m=[];l.forEach((function(a,t){var n=e[a];if(delete f[a],n){var s=!t;m.push(s?"row-cols-"+n:"row-cols-"+a+"-"+n)}}));var b=Object(p.p)(u()(a,r?"no-gutters":null,i?"form-row":"row",m),t);return o.a.createElement(c,Object(n.a)({},f,{className:b}))};h.propTypes=m,h.defaultProps=b,a.a=h},349:function(e,a,t){"use strict";var n=t(7),s=t(13),r=t(0),o=t.n(r),c=t(1),i=t.n(c),l=t(5),u=t.n(l),p=t(272),d=t(4),f={tag:d.t,activeTab:i.a.any,className:i.a.string,cssModule:i.a.object},m=function(e){function a(a){var t;return(t=e.call(this,a)||this).state={activeTab:t.props.activeTab},t}return Object(s.a)(a,e),a.getDerivedStateFromProps=function(e,a){return a.activeTab!==e.activeTab?{activeTab:e.activeTab}:null},a.prototype.render=function(){var e=this.props,a=e.className,t=e.cssModule,s=e.tag,r=Object(d.q)(this.props,Object.keys(f)),c=Object(d.p)(u()("tab-content",a),t);return o.a.createElement(p.a.Provider,{value:{activeTabId:this.state.activeTab}},o.a.createElement(s,Object(n.a)({},r,{className:c})))},a}(r.Component);a.a=m,m.propTypes=f,m.defaultProps={tag:"div"}},352:function(e,a,t){"use strict";t.d(a,"a",(function(){return b}));var n=t(7),s=t(12),r=t(0),o=t.n(r),c=t(1),i=t.n(c),l=t(5),u=t.n(l),p=t(272),d=t(4),f=["className","cssModule","tabId","tag"],m={tag:d.t,className:i.a.string,cssModule:i.a.object,tabId:i.a.any};function b(e){var a=e.className,t=e.cssModule,r=e.tabId,c=e.tag,i=Object(s.a)(e,f),l=function(e){return Object(d.p)(u()("tab-pane",a,{active:r===e}),t)};return o.a.createElement(p.a.Consumer,null,(function(e){var a=e.activeTabId;return o.a.createElement(c,Object(n.a)({},i,{className:l(a)}))}))}b.propTypes=m,b.defaultProps={tag:"div"}},379:function(e,a,t){"use strict";var n=t(7),s=t(12),r=t(0),o=t.n(r),c=t(1),i=t.n(c),l=t(5),u=t.n(l),p=t(4),d=["className","cssModule","hidden","widths","tag","check","size","for"],f=i.a.oneOfType([i.a.number,i.a.string]),m=i.a.oneOfType([i.a.bool,i.a.string,i.a.number,i.a.shape({size:f,order:f,offset:f})]),b={children:i.a.node,hidden:i.a.bool,check:i.a.bool,size:i.a.string,for:i.a.string,tag:p.t,className:i.a.string,cssModule:i.a.object,xs:m,sm:m,md:m,lg:m,xl:m,widths:i.a.array},h={tag:"label",widths:["xs","sm","md","lg","xl"]},g=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},v=function(e){var a=e.className,t=e.cssModule,r=e.hidden,c=e.widths,i=e.tag,l=e.check,f=e.size,m=e.for,b=Object(s.a)(e,d),h=[];c.forEach((function(a,n){var s=e[a];if(delete b[a],s||""===s){var r,o=!n;if(Object(p.n)(s)){var c,i=o?"-":"-"+a+"-";r=g(o,a,s.size),h.push(Object(p.p)(u()(((c={})[r]=s.size||""===s.size,c["order"+i+s.order]=s.order||0===s.order,c["offset"+i+s.offset]=s.offset||0===s.offset,c))),t)}else r=g(o,a,s),h.push(r)}}));var v=Object(p.p)(u()(a,!!r&&"sr-only",!!l&&"form-check-label",!!f&&"col-form-label-"+f,h,!!h.length&&"col-form-label"),t);return o.a.createElement(i,Object(n.a)({htmlFor:m},b,{className:v}))};v.propTypes=b,v.defaultProps=h,a.a=v},391:function(e,a,t){"use strict";var n=t(7),s=t(12),r=t(0),o=t.n(r),c=t(1),i=t.n(c),l=t(5),u=t.n(l),p=t(4),d=["className","cssModule","tag"],f={tag:p.t,className:i.a.string,cssModule:i.a.object},m=function(e){var a=e.className,t=e.cssModule,r=e.tag,c=Object(s.a)(e,d),i=Object(p.p)(u()(a,"card-title"),t);return o.a.createElement(r,Object(n.a)({},c,{className:i}))};m.propTypes=f,m.defaultProps={tag:"div"},a.a=m},392:function(e,a,t){"use strict";var n=t(17),s=t(18),r=t(19),o=t(20),c=t(0),i=t.n(c),l=function(e){Object(r.a)(t,e);var a=Object(o.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"vx-checkbox-con ".concat(this.props.className?this.props.className:""," vx-checkbox-").concat(this.props.color)},i.a.createElement("input",{type:"checkbox",defaultChecked:this.props.defaultChecked,checked:this.props.checked,value:this.props.value,disabled:this.props.disabled,onClick:this.props.onClick?this.props.onClick:null,onChange:this.props.onChange?this.props.onChange:null}),i.a.createElement("span",{className:"vx-checkbox vx-checkbox-".concat(this.props.size?this.props.size:"md")},i.a.createElement("span",{className:"vx-checkbox--check"},this.props.icon)),i.a.createElement("span",null,this.props.label))}}]),t}(i.a.Component);a.a=l},473:function(e,a,t){},497:function(e,a,t){"use strict";var n=t(0),s=t.n(n),r=t(1),o=t.n(r);function c(){return(c=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function i(e,a){if(null==e)return{};var t,n,s=function(e,a){if(null==e)return{};var t,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=Object(n.forwardRef)((function(e,a){var t=e.color,n=void 0===t?"currentColor":t,r=e.size,o=void 0===r?24:r,l=i(e,["color","size"]);return s.a.createElement("svg",c({ref:a,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),s.a.createElement("polyline",{points:"20 6 9 17 4 12"}))}));l.propTypes={color:o.a.string,size:o.a.oneOfType([o.a.string,o.a.number])},l.displayName="Check",a.a=l},502:function(e,a,t){"use strict";t(0),t(34),t(239),t(708),t(331),t(71),t(72),t(94),t(70),t(37),t(103)},524:function(e,a,t){"use strict";t.d(a,"a",(function(){return l})),t.d(a,"b",(function(){return u}));var n=t(29),s=t(15),r=(t(157),t(158),t(3)),o=t.n(r),c=t(124);n.apps.length||n.initializeApp(c.a);var i=n.auth(),l=function(e,a,t){return function(n){var r=null;i.createUserWithEmailAndPassword(e,a).then((function(e){i.onAuthStateChanged((function(a){e.user.updateProfile({displayName:t}),a&&(r=a.email,n({type:"SIGNUP_WITH_EMAIL",payload:{email:r,name:t,isSignedIn:!0}}),n({type:"LOGIN_WITH_EMAIL",payload:{email:r,name:t}}))})),s.a.push("/")})).catch((function(e){}))}},u=function(e,a,t){return function(n){o.a.post("/api/authenticate/register/user",{email:e,password:a,name:t}).then((function(e){var a;e.data&&(a=e.data.user,localStorage.setItem("token",e.data.token),n({type:"LOGIN_WITH_JWT",payload:{loggedInUser:a,loggedInWith:"jwt"}}),s.a.push("/"))})).catch()}}},554:function(e,a,t){"use strict";var n=t(17),s=t(18),r=t(19),o=t(20),c=t(0),i=t.n(c),l=t(274),u=t(263),p=t(265),d=t(379),f=t(94),m=t(392),b=t(497),h=t(27),g=t(524),v=t(15),j=function(e){Object(r.a)(t,e);var a=Object(o.a)(t);function t(){var e;Object(n.a)(this,t);for(var s=arguments.length,r=new Array(s),o=0;o<s;o++)r[o]=arguments[o];return(e=a.call.apply(a,[this].concat(r))).state={email:"",password:"",name:"",confirmPass:""},e.handleRegister=function(a){a.preventDefault(),e.props.signupWithFirebase(e.state.email,e.state.password,e.state.name)},e}return Object(s.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(l.a,{onSubmit:this.handleRegister},i.a.createElement(u.a,{className:"form-label-group"},i.a.createElement(p.a,{type:"text",placeholder:"Name",required:!0,value:this.state.name,onChange:function(a){return e.setState({name:a.target.value})}}),i.a.createElement(d.a,null,"Name")),i.a.createElement(u.a,{className:"form-label-group"},i.a.createElement(p.a,{type:"text",placeholder:"Email",required:!0,value:this.state.email,onChange:function(a){return e.setState({email:a.target.value})}}),i.a.createElement(d.a,null,"Email")),i.a.createElement(u.a,{className:"form-label-group"},i.a.createElement(p.a,{type:"password",placeholder:"Password",required:!0,value:this.state.password,onChange:function(a){return e.setState({password:a.target.value})}}),i.a.createElement(d.a,null,"Password")),i.a.createElement(u.a,{className:"form-label-group"},i.a.createElement(p.a,{type:"password",placeholder:"Confirm Password",required:!0,value:this.state.confirmPass,onChange:function(a){return e.setState({confirmPass:a.target.value})}}),i.a.createElement(d.a,null,"Confirm Password")),i.a.createElement(u.a,null,i.a.createElement(m.a,{color:"primary",icon:i.a.createElement(b.a,{className:"vx-icon",size:16}),label:" I accept the terms & conditions.",defaultChecked:!0})),i.a.createElement("div",{className:"d-flex justify-content-between"},i.a.createElement(f.a.Ripple,{onClick:function(){return v.a.push("/pages/login")},color:"primary",outline:!0},"Login"),i.a.createElement(f.a.Ripple,{color:"primary",type:"submit"},"Register")))}}]),t}(i.a.Component);Object(h.b)((function(e){return{values:e.auth.register}}),{signupWithFirebase:g.a})(j)},555:function(e,a,t){"use strict";t(0),t(261),t(94),t(38)},556:function(e,a,t){e.exports=t.p+"static/media/register.23d1bae7.jpg"},708:function(e,a,t){"use strict";var n=t(7),s=t(12),r=t(0),o=t.n(r),c=t(1),i=t.n(c),l=t(5),u=t.n(l),p=t(4),d=["className","cssModule","tag"],f={tag:p.t,className:i.a.string,cssModule:i.a.object},m=function(e){var a=e.className,t=e.cssModule,r=e.tag,c=Object(s.a)(e,d),i=Object(p.p)(u()(a,"navbar-brand"),t);return o.a.createElement(r,Object(n.a)({},c,{className:i}))};m.propTypes=f,m.defaultProps={tag:"a"},a.a=m}}]);
//# sourceMappingURL=9.4cc2caf6.chunk.js.map