import { post, get, put, patch, _delete } from '@/lin/plugins/axios'

class GridCategory {

  /**
   * 获取全部宫格
   * @param id
   * @returns {Promise<*>}
   */
  async getGrids() {
    const res = await get('v1/gridCategory')
    return res
  }


  /**
   * 获取单个宫格数据
   * @param id
   * @returns {Promise<*>}
   */
  async getGrid(id) {
    const res = await get(`v1/gridCategory/${id}`)
    return res
  }


  /**
   * 创建宫格数据
   * @param info
   * @returns {Promise<*>}
   */
  async addGrid(info) {
    const res = await post('v1/gridCategory', info)
    return res
  }

  /**
   * 更新宫格数据
   * @param id      当前宫格id
   * @param info    宫格提交信息
   * @returns {Promise<*>}
   */
  async updateGrid(id, info) {
    const res = await put(`v1/gridCategory/${id}`, info)
    return res
  }

  /**
   * 更新单一数据
   * @param info
   * @returns {Promise<*>}
   */
  async updateSingle(info) {
    const res = await patch('v1/gridCategory/single', info)
    return res
  }

  /**
   * 删除单个/选中宫格（包含子宫格）
   * @param ids ids数组
   * @returns {Promise<*>}
   */
  async delCate(ids) {
    const res = await _delete('v1/gridCategory', { ids })
    return res
  }

}

export default new GridCategory()
