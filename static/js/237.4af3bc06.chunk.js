"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[237],{3237:function(n,e,t){t.r(e),t.d(e,{default:function(){return E}});var r,a,i,o,s,c,d,l,u,p,x=t(9434),m=t(4270),f=t(9439),h=t(2791),g=t(168),b=t(7924),j=b.ZP.form(r||(r=(0,g.Z)(["\n  padding: 12px;\n  min-width: 300px;\n  display: flex;\n  gap: 16px;\n  flex-direction: column;\n  justify-content: center;\n  border-radius: 10px;\n  border: 2px solid;\n  background-color: none;\n"]))),v=b.ZP.label(a||(a=(0,g.Z)(["\n  padding: 12px;\n  display: flex;\n  gap: 16px;\n  flex-direction: column;\n  justify-content: center;\n  border: 2px solid;\n  border-radius: 7px;\n"]))),Z=t(6916),w=function(n){return n.contacts.items},y=function(n){return n.contacts.isLoading},k=(0,Z.P1)([w,function(n){return n.filter}],(function(n,e){return e?n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())})):n})),C=t(3634),P=t(184),F=function(){var n=(0,h.useState)(""),e=(0,f.Z)(n,2),t=e[0],r=e[1],a=(0,h.useState)(""),i=(0,f.Z)(a,2),o=i[0],s=i[1],c=(0,x.I0)(),d=(0,x.v9)(w);return(0,P.jsxs)(j,{action:"",onSubmit:function(n){n.preventDefault();var e=n.currentTarget;d.find((function(n){return n.name.toLowerCase()===e.elements.name.value.toLowerCase()}))?alert("".concat(e.elements.name.value," is already in contacts")):(c((0,C.uK)({name:e.elements.name.value,number:e.elements.number.value})),r(""),s(""),e.reset())},children:[(0,P.jsxs)(v,{htmlFor:"",name:"name",children:["Name",(0,P.jsx)("input",{value:t,onChange:function(n){return r(n.target.value)},type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,P.jsxs)(v,{htmlFor:"",name:"number",children:["Number",(0,P.jsx)("input",{value:o,onChange:function(n){return s(n.target.value)},type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,P.jsx)("button",{type:"submit",children:"Add contact"})]})},_=b.ZP.ul(i||(i=(0,g.Z)(["\n  top: 460px;\n  padding: 0;\n  min-width: 300px;\n  display: flex;\n  gap: 4px;\n  flex-direction: column;\n  justify-content: start;\n  align-items: flex-start;\n  overflow: auto;\n  max-height: 320px; /* \u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0432\u044b\u0441\u043e\u0442\u0430 \u0431\u043b\u043e\u043a\u0430 \u0441\u043f\u0438\u0441\u043a\u0430 */\n  padding-right: 10px; /* \u041e\u0442\u0441\u0442\u0443\u043f \u0441\u043f\u0440\u0430\u0432\u0430 \u0434\u043b\u044f \u043f\u043e\u043b\u043e\u0441\u044b \u043f\u0440\u043e\u043a\u0440\u0443\u0442\u043a\u0438 */\n  ::-webkit-scrollbar {\n    width: 8px; /* \u0428\u0438\u0440\u0438\u043d\u0430 \u043f\u043e\u043b\u043e\u0441\u044b \u043f\u0440\u043e\u043a\u0440\u0443\u0442\u043a\u0438 */\n  }\n\n  ::-webkit-scrollbar-thumb {\n    background-color: #888; /* \u0426\u0432\u0435\u0442 \u043f\u043e\u043b\u043e\u0441\u044b \u043f\u0440\u043e\u043a\u0440\u0443\u0442\u043a\u0438 */\n    border-radius: 4px; /* \u0421\u043a\u0440\u0443\u0433\u043b\u0435\u043d\u0438\u0435 \u0443\u0433\u043b\u043e\u0432 \u043f\u043e\u043b\u043e\u0441\u044b \u043f\u0440\u043e\u043a\u0440\u0443\u0442\u043a\u0438 */\n  }\n\n  ::-webkit-scrollbar-track {\n    background-color: #f5f5f5; /* \u0426\u0432\u0435\u0442 \u0444\u043e\u043d\u0430 \u043f\u043e\u043b\u043e\u0441\u044b \u043f\u0440\u043e\u043a\u0440\u0443\u0442\u043a\u0438 */\n  }\n"]))),A=b.ZP.li(o||(o=(0,g.Z)(["\n  padding: 6px 0;\n  min-width: 300px;\n  display: flex;\n  gap: 16px;\n  flex-direction: row;\n  justify-content: left;\n  align-items: center;\n"]))),z=t(2134),L=function(){var n=(0,x.v9)(k),e=(0,x.I0)();(0,h.useEffect)((function(){e((0,C.yF)())}),[e]);return(0,P.jsxs)("div",{children:[(0,P.jsx)("h2",{children:"Contacts"}),(0,P.jsx)(_,{children:n&&n.map((function(n){var t=n.id,r=n.name,a=n.number;return(0,P.jsxs)(A,{children:[r,": ",a,(0,P.jsx)(z.SV5,{onClick:function(){return function(n){return e((0,C.GK)(n))}(t)}})]},t)}))})]})},q=t(8156),S=(0,b.F4)(s||(s=(0,g.Z)(["\n  0% {\n    transform: rotateZ(0deg);\n  }\n  25% {\n    transform: rotateZ(-5deg);\n  }\n  75% {\n    transform: rotateZ(5deg);\n  }\n  100% {\n    transform: rotateZ(0deg);\n  }\n"]))),I=b.ZP.div(c||(c=(0,g.Z)(["\n  top: 80px;\n  ","\n"])),(0,b.iv)(d||(d=(0,g.Z)(["\n    @media screen and (min-width: 767px) {\n      display: flex;\n      flex-direction: row;\n      justify-content: space-between;\n    }\n  "])))),N=b.ZP.h1(l||(l=(0,g.Z)(["\n  display: none;\n  writing-mode: vertical-lr; /* \u0412\u0435\u0440\u0442\u0438\u043a\u0430\u043b\u044c\u043d\u043e\u0435 \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0441\u043b\u0435\u0432\u0430 \u043d\u0430\u043f\u0440\u0430\u0432\u043e */\n  text-orientation: upright; /* \u041f\u043e\u0432\u043e\u0440\u043e\u0442 \u0442\u0435\u043a\u0441\u0442\u0430 \u0432 \u0432\u0435\u0440\u0442\u0438\u043a\u0430\u043b\u044c\u043d\u043e\u043c \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0438 */\n  color: ",";\n  animation: "," 1s ease -in -out 5;\n  ","\n"])),q.O.success,S,(0,b.iv)(u||(u=(0,g.Z)(["\n    @media screen and (min-width: 767px) {\n      display: block;\n    }\n  "])))),K=t(4808),T=b.zo.div(p||(p=(0,g.Z)(["\n  text-align: center;\n  margin-top: 30px;\n"]))),B=function(){var n=(0,x.I0)();return(0,P.jsxs)(T,{children:[(0,P.jsx)("p",{children:"Find contacts by name"}),(0,P.jsx)("input",{onChange:function(e){n((0,K.T)(e.target.value))},type:"search",name:"filter"})]})},D=function(){return(0,P.jsx)(P.Fragment,{children:(0,P.jsxs)(I,{children:[(0,P.jsxs)("div",{children:[(0,P.jsx)(F,{}),(0,P.jsx)(B,{})]}),(0,P.jsx)("div",{children:(0,P.jsx)(N,{children:"Phonebook"})}),(0,P.jsx)(L,{})]})})};function E(){var n=(0,x.v9)(y);return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(m.q,{children:(0,P.jsx)("title",{children:"Phonebook"})}),(0,P.jsx)("div",{children:n&&"Request in progress..."}),(0,P.jsx)(D,{})]})}}}]);
//# sourceMappingURL=237.4af3bc06.chunk.js.map