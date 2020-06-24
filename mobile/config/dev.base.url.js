
const findPara = (param) => {
  let result = 'wap-tms'
  for (let i = 0; i < process.argv.length; i++) {
    let argv = process.argv[i]
    if (argv.indexOf('--env.' + param) !== -1) {
      result = argv.split('=')[1]
      break
    }
  }
  return result
}

module.exports = {
  API_URL: `https://kx-${findPara('branch')}.dev.resfair.com/`,
  IMG_URL: 'https://kx-v010.dev.resfair.com/upload/'
}
