import { post, get, put, patch, _delete } from '@/lin/plugins/axios'
import appConfig from '@/config/index'

class Refund {

  /**
   * 获取全部退换货信息
   * @returns {Promise<*>}
   */
  async getRefunds(page = 0, searchWord = {}, count = appConfig.pageSize) {
    const res = await get('v1/order/refund/all', {
      page,
      count,
      ...searchWord,
      handleError: true
    })
    return res
  }

  /**
   * 获取单个退换货详情
   * @param order_id  订单id
   * @param sku_id    sku_id
   * @returns {Promise<*>}
   */
  async getRefund(order_id, sku_id) {
    const res = await get(`v1/order/refund/detail`, {
      handleError: true,
      order_id,
      sku_id
    })
    return res
  }

  /**
   * 更新状态
   * @param order_id  订单id
   * @param sku_id    sku_id
   * @param status    status
   * @returns {Promise<*>}
   */
  async updateRefundStatus(order_id, sku_id, status) {
    const res = await patch(`v1/order/refund/status`, {
      order_id,
      sku_id,
      status
    })
    return res
  }

  /**
   * 拒绝申请
   * @param order_id  订单id
   * @param sku_id    sku_id
   * @returns {Promise<*>}
   */
  async cancel(order_id, sku_id) {
    const res = await patch(`v1/order/refund/cancel`, {
      order_id,
      sku_id
    })
    return res;
  }

  /**
   * 同意申请
   * @param order_id  订单id
   * @param sku_id    sku_id
   * @returns {Promise<*>}
   */
  async agree(order_id, sku_id) {
    const res = await patch(`v1/order/refund/agree`, {
      order_id,
      sku_id
    })
    return res;
  }

  async queryLogistics(id, type = 1) {
    const res = await get(`v1/order/refund/${id}/logistics`, {
      type,
      handleError: true
    })
    return res;
  }

  /**
   * 换货更新或创建物流
   * @param id
   * @returns {Promise<*>}
   */
  async createAndUpdateLogistics({refund_id, comp, number}) {
    const res = await patch(`v1/order/refund/logistics?handleError=true`, {
      refund_id,
      comp,
      number
    })
    return res;
  }

  /**
   * 订单发货
   * @param orderID
   * @returns {Promise<*>}
   */
  // async deliverGoods({orderID,comp,number}) {
  //   const res = await post(`v1/order/shipment/${orderID}?handleError=true`, {
  //     comp,
  //     number
  //   })
  //   return res;
  // }
  //
  // /**
  //  * 获取物流信息
  //  * @param $orderNo
  //  * @returns {Promise<*>}
  //  */
  // async getLogistics(orderNo) {
  //   const res = await get(`v1/logistics/${orderNo}?handleError=true`)
  //   return res;
  // }
  //
  // /**
  //  * 获取订单物流记录
  //  * @param $orderNo
  //  * @returns {Promise<*>}
  //  */
  // async getDeliverRecord(orderNo) {
  //   const res = await get(`v1/order/shipment/record/${orderNo}?handleError=true`)
  //   return res;
  // }
  //
  // /**
  //  * 更新物流单号
  //  * @param orderNo
  //  * @param info
  //  * @returns {Promise<*>}
  //  */
  // async updateDeliverRecord(orderNo, info) {
  //   const res = await post(`v1/logistics/${orderNo}?handleError=true`, info)
  //   return res;
  // }
  //
  // /**
  //  * 更新单一数据
  //  * @param info
  //  * @returns {Promise<*>}
  //  */
  // async updateSingle(info) {
  //   const res = await patch(`v1/order/single`, info)
  //   return res
  // }
  //
  // /**
  //  * 获取退款列表
  //  * @param order_id
  //  * @returns {Promise<*>}
  //  */
  // async getRefunds(order_id) {
  //   const res = await get(`v1/order/refund/${order_id}?handleError=true`)
  //   return res
  // }
  //
  // /**
  //  * 获取退款详情
  //  * @param info
  //  * @returns {Promise<*>}
  //  */
  // async getRefundDetail(order_id, sku_id) {
  //   const res = await get(`v1/order/refund/detail?order_id=${order_id}&sku_id=${sku_id}&handleError=true`)
  //   return res
  // }
  //
  // /**
  //  * 拒绝退款/退货申请
  //  * @param info
  //  * @returns {Promise<*>}
  //  */
  // async refundCancel(order_id, sku_id) {
  //   const res = await patch(`v1/order/refund/cancel?order_id=${order_id}&sku_id=${sku_id}&handleError=true`)
  //   return res
  // }
  //
  // /**
  //  * 同意申请
  //  * @param info
  //  * @returns {Promise<*>}
  //  */
  // async refundAgree(order_id, sku_id) {
  //   const res = await patch(`v1/order/refund/agree?order_id=${order_id}&sku_id=${sku_id}&handleError=true`)
  //   return res
  // }



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

export default new Refund();