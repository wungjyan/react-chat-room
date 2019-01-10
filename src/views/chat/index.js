import React, { Component } from "react";
import { connect } from "react-redux";
import { Input, Button } from "antd";
import {
  initData,
  sendMsg,
  recvMsg,
  getMsgLIst
} from "../../store/actionCreator";
import Msg from "../../components/Msg";
class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ""
    };
    this.myRef = React.createRef();
  }
  componentDidMount() {
    this.props.handleInit(); // 获取已登录用户信息
    this.props.handleRecv(); // 获取用户消息
    this.props.handleGetList(); // 获取消息列表
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
            placeholder="来吐槽下吧～"
            value={this.state.content}
            onChange={v => this.handleChange(v)}
            onClick={this.handleScroll.bind(this)}
          />
          <Button
            type="primary"
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
      dispatch(initData());
    },
    handleSend(user, content) {
      dispatch(sendMsg({ user, content }));
    },
    handleRecv() {
      dispatch(recvMsg());
    },
    handleGetList() {
      dispatch(getMsgLIst());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat);
