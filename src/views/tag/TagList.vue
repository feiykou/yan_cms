<template>
	<div>
		<!-- 列表页面 -->
		<div class="container" v-if="redirectType === 'list'">
			<sticky-top>
				<div class="order-header">
					<div class="header-left"><p class="title">Tag列表</p></div>
					<el-button class="add-banner-item" type="primary" plain @click="handleAdd">添加Tag</el-button>
					<div class="header-right">
						<el-select size="medium" filterable v-model="type" placeholder="请选择类型" @change="changeType">
							<el-option v-for="(value, type) in typeArr" :value="setNumber(type)" :label="value">
								<span style="color: #b4b4b4; margin-right: 15px; font-size: 12px;">{{ type }}</span>
								<span>{{ value }}</span>
							</el-option>
						</el-select>
						<el-button type="primary" plain @click="backInit" size="mini" class="back-btn">返回浏览</el-button>
					</div>
				</div>
				<el-divider v-if="!keyword"></el-divider>
			</sticky-top>
			<!-- 表格 -->
			<lin-table
				:tableColumn="tableColumn"
				:tableData="tableData"
				:operate="operate"
				:pagination="pagination"
				:curPage="currentPage"
				@handleEdit="handleEdit"
				@handleDelete="handleDelete"
				@row-click="rowClick"
				v-loading="loading"
			></lin-table>
		</div>

		<!-- 编辑页面 -->
		<tag-add v-else-if="redirectType === 'add'" @close="closePage"></tag-add>
		<tag-edit v-else-if="redirectType === 'edit'" :editID="editID" @close="closePage"></tag-edit>
	</div>
</template>

<script>
	import tag from '@/models/tag'
	import TagAdd from "./TagAdd";
	import TagEdit from "./TagEdit";
	import TagEnum from "../../config/tag/TagEnum";
	export default {
		name: 'TagList',
		components: {
			TagAdd,
			TagEdit
		},
		data() {
			return {
				loading: false,
				tableColumn: [
					{ prop: 'id', label: 'id', width: 100 },
					{ prop: 'title', label: '标题', width: 200 },
					{ prop: 'type', label: '类型', width: 150 },
					{ prop: 'highlight', label: '是否高亮', width: 150 },
					{ prop: 'type_id', label: '类型', width: 150 },
					{ prop: 'description', label: '描述'}
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
				typeArr: TagEnum,
				type: 1,
				keyword: null
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
			this.getTags()
		},
		methods: {
			// 清空检索
			async backInit() {
				this.searchKeyword = ''
				this.searchDate = []
				this.searchParams = {}
				this.$refs.searchDate.clear()
				this.$refs.searchKeyword.clear()
				this.isSearch = false
				await this.getOrders()
			},
			changeType(val) {
				this.type = val
				this.getTags(0, {
					type: val
				})
			},
			setNumber(value) {
				if(!value) return;
				return Number(value)
			},
			async getTags(page = 0, searchParams = { type: this.type }) {
				this.loading = true
				const tagLists = await tag.getTags(page, searchParams)

				this.loading = false
				if (tagLists.total_nums <=0 ){
					this.tableData = []
					return;
				}
				if (!this.pagination.pageTotal){
					this.pagination = {
						pageTotal: tagLists.total_nums
					}
				}
				tagLists.collection.forEach(val => {
					val['highlight'] = val['highlight'] === 0 ? '否' : '是'
					val['type'] = TagEnum[val['type']]
				})
				this.tableData = tagLists.collection
			},

			handleAdd() {
				this.redirectType = 'add'
			},
			handleEdit({ row }) {
				this.editID = row.id
				this.redirectType = 'edit'
			},
			handleDelete(val) {
				this.$confirm('此操作将永久删除该tag, 是否继续?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning',
				}).then(async () => {
					const id = [val.row.id]
					this.loading = true
					const res = await tag.delTag(id)
					this.loading = false
					if (res.error_code === 0) {
						this.getTags(this.currentPage - 1)
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
				if(val) this.getTags(this.currentPage - 1)
			},
		},
	}
</script>

<style lang="scss" scoped>
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
