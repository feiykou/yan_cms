<template>
	<div>
		<!-- 列表页面 -->
		<div class="container yan-container">
			<sticky-top>
				<div class="order-header">
					<div class="header-left"><p class="title">客户列表</p></div>
					<div class="header-right" v-auth="'搜索日志'">
						<lin-search @btn="onQueryChange" :selData="selData" @sel="onSelectChange" ref="searchKeyword" placeholder="请输入客户编号/客户名/..." />
						<lin-date-picker @dateChange="handleDateChange" ref="searchDate" class="date"> </lin-date-picker>
						<el-button type="primary" plain @click="backInit" size="mini" class="back-btn">返回浏览</el-button>
					</div>
				</div>

				<el-divider></el-divider>
			</sticky-top>
			<div class="header-table-box">
				<div class="btn-filter">
					<el-button size="large" @click="onDealtBtn(1)" :type="dealtType==1?'primary': ''">待办</el-button>
					<el-button size="large" @click="onDealtBtn(2)" :type="dealtType!=1?'primary': ''">已办</el-button>
				</div>
				<el-divider></el-divider>
				<!-- 表格 -->
				<lin-table
					:tableColumn="tableColumn"
					:tableData="tableData"
					:operate="operate"
					:pagination="pagination"
					:curPage="currentPage"
					type="selection"
					@currentChange="currentChange"
					@handleEdit="handleEdit"
					@handleLog="handleLog"
					@handleProject="handleProject"
					@handleDelete="handleDelete"
					@row-click="rowClick"
					@selection-change="handleSelectionChange"
					v-loading="loading"
				></lin-table>
			</div>
		</div>

		<!-- 编辑页面 -->
		<el-dialog
			title="编辑"
			:visible.sync="editVisible"
			:before-close="handleClose"
			width="25%">
				<el-form :model="channelForm" status-icon ref="channelForm" v-loading="eLoading" :rules="rules" label-width="120px" @submit.native.prevent>
					<el-form-item label="客户编号" prop="id">
						<el-input size="medium" v-model="currenttData.id" disabled placeholder="请填写客户编号"></el-input>
					</el-form-item>
					<el-form-item label="客户名" prop="name">
						<el-input size="medium" v-model="currenttData.name" disabled placeholder="请填写客户名"></el-input>
					</el-form-item>
					<el-form-item label="客户来源" prop="channel">
						<el-select size="medium" filterable v-model="channelForm.channel" placeholder="请选择客户来源">
							<template v-for="(val, index) in channelData">
								<el-option :value="val" :key="val" :label="val">
									<span style="color: #b4b4b4; margin-right: 15px; font-size: 12px;">{{ index+1}}</span>
									<span>{{ val }}</span>
								</el-option>
							</template>
						</el-select>
					</el-form-item>
					<el-form-item class="submit">
						<el-button type="primary" @click="submitForm('channelForm')">保 存</el-button>
					</el-form-item>
				</el-form>
			</el-dialog>
	</div>
</template>

<script>
	import LinSearch from '@/components/base/search/lin-search'
    import LinDatePicker from '@/components/base/date-picker/lin-date-picker'
	import customer from '@/models/customer'
	import type from "@/models/type"
	import { CodeToText } from 'element-china-area-data'
	import CustomerAdd from "./CustomerAdd";
	import CustomerEdit from "./CustomerEdit";
	import CustomerLogList from "../customer_log/CustomerLogList";
	import CustomerProjectList from "../customer_project/ProjectList";
	import store from '@/store'
	import excel from "@/models/excel"
	import Config from '@/config'
	import Utils from '@/lin/utils/util'
	export default {
		name: 'CustomerList',
		components: {
			CustomerAdd,
			CustomerEdit,
			CustomerLogList,
			CustomerProjectList,
			LinSearch,
			LinDatePicker
		},
		data() {
			return {
				loading: false,
				eLoading: false, // 编辑加载
				dealtType: 1, // 待办
				checkselId: [], // check选中的id值
				curFollowStatus: -1, // 跟进状态 -1是全部状态
				searchKeyword: '', // 搜索内容
				searchDate: '', // 日期
				searchParams: {
				}, // 搜索筛选参数
				isSearch: false, // 是否处于搜索状态
				editVisible: false, // 是否打开编辑弹窗
				selData: [
					'客户名','责任人','客户编码','联系人','联系电话','省份'
				],
				fieldObj: {
					"channel": "channelData"
				},
				channelData: [],
				curSearchIndex: 0,
				tableColumn: [
					{ prop: 'id', label: '客户编码', width: 100 },
					// { prop: 'user_code', label: '客户编码', width: 150 },
					{ prop: 'name', label: '客户名', width: 150 },
					{ prop: 'contacts_name', label: '联系人', width: 150 },
					{ prop: 'telephone', label: '联系人电话', width: 150 },
					{ prop: 'channel', label: '客户来源', width: 150 },
					{ prop: 'address', label: '地址', width: 150 },
					{ prop: 'author', label: '责任人', width: 150 },
					{ prop: 'create_time', label: '录入时间', width: 200 }
				],
				tableData: [],
				operate: [],
				pagination: {
					pageTotal: 0
				},
				currentPage: 1,
				currenttData: {}, // 点击获取当前行数据
				channelForm: {
					channel:''
				},
				rules: {
					channel: [{ required: true, message: '请输入客户来源', trigger: 'blur' }],
				},
			}
		},
		created() {
			this.operate = [
				{ name: '编辑', func: 'handleEdit', type: 'primary', icon: 'edit' },
			]
			this.getCustomers()
			this.getTypes()
		},
		methods: {
			submitForm: Utils.debounce(function(formName){
				this.$refs[formName].validate(async valid => {
					if(valid) {
						this.eLoading = true
						try {						
							this.channelForm['id'] = this.currenttData.id
							const res = await customer.updateDealtCustomer(this.channelForm)
							if (res.error_code === 0) {
								this.$message.success(`${res.msg}`)
							}
						} catch (error) {
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
						this.eLoading = false
					}
				})
			}, 300),
			// 触发多选checkbox
			handleSelectionChange(data) {
				console.log(data);
				const checkselId = []
				data.forEach(ele => {
					checkselId.push(ele.id)
				})
				this.checkselId = checkselId
			},
			handleEdit({row}) {
				this.editVisible = true
				this.currenttData = row
				this.channelForm.channel = row.channel
			},
			onSelectChange(query) {
				this.curSearchIndex = query
			},
			onQueryChange(query) {
				// 处理带空格的情况
				this.searchKeyword = query.trim()
				this.searchParam()
				this.getCustomers()
			},
			handleDateChange(date) {
				this.searchDate = date
				this.searchParam()
				this.getCustomers()
			},
			validateIsChinese(val) {
				const pattern = new RegExp("[\u4E00-\u9FA5]+")
				return pattern.test(val)
			},
			handleDateChange(date) {
				this.searchDate = date
				this.searchParam()
				this.getCustomers()
			},
			// 清空检索
			async backInit() {
				this.searchKeyword = ''
				this.searchDate = []
				this.searchParams = {}
				this.$refs.searchDate.clear()
				this.$refs.searchKeyword.clear()
				this.isSearch = false
				await this.getCustomers()
			},
			searchParam() {
				let searchParams = {}
				if( this.searchDate && this.searchDate.length > 0) {
					searchParams['start'] = this.searchDate[0]
					searchParams['end'] = this.searchDate[1]
				}
				if( this.searchKeyword ) {
					if(this.curSearchIndex == 0) {
						searchParams['name'] = this.searchKeyword
					} 
					if(this.curSearchIndex == 1) {
						searchParams['author'] = this.searchKeyword
					} 
					// 客户编码使用id
					if(this.curSearchIndex == 2) {
						searchParams['id'] = this.searchKeyword
					}
					if(this.curSearchIndex == 3) {
						searchParams['contacts_name'] = this.searchKeyword
					} 
					if(this.curSearchIndex == 4) {
						searchParams['telephone'] = this.searchKeyword
					} 
					if(this.curSearchIndex == 5) {
						searchParams['provice'] = this.searchKeyword
					} 
				}
				if(!this.searchParams['type']){
					this.searchParams['type'] = 1
				}
				this.searchParams = searchParams
				this.isSearch = true
			},
			
			async getCustomers(page = 0) {
				this.loading = true
				let customerLists = {}
				try {
					if(!this.searchParams.type) this.searchParams.type = 1 // 1是待办
					if(store.state.user.username == 'super' || store.state.auths.includes('获取全部客户待办列表')) {
						customerLists = await customer.getAllCustomerDealts(page,this.searchParams)
					} else {
						customerLists = await customer.getCustomerDealts(page,this.searchParams)
					}
					if (customerLists.total_nums <=0 ){
						this.tableData = []
						this.loading = false
						return;
					}
					if (!this.pagination.pageTotal || this.pagination.pageTotal != customerLists.total_nums){
						this.pagination = {
							pageTotal: customerLists.total_nums
						}
					}
					customerLists.collection.forEach(val => {
						val['is_release_user'] = val['is_release_user'] === 0 ? '正常' : '已释放'
						val['status'] = val['status'] === 0 ? '未通过' : '通过'
						val["key"] = val.id
						if(val['address']) {
							if(!this.isChinese(val['address']['province'])) {
								val['address'] = CodeToText[val['address']['province']] + '-' + CodeToText[val['address']['city']]
							} else {
								val['address'] = val['address']['province'] + '-' + val['address']['city']
							}
						}
					})
					this.tableData = customerLists.collection
				} catch(error) {
					if(error.data) {
						let message = error.data.msg
						if(message && typeof message === 'object'){
							for (const key in message){
								this.$message.error(message[key])
								await setTimeout(function () {}, 1000)
							}
						}
					} else {
						this.$message.error('服务器错误')
					}
				}
				this.loading = false
			},
			// 3天未跟进
			onDealtBtn(value) {
				this.dealtType = value
				this.searchParams['type'] = value // 待办
				this.getCustomers()
			},
			isChinese(temp){
				var re=/[^\u4E00-\u9FA5]/;
				if (re.test(temp)) return false ;
				return true ;
			},
			currentChange(page) {
				if(page <= 0) return;
				page -= 1
				this.currentPage = page + 1
				this.getCustomers(page)
			},
			rowClick() {},
			closePage(val, id) {
				if(val) this.getCustomers(this.currentPage - 1)
			},
			handleClose() {
				this.editVisible = false
			},
			// 获取类型
			async getTypes() {
				let fields = []
				const fieldObj = this.fieldObj
				for(let obj in fieldObj) {
					fields.push(obj)
				}
				fields = fields.join()
				let result = await type.getTypeByField(fields)
				if(!result || result.length == 0) return;
				
				for(let obj in fieldObj) {
					const key = fieldObj[obj]
					const curData = result.find(val => {
						return val['field'] == obj
					})
					if(curData) {
						this[key] = curData['value']
					}
				}
				
			},
		},
	}
</script>

<style lang="scss" scoped>
	
	.right-wrap{
		display: flex;
		align-items: center;

	}
	// 上传
	.excel-btn{
		::v-deep .el-button{
            padding: 8px 16px;
            font-size: 15px;
        }
	}
    .upload-demo{
        display: inline-block;
        margin-left: 20px;
        ::v-deep .el-upload-list{
            display: none;
        }
    }
	.download-icon{
		display: inline-flex;
		.link{
			display: flex;
			align-items: center;
			margin-left: 15px;
			font-size: 14px;
		}
		img{
			width: 25px;
			margin-right: 2px;
		}
	}
	.container {
		&.yan-container{
			padding-bottom: 60px;
		}
		.header-table-box{
			padding: 0 30px;
		}
		.header {
			display: flex;
			justify-content: space-between;
			align-items: center;

			.title {
				flex: 1;
				display:flex;
				justify-content: space-between;
				height: 59px;
				line-height: 59px;
				color: $parent-title-color;
				font-size: 16px;
				font-weight: 500;
			}
		}

		// 添加按钮
		.add-banner-item{
			margin-right: 0;
		}

		.pagination {
			display: flex;
			justify-content: flex-end;
			margin: 20px;
		}
	}
	.back-btn{
		margin-left: 20px;
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
				white-space: nowrap;
			}
		}

	.header-right {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-left: 30px;
		.date {
				margin: 0 20px;
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

	@media screen and (max-width: 750px) {
		.order-header{
			flex-direction: column;
			// .header-right{
			// 	display: none!important;
			// }
			.header-right{
				flex-direction: column;
			}
			.container.date{
				margin: 20px 0;
				::v-deep.el-date-editor{
					max-width: 300px;
				}
			}
		}
		.back-btn.is-plain{
			margin: 15px 0;
		}
	}
</style>
