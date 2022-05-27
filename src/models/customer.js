import { post, get, put, _delete } from '@/lin/plugins/axios'
import appConfig from '@/config/index'

class Customer {

    /**
     * 获取当前管理员全部客户
     * @returns {Promise<*>}
     */
    async getCustomers(page = 0, searchParams = {}, count = appConfig.pageSize) {
            let param = {
                page,
                count,
                ...searchParams,
                handleError: true
            }
            const res = await get('v1/customer', param)
            return res
        }
        /**
         * 获取全部客户
         * @returns {Promise<*>}
         */
    async getAllCustomers(page = 0, searchParams = {}, count = appConfig.pageSize) {
        const res = await get('v1/customer/all', {
            page,
            count,
            ...searchParams,
            handleError: true
        })
        return res
    }



    /**
     * 释放客户进入公域池(支持多选)
     * @param {*} ids 
     */
    async updateCustomersEntryPublic(ids = []) {
        const res = await put('v1/customer/public/release', {
            ids
        })
        return res
    }

    /**
     * 获取公域池全部客户
     * @param {*} id 
     */
    async getPublicAllCustomers(page = 0, count = appConfig.pageSize) {
        const res = await get('v1/customer/public/all', {
            page,
            count,
            handleError: true
        })
        return res
    }

    /**
     * 设置获取公域池客户
     * @param {*} id 
     */
    async getPublicSetCustomers(id) {
        const res = await put('v1/customer/public/set', {
            'cutomer_id': id
        }, { handleError: true })
        return res
    }

    /**
     * 获取单个客户，并审核权限
     * @param id
     * @returns {Promise<*>}
     */
    async getCustomer(id) {
            const res = await get(`v1/customer/${id}`, { handleError: true })
            return res
        }
        /**
         * 获取单个客户
         * @param link_code
         * @returns {Promise<*>}
         */
    async getCustomerByLinkCode(link_code = 0) {
        const res = await get(`v1/customer/link_code/${link_code}`, { handleError: true })
        return res
    }


    //   /**
    //  * 获取单个客户
    //  * @param id
    //  * @returns {Promise<*>}
    //  */
    // async getCustomerDetail(id) {
    //   const res = await get(`v1/customer/${id}/detail`, {handleError: true})
    //   return res
    // }

    /**
     * 添加客户
     * @param info  客户信息
     * @returns {Promise<*>}
     */
    async addCustomer(info) {
        const res = await post('v1/customer', info, { handleError: true })
        return res
    }

    /**
     * 更新单个客户
     * @param id    客户_id
     * @param info  客户信息
     * @returns {Promise<*>}
     */
    async editCustomer(id, info) {
        const res = await put(`v1/customer/${id}`, info, { handleError: true })
        return res
    }

    /**
     * 删除客户
     * @param ids
     * @returns {Promise<*>}
     */
    async delCustomer(ids) {
        const res = await _delete(`v1/customer`, { ids })
        return res;
    }

    /**
     * 更新主客户信息
     * @param info  主客户信息
     * @returns {Promise<*>}
     */
    async updateMainCustomer(info) {
        const res = await put(`v1/customer/main`, info, { handleError: true })
        return res
    }

    /**
     * 更新跟进信息
     * @param info  跟进信息
     * @returns {Promise<*>}
     */
    async updateFollowCustomer(info) {
        const res = await put(`v1/customer/follow`, info, { handleError: true })
        return res
    }

    /**
     * 更新跟进信息
     * @param info  跟进信息
     * @returns {Promise<*>}
     */
    async updateFollowCustomer(info) {
        const res = await put(`v1/customer/follow`, info, { handleError: true })
        return res
    }


}

export default new Customer()