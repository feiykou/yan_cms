<template>
	<div class="container">
		<div class="title">库存变更 <span class="back" @click="back(false)"> <i class="iconfont icon-fanhui"></i> 返回 </span></div>
		<div class="wrap">
			<el-row>
				<el-col :lg="16" :md="20" :sm="24" :xs="24">
					<el-form :model="form" status-icon ref="form" v-loading="loading" :rules="rules" label-width="120px" @submit.native.prevent>
						<el-form-item label="标题" prop="title">
							<el-input size="medium" :value="storageData.title" disabled></el-input>
						</el-form-item>
						<el-form-item label="商品总库存" prop="stock">
							<el-input size="medium" :value="storageData.stock" disabled></el-input>
						</el-form-item>
						<el-form-item label="剩余库存" prop="stock">
							<el-input size="medium" :value="storageData.rest_stock" disabled></el-input>
						</el-form-item>
						<el-form-item label="出入库" prop="status">
							<el-select size="medium" filterable v-model="form.status" @change="statusChange" placeholder="请选择出入库">
								<el-option v-for="status in statusData" :value="status.type" :label="status.value">
									<span style="color: #b4b4b4; margin-right: 15px; font-size: 12px;">{{ status.type }}</span>
									<span>{{ status.value }}</span>
								</el-option>
							</el-select>
						</el-form-item>
						<el-form-item label="渠道" prop="type">
							<el-select size="medium" filterable v-model="form.type" @change="channelChange" placeholder="请选择渠道">
								<el-option v-for="channel in channelData" :value="channel.type" :label="channel.value">
									<span style="color: #b4b4b4; margin-right: 15px; font-size: 12px;">{{ channel.type }}</span>
									<span>{{ channel.value }}</span>
								</el-option>
							</el-select>
						</el-form-item>
						<el-form-item label="库存数量" prop="count">
							<el-input size="medium" v-model.number="form.count" placeholder="请填写库存数量"></el-input>
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
	import SkuStorageModel from '@/models/sku-storage'

	export default {
		name: 'add',
		props: {
			editID: Number
		},
		data() {
			var countValidator = (rule, value, callback) => {
				if(!value) {
					callback(new Error('库存数量不能为空'))
				} else if(!Number.isInteger(value)) {
					callback(new Error('必须是数字'))
				} else if(value < 0) {
					callback(new Error('值必须大于0'))
				} else{
					if(this.form.status === '' ) {
						this.$refs.form.validateField('status')
						callback(new Error('出入库必须填写'))
					} else if(this.form.status == 0 && value > this.storageData['rest_stock']) {
						callback(new Error('该库存数大于总库存数'))
					} else {
						callback()
					}
				}
			}
			return {
				loading: false,
				skuData: [], // spu数据
				form: {
					type: '',
					status: '',
					count: 0,
				},
				storageData: {},
				channelData: [
					{
						type: 1,
						value: '小程序'
					},{
						type: 2,
						value: '淘宝'
					},{
						type: 3,
						value: '供应商'
					}
				],
				statusData: [
					{
						type: 0,
						value: '出库'
					},{
						type: 1,
						value: '入库'
					}
				],
				rules: {
					count: [
					  { validator: countValidator, trigger: 'blur' }
					],
					status: [
						{required: true, message: '出入库状态必须选择', trigger: 'blur'}
					],
					type: [
						{required: true, message: '渠道必须选择', trigger: 'blur'}
					]
				}
			}
		},
		created() {
			// 数据初始化
			this.getStorage()
		},
		methods: {
			// 获取spu信息
			async getStorage() {
				this.loading = true
				try {
					let form = await SkuStorageModel.getStorage(this.editID)
					// 把数字转化成boolean值
					form['online'] = !!form['online']
					this.storageData = form
					console.log(this.storageData)
				} catch(error) {
					this.back(false)
				}
				this.loading = false
			},
			// 渠道值改变事件
			channelChange(val) {
				this.form.type = val
			},
			// 出入库状态
			statusChange(val) {
				this.form.status = val
			},
			submitForm(formName) {
				this.$refs[formName].validate(async valid => {
					if(valid) {
						this.loading = true
						try {
							this.form['storage_id'] = this.editID
							const res = await SkuStorageModel.createRecord(this.form)
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
