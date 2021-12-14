<template>
  <div class="container">
    <div class="title">新建规格名 <span class="back" @click="back(false)"> <i class="iconfont icon-fanhui"></i> 返回 </span></div>
    <div class="wrap">
      <el-row>
        <el-col :lg="16" :md="20" :sm="24" :xs="24">
          <el-form :model="form" status-icon ref="form" :rules="rules" v-loading="loading" label-width="120px" @submit.native.prevent>
            <el-form-item label="规格名名称" prop="name">
              <el-input size="medium" v-model="form.name" placeholder="请填写规格名名称"></el-input>
            </el-form-item>
            <el-form-item label="规格名描述" prop="description">
              <el-input size="medium" v-model="form.description" placeholder="请填写规格名描述"></el-input>
            </el-form-item>
						<el-form-item label="单位" prop="unit">
							<el-input size="medium" v-model="form.unit" placeholder="请填写单位"></el-input>
						</el-form-item>
						<el-form-item label="是否标准" prop="online">
							<el-switch
								v-model="form.standard"
								active-color="#3963bc"
								active-text="标准"
								inactive-text="非标准"
							></el-switch>
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
import spec from '@/models/spec'

export default {
  data() {
    return {
      loading: false,
      form: {
        name: '',
        description: '',
        unit: '',
        standard: true
      },
      rules: {
        name: [
          { required: true, message: '请输入轮播图名称', trigger: 'blur' }
        ]
      },
    }
  },
  methods: {
     submitForm(formName) {
      this.$refs[formName].validate(async valid => {
        if(valid) {
          try {
            this.loading = true
            const res = await spec.addSpec(this.form)
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
}
</style>
