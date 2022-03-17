<template>
	<div class="container">
		<div class="title">编辑客户日志 <span class="back" @click="back(false)"> <i class="iconfont icon-fanhui"></i> 返回 </span></div>
		<div class="wrap">
			<el-row>
				<el-col :lg="16" :md="20" :sm="24" :xs="24">
					<el-form :model="form" status-icon ref="form" v-loading="loading" :rules="rules" label-width="120px" @submit.native.prevent>
						<el-form-item label="日志名" prop="name">
							<el-input size="medium" v-model="form.name" placeholder="请填写日志名"></el-input>
						</el-form-item>
						<el-form-item label="图片信息" prop="img_urls">
							<upload-imgs ref="uploadImgs" :multiple="true" :rules="imgRules" :value="responseImg(form.img_urls)" :sortable="true"  :maxNum="20" />
						</el-form-item>
						<el-form-item label="日志状态" prop="status">
							<el-select size="medium" filterable v-model="form.status" placeholder="请选择日志状态">
								<template v-for="(val, index) in statusData">
									<el-option :value="val" :key="val" :label="val">
										<span style="color: #b4b4b4; margin-right: 15px; font-size: 12px;">{{ index+1}}</span>
										<span>{{ val }}</span>
									</el-option>
								</template>
							</el-select>
						</el-form-item>
						<el-form-item label="交流方式" prop="commun_type">
							<el-select size="medium" filterable v-model="form.commun_type" placeholder="请选择交流方式">
								<template v-for="(val, index) in communtypeData">
									<el-option :value="val" :key="val" :label="val">
										<span style="color: #b4b4b4; margin-right: 15px; font-size: 12px;">{{ index+1}}</span>
										<span>{{ val }}</span>
									</el-option>
								</template>
							</el-select>
						</el-form-item>
						<el-form-item label="项目列表" prop="project_id">
							<el-select size="medium" filterable v-model="form.project_id" placeholder="请选择项目">
								<el-option :value="0" key="" label="日常维护">
									<span style="color: #b4b4b4; margin-right: 15px; font-size: 12px;">00</span>
									<span>日常维护</span>
								</el-option>
								<template v-for="(val) in projectData">
									<el-option :value="val.id" :key="val.id" :label="val.name">
										<span style="color: #b4b4b4; margin-right: 15px; font-size: 12px;">{{ val.id }}</span>
										<span>{{ val.name }}</span>
									</el-option>
								</template>
							</el-select>
						</el-form-item>
                        <el-form-item label="日志内容" prop="content">
							<editor id="tinymce" v-model="form.content" :init="editInit"></editor>
						</el-form-item>
						<el-form-item class="submit">
							<el-button type="primary" @click="submitForm('form')">保 存</el-button>
							<el-button @click="resetForm('form')">重 置</el-button>
						</el-form-item>
					</el-form>
				</el-col>
			</el-row>
		</div>
	</div>
</template>
<script>
	import tinymce from "tinymce"
	import 'tinymce/themes/silver/theme'
	import Editor from '@tinymce/tinymce-vue'
	import 'tinymce/icons/default'
	import UploadImgs from '@/components/base/upload-imgs'
	import customer_log from "@/models/customer_log"
	import Utils from "@/lin/utils/util"

	import type from "@/models/type"
	import project from '@/models/customer_project'
	export default {
		name: 'CustomerLogEdit',
		props: {
			editID: Number,
			linkCode: Number
		},
		data() {
			return {
				content: '',
				fieldObj: {
					"status": "statusData",
					"commun_type": "communtypeData"
				},
				statusData: ['初步联系','见面拜访','停滞客户','成交客户','正式报价'],
				communtypeData: ['见面拜访','微信','钉钉'],
				projectData: [],
				editInit: {
					selector: "#tinymce", //tinymce的id
					language_url: "/tinymce/langs/zh_CN.js",
					language: "zh_CN",
					height: "400px",
					skin_url: "/tinymce/skins/ui/oxide", //编辑器需要一个skin才能正常工作，所以要设置一个skin_url指向之前复制出来的skin文件
				},
				value: '',
				imgRules: {
					minWidth: 100,
					minHeight: 100,
					maxSize: 5,
				},
				loading: false,
				columnData: [], // column数据
				cateData: [],
				form: {
					name: '',
					content: ''
				},
				rules: {
					name: [{ required: true, message: '请输入客户名称', trigger: 'blur' }],
					content: [{ required: true, message: '请输入日志内容', trigger: 'blur' }]
				}
			}
		},
		components: {
			UploadImgs,
			Editor
		},
		created() {
			// 数据初始化
			this._initialize()
			this.getTypes()
			this.getProjects()
		},
		methods: {
			_initialize() {
				this.getCustomerLog()
			},
			async getCustomerLog() {
				this.loading = true
				try {
					let form = await customer_log.getCustomerLog(this.editID)
					this.form = form
					// this._handleCustomerResData(form)
				} catch(error) {
					this.back(false)
				}
				this.loading = false
			},
			submitForm(formName) {
				this.$refs[formName].validate(async valid => {
					if(valid) {
						this.loading = true
						try {
							const mainUrl = await this.$refs.uploadImgs.getValue()
							this.form['img_urls'] = Utils.solveUploadMultipleImg(mainUrl)
							const res = await customer_log.editCustomerLog(this.editID, this.form)
							if (res.error_code === 0) {
								this.$message.success(`${res.msg}`)
								// this.resetForm(formName)
								this.back()
							}
						} catch (error) {
							console.log(this.form)
							console.log(error)
							let message = error.data.msg
							if(message && typeof message === 'object'){
								for (const key in message){
									this.$message.error(message[key])
									await setTimeout(function () {}, 1000)
								}
							}
						}
						this.loading = false
					} else {
						this.$message.error('请填写正确的信息')
						return false
					}
				})
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
			async getProjects(page = 0) {
				if(this.linkCode <= 0) {
					this.$message({
						type: 'success',
						message: `客户错误`,
					})
					return
				}
				let projectLists = await project.getCustomerProjects(page, {}, this.linkCode, 0, 20)
				if (projectLists.total_nums <=0 ){
					this.projectData = []
					return;
				}
				this.projectData = projectLists.collection
			},
		
			// 重置表单
			resetForm(formName) {
				this.$refs[formName].resetFields()
			},
			back(status = true) {
				this.$emit('close', status)
			},
			// 解析响应的多图
			responseImg(imgArr) {
				if(imgArr && imgArr != 'undefined') {
					return Utils.solveReponseMultipleImg(imgArr)
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.mt20{
		margin-top: 20px;
	}
	.mt10{
		margin-top: 10px;
	}
	.multiple-select ::v-deep{
		.el-select .el-tag{
			background-color: #f4f4f5!important;
		}
		.el-select .el-tag__close.el-icon-close{
			background-color: #bac7de!important;
			&:hover{
				background-color: #909399!important;
			}
		}
	}
	.container {
		.title {
			height: 59px;
			line-height: 59px;
			color: $parent-title-color;
			font-size: 16px;
			font-weight: 500;
			text-indent: 40px;
			border-bottom: 1px solid #dae1ec;
		}

		.back {
			float: right;
			margin-right: 40px;
			cursor: pointer;
		}

		.wrap {
			padding: 20px;
		}

		.submit {
			float: left;
		}
	}

	.select-spu {
		padding-bottom: 80px;
		.title {
			text-indent: 0;
			span {
				margin-right: 20px;
			}
		}
	}

	.select-add {
		display: flex;
		align-items: center;
		margin-top: 20px;
		::v-deep .el-form-item{
			margin: 0 10px 0 0!important;
		}
		::v-deep .el-form-item__content {
			margin: 0!important;
		}
	}

	@media screen and (max-width: 750px) {
		.el-form-item--feedback{
			display: flex;
			flex-direction: column;
			margin-bottom: 0!important;
			::v-deep.el-form-item__label{
				float: none;
				width: 100%!important;
				text-align: left!important;
			}
			::v-deep.el-form-item__content{
				float: none;
				margin-left: 0!important;
			}
		}
		.upload-imgs-container{
			// display: grid;
			// grid-template-columns: repeat(2,1fr);
			// grid-column-gap: 20px;
			// ::v-deep.thumb-item{
			// 	width: 100%!important;
			// 	height: 100px!important;
			// }
		}
	}
</style>
