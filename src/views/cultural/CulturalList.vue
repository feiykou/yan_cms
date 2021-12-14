<template>
	<div>
		<!-- 列表页面 -->
		<div class="container" v-if="redirectType === 'list'">
			<div class="header"><div class="title"><span>文创列表</span>  <el-button class="add-banner-item" type="primary" plain @click="handleAdd">添加文创</el-button></div></div>
			<!-- 表格 -->
			<feiy-table
				:tableColumn="tableColumn"
				:tableData="tableData"
				:operate="operate"
				:loading="loading"
				@handleEdit="handleEdit"
				@handleDelete="handleDelete"
				@handleCellSave="handleCellSave"
				@handleRecommend="handleRecommend"></feiy-table>
		</div>

		<!-- 编辑页面 -->
		<cultural-add v-else-if="redirectType === 'add'" @close="closePage"></cultural-add>
		<cultural-edit v-else-if="redirectType === 'edit'" :editID="editID" @close="closePage"></cultural-edit>
	</div>
</template>

<script>
  import Cultural from '@/models/cultural'
  import CulturalEdit from './CulturalEdit'
  import CulturalAdd from './CulturalAdd'
  import feiyTable from '@/components/base/table/feiy-table'

  export default {
    name: 'CulturalList',
    components: {
	  CulturalEdit,
	  CulturalAdd,
	  feiyTable
    },
    data() {
      return {
        tableColumn: [
          { prop: 'id', label: 'id', width: 150 },
          { prop: 'title_img', label: '标题图', type: 'image', width: 150, noRepeat: true },
          { prop: 'title', label: '标题', width: 150 },
          { prop: 'name', label: '名称', width: 150 },
          { prop: 'description', label: '描述', width: 200 },
          { prop: 'entrance_img', label: '入口图', type: 'image', width: 150, noRepeat: true },
		  { prop: 'order', label: '排序', type: 'edit', order: 1, width: 200, edit: false, noRepeat: true },
          { prop: 'internal_top_img', label: '外部图', type: 'image', noRepeat: true },
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
		  this.operate = [
			  { name: '编辑', func: 'handleEdit', type: 'primary' },
			  {
				  name: '删除',
				  func: 'handleDelete',
				  type: 'danger',
				  auth: '删除图书',
			  },
		  ]
		  this.getCulturals()
	  },
	  methods: {
		  async getCulturals() {
			  this.loading = true
			  const themes = await Cultural.getCulturals()
			  this.loading = false
			  this.tableData = themes.total_nums===0 ? [] : themes.collection
			  console.log(themes)
		  },
		  handleAdd() {
			  this.redirectType = 'add'
		  },
		  handleEdit({ row }) {
			  this.editID = row.id
			  this.redirectType = 'edit'
		  },
		  async handleCellSave({ row, prop }) {
			  const info = this.singleUpdate({
				  id: row.id,
				  value: row[prop],
				  type: 1,
				  field: prop
			  })
			  this.loading = true
			  const res = await Cultural.updateSingle(info)
			  this.loading = false
			  if (res.error_code === 0) {
				  this.$message.success(`${res.msg}`)
				  this.getCulturals()
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
		  handleDelete(val) {
			  this.$confirm('此操作将永久删除该图书, 是否继续?', '提示', {
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
			  if(val) this.getCulturals()
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
