import { post, get, put, patch, _delete } from '@/lin/plugins/axios'
import appConfig from '@/config/index'

class Tag {

  /**
   * 获取全部tag信息
   * @returns {Promise<*>}
   */
  async getTags(page = 0, searchWord = {}, count = appConfig.pageSize) {
    const res = await get('v1/tag', {
      page,
      count,
      ...searchWord,
      handleError: true
    })
    return res
  }

  /**
   * 获取单个tag标签
   * @param id    tag标签id
   * @returns {Promise<*>}
   */
  async getTag(id) {
    const res = await get(`v1/tag/${id}`, {handleError: true})
    return res
  }


  /**
   * 添加tag
   * @param info  tag信息
   * @returns {Promise<*>}
   */
  async addTag(info) {
    const res = await post('v1/tag', info, {handleError: true})
    return res
  }

  /**
   * 更新单个tag
   * @param id    tag_id
   * @param info  tag信息
   * @returns {Promise<*>}
   */
  async editTag(id, info) {
    const res = await put(`v1/tag/${id}`, info, {handleError: true})
    return res
  }

  /**
   * 删除tag标签
   * @param ids
   * @returns {Promise<*>}
   */
  async delTag(ids) {
    const res = await _delete(`v1/tag`, { ids })
    return res;
  }

}

export default new Tag();