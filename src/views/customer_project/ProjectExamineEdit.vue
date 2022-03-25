<template>
	<div class="container">
		<!-- <div class="title">编辑项目 <span class="back" @click="back(false)"> <i class="iconfont icon-fanhui"></i> 返回 </span></div> -->
		<div class="wrap">
			<el-row>
				<el-col :lg="16" :md="20" :sm="24" :xs="24">
					<el-form :model="form" status-icon ref="form" v-loading="loading" :rules="rules" label-width="120px" @submit.native.prevent>
						<el-form-item label="丢单原因">
							<el-input size="medium" disabled v-model="form.reason" placeholder="请填写丢单原因"></el-input>
						</el-form-item>
						<el-form-item label="审核状态" prop="status">
							<el-switch
								v-model="form.status"
								active-text="通过"
								inactive-text="不通过"
								active-color="#3963bc"
							></el-switch>
						</el-form-item>
						<el-form-item label="驳回原因" prop="result_reason" v-if="form.status == 0 || form.status == 2">
							<el-input type="textarea" size="medium" v-model="form.result_reason" placeholder="请填写驳回原因"></el-input>
						</el-form-item>
						<el-form-item class="submit" v-if="!onlyRead">
							<el-button type="primary" @click="submitform('form')">保 存</el-button>
							<el-button @click="resetForm('form')">重 置</el-button>
						</el-form-item>
					</el-form>
				</el-col>
			</el-row>
		</div>
	</div>
</template>

<script>
import projectExamine from '@/models/project-examine'
import type from "@/models/type"
export default {
	name: 'ProjectExamineAdd',
	props: {
		projectID: Number,
		editID: Number,
		onlyRead: {
			type: Boolean,
			default: false
		}
	},
	watch: {
	},
	data() {
		var validateStatus = (rule, value, callback) => {
			if(!value) {
				this.$refs.form.validateField('result_reason')
			}
			callback()
		}
		return {
			loading: false,
			form: {			
				status: '',		
				result_reason: ''
			},
			rules: {
				status: [
					{validator: validateStatus, trigger: 'blur'}
				],
				result_reason: [
					{required: true, message: '如果审核不通过，原因必填', trigger: 'blur'}
				]
			}
		}
	},
	created() {
		this.getProjectExamine()
		this.getTypes()
	},
	methods: {
		async getProjectExamine() {
			this.loading = true
			try {
				let form = await projectExamine.getProjectExamine(this.editID)
				form.status = form.status == 1
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
		
		submitform(formName) {
			this.$refs[formName].validate(async valid => {
				if(valid) {
					this.loading = true
					try {
						const res = await projectExamine.editProjectExamine(this.editID, this.form)
						if (res.error_code === 0) {
							this.$message.success(`${res.msg}`)
						}
						this.back()
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
		// 获取类型
		async getTypes() {
			let fields = []
			const fieldObj = this.fieldObj
			for(let obj in fieldObj) {
				fields.push(obj)
			}
			fields = fields.join()
			let result = await type.getTypeByField(fields)
			if(!result || result.length == 0) return;
			
			for(let obj in fieldObj) {
				const key = fieldObj[obj]
				const curData = result.find(val => {
					return val['field'] == obj
				})
				if(curData) {
					this[key] = curData['value']
				}
			}
			
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
