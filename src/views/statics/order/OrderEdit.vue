<template>
	<div class="container">
		<div class="title">订单详情 <span class="back" @click="back(false)"> <i class="iconfont icon-fanhui"></i> 返回 </span></div>
		<div class="wrap">
			<el-row>
				<el-col :lg="16" :md="20" :sm="24" :xs="24">
					<el-form :model="form" status-icon ref="form" v-loading="loading" label-width="120px" @submit.native.prevent>
						<el-form-item label="订单号" prop="title">
							<el-input size="medium" disabled v-model="form.order_no" placeholder="请填写订单号"></el-input>
						</el-form-item>
						<el-form-item label="图片" prop="img">
							<el-image
								style="width: 100px; height: 100px"
								:src="form.snap_img"
								fit="contain"></el-image>
						</el-form-item>
						<el-form-item label="标题" prop="snap_name">
							<el-input size="medium" disabled v-model="form.snap_name" placeholder="标题"></el-input>
						</el-form-item>
						<el-form-item label="预付编号" prop="prepay_id">
							<el-input size="medium" disabled v-model="form.prepay_id" placeholder="预付编号"></el-input>
						</el-form-item>
						<el-form-item label="总价格" prop="total_price">
							<el-input-number v-model="form.total_price" disabled :precision="2" :step="0.1" :min="0.00" label="总价格"></el-input-number>
						</el-form-item>
						<!--						<el-form-item label="交易价格" prop="price">-->
						<!--							<el-input-number v-model="form.price" @change="handlePriceChange" :precision="2" :step="0.1" :min="0.00" label="描述文字"></el-input-number>-->
						<!--						</el-form-item>-->
						<el-form-item label="总数量" prop="total_count">
							<el-input-number v-model="form.total_count" disabled label="总数量"></el-input-number>
						</el-form-item>
						<el-form-item label="状态" prop="status">
							<el-tag :type="getStatusVal(form.status)['type']" v-if="form.status">{{ getStatusVal(form.status)['statusVal'] }}</el-tag>
						</el-form-item>
						<el-form-item label="地址" prop="address">
							<div class="adress-wrap">
								<div class="name-mobile">
									<span class="name">{{ form.address.name }}</span>
									<span class="mobile">{{ form.address.mobile }}</span>
								</div>
								<div class="detail">
									{{ form.address.detail }}
								</div>
							</div>
						</el-form-item>
						<el-form-item label="客户留言" prop="remark">
							<el-input size="medium" disabled v-model="form.remark"></el-input>
						</el-form-item>
						<el-form-item label="订单备注" prop="order_remark">
							<el-input size="medium" disabled v-model="form.order_remark"></el-input>
						</el-form-item>
						<el-form-item label="详情" prop="stock">
							<lin-table
									:tableColumn="tableColumn"
									:tableData="tableData"
							></lin-table>
						</el-form-item>

						<el-form-item class="submit">
							<el-button v-if="statusEnum['UNPAID'] === form.status" type="primary" @click="cancelForm()">取消订单</el-button>
							<el-button v-if="statusEnum['PAID'] === form.status" type="primary" @click="dialogSendVisible=true">发货</el-button>
							<el-button v-if="statusEnum['DELIVERED'] === form.status || form.status >= statusEnum['SUREDELIVERY']" type="primary" @click="lookLogistics()">查看物流</el-button>
							<el-button v-if="form.refund && form.refund.length > 0" type="primary" @click="handleRefund()">处理退款</el-button>
							<el-button v-if="statusEnum['COMMENT'] === form.status" type="primary" @click="findComment()">查看评论</el-button>
						</el-form-item>
					</el-form>
				</el-col>
			</el-row>
		</div>

		<el-dialog title="发货" :visible.sync="dialogSendVisible">
			<logistics @send="sendTap" :order_id="form.id"></logistics>
		</el-dialog>

		<el-dialog title="查看物流" :visible.sync="dialogDeliverVisible">
			<logisticsVisible v-if="dialogDeliverVisible" :order_no="form.order_no" :status="form.status"></logisticsVisible>
		</el-dialog>

		<el-dialog title="退款信息" :visible.sync="dialogRefundVisible">
			<refund v-if="dialogRefundVisible" :order_id="form.id"></refund>
		</el-dialog>

		<el-dialog title="评论信息" :visible.sync="dialogCommentVisible">
			<order-comment v-if="dialogCommentVisible" :order_id="form.id"></order-comment>
		</el-dialog>

		<el-dialog
				title="提示"
				:visible.sync="cancelDialogVisible"
				width="30%"
				center>
			<span>确定要取消吗？</span>
			<span slot="footer" class="dialog-footer">
				<el-button @click="cancelDialogVisible = false">取 消</el-button>
				<el-button type="primary" :data-id="form.id" @click="cancelAction()">确 定</el-button>
			  </span>
		</el-dialog>
	</div>
</template>

<script>
import status from "@/config/order/orderStatusEnum";

import order from "@/models/order";
import pay from "@/models/pay";

import Utils from "@/lin/utils/util";
import UploadImgs from '@/components/base/upload-imgs'
import tag from "@/components/base/tag/tag";

import logistics from "./logistics"
import logisticsVisible from "./logisticsVisible"
import refund from "./refund"

import orderComment from "../order-comment/list"

export default {
	name: 'OrderEdit',
	components: {
		UploadImgs,
		tag,
		logistics,
		logisticsVisible,
		refund,
		orderComment
	},
	props: {
		editID: Number
	},
	data() {
		return {
			dialogSendVisible: false, // 物流弹窗
			dialogDeliverVisible: false, // 查看物流
			dialogRefundVisible: false, // 退款弹窗
			dialogCommentVisible: false, // 评论弹窗
			cancelDialogVisible: false, // 取消订单
			loading: false,
			tableColumn: [
				{ prop: 'id', label: 'id', width: 100 },
				{ prop: 'img', label: '图片', type: 'image', width: 100 },
				{ prop: 'name', label: '标题', width: 280 },
				{ prop: 'price', label: '单价', width: 120 },
				{ prop: 'total_price', label: '交易价', width: 120 },
				{ prop: 'counts', label: '购买数量', width: 150},
			],
			tableData: [],
			statusEnum: status,
			form: {
				status: 1,
				snap_name: '',
				address: {}
			},
			imgRules: {
				minWidth: 100,
				minHeight: 100,
				maxSize: 5,
			},

		}
	},
	created() {
		// 数据初始化
		this.getOrder()
	},
	methods: {
		lookLogistics() {
			this.dialogDeliverVisible = true
		},
		sendTap() {
			this.dialogSendVisible = false
			this.getOrder()
		},
		cancelForm() {
			this.cancelDialogVisible = true
		},
		cancelAction(e) {
			console.log(e)
		},
		getStatusVal(val) {
			let statusStyle = {
				statusVal: '',
				type: ''
			}
			switch (val) {
				case status['UNPAID']:
					statusStyle = {
						statusVal: '待支付',
						type: 'danger'
					}
					break
				case status['PAID']:
					statusStyle = {
						statusVal: '已支付',
						type: 'success'
					}
					break
				case status['DELIVERED']:
					statusStyle = {
						statusVal: '已发货',
						type: 'success'
					}
					break
				case status['PAID_BUT_OUT_OF']:
					statusStyle = {
						statusVal: '已支付，但库存不足',
						type: 'success'
					}
					break
				case status['HANDLED_OUT_OF']:
					statusStyle = {
						statusVal: '已处理库存不足情况',
						type: 'success'
					}
					break

				case status['SUREDELIVERY']:
					statusStyle = {
						statusVal: '已确认收货',
						type: 'success'
					}
					break
				case status['COMMENT']:
					statusStyle = {
						statusVal: '已评价',
						type: 'success'
					}
					break
				case status['REFUND']:
					statusStyle = {
						statusVal: '退款中',
						type: 'success'
					}
					break
				case status['REFUNDSUCCESS']:
					statusStyle = {
						statusVal: '退款成功',
						type: 'success'
					}
					break
				case status['REFUNDFAIL']:
					statusStyle = {
						statusVal: '退款失败',
						type: 'success'
					}
					break
				case status['RETURNREFUND']:
					statusStyle = {
						statusVal: '退货退款中',
						type: 'success'
					}
					break
				case status['RETURNREFUNDSUCCESS']:
					statusStyle = {
						statusVal: '退货退款成功',
						type: 'success'
					}
					break
				case status['RETURNREFUNDFAIL']:
					statusStyle = {
						statusVal: '退货退款失败',
						type: 'success'
					}
					break
				case status['REMOVE']:
					statusStyle = {
						statusVal: '已删除',
						type: 'success'
					}
					break
				case status['CANCEL']:
					statusStyle = {
						statusVal: '已取消',
						type: 'warning'
					}
			}
			return statusStyle
		},

		async refund() {
			try{
				await pay.refund(this.form.order_no, 0.1)
			} catch (e) {

			}

		},

		findComment() {
			this.dialogCommentVisible = true
		},

		handleRefund() {
			this.dialogRefundVisible = true
		},

		// 获取订单信息
		async getOrder() {
			this.loading = true
			try {
				let form = await order.getOrder(this.editID)
				this._handleSkuResData(form)
			} catch(error) {
				this.back(false)
			}
			this.loading = false
		},

		_handleSkuResData(form) {
			form.address = this.solveAddress(form.snap_address)
			form.items = this.solveSku(form.snap_items)
			this.form = form
		},
		solveAddress(addressData) {
			let data = {}
			data.name = addressData['name']
			data.mobile = addressData['mobile']
			data.detail = addressData['province'] + addressData['city'] + addressData['country'] + addressData['detail']
			return data
		},
		solveSku(snap_items) {
			this.tableData = snap_items.map(val => {
				return {
					id: val.id,
					img: val.img,
					name: val.title,
					price: val.price,
					total_price: val.totalPrice,
					counts: val.counts
				}
			})
		},
		// 解析响应的图片
		solveShowImg(val) {
			return Utils.solveShowImg(val)
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
