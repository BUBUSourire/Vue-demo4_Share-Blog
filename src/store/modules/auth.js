import auth from "../../api/auth";

const state = {
  user: null,
  isLogin: false
}

const getters = {
  user: state => state.user, //将state中的数据内容直接赋值状态，业务组件可以通过...mapActions获取state中的数据
  isLogin: state => state.isLogin
}

const mutations = {
  setUser(state, payload) {
    state.user = payload.user
  },

  setLogin(state, payload) {
    state.isLogin = payload.isLogin
  }
}

const actions = { //用户登录的相关操作
  //登录
  login({commit}, {username, password}) { //{commit}--默认参数
    return auth.login({username, password}) //此处return，当别处调用login，传入用户名密码，会得到一个promise对象，可以继续进行then操作
      .then(res => {
        commit('setUser', {user: res.data}) //将调用接口返回的数据存到state
        commit('setLogin', {isLogin: true})  //将isLogin的状态存到state
      })
  },

  //注册
  async register({commit}, {username, password}) {
    let res = await auth.register({username, password}) //此处的res相当于promise后.then得到的响应结果
    commit('setUser', {user: res.data})
    commit('setLogin', {isLogin: true})
    return res.data
  },

  //判断用户是否登录
  async checkLogin({commit, state}) {
    //判断state中是否有登录状态，有则返回true
    if (state.isLogin) return true
    //若state中没有，则通过判断用户是否登录,获取响应结果
    let res = await auth.getInfo()
    //从响应结果中获取isLogin状态并保存到state
    commit('setLogin', {isLogin: res.isLogin})
    //如果res中未登录，返回false
    if (!res.isLogin) return false
    //如果res中已登录，设置user保存到state中，并返回true
    commit('setUser', {user: res.data})
    return true
  },

  //注销
  async logout({commit}) {
    await auth.logout()
    commit('setUser', {user: null})
    commit('setLogin', {isLogin: false})
  }


}

export default {
  state,
  getters,
  mutations,
  actions
}
