<template>
	<div class="container">
		<div class="title">更新SPU <span class="back" @click="back(false)"> <i class="iconfont icon-fanhui"></i> 返回 </span></div>
		<div class="wrap">
			<el-row>
				<el-col :lg="16" :md="20" :sm="24" :xs="24">
					<el-form :model="form" status-icon ref="form" v-loading="loading" :rules="rules" label-width="120px" @submit.native.prevent>
						<el-form-item label="标题" prop="title">
							<el-input size="medium" v-model="form.title" placeholder="请填写标题"></el-input>
						</el-form-item>
						<el-form-item label="副标题" prop="subtitle">
							<el-input size="medium" v-model="form.subtitle" placeholder="请填写副标题"></el-input>
						</el-form-item>
						<el-form-item label="文创标题" prop="extratitle">
							<el-input size="medium" v-model="form.extratitle" placeholder="请填写文创标题"></el-input>
						</el-form-item>
						<el-form-item label="文创描述" prop="extradesc">
							<el-input size="medium" v-model="form.extradesc" placeholder="请填写文创描述"></el-input>
						</el-form-item>
						<el-form-item label="价格" prop="price">
							<el-input size="medium" v-model="form.price" placeholder="请填写价格"></el-input>
						</el-form-item>
						<el-form-item label="折扣" prop="discount_price">
							<el-input size="medium" v-model="form.discount_price" placeholder="请填写折扣"></el-input>
						</el-form-item>
						<el-form-item label="淘宝口令" prop="tb_command">
							<el-input size="medium" v-model="form.tb_command" placeholder="请填写淘宝口令"></el-input>
						</el-form-item>
						<el-form-item label="分类" prop="category_id">
							<el-select size="medium" filterable v-model="form.category_id" placeholder="请选择分类">
								<el-option :value="0" label="请选择分类">
									<span>请选择分类</span>
								</el-option>
								<template v-for="val in cateData">
									<el-option :value="val.id" :label="val.name" :key="val.id">
										<span style="color: #b4b4b4; margin-right: 15px; font-size: 12px;">{{ val.id }}</span>
										<span>{{ val.name }}</span>
									</el-option>
									<template v-for="sonVal in val.sub" v-if="val.sub">
										<el-option :value="sonVal.id" :label="sonVal.name" :key="sonVal.id">
											<span style="color: #b4b4b4; margin-right: 15px; font-size: 12px;">┞----{{ sonVal.id }}</span>
											<span>{{ sonVal.name }}</span>
										</el-option>
									</template>
								</template>
							</el-select>
						</el-form-item>
						<el-form-item label="默认sku" prop="default_sku_id">
							<el-select  size="medium" filterable v-model="form.default_sku_id" placeholder="请选择默认sku">
								<el-option :value="0" label="请选择分类">
									<span>请选择分类</span>
								</el-option>
								<template v-for="val in skuData">
								<el-option :value="val.id" :label="val.title">
									<span style="color: #b4b4b4; margin-right: 15px; font-size: 12px;">{{val.id}}</span>
									<span>{{val.title}}</span>
								</el-option>
								</template>
							</el-select>
						</el-form-item>
						<el-form-item label="是否上架" prop="online">
							<el-switch
								v-model="form.online"
								active-color="#3963bc"
							></el-switch>
						</el-form-item>
						<el-form-item label="主图" prop="img">
							<upload-imgs ref="uploadEleMain" :rules="imgRules" :value="solveShowImg(form.img)" :maxNum="1" />
						</el-form-item>
						<el-form-item label="主题图" prop="for_theme_img">
							<upload-imgs ref="uploadEleTheme" :rules="imgRules" :value="solveShowImg(form.for_theme_img)" :maxNum="1" />
						</el-form-item>
						<el-form-item label="轮播图" prop="spu_img_list">
							<upload-imgs ref="uploadEleImg" :rules="imgRules" :value="responseImg(form.spu_img_list)" :sortable="true" />
						</el-form-item>
						<el-form-item label="详情图" prop="spu_detail_img_list">
							<upload-imgs ref="uploadEleImgList" :rules="imgRules" :value="responseImg(form.spu_detail_img_list)" :sortable="true" />
						</el-form-item>
						<el-form-item label="规格图" prop="spec_img">
							<upload-imgs ref="uploadEleSpec" :rules="imgRules" :value="responseImg(form.spec_img)" :sortable="true" />
						</el-form-item>
						<el-form-item label="注意事项" prop="notice_img">
							<upload-imgs ref="uploadEleNotice" :rules="imgRules" :value="responseImg(form.notice_img)" :sortable="true" />
						</el-form-item>
						<el-form-item label="标签" prop="tags">
							<tag :tags="form.tags || []" @handleConfirm="handleTagConfirm"></tag>
						</el-form-item>
						<el-form-item label="选择规格" prop="specs" class="multiple-select">
							<el-select v-model="form.specs" multiple placeholder="请选择规格" @change="specChange">
								<el-option
									v-for="item in specData"
									:key="item.value"
									:label="item.name"
									:value="item.id">
								</el-option>
							</el-select>
						</el-form-item>
						<el-form-item label="可视规格" prop="sketch_spec_id">
							<el-select
								size="medium"
								filterable
								v-model="form.sketch_spec_id"
								placeholder="请选择可视规格"
								@visible-change="visibleChange">
								<el-option label="请选择可视规格" value="0">请选择可视规格</el-option>
								<el-option
									v-for="item in selSepcData"
									:key="item.value"
									:value="item.spec_id"
									:label="item.value" >
								</el-option>
							</el-select>
						</el-form-item>
						<el-form-item label="是否测试" prop="is_test">
							<el-switch
								v-model="form.is_test"
								active-color="#3963bc"
							></el-switch>
						</el-form-item>
						<el-form-item label="是否参加活动" prop="is_active">
							<el-switch
									v-model="form.is_active"
									active-color="#3963bc"
							></el-switch>
						</el-form-item>
						<el-form-item label="描述" prop="description">
							<el-input size="medium" v-model="form.description" placeholder="请填写描述"></el-input>
						</el-form-item>
						<el-form-item label="扩展字段" prop="extend_field">
							<el-input size="medium" v-model="form.extend_field" placeholder="请填写分享位置索引"></el-input>
						</el-form-item>
						<el-form-item label="已售数量" prop="sale_num">
							<el-input size="small" v-model="form.sale_num" placeholder="请填写已售数量"></el-input>
						</el-form-item>
						<el-form-item label="总数量" prop="total_num">
							<el-input size="small" v-model="form.total_num" placeholder="请填写总数量"></el-input>
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
  import category from '@/models/category'
  import spu from "@/models/spu";
  import sku from '@/models/sku'
  import spec from "@/models/spec";
  import Utils from "@/lin/utils/util";
  import UploadImgs from '@/components/base/upload-imgs'
  import tag from "@/components/base/tag/tag";


  export default {
	  name: 'SpuAdd',
	  props: {
		  editID: Number
	  },
    components: {
      UploadImgs,
      tag
    },
    data() {
      return {
        loading: false,
        cateData: {}, // 分类数据
        specData: [], // 规格数据
		skuData: [],
        selSepcData: [], // 选择的规格数据
		solveSpec: {}, // 解析成请求的数据格式
        form: {
          title: '',
          name: '',
          description: '',
          online: true,
          specs: [],
          spu_detail_img_list: [],
          spu_img_list: [],
          for_theme_img: '',
          img: '',
          sketch_spec_id: '',
          tags: []
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
          ],
          tpl_name: [
            { required: true, message: '请输入模板名', trigger: 'blur' }
          ]
        }
      }
    },
    created() {
      // 数据初始化
      this._initialize()
    },
    methods: {
      _initialize() {
        this.getSpu()
        this.getTreeCate()
        this.getSpecs()
		this.getSkus()
      },
		async getSkus() {
			let skuData = await sku.getSkus(0, 80)
			this.skuData = skuData['collection']
		},
      // 获取spu信息
      async getSpu() {
        this.loading = true
        try {
          this.form = await spu.getSpu(this.editID)
          this._handleSpuResData(this.form)
        } catch(error) {
          this.back(false)
        }
        this.loading = false
      },
      async submitForm(formName) {
        // 解析图片需要放在验证外边，暂时不清楚原因
        await this.solveAllImgs()
        this.$refs[formName].validate(async valid => {
          if(valid) {
            this.loading = true
            try {
              let form = this.form
              form['specs'] = this.selSepcData
              form['tags'] = form['tags'].join('$')
              const res = await spu.editSpu(this.editID, form)
              if (res.error_code === 0) {
                this.$message.success(`${res.msg}`)
                this.resetForm(formName)
                this.back()
              }
            } catch (error) {
              this.loading = false
              let message = error.data.msg
              if(message && typeof message === 'object'){
                for (const key in message){
                  if(!message[key]) continue;
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
			// 处理spu响应的数据
		_handleSpuResData(form) {
			// 把数字转化成boolean值
			form['online'] = !!form['online']
			form['is_test'] = !!form['is_test']
			form['is_active'] = !!form['is_active']
			if(!form['tags']) {
				form['tags'] = []
			} else {
				if(form['tags'].indexOf('$') != -1) {
					form['tags'] = form['tags'].split('$')
				} else {
					form['tags'] = [form['tags']]
				}
			}

			if(Array.isArray(form['specs']) && form['specs'].length > 0) {
				// 以下顺序不能调换
				this.solveSpecs(form['specs'])
				form['specs'] = form['specs'].map(val => {
					return val.spec_id
				})
				// 设置可视规格值
				this.specChange(form['specs'])
			} else {
				// 如果规格为空，则选中的可视规格一定为空
				form['sketch_spec_id'] = ''
			}
			this.form = form
		},
      // 获取分类树
      async getTreeCate(id = 0, deep = 2) {
        try {
          this.cateData = await category.getTreeCate(id, deep)
        } catch (error) {
          this.cateData = {}
        }
      },
      /**
			 * 规格和可视规格处理
       * @returns {Promise<void>}
       */
      // 获取规格
      async getSpecs() {
        try {
          // getSpecs分页，则设置数量为20，全部显示
          let specData = await spec.getSpecs(0, 20)
          this.specData = specData.collection
					this.solveSpecs(this.specData)
        } catch (error) {
          this.specData = []
        }
      },
      // 检测可选规格变化
      visibleChange(status) {
        if( !status ) return;
        if( this.selSepcData.length === 0 ) {
          this.$message.error('请先选择规格')
        }
      },

      // 检测规格变化
      specChange(spec) {
        let selSepcData = spec.map(val => {
          if(this.solveSpec[val]) {
            return this.solveSpec[val]
					}
				})
				this.selSepcData = selSepcData
				this.observerSketchSpecId(selSepcData)
      },
			// 观察选中可视规格的值是否在选项中
			observerSketchSpecId(selSepcData) {
        let sketch_spec_id = this.form.sketch_spec_id
				if(!sketch_spec_id) this.form.sketch_spec_id = ''
        let result = selSepcData.some(val => {
          return val.spec_id === sketch_spec_id
				})
				if(!result) this.$set(this.form, 'sketch_spec_id', '')
			},
      // 解析spec格式 [{id: 1, value: '尺寸'}]
      solveSpecs(spec) {
        if(!Array.isArray(spec) || spec.length === 0) return;
        let json = {}
        spec.forEach(val => {
          // spec_id是数据库中存储格式
          let spec_id = val['id'] || val['spec_id']
          json[spec_id] = {
            spec_id,
            value: val['name'] || val['value']
          }
        })
        this.solveSpec = json
      },
			// 解析请求的图片
      async solveAllImgs() {
        // 解析上传数据
        const mainUrl = await this.$refs.uploadEleMain.getValue(),
          themeUrl = await this.$refs.uploadEleTheme.getValue(),
          imgUrl = await this.$refs.uploadEleImg.getValue(),
          imgListUrl = await this.$refs.uploadEleImgList.getValue(),
		  specUrl = await this.$refs.uploadEleSpec.getValue(),
		  noticeUrl = await this.$refs.uploadEleNotice.getValue()
        this.form['img'] = Utils.solveUploadImg(mainUrl)
        this.form['for_theme_img'] = Utils.solveUploadImg(themeUrl)
        this.form['spu_img_list'] = Utils.solveUploadMultipleImg(imgUrl)
        this.form['spu_detail_img_list'] = Utils.solveUploadMultipleImg(imgListUrl)
	    this.form['spec_img'] = Utils.solveUploadMultipleImg(specUrl)
		this.form['notice_img'] = Utils.solveUploadMultipleImg(noticeUrl)
      },
      // 获取tags标签的值
      handleTagConfirm(tags) {
        this.form.tags = tags
      },
      // 重置表单
      resetForm(formName) {
        this.$refs[formName].resetFields()
      },
      back(status = true) {
        this.$emit('close', status)
      },
      // 解析响应的图片
      solveShowImg(val) {
        return Utils.solveShowImg(val)
      },
			// 解析响应的多图
	  responseImg(imgArr) {
      	if(imgArr && imgArr != 'undefined') {
			return Utils.solveReponseMultipleImg(imgArr)
		}

	  }
    },
  }
</script>

<style lang="scss" scoped>
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
</style>
