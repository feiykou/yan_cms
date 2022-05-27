import { post, get, put, patch, _delete } from '@/lin/plugins/axios'
import appConfig from '@/config/index'

class Cuser {

  /**
   * 获取全部C端用户信息
   * @returns {Promise<*>}
   */
  async getCusers(page = 0, searchWord = {}, count = appConfig.pageSize) {
    const res = await get('v1/cuser', {
      page,
      count,
      ...searchWord,
      handleError: true
    })
    return res
  }

  /**
   * 获取单个C端用户
   * @param id    C端用户id
   * @returns {Promise<*>}
   */
  async getCuser(id) {
    const res = await get(`v1/cuser/${id}`, {handleError: true})
    return res
  }

  /**
   * 删除C端用户
   * @param ids
   * @returns {Promise<*>}
   */
  async delCuser(ids) {
    const res = await _delete(`v1/cuser`, { ids })
    return res;
  }

}

export default new Cuser();