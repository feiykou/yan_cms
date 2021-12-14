import { post, get, put, patch, _delete } from '@/lin/plugins/axios'
import appConfig from '@/config/index'

class Order {

  /**
   * 获取全部order信息
   * @returns {Promise<*>}
   */
  async getOrders(page = 0, searchWord = {}, count = appConfig.pageSize) {
    const res = await get('v1/order', {
      page,
      count,
      ...searchWord,
      handleError: true
    })
    return res
  }

  /**
   * 获取单个订单
   * @param id    订单id
   * @returns {Promise<*>}
   */
  async getOrder(id) {
    const res = await get(`v1/order/${id}`, {handleError: true})
    return res
  }

  /**
   * 删除订单
   * @param ids
   * @returns {Promise<*>}
   */
  async delOrder(ids) {
    const res = await _delete(`v1/order`, { ids })
    return res;
  }

  /**
   * 订单发货
   * @param orderID
   * @returns {Promise<*>}
   */
  async deliverGoods({orderID,comp,number}) {
    const res = await post(`v1/order/shipment/${orderID}?handleError=true`, {
      comp,
      number
    })
    return res;
  }

  /**
   * 获取物流信息
   * @param $orderNo
   * @returns {Promise<*>}
   */
  async getLogistics(orderNo) {
    const res = await get(`v1/logistics/${orderNo}?handleError=true`)
    return res;
  }

  /**
   * 获取订单物流记录
   * @param $orderNo
   * @returns {Promise<*>}
   */
  async getDeliverRecord(orderNo) {
    const res = await get(`v1/order/shipment/record/${orderNo}?handleError=true`)
    return res;
  }

  /**
   * 更新物流单号
   * @param orderNo
   * @param info
   * @returns {Promise<*>}
   */
  async updateDeliverRecord(orderNo, info) {
    const res = await post(`v1/logistics/${orderNo}?handleError=true`, info)
    return res;
  }

  /**
   * 更新单一数据
   * @param info
   * @returns {Promise<*>}
   */
  async updateSingle(info) {
    const res = await patch(`v1/order/single`, info)
    return res
  }

  /**
   * 获取退款列表
   * @param order_id
   * @returns {Promise<*>}
   */
  async getRefunds(order_id) {
    const res = await get(`v1/order/refund/${order_id}?handleError=true`)
    return res
  }

  /**
   * 获取退款详情
   * @param info
   * @returns {Promise<*>}
   */
  async getRefundDetail(order_id, sku_id) {
    const res = await get(`v1/order/refund/detail?order_id=${order_id}&sku_id=${sku_id}&handleError=true`)
    return res
  }

  /**
   * 拒绝退款/退货申请
   * @param info
   * @returns {Promise<*>}
   */
  async refundCancel(order_id, sku_id) {
    const res = await patch(`v1/order/refund/cancel?order_id=${order_id}&sku_id=${sku_id}&handleError=true`)
    return res
  }

  /**
   * 同意申请
   * @param info
   * @returns {Promise<*>}
   */
  async refundAgree(order_id, sku_id) {
    const res = await patch(`v1/order/refund/agree?order_id=${order_id}&sku_id=${sku_id}&handleError=true`)
    return res
  }


  /**
   * 更新单一数据
   * @param info
   * @returns {Promise<*>}
   */
  async updateRefundSingle(info) {
    const res = await patch(`v1/order/refund/single`, info)
    return res
  }


}

export default new Order();