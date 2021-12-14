import { post, get, put, _delete } from '@/lin/plugins/axios'
import appConfig from '@/config/index'

class Spec {

  /**
   * 获取全部规格
   * @returns {Promise<*>}
   */
  async getSpecs(page = 0, count = appConfig.pageSize) {
    const res = await get('v1/spec', {
      page,
      count,
      handleError: true
    })
    return res
  }

  /**
   * 获取单个规格
   * @param id    规格id
   * @returns {Promise<*>}
   */
  async getSpec(id) {
    const res = await get(`v1/spec/${id}`, {handleError: true})
    return res
  }

  /**
   * 添加规格
   * @param info  规格信息
   * @returns {Promise<*>}
   */
  async addSpec(info) {
    const res = await post('v1/spec', info, {handleError: true})
    return res
  }

  /**
   * 更新单个规格
   * @param id    规格id
   * @param info  规格信息
   * @returns {Promise<*>}
   */
  async editSpec(id, info) {
    const res = await put(`v1/spec/${id}`, info, {handleError: true})
    return res
  }

  /**
   * 删除规格
   * @param ids
   * @returns {Promise<*>}
   */
  async delSpec(ids) {
    const res = await _delete(`v1/spec`, { ids })
    return res;
  }



  /*================  规格值信息  ======================*/
  /**
   * 获取单个规格值信息
   * @param id
   * @returns {Promise<*>}
   */
  async getItem(id) {
    const res = await get(`v1/spec/item/${id}`, {handleError: true})
    return res
  }

  /**
   * 创建单个规格值信息
   * @param info
   * @returns {Promise<*>}
   */
  async createItem(info) {
    const res = await post('v1/spec/item', info, {handleError: true})
    return res
  }

  /**
   * 更新单个规格值信息
   * @param id
   * @param info
   * @returns {Promise<*>}
   */
  async updateItem(id, info) {
    const res = await put(`v1/spec/item/${id}`, info, {handleError: true})
    return res
  }

  /**
   * 删除规格值信息
   * @param ids
   * @returns {Promise<*>}
   */
  async delItem(ids) {
    const res = await _delete(`v1/spec/item`, { ids })
    return res
  }


}

export default new Spec()