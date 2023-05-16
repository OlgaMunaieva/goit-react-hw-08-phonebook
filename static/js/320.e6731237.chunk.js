"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[320],{2320:function(n,e,t){t.r(e),t.d(e,{default:function(){return q}});var r,a,i,o,s,c=t(2791),d=t(9434),u=t(4270),x=t(9439),p=t(168),l=t(7924),m=l.ZP.form(r||(r=(0,p.Z)(["\n  /* margin: 20px; */\n  padding: 12px;\n  min-width: 300px;\n  display: flex;\n  gap: 16px;\n  flex-direction: column;\n  justify-content: center;\n  border: 2px solid;\n  /* background-color: #d9caca;\n  box-shadow: rgb(0 0 0 / 20%) 0px 9px 9px -6px,\n    rgb(0 0 0 / 14%) 0px 9px 12px 0px, rgb(0 0 0 / 12%) 0px 3px 24px 0px;\n  border-radius: 20px; */\n"]))),f=l.ZP.label(a||(a=(0,p.Z)(["\n  /* margin: 20px; */\n  padding: 12px;\n  /* min-width: 300px; */\n  display: flex;\n  gap: 16px;\n  flex-direction: column;\n  justify-content: center;\n  border: 2px solid;\n  /* background-color: #d9caca;\n  box-shadow: rgb(0 0 0 / 20%) 0px 9px 9px -6px,\n    rgb(0 0 0 / 14%) 0px 9px 12px 0px, rgb(0 0 0 / 12%) 0px 3px 24px 0px;\n  border-radius: 20px; */\n"]))),h=t(6916),g=function(n){return n.contacts.items},b=function(n){return n.contacts.isLoading},j=(0,h.P1)([g,function(n){return n.filter}],(function(n,e){return e?n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())})):n})),v=t(3634),w=t(184),y=function(){var n=(0,c.useState)(""),e=(0,x.Z)(n,2),t=e[0],r=e[1],a=(0,c.useState)(""),i=(0,x.Z)(a,2),o=i[0],s=i[1],u=(0,d.I0)(),p=(0,d.v9)(g);return(0,w.jsxs)(m,{action:"",onSubmit:function(n){n.preventDefault();var e=n.target,t=e.elements,a=t.name,i=t.number;p.find((function(n){return n.name.toLowerCase()===a.value.toLowerCase()}))?alert("".concat(a.value," is already in contacts")):(u((0,v.uK)({name:a.value,number:i.value})),r(""),s(""),e.reset())},children:[(0,w.jsxs)(f,{htmlFor:"",name:"name",children:["Name",(0,w.jsx)("input",{value:t,onChange:function(n){return r(n.target.value)},type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,w.jsxs)(f,{htmlFor:"",name:"number",children:["Number",(0,w.jsx)("input",{value:o,onChange:function(n){return s(n.target.value)},type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,w.jsx)("button",{type:"submit",children:"Add contact"})]})},Z=l.ZP.ul(i||(i=(0,p.Z)(["\n  position: relative;\n  top: 460px;\n  max-width: 800px;\n  width: 80%;\n  /* left: 6%; */\n  /* right: 6%; */\n  padding: 0 6%;\n  min-width: 300px;\n  display: flex;\n  gap: 4px;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n"]))),C=l.ZP.li(o||(o=(0,p.Z)(["\n  padding: 6px 0;\n  min-width: 300px;\n  display: flex;\n  gap: 16px;\n  flex-direction: row;\n  justify-content: left;\n  align-items: center;\n"]))),k=t(2134),F=function(){var n=(0,d.v9)(j),e=(0,d.I0)();(0,c.useEffect)((function(){e((0,v.yF)())}),[e]);return(0,w.jsx)(Z,{children:n&&n.map((function(n){var t=n.id,r=n.name,a=n.phone;return(0,w.jsxs)(C,{children:[r,": ",a,(0,w.jsx)(k.SV5,{onClick:function(){return function(n){return e((0,v.GK)(n))}(t)}})]},t)}))})},P=l.ZP.div(s||(s=(0,p.Z)(["\n  position: fixed;\n  max-width: 600px;\n  /* min-width: 300px; */\n  z-index: 2;\n  background-color: white;\n  padding: 0 6%;\n  /* padding-left: auto; */\n  width: 80%;\n  /* left: 6%; */\n  /* right: 6%; */\n  /* margin: 6px auto;\n  max-width: 800px; */\n  /* display: flex; */\n  /* flex-direction: column; */\n  /* justify-content: center; */\n  /* align-items: center; */\n"]))),A=t(4808),z=function(){var n=(0,d.I0)();return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)("p",{children:"Find contacts by name"}),(0,w.jsx)("input",{onChange:function(e){n((0,A.T)(e.target.value))},type:"search",name:"filter",id:""})]})},L=function(){return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(P,{children:[(0,w.jsx)("h1",{children:"Phonebook"}),(0,w.jsx)(y,{}),(0,w.jsx)("h2",{children:"Contacts"}),(0,w.jsx)(z,{})]}),(0,w.jsx)(F,{})]})};function q(){var n=(0,d.I0)(),e=(0,d.v9)(b);return(0,c.useEffect)((function(){n((0,v.yF)())}),[n]),(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(u.q,{children:(0,w.jsx)("title",{children:"Your tasks"})}),(0,w.jsx)("div",{children:e&&"Request in progress..."}),(0,w.jsx)(L,{})]})}}}]);
//# sourceMappingURL=320.e6731237.chunk.js.map