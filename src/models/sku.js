import { post, get, put, _delete } from '@/lin/plugins/axios'
import appConfig from '@/config/index'

class Sku {

  /**
   * 获取全部规格
   * @returns {Promise<*>}
   */
  async getSkus(page = 0, count = appConfig.pageSize) {
    console.log(count)
    const res = await get('v1/sku', {
      page,
      count,
      handleError: true
    })
    return res
  }

  /**
   * 获取单个sku
   * @param id    规格id
   * @returns {Promise<*>}
   */
  async getSku(id) {
    const res = await get(`v1/sku/${id}`, {handleError: true})
    return res
  }

  /**
   * 添加Sku
   * @param info  sku信息
   * @returns {Promise<*>}
   */
  async addSku(info) {
    const res = await post('v1/sku', info, {handleError: true})
    return res
  }

  /**
   * 更新单个sku
   * @param id    sku_id
   * @param info  sku信息
   * @returns {Promise<*>}
   */
  async editSku(id, info) {
    console.log('============')
    console.log(id)
    const res = await put(`v1/sku/${id}`, info, {handleError: true})
    return res
  }

  /**
   * 删除规格
   * @param ids
   * @returns {Promise<*>}
   */
  async delSku(ids) {
    const res = await _delete(`v1/sku`, { ids })
    return res;
  }

}

export default new Sku()