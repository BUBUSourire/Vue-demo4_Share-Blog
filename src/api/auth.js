//用户相关api封装
//原来的写法：request('/auth/login','post',{username:'bubu',password:'111111'}).then(res=>{console.log(res)})
//封装后的写法：auth.login({username:'bubu',password:'111111'}).then(res=>{console.log(res)})

import request from "../helper/custom-axios";

const URL = {
  REGISTER:'/auth/register',
  LOGIN:'/auth/login',
  LOGOUT:'/auth/logout',
  GET_INFO:'/auth'
}

export default {
  register({username,password}) {
    return request(URL.REGISTER, 'POST', {username, password})
  },
  login({username,password}){
    return request(URL.LOGIN,'POST',{username,password})
  },
  logout(){
    return request(URL.LOGOUT)
  },
  getInfo(){
    return request(URL.GET_INFO)
  }
}
