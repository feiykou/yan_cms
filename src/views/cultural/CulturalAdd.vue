<template>
	<div class="container">
		<div class="title">新建文创 <span class="back" @click="back(false)"> <i class="iconfont icon-fanhui"></i> 返回 </span></div>
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
						<el-form-item label="文创描述" prop="description">
							<el-input size="medium" v-model="form.description" placeholder="文创描述"></el-input>
						</el-form-item>
						<el-form-item label="分类" prop="category_id">
							<el-select size="medium" filterable v-model="form.category_id" placeholder="请选择分类">
								<template v-for="(val, index) in cateData">
									<el-option :value="val.id" :key="index" :label="val.name">
										<span style="color: #b4b4b4; margin-right: 15px; font-size: 12px;">{{ val.id }}</span>
										<span>{{ val.name }}</span>
									</el-option>
									<template v-if="val.sub">
										<template v-for="(subVal, index) in val.sub">
											<el-option :value="subVal.id" :key="index" :label="subVal.name">
												<span style="color: #b4b4b4; margin-right: 15px; font-size: 12px;">┞----{{ subVal.id }}</span>
												<span>{{ subVal.name }}</span>
											</el-option>
										</template>
									</template>	
								</template>
							</el-select>
						</el-form-item>
						<el-form-item label="模板" prop="template">
							<el-select size="medium" filterable v-model="form.template" placeholder="请选择模板">
								<el-option value="">
									<span>请选择模板</span>
								</el-option>
								<template v-for="(val, index) in template">
									<el-option :value="val.field" :key="index" :label="val.name">
										<span>{{ val.name }}</span>
									</el-option>
								</template>
							</el-select>
						</el-form-item>
						<el-form-item label="默认spu" prop="default_spu_id">
							<el-select  size="medium" filterable v-model="form.default_spu_id" placeholder="请选择spu">
								<template v-for="(val, index) in spuData">
								<el-option :value="val.id" :key="index" :label="val.title">
									<span style="color: #b4b4b4; margin-right: 15px; font-size: 12px;">{{val.id}}</span>
									<span>{{val.title}}</span>
								</el-option>
								</template>
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
  import cultural from '@/models/cultural'
  import culturalCategory from '@/models/cultural-category'

  import Utils from "@/lin/utils/util";
  import UploadImgs from '@/components/base/upload-imgs'
  import spu from "@/models/spu"

  export default {
    name: 'CulturalAdd',
		components: {
      UploadImgs
		},
    data() {
      return {
        loading: false,
		spuData: [],
		cateData: [],
		template: [{
			  field: 'horizontal',
			  name: '横排'
		  },{
			  field: 'vertical',
			  name: '竖排'
		}],
        form: {
          title: '',
          name: '',
          description: '',
          online: true,
        },
        imgRules: {
          minWidth: 100,
          minHeight: 100,
          maxSize: 5,
        },
        rules: {
          name: [
            { required: true, message: '请输入名称', trigger: 'blur' }
          ],
          title: [
            { required: true, message: '请输入标题', trigger: 'blur' }
          ]
        },
      }
    },
		created() {
    		this.getSpus()
			this.getTreeCate()
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
              const res = await cultural.addCultural(this.form)
              if (res.error_code === 0) {
                this.$message.success(`${res.msg}`)
                this.resetForm(formName)
								this.back()
              }
            } catch (error) {
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
		// 获取SPU全部数据
		async getSpus() {
			let spuData = await spu.getSpus(0, 80)
			this.spuData = spuData.collection
		},
		// 获取分类树
		async getTreeCate(id = 0, deep = 2) {
			try {
				this.cateData = await culturalCategory.getTreeCate(id, deep)
			} catch (error) {
				this.cateData = []
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
