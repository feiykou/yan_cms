<template>
    <div>
        <!-- 列表页面 -->
		<div class="container" v-if="redirectType === 'list'">
			<div class="header">
                <div class="title">
                    <span>客户日志列表</span>  
                    <div class="log-action-btn" v-if="!hideLogBtn">
                        <el-button class="add-banner-item" type="primary" plain @click="handleAdd">添加客户日志</el-button>
                        <!-- <el-upload
                            class="upload-demo"
                            action=""
                            :on-change="handleChange"
                            :file-list="fileList">
                            <el-button size="small" plain type="primary">导出excel数据</el-button>
                        </el-upload>
                        <el-upload
                            class="upload-demo"
                            action="https://jsonplaceholder.typicode.com/posts/"
                            :on-change="handleChange"
                            :file-list="fileList">
                            <el-button size="small" type="primary">导入excel数据</el-button>
                        </el-upload> -->
                    </div>
                </div>
                <span class="back" @click="back(false)"> <i class="iconfont icon-fanhui"></i> 返回 </span>
            </div>
			<div class="block" v-loading="loading">
                <el-timeline>
                    <el-timeline-item v-for="(item, index) in tableData" :key="index" :timestamp="item.create_time | dataFormal" placement="top">
                        <el-card>
                            <div class="log-block">
                                <div class="log-content">
                                    <div class="log-wrap">
                                        <h4 class="tit">{{item.name}}</h4>
                                        <p class="desc" v-html="item.content"></p>
                                    </div>
                                    <div class="imgs-upload-container">
                                        <div class="img-box" @click="preview(item.id,index)" v-for="(sitem, index) in item.img_urls" :key="index">
                                            <el-image class="thumb-item-img" :src="sitem.src" fit="cover" style="width: 100%; height: 100%;"></el-image>
                                            <div class="control">
                                                <div class="preview"><i class="el-icon-view"></i></div>
                                            </div>
                                        </div>
                                    </div>
                                    <p class="author-label">{{item.author}} 提交于 {{item.create_time}}</p>
                                </div>
                                <div class="action-wrap" v-if="!hideLogBtn">
                                    <el-button
                                        type="primary"
                                        plain
                                        size="mini"
                                        @click="handleEdit(item.id)"
                                        >编辑</el-button
                                    >
                                    <el-button
                                        type="danger"
                                        plain
                                        size="mini"
                                        @click="handleDelete(item.id)"
                                        >删除</el-button
                                    >
                                </div>
                            </div>
                        </el-card>
                    </el-timeline-item>
                </el-timeline>
                <div class="result-wrap" v-if="tableData.length == 0 && !loading">暂无数据</div>
            </div>
		</div>
        <!-- 编辑页面 -->
		<customer-log-add v-else-if="redirectType === 'add'" :userCode="curUserCode" :projectID="projectID" :linkCode="linkCode" :customerID="customerID" @close="closePage"></customer-log-add>
		<customer-log-edit v-else-if="redirectType === 'edit'" :linkCode="linkCode" :projectID="projectID" :editID="editID" @close="closePage"></customer-log-edit>
    </div>
</template>

<script>
import CustomerLogAdd from "./CustomerLogAdd"
import CustomerLogEdit from "./CustomerLogEdit"
import customer_log from "@/models/customer_log"
import excel from "@/models/excel"
import customer from '@/models/customer'
import store from '@/store'
export default {
    props: {
        userCode: {
			type: String,
			default: ''
        },
        isCommonCustomer: {
            type: Boolean,
            default: false
        },
        projectID: Number,
        hideLogBtn: Boolean,
        linkCode: {
			type: Number,
			default: 0
        }
    },
    filters: {
        dataFormal: function(value){
            if(!value) return ''
            const arr = value.split(' ')
            if(arr.length >= 1) return arr[0]
            return ''
        }
    },
    data() {
        return {
            redirectType: 'list',
            loading: true,
            tableData: [],
            fileList: [],
            editID: 1,
            curUserCode: '',
            isFromCommonCustomer: false,
            entryType: 'customer',
            customerID: 0,
            pagination: {
                pageTotal: 0
            },
            urls: {},
            thumbs: {},
        }
    },
    components: {
        CustomerLogAdd,
        CustomerLogEdit
    },
    async created() {
        this.curUserCode = this.userCode
        await this.getCustomerID()
        this.getCustomerLogs()
    },
    methods: {
        async importCustomerLog(file) {
            this.loading = true
            const res = await excel.importCustomerLog(file)
            this.loading = false
            if (res.error_code === 0) {
                // this.getCustomerLogs(this.currentPage - 1)
                this.$message({
                    type: 'success',
                    message: `${res.msg}`,
                })
            }
        },
        async handleChange(file, fileList) {
            await this.importCustomerLog(file)
        },
        solveImgPreview() {
            this.urls = {}
            this.thumbs = {}
            let urls = {}
            let arr = []
            if(this.tableData.length <= 0) return
            this.tableData.forEach(ele => {
                arr = []
                if(ele.img_urls) {
                    ele.img_urls.forEach( imgItem => {
                        arr.push(imgItem.src)
                    })
                    urls['id'+ele.id] = arr
                }
            })
            this.thumbs = this.urls = urls
        },
        async getCustomerLogs(page = 0) {
            this.loading = true
            const params = {};
            if(this.curUserCode && this.curUserCode != 0){
                params['user_code'] = this.curUserCode
            }
            if(this.projectID > 0){
                params['project_id'] = this.projectID
            }
            let customerLists = {}
            console.log(params)
            try {
                // if(store.state.user.username == 'super' 
                //     || store.state.auths.includes('获取全部客户信息')) {
                //     // || this.isFromCommonCustomer
                //     // || this.isCommonCustomer
                //     customerLists = await customer_log.getAllCustomerLogs(params, page)
                // } else {
                //     customerLists = await customer_log.getCustomerLogs(params, page)
                // }
                // 通过条件判断，从客户列表和公域池进入，则通过user_code查看所有日志；
                // 通过项目id，判断根据项目id获取所有日志信息
                customerLists = await customer_log.getAllCustomerLogs(params, page)
                if (customerLists && customerLists.total_nums <=0 ){
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
                this.solveImgPreview()
                this.loading = false
            } catch (error) {
                this.tableData = []
                this.loading = false
                if(error.data) {
                    let message = error.data.msg
                    if(message && typeof message === 'object'){
                        for (const key in message){
                            this.$message.error(message[key])
                            await setTimeout(function () {}, 1000)
                        }
                    }
                } else {
                    this.$message.error(error.toString())
                }
            }
            
        },
        async getCustomerID() {
            const result = await this.getCustomer(this.linkCode)
            if(result) {
                this.customerID = result['id']
                this.curUserCode = result['user_code']
                this.isFromCommonCustomer = !!result.old_user_id
            }
        },
        async getCustomer(link_code) {
            try {
                const res = await customer.getCustomerByLinkCode(link_code)
                return {
                    id: res.id,
                    user_code: res.user_code
                }
            } catch(error) {
                return 0
            }
        },
        currentChange(page) {
            if(page <= 0) return;
            page -= 1
            this.currentPage = page + 1
            this.getCustomerLogs(page)
        },
        preview(id, index) {
            this.thumbs = this.urls['id'+id]
            this.$imagePreview({
                images: this.urls['id'+id],
                index,
            })
        },
        handleAdd() {
            if(this.customerID == 0) {
                this.$message({
                    type: 'error',
                    message: `未选中客户，无法添加日志`,
                })
                return
            }
            this.redirectType = 'add'
        },
        handleEdit(id) {
            this.redirectType = 'edit'
            console.log(id)
            this.editID = id
        },
        handleDelete(id) {
            this.$confirm('此操作将永久删除该客户日志, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning',
            }).then(async () => {             
                this.loading = true
                const res = await customer_log.delCustomerLog(id)
                this.loading = false
                if (res.error_code === 0) {
                    this.getCustomerLogs(this.currentPage - 1)
                    this.$message({
                        type: 'success',
                        message: `${res.msg}`,
                    })
                }
            })
        },
        back(status = true) {
			  this.$emit('close', status)
        },
        closePage(val) {
            this.redirectType = 'list'
            if(val) this.getCustomerLogs(this.currentPage - 1)
        },
    },
}
</script>

<style lang="scss" scoped>
    // 上传
    .upload-demo{
        display: inline-block;
        margin-left: 20px;
        ::v-deep .el-button{
            padding: 8px 16px;
            font-size: 15px;
        }
        ::v-deep .el-upload-list{
            display: none;
        }
    }
        .log-block{
            display: flex;
            justify-content: space-between;
            .log-content{
                flex: 1;
                .author-label{
                    margin-top: 18px;
                    color: #999;
                }
            }
            .action-wrap{
                flex: 0 0 140px;
            }
        }
        // 暂无数据
        .result-wrap{
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 280px;
            color: #ddd;
            font-size: 16px;
        }
    	.container {
            padding: 0 30px;
            .header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                .log-action-btn{
                    display: inline-block;
                }
                .title {
                    height: 59px;
                    line-height: 59px;
                    color: $parent-title-color;
                    font-size: 16px;
                    font-weight: 500;
                    white-space: nowrap;
                }
                .back{
                    cursor: pointer;
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
        .log-wrap{
            margin-bottom: 20px;
            .tit{
                font-size: 16px;
                font-weight: bold;
                margin-bottom: 10px;
            }
            .desc{
                line-height: 1.8;
                overflow : hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 5;
                -webkit-box-orient: vertical;
            }
        }
        .imgs-upload-container {
            display: flex;
            flex-wrap: wrap;
            .img-box {
                border: 1px dashed #d9d9d9;
                border-radius: 3px;
                -webkit-transition: all 0.1s;
                transition: all 0.1s;
                color: #666666;
                margin-right: 1em;
                margin-bottom: 1em;
                width: 200px;
                height: 150px;
                cursor: pointer;
                font-size: 12px;
                text-align: center;
                position: relative;
                display: flex;
                align-items: center;
                justify-content: center;
                overflow: hidden;
                line-height: 1.3;
                flex-direction: column;

                .el-image {
                    width: 100%;
                    height: 100%;
                }

                .control {
                    display: flex;
                    -webkit-box-align: center;
                    -ms-flex-align: center;
                    align-items: center;
                    -webkit-box-pack: center;
                    -ms-flex-pack: center;
                    justify-content: center;
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    top: 0;
                    left: 0;
                    opacity: 0;
                    background-color: rgba(0, 0, 0, 0.3);
                    -webkit-transition: all 0.3s;
                    transition: all 0.3s;
                    -webkit-transition-delay: 0.1s;
                    transition-delay: 0.1s;

                    .preview {
                    color: white;
                    font-size: 2em;
                    transition: all 0.2s;
                    }
                }

                &:hover {
                    .control {
                    opacity: 1;
                    }
                }
            }
        }
	@media screen and (max-width: 750px) {
        .container .header{
            height: auto;
            align-items: flex-start;
             .title{
                height: auto;
            }
            .log-action-btn{
                display: flex;
                align-items: center;
                margin-top: -10px;
            }
             .add-banner-item{
                height: 33px!important;
                margin-left: 0!important;
            }
            .back{
                flex: 0 0 100px;
                height: 59px;
                line-height: 55px;
            }
        }
        .el-timeline{
            margin-top: 50px;
        }
        .log-block{
            .action-wrap{
                display: inline-flex;
                flex: 0 0 70px;
                align-items: flex-end;
                flex-direction: column;
                .el-button{
                    &:nth-last-child(1){
                        margin: 10px 0 0 0;
                    }
                }
            }
        }
        .imgs-upload-container{
            display: grid;
            grid-template-columns: repeat(2,1fr);
            grid-column-gap: 10px;
            .img-box{
                width: 100%;
                height: 80px;
            }
        }
    }
</style>