<template>
	<div class="container">
		<div class="title">更新推荐 <span class="back" @click="back(false)"> <i class="iconfont icon-fanhui"></i> 返回 </span></div>
		<div class="wrap">
			<el-row>
				<el-col :lg="16" :md="20" :sm="24" :xs="24">
					<el-form :model="form" status-icon ref="form" :rules="rules" v-loading="loading" label-width="120px" @submit.native.prevent>
						<el-form-item label="标题" prop="title">
							<el-input size="medium" v-model="form.title" placeholder="请填写标题"></el-input>
						</el-form-item>
						<el-form-item label="名称" prop="name">
							<el-input size="medium" v-model="form.name" placeholder="请填写名称"></el-input>
						</el-form-item>
						<el-form-item label="推荐描述" prop="description">
							<el-input size="medium" v-model="form.description" placeholder="推荐描述"></el-input>
						</el-form-item>
						<el-form-item label="推荐类型" prop="resc_id">
							<el-select size="medium" v-model="form.resc_id" placeholder="请选择推荐类型">
								<el-option label="默认推荐" value=""></el-option>
								<el-option
									v-for="(val, key) in rescObj"
									:label="val"
									:key="key"
									:value="Math.ceil(key)">
								</el-option>
							</el-select>
						</el-form-item>
						<el-form-item label="模块名" prop="module_name">
							<el-select size="medium" v-model="form.module_name" placeholder="请选择模块名">
								<el-option label="默认模块" value=""></el-option>
								<el-option
										v-for="(val, key) in moduleObj"
										:label="val"
										:key="key"
										:value="key">
								</el-option>
							</el-select>
						</el-form-item>
						<el-form-item label="是否上线" prop="online">
							<el-switch
								v-model="form.online"
								active-color="#3963bc"
							></el-switch>
						</el-form-item>
						<el-form-item label="标题图" prop="title_img">
							<upload-imgs ref="uploadEleTitle" :rules="imgRules" :value="solveShowImg(form.title_img)" :maxNum="1" />
						</el-form-item>
						<el-form-item label="入口图" prop="entrance_img">
							<upload-imgs ref="uploadEleEntrance" :rules="imgRules" :value="solveShowImg(form.entrance_img)" :maxNum="1" />
						</el-form-item>
						<el-form-item label="外部图" prop="internal_top_img">
							<upload-imgs ref="uploadEleInternal" :rules="imgRules" :value="solveShowImg(form.internal_top_img)" :maxNum="1" />
						</el-form-item>
						<el-form-item class="submit">
							<el-button type="primary" @click="submitForm('form')">保 存</el-button>
							<el-button @click="resetForm('form')">重 置</el-button>
						</el-form-item>
						<div style="clear: both;"></div>
						<div class="select-spu">
							<!-- 表格 -->
							<lin-table
								:tableColumn="tableColumn"
								:tableData="tableData"
								:operate="operate"
								@handleDelete="handleDelete"
								v-loading="spuLoading"
							></lin-table>
							<div class="select-add">
								<el-form-item prop="spu_id" class="spu-select-wrap">
									<el-select size="medium" filterable v-model="selSpu" @change="spuChange" placeholder="请选择所属模块">
										<el-option v-for="(resc, key) in rescData" :value="resc.id" :key="key" :label="resc.title || resc.name">
											<span style="color: #b4b4b4; margin-right: 15px; font-size: 12px;">{{ resc.id }}</span>
											<span>{{ resc.title || resc.name }}</span>
										</el-option>
									</el-select>
								</el-form-item>
								<el-button @click="addSpu">添加</el-button>
							</div>
						</div>
					</el-form>
				</el-col>
			</el-row>
		</div>
	</div>
</template>

<script>
  import theme from '@/models/theme'
  import Utils from "@/lin/utils/util"
  import UploadImgs from '@/components/base/upload-imgs'
  import spu from "@/models/spu"
  import cultural from "../../models/cultural";
  import culturalCategory from "../../models/cultural-category";
  import column from "../../models/customer";

  export default {
	  name: 'ThemeEdit',
	  components: {
		  UploadImgs
	  },
	  props: {
		  editID: Number
	  },
	  data() {
		  return {
			  loading: false,
			  spuLoading: false,
			  rescData: [],
			  selId: '',
			  selSpu: '',
			  defaultModule: '',
			  curModuleName: 'spu',
			  form: {
				  title: '',
				  name: '',
				  description: '',
				  online: true,
				  resc_id: 0
			  },
			  imgRules: {
				  minWidth: 100,
				  minHeight: 100,
				  maxSize: 5,
			  },
			  rules: {
				  title: [
					  { required: true, message: '请输入标题', trigger: 'blur' }
				  ]
			  },
			  moduleObj: {
				  'spu': 'spu',
				  'category': 'spu分类',
				  'cultural': '文创',
				  'cultural-category': '文创分类',
				  'column': '专栏',
			  },
			  rescObj: {
				  1: '首页推荐',
				  2: '分类推荐',
				  3: 'spu推荐',
				  4: '专栏推荐',
				  5: '文创推荐',
				  6: '文创分类推荐'
			  },
			  mark: {
				  1: 'A',
				  2: 'B',
				  3: 'C',
				  4: 'D',
				  5: 'E',
				  6: 'F'
			  },
			  tableData: [],
			  tableColumn: [
				  { prop: 'id', label: 'id', width: 100 },
				  { prop: 'img', label: '主图', type: 'image', width: 100 },
				  { prop: 'title', label: '标题'},
				  { prop: 'name', label: '名称'},
			  ],
			  operate: [],
		  }
	  },
	  created() {
		  this.operate = [
			  {
				  name: '删除',
				  func: 'handleDelete',
				  type: 'danger',
			  },
		  ]
		  this.getTheme()
	  },
	  methods: {
		  async getTheme() {
			  const id = this.editID
			  if(!id) this.back(false)
			  try {
				  this.loading = true
				  this.form = await theme.getTheme(id)
				  // 把数字转化成boolean值
				  this.form['online'] = !!this.form['online']
				  this.getThemeRescData(this.form['module_name'])
				  this.defaultModule = this.curModuleName = this.form['module_name']
				  this.getRelaSpus()
				  this.loading = false
			  } catch(error) {
				  this.back(false)
			  }
		  },
		  // 获取SPU全部数据
		  async getRescData(fn) {
			  this.spuLoading = true
			  let rescData = await fn(0, 80)
			  this.spuLoading = false
			  this.rescData = rescData.collection
		  },
		  async getSpus() {
		  	this.getRescData(spu.getSpus)
		  },
		  async getCulturals() {
			  this.getRescData(cultural.getCulturals)
		  },
		  async getColumns() {
			  this.getRescData(column.getColumns)
		  },
		  async getCulturalCates() {
			  this.spuLoading = true
			  let rescData = await culturalCategory.getSonCate(-1, 0, 80, true)
			  this.spuLoading = false
			  this.rescData = rescData.collection
		  },
		  async addSpu() {
			  if(!this.selId) {
				  this.$message.error('请选择模块')
				  return;
			  };
			  if(this.validateIsExistSpu(this.selId)) {
				  this.$message.error('已存在该模块')
				  return;
			  }
			  const that = this,
				  info = {
					  resc_id: that.selId,
					  theme_id: that.editID
				  };
			  try {
				  this.spuLoading = true
				  const res = await theme.addResc(info)
				  await this.getRelaSpus()
				  this.spuLoading = false
				  if (res.error_code === 0) {
					  this.$message.success(`${res.msg}`)
					  this.selId = ''
					  this.selSpu = ''
				  }
			  } catch (error){
				  let message = error.data.msg
				  if(message && typeof message === 'object'){
					  for (const key in message){
						  this.$message.error(message[key])
						  await setTimeout(function () {}, 1000)
					  }
				  }
			  }
		  },
		  async getThemeRescData(module_name) {
			switch (module_name) {
				case 'spu':
					this.getSpus()
					break;
				case 'cultural':
					this.getCulturals()
					break;
				case 'cultural-category':
					this.getCulturalCates()
					break;
				case 'column':
					this.getColumns()
					break;
				case 'category':
					break;
			}
		  },
		  // 获取关联SPU数据
		  async getRelaSpus() {
		  	  if(!this.editID || !this.curModuleName) return;
			  let relaSpus = []
			  try {
				  relaSpus  = await theme.allResc(this.editID, this.curModuleName)
			  }catch (e) { }
			  this.tableData = relaSpus
		  },
		  submitForm(formName) {
			  this.$refs[formName].validate(async valid => {
				  if(valid) {
					  try {
						  // 解析上传数据
						  const titleUrl = await this.$refs.uploadEleTitle.getValue(),
								  enteanceUrl = await this.$refs.uploadEleEntrance.getValue(),
								  eleInternalUrl = await this.$refs.uploadEleInternal.getValue()
						  this.form['title_img'] = Utils.solveUploadImg(titleUrl)
						  this.form['entrance_img'] = Utils.solveUploadImg(enteanceUrl)
						  this.form['internal_top_img'] = Utils.solveUploadImg(eleInternalUrl)
						  this.loading = true
						  await this.solveReq()
						  const res = await theme.updateTheme(this.editID, this.form)
						  this.loading = false
						  if (res.error_code === 0) {
							  this.$message.success(`${res.msg}`)
							  this.resetForm(formName)
							  this.back()
						  }
					  } catch (error) {
						  let message = error.data.msg
						  if(message && typeof message === 'object'){
							  for (const key in message){
								  this.$message.error(message[key])
								  await setTimeout(function () {}, 1000)
							  }
						  }
					  }
				  } else {
					  this.$message.error('请填写正确的信息')
					  return false
				  }
			  })
		  },
		  async solveReq() {
			  if(this.form.resc_id && this.form.module_name && !this.form.name) {
				  this.form.name = this.mark[this.form.resc_id] + '-' + this.form.module_name
			  }
			  // 如果模块不一样，则清除之前的
			  if(this.form.module_name != this.defaultModule) {
			  	await theme.clearResc(this.editID)
			  }
		  },
		  validateIsExistSpu(spu_id) {
			  if (!spu_id) return;
			  return this.tableData.some( (item, index) => {
				  return item.id === spu_id
			  } )
		  },
		  // 重置表单
		  resetForm(formName) {
			  this.$refs[formName].resetFields()
		  },
		  // 解析响应的图片
		  solveShowImg(val) {
			  return Utils.solveShowImg(val)
		  },
		  back(status = true) {
			  this.$emit('close', status)
		  },
		  handleDelete(val) {
			  this.$confirm('此操作将删除spu', '提示', {
				  confirmButtonText: '确定',
				  cancelButtonText: '取消',
				  type: 'warning',
			  }).then(async () => {
				  const id = [val.row.id]
				  this.spuLoading = true
				  const res = await theme.delResc(id)
				  this.spuLoading = false
				  if (res.error_code === 0) {
					  this.getRelaSpus()
					  this.$message({
						  type: 'success',
						  message: `${res.msg}`,
					  })
				  }
			  })
		  },
		  spuChange(val) {
			  if(!val) return;
			  this.selId = val
			  this.validateIsExistSpu(val)
		  },
	  },
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
			/deep/ .el-form-item{
				margin: 0 10px 0 0!important;
			}
			/deep/ .el-form-item__content {
				margin: 0!important;
			}
		}
	}
</style>
