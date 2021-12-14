<template>
	<div class="container">
		<div class="title">新建优惠券 <span class="back" @click="back(false)"> <i class="iconfont icon-fanhui"></i> 返回 </span></div>
		<div class="wrap">
			<el-row>
				<el-col :lg="16" :md="20" :sm="24" :xs="24">
					<el-form :model="form" status-icon ref="form" v-loading="loading" :rules="rules" label-width="120px" @submit.native.prevent>
						<el-form-item label="标题" prop="title">
							<el-input size="medium" v-model="form.title" placeholder="优惠券标题"></el-input>
						</el-form-item>
						<el-form-item label="名称" prop="name">
							<el-input size="medium" v-model="form.name" placeholder="优惠券名称"></el-input>
						</el-form-item>
						<el-form-item label="库存" prop="stock">
							<el-input size="medium" v-model="form.stock" placeholder="库存"></el-input>
						</el-form-item>
						<el-form-item label="优惠条件" prop="least_cost">
							<el-input size="medium" v-model="form.least_cost" placeholder="优惠条件"></el-input>
						</el-form-item>
						<el-form-item label="减免价格" prop="reduce_cost">
							<el-input size="medium" v-model="form.reduce_cost" placeholder="减免价格"></el-input>
						</el-form-item>
						<el-form-item label="开始日期" prop="start_date">
							<el-date-picker
								v-model="form.start_date"
								type="datetime"
								placeholder="选择日期时间"
								align="right"
								:picker-options="pickerOptions"
							></el-date-picker>
						</el-form-item>
						<el-form-item label="结束日期" prop="end_date">
							<el-date-picker
									v-model="form.end_date"
									type="datetime"
									placeholder="选择日期时间"
									align="right"
									:picker-options="pickerOptions"
							></el-date-picker>
						</el-form-item>
						<el-form-item label="是否启动" prop="online">
							<el-switch
								v-model="form.online"
								active-color="#3963bc"
							></el-switch>
						</el-form-item>
						<el-form-item label="主图" prop="img">
							<upload-imgs ref="uploadEleMain" :rules="imgRules" :maxNum="1" />
						</el-form-item>
						<el-form-item label="跳转链接" prop="url">
							<el-input size="medium" v-model="form.url" placeholder="跳转链接"></el-input>
						</el-form-item>
						<el-form-item label="描述" prop="description">
							<el-input size="medium" v-model="form.description" placeholder="请填写描述"></el-input>
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
  import Coupons from "@/models/coupons";
  import Utils from "@/lin/utils/util";
  import UploadImgs from '@/components/base/upload-imgs'
  import tag from "@/components/base/tag/tag";

  export default {
    name: 'SpuAdd',
	components: {
      UploadImgs,
      tag
	},
    data() {
      return {
        loading: false,
        form: {
          title: '',
          name: '',
          description: '',
          online: true,
          img: '',
        },
        imgRules: {
          minWidth: 100,
          minHeight: 100,
          maxSize: 5,
        },
        rules: {
          title: [
            { required: true, message: '请输入标题', trigger: 'blur' }
          ]
        },
		pickerOptions: {
			  shortcuts: [
				  {
					  text: '今天',
					  onClick(picker) {
						  picker.$emit('pick', new Date())
					  },
				  },
				  {
					  text: '昨天',
					  onClick(picker) {
						  const date = new Date()
						  date.setTime(date.getTime() - 3600 * 1000 * 24)
						  picker.$emit('pick', date)
					  },
				  },
				  {
					  text: '一周前',
					  onClick(picker) {
						  const date = new Date()
						  date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
						  picker.$emit('pick', date)
					  },
				  },
			  ],
		  },
      }
    },
	created() {
	},
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate(async valid => {
          if(valid) {
            this.loading = true
            try {
              await this.solveAllImgs()
              const res = await Coupons.addCoupon(this.form)
              if (res.error_code === 0) {
                this.$message.success(`${res.msg}`)
                this.resetForm(formName)
				this.back()
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
            this.loading = false
          } else {
            this.$message.error('请填写正确的信息')
            return false
          }
        })
      },
	  async solveAllImgs() {
        // 解析上传数据
        const mainUrl = await this.$refs.uploadEleMain.getValue()
        this.form['img'] = Utils.solveUploadImg(mainUrl)
	  },
      // 重置表单
      resetForm(formName) {
        this.$refs[formName].resetFields()
      },
      back(status = true) {
        this.$emit('close', status)
      },
    },
  }
</script>

<style lang="scss" scoped>
	.multiple-select /deep/{
		.el-select .el-tag{
			background-color: #f4f4f5!important;
		}
		.el-select .el-tag__close.el-icon-close{
			background-color: #bac7de!important;
			&:hover{
				background-color: #909399!important;
			}
		}
	}
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

		.back {
			float: right;
			margin-right: 40px;
			cursor: pointer;
		}

		.wrap {
			padding: 20px;
		}

		.submit {
			float: left;
		}
	}
</style>
