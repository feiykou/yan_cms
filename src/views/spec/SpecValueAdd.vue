<template>
	<div class="container">
		<div class="title"><span>添加规格值</span> <span class="back" @click="back(false)"> <i class="iconfont icon-fanhui"></i> 返回 </span></div>
		<div class="wrap">
			<el-row>
				<el-col :lg="16" :md="20" :sm="24" :xs="24">
					<el-form :model="form" status-icon ref="form" v-loading="loading" :rules="rules" label-width="120px" @submit.native.prevent>
						<el-form-item label="规格值名称" prop="name">
							<el-input size="medium" v-model="form.name" placeholder="请填写规格值名称"></el-input>
						</el-form-item>
            <el-form-item label="价格" prop="price">
							<el-input size="medium" v-model="form.price" placeholder="请填写价格"></el-input>
						</el-form-item>
						<el-form-item label="扩展" prop="extend">
							<el-input size="medium" v-model="form.extend" placeholder="扩展"></el-input>
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
		props: {
      specId: Number
		},
    data() {
      const validatePrice = (rule, value,callback) => {
        var priceReg = /(^[1-9]\d*(\.\d{1,2})?$)|(^0(\.\d{1,2})?$)/
        if(priceReg.test(value)) {
          callback()
        } else {
          callback(new Error('请正确输入价格'))
        }
      }
      return {
        form: {
          extend: '',
          name: '',
          price: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入规格值名称', trigger: 'blur' },
          ],
          price: [
            { required: true, message: '请输入价格', trigger: 'blur' },
            { validator: validatePrice, trigger: 'blur'}
          ]
        },
        loading: false,
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate(async valid => {
          if(valid) {
            try {
							if(this.specId > 0) {
                this.form['spec_id'] = this.specId
							}
          		// 创建规格值
							this.loading = true
              const res = await spec.createItem(this.form)
							this.loading = false
              if (res.error_code === 0) {
                this.$message.success(`${res.msg}`)
                this.resetForm(formName)
								this.back(true)
              }
            } catch (error) {
              this.loading = false
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
      /**
			 * 返回上一级
       * @param status 是否更新，true：更新  false：未更新
       */
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
