<template>
  <div>
    <!-- 列表页面 -->
    <div class="container" v-if="redirectType === 'list'">
      <div class="header"><div class="title">规格名列表 <el-button class="add-banner-item" type="primary" plain @click="handleAdd">添加规格名</el-button></div>  </div>
      <!-- 表格 -->
      <lin-table
        :tableColumn="tableColumn"
        :tableData="tableData"
        :operate="operate"
				:pagination="pagination"
        @handleEdit="handleEdit"
        @handleDelete="handleDelete"
        :curPage="currentPage"
				@currentChange="currentChange"
        v-loading="loading"
      ></lin-table>
    </div>
    <spec-add v-else-if="redirectType === 'add'" @close="closePage"></spec-add>

  </div>
</template>

<script>
import spec from '@/models/spec'
import SpecAdd from "./SpecAdd";

export default {
  name: 'SpecList',
  components: {
      SpecAdd
  },
  data() {
    return {
      loading: false,
        redirectType:'list',
      tableColumn: [
        { prop: 'id', label: 'id', width: 100 },
				{ prop: 'name', label: '名称', width: 200 },
        { prop: 'description', label: '描述', width: 300 },
        { prop: 'unit', label: '单位', width: 100 },
        { prop: 'standard', label: '标准'},
      ],
      tableData: [],
      operate: [],
        currentPage:1,
      pagination: {
        pageTotal: 0
			},
      editID: 1,
    }
  },
 	created() {
    this.getSpecs()
    this.operate = [
      { name: '编辑', func: 'handleEdit', type: 'primary' },
      {
        name: '删除',
        func: 'handleDelete',
        type: 'danger',
        auth: '删除图书',
      },
    ]
  },
  methods: {
    async getSpecs(page = 0) {
			this.loading = true
			const specLists = await spec.getSpecs(page)
      this.loading = false
			if (specLists.total_nums <=0 ){
        this.tableData = []
				return;
			}
			if (!this.pagination.pageTotal){
        this.pagination = {
          pageTotal: specLists.total_nums
        }
			}
			specLists.collection.forEach(val => {
				val['standard'] = val['standard'] ? '标准' : '非标准'
			})
			this.tableData = specLists.collection
    },
    currentChange(page) {
      if(page <= 0) return;
      page -= 1
        this.currentPage = page + 1
			this.getSpecs(page)
		},
      handleAdd() {
          this.redirectType = 'add'
      },
    handleEdit(value) {
			this.$router.push(`/spec/${value.row.id}`)
    },
    handleDelete(val) {
      this.$confirm('此操作将永久删除该规格名, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      }).then(async () => {
        const id = [val.row.id]
				this.loading = true
        const res = await spec.delSpec(id)
        this.loading = false
        if (res.error_code === 0) {
          this.getSpecs()
          this.$message({
            type: 'success',
            message: `${res.msg}`,
          })
        }
      })
    },
      closePage(val) {
          this.redirectType = 'list'
          if(val) this.getSpecs(this.currentPage - 1)
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

  .pagination {
    display: flex;
    justify-content: flex-end;
    margin: 20px;
  }
}
</style>
