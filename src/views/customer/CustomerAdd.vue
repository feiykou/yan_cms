<template>
	<div class="container">
		<div class="title">添加客户基本信息 <span class="back" @click="back(false)"> <i class="iconfont icon-fanhui"></i> 返回 </span></div>
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
								<template v-for="(val, index) in channelData">
									<el-option :value="index" :key="index" :label="val">
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
						<el-form-item label="释放客户信息" prop="is_release_user">
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
  import { provinceAndCityData } from 'element-china-area-data'
  import customer from "@/models/customer"
  export default {
	  name: 'CustomerAdd',
	  data() {
		  return {
			addressData: provinceAndCityData,
			channelData: [
				"抖音","百度","淘宝","公众号","转介绍","业务员推销","代理","扩容"
			],
			followStatuslData: ['无意向客户','成交客户','长期跟进','重点跟进','非目标客户'],
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
				is_release_user: true,
				customer_type: ''				
			},
			rules: {
				name: [{ required: true, message: '请输入客户名称', trigger: 'blur' }],
				contacts_name: [{ required: true, message: '请输入联系人', trigger: 'blur' }],
				telephone: [
					{ required: true, message: '请输入联系电话', trigger: 'blur' }
				],
				email: [ 
					{ required: true, message: '请输入邮箱地址', trigger: 'blur' },
					{ type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur'] }
				],
				address: [
					{ required: true, message: '请选择联系人地址'}
				],
				purpose: [{ required: true, message: '请输入项目用途', trigger: 'blur' }],
				channel: [{ required: true, message: '请输入客户来源', trigger: 'blur' }],
			}
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
						  const res = await customer.addCustomer(this.form)
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
