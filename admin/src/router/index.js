import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const routerMap = [
  {
    path: '/login',
    name: 'login',
    meta: {
      title: '登录',
    },
    component: () => import('@/views/login/index'),
  },
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home'),
  }
]

const R = new Router({
  mode: 'hash', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: routerMap,
})
R.beforeEach((to, from, next) => {
  next()
})
export default R
