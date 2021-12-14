import { post, get, patch, _delete } from '@/lin/plugins/axios'
import appConfig from '@/config/index'

class Comment {

  /**
   * 获取评论
   * @param type
   * @param type_id
   * @param page
   * @param count
   * @returns {Promise<*>}
   */
  async getCommentsByType(page = 0, searchParams={}, count = appConfig.pageSize) {
    const res = await get('v1/comment/type', {
      page,
      count,
      ...searchParams,
      handleError: true
    })
    return res
  }

  /**
   * 更新单一数据
   * @param info
   * @returns {Promise<*>}
   */
  async updateSingle(info) {
    const res = await patch(`v1/comment/single`, info)
    return res
  }


}

export default new Comment()