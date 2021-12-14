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
				:pagination="pagination"
				:curPage="currentPage"
				@currentChange="currentChange"
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
  import sku from '@/models/sku'
  import SkuAdd from "./SkuAdd";
  import SkuEdit from "./SkuEdit";
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
          { prop: 'img', label: '图片', type: 'image',width: 150 },
          { prop: 'title', label: '标题', width: 350 },
          { prop: 'spu_id', label: 'spu_id', width: 100 },
          { prop: 'discount_price', label: '折扣', width: 100 },
          { prop: 'price', label: '价格（元）', width: 150 },
          { prop: 'online', label: '是否上架', width: 150 },
          { prop: 'code', label: '编码', width: 200 },
          { prop: 'stock', label: '库存(个)', width: 150 },
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
      this.getSkus()
    },
    methods: {
      async getSkus(page = 0) {
        this.loading = true
				const skuLists = await sku.getSkus(page)
        this.loading = false
        if (skuLists.total_nums <=0 ){
          this.tableData = []
          return;
        }
        if (!this.pagination.pageTotal){
          this.pagination = {
            pageTotal: skuLists.total_nums
          }
        }
        skuLists.collection.forEach(val => {
          let category = val.category
          val['category'] = category ? category['name'] : '暂无'
          val['online'] = val['online'] === 0 ? '否' : '是'
        })
        this.tableData = skuLists.collection
      },
      currentChange(page) {
        if(page <= 0) return;
        page -= 1
				this.currentPage = page + 1
        this.getSkus(page)
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
          const res = await sku.delSku(id)
					this.loading = false
          if (res.error_code === 0) {
            this.getSkus(this.currentPage - 1)
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
        console.log(this.currentPage)
        if(val) this.getSkus(this.currentPage - 1)
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
