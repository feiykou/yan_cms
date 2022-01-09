<template>
	<div class="feiy-table">
		<!-- 表格 -->
		<el-table
			class="el-table-wrap"
			:data="tableData"
			@cell-mouse-enter="cellMouseEnter"
			@cell-mouse-leave="cellMouseLeave"
			v-loading="loading"
			id="out-table'"
		>
			<!-- 开始循环 -->
			<template v-for="item in filterTableColumn">
				<!-- 正常表单列 -->
				<el-table-column
					:key="item.label"
					v-if="!item.noRepeat"
					:prop="item.prop"
					:label="item.label"
					:show-overflow-tooltip="true"
					:fixed="item.fixed ? item.fixed : false"
					:width="item.width ? item.width : ''"
				></el-table-column>
				<el-table-column
					:key="item.label"
					:label="item.label"
					:prop="item.prop"
					:width="item.width"
					v-if="item.type === 'image'"
				>
					<template slot-scope="scope">
						<el-image
							v-if="scope.row[item.prop]"
							style="width: 50px; height: 50px;"
							:src="scope.row[item.prop]"
							fit="cover"></el-image>
						<span v-else>暂无图片</span>
					</template>
				</el-table-column>
				<el-table-column
						:key="item.label"
						:label="item.label"
						:prop="item.prop"
						:width="item.width"
						v-if="item.type === 'tag'"
				>
					<template slot-scope="scope">
						<slot :tag="scope.row[item.prop]" :prop="item.prop"></slot>
					</template>
				</el-table-column>
				<!-- 单元格编辑 -->
				<el-table-column
					v-if="item.type === 'edit'"
					v-bind:key="item.label"
					:label="item.label"
					:prop="item.prop"
					:width="item.width"
					show-overflow-tooltip
				>
					<template slot-scope="scope">
						<div v-if="!scope.row.editFlag" class="table-edit table-edit-start">
							<div class="content">{{ scope.row[item.prop] }}</div>
							<div class="cell-icon" @click="handleCellEdit(scope.row, scope.$index, item.prop)" v-show="showEdit[scope.row.id]"><i class="el-icon-edit"></i></div>
						</div>
						<div v-else class="table-edit">
							<el-input v-model="scope.row[item.prop]" size="mini"></el-input>
							<div class="cell-icon-edit">
								<div class="cell-save" @click="handleCellSave(scope.row, scope.$index, item.prop)"><i class="el-icon-check"></i></div>
								<div class="cell-cancel" @click="handleCellCancel(scope.row, scope.$index, item.prop)"><i class="el-icon-close"></i></div>
							</div>
						</div>
					</template>
				</el-table-column>
				<!-- 推荐 -->
				<el-table-column
					v-if="item.type === 'radio'"
					v-bind:key="item.label"
					:label="item.label"
					:prop="item.prop"
					:width="item.width">
					<template slot-scope="scope">
						<el-switch
							v-model="scope.row[item.prop]"
							active-color="#3963bc"
							@change="handleRecommend($event, scope.row)"
						></el-switch>
					</template>
				</el-table-column>

				<!-- 推荐 -->
				<el-table-column
						v-if="item.type === 'rate'"
						:label="item.label"
						:prop="item.prop"
						:width="item.width">
					<template slot-scope="scope">
						<el-rate
							v-model="scope.row[item.prop]"
							:colors="item.color"
							:disabled="item.disabled"
							@change="rateChange(item.prop, scope.row)"
							:max="item.max"></el-rate>
						<div class="reset-rate"
							 v-if="item.reset"
							 @click="resetRate(item.prop, scope.row)"
							 style="font-size: 12px; margin-left: 10px; cursor: pointer;">重置</div>
					</template>
				</el-table-column>
			</template>
			<!-- 操作列 -->
			<el-table-column label="操作" fixed="right" :width="operateStyle.width" v-if="operate.length > 0">
				<template slot-scope="scope" v-if="operate.icon">
					<el-button
						v-for="(item, index) in operate"
						:type="item.type"
						plain
						size="mini"
						:key="index"
						@click.native.prevent.stop="buttonMethods(item.func, scope.$index, scope.row)"
					>{{ item.name }}</el-button
					>

					
				</template>
			</el-table-column>
		</el-table>

		<el-pagination
			class="pagination"
			v-if="pagination"
			background
			layout="prev, pager, next"
			:page-size="pagination.pageSize ? pagination.pageSize : 10"
			:total="pagination.pageTotal ? pagination.pageTotal : null"
			@current-change="currentChange"
		></el-pagination>
	</div>
</template>

<script>
	export default {
		name: "feiy-table",
		props: {
			tableColumn: {
				// 表头名称
				type: Array,
				default: () => [],
			},
			tableData: {
				// 表格数据
				type: Array,
				default: () => [],
			},
			operate: {
				// 自定义按键及绑定方法
				type: Array,
				default: () => [],
			},
			operateStyle: {
				type: Object,
				default: () => {
					return {
						width: 250
					}
				}
			},
			customColumn: {
				// 定制要展示的列
				type: Array,
				default: () => [],
			},
			pagination: {
				// 分页
				type: [Object, Boolean],
				default: false,
			},
			loading: {
				// 动画加载
				type: Boolean,
				default: false,
			},
		},
		data() {
			return {
				filterTableColumn: [],
				currentPage: 1, // 当前选中页
				currentData: [], // 每次切换页码的时候要给table传入不同的数据
				selectedTableData: [], // 多选选中的数据
				showEdit: {}, // 鼠标划上，显示编辑按钮
				cellIndex: -1, // 单元格索引
				// editRow: {}, // 单元格编辑相关
				tempEditVal: {}, // 单元格编辑临时值
			}
		},
		created() {

		},
		watch: {
			customColumn: {
				handler(val) {
					if (val.length > 1) {
						this.filterTableColumn = this.tableColumn.filter(v => val.indexOf(v.label) > -1)
					}
				},
				deep: true,
			},

			tableData: {
				handler() {
					// 初始化鼠标滑动事件值
					this.initMouseEvent()
					// 传了分页配置
					if (this.pagination && this.pagination.pageSize) {
						this.currentData = this.tableData.filter((item, index) => index < this.pagination.pageSize)
					} else {
						this.currentData = this.tableData
					}
				},
				deep: true,
				immediate: true,
			},
			tableColumn: {
				handler(data) {
					// 如果一开始没有传要展示的列 就默认全展示
					if (this.customColumn.length > 1) {
						this.filterTableColumn = this.tableColumn.filter(v => this.customColumn.indexOf(v.label) > -1)
					} else {
						this.filterTableColumn = this.tableColumn
					}
				},
				deep: true,
				immediate: true,
			},
			// editRow: {
			//   handler() {
			//     if (this.filterTableColumn[this.cellIndex]) {
			//       this.editRow === 0 // eslint-disable-line
			//         ? this.$set(this.filterTableColumn[this.cellIndex], 'width', 180) // eslint-disable-line
			//         : null // eslint-disable-line
			//     }
			// 	},
			//   deep: true,
			//   immediate: true,
			// }
		},
		methods: {
			// 开发者自定义的函数
			buttonMethods(func, index, row) {
				const _this = this
				const { methods } = this.$options
				console.log(methods)
				methods[func](_this, index, row)
			},
			// 行内编辑
			handleEdit(_this, index, row) {
				_this.$emit('handleEdit', { index, row })
			},
			// 自定义库存事件
			handleDetail(_this, index, row) {
				_this.$emit('handleDetail', { index, row })
			},
			handleStorage(_this, index, row) {
				_this.$emit('handleStorage', { index, row })
			},
			resetRate(prop, row) {
				row[prop] = 0
				this.rateChange(prop, row)
			},
			rateChange(prop, row) {
				const val = row[prop],
						id = row['id']
				this.$emit('handleRate', { val, id })
			},
			// 行内删除
			handleDelete(_this, index, row) {
				_this.$emit('handleDelete', { index, row })
			},
			// 子分类跳转
			handleSonCate(_this, index, row) {
				_this.$emit('handleSonCate', { index, row })
			},
			// 单元格编辑
			handleCellEdit(row, index, prop) {
				row.editFlag = true
				this.cellIndex = index
				// this.$set(this.filterTableColumn[index], 'width', 180)
				this.tempEditVal[prop] = row[prop]
				// this.editRow[prop]++
			},
			// 单元格编辑删除
			handleCellCancel(row, index, prop) {
				row.editFlag = false
				row[prop] = this.tempEditVal[prop]
				// this.editRow[prop]--
			},
			// 单元格编辑保存
			handleCellSave(row, index, prop) {
				row.editFlag = false
				this.tempEditVal[prop] = row[prop]
				// this.editRow[prop]--
				this.$emit('handleCellSave', { row, prop })
			},

			// 左右切换按钮
			handleRecommend(val, row) {
				this.$emit('handleRecommend', { val, row })
			},

			// 鼠标hover单元格触发
			cellMouseEnter(val) {
				if(!this.showEdit[val.id]){
					this.$set(this.showEdit, val.id, true)
				}
			},
			// 鼠标hover单元格离开触发
			cellMouseLeave(val) {
				if(this.showEdit[val.id]){
					this.$set(this.showEdit, val.id, false)
				}
			},
			// 初始化鼠标事件
			initMouseEvent() {
				for (let key in this.showEdit){
					if (this.showEdit[key]){
						this.$set(this.showEdit, key, false)
					}
				}
			},
			// 切换当前页
			currentChange(page) {
				const currentSelectedData = []
				this.oldVal = []
				this.currentPage = page
				this.selectedTableData = JSON.parse(sessionStorage.getItem('selectedTableData'))
				this.currentData = this.tableData.filter(
						(item, index) => index >= (this.currentPage - 1) * this.pagination.pageSize
								&& index < this.currentPage * this.pagination.pageSize,
				) // eslint-disable-line
				this.$emit('currentChange', page)
				// 已选中的数据打勾
				this.selectedTableData.forEach(item => {
					for (let i = 0; i < this.currentData.length; i++) {
						if (this.currentData[i].key === item.key) {
							// 切换页码重新计算oldVal
							this.oldVal.push(this.currentData[i])
							// 需要打勾的数据
							currentSelectedData.push(this.currentData[i])
						}
					}
				})
				this.$nextTick(() => {
					if(this.toggleSelection instanceof Function) {
						this.toggleSelection(currentSelectedData)
					}
				})
				// 切换行索引
				this.currentIndex = (this.currentPage - 1) * this.pagination.pageSize + 1
			},
		},

	}
</script>

<style lang="scss" scoped>
	/deep/ .el-table th > .cell{
		padding-left: 20px;
	}

	.table-edit {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;

		&.table-edit-start {
			justify-content: left;

			.content {
				margin-right: 20px;
			}
		}

		.content {
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}

		.cell-icon {
			cursor: pointer;
			color: #3963bc;
			font-size: 16px;
		}

		.cell-icon-edit {
			display: flex;
			margin-left: 10px;
			width: 50px;
			justify-content: space-between;

			.cell-cancel {
				cursor: pointer;
				color: #3963bc;
				font-size: 16px;
			}

			.cell-save {
				cursor: pointer;
				color: #3963bc;
				font-size: 16px;
				margin-right: 5px;
			}
		}
	}
	.pagination {
		display: flex;
		justify-content: flex-end;
		margin: 20px;
	}
</style>