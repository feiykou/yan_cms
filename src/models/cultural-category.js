import { post, get, put, patch, _delete } from '@/lin/plugins/axios'

class CulturalCategory {

  /**
   * 获取单个分类数据
   * @param id
   * @returns {Promise<*>}
   */
  async getCate(id) {
    const res = await get(`v1/culturalCate/${id}`)
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
    const res = await get(`v1/culturalCate${param}`, {
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
    const  res = await get(`v1/culturalCate/${id}/deep?deep=${deep}`, {handleError: true})
    return res
  }

  /**
   * 创建分类数据
   * @param info
   * @returns {Promise<*>}
   */
  async addCate(info) {
    const res = await post(`v1/culturalCate`, info)
    return res
  }

  /**
   * 更新分类数据
   * @param id      当前分类id
   * @param info    分类提交信息
   * @returns {Promise<*>}
   */
  async updateCate(id, info) {
    const res = await put(`v1/culturalCate/${id}`, info)
    return res
  }

  /**
   * 更新单一数据
   * @param info
   * @returns {Promise<*>}
   */
  async updateSingle(info) {
    const res = await patch(`v1/culturalCate/single`, info)
    return res
  }

  /**
   * 删除单个/选中分类（包含子分类）
   * @param ids ids数组
   * @returns {Promise<*>}
   */
  async delCate(ids) {
    const res = await _delete(`v1/culturalCate`, { ids })
    return res
  }


  
  /**
   * 获取所有关联的spu
   * @param theme_id
   * @returns {Promise<*>}
   */
  async allSpu(cultural_category_id) {
    const res = await get(`v1/culturalCate/spu/${cultural_category_id}`)
    return res
  }

  /**
   * 添加spu
   * @param info
   * @returns {Promise<*>}
   */
  async addSpu(info) {
    const res = await post(`v1/culturalCate/spu`, info, {handleError: true})
    return res
  }

  /**
   * 删除spu
   * @param ids
   * @returns {Promise<*>}
   */
  async delSpu(ids) {
    const res = await _delete(`v1/culturalCate/spu`, { ids })
    return res
  }

}

export default new CulturalCategory();