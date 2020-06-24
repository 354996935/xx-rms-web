const path = require('path')
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')
const BASE_URL = require('./config/dev.base.url')

function resolve(dir = '') {
  return path.join(__dirname, './src', dir)
}
module.exports = {
  productionSourceMap: false,
  devServer: {
    host: '0.0.0.0',
    disableHostCheck: true,
    proxy: {
      '/api': {
        target: BASE_URL.API_URL,
        changeOrigin: true
      },
      '/pub': {
        target: BASE_URL.API_URL,
        changeOrigin: true
      },
      '/usr': {
        target: BASE_URL.API_URL,
        changeOrigin: true
      },
      '/upload': {
        target: BASE_URL.API_URL,
        changeOrigin: true
      }
    },
    progress: false
  },
  chainWebpack: config => {
    config.plugins.delete('prefetch')
    config.plugins.delete('preload')
  },
  configureWebpack: {
    plugins: [new LodashModuleReplacementPlugin()],
    resolve: {
      alias: {
        core: resolve('core')
      }
    },
    optimization: {
      runtimeChunk: {
        name: entrypoint => `runtime~${entrypoint.name}`
      },
      splitChunks: {
        minChunks: 2,
        minSize: 10000,
        maxAsyncRequests: 30,
        maxInitialRequests: 20,
        name: false
      },
      // minimize: false
    }
  },
  css: {
    loaderOptions: {
      // less: {
      //   modifyVars: {
      //     red: '#3a9dfc',
      //     blue: '#3a9dfc',
      //     orange: '#f08d49',
      //     green: '#3a9dfc',
      //     'text-color': '#111'
      //   }
      // },
      // sass: {
      //   data:
      //     '@import "@/assets/scss/_var.scss";@import "@/assets/scss/_mixin.scss";'
      // }
    }
  },
  // baseUrl: '/'
};
