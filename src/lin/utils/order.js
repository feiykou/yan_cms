export function getStatusVal(val, status) {
    let statusStyle = {
        statusVal: '',
        type: ''
    }
    switch (val) {
        case status['UNPAID']:
            statusStyle = {
                statusVal: '待支付',
                type: 'danger'
            }
            break
        case status['PAID']:
            statusStyle = {
                statusVal: '已支付',
                type: 'success'
            }
            break
        case status['DELIVERED']:
            statusStyle = {
                statusVal: '已发货',
                type: 'success'
            }
            break
        case status['PAID_BUT_OUT_OF']:
            statusStyle = {
                statusVal: '已支付，但库存不足',
                type: 'success'
            }
            break
        case status['HANDLED_OUT_OF']:
            statusStyle = {
                statusVal: '已处理库存不足情况',
                type: 'success'
            }
            break

        case status['SUREDELIVERY']:
            statusStyle = {
                statusVal: '已确认收货',
                type: 'success'
            }
            break
        case status['COMMENT']:
            statusStyle = {
                statusVal: '已评价',
                type: 'success'
            }
            break
        case status['REFUND']:
            statusStyle = {
                statusVal: '退款中',
                type: 'success'
            }
            break
        case status['REFUNDSUCCESS']:
            statusStyle = {
                statusVal: '退款成功',
                type: 'success'
            }
            break
        case status['REFUNDFAIL']:
            statusStyle = {
                statusVal: '退款失败',
                type: 'success'
            }
            break
        case status['RETURNREFUND']:
            statusStyle = {
                statusVal: '退货退款中',
                type: 'success'
            }
            break
        case status['RETURNREFUNDSUCCESS']:
            statusStyle = {
                statusVal: '退货退款成功',
                type: 'success'
            }
            break
        case status['RETURNREFUNDFAIL']:
            statusStyle = {
                statusVal: '退货退款失败',
                type: 'success'
            }
            break
        case status['REMOVE']:
            statusStyle = {
                statusVal: '已删除',
                type: 'success'
            }
            break
        case status['CANCEL']:
            statusStyle = {
                statusVal: '已取消',
                type: 'warning'
            }
    }
    return statusStyle
}