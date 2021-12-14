const categoryRouter = {
  route: null,
  name: null,
  title: '配置',
  type: 'folder', // 类型: folder, tab, view
  icon: 'el-icon-guide',
  filePath: 'views/config/', // 文件路径
  order: null,
  inNav: true,
  children: [
    // {
    //   title: 'tag标签',
    //   type: 'view',
    //   name: 'TagList',
    //   route: '/tag/list',
    //   filePath: 'views/tag/TagList.vue',
    //   inNav: true,
    //   icon: 'iconfont icon-tushuguanli',
    // },
    // {
    //   title: '消息通知',
    //   type: 'view',
    //   name: 'NoticeList',
    //   route: '/notice/list',
    //   filePath: 'views/notice/NoticeList.vue',
    //   inNav: true,
    //   icon: 'iconfont icon-tushuguanli',
    // },
    // {
    //   title: '评论',
    //   type: 'view',
    //   name: 'CommentList',
    //   route: '/comment/list',
    //   filePath: 'views/comment/CommentList.vue',
    //   inNav: true,
    //   icon: 'iconfont icon-tushuguanli',
    // },
    {
      title: '设置',
      type: 'view',
      name: 'Setting',
      route: '/setting/list',
      filePath: 'views/setting/list.vue',
      inNav: true,
      icon: 'iconfont icon-tushuguanli',
    },
  ],
}

export default categoryRouter