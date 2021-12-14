const specRouter = {
  route: null,
  name: null,
  title: '规格管理',
  type: 'folder', // 类型: folder, tab, view
  icon: 'iconfont icon-tushuguanli',
  filePath: 'views/spec/', // 文件路径
  order: null,
  inNav: true,
  children: [
    {
      title: '规格名列表',
      type: 'view',
      name: 'SpecList',
      route: '/spec/list',
      filePath: 'views/spec/SpecList.vue',
      inNav: true,
      icon: 'iconfont icon-tushuguanli',
    },
    {
      title: '添加规格名',
      type: 'view',
      name: 'SpecAdd',
      route: '/spec/add',
      filePath: 'views/spec/SpecAdd.vue',
      inNav: true,
      icon: 'iconfont icon-tushuguanli',
    },
    {
      title: '规格名详情',
      type: 'view',
      name: 'SpecEdit',
      route: '/spec/:id',
      filePath: 'views/spec/SpecEdit.vue',
      inNav: false,
      icon: 'iconfont icon-tushuguanli',
    },
  ],
}

export default specRouter