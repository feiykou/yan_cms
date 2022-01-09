import adminConfig from './admin'
import customReportConfig from './customReport'
import categorySubRouter from './categorySub'
import categoryLastRouter from './categoryLast'
import gridCategoryRouter from './gridCategory'
import themeRouter from './theme'
import culturalRouter from './cultural'
import marketRouter from './market'
import culturalCateSubRouter from './culturalCateSub'
import SpuConfig from './spu'
import specConfig from './spec'
import CustomerConfig from './customer'
import CustomerProjectConfig from './customerProject'
import StaticsConfig from './statics'
import Config from './config'
import pluginsConfig from './plugins'
import Utils from '@/lin/utils/util'

// eslint-disable-next-line import/no-mutable-exports
let homeRouter = [{
        title: 'CMS首页',
        type: 'view',
        name: Symbol('about'),
        route: '/about',
        filePath: 'views/about/About.vue',
        inNav: true,
        icon: 'iconfont icon-iconset0103',
        order: 0,
    },
    {
        title: '日志管理',
        type: 'view',
        name: Symbol('log'),
        route: '/log',
        filePath: 'views/log/Log.vue',
        inNav: true,
        icon: 'iconfont icon-rizhiguanli',
        order: 1,
        right: ['查询所有日志'],
    },
    {
        title: '404',
        type: 'view',
        name: Symbol('404'),
        route: '/404',
        filePath: 'views/error-page/404.vue',
        inNav: false,
        icon: 'iconfont icon-rizhiguanli',
    },
    StaticsConfig,
    customReportConfig,
    // culturalCateSubRouter,
    CustomerConfig,
    CustomerProjectConfig,
    adminConfig,
    Config
]

const plugins = [...pluginsConfig]

// 筛除已经被添加的插件
function filterPlugin(data) {
    if (plugins.length === 0) {
        return
    }
    if (Array.isArray(data)) {
        data.forEach(item => {
            filterPlugin(item)
        })
    } else {
        // bug ==== 比较两个对象
        const findResult = plugins.findIndex(item => data === item)
        if (findResult >= 0) {
            plugins.splice(findResult, 1)
        }
        if (data.children) {
            filterPlugin(data.children)
        }
    }
}

filterPlugin(homeRouter)

homeRouter = homeRouter.concat(plugins)

// 处理顺序
homeRouter = Utils.sortByOrder(homeRouter)

// 使用 Symbol 处理 name 字段, 保证唯一性
const deepReduceName = target => {
    if (Array.isArray(target)) {
        target.forEach(item => {
            if (typeof item !== 'object') {
                return
            }
            deepReduceName(item)
        })
        return
    }
    if (typeof target === 'object') {
        if (typeof target.name !== 'symbol') {
            // eslint-disable-next-line no-param-reassign
            target.name = target.name || Utils.getRandomStr()
                // eslint-disable-next-line no-param-reassign
            target.name = Symbol(target.name)
        }

        if (Array.isArray(target.children)) {
            target.children.forEach(item => {
                if (typeof item !== 'object') {
                    return
                }
                deepReduceName(item)
            })
        }
    }
}

deepReduceName(homeRouter)

export default homeRouter