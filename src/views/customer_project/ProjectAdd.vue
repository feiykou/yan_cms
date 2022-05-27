<template>
	<div class="container">
		<div class="title">新建项目 <span class="back" @click="back(false)"> <i class="iconfont icon-fanhui"></i> 返回 </span></div>
		<div class="wrap">
			<el-row>
				<el-col :lg="16" :md="20" :sm="24" :xs="24">
					<el-form :model="form" status-icon ref="form" v-loading="loading" :rules="rules" label-width="120px" @submit.native.prevent>
						<el-form-item label="项目名" prop="name">
							<el-input size="medium" v-model="form.name" placeholder="请填写项目名"></el-input>
						</el-form-item>
						<el-form-item label="客户来源" prop="project_channel">
							<el-select size="medium" filterable v-model="form.project_channel" placeholder="请选择客户来源">
								<template v-for="(val, index) in channelData">
									<el-option :value="val" :key="index" :label="val">
										<span style="color: #b4b4b4; margin-right: 15px; font-size: 12px;">{{ index+1}}</span>
										<span>{{ val }}</span>
									</el-option>
								</template>
							</el-select>
						</el-form-item>
						<el-form-item label="使用场景" prop="scene">
							<el-input size="medium" v-model="form.scene" placeholder="请填写使用场景"></el-input>
						</el-form-item>
						<el-form-item label="客户行业" prop="industry">
							<el-select size="medium" filterable v-model="form.industry" placeholder="请选择客户行业">
								<template v-for="(val, index) in industryData">
									<el-option :value="val" :key="index" :label="val">
										<span style="color: #b4b4b4; margin-right: 15px; font-size: 12px;">{{ index+1}}</span>
										<span>{{ val }}</span>
									</el-option>
								</template>
							</el-select>
							<el-input class="mt10" :disabled="!industryDisplay?'disabled':false" size="medium" v-model="industry_other" placeholder="请填写客户行业"></el-input>
						</el-form-item>
						<el-form-item label="产品类型" prop="product_type">
							<el-select size="medium" filterable v-model="form.product_type" placeholder="请选择产品类型">
								<template v-for="(val, index) in productTypeData">
									<el-option :value="index" :key="val" :label="val">
										<span style="color: #b4b4b4; margin-right: 15px; font-size: 12px;">{{ index+1}}</span>
										<span>{{ val }}</span>
									</el-option>
								</template>
							</el-select>
						</el-form-item>
						<el-form-item label="产品规格" prop="product_spec" class="form-item">
							<el-input size="medium" v-model="form.product_spec" placeholder="请填写产品规格"></el-input>
						</el-form-item>
						<el-form-item label="产品数量" prop="product_num">
							<el-input-number v-model="form.product_num" :min="1" :max="10" label="产品数量"></el-input-number>
						</el-form-item>
						<el-form-item label="产品报价" prop="product_price">
							<el-input size="medium" v-model="form.product_price" placeholder="请填写产品报价"></el-input>
						</el-form-item>
						<el-form-item label="客户需求背景" prop="demand_bg">
							<el-select size="medium" filterable v-model="form.demand_bg" placeholder="请选择客户需求背景">
								<template v-for="(val, index) in demandBgData">
									<el-option :value="val" :key="index" :label="val">
										<span style="color: #b4b4b4; margin-right: 15px; font-size: 12px;">{{ index+1}}</span>
										<span>{{ val }}</span>
									</el-option>
								</template>
							</el-select>
							<el-input class="mt10" size="medium" :disabled="!demandBgDisplay?'disabled':false" v-model="demand_bg_other" placeholder="请填写客户需求背景"></el-input>
						</el-form-item>
						<el-form-item label="需求描述" prop="demand_desc">
							<el-input type="textarea" size="medium" v-model="form.demand_desc" placeholder="请填写需求描述"></el-input>
						</el-form-item>
						<el-form-item label="提供对应解决方案" prop="solution">
							<el-input type="textarea" size="medium" v-model="form.solution" placeholder="请填写对应解决方案"></el-input>
						</el-form-item>
						<el-form-item label="工程安装解决方案" prop="install_solution">
							<el-input type="textarea" size="medium" v-model="form.install_solution" placeholder="请填写工程安装解决方案"></el-input>
						</el-form-item>
						<el-form-item label="客户关注产品亮点" prop="product_lights">
							<el-input type="textarea" size="medium" v-model="form.product_lights" placeholder="请填写客户关注产品亮点"></el-input>
						</el-form-item>
						<el-form-item label="客户价值" prop="custom_value">
							<el-input type="textarea" size="medium" v-model="form.custom_value" placeholder="请填写客户价值"></el-input>
						</el-form-item>
						<el-form-item label="业务跟进困难点" prop="follow_difficulty">
							<el-input type="textarea" size="medium" v-model="form.follow_difficulty" placeholder="请填写业务跟进困难点"></el-input>
						</el-form-item>
						<el-form-item label="客户反馈" prop="custom_feedback">
							<el-input type="textarea" size="medium" v-model="form.custom_feedback" placeholder="请填写客户反馈"></el-input>
						</el-form-item>
						<el-form-item label="跟进状态" prop="follow_status">
							<el-select size="medium" filterable v-model="form.follow_status" placeholder="请选择跟进状态">
								<template v-for="(val, index) in statusData">
									<el-option :value="val" :key="index" :label="val">
										<span style="color: #b4b4b4; margin-right: 15px; font-size: 12px;">{{ index+1}}</span>
										<span>{{ val }}</span>
									</el-option>
								</template>
							</el-select>
						</el-form-item>
						<el-form-item label="订单编码" prop="order_no">
							<el-input size="medium" v-model="form.order_no" placeholder="请填写订单编码"></el-input>
						</el-form-item>
						<el-form-item label="跟进次数" prop="follow_count">
							<el-input size="small" v-model="form.follow_count" placeholder="请填写跟进次数"></el-input>
						</el-form-item>
						<el-form-item label="丢单原因" prop="reason">
							<el-input type="textarea" size="medium" v-model="form.reason" placeholder="请填写丢单原因"></el-input>
						</el-form-item>
						
						<el-form-item class="submit">
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
import project from '@/models/customer_project'
import type from "@/models/type"


export default {
	name: 'CulturalAdd',
	props: {
		linkCode: Number
	},
	data() {
		return {
			loading: false,
			demandBgData: ['已受灾','应付检查','系统统一安装','领导要求','其他'],
			productTypeData: ['不锈钢开启式','不锈钢密闭式','铝合金组合式','水动力','ABS'],
			industryData: ['商场','工厂','其他'],
			statusData: [], // 跟进状态
			channelData: [], // 客户来源
			fieldObj: {
				"industry": "industryData",
				"status": "statusData",
				"product_type": "productTypeData",
				"demand_bg": "demandBgData",
				"project_channel": "channelData"
			},
			industry_other: '', // 客户行业其他内容填写
			demand_bg_other: '',
			demandBgDisplay: false,  // 客户需求背景是否禁用
			industryDisplay: false,  // 客户行业其他是否禁用
			form: {			
				name: '',		
				scene: '',
				industry: '',
				product_type: '',
				product_spec: '',
				product_num: '',
				product_price: '',
				demand_bg: '',
				demand_desc: '',
				solution: '',
				install_solution: '',
				product_lights: '',
				custom_value: '',
				follow_difficulty: '',
				custom_feedback: '',
				follow_count: 0,
				reason: '',
				follow_status: '',
			},
			rules: {
				name: [
				{ required: true, message: '请输入名称', trigger: 'blur' }
				]
			},
		}
	},
	created() {
		this.getTypes()
	},
	watch: {
		form: {
			handler(val, oldVal) {
				// 客户行业
				if(val.industry == '其他') {
					this.industryDisplay = true
				} else {
					this.industryDisplay = false
					this.industry_other = ''
				}
				// 客户需求背景
				if(val.demand_bg == '其他') {
					this.demandBgDisplay = true
				} else {
					this.demandBgDisplay = false
					this.demand_bg_other = ''
				}
			},
			deep: true
		}
	},
	methods: {
		settingFollow() {
			const formData = this.form
			
			formData.link_code = this.linkCode
			if(formData.industry == '其他') {
				formData.industry = '其他-'+ this.industry_other
			}
			if(formData.demand_bg == '其他') {
				formData.demand_bg = '其他-'+ this.demand_bg_other
			}
			return formData
		},
		submitform(formName) {
			this.$refs[formName].validate(async valid => {
				if(valid) {
					this.loading = true
					try {
						const res = await project.addCustomerProject(this.settingFollow())
						
						if (res.error_code === 0) {
							this.$message.success(`${res.msg}`)
						}
						this.back()
					} catch (error) {
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
