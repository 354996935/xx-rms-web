/**
 * 读取./modules下的所有js文件并注册模块
 */
const requireModule = require.context('./modules', false, /\.js$/)
const modules = {}

requireModule.keys().forEach(fileName => {
  const moduleName = fileName.replace(/(\.\/|\.js)/g, '')
  modules[moduleName] = {
    // namespaced: true,
    ...requireModule(fileName).default
  }
})

export default modules