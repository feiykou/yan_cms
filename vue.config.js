/*
 * @Author: your name
 * @Date: 2021-09-18 15:56:58
 * @LastEditTime: 2022-05-17 23:42:58
 * @LastEditors: feiy 648039341@qq.com
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \yan-cms\vue.config.js
 */
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
        // proxy: "http://api.szfxws.com",
        proxy: {
            '^/v1|^/cms|^/cloud': {
                // target: 'http://yan.cn',
                target: 'http://api.szfxws.com/',
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