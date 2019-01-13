import React, { Component } from "react";
import { connect } from "react-redux";
import { Input, Button, message, Icon, Drawer, Divider } from "antd";
import {
  initData,
  sendMsg,
  recvMsg,
  getMsgLIst,
  loginOut
} from "../../store/actionCreator";
import Msg from "../../components/Msg";
import Cookies from "js-cookie";
class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
      visible: false,
      showInput: true,
      showEm: false
    };
    this.myRef = React.createRef();
    this.isLogin = Cookies.get("userid") ? true : false;
  }
  componentDidMount() {
    this.props.handleInit(); // 获取已登录用户信息
    if (!this.props.msgList.length) {
      this.props.handleRecv(); // 获取用户消息
      this.props.handleGetList(); // 获取消息列表
    }
    this.setState({
      showInput: this.isLogin ? true : false
    });
  }

  componentDidUpdate() {
    this.handleScroll();
  }

  // 打开抽屉
  showDrawer = () => {
    this.setState({
      visible: true
    });
  };

  // 关闭抽屉
  onClose = () => {
    this.setState({
      visible: false
    });
  };

  // 点击退出登录
  handleOut = () => {
    Cookies.remove("userid");
    this.setState({
      showInput: false
    });
    this.props.logoutSubmit();
    message.success("你已退出登录！");
  };

  // 发送消息
  submitSend = () => {
    this.props.handleSend(this.props.nickname, this.state.content);
    this.setState({ content: "", showEm: false });
  };

  // 控制表情显示隐藏
  switchEmoji = () => {
    this.setState({
      showEm: !this.state.showEm
    });
  };

  // 点击表情
  clickEmoji = e => {
    const val = this.state.content + e.target.innerHTML;
    this.setState({
      content: val
    });
  };

  render() {
    const emojis =
      "😃 😃 😀 😁 😂 🤣 😃 😄 😅 😆 😉 😊 😋 😎 😍 😘 😗 😙 😚 🙂 🤗 🤩 🤔 🤨 😐 😑 😶 🙄 😏 😣 😥 😮 🤐 😯 😪 😫 😴 😌 😛 😜 😝 🤤 😒 😓 😔 😕 🙃 🤑 😲 🙁 😖 😞 😟 😤 😢 😭 😦 😧 😨 😩 🤯 😬 😰 😱 😳 🤪 😵 😡 😠 🤬 😷 🤒 🤕 🤢 🤮 🤧 😇 🤠 🤡 🤥 🤫 🤭 🧐 🤓 😈 💪 👈 👉 👆 🖕 👇 🤞 🖖 🤘 🤙 🖐 👌 👍 👎 ✊ 👊 🤛 🤜 🤚 👋 ";
    return (
      <div>
        <div className="chat-box">
          <div className="header">
            <span>瓶子的聊天室</span>
            <Icon onClick={this.showDrawer.bind(this)} type="setting" />
          </div>
          <div
            className="content"
            onClick={() => this.setState({ showEm: false })}
          >
            {this.props.msgList.map((v, i) => {
              return v.user === this.props.nickname ? (
                <Msg key={i} mark="self" info={v} />
              ) : (
                <Msg key={i} mark="other" info={v} />
              );
            })}
            <div
              className="end"
              ref={this.myRef}
              style={{ height: 0, overflow: "hidden" }}
            />
          </div>
          <div className="footer">
            {this.state.showInput ? (
              <div className="input">
                <div
                  className="emoji-box"
                  style={{ display: this.state.showEm ? "block" : "none" }}
                >
                  <div className="emojis">
                    {emojis.split(" ").map((item, idx) => (
                      <span onClick={this.clickEmoji} key={idx}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <Icon
                  type="smile"
                  style={{ fontSize: "20px", marginLeft: "5px" }}
                  onClick={this.switchEmoji}
                />
                <Input
                  placeholder="来吐槽吧～"
                  value={this.state.content}
                  onChange={v => this.handleChange(v)}
                  onClick={this.handleScroll.bind(this)}
                  onPressEnter={this.submitSend}
                />
                <Button type="primary" onClick={this.submitSend}>
                  发送
                </Button>
              </div>
            ) : (
              <div className="go-login">
                <span onClick={() => this.props.history.push("/login")}>
                  登录
                </span>
                才可以聊天室
              </div>
            )}
          </div>
        </div>
        <Drawer
          title=""
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <div>
            <span>当前用户：</span>
            <span>{this.props.nickname ? this.props.nickname : "未登录"}</span>
          </div>
          <Divider />
          <div className="drawer-row">
            <a href="https://github.com/wungjyan/react-chat-room">源码地址</a>
          </div>
          {this.props.nickname ? (
            <div className="drawer-row" onClick={this.handleOut}>
              退出登录
            </div>
          ) : null}
        </Drawer>
      </div>
    );
  }
  handleChange(v) {
    this.setState({
      content: v.target.value
    });
  }
  handleScroll() {
    this.myRef.current.scrollIntoView();
  }
}

const mapStateToProps = state => {
  return {
    nickname: state.user.nickname,
    msgList: state.chat.msgList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleInit() {
      console.log("执行init");
      dispatch(initData());
    },
    handleSend(user, content) {
      console.log("执行Send");
      if (!content) {
        message.error("不能发空消息！");
        return;
      }
      dispatch(sendMsg({ user, content }));
    },
    handleRecv() {
      console.log("执行Recv");
      dispatch(recvMsg());
    },
    handleGetList() {
      console.log("执行GETLIST");
      dispatch(getMsgLIst());
    },
    logoutSubmit() {
      dispatch(loginOut());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat);
