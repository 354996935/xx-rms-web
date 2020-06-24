import axios from 'axios'
import promiseFinally from 'promise.prototype.finally'
import qs from 'qs'
import { Message } from 'element-ui'
promiseFinally.shim();

const instance = axios.create({
  timeout: 10000,
  baseURL: GLOBAL_CONFIG.BASE_API,
  withCredentials: true,// 允许携带cookie 
  crossDomain: true,
})

instance.interceptors.request.use(
  config => {
    if ((config.method === 'post' || config.method === 'put') && config.headers['Content-Type'] === 'application/x-www-form-urlencoded') {
      config.data = qs.stringify(config.data)
    }
    return config
  },
  err => Promise.reject(err)
)

instance.interceptors.response.use(
  res => {
    if (res.data.code) {
      switch (res.data.code) {
        case 422:
          var flag = Array.isArray(res.data.data) && res.data.data.length
          Message({
            type: 'error',
            message: flag ? res.data.data[0].message : res.data.message
          })
          break
        case 401:
          location.href = location.origin + '/#/login'
          break
        case 404:
          break
        default:
          console.log('[debug]::axios res.data.code => ', res.data.code)
          break
      }
      return Promise.reject(res)
    }
    return res.data
  },
  error => {
    let configTmp = error.config
    configTmp.noLoading = true
    if (configTmp.method === 'get') {
      var backoff = new Promise(function (resolve, reject) {
        if (error.config.restartTimes > 10 || (error.config.noRepeat && error.config.restartTimes > 3)) {
          reject({ reason: 'NETWORKERR' })
          return
        } else {
          error.config.restartTimes = (error.config.restartTimes || 0) + 1
        }
        setTimeout(function () {
          resolve();
        }, error.config.timeout || 5000);
      });
      return backoff.then(function () {
        return instance(error.config)
      }).catch(err => {
        return Promise.reject(err)
      });
    } else {
      return Promise.reject(error)
    }
  }
)

const post = (url, data, config = {}) => instance.post(url, data, config)

const put = (url, data, config = {}) => instance.put(url, data, config)

const get = (url, params, config = {}) =>
  instance.get(url, {
    params,
    ...config
  })

const deleteMethod = (url, config = {}) =>
  instance({
    url,
    method: 'delete',
    ...config
  })

// store.$reqGet = get
// store.$reqPost = post
// store.$reqCache = reqCache
export { get, post }
export default {
  install(Vue) {
    Object.defineProperties(Vue.prototype, {
      $reqGet: {
        value: get
      },
      $reqPost: {
        value: post
      },
      $reqPut: {
        value: put
      },
      $reqDel: {
        value: deleteMethod
      },
    })
  }
}