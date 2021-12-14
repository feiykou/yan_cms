const customReportRouter = {
  route: null,
  name: null,
  title: '客户报价管理',
  type: 'folder', // 类型: folder, tab, view
  icon: 'el-icon-postcard',
  filePath: 'views/custom_report/', // 文件路径
  order: 4,
  inNav: true,
  children: [
    {
      title: '客户报价列表',
      type: 'view',
      name: 'CustomReportList',
      route: '/custom_report/list',
      filePath: 'views/custom_report/CustomReportList.vue',
      inNav: true,
      icon: 'iconfont icon-tushuguanli',
    },
    {
      title: '添加客户报价',
      type: 'view',
      name: 'CustomReportAdd',
      route: '/custom_report/add',
      filePath: 'views/custom_report/CustomReportAdd.vue',
      inNav: true,
      icon: 'iconfont icon-tushuguanli',
    },
    {
      title: '编辑客户报价',
      type: 'view',
      name: 'CustomReportEdit',
      route: '/custom_report/:id',
      filePath: 'views/custom_report/CustomReportEdit.vue',
      inNav: false,
      icon: 'iconfont icon-tushuguanli',
    },
    {
      title: '规格名列表',
      type: 'view',
      name: 'SpecList',
      route: '/spec/list',
      filePath: 'views/spec/SpecList.vue',
      inNav: true,
      icon: 'iconfont icon-tushuguanli',
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
    },
  ],
}

export default customReportRouter