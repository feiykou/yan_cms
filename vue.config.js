const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  lintOnSave: false,
  productionSourceMap: false,
  // assetsDir: 'static',
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('lin', resolve('src/lin'))
      .set('assets', resolve('src/assets'))
    config.module
      .rule('md')
      .test(/\.md$/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use("vue-markdown-loader")
      .loader('vue-markdown-loader/lib/markdown-compiler')     
  },
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.json', '.vue', '.scss', '.html'],
    },
  },
  css: {
    loaderOptions: {
      sass: {
        data: '@import "@/assets/styles/share.scss";',
      },
    },
  },
  devServer: {
    host: "0.0.0.0",
    port: 8080,
    proxy: {
      '^/v1|^/cms|^/cloud': {
        target: 'http://api.szfxws.com',
        ws: true,
        changeOrigin: true
      },
      '^/api': {
        target: 'https://sapi.mgoi.net/',
        ws: true,
        changeOrigin: true
      }
    }
  },
  // node_modules依赖项es6语法未转换问题
  transpileDependencies: [
    'vuex-persist'
  ],
}
