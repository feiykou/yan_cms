<template>
	<div>
		<!-- 列表页面 -->
		<div class="container" v-if="redirectType === 'list'">
			<div class="header">
				<div class="title">
					<span>客户项目列表</span>  
					<el-button class="add-banner-item" type="primary" plain @click="handleAdd">添加项目</el-button>
				</div>
				<span class="back" @click="back(true)"> <i class="iconfont icon-fanhui"></i> 返回 </span>
			</div>
			<!-- 表格 -->
			<lin-table
				:tableColumn="tableColumn"
				:tableData="tableData"
				:operate="operate"
				:loading="loading"
				:curPage="currentPage"
				@handleLog="handleLog"
				@currentChange="currentChange"
				@handleEdit="handleEdit"
				@handleDelete="handleDelete"></lin-table>
		</div>

		<!-- 编辑页面 -->
		<customer-log-list v-else-if="redirectType === 'log'" :projectID="editID" :customerID="customerID" :linkCode="linkCode" @close="closePage"></customer-log-list>
		<project-add v-else-if="redirectType === 'add'" :linkCode="linkCode" @close="closePage"></project-add>
		<project-edit v-else-if="redirectType === 'edit'" :editID="editID" @close="closePage"></project-edit>
	</div>
</template>

<script>
import project from '@/models/customer_project'
import ProjectEdit from './ProjectEdit'
import ProjectAdd from './ProjectAdd'
import CustomerLogList from "../customer_log/CustomerLogList"

export default {
	name: 'ProjectList',
	components: {
		ProjectEdit,
		ProjectAdd,
		CustomerLogList
	},
	props: {
		linkCode: {
			type: Number,
			default: 0
		},
		customerID: Number
	},
	data() {
		return {
			editID: 0,
			currentPage: 1,
			tableColumn: [
				{ prop: 'id', label: 'id', width: 150 },
				{ prop: 'customer_name', label: '客户名', width: 300},
				{ prop: 'scene', label: '使用场景', width: 200},
				{ prop: 'author', label: '录入人员', width: 200 },
				{ prop: 'follow_count', label: '跟进次数', width: 200 },
				{ prop: 'create_time', label: '生成时间'},
			],
			tableData: [],
			operate: [],
			showEdit: false,
			loading: false,
			redirectType: 'list',
		}
	},
	created() {
			this.operate = []
			if(this.linkCode) {
				this.operate.push({ name: '编辑', func: 'handleEdit', type: 'primary' })
			}
			this.operate.push({
				name: '删除',
				func: 'handleDelete',
				type: 'danger',
				auth: '删除客户项目',
			})
			this.operate.push({
				name: '日志',
				func: 'handleLog',
				type: 'danger',
				icon: ''
			})
			this.getProjects()
	},
	methods: {
		async getProjects(page = 0) {
			this.loading = true
			if(this.linkCode <= 0) {
				this.$message({
					type: 'success',
					message: `客户错误`,
				})
				return
			}
			try {
				let projectLists = await project.getCustomerProjects(page, {}, this.linkCode, 0)
				if (projectLists.total_nums <=0 ){
					this.tableData = []
					this.loading = false
					return;
				}	
				this.loading = false
				this.tableData = projectLists.collection
			} catch(e) {
				this.loading = false
				this.tableData = []
				if(error.data) {
					let message = error.data.msg
					if(message && typeof message === 'object'){
						for (const key in message){
							this.$message.error(message[key])
							await setTimeout(function () {}, 1000)
						}
					}
				} else {
					this.$message.error(error.toString())
				}
			}
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
			this.editID = row.id
			this.redirectType = 'log'
		},
		// async handleCellSave({ row, prop }) {
		// 	const info = this.singleUpdate({
		// 		id: row.id,
		// 		value: row[prop],
		// 		type: 1,
		// 		field: prop
		// 	})
		// 	this.loading = true
		// 	const res = await Cultural.updateSingle(info)
		// 	this.loading = false
		// 	if (res.error_code === 0) {
		// 		this.$message.success(`${res.msg}`)
		// 		this.getCulturals()
		// 	}
		// },
		// singleUpdate({id, value, field, type}) {
		// 	let info = {}
		// 	info.id = id
		// 	info.value = value
		// 	if(field) info.field = field
		// 	if(type) info.type = 1
		// 	return info
		// },
		handleDelete(val) {
			this.$confirm('此操作将永久删除该项目, 是否继续?', '提示', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				type: 'warning',
			}).then(async () => {
				const id = [val.row.id]
				this.loading = true
				const res = await project.delCustomerProject(id)
				this.loading = false
				if (res.error_code === 0) {
					this.getProjects(this.currentPage - 1)
					this.$message({
						type: 'success',
						message: `${res.msg}`,
					})
				}
			})
		},
		rowClick() {},
		back(status = true) {
			  this.$emit('close', status)
        },
		closePage(val) {
			this.redirectType = 'list'
			if(val) this.getProjects()
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
				white-space: nowrap;
			}
			.back{
				cursor: pointer;
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
