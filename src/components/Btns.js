import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Menu, Dropdown, Icon, Modal, message } from "antd";
import { connect } from "react-redux";
import Cookies from "js-cookie";
import { loginOut } from "../store/actionCreator";
class Btns extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }
  // 点击退出登录
  loginOut() {
    this.setState({
      visible: true,
      confirmLoading: false
    });
  }
  // 确认退出
  handleOk() {
    this.setState({
      confirmLoading: true
    });
    Cookies.remove("userid");
    this.props.logoutSubmit();
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false
      });
      this.props.history.push('/login')
    }, 2000);
  }
  // 取消
  handleCancel() {
    message.error("你己取消退出");
    this.setState({
      visible: false
    });
  }
  render() {
    const menu = (
      <Menu>
        <Menu.Item>
          <span onClick={() => this.loginOut()}>退出</span>
        </Menu.Item>
      </Menu>
    );

    console.log("BTns:", this.props);
    return (
      <span className="btn">
        {this.props.location.pathname === "/chat" && this.props.nickname ? (
          <Dropdown overlay={menu}>
            <span>
              {this.props.nickname} <Icon type="down" />
            </span>
          </Dropdown>
        ) : this.props.location.pathname === "/login" ? (
          <span onClick={() => this.props.history.push("/register")}>注册</span>
        ) : (
          <span onClick={() => this.props.history.push("/login")}>登录</span>
        )}

        <Modal
          title="提示"
          okText="确定"
          cancelText="取消"
          visible={this.state.visible}
          onOk={this.handleOk.bind(this)}
          confirmLoading={this.state.confirmLoading}
          onCancel={this.handleCancel.bind(this)}
        >
          <p>确定退出登录吗？</p>
        </Modal>
      </span>
    );
  }
}

const mapStateToProps = state => {
  return {
    nickname: state.nickname
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logoutSubmit() {
      dispatch(loginOut());
    }
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Btns)
);
