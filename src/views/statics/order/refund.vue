<template>
    <!-- 表格 -->
    <div v-if="redirectType == 'list'">
        <feiy-table
                :tableColumn="tableColumn"
                :tableData="refundData"
                :operate="operate"
                :operateStyle="operateStyle"
                @handleDelete="handleDelete"
                @handleEdit="handleEdit"
                @handleCellSave="handleCellSave"
                v-loading="loading"
        >
            <template slot-scope="slotProps">
                <el-tag :type="getStatusVal(slotProps.tag)['type']" v-if="slotProps.tag && slotProps.prop == 'status'">{{ getStatusVal(slotProps.tag)['statusVal']}}</el-tag>
            </template>
        </feiy-table>
    </div>

    <!-- 编辑页面 -->
    <div v-else-if="redirectType === 'edit'">
        <refund-edit :orderID="orderID" :orderNO="orderNO" :skuID="skuID" @close="closePage"></refund-edit>
    </div>
</template>

<script>
  import order from "@/models/order";
  import feiyTable from '@/components/base/table/feiy-table'
  import RefundEdit from "./RefundEdit";
  import status from "@/config/order/orderRefundEnum"

  export default {
    name: "refund",
    props: {
      order_id: Number
    },
    components: {
      feiyTable,
      RefundEdit
    },
    data() {
      return {
        sendLoading: false,
        loading: false,
        refundData: [],
        orderID: 0,
        orderNO: '',
        skuID: 0,
        redirectType: 'list',
        tableColumn: [
          { prop: 'id', label: 'id', width: 50 },
          { prop: 'sku_title', label: '产品名', width: 200 },
          { prop: 'reason', label: '原因', width: 250 },
          { prop: 'status', label: '状态', type: 'tag', width: 150, noRepeat: true  },
          { prop: 'price', label: '退款金额', width: 150 }
        ],
        operate: [
            { name: '查看详情', func: 'handleEdit', type: 'primary' },
        ],
        operateStyle: {
            width: 110
        },
      }
    },
    created() {
        this.getRefunds()
    },
    methods: {
      async getRefunds() {
          console.log(this.order_id)
          let res = []
          try {
              this.loading = true
              res = await order.getRefunds(this.order_id)
              this.loading = false
          } catch (e) {

          }
          this.refundData = res
      },
        async handleCellSave({ row, prop }) {
            const info = this.singleUpdate({
                id: row.id,
                value: row[prop],
                field: prop
            })
            this.loading = true
            const res = await order.updateRefundSingle(info)
            this.loading = false
            if (res.error_code === 0) {
                this.$message.success(`${res.msg}`)
            }
        },
        handleEdit({ row }) {
            const id = row.id
            this.orderID = Number(row.order_id)
            this.skuID = Number(row.sku_id)
            this.orderNO = row.order_no
            this.redirectType = 'edit'
            // const refund = this.getCurrentRefund(id)
            // try{
            //     const res = pay.refund(refund.order_no, refund.sku_id)
            //     if (res.error_code === 0) {
            //         this.$message.success(`退款成功`)
            //         this.getRefundDetail()
            //     }
            // } catch (e) {
            //
            // }
            
        },
        getStatusVal(val) {
            let statusStyle = {
                statusVal: '',
                type: ''
            }
            switch (val) {
                case status['REFUND']:
                    statusStyle = {
                        statusVal: '退款中',
                        type: 'danger'
                    }
                    break
                case status['REFUNDSUCCESS']:
                    statusStyle = {
                        statusVal: '退款通过',
                        type: 'success'
                    }
                    break
                case status['REFUNDFAIL']:
                    statusStyle = {
                        statusVal: '拒绝退款',
                        type: 'success'
                    }
                    break
                case status['REFUNDANDGOODS']:
                    statusStyle = {
                        statusVal: '退货退款中',
                        type: 'success'
                    }
                    break
                case status['REFUNDANDGOODSSUCCESS']:
                    statusStyle = {
                        statusVal: '退货退款通过',
                        type: 'success'
                    }
                    break

                case status['REFUNDANDGOODSFAIL']:
                    statusStyle = {
                        statusVal: '拒绝退货退款',
                        type: 'success'
                    }
                    break
            }
            return statusStyle
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
                // const id = [val.row.id]
                // this.loading = true
                // const res = await order.delOrder(id)
                // this.loading = false
                // if (res.error_code === 0) {
                //     this.getOrders(this.currentPage - 1)
                //     this.$message({
                //         type: 'success',
                //         message: `${res.msg}`,
                //     })
                // }
            })
        },
        closePage(val) {
            this.redirectType = 'list'
            if(val) this.getRefunds()
        },
    }
  }
</script>

<style scoped>

</style>