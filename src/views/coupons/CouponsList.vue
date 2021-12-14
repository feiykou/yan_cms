<template>
	<div>
		<!-- 列表页面 -->
		<div class="container" v-if="redirectType === 'list'">
			<div class="header"><div class="title"><span>优惠券列表</span>  <el-button class="add-banner-item" type="primary" plain @click="handleAdd">添加优惠券</el-button></div></div>
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
		<coupons-add v-else-if="redirectType === 'add'" @close="closePage"></coupons-add>
		<coupons-edit v-else-if="redirectType === 'edit'" :editID="editID" @close="closePage"></coupons-edit>
	</div>
</template>

<script>
  import coupons from '@/models/coupons'
  import CouponsAdd from "./CouponsAdd";
  import CouponsEdit from "./CouponsEdit";
  export default {
    name: 'SpuList',
    components: {
		CouponsAdd,
		CouponsEdit
    },
    data() {
      return {
        loading: false,
        tableColumn: [
          { prop: 'id', label: 'id', width: 100 },
          { prop: 'img', label: '图片', type: 'image' },
          { prop: 'title', label: '标题', width: 200 },
          { prop: 'name', label: '名称', width: 100 },
          { prop: 'stock', label: '库存', width: 100 },
		  { prop: 'rest_stock', label: '剩余库存', width: 100 },
		  { prop: 'taken_num', label: '已领取', width: 100 },
		  { prop: 'least_cost', label: '优惠条件', width: 100 },
		  { prop: 'reduce_cost', label: '减免价格', width: 100 },
		  { prop: 'start_date', label: '开始时间', width: 150 },
		  { prop: 'end_date', label: '结束时间', width: 150 },
		  { prop: 'online', label: '是否启用' }
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
          auth: '删除图书',
        },
      ]
      this.getCoupons()
    },
    methods: {
      async getCoupons(page = 0) {
        this.loading = true
		const couponLists = await coupons.getCoupons(page)
        this.loading = false
        if (couponLists.total_nums <=0 ){
          this.tableData = []
          return;
        }
        if (!this.pagination.pageTotal){
          this.pagination = {
            pageTotal: couponLists.total_nums
          }
        }
		couponLists.collection.forEach(val => {
          val['online'] = val['online'] === 0 ? '否' : '是'
        })
        this.tableData = couponLists.collection
      },
      currentChange(page) {
        if(page <= 0) return;
        page -= 1
		this.currentPage = page + 1
        this.getCoupons(page)
      },
      handleAdd() {
        this.redirectType = 'add'
	  },
      handleEdit({ row }) {
        this.editID = row.id
        this.redirectType = 'edit'
      },
      handleDelete(val) {
        this.$confirm('此操作将永久删除该优惠券, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        }).then(async () => {
          const id = [val.row.id]
		  this.loading = true
          const res = await coupons.delCoupon(id)
		  this.loading = false
          if (res.error_code === 0) {
            this.getCoupons(this.currentPage - 1)
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
        if(val) this.getCoupons(this.currentPage - 1)
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
