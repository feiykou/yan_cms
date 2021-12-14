import { post, get, put, patch, _delete } from '@/lin/plugins/axios'

class Category {

  /**
   * 获取单个分类数据
   * @param id
   * @returns {Promise<*>}
   */
  async getCate(id) {
    const res = await get(`v1/category/${id}`)
    return res
  }

  /**
   * 获取子分类
   * @param parent_id     父级分类id
   * @returns {Promise<*>}
   */
  async getSonCate(parent_id = -1) {
    console.log(parent_id)
    let param = '';
    if (parent_id >= 0){
      param += `?parent_id=${parent_id}`
    }
    const res = await get(`v1/category${param}`, {handleError: true})
    return res
  }

  /**
   * 获取分类树
   * @param id    分类id
   * @param deep  层级深度，默认是0
   * @returns {Promise<*>}
   */
  async getTreeCate(id = 0, deep = 0) {
    const  res = await get(`v1/category/${id}/deep?deep=${deep}`, {handleError: true})
    return res
  }

  /**
   * 创建分类数据
   * @param info
   * @returns {Promise<*>}
   */
  async addCate(info) {
    const res = await post(`v1/category`, info)
    return res
  }

  /**
   * 更新分类数据
   * @param id      当前分类id
   * @param info    分类提交信息
   * @returns {Promise<*>}
   */
  async updateCate(id, info) {
    const res = await put(`v1/category/${id}`, info)
    return res
  }

  /**
   * 更新单一数据
   * @param info
   * @returns {Promise<*>}
   */
  async updateSingle(info) {
    const res = await patch(`v1/category/single`, info)
    return res
  }

  /**
   * 删除单个/选中分类（包含子分类）
   * @param ids ids数组
   * @returns {Promise<*>}
   */
  async delCate(ids) {
    const res = await _delete(`v1/category`, { ids })
    return res
  }

}

export default new Category();