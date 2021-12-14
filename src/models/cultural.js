import { post, get, put, patch, _delete } from '@/lin/plugins/axios'

class Cultural {

  /**
   * 获取所有主题信息
   * @returns {Promise<*>}
   */
  async getCulturals(page = 0, count = 15) {
    const res = await get(`v1/cultural`, {
      page,
      count
    })
    return res
  }

  /**
   * 获取单个主题信息
   * @param id
   * @returns {Promise<*>}
   */
  async getCultural(id) {
    const res = await get(`v1/cultural/${id}`, {handleError: true})
    return res
  }


  /**
   * 创建主题信息
   * @param info
   * @returns {Promise<*>}
   */
  async addCultural(info) {
    const res = await post(`v1/cultural`, info, {handleError: true})
    return res
  }

  /**
   * 更新主题数据
   * @param id      当前主题id
   * @param info    主题提交信息
   * @returns {Promise<*>}
   */
  async updateCultural(id, info) {
    const res = await put(`v1/cultural/${id}`, info)
    return res
  }

  /**
   * 删除单个/选中分类（包含子分类）
   * @param ids ids数组
   * @returns {Promise<*>}
   */
  async delCultural(ids) {
    const res = await _delete(`v1/cultural`, { ids })
    return res
  }

  /**
   * 获取所有关联的spu
   * @param theme_id
   * @returns {Promise<*>}
   */
  async allSpu(cultural_id) {
    const res = await get(`v1/cultural/spu/${cultural_id}`)
    return res
  }

  /**
   * 添加spu
   * @param info
   * @returns {Promise<*>}
   */
  async addSpu(info) {
    const res = await post(`v1/cultural/spu`, info, {handleError: true})
    return res
  }

  /**
   * 删除spu
   * @param ids
   * @returns {Promise<*>}
   */
  async delSpu(ids) {
    const res = await _delete(`v1/cultural/spu`, { ids })
    return res
  }

  /**
   * 更新单一数据
   * @param info
   * @returns {Promise<*>}
   */
  async updateSingle(info) {
    const res = await patch(`v1/cultural/single`, info)
    return res
  }
}

export default new Cultural()