let config = {
  BASE_API: 'https://kx-v010.dev.resfair.com/',
  IMG_URL: 'https://kx-v010.dev.resfair.com//upload/',
}

if (typeof GLOBAL_CONFIG !== 'undefined') {
  console.log('Use GLOBAL_CONFIG: ', GLOBAL_CONFIG)
  config = GLOBAL_CONFIG
}

let fullConfig = {
  production: config,
  development: Object.assign(config, { BASE_API: '/' })
}
export default fullConfig[process.env.NODE_ENV]
