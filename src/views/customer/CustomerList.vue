<template>
	<div>
		<!-- 列表页面 -->
		<div class="container yan-container" v-if="redirectType === 'list'">
			<sticky-top>
				<div class="order-header">
					<div class="header-left"><p class="title">客户列表</p></div>
					<div class="header-right" v-auth="'搜索日志'">
						<lin-search @btn="onQueryChange" :selData="selData" @sel="onSelectChange" ref="searchKeyword" placeholder="请输入客户编号/客户名" />
						<lin-date-picker @dateChange="handleDateChange" ref="searchDate" class="date"> </lin-date-picker>
						<el-select v-model="curFollowStatus" @change="followStatusChange" size="medium" filterable default-first-option placeholder="请选择跟进状态" prop="curFollowStatus" class="">
							<el-option label="全部跟进状态" :value="-1"></el-option>
							<el-option :label="value" v-for="(value, key) in followStatusData" :key="key" :value="value"></el-option>
						</el-select>
						<el-button type="primary" plain @click="backInit" size="mini" class="back-btn">返回浏览</el-button>
					</div>
				</div>

				<el-divider></el-divider>
			</sticky-top>
			<div class="header-table-box">
				<div class="btn-filter">
					<el-button size="large" @click="noFollowPass" :type="isActiveNoFollow?'primary': ''">新客超3天未跟进</el-button>
				</div>
				<el-divider></el-divider>
				<div class="header">
					<div class="title">
						<div class="left-wrap">
							<el-button class="add-banner-item" type="primary" plain @click="handleAdd">添加客户</el-button>
							<el-button class="add-banner-item" type="primary" @click="handleCommonPond">释放进公域池</el-button>
						</div>
						<div class="right-wrap">
							<div class="excel-btn">
								<el-button size="small" type="primary" plain @click="handleExport">导出excel数据</el-button>
							</div>
							<el-upload
								class="upload-demo excel-btn"
								action=""
								:on-change="handleChange"
								:file-list="fileList">
								<el-button size="small" type="primary">导入excel数据</el-button>
							</el-upload>
							<div class="download-icon">
								<a href="/static/file/客户信息模板.xlsx" class="link"><img src="@/assets/img/icon/download@icon.png"> 下载模板</a>
							</div>
						</div>
						
						
					</div>
				</div>
				<!-- 表格 -->
				<lin-table
					:tableColumn="tableColumn"
					:tableData="tableData"
					:operate="operate"
					:pagination="pagination"
					:curPage="currentPage"
					type="selection"
					@currentChange="currentChange"
					@handleEdit="handleEdit"
					@handleLog="handleLog"
					@handleProject="handleProject"
					@handleDelete="handleDelete"
					@row-click="rowClick"
					@selection-change="handleSelectionChange"
					v-loading="loading"
				></lin-table>
			</div>
		</div>

		<!-- 编辑页面 -->
		<customer-add v-else-if="redirectType === 'add'" @close="closePage"></customer-add>
		<customer-edit v-else-if="redirectType === 'edit'" :editID="editID" @close="closePage"></customer-edit>
		<customer-log-list v-else-if="redirectType === 'log'" :customerID="editID" :linkCode="linkCode" @close="closePage"></customer-log-list>
		<customer-project-list v-else-if="redirectType === 'project'" :linkCode="linkCode" @close="closePage"></customer-project-list>
	</div>
</template>

<script>
	import LinSearch from '@/components/base/search/lin-search'
    import LinDatePicker from '@/components/base/date-picker/lin-date-picker'
	import customer from '@/models/customer'
	import type from "@/models/type"
	import { CodeToText } from 'element-china-area-data'
	import CustomerAdd from "./CustomerAdd";
	import CustomerEdit from "./CustomerEdit";
	import CustomerLogList from "../customer_log/CustomerLogList";
	import CustomerProjectList from "../customer_project/ProjectList";
	import store from '@/store'
	import excel from "@/models/excel"
	import Config from '@/config'
	export default {
		name: 'CustomerList',
		components: {
			CustomerAdd,
			CustomerEdit,
			CustomerLogList,
			CustomerProjectList,
			LinSearch,
			LinDatePicker
		},
		data() {
			return {
				loading: false,
				fileList: [],
				fieldObj: {
					"follow_status": "followStatusData",
				},
				checkselId: [], // check选中的id值
				curFollowStatus: -1, // 跟进状态 -1是全部状态
				searchKeyword: '', // 搜索内容
				searchDate: '', // 日期
				searchParams: {}, // 搜索筛选参数
				isSearch: false, // 是否处于搜索状态
				isActiveNoFollow: false, // 是否触发3天未跟进
				selData: [
					'客户名','责任人','客户编码'
				],
				curSearchIndex: 0,
				tableColumn: [
					{ prop: 'id', label: 'id', width: 100 },
					{ prop: 'user_code', label: '客户编码', width: 150 },
					{ prop: 'name', label: '客户名', width: 150 },
					{ prop: 'contacts_name', label: '联系人', width: 100 },
					{ prop: 'telephone', label: '联系人电话', width: 150 },
					{ prop: 'level', label: '客户等级', width: 100 },
					{ prop: 'follow_status', label: '跟进状态', width: 150 },
					{ prop: 'channel', label: '客户来源', width: 150 },
					{ prop: 'address', label: '地址', width: 150 },
					{ prop: 'author', label: '责任人', width: 150 },
					{ prop: 'create_time', label: '录入时间' }
				],
				followStatusData: [],
				tableData: [],
				operate: [],
				pagination: {
					pageTotal: 0
				},
				showEdit: false,
				editID: 1,
				linkCode: 0,
				redirectType: 'list',
				currentPage: 1,
				excelLock: true,
				exportExcelLock: true
			}
		},
		created() {
			this.operate = [
				{ name: '编辑', func: 'handleEdit', type: 'primary', icon: 'edit' },
				{
					name: '日志',
					func: 'handleLog',
					type: 'danger',
					icon: 'chat-line-round'
				},
				{
					name: '项目',
					func: 'handleProject',
					type: 'danger',
					icon: 'service',
				}
			]
			if(store.state.auths.includes('删除客户') || store.state.user.username == 'super') {
				this.operate.push({
					name: '删除',
					func: 'handleDelete',
					type: 'danger',
					icon: 'delete',
					auth: '删除客户'
				})
			}
			this.getCustomers()
			this.getTypes()
		},
		methods: {
			// 触发多选checkbox
			handleSelectionChange(data) {
				const checkselId = []
				data.forEach(ele => {
					checkselId.push(ele.id)
				})
				this.checkselId = checkselId
			},
			followStatusChange(val) {
				this.curFollowStatus = val
				this.searchParam()
				this.getCustomers()
			},
			// 获取类型
			async getTypes() {
				let fields = []
				const fieldObj = this.fieldObj
				for(let obj in fieldObj) {
					fields.push(obj)
				}
				fields = fields.join()
				let result = await type.getTypeByField(fields)
				if(!result || result.length == 0) return;
				for(let obj in fieldObj) {
					const key = fieldObj[obj]
					const curData = result.find(val => {
						return val['field'] == obj
					})
					if(curData) {
						this[key] = curData['value']
					}
				}
				
			},
			onSelectChange(query) {
				this.curSearchIndex = query
			},
			onQueryChange(query) {
				// 处理带空格的情况
				this.searchKeyword = query.trim()
				this.searchParam()
				this.getCustomers()
			},
			handleDateChange(date) {
				this.searchDate = date
				this.searchParam()
				this.getCustomers()
			},
			validateIsChinese(val) {
				const pattern = new RegExp("[\u4E00-\u9FA5]+")
				return pattern.test(val)
			},
			handleDateChange(date) {
				this.searchDate = date
				this.searchParam()
				this.getCustomers()
			},
			// 清空检索
			async backInit() {
				this.searchKeyword = ''
				this.searchDate = []
				this.searchParams = {}
				this.$refs.searchDate.clear()
				this.$refs.searchKeyword.clear()
				this.isSearch = false
				await this.getCustomers()
			},
			searchParam() {
				let searchParams = {}
				if (this.curFollowStatus != -1) {
					searchParams['follow_status'] = this.curFollowStatus
				}
				if( this.searchDate && this.searchDate.length > 0) {
					searchParams['start'] = this.searchDate[0]
					searchParams['end'] = this.searchDate[1]
				}
				if( this.searchKeyword ) {
					if(this.curSearchIndex == 0) {
						searchParams['name'] = this.searchKeyword
					} 
					if(this.curSearchIndex == 1) {
						searchParams['author'] = this.searchKeyword
					} 
					if(this.curSearchIndex == 2) {
						searchParams['user_code'] = this.searchKeyword
					} 
				}
				this.searchParams = searchParams
				this.isSearch = true
			},
			async importCustomer(file) {
				this.loading = true
				let res
				if(this.excelLock) {
					this.excelLock = false
					try {
						res = await excel.importCustomer(file)
						if (res.error_code === 0) {
							this.getCustomers(this.currentPage - 1)
							this.$message({
								type: 'success',
								message: `${res.msg}`,
							})
						}
					} catch (error) {
						console.log(error)
						let message = error.data.msg
						if(message) {
							if( typeof message === 'object') {
								for (const key in message){
									this.$message.error(message[key])
									await setTimeout(function () {}, 1000)
								}
							} else {
								this.$message.error(message)
							}
						} else {
							this.$message({
								type: 'error',
								message: `导入失败，请重新尝试`,
							})
						}
					}
				}
				this.loading = false
				this.excelLock = true
				// if (res.error_code === 0) {
				// 	this.getCustomers(this.currentPage - 1)
				// 	this.$message({
				// 		type: 'success',
				// 		message: `${res.msg}`,
				// 	})
				// } else {
				// 	this.$message({
				// 		type: 'success',
				// 		message: `导入失败，请重新尝试`,
				// 	})
				// }
			},
			async exportCustomer(selIds=[]) {
				this.loading = true
				let res
				if(this.exportExcelLock) {
					this.exportExcelLock = false
					try {
						res = await excel.exportCustomer(selIds)
						if (res.error_code === 0) {
							this.$message({
								type: 'success',
								message: `${res.msg}`,
							})
						}
					} catch (error) {
						let message = error.data.msg
						if(message) {
							if( typeof message === 'object') {
								for (const key in message){
									this.$message.error(message[key])
									await setTimeout(function () {}, 1000)
								}
							} else {
								this.$message.error(message)
							}
						} else {
							this.$message({
								type: 'error',
								message: `导出失败，请重新尝试`,
							})
						}
					}
				}
				this.loading = false
				this.exportExcelLock = true
			},
			// 导出excel
			handleExport() {
				const selIds = this.checkselId
				if(selIds.length <= 0) {
					this.$message({
						type: 'warning',
						message: `请先选中客户，再导出`,
					})
					return;
				}
				console.log(selIds)
				console.log(`http://yan.cn/v1/excel/customer?ids=${selIds}`)
				// this.exportCustomer(selIds)
				// const baseURL = Config.baseURL || process.env.apiUrl || ''
				window.location = `http://yan.cn/v1/excel/customer?ids=${selIds}`
			},
			// 导入excel
			async handleChange(file, fileList) {
				await this.importCustomer(file)
			},
			async getCustomers(page = 0) {
				this.loading = true
				let customerLists = {}
				if(store.state.auths.includes('获取全部客户信息')) {
					customerLists = await customer.getCustomers(page,this.searchParams)
				}
				if(store.state.user.username == 'super') {
					customerLists = await customer.getAllCustomers(page,this.searchParams)
				}
				if (customerLists.total_nums <=0 ){
					this.tableData = []
					this.loading = false
					return;
				}
				if (!this.pagination.pageTotal || this.pagination.pageTotal != customerLists.total_nums){
					this.pagination = {
						pageTotal: customerLists.total_nums
					}
				}
				customerLists.collection.forEach(val => {
					val['is_release_user'] = val['is_release_user'] === 0 ? '正常' : '已释放'
					val['status'] = val['status'] === 0 ? '未通过' : '通过'
					val["key"] = val.id
					if(val['address']) {
						if(!this.isChinese(val['address'][0])) {
							val['address'] = CodeToText[val['address'][0]] + '-' + CodeToText[val['address'][1]]
						} else {
							val['address'] = val['address'][0] + '-' + val['address'][1]
						}
					}
				})
				this.tableData = customerLists.collection
				this.loading = false
			},
			// 3天未跟进
			noFollowPass() {
				if(!this.isActiveNoFollow) {
					this.isActiveNoFollow = true
					this.searchParams['type'] = 1
				} else {
					this.isActiveNoFollow = false
					this.searchParams['type'] = -1
				}
				this.getCustomers()
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
			async handleCommonPond() {
				const selIds = this.checkselId
				if(selIds.length <= 0) {
					this.$message({
						type: 'warning',
						message: `请先选中客户`,
					})
					return;
				}
				this.loading = true
				const res = await customer.updateCustomersEntryPublic(selIds)
				this.loading = false
				if (res.error_code === 0) {
					this.getCustomers(this.currentPage - 1)
					this.$message({
						type: 'success',
						message: `${res.msg}`,
					})
				}
			},
			handleAdd() {
				this.redirectType = 'add'
			},
			handleEdit({ row }) {
				this.editID = row.id
				this.redirectType = 'edit'
			},
			handleLog({ row }) {
				this.linkCode = row.link_code
				this.editID = row.id
				this.redirectType = 'log'
			},
			handleProject({ row }) {
				this.linkCode = row.link_code
				this.redirectType = 'project'
			},
			handleDelete(val) {
				
				this.$confirm('此操作将永久删除该客户, 是否继续?', '提示', {
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
	
	.right-wrap{
		display: flex;
		align-items: center;

	}
	// 上传
	.excel-btn{
		/deep/ .el-button{
            padding: 8px 16px;
            font-size: 15px;
        }
	}
    .upload-demo{
        display: inline-block;
        margin-left: 20px;
        /deep/ .el-upload-list{
            display: none;
        }
    }
	.download-icon{
		display: inline-flex;
		.link{
			display: flex;
			align-items: center;
			margin-left: 15px;
			font-size: 14px;
		}
		img{
			width: 25px;
			margin-right: 2px;
		}
	}
	.container {
		&.yan-container{
			padding-bottom: 60px;
		}
		.header-table-box{
			padding: 0 30px;
		}
		.header {
			display: flex;
			justify-content: space-between;
			align-items: center;

			.title {
				flex: 1;
				display:flex;
				justify-content: space-between;
				height: 59px;
				line-height: 59px;
				color: $parent-title-color;
				font-size: 16px;
				font-weight: 500;
			}
		}

		// 添加按钮
		.add-banner-item{
			margin-right: 0;
		}

		.pagination {
			display: flex;
			justify-content: flex-end;
			margin: 20px;
		}
	}
	.back-btn{
		margin-left: 20px;
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

	@media screen and (max-width: 750px) {
		.order-header{
			flex-direction: column;
			// .header-right{
			// 	display: none!important;
			// }
			.header-right{
				flex-direction: column;
			}
			.container.date{
				margin: 20px 0;
				/deep/.el-date-editor{
					max-width: 300px;
				}
			}
		}
		.back-btn.is-plain{
			margin: 15px 0;
		}
	}
</style>
