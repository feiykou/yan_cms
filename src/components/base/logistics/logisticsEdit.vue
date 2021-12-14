<template>
    <el-form class="el-form-wrap" :model="sendForm" ref="sendForm" :rules="sendRules" v-loading="loading" @submit.native.prevent>
        <el-form-item label="请选择快递公司" label-width="120px">
            <el-select v-model="sendForm.comp" size="small" placeholder="请选择公司" prop="comp" :disabled="disabled">
                <el-option :label="value" v-for="(value, key) in company" :value="key"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="快递编号" label-width="120px" prop="number">
            <el-input class="input-class" v-model="sendForm.number" size="small" autocomplete="off" :disabled="disabled"></el-input>
        </el-form-item>
        <el-form-item label="" label-width="120px" v-if="!disabled">
            <el-button type="primary" v-if="sendStatus" @click="send('sendForm')">更新发货记录</el-button>
            <el-button type="primary" v-else @click="send('sendForm', 1)">发货</el-button>
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
      sendForm: Object,
      disabled: {
        type: Boolean,
        value: true
      },
      loading: Boolean
    },
    data() {
      return {
        statusEnum: statusEnum,
        company: logistics,
        deliverData: null,
          sendStatus: false,
        sendRules: {
          number: [
            { required: true, message: '请输入快递号', trigger: 'blur' }
          ],
          comp: [
            { required: true, message: '请输入快递公司名', trigger: 'blur' }
          ]
        }
      }
    },
    created() {
    },
      watch: {
          sendForm: {
              handler(val) {
                  if(val.comp) {
                     this.sendStatus = true
                  }
              },
              immediate: true
          }
      },
    methods: {

      send(formName, type) {
          console.log(type)
        this.$refs[formName].validate(async valid => {
          if(valid) {
              console.log(type)
              if(type == 1) {
                  this.$emit('delivery', this.sendForm)
              } else {
                  this.$emit('send', this.sendForm)
              }
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
    .el-form-wrap{
        padding: 30px 0 0 0 ;
    }
    .input-class{
        width: 280px!important;
    }
</style>