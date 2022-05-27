import { post, get, put, patch, _delete } from '@/lin/plugins/axios'
import appConfig from '@/config/index'

class Notice {

  /**
   * 获取全部Notice信息
   * @returns {Promise<*>}
   */
  async getNotices(page = 0, count = appConfig.pageSize) {
    const res = await get('v1/notice', {
      page,
      count,
      handleError: true
    })
    return res
  }

  /**
   * 获取单个Notice
   * @param id   Notice id
   * @returns {Promise<*>}
   */
  async getNotice(id) {
    const res = await get(`v1/notice/${id}`, {handleError: true})
    return res
  }


  /**
   * 添加Notice
   * @param info  Notice信息
   * @returns {Promise<*>}
   */
  async addNotice(info) {
    const res = await post('v1/notice', info, {handleError: true})
    return res
  }

  /**
   * 更新单个Notice
   * @param id    Notice_id
   * @param info  Notice信息
   * @returns {Promise<*>}
   */
  async editNotice(id, info) {
    const res = await put(`v1/notice/${id}`, info, {handleError: true})
    return res
  }

  /**
   * 删除Notice
   * @param ids
   * @returns {Promise<*>}
   */
  async delNotice(ids) {
    const res = await _delete(`v1/notice`, { ids })
    return res;
  }

    /**
   * 更新单一数据
   * @param info
   * @returns {Promise<*>}
   */
  async updateSingle(info) {
    const res = await patch(`v1/notice/single`, info)
    return res
  }

}

export default new Notice();