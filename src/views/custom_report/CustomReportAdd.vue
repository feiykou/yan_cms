<template>
  <div class="container">
    <div class="title">添加客户报表</div>
    <div class="wrap">
      <el-row>
        <el-col :lg="16" :md="20" :sm="24" :xs="24">
          <el-form :model="form" status-icon ref="form" :rules="rules" v-loading="loading" label-width="120px" @submit.native.prevent>
            <el-form-item label="名称" prop="name">
              <el-input size="medium" v-model="form.name" placeholder="请填写名称"></el-input>
            </el-form-item>
            
            <el-form-item label="客户" prop="user_id">
							<el-select size="medium" filterable v-model="form.user_id" placeholder="请选择客户">
								<template v-for="(val, index) in customerData">
									<el-option :value="val.id" :key="index" :label="val.name">
										<span style="color: #b4b4b4; margin-right: 15px; font-size: 12px;">{{ index+1}}</span>
										<span>{{ val.name }}</span>
									</el-option>
								</template>
							</el-select>
						</el-form-item>

            <el-form-item label="备注" prop="remarks">
              <el-input size="medium" v-model="form.remarks" placeholder="请输入备注"></el-input>
            </el-form-item>

            <el-form-item label="审核状态" prop="status">
							<el-switch
								v-model="form.status"
								active-color="#3963bc"
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
import CustomReport from '@/models/custom_report'
import customer from '@/models/customer'

export default {
  data() {
    return {
      loading: false,
      customerData: [],
      form: {
        user_id: '',
        name: '',
        remarks: '',
        status: false
      },
      rules: {
        user_id: [
          { required: true, message: '请选择用户', trigger: 'blur' }
        ],
        name: [
          { required: true, message: '请输入名称', trigger: 'blur' }
        ],
        remarks: [
          { required: true, message: '请输入备注', trigger: 'blur' }
        ]
      },
    }
  },
  created() {
    this.getCustomers()
  },
  methods: {
    async getCustomers(page = 0) {
				let customerLists = await customer.getCustomers(page,100,1)
				if (customerLists.total_nums <=0 ){
					this.customerData = []
					return
				}
				this.customerData = customerLists.collection
		},
     submitForm(formName) {
      this.$refs[formName].validate(async valid => {
        if(valid) {
          try {
            this.loading = true
            const res = await CustomReport.add(this.form)
            this.loading = false
            if (res.error_code === 0) {
              this.$message.success(`${res.msg}`)
              this.resetForm(formName)
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
  }

  .wrap {
    padding: 20px;
  }

  .submit {
    float: left;
  }
}
</style>
