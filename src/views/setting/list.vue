<template>
	<div class="container">
		<div class="wrap">
			<el-tabs v-model="activeName" @tab-click="handleClick">
				<!-- <el-tab-pane label="商城设置" name="first">
					<el-form :model="baseForm" status-icon ref="baseForm" v-loading="loading" label-width="120px" @submit.native.prevent>
						<div class="sub-title"><i></i>商城设置</div>
						<el-form-item label="商城名称" prop="shop_name" class="form-item">
							<el-input size="medium" v-model="baseForm.shop_name" placeholder="商城名称"></el-input>
						</el-form-item>
						<div class="sub-title"><i></i>图片设置</div>
						<el-form-item label="CMS图片前缀" prop="cms_img_prefix" class="form-item">
							<el-input size="medium" v-model="baseForm.cms_img_prefix" placeholder="CMS图片前缀"></el-input>
						</el-form-item>
						<el-form-item label="API图片前缀" prop="api_img_prefix" class="form-item">
							<el-input size="medium" v-model="baseForm.api_img_prefix" placeholder="API图片前缀"></el-input>
						</el-form-item>
						<div class="sub-title"><i></i>分页设置</div>
						<el-form-item label="分页数量" prop="pageinate" class="form-item">
							<el-input size="medium" v-model="baseForm.pageinate" placeholder="分页数量"></el-input>
						</el-form-item>
						<div class="sub-title"><i></i>物流查询API</div>
						<el-form-item label="快递 Customer" prop="logistics_customer" class="form-item">
							<el-input size="medium" v-model="baseForm.logistics_customer" placeholder="customer"></el-input>
						</el-form-item>
						<el-form-item label="快递 key" prop="logistics_key" class="form-item">
							<el-input size="medium" v-model="baseForm.logistics_key" placeholder="key"></el-input>
						</el-form-item>
						<el-form-item class="submit form-item">
							<el-button type="primary" @click="submitForm('baseForm')">保 存</el-button>
							<el-button @click="resetForm('baseForm')">重 置</el-button>
						</el-form-item>
					</el-form>
				</el-tab-pane>
				<el-tab-pane label="微信支付" name="second">
					<el-form :model="wxForm" status-icon ref="wxForm" v-loading="loading" label-width="120px" @submit.native.prevent>
						<div class="sub-title"><i></i>小程序设置</div>
						<el-form-item label="AppID" prop="app_id" class="form-item">
							<el-input size="medium" v-model="wxForm.app_id" placeholder="请填写AppID"></el-input>
						</el-form-item>
						<el-form-item label="AppSecret" prop="app_secret" class="form-item">
							<el-input size="medium" v-model="wxForm.app_secret" placeholder="请填写类型AppSecret"></el-input>
						</el-form-item>
						<div class="sub-title"><i></i>微信支付设置</div>
						<el-form-item label="微信支付商户号" prop="merchant_id" class="form-item">
							<el-input size="medium" v-model="wxForm.merchant_id" placeholder="请填写微信支付商户号 MCHID"></el-input>
						</el-form-item>
						<el-form-item label="微信支付密钥" prop="key" class="form-item">
							<el-input size="medium" v-model="wxForm.key" placeholder="请填写APIKEY"></el-input>
						</el-form-item>
						<el-form-item label="key_path" prop="key_path" class="form-item">
							<el-input size="medium" v-model="wxForm.key_path" placeholder="请填写key_path"></el-input>
						</el-form-item>
						<el-form-item label="sign_type" prop="sign_type" class="form-item">
							<el-input size="medium" v-model="wxForm.sign_type" placeholder="请填写sign_type"></el-input>
						</el-form-item>
						<el-form-item class="submit form-item">
							<el-button type="primary" @click="submitForm('wxForm')">保 存</el-button>
							<el-button @click="resetForm('wxForm')">重 置</el-button>
						</el-form-item>
					</el-form>
				</el-tab-pane>
				<el-tab-pane label="交易设置" name="third">
					<el-form :model="orderForm" status-icon ref="orderForm" v-loading="loading" label-width="120px" @submit.native.prevent>
						<div class="sub-title"><i></i>订单流程设置</div>
						<el-form-item label="未支付订单" prop="nopay_day" class="form-item">
							<el-input size="medium" v-model="orderForm.nopay_day" placeholder="请填写天数"></el-input>
							<div class="tip">订单下单未付款，n天后自动关闭，设置0天不自动关闭</div>
						</el-form-item>
						<el-form-item label="已发货订单" prop="delivery_pay" class="form-item">
							<el-input size="medium" v-model="orderForm.delivery_pay" placeholder="请填写天数"></el-input>
							<div class="tip">如果在期间未确认收货，系统自动完成收货，设置0天不自动收货</div>
						</el-form-item>
						<el-form-item label="已完成订单" prop="complete_pay" class="form-item">
							<el-input size="medium" v-model="orderForm.complete_pay" placeholder="请填写天数"></el-input>
							<div class="tip">订单完成后 ，用户在n天内可以发起售后申请，设置0天不允许申请售后</div>
						</el-form-item>
						<div class="sub-title"><i></i>库存预警</div>
						<el-form-item label="库存预警" prop="complete_pay" class="form-item">
							<el-input size="medium" v-model="orderForm.stock_warning" placeholder="库存警告"></el-input>
							<div class="tip">库存少于本数值，则提醒平台</div>
						</el-form-item>

						<div class="sub-title"><i></i>快递设置</div>
						<el-form-item label="快递费" prop="express_fee" class="form-item">
							<el-input-number v-model="orderForm.express_fee" :precision="2" :step="0.3" :min="0.00" label="快递费"></el-input-number>
						</el-form-item>
						<el-form-item label="快递满邮费" prop="quota" class="form-item">
							<el-input-number v-model="orderForm.quota" :precision="2" :step="0.3" :min="0.00" label="快递费"></el-input-number>
						</el-form-item>
						<div class="sub-title"><i></i>礼品设置</div>
						<el-form-item label="礼品包装费" prop="gift_fee" class="form-item">
							<el-input-number v-model="orderForm.gift_fee" :precision="2" :step="0.3" :min="0.00" label="礼品包装费"></el-input-number>
						</el-form-item>
						<el-form-item label="礼盒商品id" prop="gift_id" class="form-item">
							<el-input size="medium" v-model="orderForm.gift_id" placeholder="请填写礼盒商品id"></el-input>
						</el-form-item>

						<el-form-item class="submit form-item">
							<el-button type="primary" @click="submitForm('orderForm')">保 存</el-button>
							<el-button @click="resetForm('orderForm')">重 置</el-button>
						</el-form-item>
					</el-form>
				</el-tab-pane>
				<el-tab-pane label="订阅信息" name="five">
					<el-form :model="messageForm" status-icon ref="messageForm" v-loading="loading" label-width="120px" @submit.native.prevent>
						<div class="sub-title"><i></i>消息模板</div>
						<el-form-item label="新订单提醒" prop="new_order" class="form-item">
							<el-input size="medium" v-model="messageForm.new_order.templateID" placeholder="模板id"></el-input>
							<el-input size="medium" v-model="messageForm.new_order.path" placeholder="path跳转路径"></el-input>
						</el-form-item>
						<el-form-item label="订单发货提醒" prop="deliver_order" class="form-item">
							<el-input size="medium" v-model="messageForm.deliver_order.templateID" placeholder="模板id"></el-input>
							<el-input size="medium" v-model="messageForm.deliver_order.path" placeholder="path跳转路径"></el-input>
						</el-form-item>
						<el-form-item label="订单未支付提醒" prop="nopay" class="form-item">
							<el-input size="medium" v-model="messageForm.nopay.templateID" placeholder="模板id"></el-input>
							<el-input size="medium" v-model="messageForm.nopay.path" placeholder="path跳转路径"></el-input>
						</el-form-item>
						<el-form-item class="submit form-item">
							<el-button type="primary" @click="submitForm('messageForm')">保 存</el-button>
							<el-button @click="resetForm('messageForm')">重 置</el-button>
						</el-form-item>
					</el-form>
				</el-tab-pane>
				<el-tab-pane label="收货地址" name="six">
					<el-form :model="receiptForm" status-icon ref="receiptForm" v-loading="loading" label-width="120px" @submit.native.prevent>
						<div class="sub-title"><i></i>收货地址</div>
						<el-form-item label="姓名" prop="name" class="form-item">
							<el-input size="medium" v-model="receiptForm.name" placeholder="姓名"></el-input>
						</el-form-item>
						<el-form-item label="联系方式" prop="tel" class="form-item">
							<el-input size="medium" v-model="receiptForm.tel" placeholder="联系方式"></el-input>
						</el-form-item>
						<el-form-item label="具体地址" prop="address" class="form-item">
							<el-input size="medium" v-model="receiptForm.address" placeholder="具体地址"></el-input>
						</el-form-item>
						<el-form-item class="submit form-item">
							<el-button type="primary" @click="submitForm('receiptForm')">保 存</el-button>
							<el-button @click="resetForm('receiptForm')">重 置</el-button>
						</el-form-item>
					</el-form>
				</el-tab-pane> -->
				<el-tab-pane label="清理缓存" name="forth">
					<div class="sub-title"><i></i>cms缓存</div>
					<el-checkbox-group v-model="cms_cache_names" class="checkbox-class">
						<el-checkbox label="base">客户设置</el-checkbox>
						<el-checkbox label="wx">客户公域池</el-checkbox>
						<!-- <el-checkbox label="order">交易设置</el-checkbox>
						<el-checkbox label="message">订阅信息设置</el-checkbox>
						<el-checkbox label="receipt">收货地址</el-checkbox> -->
					</el-checkbox-group>
					<!-- <div class="sub-title"><i></i>api缓存</div>
					<el-checkbox-group v-model="api_cache_names" class="checkbox-class">
						<el-checkbox label="base">商城设置</el-checkbox>
						<el-checkbox label="wx">微信支付</el-checkbox>
						<el-checkbox label="order">交易设置</el-checkbox>
						<el-checkbox label="message">订阅信息设置</el-checkbox>
						<el-checkbox label="receipt">收货地址</el-checkbox>
					</el-checkbox-group> -->
					<el-button type="primary" @click="cacheForm('cache_names')" class="cache-save-btn">保 存</el-button>
				</el-tab-pane>
			</el-tabs>

		</div>
	</div>
</template>

<script>
import TagEnum from '../../config/tag/TagEnum'
import tag from "../../models/tag"
import setting from "../../models/setting";
export default {
	name: 'TagAdd',
	data() {
		return {
			loading: false,
			activeName: 'first',
			cms_cache_names: [],
			api_cache_names: [],
			baseForm: {
				cms_img_prefix: '',
				api_img_prefix: '',
				pageinate: 10,
				shop_name: '唔该',
				logistics_key: '',
				logistics_customer: ''
			},
			wxForm: {},
			receiptForm: {}, // 收货地址
			orderForm: {
				express_fee: 6,
				quota: 99,
				gift_fee: 10
			},
			messageForm: {
				new_order: {
					templateID: '',
					path: ''
				},
				deliver_order: {
					templateID: '',
					path: ''
				},
				nopay: {
					templateID: '',
					path: ''
				}
			}
		}
	},
	created() {
		this.getSettings()
	},
	methods: {
		handleClick() {

		},
		async cacheForm(formName) {
			if(!this['cms_'+formName] && !this['api_'+formName]) {
				this.$message.error('请选择参数')
				return
			}
			try {
				const res = await setting.clearCache(this['cms_'+formName])
				const resApi = await setting.clearAPICache(this['api_'+formName])
				if (res.error_code === 0 && resApi.error_code === 0) {
					this.$message.success(`缓存清除成功`)
				} else {
					this.$message.error(`缓存清除失败`)
				}
			} catch (e) {
				this.$message.error(`缓存清除失败`)
			}
		},
		async getSettings(){
			let Lists = [],
				listsObj = {}
			try {
				this.loading = true
				Lists = await setting.getSettings()
				this.loading = false
			} catch (e) {
				Lists = []
				this.loading = false
			}
			Lists.forEach(res => {
				if(this[res.names] && this[res.names] instanceof Object) {
					this[res.names] = {...this[res.names],...res['values']}
				} else {
					this[res.names] = res['values'];
				}

			})
		},
		submitForm(formName) {
			this.$refs[formName].validate(async valid => {
				if(valid) {
					console.log(this[formName])
					this.loading = true
					try {
						const res = await setting.addSetting(formName, this[formName])
						if (res.error_code === 0) {
							this.$message.success(`${res.msg}`)
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
	.wrap ::v-deep{
		.el-tabs__content{
			padding-top: 30px;
		}
		.el-input__inner{
			width: 100%;
			max-width: 560px;
		}
		.form-item{
			margin-left: 200px;
		}
	}
	.tip{
		font-size: 12px;
		color: #838fa1;
	}
	.checkbox-class{
		margin-bottom: 30px;
	}
	.cache-save-btn,.checkbox-class{
		margin-left: 200px;
	}
	.sub-title{
		display: flex;
		align-items: center;
		padding: 20px;
		margin-bottom: 20px;
		font-size: 15px;
		border-bottom: 1px solid #eef1f5;
		i{
			display: inline-block;
			width: 4px;
			height: 15px;
			margin-right: 10px;
			background-color: #3963bc;
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

</style>
