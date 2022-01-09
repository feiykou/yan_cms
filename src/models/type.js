import { post, get, put, _delete } from '@/lin/plugins/axios'
import appConfig from '@/config/index'

class Type {

    /**
     * 获取全部类型
     * @returns {Promise<*>}
     */
    async getTypes(page = 0, count = appConfig.pageSize) {
        const res = await get('v1/type', {
            page,
            count,
            handleError: true
        })
        return res
    }

    /**
     * 获取单个类型
     * @param id    类型id
     * @returns {Promise<*>}
     */
    async getType(id) {
        const res = await get(`v1/type/${id}`, { handleError: true })
        return res
    }

    /**
     * 获取单个类型
     * @param field    通过field字段获取值
     * @returns {Promise<*>}
     */
    async getTypeByField(field = '') {
        const res = await get(`v1/type/field`, {
            field,
            handleError: true
        })
        return res
    }

    /**
     * 添加类型
     * @param info  类型信息
     * @returns {Promise<*>}
     */
    async addType(info) {
        const res = await post('v1/type', info, { handleError: true })
        return res
    }

    /**
     * 更新单个类型
     * @param id    类型id
     * @param info  类型信息
     * @returns {Promise<*>}
     */
    async editType(id, info) {
        const res = await put(`v1/type/${id}`, info, { handleError: true })
        return res
    }

    /**
     * 删除类型
     * @param ids
     * @returns {Promise<*>}
     */
    async delType(ids) {
        const res = await _delete(`v1/type`, { ids })
        return res;
    }


}

export default new Type()