(this.webpackJsonpsecond=this.webpackJsonpsecond||[]).push([[0],{20:function(t,e,n){t.exports={btn:"ListItem_btn__xsGV_",sign:"ListItem_sign__2rtd9"}},27:function(t,e,n){t.exports={enter:"fade_enter__6P5Q_",enterActive:"fade_enterActive__2TQpo",exit:"fade_exit__1bWau"}},28:function(t,e,n){t.exports={btn:"Btn_btn__10Kex"}},30:function(t,e,n){t.exports={alert:"alert_alert__3VpKl"}},31:function(t,e,n){t.exports={enter:"alert_enter__2dMOa",enterActive:"alert_enterActive__RU9Zq",exit:"alert_exit__1277_"}},32:function(t,e,n){t.exports={title:"list_title__5dTbl"}},33:function(t,e,n){t.exports={enter:"pop_enter__6gsRa",enterActive:"pop_enterActive__1_TC5",exit:"pop_exit__1gsq1",exitActive:"pop_exitActive__2NN_c"}},34:function(t,e,n){t.exports={enter:"search_enter__2ssXx",enterActive:"search_enterActive__3iFEo",exit:"search_exit__1GxFU",exitActive:"search_exitActive__2ugI6"}},37:function(t,e,n){t.exports=n(50)},4:function(t,e,n){t.exports={form:"inputForm_form__18Nci",title:"inputForm_title__1DD-D",subtitle:"inputForm_subtitle__2G1o7",appear:"inputForm_appear__3VJtt"}},50:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),c=n(5),i=n.n(c),o=n(25),l=n(16),s=n(8),u=n(9),m=n(12),p=n(11),_=n(15),h=n(4),f=n.n(h),b=n(52),d=n(27),E=n.n(d);function v(t){var e=t.handleChange,n=t.contact,a=t.number,c=t.desForm;return r.a.createElement("div",null,r.a.createElement(b.a,{in:c,timeout:2e3,classNames:E.a,unmountOnExit:!0},r.a.createElement("h2",{className:f.a.appear},"Phonebook")),r.a.createElement("h3",{className:f.a.title},"Name"),r.a.createElement("input",{name:"contact",placeholder:"Please put the name",onChange:e,value:n,type:"text"}),r.a.createElement("h3",{className:f.a.subtitle},"Number"),r.a.createElement("input",{name:"number",placeholder:"Please put the number",onChange:e,value:a,type:"number"}))}var g=n(28),O=n.n(g);function x(){return r.a.createElement("button",{className:O.a.btn,type:"submit"},"Add to contact")}var j=n(29),y=n(30),C=n.n(y),A=function(t){var e=t.contact;return r.a.createElement("p",{className:C.a.alert},"Name ",e," already exist. Turn on your imagination")},F=n(31),N=n.n(F),k=function(t){Object(m.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={contact:"",number:"",isOpen:!1,isAlert:!1},t.handleChange=function(e){t.setState(Object(_.a)({},e.target.name,e.target.value))},t.checkContactExist=function(e){t.setState((function(t){return{isAlert:!t.isAlert}}))},t.getExist=function(){return 0!==t.props.contacts.filter((function(e){return e.contact.toLowerCase().includes(t.state.contact.toLowerCase())})).length},t.handleSubmit=function(e){e.preventDefault();var n=t.state.contact,a=t.state.number;if(n&&a&&!t.getExist()){var r={id:Object(j.uuid)(),contact:n,number:a};t.props.addContact(r),t.setState({contact:"",number:""})}else t.checkContactExist()},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.setState({isOpen:!0,isAlert:!1})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:this.handleSubmit,className:f.a.form},r.a.createElement(v,{desForm:this.state.isOpen,contact:this.state.contact,number:this.state.number,handleChange:this.handleChange}),r.a.createElement(x,null)),r.a.createElement(b.a,{in:this.state.isAlert,timeout:2e3,classNames:N.a,unmountOnExit:!0},r.a.createElement(A,{contact:this.state.contact})))}}]),n}(a.Component),I=n(20),S=n.n(I),V=function(t){var e=t.contact,n=e.contact,a=e.number,c=e.id,i=t.deleteItem;return r.a.createElement("li",null,r.a.createElement("p",{className:S.a.sign},n," : ",a),r.a.createElement("button",{className:S.a.btn,id:c,onClick:function(){return i(c)}},"delete"))};var L=function(t){var e=t.getFilterValue,n=t.filter;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:f.a.title},"Find contacts by name"),r.a.createElement("input",{name:"filter",placeholder:"search",type:"text",onChange:function(t){return e(t.target.value)},value:n}))},w=n(32),D=n.n(w),T=n(53),M=n(33),G=n.n(M),J=n(34),P=n.n(J),R=function(t){Object(m.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={inSearch:!1},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.setState({inSearch:!0})}},{key:"render",value:function(){var t=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:D.a.title},"Contacts"),r.a.createElement(b.a,{in:this.props.contacts.length>=2,timeout:250,classNames:P.a,unmountOnExit:!0},r.a.createElement(L,{filter:this.props.filter,getFilterValue:this.props.getFilterValue}))),r.a.createElement(T.a,{component:"ul"},this.props.contacts.map((function(e){return r.a.createElement(b.a,{timeout:200,key:e.id,classNames:G.a,unmountOnExit:!0},r.a.createElement(V,{key:e.id,deleteItem:t.props.deleteItem,contact:e}))}))))}}]),n}(a.Component),U=n(6),q=Object(U.b)("GETFILTERVALUE"),B=Object(U.b)("ADDCONTACT"),K=Object(U.b)("DELETEITEM"),Q=function(t){Object(m.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).filterList=function(){return t.props.contacts.filter((function(e){return e.contact.toLowerCase().includes(t.props.filter)}))},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.setState({contacts:JSON.parse(localStorage.getItem("contacts"))||[]})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(k,{addContact:this.props.addContact,getFilterValue:this.props.getFilterValue,contacts:this.filterList()}),r.a.createElement(R,{contacts:this.filterList(),filter:this.props.filter,getFilterValue:this.props.getFilterValue,deleteItem:this.props.deleteItem}))}}]),n}(a.Component),z=Object(l.b)((function(t){return{contacts:t.contacts,filter:t.filter}}),{getFilterValue:q,addContact:B,deleteItem:K})(Q),W=n(22),X=n(7),Z={contacts:[],filter:""},H=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Object(X.a)({},Z),e=arguments.length>1?arguments[1]:void 0,n=e.type,a=e.payload;switch(n){case q.type:return Object(X.a)(Object(X.a)({},t),{},{filter:a});case B.type:return Object(X.a)(Object(X.a)({},t),{},{contacts:[].concat(Object(W.a)(t.contacts),[a])});case K.type:return Object(X.a)(Object(X.a)({},t),{},{contacts:Object(W.a)(t.contacts.filter((function(t){return t.id!==a})))});default:return t}},Y=(n(47),n(21)),$=n(35),tt={key:"root",storage:n.n($).a},et=Object(Y.a)(tt,H),nt=Object(U.a)({reducer:et,middleware:Object(U.c)({serializableCheck:!1})}),at=Object(Y.b)(nt);i.a.render(r.a.createElement(l.a,{store:nt},r.a.createElement(o.a,{loading:null,persistor:at},r.a.createElement(z,null))),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.63b9b37c.chunk.js.map