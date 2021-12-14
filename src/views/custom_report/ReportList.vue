<template>
<!-- 列表页面 -->
<div class="container">
    <div class="header">
        <div class="title">
            <span>报价列表</span>
            <el-button class="add-banner-item" type="primary" plain @click="handleAdd">添加报价</el-button>
        </div>
    </div>
    <!-- 表格 -->
    <lin-table :tableColumn="tableColumn" :tableData="tableData" :operate="operate" @handleEdit="handleEdit" @handleDelete="handleDelete" @row-click="rowClick" v-loading="loading"></lin-table>
</div>
</template>

<script>
import CustomReport from '@/models/custom_report'

export default {
    name: 'BannerItemList',
    props: {
        tableData: Array,
        cLoading: Boolean,
    },
    data() {
        return {
            tableColumn: [{
                    prop: 'id',
                    label: 'id',
                    width: 150
                },
                {
                    prop: 'img',
                    label: '图片',
                    type: 'image',
                    width: 220
                },
                {
                    prop: 'name',
                    label: '名称',
                    width: 200
                },
                {
                    prop: 'key_word',
                    label: '关键字',
                    width: 200
                },
                {
                    prop: 'type',
                    label: '类型'
                },
            ],
            operate: [],
            loading: false,
            currentData: [],
        }
    },
    created() {
        this.operate = [{
                name: '编辑',
                func: 'handleEdit',
                type: 'primary'
            },
            {
                name: '删除',
                func: 'handleDelete',
                type: 'danger',
                auth: '删除轮播图元素',
            },
        ]
    },
    watch: {
        cLoading: {
            handler(val) {
                this.loading = val
            },
            immediate: true,
        },
        tableData: {
            handler() {
                this.currentData = this.tableData
            },
            deep: true,
            immediate: true,
        },
    },
    methods: {
        handleEdit(val) {
            this.$emit('handleEdit', val.row.id)
        },
        handleAdd() {
            this.$emit('handleAdd')
        },
        handleDelete(val) {
            this.$confirm('此操作将永久删除该图书, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning',
            }).then(async () => {
                this.loading = true
                const res = await banner.delItem(val.row.id)
                if (res.error_code === 0) {
                    this.$emit('handleDel')
                    this.$message({
                        type: 'success',
                        message: `${res.msg}`,
                    })
                } else {
                    this.loading = false
                }
            })
        },
        rowClick() {},
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

    // 添加bannerItem按钮
    .add-banner-item {
        margin-left: 30px;
    }
}
</style>
