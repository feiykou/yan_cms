const customerProjectRouter = {
    route: '/customer_project/list',
    name: 'CustomerProjectLists',
    title: '客户项目管理',
    type: 'view', // 类型: folder, tab, view
    icon: 'el-icon-postcard',
    filePath: 'views/customer_project/ProjectLists.vue', // 文件路径
    order: null,
    inNav: true,
    children: [{
        title: '客户项目列表',
        type: 'view',
        name: 'CustomerProjectLists',
        route: '/customer_project/list',
        filePath: 'views/customer_project/ProjectLists.vue',
        inNav: true,
        icon: 'iconfont icon-tushuguanli',
    }]
}

export default customerProjectRouter