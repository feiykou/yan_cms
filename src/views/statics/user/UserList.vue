<template>
	<div class="mg-order">
		<div  v-if="redirectType === 'list'">
			<sticky-top>
				<div class="order-header">
					<div class="header-left"><p class="title">用户列表</p></div>
					<div class="header-right" v-auth="'搜索日志'">
						<lin-search @btn="onQueryChange" ref="searchKeyword" placeholder="姓名" />
						<el-button type="primary" plain @click="backInit" size="mini" class="backAll">返回浏览</el-button>
					</div>
				</div>
				<el-divider v-if="!keyword"></el-divider>
			</sticky-top>
			<div class="container">
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
					v-loading="loading"
				>
				</lin-table>
			</div>
			<div class="chart-container">
				<div class="chart-title">订单统计数据</div>
				<div class="chart-wrap">
					<columnar-analysis class="analysis"></columnar-analysis>
					<broken-analysis class="analysis"></broken-analysis>
				</div>
			</div>
		</div>
		<!-- 编辑页面 -->
		<user-edit v-else-if="redirectType === 'edit'" :editID="editID" @close="closePage"></user-edit>
	</div>
</template>

<script>
  import LinSearch from '@/components/base/search/lin-search'
  import cuser from "@/models/cuser"
  import UserEdit from "./UserEdit";
  import brokenAnalysis from '@/components/base/user/broken-analysis'
  import columnarAnalysis from '@/components/base/user/columnar-analysis'
  export default {
    name: "UserList",
    components: {
      LinSearch,
      UserEdit,
	  brokenAnalysis,
	  columnarAnalysis
    },
    data() {
      return {
        loading: false,
        tableColumn: [
          { prop: 'id', label: 'id', width: 100 },
          { prop: 'avatar_img', label: '头像', type: 'image', width: 200 },
          { prop: 'openid', label: 'openid', width: 300 },
          { prop: 'nickName', label: '用户名', width: 250 },
          { prop: 'telephone', label: '联系方式', width: 200  },
		  { prop: 'create_time', label: '注册时间' },
        ],
        tableData: [],
        operate: [],
        pagination: {
          pageTotal: 0
        },
        currentPage: 1,
        redirectType: 'list',
        editID: 1,
        keyword: null,
        searchKeyword: '',
        searchDate: [],
        searchParams: {},
        isSearch: false
      }
    },
    created() {
      this.operate = [
        { name: '查看', func: 'handleEdit', type: 'primary' },
        {
          name: '删除',
          func: 'handleDelete',
          type: 'danger',
          auth: '删除图书',
        },
      ]
      this.getCusers()
    },
    methods: {
      async getCusers(page = 0) {
        let cuserLists = []
        try {
          this.loading = true
          cuserLists = await cuser.getCusers(page, this.searchParams)
          this.loading = false
          if (!this.pagination.pageTotal){
            this.pagination = {
              pageTotal: cuserLists.total_nums
            }
          }
          cuserLists = cuserLists.collection
        } catch (e) {
          cuserLists = []
          if(this.isSearch) this.$message.error('未搜索到匹配的结果')
          this.loading = false
        }
        this.tableData = cuserLists
      },
      searchParam() {
        let searchParams = {}
        if( this.searchKeyword ) {
          searchParams['nickName'] = this.searchKeyword
        }
        this.searchParams = searchParams
        this.isSearch = true
      },
      onQueryChange(query) {
        // 处理带空格的情况
        this.searchKeyword = query.trim()
        this.searchParam()
        this.getCusers()
      },
      // 清空检索
      async backInit() {
        this.searchKeyword = ''
        this.searchParams = {}
        this.$refs.searchKeyword.clear()
        this.isSearch = false
        await this.getCusers()
      },
      currentChange(page) {
        if(page <= 0) return;
        page -= 1
        this.currentPage = page + 1
        this.getCusers(page)
      },
      handleEdit({ row }) {
        this.editID = row.id
        this.redirectType = 'edit'
      },
      handleDelete(val) {
        this.$confirm('此操作将永久删除该订单, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        }).then(async () => {
          const id = [val.row.id]
          this.loading = true
          const res = await cuser.delCuser(id)
          this.loading = false
          if (res.error_code === 0) {
            this.getCusers(this.currentPage - 1)
            this.$message({
              type: 'success',
              message: `${res.msg}`,
            })
          }
        })
      },
      closePage(val) {
        this.redirectType = 'list'
        if(val) this.getCusers()
      },
    },
  }
</script>

<style lang="scss" scoped>
	.chart-container{
		.chart-title{
			padding: 80px 0 0 50px;
			color: #3963bc;
		}
		.chart-wrap{
			display: flex;
			padding: 10px 50px 80px 0;
		}
		.analysis{
			flex: 1;
			height: 100%;
		}
	}
	.order-header {
		display: flex;
		align-items: center;
		padding: 0 20px;
		margin-bottom: -24px;

		.header-left {

			.title {
				height: 59px;
				line-height: 59px;
				color: #4c76af;
				font-size: 16px;
				font-weight: 500;
			}
		}

		.header-right {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-left: 30px;
			.backAll {
				margin: 0 30px;
			}
		}
	}
	.search {
		height: 52px;
		width: 100%;
		background: rgba(57, 99, 188, 0.1);
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin-top: 24px;

		.search-tip {
			margin-left: 40px;
			height: 52px;
			line-height: 52px;
			color: #354058;
			font-size: 14px;

			.search-keyword {
				color: $theme;
			}

			.search-num {
				color: #f4516c;
			}
		}

		.search-back {
			margin: 8px 20px;
			height: 32px;
			background: #f4516c;
			border: none;
			border-radius: 2px;
			color: #fff;
			padding: 0 13px;
			font-size: 14px;
			cursor: pointer;
		}
	}
	.container {
		padding: 0 30px;
	}

</style>