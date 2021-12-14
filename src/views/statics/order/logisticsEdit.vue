<template>
    <el-form :model="sendForm" ref="sendForm" :rules="sendRules" v-loading="sendLoading" @submit.native.prevent>
        <el-form-item label="请选择快递公司" label-width="120px">
            <el-select v-model="sendForm.comp" size="small" placeholder="请选择公司" prop="comp" :disabled="status !== statusEnum['DELIVERED']">
                <el-option :label="value" v-for="(value, key) in company" :value="key"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="快递编号" label-width="120px" prop="number">
            <el-input class="input-class" v-model="sendForm.number" size="small" autocomplete="off" :disabled="status !== statusEnum['DELIVERED']"></el-input>
        </el-form-item>
        <el-form-item label="" label-width="120px" v-if="status === statusEnum['DELIVERED']">
            <el-button type="primary" @click="sendSku('sendForm')">更新发货记录</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
  import order from "@/models/order";
  import logistics from "@/config/order/logistics";
  import statusEnum from "@/config/order/orderStatusEnum";

  export default {
    name: "logisticsEdit",
    props: {
      order_no: String,
      status: Number
    },
    data() {
      return {
        statusEnum: statusEnum,
        company: logistics,
        deliverData: null,
        sendLoading: false,
        sendRules: {
          number: [
            { required: true, message: '请输入快递号', trigger: 'blur' }
          ],
          comp: [
            { required: true, message: '请输入快递公司名', trigger: 'blur' }
          ]
        },
        sendForm: {
          number: '',
          comp: ''
        },
      }
    },
    created() {
        this.getDeliverRecord()
    },
    methods: {
      async getDeliverRecord() {

        const order_no = this.order_no
        let deliverData = null
        try {
          deliverData = await order.getDeliverRecord(order_no)
          this.sendForm['number'] = deliverData['number']
          this.sendForm['comp'] = deliverData['comp']
          this.sendForm['id'] = deliverData['id']
        }catch (e) {
          console.log(e)
        }

      },
      sendSku(formName) {
        this.$refs[formName].validate(async valid => {
          if(valid) {
            this.sendLoading = true
            try {
              let sendForm = this.sendForm
              const res = await order.updateDeliverRecord(this.order_no, sendForm)
              if (res.error_code === 0) {
                this.$message.success(`${res.msg}`)
              }
            } catch (error) {
              this.sendLoading = false
              let message = error.data.msg
              if(message && typeof message === 'object'){
                for (const key in message){
                  if(!message[key]) continue;
                  this.$message.error(message[key])
                  await setTimeout(function () {}, 1000)
                }
              }
            }
            this.$emit('close')
            this.sendLoading = false
          } else {
            this.$message.error('请填写正确的信息')
            return false
          }
        })
      },
    }
  }
</script>

<style scoped>
    .input-class{
        width: 280px!important;
    }
</style>