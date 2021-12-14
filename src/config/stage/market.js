const couponsRouter = {
  route: null,
  name: null,
  title: '营销管理',
  type: 'folder', // 类型: folder, tab, view
  icon: 'iconfont icon-tushuguanli',
  filePath: 'views/', // 文件路径
  order: null,
  inNav: true,
  children: [
    {
      title: '优惠券',
      type: 'view',
      name: 'CouponsList',
      route: '/coupons/list',
      filePath: 'views/coupons/CouponsList.vue',
      inNav: true,
      icon: 'iconfont icon-tushuguanli',
    },
    {
      title: '抽奖产品',
      type: 'view',
      name: 'PrizeList',
      route: '/prize/spu/list',
      filePath: 'views/prize/spu/SpuList.vue',
      inNav: true,
      icon: 'iconfont icon-tushuguanli',
    }
  ],
}

export default couponsRouter