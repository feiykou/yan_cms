import { post, get, put, _delete } from '@/lin/plugins/axios'
import appConfig from '@/config/index'

class SkuStorage {

  /**
   * 获取全部规格
   * @returns {Promise<*>}
   */
  async getStorages(page = 0, searchParams={}, count = appConfig.pageSize) {
    const res = await get('v1/sku_storage', {
      page,
      count,
      ...searchParams,
      handleError: true
    })
    return res
  }

  /**
   * 获取单个storage
   * @param id    规格id
   * @returns {Promise<*>}
   */
  async getStorage(id) {
    const res = await get(`v1/sku_storage/${id}`, {handleError: true})
    return res
  }

  /**
   * 添加storage
   * @param info  storage信息
   * @returns {Promise<*>}
   */
  async addStorage(info) {
    const res = await post('v1/sku_storage', info, {handleError: true})
    return res
  }

  /**
   * 更新单个storage
   * @param id    storage_id
   * @param info  storage信息
   * @returns {Promise<*>}
   */
  async editStorage(id, info) {
    const res = await put(`v1/sku_storage/${id}`, info, {handleError: true})
    return res
  }

  /**
   * 删除库存
   * @param ids
   * @returns {Promise<*>}
   */
  async delStorage(ids) {
    const res = await _delete(`v1/sku_storage`, { ids })
    return res;
  }

  /**
   * 获取全部库存记录
   * @param id    规格id
   * @returns {Promise<*>}
   */
  async getStorageRecord(page = 0, id, count = appConfig.pageSize) {
    const res = await get(`v1/sku_storage/record`, {
      page,
      count,
      id,
      handleError: true
    })
    return res
  }

  /**
   * 创建库存记录
   * @returns {Promise<*>}
   */
  async createRecord({count, type, status, storage_id}) {
    const res = await post(`v1/sku_storage/record`, {
      count,
      type,
      status,
      storage_id,
      handleError: true
    })
    return res
  }
}

export default new SkuStorage()