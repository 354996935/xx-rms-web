import { LOGIN } from '@/api/user'
import comFunc from '@/core/utils/comFunc'
import { get } from '@/vue/plugins/axios'
import { Dialog } from 'vant'

function userInfoHandle(commit, loginRst) {
  let loginRstCode = loginRst.code
  if (loginRstCode === 0) {
    let user = comFunc.safe(loginRst, 'data.user', {})
    commit('SetUserInfo', user)
    return user
  } else {
    Dialog.alert({
      message: '登录失败'
    })
    return -1
  }
}
const actions = {
  async GetUserInfo({
    commit
  }, param = {}) {
    let paramTmp = {}
    param = Object.assign(paramTmp, param)
    let config = param.config
    delete param.config
    const loginRst = await get(LOGIN, param, config)
    return userInfoHandle(commit, loginRst)
  },
}
export default actions