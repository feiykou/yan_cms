import { post, get, put, _delete } from '@/lin/plugins/axios'
import appConfig from '@/config/index'

class CustomerReport {

  /**
   * 获取当前管理员全部信息
   * @returns {Promise<*>}
   */
  async getLists(page = 0, count = appConfig.pageSize, status = false) {
    let param = {
      page,
      count,
      handleError: true
    }
    if(status) param.status = status
    const res = await get('v1/customer_report', param)
    return res
  }

  /**
   * 获取全部信息
   * @returns {Promise<*>}
   */
  async getAll(page = 0, count = appConfig.pageSize) {
    const res = await get('v1/customer_report/all', {
      page,
      count,
      handleError: true
    })
    return res
  }

  /**
   * 获取单条信息，并审核权限
   * @param id
   * @returns {Promise<*>}
   */
  async getDetail(id) {
    const res = await get(`v1/customer_report/${id}`, {handleError: true})
    return res
  }

  /**
   * 获取单条信息
   * @param id
   * @returns {Promise<*>}
   */
  async getStatusDetail(id) {
    const res = await get(`v1/customer_report/${id}/detail`, {handleError: true})
    return res
  }

  /**
   * 添加信息
   * @param info  信息
   * @returns {Promise<*>}
   */
  async add(info) {
    const res = await post('v1/customer_report', info, {handleError: true})
    return res
  }

  /**
   * 更新信息
   * @param id    id
   * @param info  信息
   * @returns {Promise<*>}
   */
  async edit(id, info) {
    const res = await put(`v1/customer_report/${id}`, info, {handleError: true})
    return res
  }

  /**
   * 删除信息
   * @param ids
   * @returns {Promise<*>}
   */
  async del(ids) {
    const res = await _delete(`v1/customer_report`, { ids })
    return res;
  }

}

export default new CustomerReport()