import Vue from 'vue'
import Router from 'vue-router'
import home from './home'
import user from './user'
import book from './book'

import store from '../store'

Vue.use(Router)

const RouterModel = new Router({
  routes: [
    ...home,
    ...user,
    ...book
  ]
})

RouterModel.beforeEach((to, from, next) => {
  let userInfo = store.state.UserInfo
  if (!userInfo.tid && to.name != 'login') {
    let redirect = to.fullPath
    next('/login?redirect=' + encodeURIComponent(redirect))
    return
  }
  if (to.fullPath.indexOf('redirect') >= 0 && to.name != 'home' && to.name != 'login') {
    let redirect = to.fullPath
    next(decodeURIComponent(redirect))
    return
  }
  next()
})

export default RouterModel