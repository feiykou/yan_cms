<template>
	<div class="container">
		<div class="title">编辑项目 <span class="back" @click="back(false)"> <i class="iconfont icon-fanhui"></i> 返回 </span></div>
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
							<el-input class="mt10" size="medium" :disabled="!customerSourceDisplay?'disabled':false" v-model="customer_source_other" placeholder="请填写项目客户来源"></el-input>
						</el-form-item>
						<el-form-item label="使用场景" prop="scene">
							<el-select size="medium" filterable v-model="form.scene" placeholder="请选择使用场景">
								<template v-for="(val, index) in sceneData">
									<el-option :value="val" :key="index" :label="val">
										<span style="color: #b4b4b4; margin-right: 15px; font-size: 12px;">{{ index+1}}</span>
										<span>{{ val }}</span>
									</el-option>
								</template>
							</el-select>
							<el-input class="mt10" size="medium" :disabled="!sceneDisplay?'disabled':false" v-model="scene_other" placeholder="请填写客户使用场景"></el-input>
						</el-form-item>
						<el-form-item label="客户行业" prop="industry">
							<el-input class="mt10" size="medium" v-model="form.industry" placeholder="请填写客户行业"></el-input>
						</el-form-item>
						<el-form-item label="产品类型" prop="product_type">
							<el-select size="medium" filterable v-model="form.product_type" placeholder="请选择产品类型">
								<template v-for="(val, index) in productTypeData">
									<el-option :value="val" :key="val" :label="val">
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
						<el-form-item label="成交时间" prop="status_success_time" v-if="form.follow_status == successStatus">
							<el-date-picker
								v-model="form.status_success_time"
								type="date"
								value-format="yyyy-MM-dd HH:mm:ss"
								placeholder="选择成交时间">
							</el-date-picker>
						</el-form-item>
						<el-form-item label="丢单原因" prop="reason" v-if="isStatusExamine">
							<el-select size="medium" filterable v-model="form.reason" placeholder="请选择丢单原因">
								<template v-for="(val, index) in reasonData">
									<el-option :value="val" :key="index" :label="val">
										<span style="color: #b4b4b4; margin-right: 15px; font-size: 12px;">{{ index+1}}</span>
										<span>{{ val }}</span>
									</el-option>
								</template>
							</el-select>
							<el-input class="mt10" size="medium" :disabled="!lostOrderDisplay?'disabled':false" v-model="lost_order_other" placeholder="请填写客户丢单原因"></el-input>
						</el-form-item>
						<el-form-item label="订单编码" prop="order_no">
							<el-input size="medium" v-model="form.order_no" placeholder="请填写订单编码"></el-input>
						</el-form-item>
						<el-form-item label="跟进次数" prop="follow_count">
							<el-input size="small" v-model="form.follow_count" placeholder="请填写跟进次数"></el-input>
						</el-form-item>
						<el-form-item class="submit" v-if="!onlyRead">
							<template v-if="!isStatusIng">
								<el-button type="primary" @click="submitform('form')">{{!isStatusExamine?'保 存':'申 请'}}</el-button>
								<el-button @click="resetForm('form')">重 置</el-button>
							</template>
							<el-button v-else type="primary" disabled>正在申请中</el-button>
							
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
import config from '@/config/index.js'
import projectExamine from '@/models/project-examine'
import Utils from '@/lin/utils/util'
export default {
	name: 'CulturalAdd',
	props: {
		editID: Number,
		onlyRead: {
			type: Boolean,
			default: false
		}
	},
	data() {
		const statusValidate = (rule, value, callback) => {
			if(config.followStatusExamine.indexOf(value) != -1) {
				this.$refs.form.validateField('reason')
			}
			callback()
		}
		return {
			loading: false,
			demandBgData: ['已受灾','应付检查','系统统一安装','领导要求','其它'],
			productTypeData: ['不锈钢开启式','不锈钢密闭式','铝合金组合式','水动力','ABS'],
			statusData: [],
			channelData: [], // 客户来源
			sceneData: [],
			reasonData: [],
			fieldObj: {
				"status": "statusData",
				"project_product_type": "productTypeData",
				"project_demand_bg": "demandBgData",
				"project_channel": "channelData",
				"project_usage": "sceneData",
				"project_cause": "reasonData"
			},
			demand_bg_other: '',
			demandBgDisplay: false,  // 客户需求背景是否禁用
			scene_other: '', 
			sceneDisplay: false,  // 使用场景
			lost_order_other: '',
			lostOrderDisplay: false,  // 丢单原因
			customer_source_other: '',
			customerSourceDisplay: false,  // 项目客户来源
			isStatusExamine: false,
			successStatus: config.successStatus, // 成交状态：已成交
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
				follow_status: ''
			},
			isStatusIng: false,
			rules: {
				name: [
					{ required: true, message: '请输入名称', trigger: 'blur' }
				],
				follow_status: [
					{validator: statusValidate}
				],
				reason: [
					{required: true, message: '选择无意向客户，原因必填', trigger: 'blur' }
				]
			},
		}
	},
	created() {
		this.getProject()
		this.getTypes()
	},
	watch: {
		form: {
			handler(val, oldVal) {
				if(val.follow_status && config.followStatusExamine.indexOf(val.follow_status) != -1) {
					this.isStatusExamine = true
				} else {
					this.isStatusExamine = false
				}
				// 客户需求背景
				if(val.demand_bg == '其它') {
					this.demandBgDisplay = true
				} else {
					this.demandBgDisplay = false
					this.demand_bg_other = ''
				}
				// 使用场景
				if(val.scene == '其它') {
					this.sceneDisplay = true
				} else {
					this.sceneDisplay = false
					this.scene_other = ''
				}
				// 丢单原因
				if(val.reason == '其它') {
					this.lostOrderDisplay = true
				} else {
					this.lostOrderDisplay = false
					this.lost_order_other = ''
				}
				// 项目客户来源
				if(val.project_channel == '其它') {
					this.customerSourceDisplay = true
				} else {
					this.customerSourceDisplay = false
					this.customer_source_other = ''
				}
			},
			deep: true
		}
	},
	methods: {
		async getProject() {
			this.loading = true
			try {
				let form = await project.getCustomerProject(this.editID)
				this._handleCustomerResData(form)
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
		_handleCustomerResData(form) {
			const customerAdd = form
			if(customerAdd['demand_bg'].indexOf('其它') != -1) {
				const arr = customerAdd['demand_bg'].split('-')
				customerAdd['demand_bg'] = arr[0]
				this.demand_bg_other = arr[1]
			}
			if(customerAdd['scene'].indexOf('其它') != -1) {
				const arr = customerAdd['scene'].split('-')
				customerAdd['scene'] = arr[0]
				this.scene_other = arr[1]
			}
			if(customerAdd['reason'].indexOf('其它') != -1) {
				const arr = customerAdd['reason'].split('-')
				customerAdd['reason'] = arr[0]
				this.lost_order_other = arr[1]
			}
			if(customerAdd['project_channel'].indexOf('其它') != -1) {
				const arr = customerAdd['project_channel'].split('-')
				customerAdd['project_channel'] = arr[0]
				this.customer_source_other = arr[1]
			}
			if(customerAdd['examine'] && customerAdd['examine']['status'] == 2) {
				this.isStatusIng = true
			} else {
				this.isStatusIng = false
			}
			this.form = form
		},
		settingFollow() {
			const formData = this.form
			if(formData.demand_bg == '其它') {
				formData.demand_bg = '其它-'+ this.demand_bg_other
			}
			if(formData.scene == '其它') {
				formData.scene = '其它-'+ this.scene_other
			}
			if(formData.reason == '其它') {
				formData.reason = '其它-'+ this.lost_order_other
			}
			if(formData.project_channel == '其它') {
				formData.project_channel = '其它-'+ this.customer_source_other
			}
			
			return formData
		},
		submitform: Utils.debounce(function(formName){
			console.log(this)
			const that = this
			this.$refs[formName].validate(async valid => {
				if(valid) {
					this.loading = true
					try {
						const res = await project.editCustomerProject(this.editID, this.settingFollow())
						if(config.followStatusExamine.indexOf(this.form.follow_status) != -1){
							await projectExamine.addProjectExamine({
								'project_id': that.form.id,
								'customer_id': that.form['customer_id']
							})
						}
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
		}, 300),
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
