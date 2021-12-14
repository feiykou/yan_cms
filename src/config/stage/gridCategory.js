const gridCategoryRouter = {
  route: null,
  name: null,
  title: '宫格管理',
  type: 'folder', // 类型: folder, tab, view
  icon: 'el-icon-guide',
  filePath: 'views/grid-category/', // 文件路径
  order: null,
  inNav: true,
  children: [
    {
      title: '宫格列表',
      type: 'view',
      name: 'GridCategoryList',
      route: '/grid-category/list',
      filePath: 'views/grid-category/GridCategoryList.vue',
      inNav: true,
      icon: 'iconfont icon-tushuguanli',
    },
  ],
}

export default gridCategoryRouter