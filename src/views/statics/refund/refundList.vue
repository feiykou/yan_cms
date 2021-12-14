<template>
	<div class="mg-order">
		<div  v-if="redirectType === 'list'">
			<sticky-top>
				<div class="order-header">
					<div class="header-left"><p class="title">订单列表</p></div>
					<div class="header-right" v-auth="'搜索日志'">
						<lin-search @btn="onQueryChange" ref="searchKeyword" placeholder="请输入订单号/姓名" />
						<lin-date-picker @dateChange="handleDateChange" ref="searchDate" class="date"> </lin-date-picker>
						<el-select v-model="curStatus" @change="statusChange" size="medium" filterable default-first-option placeholder="请选择订单状态" prop="status" class="">
							<el-option label="全部订单" :value="-1"></el-option>
							<el-option :label="value.msg" v-for="(value, key) in refundStatusEnum" :value="value.number"></el-option>
						</el-select>
						<el-button type="primary" plain @click="backInit" size="mini" class="back-btn">返回浏览</el-button>
					</div>
				</div>

				<el-divider v-if="!keyword"></el-divider>
			</sticky-top>
			<div class="container">
				<!-- 表格 -->
				<feiy-table
						:tableColumn="tableColumn"
						:tableData="tableData"
						:operate="operate"
						:operateStyle="operateStyle"
						:pagination="pagination"
						:curPage="currentPage"
						@currentChange="currentChange"
						@handleEdit="handleEdit"
						@handleCellSave="handleCellSave"
						v-loading="loading"
				>
					<template slot-scope="slotProps">
						<el-tag :type="getStatusVal(slotProps.tag)['type']" v-if="slotProps.tag && slotProps.prop == 'status'">{{ getStatusVal(slotProps.tag, 1)['statusVal']}}</el-tag>
						<el-tag :type="getStatusVal(slotProps.tag)['type']" v-if="slotProps.tag && slotProps.prop == 'reply_status'">{{ getStatusVal(slotProps.tag)['statusVal']}}</el-tag>
					</template>
				</feiy-table>
			</div>
		</div>
		<!-- 编辑页面 -->
		<div v-else-if="redirectType === 'edit'">
			<refund-edit :orderID="editParam.orderID" :orderNO="editParam.orderNO" :skuID="editParam.skuID" @close="closePage"></refund-edit>
		</div>
	</div>
</template>

<script>
	import LinDatePicker from '@/components/base/date-picker/lin-date-picker'
	import LinSearch from '@/components/base/search/lin-search'
	import refundModel from "@/models/refund"
	import RefundEdit from "./RefundEdit"
	import refundStatusEnum from "@/config/order/orderRefundEnum"
	import feiyTable from '@/components/base/table/feiy-table'

	export default {
		name: "OrderList",
		components: {
			LinSearch,
			LinDatePicker,
			RefundEdit,
			feiyTable
		},
		data() {
			return {
				searchUser: '',
				loading: false,
				curStatus: -1,
				refundStatusEnum,
				tableColumn: [
					{ prop: 'id', label: 'id', width: 80 },
					{ prop: 'user_id', label: '用户id', width: 80 },
					{ prop: 'sku_title', label: '产品名称', width: 200 },
					{ prop: 'price', label: '退款价格', width: 150 },
					{ prop: 'count', label: '数量', width: 80 },
					{ prop: 'order_no', label: '订单号', width: 200 },
					{ prop: 'reply_status', label: '退换货状态', type: 'tag', width: 150, noRepeat: true  },
					{ prop: 'status', label: '进度状态', type: 'tag', width: 150, noRepeat: true  },
					{ prop: 'reason', label: '退款原因', width: 200 },
					{ prop: 'create_time', label: '发布时间', width: 200  },
				],
				tableData: [],
				operate: [],
				operateStyle: {
					width: 150
				},
				editParam: {
					orderID: 0,
					skuID: 0,
					orderNO: ''
				},
				pagination: {
					pageTotal: 0
				},
				currentPage: 1,
				redirectType: 'list',
				editID: 1,
				keyword: null,
				searchKeyword: '',
				searchDate: [],
				searchParams: {},
				isSearch: false
			}
		},
		created() {
			this.operate = [
				{ name: '查看', func: 'handleEdit', type: 'primary'}
			]
			this.getRefunds()
		},
		methods: {
			async getRefunds(page = 0) {
				let refundLists = []
				try {
					this.loading = true
					refundLists = await refundModel.getRefunds(page, this.searchParams)
					this.loading = false
					if (!this.pagination.pageTotal){
						this.pagination = {
							pageTotal: refundLists.total_nums
						}
					}
					refundLists = refundLists.collection
				} catch (e) {
					refundLists = []
					if(this.isSearch) this.$message.error('未搜索到匹配的结果')
					this.loading = false
				}
				this.tableData = refundLists
			},
			getRefundVal(val) {
				let statusStyle = {
					statusVal: '正常',
					type: 'success'
				}
				if(val && val.length > 0) {
					statusStyle = {
						statusVal: '退款处理',
						type: 'danger'
					}
				}
				return statusStyle
			},
			getStatusVal(val, type) {
				const selVal = Object.values(refundStatusEnum).filter(item => {
					return item.number == val
				})
				if(selVal.length <= 0) return {
					statusVal: '',
					type: ''
				}
				let msg = selVal[0].msg,
					stype = selVal[0].type
				if((selVal[0].number == 1 || selVal[0].number == 2 || selVal[0].number == 3) && type == 1) {
					msg = '申请中'
					stype = 'danger'
				}
				let statusStyle = {
					statusVal: msg,
					type: stype
				}
				return statusStyle
			},
			searchParam() {
				let searchParams = {}
				if (this.curStatus != -1) {
					searchParams['status'] = this.curStatus
				}
				if( this.searchDate && this.searchDate.length > 0) {
					searchParams['start'] = this.searchDate[0]
					searchParams['end'] = this.searchDate[1]
				}
				if( this.searchKeyword ) {
					searchParams['order_no'] = this.searchKeyword
				}
				this.searchParams = searchParams
				this.isSearch = true
			},
			validateIsChinese(val) {
				const pattern = new RegExp("[\u4E00-\u9FA5]+")
				return pattern.test(val)
			},
			handleDateChange(date) {
				this.searchDate = date
				this.searchParam()
				this.getRefunds()
			},
			statusChange(status) {
				this.curStatus = status
				this.searchParam()
				this.getRefunds()
			},
			onQueryChange(query) {
				// 处理带空格的情况
				this.searchKeyword = query.trim()
				this.searchParam()
				this.getRefunds()
			},
			// 清空检索
			async backInit() {
				this.searchKeyword = ''
				this.searchDate = []
				this.searchParams = {}
				this.$refs.searchDate.clear()
				this.$refs.searchKeyword.clear()
				this.isSearch = false
				await this.getRefunds()
			},
			currentChange(page) {
				if(page <= 0) return;
				page -= 1
				this.currentPage = page + 1
				this.getRefunds(page)
			},
			handleEdit({ row }) {
				this.editID = row.id
				let editParam = {
					orderID: row.order_id,
					skuID: row.sku_id,
					orderNO: row.order_no
				}
				this.editParam = editParam
				this.redirectType = 'edit'
			},
			async handleCellSave({ row, prop }) {
				const info = this.singleUpdate({
					id: row.id,
					value: row[prop],
					field: prop
				})
				this.loading = true
				const res = await order.updateSingle(info)
				this.loading = false
				if (res.error_code === 0) {
					this.$message.success(`${res.msg}`)
				}
			},
			singleUpdate({id, value, field, type}) {
				let info = {}
				info.id = id
				info.value = value
				if(field) info.field = field
				if(type) info.type = 1
				return info
			},
			handleDelete(val) {
				this.$confirm('此操作将永久删除该订单, 是否继续?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning',
				}).then(async () => {
					const id = [val.row.id]
					this.loading = true
					const res = await order.delOrder(id)
					this.loading = false
					if (res.error_code === 0) {
						this.getRefunds(this.currentPage - 1)
						this.$message({
							type: 'success',
							message: `${res.msg}`,
						})
					}
				})
			},
			closePage(val) {
				this.redirectType = 'list'
				if(val) this.getRefunds()
			},
		},
	}
</script>

<style lang="scss" scoped>
	.back-btn{
		margin-left: 30px;
	}
	.order-header {
		display: flex;
		align-items: center;
		padding: 0 20px;
		margin-bottom: -24px;

		.header-left {

			.title {
				height: 59px;
				line-height: 59px;
				color: #4c76af;
				font-size: 16px;
				font-weight: 500;
			}
		}

		.header-right {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-left: 30px;
			.date {
				margin: 0 20px;
			}
		}
	}
	.search {
		height: 52px;
		width: 100%;
		background: rgba(57, 99, 188, 0.1);
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin-top: 24px;

		.search-tip {
			margin-left: 40px;
			height: 52px;
			line-height: 52px;
			color: #354058;
			font-size: 14px;

			.search-keyword {
				color: $theme;
			}

			.search-num {
				color: #f4516c;
			}
		}

		.search-back {
			margin: 8px 20px;
			height: 32px;
			background: #f4516c;
			border: none;
			border-radius: 2px;
			color: #fff;
			padding: 0 13px;
			font-size: 14px;
			cursor: pointer;
		}
	}
	.container {
		padding: 0 30px;
	}

</style>