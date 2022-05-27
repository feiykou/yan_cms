import { post, get, put, _delete } from '@/lin/plugins/axios'
import appConfig from '@/config/index'

class customerProject {

    /**
     * 获取全部客户项目
     * @returns {Promise<*>}
     */
    async getAllCustomerProjects(page = 0, searchParams = {}, count = appConfig.pageSize) {
        let param = {
            page,
            count,
            ...searchParams,
            handleError: true
        }
        const res = await get(`v1/customer_project/all`, param)
        return res
    }

    /**
     * 获取当前管理员全部客户项目
     * @param isAdmin 0 获取当前客户的所有项目
                      1 获取当前管理员的所有项目 为1时，不设置customer_id
     * @returns {Promise<*>}
     */
    async getCustomerProjects(page = 0, searchParams = {}, customer_id = 0, isAdmin = 1, count = appConfig.pageSize) {
        let param = {
            page,
            count,
            ...searchParams,
            customer_id,
            isAdmin,
            handleError: true
        }
        const res = await get(`v1/customer_project`, param)
        return res
    }

    /**
     * 获取单个客户项目
     * @param id
     * @returns {Promise<*>}
     */
    async getCustomerProject(id) {
        const res = await get(`v1/customer_project/${id}`, { handleError: true })
        return res
    }


    /**
     * 添加客户项目
     * @param info  客户项目
     * @returns {Promise<*>}
     */
    async addCustomerProject(info) {
        const res = await post('v1/customer_project', info, { handleError: true })
        return res
    }

    /**
     * 更新单个客户项目
     * @param id    客户_id
     * @param info  客户信息
     * @returns {Promise<*>}
     */
    async editCustomerProject(id, info) {
        const res = await put(`v1/customer_project/${id}`, info, { handleError: true })
        return res
    }

    /**
     * 删除客户项目
     * @param ids
     * @returns {Promise<*>}
     */
    async delCustomerProject(ids) {
        const res = await _delete(`v1/customer_project`, { ids })
        return res;
    }

}

export default new customerProject()