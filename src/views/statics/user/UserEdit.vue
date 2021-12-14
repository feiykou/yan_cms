<template>
	<div class="container">
		<div class="title">C端用户详情 <span class="back" @click="back(false)"> <i class="iconfont icon-fanhui"></i> 返回 </span></div>
		<div class="wrap">
			<el-row>
				<el-col :lg="16" :md="20" :sm="24" :xs="24">
					<el-form status-icon v-loading="loading" label-width="120px" @submit.native.prevent>
						<el-form-item label="昵称" prop="nickName">
							<el-input size="medium" disabled v-model="form.nickName" placeholder="昵称"></el-input>
						</el-form-item>
						<el-form-item label="头像" prop="avatar_img">
							<el-image
								style="width: 100px; height: 100px"
								:src="form.avatar_img"
								fit="contain"></el-image>
						</el-form-item>
						<el-form-item label="openid" prop="openid">
							<el-input size="medium" disabled v-model="form.openid" placeholder="openid"></el-input>
						</el-form-item>
						<el-form-item label="地址" prop="address">
							<el-input size="medium" disabled v-model="form.address" placeholder="地址"></el-input>
						</el-form-item>
						<el-form-item label="电话" prop="telephone">
							<el-input size="medium" disabled v-model="form.telephone" placeholder="电话"></el-input>
						</el-form-item>
						<el-form-item label="性别" prop="gender">
							<el-input size="medium" disabled v-model="form.gender" placeholder="性别"></el-input>
						</el-form-item>

					</el-form>
				</el-col>
			</el-row>
			<el-tabs v-model="activeName" @tab-click="handleClick">
				<el-tab-pane label="加入购物车产品" name="first">
					<!-- 表格 -->
					<lin-table
							:tableColumn="cartTableColumn"
							:tableData="cartTableData"
							v-loading="cartLoading"
					>
					</lin-table>
				</el-tab-pane>
				<el-tab-pane label="提交的订单" name="second">

					<feiy-table
							:tableColumn="tableColumn"
							:tableData="tableData"
							:pagination="pagination"
							:curPage="currentPage"
							v-loading="orderLoading"
							:operate="operate"
							@currentChange="currentChange"
							@handleEdit="handleEdit"
					>
						<template slot-scope="slotProps">
							<el-tag :type="getStatusVal(slotProps.tag)['type']" v-if="slotProps.tag && slotProps.prop == 'status'">{{ getStatusVal(slotProps.tag)['statusVal']}}</el-tag>
						</template>
					</feiy-table>
				</el-tab-pane>
			</el-tabs>
		</div>
	</div>
</template>

<script>
	import cuser from "@/models/cuser";
	import statistics from "@/models/statistics"
	import feiyTable from '@/components/base/table/feiy-table'
	import status from "@/config/order/orderStatusEnum"
	import {getStatusVal} from "@/lin/utils/order";
	export default {
		name: 'UserEdit',
		props: {
			editID: Number
		},
		components: {
			feiyTable
		},
		data() {
			return {
				loading: false,
				orderLoading: false,
				activeName: 'first',
				form: {

				},
				cartTableData: [],
				cartLoading: false,
				pagination: {
					pageTotal: 0
				},
				currentPage: 1,
				tableData: [],
				operate: [],
				tableColumn: [
					{ prop: 'id', label: 'id', width: 100 },
					{ prop: 'order_no', label: '订单号', width: 200 },
					{ prop: 'total_count', label: '单品数量', width: 200 },
					{ prop: 'total_price', label: '总价格', width: 200 },
					{ prop: 'status', label: '状态', type: 'tag', width: 200, noRepeat: true  },
					{ prop: 'create_time', label: '创建时间'}
				],
				cartTableColumn: [
					{ prop: 'id', label: 'id', width: 100 },
					{ prop: 'img', label: '图片', type: 'image', width: 220 },
					{ prop: 'title', label: 'sku标题',width: 200  },
					{ prop: 'num', label: '数量', width: 200 },
					{ prop: 'price', label: '单价', width: 200 },
					{ prop: 'total_price', label: '总价格', width: 200 },
					{ prop: 'create_time', label: '创建时间'}
				]
			}
		},
		created() {
			// 数据初始化
			this.getCuser()
			this.getUserAllCart()
			this.operate = [
				{ name: '查看', func: 'handleEdit', type: 'primary' }
			]
		},
		methods: {
			currentChange(page) {
				if(page <= 0) return;
				page -= 1
				this.currentPage = page + 1
				this.getUserOrderData(page)
			},
			getStatusVal(val) {
				return getStatusVal(val, status)
			},
			handleClick({name}) {
				if(!name) return;
				this.activeName = name
				if(name == 'second' && this.tableData.length <= 0) {
					this.getUserOrderData()
				}
			},
			handleEdit() {

			},
			async getUserAllCart() {
				let cartData = []
				this.cartLoading = true
				try {
					cartData = await statistics.getUserAllCart(this.editID)
				}catch (e) {

				}
				this.cartLoading = false
				this.cartTableData = cartData
			},
			async getUserOrderData(page=0) {
				let cuserLists = []
				try {
					this.orderLoading = true
					cuserLists = await statistics.getUserOrderData(page, this.editID, 6)
					this.orderLoading = false
					if (!this.pagination.pageTotal){
						this.pagination = {
							pageTotal: cuserLists.total_nums
						}
					}
					cuserLists = cuserLists.collection
				} catch (e) {
					cuserLists = []
					if(this.isSearch) this.$message.error('未搜索到匹配的结果')
					this.orderLoading = false
				}
				this.tableData = cuserLists
			},
			// 获取订单信息
			async getCuser() {
				console.log(this.editID)
				this.loading = true
				// try {
				let form = await cuser.getCuser(this.editID)
				// } catch(error) {
				//   if(error.error_code == 11004) {
				//     this.back(false)
				// 	}
				// }
				this._handleSkuResData(form)
				this.loading = false
			},

			_handleSkuResData(form) {
				form.address = form['province'] + '&' + form['city'] + '&' + form['country']
				form.gender = form.gender === 1 ? '男' : '女'
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
