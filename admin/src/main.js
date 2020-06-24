import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'normalize.css/normalize.css'
import '@/assets/scss/index.scss' // global css
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from '@/plugins/axios'
import comFunc from '@/core/utils/comFunc'
import store from './store'

Vue.use(ElementUI)
Vue.use(axios)

Vue.config.productionTip = false
Vue.prototype.f = comFunc

window.Vue = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
}).$mount('#app')
