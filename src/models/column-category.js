import { post, get, put, patch, _delete } from '@/lin/plugins/axios'

class ColumnCategory {

  /**
   * 获取单个分类数据
   * @param id
   * @returns {Promise<*>}
   */
  async getCate(id) {
    const res = await get(`v1/columnCate/${id}`)
    return res
  }

  /**
   * 获取子分类
   * @param parent_id     父级分类id
   * @param sign     true：获取全部分类分页数据
   * @returns {Promise<*>}
   */
  async getSonCate(parent_id = -1, page= 0, count = 15, sign = false) {
    let param = '';
    if (parent_id >= 0){
      param += `?parent_id=${parent_id}`
    }
    if (sign) {
      if(param.indexOf('?') !== -1) {
        param += `&sign=${sign}`
      } else {
        param += `?sign=${sign}`
      }
    }
    const res = await get(`v1/columnCate${param}`, {
      handleError: true,
      page,
      count
    })
    return res
  }

  /**
   * 获取分类树
   * @param id    分类id
   * @param deep  层级深度，默认是0
   * @returns {Promise<*>}
   */
  async getTreeCate(id = 0, deep = 0) {
    const  res = await get(`v1/columnCate/${id}/deep?deep=${deep}`, {handleError: true})
    return res
  }

  /**
   * 创建分类数据
   * @param info
   * @returns {Promise<*>}
   */
  async addCate(info) {
    const res = await post(`v1/columnCate`, info)
    return res
  }

  /**
   * 更新分类数据
   * @param id      当前分类id
   * @param info    分类提交信息
   * @returns {Promise<*>}
   */
  async updateCate(id, info) {
    const res = await put(`v1/columnCate/${id}`, info)
    return res
  }

  /**
   * 更新单一数据
   * @param info
   * @returns {Promise<*>}
   */
  async updateSingle(info) {
    const res = await patch(`v1/columnCate/single`, info)
    return res
  }

  /**
   * 删除单个/选中分类（包含子分类）
   * @param ids ids数组
   * @returns {Promise<*>}
   */
  async delCate(ids) {
    const res = await _delete(`v1/columnCate`, { ids })
    return res
  }

}

export default new ColumnCategory();