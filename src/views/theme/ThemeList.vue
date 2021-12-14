<template>
	<div>
		<!-- 列表页面 -->
		<div class="container" v-if="redirectType === 'list'">
			<div class="header"><div class="title"><span>推荐列表</span>  <el-button class="add-banner-item" type="primary" plain @click="handleAdd">添加推荐</el-button></div></div>
			<!-- 表格 -->
			<lin-table
				:tableColumn="tableColumn"
				:tableData="tableData"
				:operate="operate"
				@handleEdit="handleEdit"
				@handleDelete="handleDelete"
				@row-click="rowClick"
				v-loading="loading"
			></lin-table>
		</div>

		<!-- 编辑页面 -->
		<theme-add v-else-if="redirectType === 'add'" @close="closePage"></theme-add>
		<theme-edit v-else-if="redirectType === 'edit'" :editID="editID" @close="closePage"></theme-edit>
	</div>
</template>

<script>
  import theme from '@/models/theme'
  import ThemeEdit from './ThemeEdit'
  import ThemeAdd from './ThemeAdd'

  export default {
	  name: 'ThemeList',
	  components: {
		  ThemeEdit,
		  ThemeAdd
	  },
	  data() {
		  return {
			  tableColumn: [
				  { prop: 'id', label: 'id', width: 150 },
				  { prop: 'title_img', label: '标题图', type: 'image', width: 150 },
				  { prop: 'title', label: '标题', width: 150 },
				  { prop: 'name', label: '名称', width: 150 },
				  { prop: 'tpl_name', label: '模板名', width: 150 },
				  { prop: 'description', label: '描述', width: 200 },
				  { prop: 'entrance_img', label: '入口图', type: 'image', width: 150 },
				  { prop: 'internal_top_img', label: '外部图', type: 'image' },
			  ],
			  tableData: [],
			  operate: [],
			  showEdit: false,
			  editID: 1,
			  redirectType: 'list'
		  }
	  },
	  created() {
		  this.operate = [
			  { name: '编辑', func: 'handleEdit', type: 'primary' },
			  {
				  name: '删除',
				  func: 'handleDelete',
				  type: 'danger',
				  auth: '删除主题',
			  },
		  ]
		  this.getThemes()
	  },
	  methods: {
		  async getThemes() {
			  this.loading = true
			  const themes = await theme.getThemes()
			  this.loading = false
			  this.tableData = themes.total_nums===0 ? [] : themes.collection
		  },
		  handleAdd() {
			  this.redirectType = 'add'
		  },
		  handleEdit({ row }) {
			  this.editID = row.id
			  this.redirectType = 'edit'
		  },
		  handleDelete(val) {
			  this.$confirm('此操作将永久删除该主题, 是否继续?', '提示', {
				  confirmButtonText: '确定',
				  cancelButtonText: '取消',
				  type: 'warning',
			  }).then(async () => {
				  const id = [val.row.id]
				  this.loading = true
				  const res = await theme.delTheme(id)
				  this.loading = false
				  if (res.error_code === 0) {
					  this.getThemes()
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
			  if(val) this.getThemes()
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
