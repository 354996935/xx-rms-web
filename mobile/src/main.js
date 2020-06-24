import Vue from 'vue'
import App from './App.vue'
import router from './vue/router'
import comFunc from '@/core/utils/comFunc'
import '@/core/utils/rem'
import 'vant/lib/index.css'
import axios from '@/vue/plugins/axios'
import store from '@/vue/store'

import {
  Lazyload,
  Icon,
  Cell,
  CellGroup,
  Button,
  Row,
  Col,
  Swipe,
  SwipeItem,
  Tabs,
  Tabbar,
  Tab,
  NavBar,
  Field,
  Uploader,
  Dialog,
  Toast,
  List,
  Tag,
  Checkbox,
  Popup,
  Picker,
  SwitchCell,
  Search
} from 'vant'

Vue.use(Icon)
Vue.use(Cell)
Vue.use(CellGroup)
Vue.use(Button)
Vue.use(Row)
Vue.use(Col)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Tab)
Vue.use(Tabs)
Vue.use(Tabbar)
Vue.use(NavBar)
Vue.use(Field)
Vue.use(Uploader)
Vue.use(Dialog)
Vue.use(Toast)
Vue.use(Toast)
Vue.use(List)
Vue.use(Tag)
Vue.use(Checkbox)
Vue.use(Popup)
Vue.use(Picker)
Vue.use(Search)
Vue.use(SwitchCell)
Vue.use(Lazyload, {
  preLoad: 1.3,
  error: require('@/assets/images/goods_default.png'),
  loading: require('@/assets/images/goods_default.png'),
  attempt: 1,
  listenEvents: ['scroll'],
  lazyComponent: true
})

Vue.use(axios)

Vue.config.productionTip = false

Vue.prototype.f = comFunc

window.Vue = new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
