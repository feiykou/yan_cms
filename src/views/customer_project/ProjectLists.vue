<template>
	<div>
		<!-- 列表页面 -->
		<div class="container page-container" v-if="redirectType === 'list'">
			<sticky-top>
				<div class="order-header">
					<div class="header-left"><p class="title"></p></div>
					<div class="header-right" v-auth="'搜索日志'">
						<lin-search @btn="onQueryChange" :selData="selData" @sel="onSelectChange" ref="searchKeyword" placeholder="请输入客户名/项目名" />
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
			<div class="header"><div class="title"><span>客户项目列表</span>  
				<el-button v-if="linkCode" class="add-banner-item" type="primary" plain @click="handleAdd">添加项目</el-button>
			</div></div>
			<!-- 表格 -->
			<lin-table
				:tableColumn="tableColumn"
				:tableData="tableData"
				:operate="operate"
				:loading="loading"
				:curPage="currentPage"
				:pagination="pagination"
				@currentChange="currentChange"
				@handleEdit="handleEdit"
				@handleLog="handleLog"
				@handleDelete="handleDelete"></lin-table>
		</div>
		<!-- 编辑页面 -->
		<project-add v-else-if="redirectType === 'add'" :linkCode="linkCode" @close="closePage"></project-add>
		<customer-log-list v-else-if="redirectType === 'log'" :projectID="editID" :customerID="customerID" :linkCode="linkCode" @close="closePage"></customer-log-list>
		<project-edit v-else-if="redirectType === 'edit'" :onlyRead="true" :editID="editID" @close="closePage"></project-edit>
	</div>
</template>

<script>
import LinSearch from '@/components/base/search/lin-search'
import LinDatePicker from '@/components/base/date-picker/lin-date-picker'
import project from '@/models/customer_project'
import ProjectEdit from './ProjectEdit'
import ProjectAdd from './ProjectAdd'
import CustomerLogList from "../customer_log/CustomerLogList"
import store from '@/store'
import type from "@/models/type"
export default {
	name: 'CustomerProjectLists',
	components: {
		ProjectEdit,
		ProjectAdd,
		LinSearch,
		LinDatePicker,
		CustomerLogList
	},
	props: {
		linkCode: Number
	},
	data() {
		return {
			currentPage: 1,
			tableColumn: [
				{ prop: 'id', label: 'id', width: 150 },
				{ prop: 'customer_name', label: '客户名'},
				{ prop: 'scene', label: '使用场景'},
				{ prop: 'industry', label: '行业' },
				{ prop: 'create_time', label: '生成时间'},
			],
			curFollowStatus: -1, // 跟进状态 -1是全部状态
			searchKeyword: '', // 搜索内容
			searchDate: '', // 日期
			searchParams: {}, // 搜索筛选参数
			isSearch: false, // 是否处于搜索状态
			curSearchIndex: 0,
			selData: [
				'客户名',
				'项目名'
			],
			pagination: {
				pageTotal: 0
			},
			followStatusData: [],
			fieldObj: {
				"follow_status": "followStatusData",
			},
			tableData: [],
			operate: [
				{ name: '查看', func: 'handleEdit', type: 'primary' },
				{
					name: '日志',
					func: 'handleLog',
					type: 'danger',
					icon: ''
				}],
			showEdit: false,
			loading: false,
			editID: 1,
			customerID: 0,
			redirectType: 'list',
		}
	},
	created() {
		this.getTypes()
		this.getProjects()
	},
	methods: {
		async getProjects(page = 0) {
			this.loading = true
			let projectLists = {}
			if(store.state.user.username == 'super' || store.state.auths.includes('全部项目信息')) {
				// 获取全部项目
				projectLists = await project.getAllCustomerProjects(page, this.searchParams)
			} else {
				// 获取当前管理员录入的所有项目
				projectLists = await project.getCustomerProjects(page, this.searchParams)
			}
			if (!this.pagination.pageTotal || this.pagination.pageTotal != projectLists.total_nums){
				this.pagination = {
					pageTotal: projectLists.total_nums
				}
			}
			if (projectLists.total_nums <=0 ){
				this.tableData = []
				this.loading = false
				return;
			}	
			this.loading = false
			this.tableData = projectLists.collection
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
					searchParams['customer_name'] = this.searchKeyword
				}
				if(this.curSearchIndex == 1) {
					searchParams['name'] = this.searchKeyword
				} 
			}
			this.searchParams = searchParams
			this.isSearch = true
		},
		currentChange(page) {
			if(page <= 0) return;
			page -= 1
			this.currentPage = page + 1
			this.getProjects(page)
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
			if(row.customer_id) this.customerID = row.customer_id
			this.editID = row.id
			this.redirectType = 'log'
		},
		handleDelete(val) {
			this.$confirm('此操作将永久删除该项目, 是否继续?', '提示', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				type: 'warning',
			}).then(async () => {
				const id = [val.row.id]
				this.loading = true
				const res = await Cultural.delCultural(id)
				this.loading = false
				if (res.error_code === 0) {
					this.getCulturals()
					this.$message({
						type: 'success',
						message: `${res.msg}`,
					})
				}
			})
		},
		followStatusChange(val) {
			this.curFollowStatus = val
			this.searchParam()
			this.getProjects()
		},
		onQueryChange(query) {
			// 处理带空格的情况
			this.searchKeyword = query.trim()
			this.searchParam()
			this.getProjects()
		},
		onSelectChange(query) {
			this.curSearchIndex = query
		},
		handleDateChange(date) {
			this.searchDate = date
			this.searchParam()
			this.getProjects()
		},
		rowClick() {},
		closePage(val) {
			this.redirectType = 'list'
			if(val) this.getProjects(this.currentPage - 1)
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
		// 清空检索
		async backInit() {
			this.searchKeyword = ''
			this.searchDate = []
			this.searchParams = {}
			this.$refs.searchDate.clear()
			this.$refs.searchKeyword.clear()
			this.isSearch = false
			await this.getProjects()
		},
	},
}
</script>

<style lang="scss" scoped>
	.page-container{
		padding-bottom: 80px!important;
	}
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
	.order-header {
		display: flex;
		align-items: center;
		padding-right: 20px;
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
		.lin-search{
			margin-right: 30px;
		}
		.date {
				margin-right: 20px;
				padding: 0;
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
	.back-btn{
		margin-left: 15px;
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
				::v-deep.el-date-editor{
					max-width: 300px;
				}
			}
		}
		
		.back-btn.is-plain{
			margin: 15px 0;
		}
	}
</style>
