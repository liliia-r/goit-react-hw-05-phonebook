(this["webpackJsonpgoit-react-hw-05-phonebook"]=this["webpackJsonpgoit-react-hw-05-phonebook"]||[]).push([[0],[,,,function(e,t,n){e.exports={PhonebookForm:"Phonebook_PhonebookForm__owTQ0",Title:"Phonebook_Title__pEvWe",Label:"Phonebook_Label__xtbng",PhonebookForm__input:"Phonebook_PhonebookForm__input__3FqW4",PhonebookForm__btn:"Phonebook_PhonebookForm__btn__1ciXi",disabled:"Phonebook_disabled__3pW80"}},,,,function(e,t,n){e.exports={Item:"Contact_Item__3BWcr",Item__container:"Contact_Item__container__2RFE5",Text:"Contact_Text__1Q5bZ",Number:"Contact_Number__RirDZ",Btn:"Contact_Btn__1X-sv"}},,,,,,,,function(e,t,n){e.exports={Container:"ContactFilter_Container__1nUeF",Label:"ContactFilter_Label__3X7E8",PhonebookForm__filter:"ContactFilter_PhonebookForm__filter__RBevm"}},,,,,function(e,t,n){e.exports={enter:"slide_enter__1ZKbR",enterActive:"slide_enterActive__3rEnH",exit:"slide_exit__okKHX",exitActive:"slide_exitActive__2cjS6"}},function(e,t,n){e.exports={List:"Contacts_List__GPO3p"}},function(e,t,n){e.exports={Container:"App_Container__1KI49"}},function(e,t,n){e.exports={enter:"pop_enter__2xH6R",enterActive:"pop_enterActive__2fPyO",exit:"pop_exit__yARg8",exitActive:"pop_exitActive__3iVYW"}},,,function(e,t,n){e.exports=n(35)},,,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(2),c=n.n(r),i=n(24),m=n(9),l=n(7),u=n.n(l),s=function(e){var t=e.name,n=e.number,a=e.onDeleteContact,r=e.id;return o.a.createElement("li",{className:u.a.Item,key:r},o.a.createElement("div",{className:u.a.Item__container},o.a.createElement("div",{className:u.a.Text},t),o.a.createElement("span",{className:u.a.Number},n)),o.a.createElement("button",{className:u.a.Btn,onClick:a},"X"))},_=n(36),b=n(38),f=n(20),p=n.n(f),h=n(21),d=n.n(h),E=function(e){var t=e.filteredContacts,n=e.onDeleteContact;return t.length>0&&o.a.createElement(_.a,{component:"ul",className:d.a.List},t.map((function(e){return o.a.createElement(b.a,{timeout:250,unmountOnExit:!0,classNames:p.a,key:e.id},o.a.createElement(s,Object.assign({},e,{onDeleteContact:function(){return n(e.id)}})))})))},C=n(14),v=n(17),k=n(39),N=n(3),F=n.n(N),x=(n(33),{name:"",number:""}),g=function(e){var t=e.onHandlerSubmit,n=Object(a.useState)(x),r=Object(m.a)(n,2),c=r[0],i=r[1],l=function(e){var t=e.target,n=t.name,a=t.value;i(Object(v.a)(Object(v.a)({},c),{},Object(C.a)({},n,a)))},u=function(){i({name:"",number:""})};return o.a.createElement("form",{className:F.a.PhonebookForm,onSubmit:function(e){e.preventDefault();var n=c.name,a=c.number,o={id:Object(k.a)(),name:n,number:a};t(o),u()}},o.a.createElement(b.a,{in:!0,classNames:"title",timeout:500,appear:!0},o.a.createElement("h2",{className:F.a.Title},"Phonebook")),o.a.createElement("label",{htmlFor:"name",className:F.a.Label},"Name",o.a.createElement("input",{className:F.a.PhonebookForm__input,type:"text",name:"name",value:c.name,onChange:l})),o.a.createElement("label",{htmlFor:"number",className:F.a.Label},"Number",o.a.createElement("input",{className:F.a.PhonebookForm__input,type:"text",name:"number",value:c.number,onChange:l})),o.a.createElement("button",{className:F.a.PhonebookForm__btn,type:"submit"},"Add Contact"))},P=n(15),O=n.n(P),j=function(e){var t=e.filter,n=e.onHandleChangeFilter;return o.a.createElement("div",{className:O.a.Container},o.a.createElement("label",{htmlFor:"filter",className:O.a.Label},"Find contacts by name",o.a.createElement("input",{className:O.a.PhonebookForm__filter,type:"text",id:t,name:"filter",value:t,onChange:n})))},w=n(10),S=(n(34),function(e,t){try{localStorage.setItem(e,JSON.stringify(t))}catch(n){throw new Error}}),y=function(e){try{var t=localStorage.getItem(e);return t?JSON.parse(t):null}catch(n){throw new Error}},L=n(22),A=n.n(L),I=n(23),H=n.n(I),R=function(){var e=Object(a.useState)([{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}]),t=Object(m.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),l=Object(m.a)(c,2),u=l[0],s=l[1],_=n.filter((function(e){return e.name.toLowerCase().includes(u.toLowerCase())}));return Object(a.useEffect)((function(){var e=y("contacts");if(!e)return S("contacts",[]),void r([]);r(e)}),[]),Object(a.useEffect)((function(){S("contacts",n)}),[n]),o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:A.a.Container},o.a.createElement(g,{onHandlerSubmit:function(e){n.some((function(t){return t.name.toLowerCase()===e.name.toLowerCase()}))?w.b.error("".concat(e.name," is already in contacts.")):e.name.length>2&&e.number.length>5?r([].concat(Object(i.a)(n),[e])):e.name.length<=2?w.b.warn("Small contact name!"):e.number.length<=4&&w.b.warn("Small contact number!")}}),o.a.createElement(w.a,{autoClose:3e3}),n.length>=2&&o.a.createElement(b.a,{timeout:250,classNames:H.a},o.a.createElement(j,{filter:u,onHandleChangeFilter:function(e){var t=e.target.value;s(t)}})),o.a.createElement(E,{filteredContacts:_,onDeleteContact:function(e){r(n.filter((function(t){return t.id!==e})))}})))};c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(R,null)),document.getElementById("root"))}],[[26,1,2]]]);
//# sourceMappingURL=main.9f56ad30.chunk.js.map