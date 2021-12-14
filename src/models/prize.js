import { post, get, put, _delete } from '@/lin/plugins/axios'
import appConfig from '@/config/index'

class Prize {

  /**
   * 获取全部规格
   * @returns {Promise<*>}
   */
  async getSpus(id=0) {
    const res = await get('cloud/spu', {
      handleError: true,
      id
    })
    return res
  }

  /**
   * 添加Sku
   * @param info  sku信息
   * @returns {Promise<*>}
   */
  async addSpu(info) {
    const res = await post('cloud/spu', info, {handleError: true})
    return res
  }

  /**
   * 更新单个sku
   * @param id    sku_id
   * @param info  sku信息
   * @returns {Promise<*>}
   */
  async editSpu(id, info) {
    const res = await put(`cloud/spu/${id}`, info, {handleError: true})
    return res
  }

  /**
   * 删除规格
   * @param ids
   * @returns {Promise<*>}
   */
  async delSpu(id) {
    const res = await _delete(`cloud/spu/${id}`)
    return res;
  }

}

export default new Prize()