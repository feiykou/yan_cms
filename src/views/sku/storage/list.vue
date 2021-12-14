<template>
	<div>
		<!-- 列表页面 -->
		<div class="container" v-if="redirectType === 'list'">
			<div class="header"><div class="title"><span>库存管理</span>  <el-button class="add-banner-item" type="primary" plain @click="handleAdd">添加库存</el-button></div></div>
			<el-divider></el-divider>
			<el-row class="stock-list-btn">
				<el-button class="list-btn-wrap" @click="btnSwitch(1)" :type="btnType == 1 ? 'primary': ''">库存列表</el-button>
				<el-button class="list-btn-wrap" @click="btnSwitch(2)" :type="btnType == 2 ? 'primary': ''">库存预警</el-button>
			</el-row>
			<sticky-top class="header-wrap">
				<div class="order-header">
					<div class="header-right" v-auth="'搜索日志'">
						<lin-search @btn="onCodeChange" class="search-wrap" ref="searchCode" placeholder="请输入商品编号" />
						<lin-search @btn="onTitleChange" class="search-wrap" ref="searchTitle" placeholder="请输入商品名称" />
						<lin-date-picker @dateChange="handleDateChange" ref="searchDate" class="date"> </lin-date-picker>
						<el-button type="primary" plain @click="backInit" size="mini" class="back-btn">返回浏览</el-button>
					</div>
				</div>
			</sticky-top>
			<!-- 表格 -->
			<feiy-table
				:tableColumn="tableColumn"
				:tableData="tableData"
				:operate="operate"
				:pagination="pagination"
				:curPage="currentPage"
				:operateStyle="operateStyle"
				@currentChange="currentChange"
				@handleEdit="handleEdit"
				@handleDetail="handleDetail"
				@handleStorage="handleStorage"
				@handleDelete="handleDelete"
				@row-click="rowClick"
				v-loading="loading"
			>
				<template slot-scope="slotProps">
					<el-tag :type="slotProps.tag == '上架' ? 'success': 'danger'" v-if="slotProps.tag && slotProps.prop == 'online'">{{ slotProps.tag}}</el-tag>
				</template>
			</feiy-table>
		</div>

		<!-- 编辑页面 -->
		<sku-add v-else-if="redirectType === 'add'" @close="closePage"></sku-add>
		<sku-edit v-else-if="redirectType === 'edit'" :editID="editID" @close="closePage"></sku-edit>
		<record-list v-else-if="redirectType === 'record'" :editID="editID" @close="closePage"></record-list>
		<record-add v-else-if="redirectType === 'recordAdd'" :editID="editID" @close="closePage"></record-add>
	</div>
</template>

<script>
	import LinSearch from '@/components/base/search/lin-search'
	import LinDatePicker from '@/components/base/date-picker/lin-date-picker'
	import SkuStorageModel from '@/models/sku-storage'
	import SkuAdd from "./add";
	import SkuEdit from "./edit";
	import RecordList from "./recordList";
	import RecordAdd from "./storageRecordAdd";
	import feiyTable from '@/components/base/table/feiy-table'

	export default {
		name: 'SkuList',
		components: {
			SkuAdd,
			SkuEdit,
			feiyTable,
			RecordList,
			RecordAdd,
			LinSearch,
			LinDatePicker
		},
		data() {
			return {
				loading: false,
				tableColumn: [
					{ prop: 'id', label: 'id', width: 50 },
					{ prop: 'sku_id', label: 'sku_id', width: 100 },
					{ prop: 'code', label: 'sku编码', width: 150, },
					{ prop: 'img', label: '图片', type: 'image', noRepeat: true  },
					{ prop: 'title', label: '标题', width: 200 },
					{ prop: 'price', label: '价格（元）', width: 150 },
					{ prop: 'online', label: '是否上架', width: 150, type: 'tag', noRepeat: true },
					{ prop: 'stock', label: '总库存', width: 100 },
					{ prop: 'rest_stock', label: '剩余库存', width: 100 },
					{ prop: 'create_time', label: '供货时间' },
				],
				tableData: [],
				operate: [],
				operateStyle: {
					width: 320
				},
				pagination: {
					pageTotal: 0
				},
				btnType: 1,
				showEdit: false,
				editID: 1,
				redirectType: 'list',
				currentPage: 1,
				searchParams: {},
				searchDate: [],
				searchCode: '',
				searchTitle: ''
			}
		},
		created() {
			this.operate = [
				{ name: '编辑', func: 'handleEdit', type: 'primary' },
				{ name: '查看详情', func: 'handleDetail', type: 'primary' },
				{ name: '库存变更', func: 'handleStorage', type: 'primary' },
				{
					name: '删除',
					func: 'handleDelete',
					type: 'danger',
					auth: '删除图书',
				},
			]
			this.getStorages()
		},
		methods: {
			searchParam() {
				let searchParams = this.searchParams
				if (this.searchCode) {
					searchParams['code'] = this.searchCode
				}
				if (this.searchTitle) {
					searchParams['title'] = this.searchTitle
				}
				if( this.searchDate && this.searchDate.length > 0) {
					searchParams['start'] = this.searchDate[0]
					searchParams['end'] = this.searchDate[1]
				}
				this.searchParams = searchParams
				this.isSearch = true
			},
			handleDateChange(date) {
				this.searchDate = date
				this.searchParam()
				this.getStorages()
			},
			onCodeChange(query) {
				// 处理带空格的情况
				this.searchCode = query.trim()
				this.searchParam()
				this.getStorages()
			},
			onTitleChange(query) {
				// 处理带空格的情况
				this.searchTitle = query.trim()
				this.searchParam()
				this.getStorages()
			},
			// 清空检索
			async backInit() {
				this.searchTitle = ''
				this.searchCode = ''
				this.searchDate = []
				this.searchParams = {}
				this.$refs.searchDate.clear()
				this.$refs.searchCode.clear()
				this.$refs.searchTitle.clear()
				this.isSearch = false
				await this.getStorages()
			},
			btnSwitch(val) {
				if(!val) return;
				this.btnType = val
				if(val == 2) {
					// 1:库存预警列表
					this.searchParams['type'] = 1
					this.getStorages()
				} else {
					this.searchParams['type'] = 0
					this.getStorages()
				}
			},
			async getStorages(page = 0) {
				this.loading = true
				const storageLists = await SkuStorageModel.getStorages(page, this.searchParams)
				this.loading = false
				if (storageLists.total_nums <=0 ){
					this.tableData = []
					return;
				}
				if (!this.pagination.pageTotal){
					this.pagination = {
						pageTotal: storageLists.total_nums
					}
				}
				storageLists.collection.forEach(val => {
					val['online'] = val['online'] === 0 ? '下架' : '上架'
				})
				this.tableData = storageLists.collection
			},
			currentChange(page) {
				if(page <= 0) return;
				page -= 1
				this.currentPage = page + 1
				this.getStorages(page)
			},
			handleAdd() {
				this.redirectType = 'add'
			},
			handleDetail({ row }) {
				this.redirectType = 'record'
				this.editID = row.id
			},
			handleStorage({ row }) {
				this.redirectType = 'recordAdd'
				this.editID = row.id
			},
			handleEdit({ row }) {
				this.editID = row.id
				this.redirectType = 'edit'
			},
			handleDelete(val) {
				this.$confirm('确认要删除该库存吗？', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning',
				}).then(async () => {
					const id = [val.row.id]
					this.loading = true
					const res = await SkuStorageModel.delStorage(id)
					this.loading = false
					if (res.error_code === 0) {
						this.getStorages(this.currentPage - 1)
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
				if(val) this.getStorages(this.currentPage - 1)
			},
		},
	}
</script>

<style lang="scss" scoped>
	.list-btn-wrap{

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
		.add-banner-item {
			margin-left: 30px;
		}

		.pagination {
			display: flex;
			justify-content: flex-end;
			margin: 20px;
		}
	}

	.header-wrap{
		background-color: transparent!important;
		padding-bottom: 30px;
	}
	.order-header {
		display: flex;
		align-items: center;
		margin-top: 30px;
		.header-right {
			display: flex;
			justify-content: space-between;
			align-items: center;
			.date {
				margin-right: 20px;
			}
			.search-wrap{
				margin-right: 40px;
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
</style>
