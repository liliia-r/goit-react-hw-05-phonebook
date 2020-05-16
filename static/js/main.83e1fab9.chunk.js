(this["webpackJsonpgoit-react-hw-05-phonebook"]=this["webpackJsonpgoit-react-hw-05-phonebook"]||[]).push([[0],[,,,function(e,t,n){e.exports={PhonebookForm:"Phonebook_PhonebookForm__owTQ0",Title:"Phonebook_Title__pEvWe",Label:"Phonebook_Label__xtbng",PhonebookForm__input:"Phonebook_PhonebookForm__input__3FqW4",PhonebookForm__btn:"Phonebook_PhonebookForm__btn__1ciXi",disabled:"Phonebook_disabled__3pW80"}},,,,function(e,t,n){e.exports={Item:"Contact_Item__3BWcr",Item__container:"Contact_Item__container__2RFE5",Text:"Contact_Text__1Q5bZ",Number:"Contact_Number__RirDZ",Btn:"Contact_Btn__1X-sv"}},,,,,,,,function(e,t,n){e.exports={Container:"ContactFilter_Container__1nUeF",Label:"ContactFilter_Label__3X7E8",PhonebookForm__filter:"ContactFilter_PhonebookForm__filter__RBevm"}},,,,,function(e,t,n){e.exports={enter:"slide_enter__1ZKbR",enterActive:"slide_enterActive__3rEnH",exit:"slide_exit__okKHX",exitActive:"slide_exitActive__2cjS6"}},function(e,t,n){e.exports={List:"Contacts_List__GPO3p"}},function(e,t,n){e.exports={Container:"App_Container__1KI49"}},function(e,t,n){e.exports={enter:"pop_enter__2xH6R",enterActive:"pop_enterActive__2fPyO",exit:"pop_exit__yARg8",exitActive:"pop_exitActive__3iVYW"}},,,function(e,t,n){e.exports=n(35)},,,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(2),c=n.n(r),l=n(24),i=n(9),m=n(7),_=n.n(m),s=function(e){var t=e.name,n=e.number,a=e.onDeleteContact,r=e.id;return o.a.createElement("li",{className:_.a.Item,key:r},o.a.createElement("div",{className:_.a.Item__container},o.a.createElement("div",{className:_.a.Text},t),o.a.createElement("span",{className:_.a.Number},n)),o.a.createElement("button",{className:_.a.Btn,onClick:a},"X"))},u=n(36),b=n(38),f=n(20),h=n.n(f),p=n(21),E=n.n(p),d=function(e){var t=e.filteredContacts,n=e.onDeleteContact;return t.length>0&&o.a.createElement(u.a,{component:"ul",className:E.a.List},t.map((function(e){return o.a.createElement(b.a,{timeout:250,unmountOnExit:!0,classNames:h.a,key:e.id},o.a.createElement(s,Object.assign({},e,{onDeleteContact:function(){return n(e.id)}})))})))},v=n(14),C=n(17),k=n(39),N=n(3),F=n.n(N),x=(n(33),{name:"",number:""}),g=function(e){var t=e.onHandlerSubmit,n=Object(a.useState)(x),r=Object(i.a)(n,2),c=r[0],l=r[1],m=function(e){var t=e.target,n=t.name,a=t.value;l(Object(C.a)(Object(C.a)({},c),{},Object(v.a)({},n,a)))},_=function(){l({name:"",number:""})};return o.a.createElement("form",{className:F.a.PhonebookForm,onSubmit:function(e){e.preventDefault();var n=c.name,a=c.number,o={id:Object(k.a)(),name:n,number:a};t(o),_()}},o.a.createElement(b.a,{in:!0,classNames:"title",timeout:500,appear:!0},o.a.createElement("h2",{className:F.a.Title},"Phonebook")),o.a.createElement("label",{htmlFor:"name",className:F.a.Label},"Name",o.a.createElement("input",{className:F.a.PhonebookForm__input,type:"text",name:"name",value:c.name,onChange:m})),o.a.createElement("label",{htmlFor:"number",className:F.a.Label},"Number",o.a.createElement("input",{className:F.a.PhonebookForm__input,type:"text",name:"number",value:c.number,onChange:m})),o.a.createElement("button",{className:F.a.PhonebookForm__btn,type:"submit"},"Add Contact"))},P=n(15),O=n.n(P),j=function(e){var t=e.filter,n=e.onHandleChangeFilter;return o.a.createElement("div",{className:O.a.Container},o.a.createElement("label",{htmlFor:"filter",className:O.a.Label},"Find contacts by name",o.a.createElement("input",{className:O.a.PhonebookForm__filter,type:"text",id:t,name:"filter",value:t,onChange:n})))},w=n(10),y=(n(34),function(e,t){try{localStorage.setItem(e,JSON.stringify(t))}catch(n){throw new Error}}),L=function(e){try{var t=localStorage.getItem(e);return t?JSON.parse(t):null}catch(n){throw new Error}},S=n(22),A=n.n(S),I=n(23),H=n.n(I),T=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),m=Object(i.a)(c,2),_=m[0],s=m[1],u=n.filter((function(e){return e.name.toLowerCase().includes(_.toLowerCase())}));return Object(a.useEffect)((function(){var e=L("contacts");if(!e)return y("contacts",[]),void r([]);r(e)}),[]),Object(a.useEffect)((function(){y("contacts",n)}),[n]),o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:A.a.Container},o.a.createElement(g,{onHandlerSubmit:function(e){n.some((function(t){return t.name.toLowerCase()===e.name.toLowerCase()}))?w.b.error("".concat(e.name," is already in contacts.")):e.name.length>2&&e.number.length>5?r([].concat(Object(l.a)(n),[e])):e.name.length<=2?w.b.warn("Small contact name!"):e.number.length<=4&&w.b.warn("Small contact number!")}}),o.a.createElement(w.a,{autoClose:3e3}),n.length>=2&&o.a.createElement(b.a,{timeout:250,classNames:H.a},o.a.createElement(j,{filter:_,onHandleChangeFilter:function(e){var t=e.target.value;s(t)}})),o.a.createElement(d,{filteredContacts:u,onDeleteContact:function(e){r(n.filter((function(t){return t.id!==e})))}})))};c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(T,null)),document.getElementById("root"))}],[[26,1,2]]]);
//# sourceMappingURL=main.83e1fab9.chunk.js.map