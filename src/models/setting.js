import { post, get, put, _delete } from '@/lin/plugins/axios'
import appConfig from '@/config/index'

class Setting {

  /**
   * 获取全部设置
   * @returns {Promise<*>}
   */
  async getSettings() {
    const res = await get('v1/setting', {
      handleError: true
    })
    return res
  }

  /**
   * 清除cms缓存
   * @param names
   * @returns {Promise<*>}
   */
  async clearCache(names) {
    const res = await put(`v1/setting/clear`, {
      names
    }, {handleError: true})
    return res
  }

  /**
   * 清除api缓存
   * @param names
   * @returns {Promise<*>}
   */
  async clearAPICache(names) {
    const res = await put(`api/v1/setting/clear`, {
      names
    }, {handleError: true})
    return res
  }

  /**
   * 添加专栏
   * @param info  信息
   * @returns {Promise<*>}
   */
  async addSetting(names, info) {
    const res = await post('v1/setting', {
      values: info,
      names: names
    }, {handleError: true})
    return res
  }

  /**
   * 更新单个设置
   * @param names  名称
   * @param info  信息
   * @returns {Promise<*>}
   */
  async editSetting(names, info) {
    const res = await put(`v1/setting/${names}`, info, {handleError: true})
    return res
  }


}

export default new Setting()