import Vue from 'vue'
import Router from 'vue-router'
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import User from "../Pages/User";
import Edit from "../Pages/Edit";
import Create from "../Pages/Create";
import My from "../Pages/My";
import Detail from "../Pages/Detail";
import Index from "../Pages/Index";

import store from "../store";

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: () => import('../Pages/Index.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../Pages/Login.vue')
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('../Pages/Register.vue')
    },
    {
      path: '/create',
      name: 'Create',
      component: () => import('../Pages/Create.vue'),
      meta: {requiresAuth: true} //路由元信息，只有登录状态是true才能进入此路由
    },
    {
      path: '/my',
      name: 'My',
      component: () => import('../Pages/My.vue'),
      meta: {requiresAuth: true}
    },
    {
      path: '/detail/:blogId',
      name: 'Detail',
      component: () => import('../Pages/Detail.vue'),
    },
    {
      path: '/user/:userId',
      name: 'User',
      component: () => import('../Pages/User.vue'),
    },
    {
      path: '/edit/:blogId',
      name: 'Edit',
      component: () => import('../Pages/Edit.vue'),
      meta: {requiresAuth: true}
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    store.dispatch('checkLogin').then(isLogin => {
      if (!isLogin) {
        next({
          path: '/login',
          query: {redirect: to.fullPath}
        })
      } else {
        next()
      }
    })
  } else {
    next() // 确保一定要调用 next()
  }
})

export default router
