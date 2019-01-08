import React, { Component } from "react";
import "./style.css";
import { Form, Input, Button } from "antd";
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {register} from '../../store/actionCreator'

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmDirty: false
    };
  }
  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(["confirm"], { force: true });
    }
    callback();
  };

  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue("password")) {
      callback("两次输入密码不一致!");
    } else {
      callback();
    }
  };

  handleConfirmBlur = e => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  handleSubmit = e => {
    console.log('点击按钮')
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        this.props.handleRegister(values)
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="form_wrapper">
        {this.props.redirectTo?<Redirect to={this.props.redirectTo}/>:null}
        <Form onSubmit={this.handleSubmit}>
          <Form.Item label="用户名">
            {getFieldDecorator("nickname", {
              rules: [
                {
                  required: true,
                  message: "请输入用户名!"
                }
              ]
            })(<Input type="text" />)}
          </Form.Item>
          <Form.Item label="密码">
            {getFieldDecorator("password", {
              rules: [
                {
                  required: true,
                  message: "请输入密码!"
                },
                {
                  validator: this.validateToNextPassword
                }
              ]
            })(<Input type="password" />)}
          </Form.Item>
          <Form.Item label="确认密码">
            {getFieldDecorator("confirm", {
              rules: [
                {
                  required: true,
                  message: "请确认密码!"
                },
                {
                  validator: this.compareToFirstPassword
                }
              ]
            })(<Input type="password" onBlur={this.handleConfirmBlur} />)}
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              注册
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}
Register = Form.create({})(Register);

const mapStateToProps = (state)=>{
    return {
        redirectTo:state.redirectTo
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        handleRegister(values){
            const {nickname,password} = values
            dispatch(register({nickname,password}))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Register);
