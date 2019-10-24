import axios from 'axios'
import {Message} from 'element-ui'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded' //设置参数类型 有的是application/json
axios.defaults.baseURL = 'https://blog-server.hunger-valley.com' //设置接口根路径
axios.defaults.withCredentials = true //告知浏览器，对于异步请求也要带上cookie

export default function request(url,type = 'GET',data = {}) { //别处调用这个request时，相当于调用一个Promise对象
  return new Promise((resolve, reject) => {
    let option = {
      url,
      method: type
    }
    if(type.toLowerCase() === 'get'){
      option.params = data
    }else{
      option.data = data
    }
    axios(option).then(res => {
      if(res.data.status === 'ok'){ //此处的ok是注册阶段的接口约定
        resolve(res.data) //如果是ok状态，其他地方使用此promise时可以直接获取到data数据，继续进行then
      }else{
        Message.error(res.data.msg)
        reject(res.data)
      }
    }).catch(err => {
      Message.error('网络异常')
      reject({msg:'网络异常'})
    })
  })
}
