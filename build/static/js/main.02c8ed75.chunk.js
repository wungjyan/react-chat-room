(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{181:function(e,t,a){e.exports=a(384)},247:function(e,t){},361:function(e,t,a){},363:function(e,t,a){},384:function(e,t,a){"use strict";a.r(t);a(182);var n=a(69),r=a(1),c=a.n(r),o=a(6),i=a.n(o),s=a(388),l=a(389),u=a(386),m=a(387),p=a(34),d=a(44),h=a(40),f="REGISTER_SUCCESS",v="LOGIN_SUCCESS",g="ERROR",E="INIT_DATA",b="LOGIN_OUT",O="MSG_RECV",y="MSG_LIST",k={redirectTo:"",nickname:"",msg:""};var j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(h.a)({},e,t.data,{redirectTo:"/login"});case v:return Object(h.a)({},e,t.data,{redirectTo:"/chat"});case E:return Object(h.a)({},e,t.data);case b:return Object(h.a)({},k);case g:return Object(h.a)({},e,{msg:t.data});default:return e}},w=a(129),S={msgList:[]};var T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(h.a)({},e,{msgList:[].concat(Object(w.a)(e.msgList),[t.data])});case y:return Object(h.a)({},e,{msgList:Object(w.a)(t.data)});default:return e}},C=Object(d.c)({user:j,chat:T}),N=a(168),L=(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):d.d)(Object(d.a)(N.a)),_=Object(d.e)(C,L),I=(a(51),a(13)),D=(a(166),a(24)),R=(a(95),a(39)),M=a(30),x=a(31),F=a(35),P=a(32),G=a(36),U=(a(131),a(50)),q=a(67),B=a.n(q),V=a(169),A=a.n(V)()("http://localhost:9000");function H(e){return{type:g,data:e}}var X=function(e){var t=e.nickname,a=e.password;return function(e){B.a.post("/user/register",{nickname:t,password:a}).then(function(a){200===a.status&&0===a.data.code?(U.a.success("\u6ce8\u518c\u6210\u529f"),e({type:f,data:{nickname:t}})):(U.a.error(a.data.msg),e(H(a.data.msg)))})}},J=function(e){var t=e.nickname,a=e.password;return function(e){B.a.post("/user/login",{nickname:t,password:a}).then(function(a){200===a.status&&0===a.data.code?(U.a.success("\u767b\u5f55\u6210\u529f"),e({type:v,data:{nickname:t}})):(U.a.error(a.data.msg),e(H(a.data.msg)))})}},z=function(){return function(e){B.a.get("/user/info").then(function(t){var a;200===t.status&&0===t.data.code&&e((a=t.data.data,{type:E,data:a}))})}},K=function(){return function(e){B.a.get("/user/getmsglist").then(function(t){var a;200===t.status&&0===t.data.code&&e((a=t.data.data,{type:y,data:a}))})}},Q=function(){return function(e){A.on("recvMsg",function(t){e({type:O,data:t})})}},W=function(e){function t(e){var a;return Object(M.a)(this,t),(a=Object(F.a)(this,Object(P.a)(t).call(this,e))).validateToNextPassword=function(e,t,n){var r=a.props.form;t&&a.state.confirmDirty&&r.validateFields(["confirm"],{force:!0}),n()},a.compareToFirstPassword=function(e,t,n){var r=a.props.form;t&&t!==r.getFieldValue("password")?n("\u4e24\u6b21\u8f93\u5165\u5bc6\u7801\u4e0d\u4e00\u81f4!"):n()},a.handleConfirmBlur=function(e){var t=e.target.value;a.setState({confirmDirty:a.state.confirmDirty||!!t})},a.handleSubmit=function(e){console.log("\u70b9\u51fb\u6309\u94ae"),e.preventDefault(),a.props.form.validateFieldsAndScroll(function(e,t){e||(console.log("Received values of form: ",t),a.props.handleRegister(t))})},a.state={confirmDirty:!1},a}return Object(G.a)(t,e),Object(x.a)(t,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator;return c.a.createElement("div",{className:"register-form-wrapper"},this.props.redirectTo?c.a.createElement(m.a,{to:this.props.redirectTo}):null,c.a.createElement(D.a,{onSubmit:this.handleSubmit},c.a.createElement(D.a.Item,{label:"\u7528\u6237\u540d"},e("nickname",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u7528\u6237\u540d!"}]})(c.a.createElement(R.a,{type:"text"}))),c.a.createElement(D.a.Item,{label:"\u5bc6\u7801"},e("password",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u5bc6\u7801!"},{validator:this.validateToNextPassword}]})(c.a.createElement(R.a,{type:"password"}))),c.a.createElement(D.a.Item,{label:"\u786e\u8ba4\u5bc6\u7801"},e("confirm",{rules:[{required:!0,message:"\u8bf7\u786e\u8ba4\u5bc6\u7801!"},{validator:this.compareToFirstPassword}]})(c.a.createElement(R.a,{type:"password",onBlur:this.handleConfirmBlur}))),c.a.createElement(D.a.Item,null,c.a.createElement(I.a,{type:"primary",htmlType:"submit"},"\u6ce8\u518c"))))}}]),t}(r.Component);W=D.a.create({})(W);var Y=Object(p.b)(function(e){return{redirectTo:e.user.redirectTo}},function(e){return{handleRegister:function(t){var a=t.nickname,n=t.password;e(X({nickname:a,password:n}))}}})(W),Z=(a(164),a(8)),$=function(e){function t(){var e,a;Object(M.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(F.a)(this,(e=Object(P.a)(t)).call.apply(e,[this].concat(r)))).handleSubmit=function(e){e.preventDefault(),a.props.form.validateFields(function(e,t){e||(console.log("Received values of form: ",t),a.props.handleLogin(t))})},a}return Object(G.a)(t,e),Object(x.a)(t,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator;return c.a.createElement("div",{className:"login-form-wrapper"},this.props.redirectTo?c.a.createElement(m.a,{to:this.props.redirectTo}):null,c.a.createElement(D.a,{onSubmit:this.handleSubmit},c.a.createElement(D.a.Item,null,e("nickname",{rules:[{required:!0,message:"Please input your username!"}]})(c.a.createElement(R.a,{prefix:c.a.createElement(Z.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"\u7528\u6237\u540d"}))),c.a.createElement(D.a.Item,null,e("password",{rules:[{required:!0,message:"Please input your Password!"}]})(c.a.createElement(R.a,{prefix:c.a.createElement(Z.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"\u5bc6\u7801"}))),c.a.createElement(D.a.Item,null,c.a.createElement(I.a,{type:"primary",htmlType:"submit",className:"login-form-button"},"\u767b\u5f55"))))}}]),t}(r.Component);$=D.a.create({})($);var ee=Object(p.b)(function(e){return{redirectTo:e.user.redirectTo}},function(e){return{handleLogin:function(t){var a=t.nickname,n=t.password;e(J({nickname:a,password:n}))}}})($),te=(a(361),function(e){function t(){return Object(M.a)(this,t),Object(F.a)(this,Object(P.a)(t).apply(this,arguments))}return Object(G.a)(t,e),Object(x.a)(t,[{key:"formateTime",value:function(e){var t=new Date(e),a=t.getDate(),n=t.getHours()<10?"0".concat(t.getHours()):"".concat(t.getHours()),r=t.getMinutes()<10?"0".concat(t.getMinutes()):"".concat(t.getMinutes());return(new Date).getDate()>a?"\u6628\u5929".concat(n,":").concat(r):"".concat(n,":").concat(r)}},{key:"render",value:function(){return c.a.createElement("div",{className:"self"===this.props.mark?"msg-item self":"msg-item"},c.a.createElement("span",{className:"name"},this.props.info.user),c.a.createElement("span",{className:"msg"},this.props.info.content),c.a.createElement("span",{className:"time"},this.formateTime(this.props.info.create_time)))}}]),t}(r.Component)),ae=function(e){function t(e){var a;return Object(M.a)(this,t),(a=Object(F.a)(this,Object(P.a)(t).call(this,e))).state={content:""},a.myRef=c.a.createRef(),a}return Object(G.a)(t,e),Object(x.a)(t,[{key:"componentDidMount",value:function(){this.props.handleInit(),this.props.handleRecv(),this.props.handleGetList()}},{key:"componentDidUpdate",value:function(){this.handleScroll()}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"chat-box"},c.a.createElement("div",{className:"show"},this.props.msgList.map(function(t,a){return t.user===e.props.nickname?c.a.createElement(te,{key:a,mark:"self",info:t}):c.a.createElement(te,{key:a,mark:"other",info:t})}),c.a.createElement("div",{className:"end",ref:this.myRef,style:{height:0,overflow:"hidden"}})),c.a.createElement("div",{className:"input"},c.a.createElement(R.a,{placeholder:"\u6765\u5410\u69fd\u4e0b\u5427\uff5e",value:this.state.content,onChange:function(t){return e.handleChange(t)},onClick:this.handleScroll.bind(this)}),c.a.createElement(I.a,{type:"primary",onClick:function(){e.setState({content:""}),e.props.handleSend(e.props.nickname,e.state.content)}},"\u53d1\u9001")))}},{key:"handleChange",value:function(e){this.setState({content:e.target.value})}},{key:"handleScroll",value:function(){this.myRef.current.scrollIntoView()}}]),t}(r.Component),ne=Object(p.b)(function(e){return{nickname:e.user.nickname,msgList:e.chat.msgList}},function(e){return{handleInit:function(){e(z())},handleSend:function(t,a){var n;e((n={user:t,content:a},function(e){A.emit("sendMsg",n)}))},handleRecv:function(){e(Q())},handleGetList:function(){e(K())}}})(ae),re=(a(363),a(365),a(178)),ce=(a(368),a(179)),oe=(a(385),a(128)),ie=a(390),se=a(175),le=a.n(se),ue=function(e){function t(e){var a;return Object(M.a)(this,t),(a=Object(F.a)(this,Object(P.a)(t).call(this,e))).state={visible:!1},a}return Object(G.a)(t,e),Object(x.a)(t,[{key:"loginOut",value:function(){this.setState({visible:!0,confirmLoading:!1})}},{key:"handleOk",value:function(){var e=this;this.setState({confirmLoading:!0}),le.a.remove("userid"),this.props.logoutSubmit(),setTimeout(function(){e.setState({visible:!1,confirmLoading:!1}),e.props.history.push("/login")},2e3)}},{key:"handleCancel",value:function(){U.a.error("\u4f60\u5df1\u53d6\u6d88\u9000\u51fa"),this.setState({visible:!1})}},{key:"render",value:function(){var e=this,t=c.a.createElement(oe.a,null,c.a.createElement(oe.a.Item,null,c.a.createElement("span",{onClick:function(){return e.loginOut()}},"\u9000\u51fa")));return console.log("BTns:",this.props),c.a.createElement("span",{className:"btn"},"/chat"===this.props.location.pathname&&this.props.nickname?c.a.createElement(ce.a,{overlay:t},c.a.createElement("span",null,this.props.nickname," ",c.a.createElement(Z.a,{type:"down"}))):"/login"===this.props.location.pathname?c.a.createElement("span",{onClick:function(){return e.props.history.push("/register")}},"\u6ce8\u518c"):c.a.createElement("span",{onClick:function(){return e.props.history.push("/login")}},"\u767b\u5f55"),c.a.createElement(re.a,{title:"\u63d0\u793a",okText:"\u786e\u5b9a",cancelText:"\u53d6\u6d88",visible:this.state.visible,onOk:this.handleOk.bind(this),confirmLoading:this.state.confirmLoading,onCancel:this.handleCancel.bind(this)},c.a.createElement("p",null,"\u786e\u5b9a\u9000\u51fa\u767b\u5f55\u5417\uff1f")))}}]),t}(r.Component),me=Object(ie.a)(Object(p.b)(function(e){return{nickname:e.user.nickname}},function(e){return{logoutSubmit:function(){e({type:b})}}})(ue)),pe=n.a.Header,de=n.a.Footer,he=n.a.Content;i.a.render(c.a.createElement(p.a,{store:_},c.a.createElement(s.a,null,c.a.createElement("div",null,c.a.createElement(n.a,null,c.a.createElement(pe,null,c.a.createElement("div",{className:"header-content"},c.a.createElement("span",{className:"title"},"\u74f6\u5b50\u7684\u804a\u5929\u5ba4"),c.a.createElement(me,null))),c.a.createElement(he,null,c.a.createElement(l.a,null,c.a.createElement(u.a,{path:"/register",component:Y}),c.a.createElement(u.a,{path:"/login",component:ee}),c.a.createElement(u.a,{path:"/chat",component:ne}),c.a.createElement(m.a,{to:"/chat"}))),c.a.createElement(de,null,"\u4f5c\u8005\uff1a\u74f6\u5b50"))))),document.getElementById("root"))}},[[181,2,1]]]);
//# sourceMappingURL=main.02c8ed75.chunk.js.map