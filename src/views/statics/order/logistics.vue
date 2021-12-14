<template>
    <el-form :model="sendForm" ref="sendForm" :rules="sendRules" v-loading="sendLoading" @submit.native.prevent>
        <el-form-item label="请选择快递公司" label-width="120px">
            <el-select v-model="sendForm.comp" placeholder="请选择公司" prop="comp">
                <el-option :label="value" v-for="(value, key) in company" :value="key"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="快递编号" label-width="120px" prop="number">
            <el-input v-model="sendForm.number" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="" label-width="120px">
            <el-button type="primary" @click="sendSku('sendForm')">确认发货</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
  import order from "@/models/order";
  import logistics from "@/config/order/logistics";
  export default {
    name: "logistics",
    props: {
      order_id: Number
    },
    data() {
      return {
        company: logistics,
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

    },
    methods: {
      sendSku(formName) {
        this.$refs[formName].validate(async valid => {
          if(valid) {
            this.sendLoading = true
            try {
              let sendForm = this.sendForm
              sendForm['orderID'] = this.order_id
              const res = await order.deliverGoods(sendForm)
              if (res.error_code === 0) {
                this.$message.success(`${res.msg}`)
                this.$emit('send')
              }
            } catch (error) {
              this.sendLoading = false
                console.log(error)
                if(!error.data) {
                    this.$message.error(error)
                    return;
                }
              let message = error.data.msg

              if(message && typeof message === 'object'){
                for (const key in message){
                  if(!message[key]) continue;
                  this.$message.error(message[key])
                  await setTimeout(function () {}, 1000)
                }
              }
            }
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

</style>