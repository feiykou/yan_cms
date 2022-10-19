<template>
	<div class="container">
		<div class="title">添加客户日志 <span class="back" @click="back(false)"> <i class="iconfont icon-fanhui"></i> 返回 </span></div>
		<div class="wrap">
			<el-row>
				<el-col :lg="16" :md="20" :sm="24" :xs="24">
					<el-form :model="form" status-icon ref="form" v-loading="loading" :rules="rules" label-width="120px" @submit.native.prevent>
						<el-form-item label="日志名" prop="name">
							<el-input size="medium" v-model="form.name" placeholder="请填写日志名"></el-input>
						</el-form-item>
						<el-form-item label="图片信息" prop="img_urls">
							<upload-imgs ref="uploadImgs" :multiple="true" :rules="imgRules" :maxNum="20" />
						</el-form-item>
						<el-form-item label="日志状态" prop="status">
							<el-select size="medium" filterable v-model="form.status" placeholder="请选择日志状态">
								<template v-for="(val, index) in statusData">
									<el-option :value="val" :key="val" :label="val" :disabled='!(displayStatus == val)?undefined:""'>
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
							<el-select size="medium" filterable :disabled="!!projectID" v-model="form.project_id" placeholder="日常维护">
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
						<el-form-item label="日志文件" v-loading="fileLoading">
							<el-upload
								class="upload-demo"
								ref="upload"
								action="/cms/file"
								:on-preview="handlePreview"
								:on-remove="handleRemove"
								:file-list="fileList"
								:auto-upload="false">
								<el-button slot="trigger" size="small" type="primary">选取文件</el-button>
								<el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
								<div slot="tip" class="el-upload__tip"></div>
								</el-upload>
						</el-form-item>
                        <el-form-item label="日志内容" prop="content">
							<!-- <editor id="tinymce" v-model="form.content" :init="editInit"></editor> -->
							 <el-input type="textarea" :rows="8" v-model="form.content"></el-input>
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
	import UploadImgs from '@/components/base/upload-imgs'
	import customer_log from "@/models/customer_log"
	import Utils from "@/lin/utils/util"

	import type from "@/models/type"
	import config from '@/config/index.js'
	import project from '@/models/customer_project'
	export default {
		name: 'CustomerLogAdd',
		props: {
			customerID: Number,
			projectID: Number,
			linkCode: Number,
			userCode: String
		},
		components: {
			UploadImgs
		},
		data() {
			return {
				fileList: [],
				content: '',
				fieldObj: {
					"commun_type": "communtypeData"
				},
				statusData: [],
				communtypeData: ['见面拜访','微信','钉钉'],
				projectData: [],
				displayStatus: config.followStatusExamine,
				value: '',
				imgRules: {
					minWidth: 100,
					minHeight: 100,
					maxSize: 5,
				},
				loading: false,
				fileLoading: false,
				columnData: [], // column数据
				cateData: [],
				form: {
					name: '',
					content: '',
					project_id: '',
				},
				rules: {
					name: [{ required: true, message: '请输入客户名称', trigger: 'blur' }],
					content: [{ required: true, message: '请输入日志内容', trigger: 'blur' }],
					status: [{ required: true, message: '请输入日志状态', trigger: 'blur' }]
				}
			}
		},
		created() {
			this.getTypes()
			this.getProjects()
			if(this.projectID) {
				this.form.project_id = this.projectID
			}
		},
		methods: {
			submitUpload() {
				const uploadList = this.$refs.upload.uploadFiles
				const data = {}
				this.fileLoading = true
				uploadList.forEach((item, index) => {
					if(item.status == "ready") {
						data[`file_${item.name}`] = item.raw
					}
				})
				this.$axios({
					method: 'post',
					url: '/cms/file',
					data,
				})
				.then(res => {
					res.forEach(item => {
						this.fileList.push({
							name: item.key,
							url: item.url,
							uid: item.uid,
							path: item.path
						})
					})
					this.fileLoading = false
				})
				.catch(err => {
					this.$message.error('上传失败')
					this.fileLoading = false
				})
				// this.$refs.upload.submit();
			},
			handleRemove(file, fileList) {
				let curFileList = fileList.filter(item => {
					if(item.uid) {
						return item.uid != file.uid
					} else {
						return item.path != file.path
					}
				})
				this.fileList = curFileList
			},
			handlePreview(file) {
				console.log(file);
			},
			submitForm: Utils.debounce(function(formName){
				this.$refs[formName].validate(async valid => {
					if(valid) {
						this.loading = true
						try {
							// 解析上传数据
							const mainUrl = await this.$refs.uploadImgs.getValue()
							this.form['img_urls'] = Utils.solveUploadMultipleImg(mainUrl)
							this.form['customer_id'] = this.customerID
							console.log(this.fileList);
							
							if(this.fileList.length > 0) {
								this.form['file_urls'] = this.fileList
							}
							if(this.userCode) this.form['user_code'] = this.userCode
							const res = await customer_log.addCustomerLog(this.form)
							if (res.error_code === 0) {
								this.$message.success(`${res.msg}`)
								this.resetForm(formName)
								this.back()
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
						this.loading = false
					} else {
						this.$message.error('请填写正确的信息')
						return false
					}
				})
			}, 300),
			setStatusTypeField() {
				if(this.projectID) {
					this.fieldObj['status'] = 'statusData'
				} else {
					this.fieldObj['follow_status'] = 'statusData'
				}
			},
			// 获取类型
			async getTypes() {
				this.setStatusTypeField()
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
		}
	}
</script>

<style lang="scss" scoped>
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
	.upload-imgs-container{
		// display: grid;
		// grid-template-columns: repeat(2,1fr);
		// grid-column-gap: 20px;
		// ::v-deep.thumb-item{
		// 	width: 100%!important;
		// 	height: 100px!important;
		// }
	}
</style>
