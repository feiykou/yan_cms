const status = {
  // 已删除
  REMOVE: 0,

  // 待支付
  UNPAID: 1,

  // 已支付
  PAID: 2,

  // 已发货
  DELIVERED: 3,

  // 已支付，但库存不足
  PAID_BUT_OUT_OF: 4,

  // 已处理PAID_BUT_OUT_OF
  HANDLED_OUT_OF: 5,

  // 已取消 交易关闭
  CANCEL: 6,

  // 确认收货
  SUREDELIVERY: 7,

  // 已评价
  COMMENT: 8,

  // 退款中
  REFUND: 9,

  // 退款成功
  REFUNDSUCCESS: 91,

  // 退款失败
  REFUNDFAIL: 90,

  // 退货退款中
  RETURNREFUND: 10,

  // 退货退款成功
  RETURNREFUNDSUCCESS: 101,

  // 退货退款失败
  RETURNREFUNDFAIL: 100

};

export default status