(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{181:function(e,t,a){e.exports=a(384)},247:function(e,t){},361:function(e,t,a){},363:function(e,t,a){},384:function(e,t,a){"use strict";a.r(t);a(182);var n=a(69),r=a(1),i=a.n(r),c=a(6),o=a.n(c),s=a(388),l=a(389),u=a(386),m=a(387),d=a(34),p=a(44),h=a(40),f="REGISTER_SUCCESS",g="LOGIN_SUCCESS",b="ERROR",v="INIT_DATA",E="LOGIN_OUT",O="MSG_RECV",y="MSG_LIST",k={redirectTo:"",nickname:"",msg:""};var w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(h.a)({},e,t.data,{redirectTo:"/login"});case g:return Object(h.a)({},e,t.data,{redirectTo:"/chat"});case v:return Object(h.a)({},e,t.data);case E:return Object(h.a)({},k);case b:return Object(h.a)({},e,{msg:t.data});default:return e}},j=a(130),S={msgList:[]};var T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(h.a)({},e,{msgList:[].concat(Object(j.a)(e.msgList),[t.data])});case y:return Object(h.a)({},e,{msgList:Object(j.a)(t.data)});default:return e}},C=Object(p.c)({user:w,chat:T}),L=a(169),N=(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):p.d)(Object(p.a)(L.a)),_=Object(p.e)(C,N),I=(a(51),a(13)),D=(a(167),a(24)),R=(a(96),a(39)),x=a(30),M=a(31),F=a(35),P=a(32),G=a(36),U=(a(132),a(50)),q=a(67),V=a.n(q),A=a(170),B=a.n(A)()("http://localhost:9000");function H(e){return{type:b,data:e}}var X=function(e){var t=e.nickname,a=e.password;return function(e){V.a.post("/user/register",{nickname:t,password:a}).then(function(a){200===a.status&&0===a.data.code?(U.a.success("\u6ce8\u518c\u6210\u529f"),e({type:f,data:{nickname:t}})):(U.a.error(a.data.msg),e(H(a.data.msg)))})}},J=function(e){var t=e.nickname,a=e.password;return function(e){V.a.post("/user/login",{nickname:t,password:a}).then(function(a){200===a.status&&0===a.data.code?(U.a.success("\u767b\u5f55\u6210\u529f"),e({type:g,data:{nickname:t}})):(U.a.error(a.data.msg),e(H(a.data.msg)))})}},z=function(){return function(e){V.a.get("/user/info").then(function(t){var a;200===t.status&&0===t.data.code&&e((a=t.data.data,{type:v,data:a}))})}},K=function(){return function(e){V.a.get("/user/getmsglist").then(function(t){var a;200===t.status&&0===t.data.code&&e((a=t.data.data,{type:y,data:a}))})}},Q=function(){return function(e){B.on("recvMsg",function(t){e({type:O,data:t})})}},W=function(e){function t(e){var a;return Object(x.a)(this,t),(a=Object(F.a)(this,Object(P.a)(t).call(this,e))).validateToNextPassword=function(e,t,n){var r=a.props.form;t&&a.state.confirmDirty&&r.validateFields(["confirm"],{force:!0}),n()},a.compareToFirstPassword=function(e,t,n){var r=a.props.form;t&&t!==r.getFieldValue("password")?n("\u4e24\u6b21\u8f93\u5165\u5bc6\u7801\u4e0d\u4e00\u81f4!"):n()},a.handleConfirmBlur=function(e){var t=e.target.value;a.setState({confirmDirty:a.state.confirmDirty||!!t})},a.handleSubmit=function(e){console.log("\u70b9\u51fb\u6309\u94ae"),e.preventDefault(),a.props.form.validateFieldsAndScroll(function(e,t){e||a.props.handleRegister(t)})},a.state={confirmDirty:!1},a}return Object(G.a)(t,e),Object(M.a)(t,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator;return i.a.createElement("div",{className:"register-form-wrapper"},this.props.redirectTo?i.a.createElement(m.a,{to:this.props.redirectTo}):null,i.a.createElement(D.a,{onSubmit:this.handleSubmit},i.a.createElement(D.a.Item,{label:"\u7528\u6237\u540d"},e("nickname",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u7528\u6237\u540d!"}]})(i.a.createElement(R.a,{type:"text"}))),i.a.createElement(D.a.Item,{label:"\u5bc6\u7801"},e("password",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u5bc6\u7801!"},{validator:this.validateToNextPassword}]})(i.a.createElement(R.a,{type:"password"}))),i.a.createElement(D.a.Item,{label:"\u786e\u8ba4\u5bc6\u7801"},e("confirm",{rules:[{required:!0,message:"\u8bf7\u786e\u8ba4\u5bc6\u7801!"},{validator:this.compareToFirstPassword}]})(i.a.createElement(R.a,{type:"password",onBlur:this.handleConfirmBlur}))),i.a.createElement(D.a.Item,null,i.a.createElement(I.a,{type:"primary",htmlType:"submit"},"\u6ce8\u518c"))))}}]),t}(r.Component);W=D.a.create({})(W);var Y=Object(d.b)(function(e){return{redirectTo:e.user.redirectTo}},function(e){return{handleRegister:function(t){var a=t.nickname,n=t.password;e(X({nickname:a,password:n}))}}})(W),Z=(a(165),a(8)),$=function(e){function t(){var e,a;Object(x.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(F.a)(this,(e=Object(P.a)(t)).call.apply(e,[this].concat(r)))).handleSubmit=function(e){e.preventDefault(),a.props.form.validateFields(function(e,t){e||a.props.handleLogin(t)})},a}return Object(G.a)(t,e),Object(M.a)(t,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator;return i.a.createElement("div",{className:"login-form-wrapper"},this.props.redirectTo?i.a.createElement(m.a,{to:this.props.redirectTo}):null,i.a.createElement(D.a,{onSubmit:this.handleSubmit},i.a.createElement(D.a.Item,null,e("nickname",{rules:[{required:!0,message:"Please input your username!"}]})(i.a.createElement(R.a,{prefix:i.a.createElement(Z.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"\u7528\u6237\u540d"}))),i.a.createElement(D.a.Item,null,e("password",{rules:[{required:!0,message:"Please input your Password!"}]})(i.a.createElement(R.a,{prefix:i.a.createElement(Z.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"\u5bc6\u7801"}))),i.a.createElement(D.a.Item,null,i.a.createElement(I.a,{type:"primary",htmlType:"submit",className:"login-form-button"},"\u767b\u5f55"))))}}]),t}(r.Component);$=D.a.create({})($);var ee=Object(d.b)(function(e){return{redirectTo:e.user.redirectTo}},function(e){return{handleLogin:function(t){var a=t.nickname,n=t.password;e(J({nickname:a,password:n}))}}})($),te=(a(361),function(e){function t(){return Object(x.a)(this,t),Object(F.a)(this,Object(P.a)(t).apply(this,arguments))}return Object(G.a)(t,e),Object(M.a)(t,[{key:"formateTime",value:function(e){var t=new Date(e),a=t.getDate(),n=t.getHours()<10?"0".concat(t.getHours()):"".concat(t.getHours()),r=t.getMinutes()<10?"0".concat(t.getMinutes()):"".concat(t.getMinutes());return(new Date).getDate()>a?"\u6628\u5929".concat(n,":").concat(r):"".concat(n,":").concat(r)}},{key:"render",value:function(){return i.a.createElement("div",{className:"self"===this.props.mark?"msg-item self":"msg-item"},i.a.createElement("span",{className:"name"},this.props.info.user),i.a.createElement("span",{className:"msg"},this.props.info.content),i.a.createElement("span",{className:"time"},this.formateTime(this.props.info.create_time)))}}]),t}(r.Component)),ae=a(89),ne=a.n(ae),re=function(e){function t(e){var a;return Object(x.a)(this,t),(a=Object(F.a)(this,Object(P.a)(t).call(this,e))).state={content:"",disabled:!0,warning:"\u767b\u5f55\u540e\u624d\u80fd\u804a\u5929\u54e6\uff5e"},a.myRef=i.a.createRef(),a.isLogin=!!ne.a.get("userid"),a}return Object(G.a)(t,e),Object(M.a)(t,[{key:"componentDidMount",value:function(){this.props.handleInit(),this.props.handleRecv(),this.props.handleGetList(),this.isLogin&&this.setState({disabled:!1,warning:"\u6765\u5410\u69fd\u4e0b\u5427\uff5e"})}},{key:"componentDidUpdate",value:function(){this.handleScroll()}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"chat-box"},i.a.createElement("div",{className:"show"},this.props.msgList.map(function(t,a){return t.user===e.props.nickname?i.a.createElement(te,{key:a,mark:"self",info:t}):i.a.createElement(te,{key:a,mark:"other",info:t})}),i.a.createElement("div",{className:"end",ref:this.myRef,style:{height:0,overflow:"hidden"}})),i.a.createElement("div",{className:"input"},i.a.createElement(R.a,{placeholder:this.state.warning,value:this.state.content,onChange:function(t){return e.handleChange(t)},onClick:this.handleScroll.bind(this)}),i.a.createElement(I.a,{type:"primary",disabled:this.state.disabled,onClick:function(){e.setState({content:""}),e.props.handleSend(e.props.nickname,e.state.content)}},"\u53d1\u9001")))}},{key:"handleChange",value:function(e){this.setState({content:e.target.value})}},{key:"handleScroll",value:function(){this.myRef.current.scrollIntoView()}}]),t}(r.Component),ie=Object(d.b)(function(e){return{nickname:e.user.nickname,msgList:e.chat.msgList}},function(e){return{handleInit:function(){e(z())},handleSend:function(t,a){var n;e((n={user:t,content:a},function(e){B.emit("sendMsg",n)}))},handleRecv:function(){e(Q())},handleGetList:function(){e(K())}}})(re),ce=(a(363),a(365),a(178)),oe=(a(368),a(179)),se=(a(385),a(129)),le=a(390),ue=function(e){function t(e){var a;return Object(x.a)(this,t),(a=Object(F.a)(this,Object(P.a)(t).call(this,e))).state={visible:!1},a}return Object(G.a)(t,e),Object(M.a)(t,[{key:"loginOut",value:function(){this.setState({visible:!0,confirmLoading:!1})}},{key:"handleOk",value:function(){var e=this;this.setState({confirmLoading:!0}),ne.a.remove("userid"),this.props.logoutSubmit(),setTimeout(function(){e.setState({visible:!1,confirmLoading:!1}),e.props.history.push("/login")},2e3)}},{key:"handleCancel",value:function(){U.a.error("\u4f60\u5df1\u53d6\u6d88\u9000\u51fa"),this.setState({visible:!1})}},{key:"render",value:function(){var e=this,t=i.a.createElement(se.a,null,i.a.createElement(se.a.Item,null,i.a.createElement("span",{onClick:function(){return e.loginOut()}},"\u9000\u51fa")));return i.a.createElement("span",{className:"btn"},"/chat"===this.props.location.pathname&&this.props.nickname?i.a.createElement(oe.a,{overlay:t},i.a.createElement("span",null,this.props.nickname," ",i.a.createElement(Z.a,{type:"down"}))):"/login"===this.props.location.pathname?i.a.createElement("span",{onClick:function(){return e.props.history.push("/register")}},"\u6ce8\u518c"):i.a.createElement("span",{onClick:function(){return e.props.history.push("/login")}},"\u767b\u5f55"),i.a.createElement(ce.a,{title:"\u63d0\u793a",okText:"\u786e\u5b9a",cancelText:"\u53d6\u6d88",visible:this.state.visible,onOk:this.handleOk.bind(this),confirmLoading:this.state.confirmLoading,onCancel:this.handleCancel.bind(this)},i.a.createElement("p",null,"\u786e\u5b9a\u9000\u51fa\u767b\u5f55\u5417\uff1f")))}}]),t}(r.Component),me=Object(le.a)(Object(d.b)(function(e){return{nickname:e.user.nickname}},function(e){return{logoutSubmit:function(){e({type:E})}}})(ue)),de=n.a.Header,pe=n.a.Footer,he=n.a.Content;console.log("%c\u4f60\u60f3\u770b\u5565?","color:red;font-size:20px"),o.a.render(i.a.createElement(d.a,{store:_},i.a.createElement(s.a,null,i.a.createElement("div",null,i.a.createElement(n.a,null,i.a.createElement(de,null,i.a.createElement("div",{className:"header-content"},i.a.createElement("span",{className:"title"},"\u74f6\u5b50\u7684\u804a\u5929\u5ba4"),i.a.createElement(me,null))),i.a.createElement(he,null,i.a.createElement(l.a,null,i.a.createElement(u.a,{path:"/register",component:Y}),i.a.createElement(u.a,{path:"/login",component:ee}),i.a.createElement(u.a,{path:"/chat",component:ie}),i.a.createElement(m.a,{to:"/chat"}))),i.a.createElement(pe,null,"\u4f5c\u8005\uff1a\u74f6\u5b50"))))),document.getElementById("root"))}},[[181,2,1]]]);
//# sourceMappingURL=main.ce0210b9.chunk.js.map