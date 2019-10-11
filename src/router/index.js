import Vue from 'vue'
import Router from 'vue-router'
import create from "../pages/Create/create.vue"
import detail from "../pages/Detail/detail.vue"
import edit from "../pages/Edit/edit.vue"
import hpage from "../pages/Hpage/hpage.vue"
import login from "../pages/Login/login.vue"
import my from "../pages/My/my.vue"
import register from "../pages/Register/register.vue"
import user from "../pages/User/user.vue";


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'hpage',
      component: hpage
    },
    {
      path: '/create',
      name: 'create',
      component: create
    },
    {
      path: '/detail',
      name: 'detail',
      component: detail
    },
    {
      path: '/edit',
      name: 'edit',
      component: edit
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/my',
      name: 'my',
      component: my
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/user',
      name: 'user',
      component: user
    },


  ]
})
