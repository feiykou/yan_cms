<template>
	<div class="container">
		<div class="title">添加客户基本信息 <span class="back" @click="back(false)" v-if="!inNav"> <i class="iconfont icon-fanhui"></i> 返回 </span></div>
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
								:options="addressData"
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
								<el-option value="" label="请选择客户来源">
									<!-- <span style="color: #b4b4b4; margin-right: 15px; font-size: 12px;">0</span> -->
									<span style="color: #b4b4b4;">请选择客户来源</span>
								</el-option>
								<template v-for="(val, index) in channelData">
									<el-option :value="val" :key="index" :label="val">
										<span style="color: #b4b4b4; margin-right: 15px; font-size: 12px;">{{ index+1}}</span>
										<span>{{ val }}</span>
									</el-option>
								</template>
							</el-select>
						</el-form-item>
						<el-form-item label="抄送管理员" prop="make_copy_user" v-if="!form.channel">
							<el-select size="medium" filterable v-model="form.make_copy_user" placeholder="请选择抄送管理员">
								<template v-for="(val, index) in cuserLists">
									<el-option :value="val.id" :key="index" :label="val.username" v-if="val.group_id==4">
										<span style="color: #b4b4b4; margin-right: 15px; font-size: 12px;">{{ index+1}}</span>
										<span>{{ val.username }}</span>
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
						
						<!-- 只有super和仅录入客户信息和分配的人员可以分配客户 -->
						<el-form-item label="分配用户" prop="dicider_user" v-if="adminName=='super' || authJson.noRelease" :rules="[{required: inNav,message: '请选择分配用户'}]">
							<el-select size="medium" filterable v-model="form.dicider_user" placeholder="请选择分配用户">
								<template v-for="(val, index) in cuserLists">
									<el-option :value="val.id" :key="index" :label="val.username" v-if="val.group_id==2">
										<span style="color: #b4b4b4; margin-right: 15px; font-size: 12px;">{{ index+1}}</span>
										<span>{{ val.username }}</span>
									</el-option>
								</template>
							</el-select>
						</el-form-item>
						<el-form-item label="释放客户" prop="is_release_user" v-if="!authJson.noRelease">
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
	</div>
</template>

<script>
import { provinceAndCityData, CodeToText } from 'element-china-area-data'
import customer from "@/models/customer"
import type from "@/models/type"
import Admin from '@/lin/models/admin'
import store from '@/store'
import Utils from '@/lin/utils/util'
  
  export default {
	  name: 'CustomerAdd',
	  data() {
		  return {
			addressData: provinceAndCityData,
			adminName: store.state.user.username,
			fieldObj: {
				"channel": "channelData",
				"follow_status": "followStatuslData",
				"customer_type": "customerTypeData",
				"level": "levelData"
			},
			inNav: false,
			channelData: [],
			followStatuslData: [],
			levelData: ['A','B','C'],
			customerTypeData: ['业主','施工方'],
			loading: false,
			columnData: [], // column数据
			cateData: [],
			cuserLists: [], // cms用户信息
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
			rules: {
				// name: [{ required: true, message: '请输入客户名称', trigger: 'blur' }],
				contacts_name: [{ required: true, message: '请输入联系人', trigger: 'blur' }],
				telephone: [
				],
				email: [ 
					{ type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur'] }
				],
				address: [
					{ required: true, message: '请选择联系人地址'}
				],
				purpose: [{ required: true, message: '请输入项目用途', trigger: 'blur' }],
				// channel: [{ required: true, message: '请输入客户来源', trigger: 'blur' }],
			},
			authJson: {
				noRelease: store.state.auths.includes('仅录入客户信息和分配'),
			}
		  }
	  },

	  created() {
		  this.getAdminUsers()
		  this.getTypes()
		  // 是否是从导航调过来
		  this.inNav = this.$route.meta.inNav && this.$route.meta.title === '添加客户信息'
	  },
	  methods: {
		submitForm: Utils.debounce(function(formName){
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
						const res = await customer.addCustomer(this.form)
						if (res.error_code === 0) {
							this.resetForm(formName)
							if(!this.inNav) {
								this.back(true, res['result'])
							} else {
								this.$message.success(`${res.msg}`)
							}
						}
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
		// 根据分组 刷新/获取分组内的用户
		async getAdminUsers() {
			let res
			try {
				res = await Admin.getAdminUsers({ count: 30, page: 0 }) // eslint-disable-line
				this.cuserLists = [...res.items]
				console.log(this.cuserLists)
			} catch (e) {
			}
		},
		  // 重置表单
		  resetForm(formName) {
			  this.$refs[formName].resetFields()
		  },
		  back(status = true, id=0) {
			  this.$emit('close', status, id)
		  },
	  }
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
