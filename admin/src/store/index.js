import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'
import modules from './modules'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

// 引入vuex-persistedstate，将vuex的数据持久化到本地
export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
  modules,
  plugins: [
    createPersistedState({
      storage: {
        getItem: key => {
          return window.localStorage.getItem(key)
        },
        setItem: (key, value) => {
          return window.localStorage.setItem(key, value)
        },
        removeItem: () => { }
      }
    })
  ]
})
