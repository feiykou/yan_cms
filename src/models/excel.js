import { post, get, put, _delete } from '@/lin/plugins/axios'
import appConfig from '@/config/index'

class Excel {

    /**
     * 导入用户日志
     * @returns {Promise<*>}
     */
    async importCustomerLog(uploadList) {
        const data = {}
        if (!uploadList || !uploadList['raw']) return
        data['file'] = uploadList['raw']
        const res = await post('v1/excel/customer_log', data, { handleError: true })
        return res
    }

    /**
     * 导入用户
     * @returns {Promise<*>}
     */
    async importCustomer(uploadList) {
        const data = {}
        if (!uploadList || !uploadList['raw']) return
        data['file'] = uploadList['raw']
        const res = await post('v1/excel/customer', data, { handleError: true })
        console.log(res)
        return res
    }


    /**
     * 导出用户
     * @returns {Promise<*>}
     */
    async exportCustomer(ids = []) {
        const res = await get('v1/excel/customer', { ids, handleError: true })
        console.log(res)
        return res
    }

    /**
     * 导出客户日志
     * @returns {Promise<*>}
     */
    async exportCustomerLog(ids = []) {
        const res = await get('v1/excel/customer_log', { ids, handleError: true })
        console.log(res)
        return res
    }

    //   return this.$axios({
    //     method: 'post',
    //     url: '/excel/customer_log',
    //     data,
    //   }).then(res => {
    //     if (!Array.isArray(res) || res.length === 0) {
    //       throw new Error('图像上传失败')
    //     }
    //   }).catch(err => {
    //       let msg = '图像上传失败, 请重试'
    //       if (err.msg) {
    //         // eslint-disable-next-line
    //         msg = err.msg
    //       } else if (err.message) {
    //         msg = err.message
    //       }
    //       this.$message.error(msg)
    //     })
    // }

}

export default new Excel()