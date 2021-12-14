<template>
	<div class="container">
		<div class="title"> <span class="back" @click="back(false)"> <i class="iconfont icon-fanhui"></i> 返回 </span></div>
		<el-tabs v-model="activeName">
			<el-tab-pane label="基本信息" name="first">
				<div class="wrap">
					<el-row>
						<el-col :lg="16" :md="20" :sm="24" :xs="24">
							<el-form :model="form" status-icon ref="form" v-loading="loading" :rules="rules" label-width="120px" @submit.native.prevent>
								<el-form-item label="客户名" prop="name">
									<el-input size="medium" v-model="form.name" placeholder="请填写客户名"></el-input>
								</el-form-item>
								<el-form-item label="联系人" prop="contacts_name">
									<el-input size="medium" v-model="form.contacts_name" placeholder="请填写联系人"></el-input>
								</el-form-item>
								<el-form-item label="联系电话" prop="telephone" class="form-item">
									<el-input size="medium" v-model="form.telephone" placeholder="联系电话"></el-input>
								</el-form-item>
								<el-form-item label="联系人邮箱" prop="email">
									<el-input size="medium" v-model="form.email" placeholder="请填写email"></el-input>
								</el-form-item>
								<el-form-item label="客户类型" prop="customer_type">
									<el-select size="medium" filterable v-model="form.customer_type" placeholder="请选择客户类型">
										<template v-for="(val, index) in customerTypeData">
											<el-option :value="val" :key="index" :label="val">
												<span style="color: #b4b4b4; margin-right: 15px; font-size: 12px;">{{ index+1}}</span>
												<span>{{ val }}</span>
											</el-option>
										</template>
									</el-select>
								</el-form-item>
								<el-form-item label="联系人地址" prop="address">
									<el-cascader
										size="large"
										filterable
										:options="formAddresData"
										v-model="form.address">
									</el-cascader>
								</el-form-item>
								<el-form-item label="跟进状态" prop="follow_status">
									<el-select size="medium" filterable v-model="form.follow_status" placeholder="请选择跟进状态">
										<template v-for="(val, index) in followStatuslData">
											<el-option :value="val" :key="index" :label="val">
												<span style="color: #b4b4b4; margin-right: 15px; font-size: 12px;">{{ index+1}}</span>
												<span>{{ val }}</span>
											</el-option>
										</template>
									</el-select>
								</el-form-item>
								<el-form-item label="项目用途" prop="purpose">
									<el-input size="medium" v-model="form.purpose" placeholder="请填写项目用途"></el-input>
								</el-form-item>

								<el-form-item label="客户来源" prop="channel">
									<el-select size="medium" filterable v-model="form.channel" placeholder="请选择客户来源">
										<template v-for="(val, index) in channelData">
											<el-option :value="index" :key="val" :label="val">
												<span style="color: #b4b4b4; margin-right: 15px; font-size: 12px;">{{ index+1}}</span>
												<span>{{ val }}</span>
											</el-option>
										</template>
									</el-select>
								</el-form-item>
								<el-form-item label="客户等级" prop="level">
									<el-select size="medium" filterable v-model="form.level" placeholder="请选择客户等级">
										<template v-for="(val, index) in levelData">
											<el-option :value="val" :key="val" :label="val">
												<span style="color: #b4b4b4; margin-right: 15px; font-size: 12px;">{{ index+1}}</span>
												<span>{{ val }}</span>
											</el-option>
										</template>
									</el-select>
								</el-form-item>
								<el-form-item label="分配用户" prop="dicider_user" v-if="form.author=='super'">
									<el-select size="medium" filterable v-model="form.dicider_user" placeholder="请选择分配用户">
										<template v-for="(val, index) in cuserLists">
											<el-option :value="val.id" :key="index" :label="val.username">
												<span style="color: #b4b4b4; margin-right: 15px; font-size: 12px;">{{ index+1}}</span>
												<span>{{ val.username }}</span>
											</el-option>
										</template>
									</el-select>
								</el-form-item>
								<el-form-item label="维护中客户" prop="is_release_user">
									<el-switch
										v-model="form.is_release_user"
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
			</el-tab-pane>
			<el-tab-pane label="跟进信息" name="second">
				<div class="wrap">
					<el-row>
						<el-col :lg="16" :md="20" :sm="24" :xs="24">
							<el-form :model="form" status-icon ref="followForm" v-loading="followLoading" :rules="rules" label-width="120px" @submit.native.prevent>
								
								<el-form-item label="使用场景" prop="scene">
									<el-input size="medium" v-model="followForm.scene" placeholder="请填写使用场景"></el-input>
								</el-form-item>
								<el-form-item label="客户行业" prop="industry">
									<el-select size="medium" filterable v-model="followForm.industry" placeholder="请选择客户行业">
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
									<el-select size="medium" filterable v-model="followForm.product_type" placeholder="请选择产品类型">
										<template v-for="(val, index) in productTypeData">
											<el-option :value="index" :key="val" :label="val">
												<span style="color: #b4b4b4; margin-right: 15px; font-size: 12px;">{{ index+1}}</span>
												<span>{{ val }}</span>
											</el-option>
										</template>
									</el-select>
								</el-form-item>
								<el-form-item label="产品规格" prop="product_spec" class="form-item">
									<el-input size="medium" v-model="followForm.product_spec" placeholder="请填写产品规格"></el-input>
								</el-form-item>
								<el-form-item label="产品数量" prop="product_num">
									<el-input-number v-model="followForm.product_num" :min="1" :max="10" label="产品数量"></el-input-number>
								</el-form-item>
								<el-form-item label="产品报价" prop="product_price">
									<el-input size="medium" v-model="followForm.product_price" placeholder="请填写产品报价"></el-input>
								</el-form-item>
								<el-form-item label="客户需求背景" prop="demand_bg">
									<el-select size="medium" filterable v-model="followForm.demand_bg" placeholder="请选择客户需求背景">
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
									<el-input type="textarea" size="medium" v-model="followForm.demand_desc" placeholder="请填写需求描述"></el-input>
								</el-form-item>
								<el-form-item label="提供对应解决方案" prop="solution">
									<el-input type="textarea" size="medium" v-model="followForm.solution" placeholder="请填写对应解决方案"></el-input>
								</el-form-item>
								<el-form-item label="工程安装解决方案" prop="install_solution">
									<el-input type="textarea" size="medium" v-model="followForm.install_solution" placeholder="请填写工程安装解决方案"></el-input>
								</el-form-item>
								<el-form-item label="客户关注产品亮点" prop="product_lights">
									<el-input type="textarea" size="medium" v-model="followForm.product_lights" placeholder="请填写客户关注产品亮点"></el-input>
								</el-form-item>
								<el-form-item label="客户价值" prop="custom_value">
									<el-input type="textarea" size="medium" v-model="followForm.custom_value" placeholder="请填写客户价值"></el-input>
								</el-form-item>
								<el-form-item label="业务跟进困难点" prop="follow_difficulty">
									<el-input type="textarea" size="medium" v-model="followForm.follow_difficulty" placeholder="请填写业务跟进困难点"></el-input>
								</el-form-item>
								<el-form-item label="客户反馈" prop="custom_feedback">
									<el-input type="textarea" size="medium" v-model="followForm.custom_feedback" placeholder="请填写客户反馈"></el-input>
								</el-form-item>
								
								<el-form-item class="submit">
									<el-button type="primary" @click="submitFollowForm('followForm')">保 存</el-button>
									<el-button @click="resetForm('followForm')">重 置</el-button>
								</el-form-item>
							</el-form>
						</el-col>
					</el-row>
				</div>
			</el-tab-pane>
			<el-tab-pane label="业主信息" name="third">
				<div class="wrap">
					<el-row>
						<el-col :lg="16" :md="20" :sm="24" :xs="24">
							<el-form :model="form" status-icon ref="mainForm" v-loading="mainLoading" :rules="rules" label-width="120px" @submit.native.prevent>
								<el-form-item label="客户名" prop="main_name">
									<el-input size="medium" v-model="mainForm.main_name" placeholder="请填写客户名"></el-input>
								</el-form-item>
								<el-form-item label="联系人" prop="main_contacts">
									<el-input size="medium" v-model="mainForm.main_contacts" placeholder="请填写联系人"></el-input>
								</el-form-item>
								<el-form-item label="联系电话" prop="main_tel" class="form-item">
									<el-input size="medium" v-model="mainForm.main_tel" placeholder="联系电话"></el-input>
								</el-form-item>
								<el-form-item label="联系人地址" prop="main_address">
									<el-cascader
										size="large"
										filterable
										:options="addressData"
										v-model="mainForm.main_address">
									</el-cascader>
									<div class="mt20">
										<el-input size="medium" v-model="mainForm.main_spec_address" placeholder="请填写详细地址"></el-input>
									</div>
								</el-form-item>
								
								<el-form-item class="submit">
									<el-button type="primary" @click="submitMainForm('mainForm')">保 存</el-button>
									<el-button @click="resetForm('mainForm')">重 置</el-button>
								</el-form-item>
							</el-form>
						</el-col>
					</el-row>
				</div>
			</el-tab-pane>
		</el-tabs>
	</div>
</template>

<script>
	import { provinceAndCityData, regionDataPlus, TextToCode } from 'element-china-area-data'
	import customer from "@/models/customer"
	import store from '@/store'
  	import Admin from '@/lin/models/admin'
	export default {
		name: 'ColumnEdit',
		props: {
			editID: Number
		},
		data() {
			return {
				activeName: 'first',
				addressData: regionDataPlus,
				formAddresData: provinceAndCityData,
				industry_other: '', // 客户行业其他内容填写
				demand_bg_other: '',
				demandBgDisplay: false,  // 客户需求背景是否禁用
				industryDisplay: false,  // 客户行业其他是否禁用
				channelData: [
					"抖音","百度","淘宝","公众号","转介绍","业务员推销","代理","扩容"
				],
				customerTypeData: ['业主','施工方'],
				levelData: ['A','B','C'],
				followStatuslData: ['无意向客户','成交客户','长期跟进','重点跟进','非目标客户'],
				demandBgData: ['已受灾','应付检查','系统统一安装','领导要求','其他'],
				productTypeData: ['不锈钢开启式','不锈钢密闭式','铝合金组合式','水动力','ABS'],
				industryData: ['商场','工厂','其他'],
				loading: false,
				mainLoading: false,
				followLoading: false,
				customerData: [], 
				cuserLists: [], // cms管理员
				form: {
					name: '',
					contacts_name: '',
					telephone: '',
					email: '',
					address: '',
					follow_status: '',
					purpose: '',
					channel: '',
					is_release_user: true,
					customer_type: '',
					dicider_user: ''
				},
				followForm: {					
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
					custom_feedback: ''
				},
				mainForm: {
					main_name: '',
					main_contacts: '',
					main_tel: '',
					main_address: '',
					main_spec_address: ''
				},
				// statusAuth: store.state.auths.includes('获取客户审核权限') || store.state.user.isSuper,
				rules: {
					name: [{ required: true, message: '请输入客户名称', trigger: 'blur' }],
					contacts_name: [{ required: true, message: '请输入联系人', trigger: 'blur' }],
					telephone: [
						{ required: true, message: '请输入联系电话', trigger: 'blur' }
					],
					email: [ 
						{ required: true, message: '请输入邮箱地址', trigger: 'blur' },
						{ type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
					],
					address: [
						{ required: true, message: '请选择联系人地址'}
					],
					purpose: [{ required: true, message: '请输入项目用途', trigger: 'blur' }],
					channel: [{ required: true, message: '请输入客户来源', trigger: 'blur' }],
				},
			}
		},
		watch: {
			followForm: {
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
		created() {
			// 数据初始化
			this._initialize()
			
		},
		methods: {
			_initialize() {
				this.getCustomer()
			},
			// 根据分组 刷新/获取分组内的用户
			async getAdminUsers() {
				let res
				const currentPage = this.currentPage - 1
				try {
					res = await Admin.getAdminUsers({ count: 30, page: 0 }) // eslint-disable-line
					this.cuserLists = [...res.items]
				} catch (e) {
				}
			},
			async getCustomer() {
				this.loading = true
				try {
					let form = await customer.getCustomer(this.editID)
					this._handleCustomerResData(form)
				} catch(error) {
					let message = error.data.msg
					if(message && typeof message === 'object'){
						for (const key in message){
							this.$message.error(message[key])
							await setTimeout(function () {}, 1000)
						}
					}
				}
				if(this.form.author=='super') {
					this.getAdminUsers()
				}
				this.loading = false
			},
			submitForm(formName) {
				this.$refs[formName].validate(async valid => {
					if(valid) {
						this.loading = true
						try {
							if(this.form.dicider_user) {
								const userData = this.cuserLists.filter(ele => ele.id == this.form.dicider_user)
								if(userData) {
									this.form['dicider_user'] = {
										id: userData[0].id,
										name: userData[0].username
									}
								}
							}
							const res = await customer.editCustomer(this.editID, this.form)
							if (res.error_code === 0) {
								this.$message.success(`${res.msg}`)
								// this.resetForm(formName)
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
			settingFollow() {
				const formData = this.followForm
				formData.user_id = this.editID
				formData.link_code = this.form.link_code
				if(formData.industry == '其他') {
					formData.industry = '其他-'+ this.industry_other
				}
				if(formData.demand_bg == '其他') {
					formData.demand_bg = '其他-'+ this.demand_bg_other
				}
				return formData
			},
			submitFollowForm(formName) {
				this.$refs[formName].validate(async valid => {
					if(valid) {
						this.followLoading = true
						try {
							const res = await customer.updateFollowCustomer(this.settingFollow())
							if (res.error_code === 0) {
								this.$message.success(`${res.msg}`)
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
						this.followLoading = false
					} else {
						this.$message.error('请填写正确的信息')
						return false
					}
				})
			},
			submitMainForm(formName) {
				this.$refs[formName].validate(async valid => {
					if(valid) {
						this.mainLoading = true
						try {
							const mainForm = this.mainForm
							mainForm.user_id = this.editID
							mainForm.link_code = this.form.link_code
							if(!mainForm.main_address) {
								mainForm.main_address = '[]'
							}
							const res = await customer.updateMainCustomer(mainForm)
							if (res.error_code === 0) {
								this.$message.success(`${res.msg}`)
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
						this.mainLoading = false
					} else {
						this.$message.error('请填写正确的信息')
						return false
					}
				})
			},
			isChinese(temp){
				var re=/[^\u4E00-\u9FA5]/;
				if (re.test(temp)) return false ;
				return true ;
			},
			_handleCustomerResData(form) {
				// 把数字转化成boolean值
				// excel导入的数据是没有user_id值的，解决customer_add或customer_main不存在的情况
				let isExcel = (form['customer_add'] && form['customer_add']['user_id'] == 0) || 
								(form['customer_main'] && form['customer_main']['user_id'] == 0)
				form['level'] = !form['level']||form['level'] == 0?'':form['level']
				form['is_release_user'] = !!form['is_release_user']
				if(form['customer_add']) {
					const customerAdd = form['customer_add']
					if(customerAdd['industry'].indexOf('其他') != -1) {
						const arr = customerAdd['industry'].split('-')
						customerAdd['industry'] = arr[0]
						this.industry_other = arr[1]
					}
					if(customerAdd['demand_bg'].indexOf('其他') != -1) {
						const arr = customerAdd['demand_bg'].split('-')
						customerAdd['demand_bg'] = arr[0]
						this.demand_bg_other = arr[1]
					}
					
					this.followForm = form['customer_add']
					delete form['customer_add']
				}
				if(form['customer_main']) {
					const mainData = form['customer_main']
					if(mainData['main_address']) {
						if(!mainData['user_id'] && mainData['main_address'][0]) {
							const city = mainData['main_address'][1],
								provice = mainData['main_address'][0],
								area = mainData['main_address'][2],
								cityCode = TextToCode[provice][city].code,								
								proviceCode = TextToCode[provice].code,
								addressArr = [proviceCode, cityCode]
							let areaCode = ''
							if(area) {
								areaCode = TextToCode[provice][city][area].code
								addressArr.push(areaCode)
							}
							// const proviceCode = TextToCode[mainData['main_address'][0]].code,
							// 	cityCode = TextToCode[mainData['main_address'][1]].code
							mainData['main_address'] = addressArr
						} 
					}
					this.mainForm = mainData
					delete form['customer_main']
				}
				if(form['address']) {
					// 判断是否是excel导入的mainData['user_id']
					// 判断地址是否存在，判断地址是否是中文
					if(isExcel && form['address'][0] && this.isChinese(form['address'][0])) {
						const city = form['address'][1],
						provice = form['address'][0],
						cityCode = TextToCode[provice][city].code,
						proviceCode = TextToCode[provice].code,
						addressArr = [proviceCode, cityCode]
						form['address'] = addressArr
					} 
				}
				this.form = form
			},
			// 重置表单
			resetForm(formName) {
				this.$refs[formName].resetFields()
			},
			back(status = true) {
				this.$emit('close', status)
			},
		
		}
	}
</script>

<style lang="scss" scoped>
	.mt20{
		margin-top: 20px;
	}
	.mt10{
		margin-top: 10px;
	}
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
		padding: 0 30px;
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

	.select-spu {
		padding-bottom: 80px;
		.title {
			text-indent: 0;
			span {
				margin-right: 20px;
			}
		}
	}

	.select-add {
		display: flex;
		align-items: center;
		margin-top: 20px;
		/deep/ .el-form-item{
			margin: 0 10px 0 0!important;
		}
		/deep/ .el-form-item__content {
			margin: 0!important;
		}
	}

	@media screen and (max-width: 750px) {
		.el-form-item--feedback{
			display: flex;
    		flex-direction: column;
			margin-bottom: 0!important;
			/deep/.el-form-item__label{
				float: none;
				width: 100%!important;
				text-align: left!important;
			}
			/deep/.el-form-item__content{
				float: none;
				margin-left: 0!important;
			}
		}
	}
</style>
