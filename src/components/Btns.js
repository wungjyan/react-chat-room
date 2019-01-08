import React, { Component } from "react";
import { withRouter } from "react-router-dom";
class Btns extends Component {
  render() {
    return (
      <span className="btn">
        {this.props.location.pathname === "/login" ? (
          <span onClick={() => this.props.history.push("/register")}>注册</span>
        ) : (
          <span onClick={() => this.props.history.push("/login")}>登录</span>
        )}
      </span>
    );
  }
}

export default withRouter(Btns);
