import { post, get, put, _delete } from '@/lin/plugins/axios'
import appConfig from '@/config/index'

class ProjecExamine {

    /**
     * 获取全部客户项目审核
     * @returns {Promise<*>}
     */
    async getAllProjectExamine(page = 0, searchParams = {}, count = appConfig.pageSize) {
        let param = {
            page,
            count,
            ...searchParams,
            handleError: true
        }
        const res = await get(`v1/project_examine/all`, param)
        return res
    }

    /**
     * 获取当前管理员全部客户项目审核
     * @returns {Promise<*>}
     */
    async getProjectExamines(page = 0, searchParams = {}, count = appConfig.pageSize) {
        let param = {
            page,
            count,
            ...searchParams,
            handleError: true
        }
        const res = await get(`v1/project_examine`, param)
        return res
    }

    /**
     * 获取单个客户项目审核
     * @param id
     * @returns {Promise<*>}
     */
    async getProjectExamine(id) {
        const res = await get(`v1/project_examine/${id}`, { handleError: true })
        return res
    }


    /**
     * 添加客户项目审核
     * @param info  客户项目审核
     * @returns {Promise<*>}
     */
    async addProjectExamine(info) {
        const res = await post('v1/project_examine', info, { handleError: true })
        return res
    }

    /**
     * 更新单个客户项目审核
     * @param id    客户审核_id
     * @param info  客户审核信息
     * @returns {Promise<*>}
     */
    async editProjectExamine(id, info) {
        const res = await put(`v1/project_examine/${id}`, info, { handleError: true })
        return res
    }

}

export default new ProjecExamine()