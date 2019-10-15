import Vue from 'vue'
import Router from 'vue-router'
// import create from "../pages/Create/create.vue"
// import detail from "../pages/Detail/detail.vue"
// import edit from "../pages/Edit/edit.vue"
// import hpage from "../pages/Hpage/hpage.vue"
// import login from "../pages/Login/login.vue"
// import my from "../pages/My/my.vue"
// import register from "../pages/Register/register.vue"
// import user from "../pages/User/user.vue";
import store from "../store/store";


Vue.use(Router)

/*const router = new Router({
  routes: [
    {
      path: '/',
      name: 'hpage',
      component: hpage
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/create',
      name: 'create',
      component: create,
      meta: {requiresAuth: true}
    },
    {
      path: '/detail/:blogId',
      name: 'detail',
      component: detail,
      meta: {requiresAuth: true}
    },
    {
      path: '/edit/:blogId',
      name: 'edit',
      component: edit,
      meta: {requiresAuth: true}
    },
    {
      path: '/my',
      name: 'my',
      component: my,
      meta: {requiresAuth: true}
    },
    {
      path: '/user/:userId',
      name: 'user',
      component: user
    },
  ]
})

 */

const router =  new Router({
  routes: [
    {
      path: '/',
      component: () => import('@/pages/Hpage/hpage.vue')
    },
    {
      path: '/login',
      component: () => import('@/pages/login/login.vue')
    },
    {
      path: '/detail/:blogId',
      component: () => import('@/pages/detail/detail.vue')
    },
    {
      path: '/edit/:blogId',
      component: () => import('@/pages/edit/edit.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/create',
      component: () => import('@/pages/create/create.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/user/:userId',
      component: () => import('@/pages/user/user.vue')
    },
    {
      path: '/my',
      component: () => import('@/pages/my/my.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/register',
      component: () => import('@/pages/register/register.vue')
    }
  ]
})

//meta：需要是登录状态的路由添加meta属性

//路由元信息：判断用户是否处于登录状态，符合含有meta属性的则给一个登录状态

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
