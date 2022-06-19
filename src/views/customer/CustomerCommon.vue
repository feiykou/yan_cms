<template>
	<div>
		<!-- 列表页面 -->
		<div class="container" v-if="redirectType === 'list'">
			<div class="header">
				<div class="title">
					<span>客户公域池列表</span>  
				</div>
			</div>
			<!-- 表格 -->
			<lin-table
				:tableColumn="tableColumn"
				:tableData="tableData"
				:operate="operate"
				:pagination="pagination"
				:curPage="currentPage"
				@currentChange="currentChange"
				@handleEdit="handleEdit"
				@handleLog="handleLog"
				@handleDelete="handleDelete"
				@row-click="rowClick"
				v-loading="loading"
			></lin-table>
		</div>
		<customer-log-list v-else-if="redirectType === 'log'" 
			:isCommonCustomer="true" 
			:hideLogBtn="hideLogBtn" 
			:userCode="userCode" 
			:linkCode="linkCode"
			@close="closePage"></customer-log-list>
	</div>
</template>

<script>
	import customer from '@/models/customer'
	import { CodeToText } from 'element-china-area-data'
	import CustomerEdit from "./CustomerEdit";
	import CustomerLogList from "../customer_log/CustomerLogList";
	import store from '@/store'
	export default {
		name: 'CustomerList',
		components: {
			CustomerEdit,
			CustomerLogList
		},
		data() {
			return {
				loading: false,
				hideLogBtn: true,
				fileList: [],
				tableColumn: [
					{ prop: 'id', label: '客户编码', width: 100 },
					{ prop: 'name', label: '客户名', width: 150 },
					{ prop: 'contacts_name', label: '联系人', width: 150 },
					{ prop: 'email', label: '邮箱', width: 150 },
					{ prop: 'address', label: '地址', width: 150 },
					{ prop: 'purpose', label: '项目用途', width: 150 },
					{ prop: 'create_time', label: '录入时间' }
				],
				tableData: [],
				operate: [],
				pagination: {
					pageTotal: 0
				},
				showEdit: false,
				editID: 1,
				userCode: '',
				linkCode: '',
				redirectType: 'list',
				currentPage: 1,
				excelLock: true
			}
		},
		created() {
			this.operate = [
				{ name: '抢单', func: 'handleEdit', type: 'primary' },
				{
					name: '日志',
					func: 'handleLog',
					type: 'danger',
				}
			]
			this.getCustomers()
		},
		methods: {
			async getCustomers(page = 0) {
				this.loading = true
				let customerLists = await customer.getPublicAllCustomers(page)
				if (customerLists.total_nums <=0 ){
					this.tableData = []
					this.loading = false
					return;
				}
				if (!this.pagination.pageTotal){
					this.pagination = {
						pageTotal: customerLists.total_nums
					}
				}
				customerLists.collection.forEach(val => {
					val['is_release_user'] = val['is_release_user'] === 0 ? '正常' : '已释放'
					val['status'] = val['status'] === 0 ? '未通过' : '通过'
					if(val['address']) {
						if(!this.isChinese(val['address']['province'])) {
							val['address'] = CodeToText[val['address']['province']] + '-' + CodeToText[val['address']['city']]
						} else {
							val['address'] = val['address']['province'] + '-' + val['address']['city']
						}
					}
				})
				this.tableData = customerLists.collection
				this.loading = false
			},
			isChinese(temp){
				var re=/[^\u4E00-\u9FA5]/;
				if (re.test(temp)) return false ;
				return true ;
			},
			currentChange(page) {
				if(page <= 0) return;
				page -= 1
				this.currentPage = page + 1
				this.getCustomers(page)
			},
			handleEdit({ row }) {
				this.$confirm('太棒了，确定要收了它吗', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning',
				}).then(async () => {
					console.log(row.id)
					const id = row.id
					this.loading = true
					const res = await customer.getPublicSetCustomers(id)
					this.loading = false
					console.log(res)
					if (res.error_code === 0) {
						this.getCustomers(this.currentPage - 1)
						this.$message({
							type: 'success',
							message: `${res.msg}`,
						})
					}
				})
			},
			handleLog({ row }) {
				this.editID = row.id
				this.userCode = row.user_code
				this.linkCode = row.link_code
				this.redirectType = 'log'
			},
			handleDelete(val) {
				this.$confirm('此操作将永久删除该专栏, 是否继续?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning',
				}).then(async () => {
					const id = [val.row.id]
					this.loading = true
					const res = await customer.delCustomer(id)
					this.loading = false
					if (res.error_code === 0) {
						this.getCustomers(this.currentPage - 1)
						this.$message({
							type: 'success',
							message: `${res.msg}`,
						})
					}
				})
			},
			rowClick() {},
			closePage(val) {
				this.redirectType = 'list'
				if(val) this.getCustomers(this.currentPage - 1)
			},
		},
	}
</script>

<style lang="scss" scoped>
	.container {
		padding: 0 30px;

		.header {
			display: flex;
			justify-content: space-between;
			align-items: center;

			.title {
				height: 59px;
				line-height: 59px;
				color: $parent-title-color;
				font-size: 16px;
				font-weight: 500;
			}
		}

		// 添加按钮
		.add-banner-item{
			margin-left: 30px;
		}

		.pagination {
			display: flex;
			justify-content: flex-end;
			margin: 20px;
		}
	}
</style>
