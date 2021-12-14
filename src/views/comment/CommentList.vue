<template>
	<div>
		<!-- 列表页面 -->
		<div v-if="redirectType === 'list'">
			<sticky-top>
				<div class="order-header">
					<div class="header-left"><p class="title">评论列表</p></div>
					<div class="header-right">
						<el-select size="medium" filterable v-model="curSpuId" placeholder="请选择类型" @change="changeType">
							<el-option :value="0" label="请选择spu">
								<span style="color: #b4b4b4; margin-right: 15px; font-size: 12px;">0</span>
								<span>请选择spu</span>
							</el-option>
							<el-option v-for="item in spuData" :value="item.id" :key="item.id" :label="item.title">
								<span style="color: #b4b4b4; margin-right: 15px; font-size: 12px;">{{ item.id }}</span>
								<span>{{ item.title }}</span>
							</el-option>
						</el-select>
					</div>
				</div>
				<el-divider></el-divider>
			</sticky-top>
			<div class="container">
				<feiy-table
					:tableColumn="tableColumn"
					:tableData="tableData"
					:pagination="pagination"
					:curPage="currentPage"
					:loading="loading"
					@handleRate="handleRate"
					@handleRecommend="handleRecommend"></feiy-table>
			</div>
		</div>
	</div>
</template>

<script>
	import comment from '@/models/comment'
	import spu from "../../models/spu";
	import feiyTable from '@/components/base/table/feiy-table'
	export default {
		name: 'CommentList',
		components: {
			feiyTable
		},
		data() {
			return {
				loading: false,
				redirectType: 'list',
				tableColumn: [
					{ prop: 'id', label: 'id', width: 150 },
					{ prop: 'scope', label: '用户评分', width: 300, type: 'rate', disabled: true, noRepeat: true, color: '#ddd' },
					{ prop: 'status', label: '状态', type: 'radio', width: 200, noRepeat: true },
					{ prop: 'star', label: '置顶等级', max: 3, width: 300, type: 'rate', noRepeat: true, reset: true, color: '#3963bc'},
					{ prop: 'create_time', label: '发表时间', width: 200 },
					{ prop: 'content', label: '内容' }
				],
				spuData: [],
				curSpuId: 0,
				tableData: [],
				pagination: {
					pageTotal: 0
				},
				currentPage: 1,
				type_id: 0
			}
		},
		created() {
			this.getSpus()
			this.getComments(0, this.type_id)
		},
		methods: {
			changeType(val) {
				this.type_id = Number(val)
				this.getComments(0, this.type_id)
			},
			async getSpus() {
				let spuData = await spu.getSpus(0, 80)
				this.spuData = spuData.collection
				console.log(spuData)
			},
			async getComments(page = 0, type_id = 0) {
				console.log(type_id)
				this.loading = true
				const commentLists = await comment.getCommentsByType(page, {
					type: 1,
					type_id
				})

				commentLists.collection.forEach(val => {
					val['status'] = !!val['status']
				})

				this.loading = false
				if (commentLists.total_nums <=0 ){
					this.tableData = []
					return;
				}
				if (!this.pagination.pageTotal){
					this.pagination = {
						pageTotal: commentLists.total_nums
					}
				}
				this.tableData = commentLists.collection
			},
			async handleRecommend({ val, row }) {
				this.loading = true
				val = val ? 1 : 0
				const info = this.singleUpdate({
					id: row.id,
					value: val,
					field: 'status',
					type: 1
				})
				const res = await comment.updateSingle(info)
				this.loading = false
				if (res.error_code === 0) {
					this.$message.success(`${res.msg}`)
				}
			},
			async handleRate({ val, id }) {
				this.loading = true
				const info = this.singleUpdate({
					id,
					value: val,
					field: 'star',
					type: 1
				})
				const res = await comment.updateSingle(info)
				this.loading = false
				if (res.error_code === 0) {
					this.$message.success(`${res.msg}`)
				}
			},
			handleEdit({ row }) {
				this.editID = row.id
				// this.redirectType = 'edit'
			},
			singleUpdate({id, value, field, type}) {
				let info = {}
				info.id = id
				info.value = value
				if(field) info.field = field
				if(type) info.type = type
				return info
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
				color: #5c6570;
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
