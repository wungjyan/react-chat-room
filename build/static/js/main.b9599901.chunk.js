(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{164:function(e,t,a){e.exports=a(351)},227:function(e,t){},347:function(e,t,a){},349:function(e,t,a){},351:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(9),o=a.n(s),c=a(353),i=a(355),l=a(356),u=a(354),m=a(34),d=a(37),p=a(54),h="REGISTER_SUCCESS",f="LOGIN_SUCCESS",E="ERROR",g="INIT_DATA",v="LOGIN_OUT",b="MSG_RECV",w="MSG_LIST",y={redirectTo:"",nickname:"",msg:""};var k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(p.a)({},e,t.data,{redirectTo:"/login"});case f:return Object(p.a)({},e,t.data,{redirectTo:"/chat"});case g:return Object(p.a)({},e,t.data);case v:return Object(p.a)({},y);case E:return Object(p.a)({},e,{msg:t.data});default:return e}},O=a(113),S={msgList:[]};var j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return{msgList:[].concat(Object(O.a)(e.msgList),[t.data])};case w:return{msgList:Object(O.a)(t.data)};default:return e}},T=Object(d.c)({user:k,chat:j}),N=a(152),C=(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):d.d)(Object(d.a)(N.a)),I=Object(d.e)(T,C),L=(a(55),a(24)),D=(a(150),a(18)),_=(a(79),a(25)),R=a(30),M=a(31),x=a(35),P=a(32),F=a(36),G=(a(116),a(39)),U=a(59),q=a.n(U),V=a(153),A=a.n(V)()("http://localhost:9000");function B(e){return{type:E,data:e}}var H=function(e){var t=e.nickname,a=e.password;return function(e){q.a.post("/user/register",{nickname:t,password:a}).then(function(a){200===a.status&&0===a.data.code?(G.a.success("\u6ce8\u518c\u6210\u529f"),e({type:h,data:{nickname:t}})):(G.a.error(a.data.msg),e(B(a.data.msg)))})}},X=function(e){var t=e.nickname,a=e.password;return function(e){q.a.post("/user/login",{nickname:t,password:a}).then(function(a){200===a.status&&0===a.data.code?(G.a.success("\u767b\u5f55\u6210\u529f"),e({type:f,data:{nickname:t}})):(G.a.error(a.data.msg),e(B(a.data.msg)))})}},J=function(){return function(e){q.a.get("/user/info").then(function(t){var a;200===t.status&&0===t.data.code&&e((a=t.data.data,{type:g,data:a}))})}},z=function(){return function(e){q.a.get("/user/getmsglist").then(function(t){var a;200===t.status&&0===t.data.code&&e((a=t.data.data,{type:w,data:a}))})}},K=function(){return function(e){A.on("recvMsg",function(t){e({type:b,data:t})})}},Q=function(e){function t(e){var a;return Object(R.a)(this,t),(a=Object(x.a)(this,Object(P.a)(t).call(this,e))).validateToNextPassword=function(e,t,n){var r=a.props.form;t&&a.state.confirmDirty&&r.validateFields(["confirm"],{force:!0}),n()},a.compareToFirstPassword=function(e,t,n){var r=a.props.form;t&&t!==r.getFieldValue("password")?n("\u4e24\u6b21\u8f93\u5165\u5bc6\u7801\u4e0d\u4e00\u81f4!"):n()},a.handleConfirmBlur=function(e){var t=e.target.value;a.setState({confirmDirty:a.state.confirmDirty||!!t})},a.handleSubmit=function(e){console.log("\u70b9\u51fb\u6309\u94ae"),e.preventDefault(),a.props.form.validateFieldsAndScroll(function(e,t){e||a.props.handleRegister(t)})},a.state={confirmDirty:!1},a}return Object(F.a)(t,e),Object(M.a)(t,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator;return r.a.createElement("div",{className:"register-form-wrapper"},this.props.redirectTo?r.a.createElement(u.a,{to:this.props.redirectTo}):null,r.a.createElement(D.a,{onSubmit:this.handleSubmit},r.a.createElement(D.a.Item,{label:"\u7528\u6237\u540d"},e("nickname",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u7528\u6237\u540d!"}]})(r.a.createElement(_.a,{type:"text"}))),r.a.createElement(D.a.Item,{label:"\u5bc6\u7801"},e("password",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u5bc6\u7801!"},{validator:this.validateToNextPassword}]})(r.a.createElement(_.a,{type:"password"}))),r.a.createElement(D.a.Item,{label:"\u786e\u8ba4\u5bc6\u7801"},e("confirm",{rules:[{required:!0,message:"\u8bf7\u786e\u8ba4\u5bc6\u7801!"},{validator:this.compareToFirstPassword}]})(r.a.createElement(_.a,{type:"password",onBlur:this.handleConfirmBlur}))),r.a.createElement(D.a.Item,null,r.a.createElement(L.a,{type:"primary",htmlType:"submit"},"\u6ce8\u518c"))))}}]),t}(n.Component);Q=D.a.create({})(Q);var W=Object(m.b)(function(e){return{redirectTo:e.user.redirectTo}},function(e){return{handleRegister:function(t){var a=t.nickname,n=t.password;e(H({nickname:a,password:n}))}}})(Q),Y=(a(149),a(6)),Z=a(352),$=function(e){function t(){var e,a;Object(R.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(x.a)(this,(e=Object(P.a)(t)).call.apply(e,[this].concat(r)))).handleSubmit=function(e){e.preventDefault(),a.props.form.validateFields(function(e,t){e||a.props.handleLogin(t)})},a}return Object(F.a)(t,e),Object(M.a)(t,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator;return r.a.createElement("div",{className:"login-form-wrapper"},this.props.redirectTo?r.a.createElement(u.a,{to:this.props.redirectTo}):null,r.a.createElement(D.a,{onSubmit:this.handleSubmit},r.a.createElement(D.a.Item,null,e("nickname",{rules:[{required:!0,message:"Please input your username!"}]})(r.a.createElement(_.a,{prefix:r.a.createElement(Y.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"\u7528\u6237\u540d"}))),r.a.createElement(D.a.Item,null,e("password",{rules:[{required:!0,message:"Please input your Password!"}]})(r.a.createElement(_.a,{prefix:r.a.createElement(Y.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"\u5bc6\u7801"}))),r.a.createElement(D.a.Item,null,r.a.createElement(L.a,{type:"primary",htmlType:"submit",className:"login-form-button"},"\u767b\u5f55"),"\u6216 ",r.a.createElement(Z.a,{to:"/register"},"\u6ce8\u518c"))))}}]),t}(n.Component);$=D.a.create({})($);var ee=Object(m.b)(function(e){return{redirectTo:e.user.redirectTo}},function(e){return{handleLogin:function(t){var a=t.nickname,n=t.password;e(X({nickname:a,password:n}))}}})($),te=(a(341),a(162)),ae=(a(344),a(161)),ne=(a(347),function(e){function t(){return Object(R.a)(this,t),Object(x.a)(this,Object(P.a)(t).apply(this,arguments))}return Object(F.a)(t,e),Object(M.a)(t,[{key:"formateTime",value:function(e){var t=new Date(e),a=t.getDate(),n=t.getHours()<10?"0".concat(t.getHours()):"".concat(t.getHours()),r=t.getMinutes()<10?"0".concat(t.getMinutes()):"".concat(t.getMinutes());return(new Date).getDate()>a?"\u6628\u5929".concat(n,":").concat(r):"".concat(n,":").concat(r)}},{key:"render",value:function(){return r.a.createElement("div",{className:"self"===this.props.mark?"msg-item self":"msg-item"},r.a.createElement("span",{className:"name"},this.props.info.user),r.a.createElement("span",{className:"msg"},this.props.info.content),r.a.createElement("span",{className:"time"},this.formateTime(this.props.info.create_time)))}}]),t}(n.Component)),re=a(112),se=a.n(re),oe=function(e){function t(e){var a;return Object(R.a)(this,t),(a=Object(x.a)(this,Object(P.a)(t).call(this,e))).showDrawer=function(){a.setState({visible:!0})},a.onClose=function(){a.setState({visible:!1})},a.handleOut=function(){se.a.remove("userid"),a.setState({showInput:!1}),a.props.logoutSubmit(),G.a.success("\u4f60\u5df2\u9000\u51fa\u767b\u5f55\uff01")},a.submitSend=function(){a.props.handleSend(a.props.nickname,a.state.content),a.setState({content:"",showEm:!1})},a.switchEmoji=function(){a.setState({showEm:!a.state.showEm})},a.clickEmoji=function(e){var t=a.state.content+e.target.innerHTML;a.setState({content:t})},a.state={content:"",visible:!1,showInput:!0,showEm:!1},a.myRef=r.a.createRef(),a.isLogin=!!se.a.get("userid"),a}return Object(F.a)(t,e),Object(M.a)(t,[{key:"componentDidMount",value:function(){this.props.handleInit(),this.props.msgList.length||(this.props.handleRecv(),this.props.handleGetList()),this.setState({showInput:!!this.isLogin})}},{key:"componentDidUpdate",value:function(){this.handleScroll()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"chat-box"},r.a.createElement("div",{className:"header"},r.a.createElement("span",null,"\u74f6\u5b50\u7684\u804a\u5929\u5ba4"),r.a.createElement(Y.a,{onClick:this.showDrawer.bind(this),type:"setting"})),r.a.createElement("div",{className:"content",onClick:function(){return e.setState({showEm:!1})}},this.props.msgList.map(function(t,a){return t.user===e.props.nickname?r.a.createElement(ne,{key:a,mark:"self",info:t}):r.a.createElement(ne,{key:a,mark:"other",info:t})}),r.a.createElement("div",{className:"end",ref:this.myRef,style:{height:0,overflow:"hidden"}})),r.a.createElement("div",{className:"footer"},this.state.showInput?r.a.createElement("div",{className:"input"},r.a.createElement("div",{className:"emoji-box",style:{display:this.state.showEm?"block":"none"}},r.a.createElement("div",{className:"emojis"},"\ud83d\ude03 \ud83d\ude03 \ud83d\ude00 \ud83d\ude01 \ud83d\ude02 \ud83e\udd23 \ud83d\ude03 \ud83d\ude04 \ud83d\ude05 \ud83d\ude06 \ud83d\ude09 \ud83d\ude0a \ud83d\ude0b \ud83d\ude0e \ud83d\ude0d \ud83d\ude18 \ud83d\ude17 \ud83d\ude19 \ud83d\ude1a \ud83d\ude42 \ud83e\udd17 \ud83e\udd29 \ud83e\udd14 \ud83e\udd28 \ud83d\ude10 \ud83d\ude11 \ud83d\ude36 \ud83d\ude44 \ud83d\ude0f \ud83d\ude23 \ud83d\ude25 \ud83d\ude2e \ud83e\udd10 \ud83d\ude2f \ud83d\ude2a \ud83d\ude2b \ud83d\ude34 \ud83d\ude0c \ud83d\ude1b \ud83d\ude1c \ud83d\ude1d \ud83e\udd24 \ud83d\ude12 \ud83d\ude13 \ud83d\ude14 \ud83d\ude15 \ud83d\ude43 \ud83e\udd11 \ud83d\ude32 \ud83d\ude41 \ud83d\ude16 \ud83d\ude1e \ud83d\ude1f \ud83d\ude24 \ud83d\ude22 \ud83d\ude2d \ud83d\ude26 \ud83d\ude27 \ud83d\ude28 \ud83d\ude29 \ud83e\udd2f \ud83d\ude2c \ud83d\ude30 \ud83d\ude31 \ud83d\ude33 \ud83e\udd2a \ud83d\ude35 \ud83d\ude21 \ud83d\ude20 \ud83e\udd2c \ud83d\ude37 \ud83e\udd12 \ud83e\udd15 \ud83e\udd22 \ud83e\udd2e \ud83e\udd27 \ud83d\ude07 \ud83e\udd20 \ud83e\udd21 \ud83e\udd25 \ud83e\udd2b \ud83e\udd2d \ud83e\uddd0 \ud83e\udd13 \ud83d\ude08 \ud83d\udcaa \ud83d\udc48 \ud83d\udc49 \ud83d\udc46 \ud83d\udd95 \ud83d\udc47 \ud83e\udd1e \ud83d\udd96 \ud83e\udd18 \ud83e\udd19 \ud83d\udd90 \ud83d\udc4c \ud83d\udc4d \ud83d\udc4e \u270a \ud83d\udc4a \ud83e\udd1b \ud83e\udd1c \ud83e\udd1a \ud83d\udc4b ".split(" ").map(function(t,a){return r.a.createElement("span",{onClick:e.clickEmoji,key:a},t)}))),r.a.createElement(Y.a,{type:"smile",style:{fontSize:"20px",marginLeft:"5px"},onClick:this.switchEmoji}),r.a.createElement(_.a,{placeholder:"\u6765\u5410\u69fd\u5427\uff5e",value:this.state.content,onChange:function(t){return e.handleChange(t)},onClick:this.handleScroll.bind(this),onPressEnter:this.submitSend}),r.a.createElement(L.a,{type:"primary",onClick:this.submitSend},"\u53d1\u9001")):r.a.createElement("div",{className:"go-login"},r.a.createElement("span",{onClick:function(){return e.props.history.push("/login")}},"\u767b\u5f55"),"\u624d\u53ef\u4ee5\u804a\u5929\u5ba4"))),r.a.createElement(te.a,{title:"",placement:"right",closable:!1,onClose:this.onClose,visible:this.state.visible},r.a.createElement("div",null,r.a.createElement("span",null,"\u5f53\u524d\u7528\u6237\uff1a"),r.a.createElement("span",null,this.props.nickname?this.props.nickname:"\u672a\u767b\u5f55")),r.a.createElement(ae.a,null),r.a.createElement("div",{className:"drawer-row"},r.a.createElement("a",{href:"https://github.com/wungjyan/react-chat-room"},"\u6e90\u7801\u5730\u5740")),this.props.nickname?r.a.createElement("div",{className:"drawer-row",onClick:this.handleOut},"\u9000\u51fa\u767b\u5f55"):null))}},{key:"handleChange",value:function(e){this.setState({content:e.target.value})}},{key:"handleScroll",value:function(){this.myRef.current.scrollIntoView()}}]),t}(n.Component),ce=Object(m.b)(function(e){return{nickname:e.user.nickname,msgList:e.chat.msgList}},function(e){return{handleInit:function(){console.log("\u6267\u884cinit"),e(J())},handleSend:function(t,a){var n;console.log("\u6267\u884cSend"),a?e((n={user:t,content:a},function(e){A.emit("sendMsg",n)})):G.a.error("\u4e0d\u80fd\u53d1\u7a7a\u6d88\u606f\uff01")},handleRecv:function(){console.log("\u6267\u884cRecv"),e(K())},handleGetList:function(){console.log("\u6267\u884cGETLIST"),e(z())},logoutSubmit:function(){e({type:v})}}})(oe);a(349);o.a.render(r.a.createElement(m.a,{store:I},r.a.createElement("div",{className:"main"},r.a.createElement(c.a,null,r.a.createElement(i.a,null,r.a.createElement(l.a,{path:"/register",component:W}),r.a.createElement(l.a,{path:"/login",component:ee}),r.a.createElement(l.a,{path:"/chat",component:ce}),r.a.createElement(u.a,{to:"/chat"}))))),document.getElementById("root"))}},[[164,2,1]]]);
//# sourceMappingURL=main.b9599901.chunk.js.map