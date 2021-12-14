<template>
	<div>
		<!-- 列表页面 -->
		<div class="container" v-if="redirectType === 'list'">
			<div class="header"><div class="title"><span>出入库记录</span> <span class="back" @click="back(false)"> <i class="iconfont icon-fanhui"></i> 返回 </span></div></div>
			<!-- 表格 -->
			<feiy-table
				:tableColumn="tableColumn"
				:tableData="tableData"
				:pagination="pagination"
				:curPage="currentPage"
				:operateStyle="operateStyle"
				@currentChange="currentChange"
				@row-click="rowClick"
				v-loading="loading"
			>
				<template slot-scope="slotProps">
					<el-tag :type="slotProps.tag == '上架' ? 'success': 'danger'" v-if="slotProps.tag && slotProps.prop == 'online'">{{ slotProps.tag}}</el-tag>
					<el-tag :type="slotProps.tag == '入库' ? 'success': 'warning'" v-if="slotProps.tag && slotProps.prop == 'status'">{{ slotProps.tag}}</el-tag>
				</template>
			</feiy-table>
		</div>
	</div>
</template>

<script>
	import SkuStorageModel from '@/models/sku-storage'
	import feiyTable from '@/components/base/table/feiy-table'

	export default {
		name: 'recordList',
		components: {
			feiyTable
		},
		props: {
			editID: Number
		},
		data() {
			return {
				loading: false,
				tableColumn: [
					{ prop: 'id', label: 'id', width: 100 },
					{ prop: 'title', label: '标题', width: 300 },
					{ prop: 'price', label: '价格（元）', width: 150 },
					{ prop: 'online', label: '是否上架', width: 150, type: 'tag', noRepeat: true },
					{ prop: 'stock', label: '总库存', width: 150 },
					{ prop: 'type', label: '渠道', width: 150 },
					{ prop: 'status', label: '入库/出库状态', width: 150, type: 'tag', noRepeat: true },
					{ prop: 'count', label: '入库/出库数量', width: 150 },
					{ prop: 'operator', label: '操作员', width: 150 },
					{ prop: 'create_time', label: '入库/出库时间' },
				],
				tableData: [],
				operateStyle: {
					width: 0
				},
				pagination: {
					pageTotal: 0
				},
				redirectType: 'list',
				currentPage: 1
			}
		},
		created() {
			this.operate = []
			this.getStorages()
		},
		methods: {
			async getStorages(page = 0) {
				this.loading = true
				const storageLists = await SkuStorageModel.getStorageRecord(page, this.editID)
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
					val = this.handleResData(val)
				})
				this.tableData = storageLists.collection
				console.log(this.tableData)
			},
			handleResData(val) {
				if(!val['storage']) return;
				val['status'] = val['status'] === 0 ? '出库' : '入库'
				val['title'] = val['storage']['title']
				val['price'] = val['storage']['price']
				val['online'] = val['status'] === 0 ? '下架' : '上架'
				val['stock'] = val['storage']['stock'] ? val['storage']['stock'] : 0
				val['type'] = this.handleType(val['type'])
				return val
			},
			handleType(type) {
				let value = ''
				switch (Number(type)) {
					case 1:
						value = '小程序'
						break
					case 2:
						value = '淘宝'
						break
					case 3:
						value = '供应商'
						break
				}
				return value
			},
			currentChange(page) {
				if(page <= 0) return;
				page -= 1
				this.currentPage = page + 1
				this.getStorages(page)
			},
			rowClick() {},
			closePage(val) {
				this.redirectType = 'list'
				if(val) this.getStorages(this.currentPage - 1)
			},
			back(status = true) {
				this.$emit('close', status)
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
				width: 100%;
				display: flex;
				justify-content: space-between;
				height: 59px;
				line-height: 59px;
				color: $parent-title-color;
				font-size: 16px;
				font-weight: 500;
				.back{
					cursor: pointer;
				}
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
