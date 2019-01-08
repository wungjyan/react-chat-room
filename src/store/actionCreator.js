import axios from "axios";
import {
  REGISTER_SUCCESS,
  LOGIN_SUCCESS,
  INIT_DATA,
  LOGIN_OUT,
  ERROR
} from "./actionTypes";
import { message } from "antd";

function getRegisterAction(obj) {
  return { type: REGISTER_SUCCESS, data: obj };
}
function getLoginAction(obj) {
  return { type: LOGIN_SUCCESS, data: obj };
}
function getLoadAction(obj) {
  return { type: INIT_DATA, data: obj };
}
function errMsg(msg) {
  return { type: ERROR, data: msg };
}

// 注册
export const register = data => {
  const { nickname, password } = data;
  return dispatch => {
    axios.post("/user/register", { nickname, password }).then(res => {
      if (res.status === 200 && res.data.code === 0) {
        message.success("注册成功");
        dispatch(getRegisterAction({ nickname }));
      } else {
        message.error(res.data.msg);
        dispatch(errMsg(res.data.msg));
      }
    });
  };
};

// 登录
export const login = data => {
  const { nickname, password } = data;
  return dispatch => {
    axios.post("/user/login", { nickname, password }).then(res => {
      if (res.status === 200 && res.data.code === 0) {
        message.success("登录成功");
        dispatch(getLoginAction({ nickname }));
      } else {
        message.error(res.data.msg);
        dispatch(errMsg(res.data.msg));
      }
    });
  };
};

// 退出登录
export const loginOut = () => {
  return { type: LOGIN_OUT };
};

// 初始化获取用户数据
export const initData = () => {
  return dispatch => {
    axios.get("/user/info").then(res => {
      if (res.status === 200 && res.data.code === 0) {
        dispatch(getLoadAction(res.data.data));
      }
    });
  };
};
