(this.webpackJsonpdesk_client=this.webpackJsonpdesk_client||[]).push([[234],{456:function(e,a,t){"use strict";var r=t(18),l=t(19),n=t(20),m=t(21),c=t(0),s=t.n(c),o=t(467),u=t(468),i=t(472),d=t(75),E=t(73),b=t(36),p=t(469),h=t(228),f=t(32),g=function(e){Object(n.a)(t,e);var a=Object(m.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"content-header row"},s.a.createElement("div",{className:"content-header-left col-md-9 col-12 mb-2"},s.a.createElement("div",{className:"row breadcrumbs-top"},s.a.createElement("div",{className:"col-12"},this.props.breadCrumbTitle?s.a.createElement("h2",{className:"content-header-title float-left mb-0"},this.props.breadCrumbTitle):"",s.a.createElement("div",{className:"breadcrumb-wrapper vx-breadcrumbs d-sm-block d-none col-12"},s.a.createElement(o.a,{tag:"ol"},s.a.createElement(u.a,{tag:"li"},s.a.createElement(f.b,{to:"/"},s.a.createElement(p.a,{className:"align-top",size:15}))),s.a.createElement(u.a,{tag:"li",className:"text-primary"},this.props.breadCrumbParent),this.props.breadCrumbParent2?s.a.createElement(u.a,{tag:"li",className:"text-primary"},this.props.breadCrumbParent2):"",this.props.breadCrumbParent3?s.a.createElement(u.a,{tag:"li",className:"text-primary"},this.props.breadCrumbParent3):"",s.a.createElement(u.a,{tag:"li",active:!0},this.props.breadCrumbActive)))))),s.a.createElement("div",{className:"content-header-right text-md-right col-md-3 col-12 d-md-block d-none"},s.a.createElement("div",{className:"form-group breadcrum-right dropdown"},s.a.createElement(i.a,null,s.a.createElement(d.a,{color:"primary",size:"sm",className:"btn-icon btn-round dropdown-toggle"},s.a.createElement(h.a,{size:14,style:{left:0}})),s.a.createElement(E.a,{tag:"ul",right:!0},s.a.createElement(b.a,{tag:"li"},s.a.createElement(f.b,{className:"text-dark w-100",to:"/Example"},"Example")))))))}}]),t}(s.a.Component);a.a=g},943:function(e,a,t){"use strict";t.r(a);var r=t(18),l=t(19),n=t(20),m=t(21),c=t(0),s=t.n(c),o=t(350),u=t(267),i=t(306),d=t(265),E=t(453),b=t(264),p=t(456),h=t(491),f=t.n(h),g=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"text-bold-600 font-medium-2 my-1"},"Date Mask ",s.a.createElement("small",null,"dd/mm/yyyy")),s.a.createElement(f.a,{className:"form-control",mask:"99/99/9999",placeholder:"Enter birthdate"}))},v=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"text-bold-600 font-medium-2 my-1"},"Currency Mask ",s.a.createElement("small",null,"$9999")),s.a.createElement(f.a,{className:"form-control",mask:"$9999",placeholder:"Enter Currency In USD"}))},N=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"text-bold-600 font-medium-2 my-1"},"Phone ",s.a.createElement("small",null,"+19 999 999 999")),s.a.createElement(f.a,{className:"form-control",mask:"+19 999 999 999",placeholder:"Enter Phone Number"}))},y=function(e){Object(n.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(r.a)(this,t);for(var l=arguments.length,n=new Array(l),m=0;m<l;m++)n[m]=arguments[m];return(e=a.call.apply(a,[this].concat(n))).state={value:"",mask:"9999-9999-9999-9999"},e.onChange=function(a){var t=a.target.value,r={mask:"9999-9999-9999-9999",value:t};/^3[47]/.test(t)&&(r.mask="9999-999999-99999"),e.setState(r)},e}return Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"text-bold-600 font-medium-2 my-1"},"Credit Card"," ",s.a.createElement("small",null,"(autochange to Amex format if starts with 34 or 37)")),s.a.createElement(f.a,Object.assign({className:"form-control"},this.state,{onChange:this.onChange,placeholder:"Enter Credit Card Number"})))}}]),t}(s.a.Component),k=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"text-bold-600 font-medium-2 my-1"},"Purchase Order ",s.a.createElement("small",null,"aaaa 9999-****")),s.a.createElement(f.a,{className:"form-control",mask:"aaaa 9999-****",placeholder:"Enter Purchase Order"}))},C=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"text-bold-600 font-medium-2 my-1"},"Decimal ",s.a.createElement("small",null,"99.99")),s.a.createElement(f.a,{className:"form-control",mask:"99.99",placeholder:"Enter Digits"}))},x=function(e){Object(n.a)(t,e);var a=Object(m.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(p.a,{breadCrumbTitle:"Input Mask",breadCrumbParent:"Form Elements",breadCrumbActive:"Input Mask"}),s.a.createElement(o.a,null,s.a.createElement(u.a,{sm:"12"},s.a.createElement(i.a,null,s.a.createElement(d.a,null,s.a.createElement(E.a,null,"Input Masks")),s.a.createElement(b.a,null,s.a.createElement(o.a,null,s.a.createElement(u.a,{md:"6",sm:"12"},s.a.createElement(g,null)),s.a.createElement(u.a,{md:"6",sm:"12"},s.a.createElement(v,null)),s.a.createElement(u.a,{md:"6",sm:"12"},s.a.createElement(N,null)),s.a.createElement(u.a,{md:"6",sm:"12"},s.a.createElement(y,null)),s.a.createElement(u.a,{md:"6",sm:"12"},s.a.createElement(k,null)),s.a.createElement(u.a,{md:"6",sm:"12"},s.a.createElement(C,null))))))))}}]),t}(s.a.Component);a.default=x}}]);
//# sourceMappingURL=234.c37a4634.chunk.js.map