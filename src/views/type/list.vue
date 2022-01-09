<template>
  <div>
    <!-- 列表页面 -->
    <div class="container" v-if="redirectType === 'list'">
      <div class="header"><div class="title">类型选项列表 <el-button class="add-banner-item" type="primary" plain @click="handleAdd">添加类型</el-button></div>  </div>
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
    <type-add v-else-if="redirectType === 'add'" @close="closePage"></type-add>
    <type-edit v-else-if="redirectType === 'edit'" :editID="editID" @close="closePage"></type-edit>
  </div>
</template>

<script>
import type from '@/models/type'
import TypeAdd from "./add";
import TypeEdit from "./edit";

export default {
  name: 'TypeList',
  components: {
      TypeAdd,
      TypeEdit
  },
  data() {
    return {
      loading: false,
      redirectType:'list',
      tableColumn: [
        { prop: 'id', label: 'id', width: 100 },
				{ prop: 'name', label: '名称', width: 200 },
        { prop: 'field', label: '字段', width: 300 },
        { prop: 'value', label: '类型值' },
      ],
      tableData: [],
      operate: [],
      pagination: {
        pageTotal: 0
      },
      currentPage:1,
      editID: 0,
    }
  },
 	created() {
    this.getTypes()
    this.operate = [
      { name: '编辑', func: 'handleEdit', type: 'primary' },
      {
        name: '删除',
        func: 'handleDelete',
        type: 'danger',
        auth: '删除类型',
      },
    ]
  },
  methods: {
    async getTypes(page = 0) {
			this.loading = true
			const typeLists = await type.getTypes(page)
      this.loading = false
			if (typeLists.total_nums <=0 ){
        this.tableData = []
        this.loading = false
        return;
			}
      if (!this.pagination.pageTotal){
        this.pagination = {
          pageTotal: typeLists.total_nums
        }
      }
      typeLists.collection.forEach(ele => {
        ele.value = ele.value.join()
      })
			this.tableData = typeLists.collection
    },
    currentChange(page) {
      if(page <= 0) return;
      page -= 1
      this.currentPage = page + 1
			this.getTypes(page)
		},
    handleAdd() {
      this.redirectType = 'add'
    },
    handleEdit({row}) {
      this.editID = row.id
			this.redirectType = 'edit'
    },
    handleDelete(val) {
      this.$confirm('此操作将永久删除该类型, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      }).then(async () => {
        const id = [val.row.id]
				this.loading = true
        const res = await type.delType(id)
        this.loading = false
        if (res.error_code === 0) {
          this.getTypes(this.currentPage - 1)
          this.$message({
            type: 'success',
            message: `${res.msg}`,
          })
        }
      })
    },
    closePage(val) {
        this.redirectType = 'list'
        if(val) this.getTypes(this.currentPage - 1)
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
