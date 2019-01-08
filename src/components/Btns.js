import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
class Btns extends Component {
  render() {
    console.log("BTns:", this.props);
    return (
      <span className="btn">
        {this.props.location.pathname === "/chat" && this.props.nickname ? (
          <span>{this.props.nickname}</span>
        ) : this.props.location.pathname === "/login" ? (
          <span onClick={() => this.props.history.push("/register")}>注册</span>
        ) : (
          <span onClick={() => this.props.history.push("/login")}>登录</span>
        )}
      </span>
    );
  }
}

const mapStateToProps = state => {
  return {
    nickname: state.nickname
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    null
  )(Btns)
);
