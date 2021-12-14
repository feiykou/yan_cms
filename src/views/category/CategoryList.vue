<template>
	<div>
		<!-- 列表页面 -->
		<div class="container" v-if="redirectType === 'list'">
			<div class="header"><div class="title"><span>分类列表</span>  <el-button class="add-banner-item" type="primary" plain @click="handleAdd">添加分类</el-button></div></div>
			<feiy-table
				:tableColumn="tableColumn"
				:tableData="tableData"
				:operate="operate"
				:loading="loading"
				@handleSonCate="handleSonCate"
				@handleEdit="handleEdit"
				@handleDelete="handleDelete"
				@handleCellSave="handleCellSave"
				@handleRecommend="handleRecommend"></feiy-table>
		</div>
		<category-add v-else-if="redirectType === 'add'" @close="closePage"></category-add>
		<category-edit v-else-if="redirectType === 'edit'" :editID="editID" @close="closePage"></category-edit>
	</div>
</template>

<script>
  import category from '@/models/category'
  import CategoryAdd from "./CategoryAdd";
  import CategoryEdit from "./CategoryEdit";
  import feiyTable from '@/components/base/table/feiy-table'


  export default {
    name: 'CategoryList',
    components: {
      CategoryAdd,
      CategoryEdit,
      feiyTable
    },
    data() {
      return {
        tableColumn: [
          { prop: 'id', label: 'id', width: 150 },
          { prop: 'img', label: '图片', type: 'image', width: 200, noRepeat: true },
          { prop: 'name', label: '名称', width: 200 },
          { prop: 'order', label: '排序', type: 'edit', order: 1, width: 200, edit: false, noRepeat: true },
          { prop: 'show', label: '状态', type: 'radio', width: 200, noRepeat: true },
          { prop: 'description', label: '描述' }
        ],
        tableData: [],
        operate: [],
        editRow: 0, // 单元格编辑相关
        redirectType: 'list', // 当前跳转类型：add,edit,''(list)
        editID: 1,
        loading: false,
      }
    },
    created() {
      this.operate = [
        { name: '子分类', func: 'handleSonCate', type: 'primary' },
        { name: '编辑', func: 'handleEdit', type: 'primary' },
        {
          name: '删除',
          func: 'handleDelete',
          type: 'danger',
          auth: '删除图书',
        },
      ]

			// 获取表格数据
      this.getCates()
    },
    methods: {
      async handleCellSave({ row, prop }) {
        const info = this.singleUpdate({
					id: row.id,
					value: row[prop],
					type: 1,
					field: prop
				})
        this.loading = true
				const res = await category.updateSingle(info)
        this.loading = false
        if (res.error_code === 0) {
          this.$message.success(`${res.msg}`)
					this.getCates()
        }
      },
			// 获取表格数据
      async getCates() {
        try {
          this.loading = true
          let cateList = await category.getSonCate()
          cateList.collection.forEach(val => {
            val['editFlag'] = false
            val['show'] = !!val['show']
					})
          this.tableData = cateList.collection
          this.loading = false
        } catch (error) {
          this.loading = false
          if (error.error_code === 80006) {
            this.tableData = []
          }
        }
      },
      // 推荐
      async handleRecommend({ val, row }) {
        this.loading = true
        val = val ? 1 : 0
        const info = this.singleUpdate({
          id: row.id,
          value: val,
          type: 1
        })
        const res = await category.updateSingle(info)
        this.loading = false
        if (res.error_code === 0) {
          this.$message.success(`${res.msg}`)
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
      handleAdd() {
        this.redirectType = 'add'
			},
      handleSonCate({ index, row }) {
        this.$router.push({
          path: `/sub_category/${row.id}/list`
        });
      },
      handleEdit({ index, row }) {
        this.redirectType = 'edit'
        this.editID = row.id
      },
      handleDelete({ index, row }) {
        this.$confirm('此操作将永久删除该图书, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        }).then(async () => {
          this.loading = true
          const id = [row.id];
          const res = await category.delCate(id)
          this.loading = false
          if (res.error_code === 0) {
            this.getCates()
            this.$message({
              type: 'success',
              message: `${res.msg}`,
            })
          }
        })
      },
      closePage(val) {
        this.redirectType = 'list'
        if(val) this.getCates()
      },
    },
		watch: {
      editRow() {
        if (this.filterTableColumn[3]) {
          this.editRow === 0 // eslint-disable-line
            ? this.$set(this.filterTableColumn[3], 'width', 180) // eslint-disable-line
            : null // eslint-disable-line
        }
        return ''
      }
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


	}
</style>
