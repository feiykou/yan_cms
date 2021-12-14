<template>
	<div>
		<!-- 列表页面 -->
		<div class="container" v-if="redirectType === 'list'">
			<div class="header"><div class="title"><span>SKU列表</span>  <el-button class="add-banner-item" type="primary" plain @click="handleAdd">添加SKU</el-button></div></div>
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
		<sku-add v-else-if="redirectType === 'add'" @close="closePage"></sku-add>
		<sku-edit v-else-if="redirectType === 'edit'" :editID="editID" @close="closePage"></sku-edit>
	</div>
</template>

<script>
  import prize from '@/models/prize'
  import SkuAdd from "./SpuAdd";
  import SkuEdit from "./SpuEdit";
  export default {
    name: 'SkuList',
    components: {
      SkuAdd,
      SkuEdit
    },
    data() {
      return {
        loading: false,
        tableColumn: [
          { prop: 'id', label: 'id', width: 100 },
          { prop: 'img', label: '图片',width: 400 },
          { prop: 'title', label: '标题', width: 150 },
          { prop: 'label', label: '标签', width: 100 },
          { prop: 'nullNum', label: '投票数', width: 100 },
		  { prop: 'mark', label: '标记', width: 100 },
          { prop: 'description', label: '描述'},
        ],
        tableData: [],
        operate: [],
        pagination: {
          pageTotal: 0
        },
        showEdit: false,
        editID: 1,
        redirectType: 'list',
        currentPage: 1
      }
    },
    created() {
      this.operate = [
        { name: '编辑', func: 'handleEdit', type: 'primary' },
        {
          name: '删除',
          func: 'handleDelete',
          type: 'danger',
          auth: '删除sku',
        },
      ]
      this.getSpus()
    },
    methods: {
      async getSpus() {
        this.loading = true
		const skuLists = await prize.getSpus()
        this.loading = false
        this.tableData = skuLists['data']
      },
      handleAdd() {
        this.redirectType = 'add'
			},
      handleEdit({ row }) {
        this.editID = row.id
        this.redirectType = 'edit'
      },
      handleDelete(val) {
        this.$confirm('此操作将永久删除该sku, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        }).then(async () => {
          const id = [val.row.id]
					this.loading = true
			console.log(val.row)
          const res = await prize.delSpu(id)
					this.loading = false
          if (res.error_code === 0) {
            this.getSpus()
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
        if(val) this.getSpus()
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
