<template>
  <div class="container">
    <div class="title">编辑类型 <span class="back" @click="back(false)"> <i class="iconfont icon-fanhui"></i> 返回 </span></div>
    <div class="wrap">
      <el-row>
        <el-col :lg="16" :md="20" :sm="24" :xs="24">
          <el-form :model="form" status-icon ref="form" :rules="rules" v-loading="loading" label-width="120px" @submit.native.prevent>
            <el-form-item label="类型名" prop="name">
              <el-input size="medium" v-model="form.name" placeholder="请填写类型名"></el-input>
            </el-form-item>
            <el-form-item label="字段名" prop="field">
              <el-input size="medium" v-model="form.field" placeholder="请填写字段名"></el-input>
            </el-form-item>
						<el-form-item label="类型值" prop="value">
							<div class="block-box">
                <i class="iconfont icon-jia plus" v-if="!valueList.length" @click="addContent"></i>
                <el-row class="input-row" v-for="(item,index) in valueList" :key="index">
                  <el-input
                    v-model="item.text"
                    placeholder="请输入内容"
                    size="medium"
                    class="input-detail"
                    ></el-input>
                  <div class="function">
                    <i class="iconfont icon-jian1 minus" @click="removeContent(index)"></i>
                    <i class="iconfont icon-jia plus" v-if="index === valueList.length-1" @click="addContent"></i>
                  </div>
                </el-row>
              </div>
						</el-form-item>
            <el-form-item class="submit">
              <el-button type="primary" @click="submitForm('form')">保 存</el-button>
              <el-button @click="resetForm('form')">重 置</el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import type from '@/models/type'

export default {
  props: {
    editID: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      loading: false,
      valueList: [],
      form: {
        name: '',
        field: '',
        value: [],
      },
      rules: {
        name: [
          { required: true, message: '请输入类型名', trigger: 'blur' }
        ],
        field: [
          { required: true, message: '请输入字段名', trigger: 'blur' }
        ],
      },
    }
  },
  created() {
    this.getType()
  },
  methods: {
    async getType() {
      this.loading = true
      try {
        let form = await type.getType(this.editID)
        if(form.value.length > 0) {
          let valueList = []
          form.value.forEach(ele => {
            valueList.push({
              text: ele,
              type: 'plus'
            })
          })
          this.valueList = valueList
        }
        
        this.form = form
      } catch(error) {
        if(error.data) {
					let message = error.data.msg
					if(message && typeof message === 'object'){
						for (const key in message){
							this.$message.error(message[key])
							await setTimeout(function () {}, 1000)
						}
					}
				} else {
					this.$message.error(error.toString())
				}
      }
      this.loading = false
    },
    submitForm: Utils.debounce(function(formName){
      if(this.valueList.length <= 0) {
        this.$message.error(`请输入类型值`)
        return
      }
      this.form.value = []
      this.valueList.forEach(ele => {
        this.form.value.push(ele.text)
      })
      this.$refs[formName].validate(async valid => {
        if(valid) {
          try {
            this.loading = true
            const res = await type.editType(this.editID, this.form)
            this.loading = false
            if (res.error_code === 0) {
              this.$message.success(`${res.msg}`)
              this.resetForm(formName)
                this.back(true)
            }
          } catch (error) {
            let message = error.data.msg
            if(message && typeof message === 'object'){
							for (const key in message){
                this.$message.error(message[key])
								await setTimeout(function () {}, 1000)
							}
            }
          }
				} else {
          this.$message.error('请填写正确的信息')
          return false
				}
			})
    }, 300),
    addContent() {
      this.valueList.push({
        text: '',
        type: 'plus',
      })
    },
    removeContent(index) {
      this.valueList.splice(index, 1)
    },
    // 重置表单
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
      back(status = false) {
          this.$emit('close', status)
      }
  },
}
</script>

<style lang="scss" scoped>
.container {
    .title {
        height: 59px;
        line-height: 59px;
        color: $parent-title-color;
        font-size: 16px;
        font-weight: 500;
        text-indent: 40px;
        border-bottom: 1px solid #dae1ec;
        .back {
            float: right;
            margin-right: 40px;
            cursor: pointer;
        }
    }

  .wrap {
    padding: 20px;
  }

  .submit {
    float: left;
  }

    .label-title{
      margin-bottom: 10px;
    }
    .block-box{
      background: #f7f7f7;
      padding: 20px;
    }
    .block-box .plus{
        cursor: pointer;
        font-size: 24px;
        font-weight: 550;
        color: #7289b2;
    }
    .block-box .input-row{
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
            -ms-flex-pack: justify;
                justify-content: space-between;
        width: 400px;
        margin-bottom: 20px;
    }
    .block-box .input-row .input-detail{
          width: 300px;
    }
    .block-box .input-row .function{
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-pack: justify;
              -ms-flex-pack: justify;
                  justify-content: space-between;
          width: 60px;
          height: 36px;
          line-height: 36px;
          cursor: pointer;
    }
    .block-box .input-row .function .iconfont{
            font-size: 24px;
            font-weight: 550;
    }
    .block-box .input-row .function .iconfont.plus{
              color: #7289b2;
    }
    .block-box .input-row .function .iconfont.minus{
              font-size: 26px;
              color: #c6848e;
    }
}
</style>
