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
											<el-option :value="val" :key="val" :label="val">
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
								<el-form-item label="释放客户" prop="is_release_user">
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
	import { provinceAndCityData, regionDataPlus, TextToCode, CodeToText } from 'element-china-area-data'
	import customer from "@/models/customer"
	import store from '@/store'
	import type from "@/models/type"
	import Utils from '@/lin/utils/util'
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
				fieldObj: {
					"channel": "channelData",
					"follow_status": "followStatuslData",
					"customer_type": "customerTypeData",
					"level": "levelData"
				},			
				channelData: [
					"抖音","百度","淘宝","公众号","转介绍","业务员推销","代理","扩容"
				],
				customerTypeData: ['业主','施工方'],
				levelData: ['A','B','C'],
				followStatuslData: ['无意向客户','成交客户','长期跟进','重点跟进','非目标客户'],				
				loading: false,
				mainLoading: false,
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
					is_release_user: false,
					customer_type: '',
					dicider_user: ''
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
					// name: [{ required: true, message: '请输入客户名称', trigger: 'blur' }],
					contacts_name: [{ required: true, message: '请输入联系人', trigger: 'blur' }],
					telephone: [
						// { required: true, message: '请输入联系电话', trigger: 'blur' }
					],
					email: [ 
						// { required: true, message: '请输入邮箱地址', trigger: 'blur' },
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
		
		created() {
			// 数据初始化
			this._initialize()
			this.getTypes()
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
			async getCustomer() {
				this.loading = true
				try {
					let form = await customer.getCustomer(this.editID)
					this._handleCustomerResData(form)
				} catch(error) {
					console.log(error)	
					if(!error.data && !error.data.msg) {
						
						return
					}
					if(error && error.data) {
						let message = error.data.msg
						if(message && typeof message === 'object'){
							for (const key in message){
								this.$message.error(message[key])
								await setTimeout(function () {}, 1000)
							}
							return
						}
					}
					this.$message.error('客户端错误')
				}
				if(this.form.author=='super') {
					this.getAdminUsers()
				}
				this.loading = false
			},
			submitForm: Utils.debounce(function(formName){
				const that = this
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
							this.form.address = this.handleReqAddress()
							const res = await customer.editCustomer(this.editID, this.form)
							if (res.error_code === 0) {
								this.$message.success(`${res.msg}`)
								// this.resetForm(formName)
								this.back()
							}
						} catch (error) {
							if(error && error.data) {
								let message = error.data.msg
								if(message && typeof message === 'object'){
									for (const key in message){
										this.$message.error(message[key])
										await setTimeout(function () {}, 1000)
									}
								}
							} else {
								this.$message.error('请重新尝试！')
							}
						}
						this.loading = false
					}
				})
			}, 300),
			
			submitMainForm: Utils.debounce(function(formName){
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
			}, 300),
			handleReqAddress() {
				let addressArr = this.form.address
				const keyArr = ['province', 'city']
				const obj = {}
				addressArr = addressArr.map((ele, index) => {
					if(ele) {
						const key = keyArr[index]
						obj[key] = CodeToText[ele]
					}
				})
				return obj
			},
			isChinese(temp){
				var re=/[^\u4E00-\u9FA5]/;
				if (re.test(temp)) return false ;
				return true ;
			},
			_handleCustomerResData(form) {
				// 把数字转化成boolean值
				// excel导入的数据是没有user_id值的，解决customer_add或customer_main不存在的情况
				let isExcel = (form['customer_main'] && form['customer_main']['user_id'] == 0)
				form['level'] = !form['level']||form['level'] == 0?'':form['level']
				form['is_release_user'] = !!form['is_release_user']
				if(form['customer_main']) {
					const mainData = form['customer_main']
					if(mainData['main_address'] && mainData['main_address'].length > 0) {
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
					if(mainData['main_address'].length == 0) {
						mainData['main_address'] = '';
					}
					this.mainForm = mainData
					delete form['customer_main']
				}
				if(form['address']) {
					// 判断是否是excel导入的mainData['user_id']
					// 判断地址是否存在，判断地址是否是中文
					let addressArr = Object.values(form['address'])
					if(addressArr.length > 0) {
						if(addressArr[0] && this.isChinese(addressArr[0])) {
							const city = addressArr[0],
							provice = addressArr[1],
							cityCode = TextToCode[provice][city].code,
							proviceCode = TextToCode[provice].code
							form['address'] = [proviceCode, cityCode]
						}
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
		::v-deep .el-form-item{
			margin: 0 10px 0 0!important;
		}
		::v-deep .el-form-item__content {
			margin: 0!important;
		}
	}

	@media screen and (max-width: 750px) {
		.el-form-item--feedback{
			display: flex;
    		flex-direction: column;
			margin-bottom: 0!important;
			::v-deep.el-form-item__label{
				float: none;
				width: 100%!important;
				text-align: left!important;
			}
			::v-deep.el-form-item__content{
				float: none;
				margin-left: 0!important;
			}
		}
	}
</style>
