<template>
	<div class="container">
		<div class="title"> <span class="back" @click="back(false)"> <i class="iconfont icon-fanhui"></i> 返回 </span></div>
		<div class="wrap">
			<el-row>
				<el-col :lg="16" :md="20" :sm="24" :xs="24">
					<el-form status-icon v-loading="loading" label-width="120px" @submit.native.prevent>
						<el-form-item label="订单号" prop="title">
							<el-input size="medium" disabled v-model="form.order_no" placeholder="请填写订单号"></el-input>
						</el-form-item>
						<el-form-item label="图片" prop="img">
							<el-image
								style="width: 100px; height: 100px"
								:src="form.img"
								fit="contain"></el-image>
						</el-form-item>
						<el-form-item label="商品标题" prop="sku_title">
							<el-input size="medium" disabled v-model="form.sku_title" placeholder="商品标题"></el-input>
						</el-form-item>
						<el-form-item label="件数" prop="count">
							<el-input size="medium" disabled v-model="form.count+'件'" placeholder="件数"></el-input>
						</el-form-item>
						<el-form-item label="总价格" prop="total_price">
							<el-input-number v-model="form.price" :disabled="statusEnum['REFUND'] === form.status ? false : true" :precision="2" :step="0.1" :min="0.00" label="总价格"></el-input-number>
						</el-form-item>
						<el-form-item label="状态" prop="status">
							<el-tag :type="getStatusVal(form.status)['type']" v-if="form.status">{{ getStatusVal(form.status)['statusVal'] }}</el-tag>
						</el-form-item>
						<el-form-item label="退款原因" prop="reason">
							<el-input size="medium" disabled v-model="form.reason"></el-input>
						</el-form-item>

						<el-form-item class="submit">
							<el-button v-if="statusEnum['REFUNDSUCCESS'] === form.status || statusEnum['REFUNDANDGOODSSUCCESS'] === form.status" type="primary" @click="refund()">退款</el-button>
							<el-button v-if="statusEnum['REFUNDANDGOODS'] === form.status || statusEnum['REFUND'] === form.status" type="primary" @click="argee()">通过申请</el-button>
							<el-button v-if="statusEnum['REFUNDANDGOODS'] === form.status || statusEnum['REFUND'] === form.status" type="primary" @click="cancel()">拒绝申请</el-button>
						</el-form-item>
					</el-form>
				</el-col>
			</el-row>
		</div>


<!--		<el-dialog title="退款信息" :visible.sync="dialogRefundVisible">-->
<!--			<refund v-if="dialogRefundVisible" :order_id="form.id"></refund>-->
<!--		</el-dialog>-->
	</div>
</template>

<script>
import status from "@/config/order/orderRefundEnum";

import order from "@/models/order";
import pay from "@/models/pay";
import tag from "@/components/base/tag/tag";


export default {
	name: 'RefundEdit',
	components: {
		tag
	},
	props: {
		orderID: Number,
		skuID: Number,
		orderNO: String
	},
	data() {
		return {
			dialogRefundVisible: false, // 退款弹窗
			loading: false,
			statusEnum: status,
			form:{}
		}
	},
	created() {
		// 数据初始化
		this.getRefundDetail()
	},
	methods: {
		async argee() {
			try{
				this.loading = true
				const res = await order.refundAgree(this.orderID, this.skuID)
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
				const res = await order.refundCancel(this.orderID, this.skuID)
				if(res.error_code == 0) {
					// 数据初始化
					await this.getRefundDetail()
				}
				this.loading = false
			} catch (e) {

			}
		},
		getStatusVal(val) {
			let statusStyle = {
				statusVal: '',
				type: ''
			}
			switch (val) {
				case status['REFUND']:
					statusStyle = {
						statusVal: '退款中',
						type: 'danger'
					}
					break
				case status['REFUNDSUCCESS']:
					statusStyle = {
						statusVal: '退款通过',
						type: 'success'
					}
					break
				case status['REFUNDFAIL']:
					statusStyle = {
						statusVal: '拒绝退款',
						type: 'success'
					}
					break
				case status['REFUNDANDGOODS']:
					statusStyle = {
						statusVal: '退货退款中',
						type: 'success'
					}
					break
				case status['REFUNDANDGOODSSUCCESS']:
					statusStyle = {
						statusVal: '退货退款通过',
						type: 'success'
					}
					break

				case status['REFUNDANDGOODSFAIL']:
					statusStyle = {
						statusVal: '拒绝退货退款',
						type: 'success'
					}
					break
			}
			return statusStyle
		},
		async refund() {
			try{
				this.loading = true
				const res = await pay.refund(this.orderNO, this.skuID)
				if(res.error_code == 0) {
					// 数据初始化
					await this.getRefundDetail()
				}
				this.loading = false
			} catch (e) {

			}

		},
		handleRefund() {
			this.dialogRefundVisible = true
		},
		// 获取订单信息
		async getRefundDetail() {
			this.loading = true
			try {
				let form = await order.getRefundDetail(this.orderID, this.skuID)
				this.form = form
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

	.container {

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
