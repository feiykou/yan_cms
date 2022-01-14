<template>
	<div>
		<!-- 列表页面 -->
		<div class="container" v-if="redirectType === 'list'">
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
				@currentChange="currentChange"
				@handleEdit="handleEdit"
				@handleDelete="handleDelete"></lin-table>
		</div>
		<!-- 编辑页面 -->
		<project-add v-else-if="redirectType === 'add'" :linkCode="linkCode" @close="closePage"></project-add>
		<project-edit v-else-if="redirectType === 'edit'" :editID="editID" @close="closePage"></project-edit>
	</div>
</template>

<script>
import project from '@/models/customer_project'
import ProjectEdit from './ProjectEdit'
import ProjectAdd from './ProjectAdd'
import store from '@/store'
export default {
	name: 'CustomerProjectLists',
	components: {
		ProjectEdit,
		ProjectAdd
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
				{ prop: 'author', label: '录入人员' },
				{ prop: 'create_time', label: '生成时间'},
			],
			tableData: [],
			operate: [],
			showEdit: false,
			loading: false,
			editID: 1,
			redirectType: 'list',
		}
	},
	created() {
		this.getProjects()
	},
	methods: {
		async getProjects(page = 0) {
			this.loading = true
			let projectLists = {}
			if(store.state.auths.includes('全部项目信息')) {
				// 获取全部项目
				projectLists = await project.getAllCustomerProjects(page)
			} else {
				// 获取当前管理员录入的所有项目
				projectLists = await project.getCustomerProjects(page)
			}
			if (projectLists.total_nums <=0 ){
				this.tableData = []
				this.loading = false
				return;
			}	
			this.loading = false
			this.tableData = projectLists.collection
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
			if(val) this.getProjects(this.currentPage - 1)
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
