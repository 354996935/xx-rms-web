const comFunc = {
  // 设置标题
  setTitle(argTitle) {
    document.getElementsByTagName('title')[0].innerText = argTitle
  },
  /**
   * 数据安全访问
   * @param  {object|Array} argData  [原始数据]
   * @param  {string} argCheck [要返回的数据，用'.'连接，数组用'.+数字表示']
   * @param  {*} [argValue] [如果数据有误，返回的值，选填]
   */
  safe: (argData, argCheck, argValue) => {
    var temKey = argCheck.toString().split('.'),
      temLen = temKey.length
    if (!argData) {
      return argValue
    }
    if (temLen > 1) {
      for (var i = 0; i < temLen - 1; i++) {
        if (typeof argData[temKey[i]] !== 'object') {
          return argValue
        }
        argData = argData[temKey[i]] || {}
      }
    }
    if (typeof argValue === 'undefined') {
      return argData[temKey[temLen - 1]]
    }
    return argData[temKey[temLen - 1]] || argValue
  },
}
export default comFunc
