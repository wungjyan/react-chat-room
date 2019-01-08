import axios from 'axios';
import {REGISTER_SUCCESS,ERROR} from './actionTypes';
import {message} from 'antd';

function getRegisterAction(obj){
    return {type:REGISTER_SUCCESS,data:obj}
}
function errMsg(msg){
    return {type:ERROR,data:msg}
}
export const register = (data)=>{
    const {nickname,password} = data
    return dispatch=>{
        axios.post('/user/register',{nickname,password})
        .then(res=>{
            if(res.status === 200 && res.data.code === 0){
                message.success('注册成功');
                dispatch(getRegisterAction({nickname}))
            }else {
                message.error(res.data.msg)
                dispatch(errMsg(res.data.msg))
            }
        })
    }
}