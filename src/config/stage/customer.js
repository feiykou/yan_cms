const customerRouter = {
    route: null,
    name: null,
    title: '客户管理',
    type: 'folder', // 类型: folder, tab, view
    icon: 'el-icon-postcard',
    filePath: 'views/customer/', // 文件路径
    order: null,
    inNav: true,
    children: [{
            title: '客户列表',
            type: 'view',
            name: 'CustomerList',
            route: '/customer/list',
            filePath: 'views/customer/CustomerList.vue',
            inNav: true,
            icon: 'iconfont icon-tushuguanli',
        },
        {
            title: '客户日志列表',
            type: 'view',
            name: 'CustomerLogList',
            route: '/customer_log/list',
            filePath: 'views/customer_log/CustomerLogList.vue',
            inNav: false,
            icon: 'iconfont icon-tushuguanli',
        },
        {
            title: '添加客户日志',
            type: 'view',
            name: 'CustomerLogAdd',
            route: '/customer_log/add',
            filePath: 'views/customer_log/CustomerLogAdd.vue',
            inNav: false,
            icon: 'iconfont icon-tushuguanli',
        },
        {
            title: '编辑客户日志',
            type: 'view',
            name: 'CustomerLogEdit',
            route: '/customer_log/:id',
            filePath: 'views/customer_log/CustomerLogEdit.vue',
            inNav: false,
            icon: 'iconfont icon-tushuguanli',
        },
        {
            title: '客户公域池',
            type: 'view',
            name: 'CustomerCommon',
            route: '/customer/common',
            filePath: 'views/customer/CustomerCommon.vue',
            inNav: true,
            icon: 'iconfont icon-tushuguanli'
        },
        {
            title: '客户日志列表',
            type: 'view',
            name: 'CustomerLogList',
            route: '/customer/log',
            filePath: 'views/customer_log/CustomerLogLists.vue',
            inNav: true,
            icon: 'iconfont icon-tushuguanli',
        },
    ]
}

export default customerRouter