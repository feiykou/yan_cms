<template>
<div class="mg-order">
    <div  v-if="redirectType === 'list'">
        <sticky-top>
            <div class="order-header">
                <div class="header-left"><p class="title">订单列表</p></div>
                <div class="header-right" v-auth="'搜索日志'">
                    <lin-search @btn="onQueryChange" ref="searchKeyword" placeholder="请输入订单号/姓名" />
                    <lin-date-picker @dateChange="handleDateChange" ref="searchDate" class="date"> </lin-date-picker>
                    <el-select v-model="curStatus" @change="statusChange" size="medium" filterable default-first-option placeholder="请选择订单状态" prop="status" class="">
                        <el-option label="全部订单" :value="-1"></el-option>
                        <el-option :label="value" v-for="(value, key) in statusReset" :value="key"></el-option>
                    </el-select>
                    <el-button type="primary" plain @click="backInit" size="mini" class="back-btn">返回浏览</el-button>
                </div>
            </div>

            <el-divider v-if="!keyword"></el-divider>
        </sticky-top>
        <div class="container">
            <!-- 表格 -->
            <feiy-table
                    :tableColumn="tableColumn"
                    :tableData="tableData"
                    :operate="operate"
                    :pagination="pagination"
                    :curPage="currentPage"
                    @currentChange="currentChange"
                    @handleEdit="handleEdit"
                    @handleDelete="handleDelete"
                    @handleCellSave="handleCellSave"
                    v-loading="loading"
            >
                <template slot-scope="slotProps">
                    <el-tag :type="getStatusVal(slotProps.tag)['type']" v-if="slotProps.tag && slotProps.prop == 'status'">{{ getStatusVal(slotProps.tag)['statusVal']}}</el-tag>
                    <el-tag :type="getRefundVal(slotProps.tag)['type']" v-if="slotProps.tag && slotProps.prop == 'refund'">{{ getRefundVal(slotProps.tag)['statusVal']}}</el-tag>
                </template>
            </feiy-table>
        </div>
        <div class="chart-container">
            <div class="chart-title">订单统计数据</div>
            <div class="chart-wrap">
                <broken-analysis class="analysis"></broken-analysis>
                <columnar-analysis class="analysis"></columnar-analysis>
            </div>
        </div>
    </div>
    <!-- 编辑页面 -->
    <order-edit v-else-if="redirectType === 'edit'" :editID="editID" @close="closePage"></order-edit>
</div>
</template>

<script>
    import LinSearch from '@/components/base/search/lin-search'
    import LinDatePicker from '@/components/base/date-picker/lin-date-picker'
    import order from "@/models/order"
    import OrderEdit from "../order/OrderEdit"
    import status from "@/config/order/orderStatusEnum"
    import statusReset from "@/config/order/orderStatusReset"
    import feiyTable from '@/components/base/table/feiy-table'
    import brokenAnalysis from '@/components/base/order/broken-analysis'
    import columnarAnalysis from '@/components/base/order/columnar-analysis'
    import {getStatusVal} from "@/lin/utils/order";
export default {
    name: "OrderList",
    components: {
        LinSearch,
        LinDatePicker,
        OrderEdit,
        feiyTable,
        brokenAnalysis,
        columnarAnalysis
    },
    data() {
        return {
            searchUser: '',
            loading: false,
            statusReset: statusReset,
            curStatus: -1,
            tableColumn: [
                { prop: 'id', label: 'id', width: 100 },
                { prop: 'order_no', label: '订单号', width: 200 },
                { prop: 'user_id', label: '用户id', width: 100 },
                { prop: 'total_count', label: '单品数量', width: 100 },
                { prop: 'total_price', label: '总价格', width: 150 },
                { prop: 'refund', label: '退换货申请', type: 'tag', width: 150, noRepeat: true  },
                { prop: 'status', label: '状态', type: 'tag', width: 150, noRepeat: true  },
                { prop: 'create_time', label: '创建时间', width: 200  },
                { prop: 'order_remark', label: '订单备注', type: 'edit', order: 1, width: 200, edit: false, noRepeat: true },
            ],
            tableData: [],
            operate: [],
            pagination: {
                pageTotal: 0
            },
            currentPage: 1,
            redirectType: 'list',
            editID: 1,
            keyword: null,
            searchKeyword: '',
            searchDate: [],
            searchParams: {},
            isSearch: false
        }
    },
    created() {
        this.operate = [
            { name: '查看', func: 'handleEdit', type: 'primary' },
            {
                name: '删除',
                func: 'handleDelete',
                type: 'danger',
                auth: '删除图书',
            },
        ]
        this.getOrders()
    },
    methods: {
        async getOrders(page = 0) {
            let orderLists = []
            try {
                this.loading = true
                orderLists = await order.getOrders(page, this.searchParams, 10)
                this.loading = false
                if (!this.pagination.pageTotal){
                    this.pagination = {
                        pageTotal: orderLists.total_nums
                    }
                }
                orderLists = orderLists.collection
            } catch (e) {
                orderLists = []
                if(this.isSearch) this.$message.error('未搜索到匹配的结果')
                this.loading = false
            }
            this.tableData = orderLists
        },
        getRefundVal(val) {
            let statusStyle = {
                statusVal: '正常',
                type: 'success'
            }
            if(val && val.length > 0) {
                statusStyle = {
                    statusVal: '退款处理',
                    type: 'danger'
                }
            }
            return statusStyle
        },
        getStatusVal(val) {
            return getStatusVal(val, status)
        },
        searchParam() {
            let searchParams = {}
            if (this.curStatus != -1) {
                searchParams['status'] = this.curStatus
            }
            if( this.searchDate && this.searchDate.length > 0) {
                searchParams['start'] = this.searchDate[0]
                searchParams['end'] = this.searchDate[1]
            }
            if( this.searchKeyword ) {
                if(this.validateIsChinese(this.searchKeyword) && this.searchKeyword.length <= 8) {
                    searchParams['name'] = this.searchKeyword
                } else {
                    searchParams['order_no'] = this.searchKeyword
                }
            }
            this.searchParams = searchParams
            this.isSearch = true
        },
        validateIsChinese(val) {
            const pattern = new RegExp("[\u4E00-\u9FA5]+")
            return pattern.test(val)
        },
        handleDateChange(date) {
            this.searchDate = date
            this.searchParam()
            this.getOrders()
        },
        statusChange(status) {
            this.curStatus = status
            this.searchParam()
            this.getOrders()
        },
        onQueryChange(query) {
            // 处理带空格的情况
            this.searchKeyword = query.trim()
            this.searchParam()
            this.getOrders()
        },
        // 清空检索
        async backInit() {
            this.searchKeyword = ''
            this.searchDate = []
            this.searchParams = {}
            this.$refs.searchDate.clear()
            this.$refs.searchKeyword.clear()
            this.isSearch = false
            await this.getOrders()
        },
        currentChange(page) {
            if(page <= 0) return;
            page -= 1
            this.currentPage = page + 1
            this.getOrders(page)
        },
        handleEdit({ row }) {
            this.editID = row.id
            this.redirectType = 'edit'
        },
        async handleCellSave({ row, prop }) {
            const info = this.singleUpdate({
                id: row.id,
                value: row[prop],
                field: prop
            })
            this.loading = true
            const res = await order.updateSingle(info)
            this.loading = false
            if (res.error_code === 0) {
                this.$message.success(`${res.msg}`)
            }
        },
        singleUpdate({id, value, field, type}) {
            let info = {}
            info.id = id
            info.value = value
            if(field) info.field = field
            if(type) info.type = 1
            return info
        },
        handleDelete(val) {
            this.$confirm('此操作将永久删除该订单, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning',
            }).then(async () => {
                const id = [val.row.id]
                this.loading = true
                const res = await order.delOrder(id)
                this.loading = false
                if (res.error_code === 0) {
                    this.getOrders(this.currentPage - 1)
                    this.$message({
                        type: 'success',
                        message: `${res.msg}`,
                    })
                }
            })
        },
        closePage(val) {
            this.redirectType = 'list'
            if(val) this.getOrders()
        },
    },
}
</script>

<style lang="scss" scoped>
    .mg-order{
        overflow-x: hidden;
    }
    .chart-container{
        .chart-title{
            padding: 80px 0 0 50px;
            color: #3963bc;
        }
        .chart-wrap{
            display: flex;
            padding: 10px 50px 80px 0;
        }
        .analysis{
            flex: 1;
            height: 100%;
        }
    }

.back-btn{
    margin-left: 30px;
}

.order-header {
    display: flex;
    align-items: center;
    padding: 0 20px;
    margin-bottom: -24px;

.header-left {

    .title {
            height: 59px;
            line-height: 59px;
            color: #4c76af;
            font-size: 16px;
            font-weight: 500;
        }
    }

.header-right {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-left: 30px;
    .date {
            margin: 0 20px;
        }
    }
}
.search {
    height: 52px;
    width: 100%;
    background: rgba(57, 99, 188, 0.1);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 24px;

.search-tip {
        margin-left: 40px;
        height: 52px;
        line-height: 52px;
        color: #354058;
        font-size: 14px;

    .search-keyword {
            color: $theme;
        }

    .search-num {
            color: #f4516c;
        }
    }

.search-back {
        margin: 8px 20px;
        height: 32px;
        background: #f4516c;
        border: none;
        border-radius: 2px;
        color: #fff;
        padding: 0 13px;
        font-size: 14px;
        cursor: pointer;
    }
}
.container {
    padding: 0 30px;
}

</style>