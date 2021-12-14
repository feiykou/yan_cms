const spuRouter = {
  route: null,
  name: null,
  title: '商品管理',
  type: 'folder', // 类型: folder, tab, view
  icon: 'el-icon-s-finance',
  filePath: 'views/spu/', // 文件路径
  order: null,
  inNav: true,
  children: [
    {
      title: 'SPU列表',
      type: 'view',
      name: 'SpuList',
      route: '/spu/list',
      filePath: 'views/spu/SpuList.vue',
      inNav: true,
      icon: 'iconfont icon-tushuguanli',
    },
    {
      title: 'SKU列表',
      type: 'view',
      name: 'SkuList',
      route: '/sku/list',
      filePath: 'views/sku/sku-wrap/SkuList.vue',
      inNav: true,
      icon: 'el-icon-s-flag',
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
    {
      title: '商品分类',
      type: 'view',
      name: 'CategoryList',
      route: '/category/list',
      filePath: 'views/category/CategoryList.vue',
      inNav: true,
      icon: 'iconfont icon-tushuguanli',
    },
    {
      title: '库存管理',
      type: 'view',
      name: 'StorageList',
      route: '/sku/storage/list',
      filePath: 'views/sku/storage/list.vue',
      inNav: true,
      icon: 'el-icon-s-flag',
    },
  ],
}

export default spuRouter