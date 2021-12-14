<template>
	<div class="container">
		<div class="title">新建库存商品 <span class="back" @click="back(false)"> <i class="iconfont icon-fanhui"></i> 返回 </span></div>
		<div class="wrap">
			<el-row>
				<el-col :lg="16" :md="20" :sm="24" :xs="24">
					<el-form :model="form" status-icon ref="form" v-loading="loading" :rules="rules" label-width="120px" @submit.native.prevent>
						<el-form-item label="标题" prop="title">
							<el-input size="medium" v-model="form.title" placeholder="请填写标题"></el-input>
						</el-form-item>
						<el-form-item label="属性值" prop="prop_value">
							<el-input size="medium" v-model="form.prop_value" placeholder="请填写sku属性值"></el-input>
						</el-form-item>
						<el-form-item label="价格" prop="price">
							<el-input-number v-model="form.price" :precision="2" :step="0.1" :min="0.00" label="价格"></el-input-number>
						</el-form-item>
						<el-form-item label="出厂价格" prop="original_price">
							<el-input-number v-model="form.original_price" :precision="2" :step="0.1" :min="0.00" label="出厂价格"></el-input-number>
						</el-form-item>
						<el-form-item label="SKU" prop="sku_id">
							<el-select size="medium" filterable v-model="form.sku_id" @change="skuChange" placeholder="请选择所属SKU">
								<el-option v-for="sku in skuData" :value="sku.id" :label="sku.title">
									<span style="color: #b4b4b4; margin-right: 15px; font-size: 12px;">{{ sku.id }}</span>
									<span>{{ sku.title }}</span>
								</el-option>
							</el-select>
						</el-form-item>
						<el-form-item label="是否上架" prop="online">
							<el-switch
									v-model="form.online"
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
	import sku from "@/models/sku"
	import SkuStorageModel from '@/models/sku-storage'

	export default {
		name: 'add',
		props: {
			editID: Number
		},
		data() {
			return {
				loading: false,
				skuData: [], // spu数据
				form: {
					title: '',
					prop_value: '',
					online: true,
					price: 0.00,
					original_price: 0
				},

				rules: {
					// title: [
					//   { required: true, message: '请输入标题', trigger: 'blur' }
					// ],
				}
			}
		},
		created() {
			// 数据初始化
			this.getStorage()
			this.getSkus()
		},
		methods: {
			// 获取spu信息
			async getStorage() {
				this.loading = true
				try {
					let form = await SkuStorageModel.getStorage(this.editID)
					// 把数字转化成boolean值
					form['online'] = !!form['online']
					this.form = form
				} catch(error) {
					this.back(false)
				}
				this.loading = false
			},
			// 获取SKU全部数据
			async getSkus() {
				let skuData = await sku.getSkus(0, 100)
				this.skuData = skuData.collection
			},
			// SKU值改变事件
			async skuChange(val) {
				let data = this.skuData.filter(itemData => {
					return itemData.id === val
				})
				if(!data || data.length <= 0) return;
				const form = this.form
				form.title = data[0]['title']
				form.online = data[0]['online'] == 1 ? true : false
				form.price = data[0]['price']
				form.img = data[0]['img']
				form.code = data[0]['code']
				this.form = form
			},

			submitForm(formName) {
				this.$refs[formName].validate(async valid => {
					if(valid) {
						this.loading = true
						try {
							const res = await SkuStorageModel.addStorage(this.form)
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

</style>
