import { post, get, put, patch, _delete } from '@/lin/plugins/axios'
import appConfig from '@/config/index'

class Pay {

  /**
   * 订单退款
   * @param order_no    订单号
   * @param refund_fee 退款金额
   * @returns {Promise<*>}
   */
  async refund(order_no, sku_id, refund_fee) {
    const res = await post(`v1/pay/refund?XDEBUG_SESSION_START=11784`, {
      order_no,
      refund_fee,
      sku_id,
      handleError: true
    })
    return res
  }

  /**
   * 查询退款详情
   * @param order_no    订单号
   * @returns {Promise<*>}
   */
  async refundQuery(order_no) {
    const res = await get(`v1/pay/refund/${order_no}`, {
      handleError: true
    })
    return res
  }


  /**
   * 查询订单支付状态
   * @param order_no    订单号
   * @returns {Promise<*>}
   */
  async getOrderPayStatus(order_no) {
    const res = await get(`v1/pay/${order_no}`, {
      handleError: true
    })
    return res
  }


}

export default new Pay();