import {
  REGISTER_SUCCESS,
  LOGIN_SUCCESS,
  INIT_DATA,
  LOGIN_OUT,
  ERROR
} from "./actionTypes";

const initState = {
  redirectTo: "", // 路由跳转控制
  nickname: "",
  msg: ""
};

function reducer(state = initState, action) {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return { ...state, ...action.data, redirectTo: "/login" };
    case LOGIN_SUCCESS:
      return { ...state, ...action.data, redirectTo: "/chat" };
    case INIT_DATA:
      return { ...state, ...action.data };
    case LOGIN_OUT:
      return { ...initState};
    case ERROR:
      return { ...state, msg: action.data };
    default:
      return state;
  }
}

export default reducer;
