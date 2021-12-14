const status = {
  // 退款
  REFUND: {
    number: 1,
    msg: '退款',
    type: 'info', // tag样式颜色
  },

  // 退货退款
  REFUNDANDGOODS: {
    number: 2,
    msg: '退货退款',
    type: 'danger', // tag样式颜色
  },

  // 换货
  REPLACEGOODS: {
    number: 3,
    msg: '换货',
    type: 'warning', // tag样式颜色
  },

  REPLACEGOODSSEND: {
    number: 31,
    msg: '商家发货',
    type: 'warning', // tag样式颜色
  },

  // 拒绝并退回商品
  REPLACEFAIL: {
    number: 31,
    msg: '拒绝并退回商品',
    type: 'danger', // tag样式颜色
  },

  // 买家发货
  BUYERDELIVERY: {
    number: 4,
    msg: '买家发货',
    type: 'info', // tag样式颜色
  },

  // 卖家收货
  SELLERRECEIPT: {
    number: 5,
    msg: '卖家收货',
    type: 'info', // tag样式颜色
  },

  // 交易成功
  TRADESUCCESS: {
    number: 6,
    msg: '交易成功',
    type: 'success', // tag样式颜色
  },

  // 交易失败
  TRADEFail: {
    number: 7,
    msg: '交易失败',
    type: 'danger', // tag样式颜色
  },

  // 同意申请
  AGREEAPPLY: {
    number: 8,
    msg: '同意申请',
    type: 'info', // tag样式颜色
  },

  // 同意退款
  AGREEREFUND: {
    number: 9,
    msg: '同意退款',
    type: 'success', // tag样式颜色
  },

};

export default status