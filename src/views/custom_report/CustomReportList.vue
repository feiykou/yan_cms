<template>
  <div>
    <!-- 列表页面 -->
    <div class="container" v-if="redirectType === 'list'">
      <div class="header"><div class="title">客户报价列表</div></div>
      <!-- 表格 -->
      <lin-table
        :tableColumn="tableColumn"
        :tableData="tableData"
        :operate="operate"
        :curPage="currentPage"
        :pagination="pagination"
        @currentChange="currentChange"
        @handleEdit="handleEdit"
        @handleDelete="handleDelete"
        @row-click="rowClick"
        v-loading="loading"
      ></lin-table>
    </div>
    <!-- 编辑页面 -->
		<custom-report-add v-else-if="redirectType === 'add'" @close="closePage"></custom-report-add>
		<custom-report-edit v-else-if="redirectType === 'edit'" :editID="editID" @close="closePage"></custom-report-edit>
  </div>
</template>

<script>
import CustomReport from '@/models/custom_report'
import CustomReportEdit from './CustomReportEdit'
import CustomReportAdd from './CustomReportAdd'
import store from '@/store'

export default {
  components: {
    CustomReportEdit,
    CustomReportAdd
  },
  data() {
    return {
      tableColumn: [
        { prop: 'id', label: 'id', width: 150 },
        { prop: 'name', label: '名称', width: 200 },
        { prop: 'username', label: '客户名', width: 200 },
        { prop: 'remarks', label: '备注' }
      ],
      tableData: [],
      operate: [
        { name: '编辑', func: 'handleEdit', type: 'primary' },
        { name: '日志', func: 'handleLog', type: 'success' },
        {
          name: '删除',
          func: 'handleDelete',
          type: 'danger',
          auth: '删除轮播图元素',
        },
      ],
      currentPage: 1,
      pagination: {
        pageTotal: 0
      },
      redirectType: 'list',
      editID: 1,
    }
  },
  async created() {
    this.loading = true
    await this.getLists()
    this.operate = [
      { name: '编辑', func: 'handleEdit', type: 'primary' },
      {
        name: '删除',
        func: 'handleDelete',
        type: 'danger',
        auth: '删除图书',
      },
    ]
    this.loading = false
  },
  methods: {
    async getLists(page = 0) {
				this.loading = true
				let customerLists = {}
				if(store.state.auths.includes('获取客户报表信息')) {
					customerLists = await CustomReport.getLists(page)
				} else {
					customerLists = await CustomReport.getAll(page)
        }
				if (customerLists.total_nums <=0 ){
					this.tableData = []
					this.loading = false
					return;
				}
				if (!this.pagination.pageTotal){
					this.pagination = {
						pageTotal: customerLists.total_nums
					}
				}
				this.tableData = customerLists.collection
				this.loading = false
    },
    currentChange(page) {
      if(page <= 0) return;
      page -= 1
      this.currentPage = page + 1
      this.getLists(page)
    },
    handleEdit({ row }) {
      this.editID = row.id
      console.log(this.editID)
      this.redirectType = 'edit'
      console.log(this.redirectType)
    },
    handleDelete(val) {
      this.$confirm('此操作将永久删除该图书, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      }).then(async () => {
        const res = await CustomReport.del(val.row.id)
        if (res.error_code === 0) {
          this.getLists(this.currentPage - 1)
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
			if(val) this.getLists(this.currentPage - 1)
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
