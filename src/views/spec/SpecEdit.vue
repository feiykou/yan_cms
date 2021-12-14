<template>
  <div class="container">
    <div class="title top-title"> <span class="back" @click="back(false)"> <i class="iconfont icon-fanhui"></i> 返回 </span></div>
		<template v-if="!showItemForm">
			<div class="wrap">
				<el-row>
					<el-col :lg="12" :md="12" :sm="24" :xs="24">
						<el-divider></el-divider>
						<div class="title">
							<span>修改规格名</span>
						</div>
						<el-form :model="form" status-icon ref="form" :rules="rules" v-loading="loading" label-width="120px" @submit.native.prevent>
							<el-form-item label="规格名名称" prop="name">
								<el-input size="medium" v-model="form.name" placeholder="请填写规格名名称"></el-input>
							</el-form-item>
							<el-form-item label="规格名描述" prop="description">
								<el-input size="medium" v-model="form.description" placeholder="请填写规格名描述"></el-input>
							</el-form-item>
							<el-form-item label="单位" prop="unit">
								<el-input size="medium" v-model="form.unit" placeholder="请填写单位"></el-input>
							</el-form-item>
							<el-form-item label="是否标准" prop="online">
								<el-switch
									v-model="form.standard"
									active-color="#3963bc"
									active-text="标准"
									inactive-text="非标准"
								></el-switch>
							</el-form-item>
							<el-form-item class="submit">
								<el-button type="primary" @click="submitForm('form')">保 存</el-button>
								<el-button @click="resetForm('form')">重 置</el-button>
							</el-form-item>
						</el-form>
					</el-col>
					<el-col :lg="12" :md="12" :sm="24" :xs="24" class="spec-value-wrap">
						<!-- SpecValue 列表 -->
						<el-divider></el-divider>
						<spec-value-list
							:tableData="form.items"
							:cLoading="cLoading"
							@handleDel="handleSpecValueDel"
							@handleAdd="handleSpecValueAdd"
							@handleEdit="handleSpecValueEdit">
						</spec-value-list>
					</el-col>
				</el-row>
			</div>
		</template>
		<spec-value-add v-if="showItemForm && itemType === 'add'" @close="handleClose" :specId="form.id"></spec-value-add>
		<spec-value-edit v-if="showItemForm && itemType === 'edit'" @close="handleClose" :editID="itemid" :specId="form.id"></spec-value-edit>
	</div>
</template>

<script>
import spec from '@/models/spec'
import SpecValueAdd from "./SpecValueAdd";
import SpecValueEdit from "./SpecValueEdit";
import SpecValueList from "./SpecValueList";
export default {
  name: 'BannerEdit',
	components: {
    SpecValueList,
    SpecValueAdd,
    SpecValueEdit
	},
  data() {
    return {
      id: 0,
      loading: false,
      listData: [],
      showItemForm: false, // 是否展示item的编辑或添加
			itemType: '', // item类型：add：添加  edit：编辑
			itemid: 1,
      cLoading: false,
      form: {
        name: '',
        description: '',
        unit: '',
        standard: true,
				items: []
      },
      rules: {
        name: [
          { required: true, message: '请输入规格名名称', trigger: 'blur' }
        ]
      },
    }
  },
  async created() {
    this.id = this.$route.params.id
    this.loading = true
    await this.getSpec()
    this.loading = false
  },
  methods: {
    // 获取规格和规格值信息
    async getSpec() {
      this.cLoading = true
      try {
        this.form = await spec.getSpec(this.id)
        // 把数字转化成boolean值
        this.form['standard'] = !!this.form['standard']
			} catch(error) {
				this.back(false)
			}
      this.cLoading = false
		},
		// 提交轮播图信息
    submitForm(formName) {
      this.$refs[formName].validate(async valid => {
        if(valid) {
          try {
            this.loading = true
            const res = await spec.editSpec(this.id, this.form)
            this.loading = false
            if (res.error_code === 0) {
              this.$message.success(`${res.msg}`)
              this.back()
            }
					} catch (e) {
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
    // 重置表单
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
    back() {
      this.$router.push('/spec/list')
    },
    handleClose(status = false) {
      this.showItemForm = false
			if(status) this.getSpec()
		},
    handleSpecValueAdd() {
			this.showItemForm = true
      this.itemType="add"
		},
    handleSpecValueEdit(id) {
      this.showItemForm = true
			this.itemType = "edit"
			this.itemid = id
		},
    handleSpecValueDel() {
      this.getSpec()
		}
  },
}
</script>

<style lang="scss" scoped>
.el-divider--horizontal {
  margin: 0;
}

.container {
  .title {
    height: 59px;
    line-height: 59px;
    color: $parent-title-color;
    font-size: 16px;
    font-weight: 500;
    
    .back {
      float: right;
      margin-right: 40px;
      cursor: pointer;
    }
  }
  .top-title{
    margin-bottom: -20px;
    padding: 0 20px;
  }

  .wrap {
    padding: 20px;
  }

  .submit {
    float: left;
  }

	.spec-value-wrap {
		padding-left: 30px;
	}

	.el-form {
		/deep/ {
			.el-form-item__label{
				width: 100px!important;
			}
			.el-form-item__content{
				margin-left: 100px!important;
			}
		}
	}


}
</style>
