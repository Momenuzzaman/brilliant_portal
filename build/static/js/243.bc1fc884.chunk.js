(this.webpackJsonpdesk_client=this.webpackJsonpdesk_client||[]).push([[243],{291:function(e,a,t){"use strict";var l=t(11),n=t(15),c=t(0),r=t.n(c),i=t(2),m=t.n(i),o=t(8),d=t.n(o),s=t(7),u=["className","cssModule","color","body","inverse","outline","tag","innerRef"],E={tag:s.t,inverse:m.a.bool,color:m.a.string,body:m.a.bool,outline:m.a.bool,className:m.a.string,cssModule:m.a.object,innerRef:m.a.oneOfType([m.a.object,m.a.string,m.a.func])},v=function(e){var a=e.className,t=e.cssModule,c=e.color,i=e.body,m=e.inverse,o=e.outline,E=e.tag,v=e.innerRef,p=Object(n.a)(e,u),f=Object(s.p)(d()(a,"card",!!m&&"text-white",!!i&&"card-body",!!c&&(o?"border":"bg")+"-"+c),t);return r.a.createElement(E,Object(l.a)({},p,{className:f,ref:v}))};v.propTypes=E,v.defaultProps={tag:"div"},a.a=v},388:function(e,a,t){e.exports=t.p+"static/media/user-07.c63e602a.jpg"},389:function(e,a,t){"use strict";var l=t(0),n=t.n(l);a.a=function(e){var a=e.className,t=e.func;e.permission;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:a,onClick:t},n.a.createElement("div",{className:"text-right"},n.a.createElement("span",null," ",n.a.createElement("i",{className:"fas fa-pencil-alt pencil-style"})," "))))}},473:function(e,a,t){e.exports=t.p+"static/media/cover.21a4037c.jpg"},800:function(e,a,t){"use strict";t.r(a);var l=t(19),n=t(0),c=t.n(n),r=t(30),i=t(37),m=t(291),o=t(259),d=t(321),s=t(262),u=t(254),E=t(764),v=(t(473),t(388),t(100)),p=t(350),f=t.n(p),b=t(29),h=t(389),N=t(330);a.default=Object(r.b)((function(e){return{}}))((function(){var e,a,t,r,p,g,w,y,j,O,I,x=Object(i.i)().id,S=Object(i.g)(),k=Object(n.useState)({}),P=Object(l.a)(k,2),C=P[0],M=P[1],T=Object(n.useState)({}),_=Object(l.a)(T,2),R=(_[0],_[1]),J=Object(n.useState)({}),L=Object(l.a)(J,2),U=(L[0],L[1]),A=JSON.parse(localStorage.getItem("permissions"));Object(n.useEffect)((function(){Object(v.a)("Employee/Profile/".concat(x)).then((function(e){M(e),R(e.profileImageMedia),U(e.employeeType)}))}),[]);var G=Object(n.useRef)();return c.a.createElement("div",{ref:G},c.a.createElement(m.a,{className:"uapp-card-bg"},c.a.createElement(o.a,{className:"page-header"},c.a.createElement("div",{className:"d-flex align-items-center"},c.a.createElement("div",{className:"mt-1"},c.a.createElement("h3",{className:"text-white"},"Staff Profile")),c.a.createElement("div",{className:"ml-2"},c.a.createElement(f.a,{trigger:function(){return c.a.createElement("span",{className:"text-white cursor-pointer",title:"Print to pdf"},c.a.createElement("i",{className:"fas fa-print"}))},content:function(){return G.current}}))),c.a.createElement("div",{className:"page-header-back-to-home"},c.a.createElement("span",{onClick:function(){S.push("/staffList")},className:"text-white"}," ",c.a.createElement("i",{className:"fas fa-arrow-circle-left"})," Back to Staff List")))),c.a.createElement("div",{className:"uapp-employee-profile"},c.a.createElement(d.a,null,c.a.createElement(s.a,{md:"12"},c.a.createElement("div",{className:"uapp-employee-profile-left"},c.a.createElement(m.a,null,c.a.createElement(u.a,null,c.a.createElement("div",{className:"uapp-employee-cover-image"},c.a.createElement("div",{className:"bg-image"},c.a.createElement("div",{className:"uplode-cover-image"},c.a.createElement("img",{src:b.a+(null===C||void 0===C||null===(e=C.coverImageMedia)||void 0===e?void 0:e.fileUrl),alt:"cover_img"})))),c.a.createElement("div",{className:"uapp-employee-profile-image-edit"},c.a.createElement(d.a,null,c.a.createElement(s.a,null,c.a.createElement("div",{className:"uapp-employee-profile-image"},c.a.createElement("div",{className:"text-left"},c.a.createElement("img",{className:"empProfileImg",src:b.a+(null===C||void 0===C||null===(a=C.profileImageMedia)||void 0===a?void 0:a.fileUrl),alt:"profile_img"})))),c.a.createElement(s.a,null,(null===A||void 0===A?void 0:A.includes(null===N.a||void 0===N.a?void 0:N.a.Update_Staff))?c.a.createElement(h.a,{className:"uapp-employee-profile-Edit",func:function(){S.push("/staffGeneralInfo/".concat(x))}}):null))),c.a.createElement("div",{className:"uapp-employee-profile-generalInfo"},c.a.createElement(d.a,null,c.a.createElement(s.a,{md:"6"},c.a.createElement("ul",{className:"uapp-ul text-left"},c.a.createElement("li",null,c.a.createElement("h4",null,null===C||void 0===C?void 0:C.firstName," ",null===C||void 0===C?void 0:C.lastName)))),c.a.createElement(s.a,{md:"6"},c.a.createElement("ul",{className:"uapp-ul text-right1"},c.a.createElement("li",null,c.a.createElement("span",null," Email : ",null===C||void 0===C?void 0:C.email)),c.a.createElement("li",null,c.a.createElement("span",null," Phone Number : ",null===C||void 0===C?void 0:C.phoneNumber)))))))),c.a.createElement("div",{className:" info-item mt-4"},c.a.createElement(m.a,null,c.a.createElement(u.a,null,c.a.createElement("div",{className:"hedding-titel"},c.a.createElement("h5",null," ",c.a.createElement("b",null,"General Information")," "),c.a.createElement("div",{className:"bg-h"})),c.a.createElement(E.a,{className:"table-bordered mt-4"},c.a.createElement("tbody",null,c.a.createElement("tr",null,c.a.createElement("td",{width:"40%"},c.a.createElement("b",null,"Name:")),c.a.createElement("td",{width:"60%"},null===C||void 0===C?void 0:C.firstName," ",null===C||void 0===C?void 0:C.lastName)),c.a.createElement("tr",null,c.a.createElement("td",{width:"40%"},c.a.createElement("b",null,"Staff type:")),c.a.createElement("td",{width:"60%"},null===C||void 0===C?void 0:C.employeeTypeName)),c.a.createElement("tr",null,c.a.createElement("td",{width:"40%"},c.a.createElement("b",null,"Nationality:")),c.a.createElement("td",{width:"60%"},null===C||void 0===C?void 0:C.nationalityName))))))),c.a.createElement("div",{className:" info-item mt-4"},c.a.createElement(m.a,null,c.a.createElement(u.a,null,c.a.createElement("div",{className:"hedding-titel"},c.a.createElement("h5",null," ",c.a.createElement("b",null,"Contact Information")," "),c.a.createElement("div",{className:"bg-h"})),c.a.createElement(E.a,{className:"table-bordered mt-4"},c.a.createElement("tbody",null,c.a.createElement("tr",null,c.a.createElement("td",{width:"40%"},c.a.createElement("span",null,c.a.createElement("b",null,"Address type:"))),c.a.createElement("td",{width:"60%"},null===C||void 0===C||null===(t=C.contactInfo)||void 0===t||null===(r=t.addressType)||void 0===r?void 0:r.name)),c.a.createElement("tr",null,c.a.createElement("td",{width:"40%"},c.a.createElement("span",null,c.a.createElement("b",null,"Phone number:"))),c.a.createElement("td",{width:"60%"},null===C||void 0===C?void 0:C.phoneNumber)),c.a.createElement("tr",null,c.a.createElement("td",{width:"40%"},c.a.createElement("span",null,c.a.createElement("b",null,"Cell phone number:"))),c.a.createElement("td",{width:"60%"},null===C||void 0===C||null===(p=C.contactInfo)||void 0===p?void 0:p.cellPhoneNumber)),c.a.createElement("tr",null,c.a.createElement("td",{width:"40%"},c.a.createElement("b",null,"Email:")),c.a.createElement("td",{width:"60%"},null===C||void 0===C?void 0:C.email)),c.a.createElement("tr",null,c.a.createElement("td",{width:"40%"},c.a.createElement("b",null,"Country:")),c.a.createElement("td",{width:"60%"},null===C||void 0===C||null===(g=C.contactInfo)||void 0===g||null===(w=g.country)||void 0===w?void 0:w.name)),c.a.createElement("tr",null,c.a.createElement("td",{width:"40%"},c.a.createElement("b",null,"City:")),c.a.createElement("td",{width:"60%"},null===C||void 0===C||null===(y=C.contactInfo)||void 0===y?void 0:y.city)),c.a.createElement("tr",null,c.a.createElement("td",{width:"40%"},c.a.createElement("b",null,"State:")),c.a.createElement("td",{width:"60%"},null===C||void 0===C||null===(j=C.contactInfo)||void 0===j?void 0:j.state)),c.a.createElement("tr",null,c.a.createElement("td",{width:"40%"},c.a.createElement("b",null,"Zip code:")),c.a.createElement("td",{width:"60%"},null===C||void 0===C||null===(O=C.contactInfo)||void 0===O?void 0:O.zipCode)),c.a.createElement("tr",null,c.a.createElement("td",{width:"40%"},c.a.createElement("b",null,"Address line:")),c.a.createElement("td",{width:"60%"},null===C||void 0===C||null===(I=C.contactInfo)||void 0===I?void 0:I.addressLine))))))))))))}))}}]);
//# sourceMappingURL=243.bc1fc884.chunk.js.map