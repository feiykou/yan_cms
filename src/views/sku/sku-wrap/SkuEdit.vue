<template>
	<div class="container">
		<div class="title">更新SKU <span class="back" @click="back(false)"> <i class="iconfont icon-fanhui"></i> 返回 </span></div>
		<div class="wrap">
			<el-row>
				<el-col :lg="16" :md="20" :sm="24" :xs="24">
					<el-form :model="form" status-icon ref="form" v-loading="loading" :rules="rules" label-width="120px" @submit.native.prevent>
						<el-form-item label="标题" prop="title">
							<el-input size="medium" v-model="form.title" placeholder="请填写标题"></el-input>
						</el-form-item>
						<el-form-item label="价格" prop="price">
							<el-input-number v-model="form.price" @change="handlePriceChange" :precision="2" :step="0.1" :min="0.00" label="描述文字"></el-input-number>
						</el-form-item>
						<el-form-item label="折扣" prop="discount_price" class="discount_price">
							<el-radio-group v-model="discountRadio">
								<el-radio :label="1">无折扣</el-radio>
								<el-radio :label="2">折扣价</el-radio>
								<el-radio :label="3">打折</el-radio>
							</el-radio-group>
							<el-input size="medium" class="discount-input" @input="handleDiscountInput" :disabled="discountRadio === 1" v-model="discountPrice" placeholder="请输入折扣值"></el-input>
							<el-input size="medium" disabled v-model="form.discount_price" placeholder="最终折扣值"></el-input>
						</el-form-item>
						<el-form-item label="库存" prop="stock">
							<el-input-number v-model="form.stock" :min="0" label="库存"></el-input-number>
						</el-form-item>
						<el-form-item label="分类" prop="category_id">
							<el-select size="medium" filterable v-model="form.category_id" placeholder="请选择分类">
								<el-option :value="0" label="请选择分类">
									<span>请选择分类</span>
								</el-option>
								<template v-for="val in cateData">
									<el-option :value="val.id" :label="val.name" disabled>
										<span style="color: #b4b4b4; margin-right: 15px; font-size: 12px;">{{ val.id }}</span>
										<span>{{ val.name }}</span>
									</el-option>
									<template v-for="sonVal in val.sub" v-if="val.sub">
										<el-option :value="sonVal.id" :label="sonVal.name">
											<span style="color: #b4b4b4; margin-right: 15px; font-size: 12px;">┞----{{ sonVal.id }}</span>
											<span>{{ sonVal.name }}</span>
										</el-option>
									</template>
								</template>
							</el-select>
						</el-form-item>
						<el-form-item label="SPU" prop="category_id">
							<el-select size="medium" filterable v-model="form.spu_id" @change="spuChange" placeholder="请选择所属SPU">
								<el-option v-for="spu in spuData" :value="spu.id" :label="spu.title">
									<span style="color: #b4b4b4; margin-right: 15px; font-size: 12px;">{{ spu.id }}</span>
									<span>{{ spu.title }}</span>
								</el-option>
							</el-select>
						</el-form-item>
						<el-form-item label="是否上架" prop="online">
							<el-switch
								v-model="form.online"
								active-color="#3963bc"
							></el-switch>
						</el-form-item>
						<el-form-item label="主图" prop="img">
							<upload-imgs ref="uploadEleMain" :rules="imgRules" :maxNum="1" :value="solveShowImg(form.img)" />
						</el-form-item>
						<el-form-item :label="spec.name" prop="spec" v-for="(spec, index) in spuSpecData">
							<el-select
								size="medium"
								filterable
								v-model="selSpecValue[spec.id]"
								:placeholder="`请选择${spec.name}值`">
								<el-option
									v-for="item in spec.items"
									:key="item.name"
									:value="item.id"
									:label="item.name" >
									<span style="color: #b4b4b4; margin-right: 15px; font-size: 12px;">{{ item.id }}</span>
									<span>{{ item.name }}</span>
								</el-option>
							</el-select>
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
  import sku from "@/models/sku"
  import spu from "@/models/spu"
  import spec from "@/models/spec";

  import Utils from "@/lin/utils/util";
  import UploadImgs from '@/components/base/upload-imgs'
  import tag from "@/components/base/tag/tag";

  export default {
    name: 'SkuAdd',
    components: {
      UploadImgs,
      tag
    },
		props: {
      editID: Number
		},
    data() {
      return {
        loading: false,
        cateData: {}, // 分类数据
        spuData: [], // spu数据
        spuSpecData: [], // spu选中的spec数据
        discountRadio: 1,
        discountPrice: '',
        specData: [], // 规格数据
        selSpecValue: {}, // 选中的规格值
        form: {
          title: '',
          description: '',
          online: true,
          specs: [],
          img: '',
          price: 0.00,
          stock: 0,
          discount_price: 0
        },
        imgRules: {
          minWidth: 100,
          minHeight: 100,
          maxSize: 5,
        },
        rules: {
          // title: [
          //   { required: true, message: '请输入标题', trigger: 'blur' }
          // ],
        }
      }
    },
    created() {
      // 数据初始化
      this._initialize()
    },
    methods: {
      _initialize() {
        this.getSku()
        this.getTreeCate()
        this.getSpus()
      },
      // 获取分类树
      async getTreeCate(id = 0, deep = 2) {
        try {
          this.cateData = await category.getTreeCate(id, deep)
        } catch (error) {
          this.cateData = {}
        }
      },
      // 获取spu信息
      async getSku() {
        this.loading = true
        try {
          let form = await sku.getSku(this.editID)
          this._handleSkuResData(form)
        } catch(error) {
          this.back(false)
        }
        this.loading = false
      },
      // 获取SPU全部数据
      async getSpus() {
        let spuData = await spu.getSpus(0, 80)
        this.spuData = spuData.collection
        console.log(spuData)
      },
      // 获取选中spu信息，包括选中规格和规格值
      async getSpuSpec(id) {
        let specData = []
        try {
          specData = await spu.getSpuSpec(id)
        } catch (error) {}
        this.sloveResSpec(specData)
      },
      // spu值改变事件
      async spuChange(val) {
        this.getSpuSpec(val)
      },
	  _handleSkuResData(form) {
		// 把数字转化成boolean值
		form['online'] = !!form['online']
		if(form['spu_id']) {
			this.getSpuSpec(form['spu_id'])
		}
		if(form['specs']) {
			let selSpecValue = {}
			form['specs'].forEach(val => {
				selSpecValue[val['key_id']] = val['value_id']
			})
			this.selSpecValue = selSpecValue
		}
		this.form = form
	  },
      // 解析选中SPU的数据格式
      sloveResSpec(specData) {
        if(!specData || specData.length === 0 || specData.specs.length === 0) {
          this.spuSpecData = []
          return;
        }
        let specsData = specData.specs,
          json = {},
          arr = []
        specsData.forEach(val => {
          json.id = val.id
          json.name = val.name
          json.items = val.items
          arr.push(json)
          json = {}
        })
        this.spuSpecData = arr
      },
      // 价格变化事件
      handlePriceChange(val) {
        if(this.discountPrice) {
          let discountPrice = this.discountPrice
          this.getDiscountPrice(parseFloat(discountPrice))
        }
      },
      // 监听输入折扣事件
      handleDiscountInput(val) {
        let inputPrice = parseFloat(val)
        if(Number.isNaN(inputPrice)) {
          this.discountPrice = ''
          return;
        }
        this.discountPrice = val
        this.getDiscountPrice(inputPrice)
      },
      // 获取折扣后的价格
      getDiscountPrice(val) {
        const type = this.discountRadio
        let discount_price = 0
        switch (type) {
          case 1:
            break;
          case 2:
            discount_price = val
            break;
          case 3:
            discount_price = parseFloat((this.form.price * 100 * val * 100) / (100*100))
            break;
        }
        this.form.discount_price = discount_price
      },
      submitForm(formName) {
        this.$refs[formName].validate(async valid => {
          if(valid) {
            this.loading = true
            try {
              await this.solveAllImgs()
              this.form['specs'] = this.solveReqSpec()
              const res = await sku.editSku(this.editID, this.form)
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
      async solveAllImgs() {
        // 解析上传数据
        const mainUrl = await this.$refs.uploadEleMain.getValue()
        this.form['img'] = Utils.solveUploadImg(mainUrl)
      },
      solveReqSpec() {
        let spuSpecData = this.spuSpecData,
          sleSpecValue = this.selSpecValue
		if (spuSpecData.length === 0) return []
        if(spuSpecData.length > 0 && spuSpecData.length != Object.values(sleSpecValue).length) this.$message.error('请确认规格是否全部选择')
        let json = {},
          arr = []
        for (let key in sleSpecValue) {
          let curVal = spuSpecData.find(val => {
            return val.id === Number(key)
          })
          // 规格
          json.key_id = curVal.id
          json.key = curVal.name
          if(curVal.items.length > 0) {
            let itemVal = curVal.items.find(item => {
              return item.id === sleSpecValue[key]
            })
            // 规格值
            json.value_id = itemVal.id
            json.value = itemVal.name
          }
          arr.push(json)
          json = {}
        }
        return arr
      },
      // 解析响应的图片
      solveShowImg(val) {
        return Utils.solveShowImg(val)
      },
      // 重置表单
      resetForm(formName) {
        this.$refs[formName].resetFields()
      },
      back(status = true) {
        this.$emit('close', status)
      },
    },
    watch: {
      discountRadio:  {
        handler() {
          this.discountPrice = ''
          this.form.discount_price = 0
        },
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

	// 折扣值设置
	.discount_price{
		.discount-input{
			margin: 5px 0;
		}
	}
</style>
