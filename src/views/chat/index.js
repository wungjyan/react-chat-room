import React, { Component } from "react";
import { connect } from "react-redux";
import { Input, Button, message } from "antd";
import {
  initData,
  sendMsg,
  recvMsg,
  getMsgLIst
} from "../../store/actionCreator";
import Msg from "../../components/Msg";
import Cookies from "js-cookie";
class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
      disabled: true,
      warning: "登录后才能聊天哦～"
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

    if (this.isLogin) {
      this.setState({
        disabled: false,
        warning: "来吐槽下吧～"
      });
    }
  }

  componentDidUpdate() {
    this.handleScroll();
  }

  render() {
    return (
      <div className="chat-box">
        <div className="show">
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
        <div className="input">
          <Input
            placeholder={this.state.warning}
            value={this.state.content}
            onChange={v => this.handleChange(v)}
            onClick={this.handleScroll.bind(this)}
          />
          <Button
            type="primary"
            disabled={this.state.disabled}
            onClick={() => {
              this.setState({ content: "" });
              this.props.handleSend(this.props.nickname, this.state.content);
            }}
          >
            发送
          </Button>
        </div>
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
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat);
