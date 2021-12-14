<template>
	<div class="container">
		<div class="title">新建推荐 <span class="back" @click="back(false)"> <i class="iconfont icon-fanhui"></i> 返回 </span></div>
		<div class="wrap">
			<el-row>
				<el-col :lg="16" :md="20" :sm="24" :xs="24">
					<el-form :model="form" status-icon ref="form" v-loading="loading" :rules="rules" label-width="120px" @submit.native.prevent>
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
										v-for="(key, val) in rescObj"
										:key="key"
										:label="key"
										:value="val">
								</el-option>
							</el-select>
						</el-form-item>
						<el-form-item label="模块名" prop="module_name">
							<el-select size="medium" v-model="form.module_name" placeholder="请选择模块名">
								<el-option label="默认模块" value=""></el-option>
								<el-option
									v-for="(key, val) in moduleObj"
									:label="key"
									:key="key"
									:value="val">
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
							<upload-imgs ref="uploadEleTitle" :rules="imgRules" :maxNum="1" />
						</el-form-item>
						<el-form-item label="入口图" prop="entrance_img">
							<upload-imgs ref="uploadEleEntrance" :rules="imgRules" :maxNum="1" />
						</el-form-item>
						<el-form-item label="外部图" prop="internal_top_img">
							<upload-imgs ref="uploadEleInternal" :rules="imgRules" :maxNum="1" />
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
  import theme from '@/models/theme'
	import tpl from '@/config/theme/tpl'
  import Utils from "@/lin/utils/util";
  import UploadImgs from '@/components/base/upload-imgs'

  export default {
	  name: 'ThemeAdd',
	  components: {
		  UploadImgs
	  },
	  data() {
		  return {
			  loading: false,
			  form: {
				  title: '',
				  name: '',
				  description: '',
				  online: true,
				  tpl_name: ''
			  },
			  imgRules: {
				  minWidth: 100,
				  minHeight: 100,
				  maxSize: 5,
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
			  rules: {
				  title: [
					  { required: true, message: '请输入标题', trigger: 'blur' }
				  ]
			  },
		  }
	  },
	  created() {
		  this.tpl = tpl
	  },
	  methods: {
		  submitForm(formName) {
			  this.$refs[formName].validate(async valid => {
				  if(valid) {
					  this.loading = true
					  try {
						  // 解析上传数据
						  const titleUrl = await this.$refs.uploadEleTitle.getValue(),
								  enteanceUrl = await this.$refs.uploadEleEntrance.getValue(),
								  eleInternalUrl = await this.$refs.uploadEleInternal.getValue()
						  this.form['title_img'] = Utils.solveUploadImg(titleUrl)
						  this.form['entrance_img'] = Utils.solveUploadImg(enteanceUrl)
						  this.form['internal_top_img'] = Utils.solveUploadImg(eleInternalUrl)
						  this.solveReq()
						  const res = await theme.addTheme(this.form)
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
					  this.loading = false
				  } else {
					  this.$message.error('请填写正确的信息')
					  return false
				  }
			  })
		  },
		  solveReq() {
			  if(this.form.resc_id && this.form.module_name && !this.form.name) {
				  this.form.name = this.mark[this.form.resc_id] + '-' + this.form.module_name
			  }
		  },
		  // 重置表单
		  resetForm(formName) {
			  this.$refs[formName].resetFields()
		  },
		  back(status = true) {
			  this.$emit('close', status)
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


	}
</style>
