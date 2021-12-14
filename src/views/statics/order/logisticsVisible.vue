<template>
    <div>
        <div class="logistics-wrap" v-if="type != 2">
            <logisticsEdit :order_no="order_no" :status="status" @close="logisticsClose"></logisticsEdit>
        </div>
        <div v-if="logistics">
            <div class="radio">
                <span>排序</span>
                <el-radio-group v-model="reverse">
                    <el-radio :label="true">倒序</el-radio>
                    <el-radio :label="false">正序</el-radio>
                </el-radio-group>
            </div>
            <el-timeline :reverse="reverse">
                <el-timeline-item
                        v-for="(activity, index) in logistics"
                        :key="index"
                        :timestamp="activity.timestamp">
                    {{activity.content}}
                </el-timeline-item>
            </el-timeline>
        </div>
        <div class="no-data-class" v-else>物流查询失败</div>
    </div>
</template>

<script>
  import order from "@/models/order";
  import logisticsEdit from "./logisticsEdit"
  import refundModel from "@/models/refund"

  export default {
    name: "logisticsVisible",
    components: {
      logisticsEdit
    },
    props: {
      type: Number,
      order_no: String,
      refund_id: Number,
      status: Number
    },
    data() {
      return {
        logistics: [],
        reverse: true,
        loading: false
      }
    },
    created() {

    },
  watch: {
      type: {
          handler(val) {
              if(val == 1) {
                  this.lookLogistics()
              } else {
                  this.refundLogistics()
              }
          },
          immediate: true
      }
  },
    methods: {
        async refundLogistics() {
            const refund_id = this.refund_id
            if(!refund_id) return;
            let logistics = null
            try{
                logistics = await refundModel.queryLogistics(refund_id)
                logistics = this.handleLogistics(logistics['list'])
            } catch (e) {
                if(error && error.data) {
                    let message = error.data.msg
                    this.$message.error(message)
                }
            }
            this.logistics = logistics
        },
      async lookLogistics() {
        let orderNo = this.order_no,
          logistics = this.logistics
        if(!logistics) return;
        try {
          logistics = await order.getLogistics(orderNo)
          logistics = this.handleLogistics(logistics['list'])
        }catch (error) {
          if(error && error.data) {
            let message = error.data.msg
            this.$message.error(message)
          }
        }
        this.logistics = logistics
      },
      handleLogistics(logisticsList) {
        let arr = [],
          json ={}
        logisticsList.forEach(res => {
          json.content = res.remark
          json.timestamp = res.datetime
          arr.push(json)
          json = {}
        })
        return arr
      },
      logisticsClose() {
        this.lookLogistics()
      }
    }
  }
</script>

<style lang="scss" scoped>
    .radio{
        display: flex;
        margin: 20px 0 30px;
        span{
            width: 50px;
        }
    }
    .no-data-class{
        text-align: center;
        margin: 50px 0;
    }
</style>