import { post, get, put, _delete } from '@/lin/plugins/axios'
import appConfig from '@/config/index'

class Spu {

  /**
   * 获取全部规格
   * @returns {Promise<*>}
   */
  async getSpus(page = 0, count = appConfig.pageSize) {
    const res = await get('v1/spu', {
      page,
      count,
      handleError: true
    })
    return res
  }

  /**
   * 获取单个spu
   * @param id    规格id
   * @returns {Promise<*>}
   */
  async getSpu(id) {
    const res = await get(`v1/spu/${id}`, {handleError: true})
    return res
  }

  /**
   * 添加SPU
   * @param info  spu信息
   * @returns {Promise<*>}
   */
  async addSpu(info) {
    const res = await post('v1/spu', info, {handleError: true})
    return res
  }

  /**
   * 更新单个spu
   * @param id    spu_id
   * @param info  spu信息
   * @returns {Promise<*>}
   */
  async editSpu(id, info) {
    const res = await put(`v1/spu/${id}`, info, {handleError: true})
    return res
  }

  /**
   * 删除规格
   * @param ids
   * @returns {Promise<*>}
   */
  async delSpu(ids) {
    const res = await _delete(`v1/spu`, { ids })
    return res;
  }

  /**
   * 获取spu选中规格
   * @param id
   * @returns {Promise<*>}
   */
  async getSpuSpec(id) {
    const res = await get(`v1/spu/${id}/spec`, {handleError: true})
    return res
  }

}

export default new Spu()