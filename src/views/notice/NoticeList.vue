<template>
	<div>
		<div v-if="redirectType === 'list'">
			<sticky-top>
				<div class="order-header">
					<div class="header-left"><p class="title">Notice列表</p></div>
					<el-button class="add-banner-item" type="primary" plain @click="handleAdd">添加Notice</el-button>
				</div>
			</sticky-top>
			<!-- 列表页面 -->
			<div class="container">
				<!-- 表格 -->
				<!-- <lin-table
					:tableColumn="tableColumn"
					:tableData="tableData"
					:operate="operate"
					:pagination="pagination"
					:curPage="currentPage"
					@handleEdit="handleEdit"
					@handleDelete="handleDelete"
					@row-click="rowClick"
					v-loading="loading"
				></lin-table> -->
				<feiy-table
					:tableColumn="tableColumn"
					:tableData="tableData"
					:operate="operate"
					:loading="loading"
					@handleEdit="handleEdit"
					@handleDelete="handleDelete"
					@handleCellSave="handleCellSave"></feiy-table>
			</div>
		</div>

		<!-- 编辑页面 -->
		<notice-add v-else-if="redirectType === 'add'" @close="closePage"></notice-add>
		<notice-edit v-else-if="redirectType === 'edit'" :editID="editID" @close="closePage"></notice-edit>
	</div>
</template>

<script>
	import notice from '@/models/notice'
	import NoticeAdd from "./NoticeAdd";
	import NoticeEdit from "./NoticeEdit";
	import NoticeEnum from "../../config/notice/NoticeEnum";
	import feiyTable from '@/components/base/table/feiy-table'
	export default {
		name: 'NoticeList',
		components: {
			NoticeAdd,
			NoticeEdit,
			feiyTable
		},
		data() {
			return {
				loading: false,
				tableColumn: [
					{ prop: 'id', label: 'id', width: 100 },
					{ prop: 'title', label: '内容', width: 200 },
					{ prop: 'type', label: '类型', width: 200 },
					{ prop: 'highlight', label: '是否高亮', width: 200 },
					{ prop: 'order', label: '排序', type: 'edit', order: 1, width: 200, edit: false, noRepeat: true },
					{ prop: 'start_date', label: '日期'},
				],
				tableData: [],
				operate: [],
				pagination: {
					pageTotal: 0
				},
				showEdit: false,
				editID: 1,
				redirectType: 'list',
				currentPage: 1,
				typeArr: NoticeEnum
			}
		},
		created() {
			this.operate = [
				{ name: '编辑', func: 'handleEdit', type: 'primary' },
				{
					name: '删除',
					func: 'handleDelete',
					type: 'danger',
					auth: '删除tag',
				},
			]
			this.getNotices()
		},
		methods: {
			async getNotices(page = 0) {
				this.loading = true
				const noticeLists = await notice.getNotices(page)
				this.loading = false
				if (noticeLists.total_nums <=0 ){
					this.tableData = []
					return;
				}
				if (!this.pagination.pageTotal){
					this.pagination = {
						pageTotal: noticeLists.total_nums
					}
				}
				noticeLists.collection.forEach(val => {
					val['highlight'] = val['highlight'] === 0 ? '否' : '是'
					val['type'] = this.typeArr[val['type']]
				})
				this.tableData = noticeLists.collection
			},

			handleAdd() {
				this.redirectType = 'add'
			},
			handleEdit({ row }) {
				this.editID = row.id
				this.redirectType = 'edit'
			},
			handleDelete(val) {
				this.$confirm('此操作将永久删除该Notice, 是否继续?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning',
				}).then(async () => {
					const id = [val.row.id]
					this.loading = true
					const res = await notice.delNotice(id)
					this.loading = false
					if (res.error_code === 0) {
						this.getNotices(this.currentPage - 1)
						this.$message({
							type: 'success',
							message: `${res.msg}`,
						})
					}
				})
			},
		async handleCellSave({ row, prop }) {
			const info = this.singleUpdate({
				id: row.id,
				value: row[prop],
				type: 1,
				field: prop
			})
			this.loading = true
			const res = await notice.updateSingle(info)
			this.loading = false
			if (res.error_code === 0) {
				this.$message.success(`${res.msg}`)
				this.getNotices(this.currentPage - 1)
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
			rowClick() {},
			closePage(val) {
				this.redirectType = 'list'
				if(val) this.getNotices(this.currentPage - 1)
			},
		},
	}
</script>

<style lang="scss" scoped>
	.order-header {
		display: flex;
		align-items: center;
		padding: 0 20px;
		margin-bottom: 24px;

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
			.back-btn {
				margin: 0 30px;
			}
		}
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
</style>
