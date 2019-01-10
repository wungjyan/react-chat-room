import React, { Component } from "react";
import { Form, Icon, Input, Button } from "antd";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { login } from "../../store/actionCreator";

class Login extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        this.props.handleLogin(values);
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login-form-wrapper">
        {this.props.redirectTo ? <Redirect to={this.props.redirectTo} /> : null}
        <Form onSubmit={this.handleSubmit}>
          <Form.Item>
            {getFieldDecorator("nickname", {
              rules: [
                { required: true, message: "Please input your username!" }
              ]
            })(
              <Input
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="用户名"
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("password", {
              rules: [
                { required: true, message: "Please input your Password!" }
              ]
            })(
              <Input
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="password"
                placeholder="密码"
              />
            )}
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

Login = Form.create({})(Login);

const mapStateToProps = state => {
  return {
    redirectTo: state.user.redirectTo
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleLogin(values) {
      const { nickname, password } = values;
      dispatch(login({ nickname, password }));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
