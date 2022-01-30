import { post, get, put, _delete } from '@/lin/plugins/axios'
import appConfig from '@/config/index'

class CustomerLog {

    /**
     * 获取当前管理员全部客户日志
     * @returns {Promise<*>}
     */
    async getCustomerLogs(params = { customer_id: 0, project_id: 0 }, page = 0, count = appConfig.pageSize) {
        let param = {
            page,
            count,
            ...params,
            handleError: true
        }
        const res = await get(`v1/customer_log`, param)
        return res
    }

    /**
     * 获取单个客户日志，并审核权限
     * @param id
     * @returns {Promise<*>}
     */
    async getCustomerLog(id) {
        const res = await get(`v1/customer_log/${id}`, { handleError: true })
        return res
    }


    /**
     * 添加客户日志
     * @param info  客户信息
     * @returns {Promise<*>}
     */
    async addCustomerLog(info) {
        const res = await post('v1/customer_log', info, { handleError: true })
        return res
    }

    /**
     * 更新单个客户日志
     * @param id    客户_id
     * @param info  客户信息
     * @returns {Promise<*>}
     */
    async editCustomerLog(id, info) {
        const res = await put(`v1/customer_log/${id}`, info, { handleError: true })
        return res
    }

    /**
     * 删除客户日志
     * @param ids
     * @returns {Promise<*>}
     */
    async delCustomerLog(ids) {
        const res = await _delete(`v1/customer_log`, { ids })
        return res;
    }

}

export default new CustomerLog()