(this.webpackJsonpdesk_client=this.webpackJsonpdesk_client||[]).push([[295],{878:function(e,t,a){"use strict";a.r(t);var l=a(31),n=a(19),c=a(0),i=a.n(c);t.default=function(){var e=Object(c.useState)(),t=Object(n.a)(e,2),a=t[0],r=t[1],s=Object(c.useState)(!1),o=Object(n.a)(s,2),u=o[0],p=o[1],d=Object(c.useState)({}),f=Object(n.a)(d,2),m=(f[0],f[1]);return i.a.createElement("div",null,i.a.createElement("input",{type:"file",name:"file",accept:".xls, .xlsx, .pdf, .docx, .doc",onChange:function(e){var t,a=(null===(t=e.target.files[0])||void 0===t?void 0:t.name).split(".").pop();"pdf"==a||"docx"==a||"doc"==a||"xls"==a?(r(e.target.files[0]),p(!0)):r("")}}),u?i.a.createElement("div",null,i.a.createElement("p",null,"Filename: ",a.name),i.a.createElement("p",null,"Filetype: ",a.type),i.a.createElement("p",null,"Size in bytes: ",a.size),i.a.createElement("p",null,"lastModifiedDate:"," ",a.lastModifiedDate.toLocaleDateString())):i.a.createElement("p",null,"Select a file to show details"),i.a.createElement("div",null,i.a.createElement("button",{onClick:function(){var e=new FormData;e.append("File",a);var t,n=Object(l.a)(e.values());try{for(n.s();!(t=n.n()).done;){var c=t.value;m(c)}}catch(i){n.e(i)}finally{n.f()}}},"Submit")))}}}]);
//# sourceMappingURL=295.8d3c18d1.chunk.js.map