<template>
	<div class="container">
		<div class="title">编辑SPU <span class="back" @click="back(false)"> <i class="iconfont icon-fanhui"></i> 返回 </span></div>
		<div class="wrap">
			<el-row>
				<el-col :lg="16" :md="20" :sm="24" :xs="24">
					<el-form :model="form" status-icon ref="form" v-loading="loading" :rules="rules" label-width="120px" @submit.native.prevent>
						<el-form-item label="标题" prop="id">
							<el-input size="medium" v-model="form.id" placeholder="请填写id"></el-input>
						</el-form-item>
						<el-form-item label="标题" prop="title">
							<el-input size="medium" v-model="form.title" placeholder="请填写标题"></el-input>
						</el-form-item>
						<el-form-item label="标记" prop="mark">
							<el-input size="medium" v-model="form.mark" placeholder="请填写标记"></el-input>
						</el-form-item>
						<el-form-item label="图片" prop="img">
							<el-input size="medium" v-model="form.img" placeholder="请填写图片"></el-input>
						</el-form-item>
						<el-form-item label="标签" prop="label">
							<el-input size="medium" v-model="form.label" placeholder="请填写标签"></el-input>
						</el-form-item>
						<el-form-item label="投票数" prop="nullNum">
							<el-input size="medium" v-model="form.nullNum" placeholder="请填写投票数"></el-input>
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
	import prize from "@/models/prize"

	export default {
		name: 'SkuAdd',
		components: {
		},
		props: {
			editID: Number
		},
		data() {
			return {
				loading: false,
				form: {
					title: '',
					description: '',
					img: '',
				},
				rules: {

				}
			}
		},
		created() {
			this.getSpu()
		},
		methods: {
			// 获取spu信息
			async getSpu() {
				this.loading = true
				try {
					let form = await prize.getSpus(this.editID)
					this.form = form['data'][0]
				} catch(error) {
					this.back(false)
				}
				this.loading = false
			},
			submitForm(formName) {
				this.$refs[formName].validate(async valid => {
					if(valid) {
						this.loading = true
						try {
							const {id, title, description, img, label, nullNum, mark} = this.form
							const res = await prize.editSpu(this.editID, {id, title, description, img, label, nullNum, mark})
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
	.multiple-select ::v-deep{
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

	// 折扣值设置
	.discount_price{
		.discount-input{
			margin: 5px 0;
		}
	}
</style>
