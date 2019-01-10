import { MSG_RECV, MSG_LIST } from "../actionTypes";
const initState = {
  msgList: []
};

function reducer(state = initState, action) {
  switch (action.type) {
    case MSG_RECV:
      return { ...state, msgList: [...state.msgList, action.data] };
    case MSG_LIST:
      return { ...state, msgList: [...action.data] };
    default:
      return state;
  }
}

export default reducer;
