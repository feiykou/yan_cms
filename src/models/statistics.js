import { post, get, put, _delete } from '@/lin/plugins/axios'
import appConfig from '@/config/index'
class Statistics {

    /**
     * 获取各渠道来源客户数
     * @returns {Promise<*>}
     */
    async getCustomerChannelData() {
            const res = await get('v1/analysis/customer/channel', {
                handleError: true
            })
            return res
        }
        /**
         * 获取客户数据基础统计
         * @returns {Promise<*>}
         */
    async getCustomerBaseStatistics(start, end, type) {
        const res = await get('v1/analysis/customer/base', {
            start,
            end,
            type,
            handleError: true
        })
        return res
    }

    /**
     * 未跟进客户数统计
     * @returns {Promise<*>}
     */
    async getCustomerNoFollow() {
        const res = await get('v1/analysis/customer/no_follow', {
            handleError: true
        })
        return res
    }

    /**
     * 跟进客户数统计
     * @returns {Promise<*>}
     */
    async getCustomerFollow() {
        const res = await get('v1/analysis/customer/follow', {
            handleError: true
        })
        return res
    }


    /**
     * 获取首页统计数字：
     * 总客户数量
     * 新增用户数
     * 3天未维护客户数量
     * @returns {Promise<*>}
     */
    async getTotalCustomers() {
        const res = await get('v1/analysis/customer/index', {
            handleError: true
        })
        return res
    }

    /**
     * 公域池客户总量
     * @returns {Promise<*>}
     */
    async getPublicCustomers() {
        const res = await get('v1/analysis/customer/public_customer', {
            handleError: true
        })
        console.log(res);
        
        return res
    }




    /**
     * 获取当前用户的所有订单
     * @returns {Promise<*>}
     */
    async getUserOrderData(page = 0, uid, count = appConfig.pageSize) {
        const res = await get('v1/analysis/user/order', {
            uid,
            page,
            count,
            handleError: true
        })
        return res
    }

    /**
     * 获取用户加入购物车的所有sku
     * @returns {Promise<*>}
     */
    async getUserAllCart(uid) {
        const res = await get('v1/cart', {
            uid,
            handleError: true
        })
        return res
    }


}

export default new Statistics()