import { post, get, put, _delete } from '@/lin/plugins/axios'
import appConfig from '@/config/index'

class Coupons {

  /**
   * 获取全部规格
   * @returns {Promise<*>}
   */
  async getCoupons(page = 0, count = appConfig.pageSize) {
    const res = await get('v1/coupon', {
      page,
      count,
      handleError: true
    })
    return res
  }

  /**
   * 获取单个优惠券
   * @param id
   * @returns {Promise<*>}
   */
  async getCoupon(id) {
    const res = await get(`v1/coupon/${id}`, {handleError: true})
    return res
  }

  /**
   * 添加优惠券
   * @param info  优惠券信息
   * @returns {Promise<*>}
   */
  async addCoupon(info) {
    const res = await post('v1/coupon', info, {handleError: true})
    return res
  }

  /**
   * 更新单个优惠券
   * @param id    优惠券_id
   * @param info  优惠券信息
   * @returns {Promise<*>}
   */
  async editCoupon(id, info) {
    const res = await put(`v1/coupon/${id}`, info, {handleError: true})
    return res
  }

  /**
   * 删除优惠券
   * @param ids
   * @returns {Promise<*>}
   */
  async delCoupon(ids) {
    const res = await _delete(`v1/coupon`, { ids })
    return res;
  }


}

export default new Coupons()