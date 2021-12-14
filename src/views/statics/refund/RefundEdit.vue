<template>
	<div class="container">
		<div class="title">{{title?title[form.reply_status]:'售后'}}详情 <span class="back" @click="back(false)"> <i class="iconfont icon-fanhui"></i> 返回 </span></div>
		<div class="wrap">
			<el-row>
				<el-col :lg="16" :md="20" :sm="24" :xs="24">
					<el-form status-icon v-loading="loading" label-width="120px" @submit.native.prevent>
						<el-form-item label="订单号" prop="title">
							<el-input size="medium" disabled v-model="form.order_no" placeholder="请填写订单号"></el-input>
						</el-form-item>
						<el-form-item label="图片" prop="img">
							<div class="imgs-upload-container" v-if="form.img && form.img.length > 0">
								<div class="img-box" @click="preview(index)" v-for="(url, index) in form.img" :key="index">
									<el-image class="thumb-item-img" :src="url" fit="cover" style="width: 100%; height: 100%;"></el-image>
									<div class="control">
										<div class="preview"><i class="el-icon-view"></i></div>
									</div>
								</div>
							</div>
							<div class="imgs-no-data" v-else>暂无图片</div>
						</el-form-item>
						<el-form-item label="商品标题" prop="sku_title">
							<el-input size="medium" disabled v-model="form.sku_title" placeholder="商品标题"></el-input>
						</el-form-item>
						<el-form-item label="件数" prop="count">
							<el-input size="medium" disabled v-model="form.count+'件'" placeholder="件数"></el-input>
						</el-form-item>
						<el-form-item label="总价格" prop="total_price">
							<el-input-number
									v-model="form.price"
									:precision="2"
									:step="0.1"
									:min="0.00"
									label="总价格"
									:disabled="!refundAction(form.status, form.reply_status) && !onlyExchangeRefundAction(form.status, form.reply_status)"
									@blur="priceBlur"
									@change="priceChange"></el-input-number>
						</el-form-item>
						<el-form-item label="状态" prop="status">
							<el-tag :type="getStatusVal(form.status)['type']" v-if="form.status">{{ getStatusVal(form.status)['statusVal'] }}</el-tag>
						</el-form-item>
						<el-form-item label="退款原因" prop="reason">
							<el-input size="medium" disabled v-model="form.reason"></el-input>
						</el-form-item>

						<el-form-item class="submit">
							<el-button v-if="applyRefund(form.status)" type="primary" @click="argee()">通过申请</el-button>
							<el-button v-if="applyRefund(form.status)" type="primary" @click="cancel()">拒绝申请</el-button>
							<template v-if="getStatus('BUYERDELIVERY') == form.status">
								<el-button type="primary" @click="reciveGoods()">确认收货</el-button>
							</template>
							<template v-if="onlyExchangeRefundAction(form.status, form.reply_status)">
								<el-button type="primary" @click="sendGoods()">发货</el-button>
								<el-button type="primary" @click="refund()">退款</el-button>
							</template>
							<template v-if="refundAction(form.status, form.reply_status)">
								<el-button type="primary" @click="refund()">退款</el-button>
							</template>
							<template v-if="findLogistics(form.status, form.reply_status)">
								<el-button type="primary" @click="queryLogistics(form.id)">物流信息</el-button>
							</template>
						</el-form-item>
					</el-form>
				</el-col>
			</el-row>
		</div>

		<el-dialog title="" :visible.sync="dialogDeliverVisible">
			<el-tabs v-model="activeName" @tab-click="handleLogistics">
				<el-tab-pane label="买家物流信息" name="first">
					<logisticsVisible :type="2" :refund_id="form.id"></logisticsVisible>
				</el-tab-pane>
				<el-tab-pane label="商家物流信息" name="second" v-if="statusEnum['SELLERRECEIPT']['number'] <= form.status && statusEnum['REPLACEGOODS']['number'] == form.reply_status">
					<logisticsEdit :sendForm="sendForm" :disabled="Logisdisabled" :loading="LogisLoading" @delivery="deliveryEvent" @send="sendEvent"></logisticsEdit>
					<logisticsVisible v-if="showSendForm" :type="3" :loading="LogisLoading" :refund_id="form.id"></logisticsVisible>
				</el-tab-pane>
			</el-tabs>
<!--			<logisticsVisible v-if="dialogDeliverVisible" :order_no="form.order_no" :status="form.status"></logisticsVisible>-->
		</el-dialog>

	</div>
</template>

<script>
import refundStatusEnum from "@/config/order/orderRefundEnum"
import refundModel from "@/models/refund"
import order from "@/models/order";
import pay from "@/models/pay";
import tag from "@/components/base/tag/tag";
import logisticsVisible from "../logisticsVisible"
import logisticsEdit from "@/components/base/logistics/logisticsEdit"
import preview from "@/components/base/preview/preview"

export default {
	name: 'RefundEdit',
	components: {
		tag,
		logisticsVisible,
		logisticsEdit,
		preview
	},
	props: {
		orderID: Number,
		skuID: Number,
		orderNO: String
	},
	data() {
		return {
			loading: false,
			refund_id: 0,
			statusEnum: refundStatusEnum,
			form:{},
			title: null,
			isChangePrice: false,
			dialogDeliverVisible: false,
			activeName: 'first',
			Logisdisabled: false,
			LogisLoading: false,
			showSendForm: false,
			sendForm: {
				number: '',
				comp: ''
			}
		}
	},
	created() {
		// 数据初始化
		this.getRefundDetail()
	},
	methods: {
		priceChange(val) {
			this.isChangePrice = true
		},
		priceBlur() {
			if(!this.isChangePrice) return
			this.$confirm('此操作修改价格吗, 是否继续?', '提示', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				type: 'warning',
			}).then(async () => {
				const price = this.form.price
				this.isChangePrice = false
				await this.changePrice(price)
			})

		},
		async changePrice(price) {
			try{
				this.loading = true
				const res = await refundModel.updateRefundSingle({
					id: this.form.id,
					field: 'price',
					value: price,
					type: 1
				})
				this.loading = false
			} catch (e) {

			}
		},
		preview(index) {
			this.$imagePreview({
				images: this.form.img,
				index,
				index,
			})
		},
		handleLogistics() {

		},
		setTitle() {
			this.title = {
				[this.statusEnum['REFUND']['number']]: '退款',
				[this.statusEnum['REFUNDANDGOODS']['number']]: '退货退款',
				[this.statusEnum['REPLACEGOODS']['number']]: '换货',
			}
		},
		async queryLogistics(id) {
			this.dialogDeliverVisible = true
			this.showSendForm = true
		},
		async reciveGoods() {
			try{
				this.loading = true
				const res = await refundModel.updateRefundStatus(this.orderID, this.skuID, this.statusEnum['SELLERRECEIPT']['number'])
				if(res.error_code == 0) {
					// 数据初始化
					await this.getRefundDetail()
				}
				this.loading = false
			} catch (e) {

			}
		},
		sendGoods() {
			this.dialogDeliverVisible = true
			this.activeName = 'second'
		},

		// 查看商家发货物流信息
		sendEvent(sendForm) {
			this.showSendForm = true
			this.logisticsEvent(sendForm)
		},
 		// 发货
		deliveryEvent(sendForm) {
			this.logisticsEvent(sendForm, async () => {
				const res = await refundModel.updateRefundStatus(this.orderID, this.skuID, this.statusEnum['REPLACEGOODSSEND']['number'])
				if(res.error_code == 0) {
					this.showSendForm = true
					// 数据初始化
					await this.getRefundDetail()
				}

			})
		},

		async logisticsEvent(sendForm, callback) {
			sendForm['refund_id'] = this.refund_id
			this.showSendForm = false
			try {
				this.LogisLoading = true
				await refundModel.createAndUpdateLogistics(sendForm)
				this.LogisLoading = false
				this.showSendForm = true
				callback && callback()
			} catch (e) {
				console.log(e)
			}

		},

		/*
		*   退款：1：通过申请 拒绝申请  1 8 退款    交易取消
			退货：2：通过申请 拒绝申请  4：卖家收货 物流信息   5: 退款   交易取消
			换货：3：通过申请 拒绝申请  4：卖家收货 物流信息  5：卖家发货 物流信息 退款    交易取消
		* */
		getStatus(key) {
			let status = this.statusEnum[key]
			if(!status) return 0
			return status['number']
		},
		applyRefund(status) {
			if(this.getStatus('REFUND') == status || this.getStatus('REFUNDANDGOODS') == status || this.getStatus('REPLACEGOODS') == status) {
				return true
			}
			return false
		},
		onlyExchangeRefundAction(status, reply_status) {
			if(this.getStatus('SELLERRECEIPT') == status && this.getStatus('REPLACEGOODS') == reply_status) {
				return true
			}
			return false
		},
		findLogistics(status, reply_status) {
			if(((this.getStatus('BUYERDELIVERY') == status
					|| this.getStatus('SELLERRECEIPT') == status
					|| this.getStatus('TRADESUCCESS') == status
					|| this.getStatus('REPLACEGOODSSEND') == status) && (this.getStatus('REFUNDANDGOODS') == reply_status || this.getStatus('REPLACEGOODS') == reply_status)
			)) {
				return true
			}
			return false
		},
		refundAction(status, reply_status) {
			if(((this.getStatus('AGREEAPPLY') == status || this.getStatus('AGREEREFUND') == status) && this.getStatus('REFUND') == reply_status)
				|| (this.getStatus('SELLERRECEIPT') == status && this.getStatus('REFUNDANDGOODS') == reply_status) ) {
				return true
			}
			return false
		},
		async argee() {
			try{
				this.loading = true
				const res = await refundModel.agree(this.orderID, this.skuID)
				if(res.error_code == 0) {
					// 数据初始化
					await this.getRefundDetail()
				}
				this.loading = false
			} catch (e) {

			}
		},
		async cancel() {
			try{
				this.loading = true
				const res = await refundModel.cancel(this.orderID, this.skuID)
				if(res.error_code == 0) {
					// 数据初始化
					await this.getRefundDetail()
				}
				this.loading = false
			} catch (e) {

			}
		},
		getStatusVal(val) {
			const selVal = Object.values(refundStatusEnum).filter(item => {
				return item.number == val
			})
			if(selVal.length <= 0) return {
				statusVal: '',
				type: ''
			};
			let statusStyle = {
				statusVal: selVal[0].msg,
				type: 'success'
			}
			return statusStyle
		},
		async refund() {
			try{
				this.loading = true
				const res = await pay.refund(this.orderNO, this.skuID)
				if(res.error_code == 0) {
					await this.refundSuccess()
				}
				this.loading = false
			} catch (e) {

			}
		},
		async refundSuccess() {
			if(this.statusEnum['REFUND']['number'] == this.form.reply_status
					|| this.statusEnum['REFUNDANDGOODS']['number']  == this.form.reply_status) {
				const that = this
				await refundModel.updateRefundSingle({
					field: 'status',
					value: that.statusEnum['TRADESUCCESS']['number']
				})
			}
			// 数据初始化
			await this.getRefundDetail()
		},
		// 获取订单信息
		async getRefundDetail() {
			this.loading = true
			try {
				let form = await order.getRefundDetail(this.orderID, this.skuID)
				this.form = form
				this.refund_id = form.id
				if(form.refund_logstics) {
					this.sendForm = {
						comp: form.refund_logstics.comp,
						number: form.refund_logstics.number
					}
				}
				this.setTitle()
			} catch(error) {
				this.back(false)
			}
			this.loading = false
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
	/**
		图片预览
	 */
	.imgs-upload-container {
		display: flex;
		flex-wrap: wrap;

		.img-box {
			border: 1px dashed #d9d9d9;
			border-radius: 3px;
			-webkit-transition: all 0.1s;
			transition: all 0.1s;
			color: #666666;
			margin-right: 1em;
			margin-bottom: 1em;
			width: 200px;
			height: 150px;
			cursor: pointer;
			font-size: 12px;
			text-align: center;
			position: relative;
			display: flex;
			align-items: center;
			justify-content: center;
			overflow: hidden;
			line-height: 1.3;
			flex-direction: column;

			.el-image {
				width: 100%;
				height: 100%;
			}

			.control {
				display: flex;
				-webkit-box-align: center;
				-ms-flex-align: center;
				align-items: center;
				-webkit-box-pack: center;
				-ms-flex-pack: center;
				justify-content: center;
				position: absolute;
				width: 100%;
				height: 100%;
				top: 0;
				left: 0;
				opacity: 0;
				background-color: rgba(0, 0, 0, 0.3);
				-webkit-transition: all 0.3s;
				transition: all 0.3s;
				-webkit-transition-delay: 0.1s;
				transition-delay: 0.1s;

				.preview {
					color: white;
					font-size: 2em;
					transition: all 0.2s;
				}
			}

			&:hover {
				.control {
					opacity: 1;
				}
			}
		}
	}
	.imgs-no-data{
		display: flex;
		justify-content: center;
		align-items: center;
		width: 80px;
		height: 80px;
		color: #999;
		font-size: 12px;
		border: 1px solid #ccc;
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

	// 地址
	.adress-wrap{
		margin-top: 1px;
		.name-mobile{
			span{
				font-weight: bold;
			}
		}
		.name{
			margin-right: 30px;
		}
	}
</style>
