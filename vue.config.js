const path = require('path')
const CompressionPlugin = require("compression-webpack-plugin");
const webpack = require('webpack')
const isProduction = process.env.NODE_ENV !== 'development';

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
        config.plugin('webpack-bundle-analyzer')
            .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
    },
    configureWebpack: (config) => {
        Object.assign(config.resolve, {
                extensions: ['.js', '.json', '.vue', '.scss', '.html']
            })
            // 生产环境相关配置
        if (isProduction) {
            //gzip压缩
            const productionGzipExtensions = ['html', 'js', 'css']
            config.plugins.push(
                new CompressionPlugin({
                    filename: '[path].gz[query]',
                    algorithm: 'gzip',
                    test: new RegExp(
                        '\\.(' + productionGzipExtensions.join('|') + ')$'
                    ),
                    threshold: 10240, // 只有大小大于该值的资源会被处理 10240
                    minRatio: 0.8, // 只有压缩率小于这个值的资源才会被处理
                    deleteOriginalAssets: false // 删除原文件
                })
            )
            config.plugins.push(
                new webpack.optimize.LimitChunkCountPlugin({
                    maxChunks: 10
                })
            )
        }
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