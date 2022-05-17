<template>
	<div>
		<!-- 列表页面 -->
		<div class="container page-container" v-if="redirectType === 'list'">
			<sticky-top>
				<div class="order-header">
					<div class="header-left"><p class="title"></p></div>
					<div class="header-right">
						<el-select v-model="curStatus" @change="statusChange" size="medium" filterable default-first-option placeholder="请选择跟进状态" prop="curFollowStatus" class="">
							<el-option label="全部审核状态" :value="-1"></el-option>
							<el-option :label="value" v-for="(value, key) in statusData" :key="key" :value="key"></el-option>
						</el-select>
						<el-button type="primary" plain @click="backInit" size="mini" class="back-btn">返回浏览</el-button>
					</div>
				</div>
				<el-divider></el-divider>
			</sticky-top>
			<div class="header"><div class="title"><span>客户项目审核列表</span></div></div>
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
		<customer-log-list v-else-if="redirectType === 'log'" :projectID="projectID" :customerID="customerID" :linkCode="linkCode" @close="closePage"></customer-log-list>
		
		<el-dialog title="审核" :visible.sync="dialogFormVisible">
			<project-examine-edit :projectID="projectID" :editID="editID" @close="dialogClose"></project-examine-edit>
		</el-dialog>
	</div>
</template>

<script>
import projectExamine from '@/models/project-examine'
import ProjectExamineEdit from './ProjectExamineEdit'
import CustomerLogList from "../customer_log/CustomerLogList"
import store from '@/store'
import type from "@/models/type"
export default {
	name: 'CustomerProjectLists',
	components: {
		ProjectExamineEdit,
		CustomerLogList
	},
	data() {
		return {
			curStatus: -1,
			currentPage: 1,
			dialogFormVisible: false,
			tableColumn: [
				{ prop: 'id', label: 'id', width: 100 },
				{ prop: 'author', label: '申请人', width: 100},
                { prop: 'customer_name', label: '客户名', width: 200},
				{ prop: 'project_name', label: '项目名', width: 200},
				{ prop: 'reason', label: '原因', width: 200},
				{ prop: 'status', label: '审核状态', type: 'html', width: 150},
				{ prop: 'result_reason', label: '驳回原因'},
				{ prop: 'create_time', label: '生成时间', width: 200},
			],
			statusData: ['审核不通过', '审核通过', '正在审核中'],
			pagination: {
				pageTotal: 0
			},
			tableData: [],
			operate: [
                { name: '审核', func: 'handleEdit', type: 'primary', auth: '审核项目' },
                {
                    name: '日志',
                    func: 'handleLog',
                    type: 'danger',
                    icon: '',
                    auth: '审核项目'
                }
			],
			statusObj: {
				0: '<span style="color: #c75d6e;">审核不通过</span>',
				1: '<span style="color: #3963bc;">审核通过</span>',
				2: '<span style="color: orange;">正在审核中</span>'
			},
			showEdit: false,
			loading: false,
			editID: 1,
			projectID: 0,
			customerID: 0,
			linkCode: 0,
			redirectType: 'list',
		}
	},
	created() {
		this.getTypes()
		this.getProjectExamines()
	},
	methods: {
		statusChange(val) {
			this.curStatus = val
			this.getProjectExamines()
		},

		backInit() {
			this.curStatus = -1
			this.getProjectExamines()
		},

		async getProjectExamines(page = 0) {
			this.loading = true
			let projectLists = {},
				searchParams = {}
			if (this.curStatus != -1) {
				searchParams['status'] = this.curStatus
			}
			if(store.state.user.username == 'super' || store.state.auths.includes('全部项目信息')) {
				// 获取全部项目
				projectLists = await projectExamine.getAllProjectExamine(page, searchParams)
			} else {
				// 获取当前管理员录入的所有项目
				projectLists = await projectExamine.getProjectExamines(page,searchParams)
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
			projectLists.collection.forEach(ele => {
				ele.status = this.statusObj[ele.status] || '错误'
			})
			this.loading = false
			this.tableData = projectLists.collection
		},
		currentChange(page) {
			if(page <= 0) return;
			page -= 1
			this.currentPage = page + 1
			this.getProjectExamines(page)
		},
		handleEdit({ row }) {
			this.editID = row.id
			this.projectID = row.project_id
			// this.redirectType = 'edit'
			this.dialogFormVisible = true
		},
		handleLog({ row }) {
			// this.linkCode = row.link_code
			if(row.customer_id) this.customerID = row.customer_id
			this.projectID = row.project_id
			this.linkCode = row.link_code
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
		rowClick() {},
		closePage(val) {
			this.redirectType = 'list'
			if(val) this.getProjectExamines(this.currentPage - 1)
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
		dialogClose() {
			this.dialogFormVisible=false
			this.getProjectExamines(this.currentPage-1)
		}
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
