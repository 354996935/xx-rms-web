/**
 * @param  { string } chunkPath views 文件夹下的页面路径
 * @return { function } 返回 promise<component> 的匿名函数
 */
// 使用这个会导致组件内部的 router 导航守卫无法使用, 慎用
import spinner from '@/components/spinner'
// import reload from '@/vue/components/reload'
import reload from '@/components/network-error'
// import comFunc from './utils/comFunc'

export default chunkPath => {
  const AsyncHandler = () => ({
    component: new Promise((resolve, reject) => {
      let _tryCount = 0
      const importModule = () => {
        // if (comFunc.checkEnv() === 'cordova') {
        //   return resolve(require(`@/views/${chunkPath}`).default)
        // }
        setTimeout(() => {
          let a = import( /* webpackChunkName: "[request]" */ `@/views/${chunkPath}`)
          a.then(rs => {
            resolve(rs)
          }).catch(err => {
            if (_tryCount > 9) {
              reject(err)
            } else {
              _tryCount++
              console.log('[AsyncHandler failed]: ', err)
              importModule()
            }
          })
        }, 1000)
      }
      importModule()
    }),
    loading: spinner,
    error: reload,
    timeout: 10000
  })
  return () =>
    Promise.resolve({
      functional: true,
      render(h, { data, children }) {
        return h(AsyncHandler, data, children)
      }
    })
}
