const path = require('path')
const CompressionPlugin = require("compression-webpack-plugin");
const webpack = require('webpack')
const isProduction = process.env.NODE_ENV !== 'development';
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')
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
        config.plugins.delete("prefetch") //移除首次加载多余请求
        config.plugins.delete('preload'); // 移除 preload 插件
    },
    configureWebpack: (config) => {
        Object.assign(config.resolve, {
                extensions: ['.js', '.json', '.vue', '.scss', '.html']
            })
            // 生产环境相关配置
        if (isProduction) {
            config.optimization = {
                splitChunks: {
                    chunks: 'all',
                    minSize: 20000,
                    maxSize: 0,
                    minChunks: 1,
                    maxAsyncRequests: 5,
                    maxInitialRequests: Infinity,
                    automaticNameDelimiter: '~',
                    name: true,
                    cacheGroups: {
                        vendors: {
                            name: `chunk-vendors`,
                            test: /[/]node_modules[/]/,
                            priority: 10,
                            minChunks: 1, // 默认1
                            chunks: 'initial',
                        },
                        commons: {
                            name: 'chunk-commons',
                            test: resolve('src/components'), // can customize your rules
                            minChunks: 1, //  minimum common number
                            priority: 5,
                            reuseExistingChunk: true
                        },
                        elementUI: {
                            name: "chunk-elementUI", //  split elementUI into a single package
                            priority: 20, //  the weight needs to be larger than libs and app or it will be packaged into libs or app
                            test: /[\\/]node_modules[\\/]_?element-ui(.*)/, //  in order to adapt to cnpm
                        },
                  
                        default: {
                            name: "common",
                            minChunks: 5, // 模块被引用2次以上的才抽离
                            priority: 1,
                            reuseExistingChunk: true, // 复用公共模块
                        }
                    },
                }
            }
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
                    minRatio: 0.7, // 只有压缩率小于这个值的资源才会被处理
                    deleteOriginalAssets: false // 删除原文件
                })
            )
            config.plugins.push(
                new webpack.optimize.LimitChunkCountPlugin({
                    maxChunks: 9
                })
            )
            config.plugins.push(
                new webpack.IgnorePlugin(/^\.\/locale$/,/moment$s/)
            )
            config.plugins.push(
                new LodashModuleReplacementPlugin()
            )
        }
    },
    css: {
        extract: true,
        modules: false,
        sourceMap: false,
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
                target: 'http://yan.com',
                // target: 'http://api.szfxws.com/',
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