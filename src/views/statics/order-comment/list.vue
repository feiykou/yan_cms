<template>
    <!-- 表格 -->
    <div>
        <feiy-table
                :tableColumn="tableColumn"
                :tableData="tableData"
                v-loading="loading"
        >
        </feiy-table>
    </div>
</template>

<script>
  import feiyTable from '@/components/base/table/feiy-table'
  import status from "@/config/order/orderRefundEnum"
  import comment from "../../../models/comment";
  export default {
    name: "comment-list",
    props: {
      order_id: Number
    },
    components: {
      feiyTable
    },
    data() {
      return {
        loading: false,
        tableData: [],
        tableColumn: [
            { prop: 'sku_id', label: 'sku_id', width: 100 },
            { prop: 'scope', label: '用户评分', width: 200, type: 'rate', disabled: true, noRepeat: true, color: '#ddd' },
            { prop: 'create_time', label: '发表时间', width: 260 },
            { prop: 'content', label: '内容' }
        ],
      }
    },
    created() {
        this.getComments(this.order_id)
    },
    methods: {
        async getComments(type_id = 0, page = 0) {
            this.loading = true
            const commentLists = await comment.getCommentsByType(page, {
                type: 2, // 2:order  1:spu
                type_id
            }, 50)

            commentLists.collection.forEach(val => {
                val['status'] = !!val['status']
            })

            this.loading = false
            if (commentLists.total_nums <=0 ){
                this.tableData = []
                return;
            }
            this.tableData = commentLists.collection
            console.log(commentLists.collection)
        },
        closePage(val) {
            this.redirectType = 'list'
            if(val) this.getRefunds()
        },
    }
  }
</script>

<style scoped>

</style>