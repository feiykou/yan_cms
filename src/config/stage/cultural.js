const culturalRouter = {
  route: null,
  name: null,
  title: '文创管理',
  type: 'folder', // 类型: folder, tab, view
  icon: 'iconfont icon-tushuguanli',
  filePath: 'views/cultural/', // 文件路径
  order: null,
  inNav: true,
  children: [
    {
      title: '文创列表',
      type: 'view',
      name: 'CulturalList',
      route: '/cultural/list',
      filePath: 'views/cultural/CulturalList.vue',
      inNav: true,
      icon: 'iconfont icon-tushuguanli',
    },
    {
      title: '分类列表',
      type: 'view',
      name: 'CategoryList',
      route: '/cultural/cate',
      filePath: 'views/cultural-category/CategoryList.vue',
      inNav: true,
      icon: 'iconfont icon-tushuguanli',
    },
  ],
}

export default culturalRouter