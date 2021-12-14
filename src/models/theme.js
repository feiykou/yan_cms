import { post, get, put, patch, _delete } from '@/lin/plugins/axios'

class Theme {

  /**
   * 获取所有主题信息
   * @returns {Promise<*>}
   */
  async getThemes(page = 0, count = 15) {
    const res = await get(`v1/theme`, {
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
  async getTheme(id) {
    const res = await get(`v1/theme/${id}`, {handleError: true})
    return res
  }


  /**
   * 创建主题信息
   * @param info
   * @returns {Promise<*>}
   */
  async addTheme(info) {
    const res = await post(`v1/theme`, info, {handleError: true})
    return res
  }

  /**
   * 更新主题数据
   * @param id      当前主题id
   * @param info    主题提交信息
   * @returns {Promise<*>}
   */
  async updateTheme(id, info) {
    const res = await put(`v1/theme/${id}`, info)
    return res
  }

  /**
   * 删除单个/选中分类（包含子分类）
   * @param ids ids数组
   * @returns {Promise<*>}
   */
  async delTheme(ids) {
    const res = await _delete(`v1/theme`, { ids })
    return res
  }

  /**
   * 获取所有关联的spu
   * @param theme_id
   * @returns {Promise<*>}
   */
  async allResc(theme_id, module_name='spu') {
    const res = await get(`v1/theme/resc/${theme_id}?module_name=${module_name}`, {handleError: true})
    return res
  }

  /**
   * 添加resc
   * @param info
   * @returns {Promise<*>}
   */
  async addResc(info) {
    const res = await post(`v1/theme/resc`, info, {handleError: true})
    return res
  }

  /**
   * 删除resc
   * @param ids
   * @returns {Promise<*>}
   */
  async delResc(ids) {
    const res = await _delete(`v1/theme/resc`, { ids })
    return res
  }

  /**
   * 清空resc
   * @returns {Promise<*>}
   */
  async clearResc(theme_id) {
    const res = await _delete(`v1/theme/resc/clear?theme_id=${theme_id}`)
    return res
  }

}

export default new Theme()