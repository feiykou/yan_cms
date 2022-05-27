const staticsRouter = {
  route: null,
  name: null,
  title: '数据分析',
  type: 'folder', // 类型: folder, tab, view
  icon: 'el-icon-s-data',
  filePath: 'views/statics/', // 文件路径
  order: 3,
  inNav: true,
  children: [
    {
      title: '基础数据',
      type: 'view',
      name: 'baseIndex',
      route: '/statics/base/index',
      filePath: 'views/statics/base/index.vue',
      inNav: true,
      icon: 'iconfont icon-tushuguanli',
    }
  ],
}

export default staticsRouter