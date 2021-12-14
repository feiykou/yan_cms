const themeRouter = {
  route: null,
  name: null,
  title: '推荐管理',
  type: 'folder', // 类型: folder, tab, view
  icon: 'iconfont icon-tushuguanli',
  filePath: 'views/theme/', // 文件路径
  order: null,
  inNav: true,
  children: [
    {
      title: '推荐列表',
      type: 'view',
      name: 'ThemeList',
      route: '/theme/list',
      filePath: 'views/theme/ThemeList.vue',
      inNav: true,
      icon: 'iconfont icon-tushuguanli',
    },
  ],
}

export default themeRouter