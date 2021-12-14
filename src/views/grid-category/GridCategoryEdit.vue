<template>
  <div class="container">
    <div class="title"><span>更新宫格</span> <span class="back" @click="back(false)"> <i class="iconfont icon-fanhui"></i> 返回 </span></div>
    <div class="wrap">
      <el-row>
        <el-col :lg="16" :md="20" :sm="24" :xs="24">
          <el-form :model="form" status-icon ref="form" :rules="rules" v-loading="loading" label-width="120px" @submit.native.prevent>
              <el-form-item label="宫格标题" prop="title">
                  <el-input size="medium" v-model="form.title" placeholder="请填写宫格标题"></el-input>
              </el-form-item>
            <el-form-item label="宫格名" prop="name">
              <el-input size="medium" v-model="form.name" placeholder="请填写宫格名"></el-input>
            </el-form-item>
              <el-form-item label="分类" prop="category_id">
                  <el-select size="medium" filterable v-model="form.parent_id" placeholder="请选择分类">
                      <template v-for="val in cateData">
                          <el-option :value="val.id" :label="val.name">
                              <span style="color: #b4b4b4; margin-right: 15px; font-size: 12px;">{{ val.id }}</span>
                              <span>{{ val.name }}</span>
                          </el-option>
                          <template v-for="subVal in val.sub" v-if="val.sub">
                              <el-option :value="subVal.id" :label="subVal.name">
                                  <span style="color: #b4b4b4; margin-right: 15px; font-size: 12px;">┞----{{ subVal.id }}</span>
                                  <span>{{ subVal.name }}</span>
                              </el-option>
                              <template v-for="sonVal in subVal.sub" v-if="subVal.sub">
                                  <el-option :value="sonVal.id" :label="sonVal.name">
                                      <span style="color: #b4b4b4; margin-right: 15px; font-size: 12px;">┞----{{ sonVal.id }}</span>
                                      <span>{{ sonVal.name }}</span>
                                  </el-option>
                              </template>
                          </template>
                      </template>
                  </el-select>
              </el-form-item>
            <el-form-item label="排序" prop="order">
              <el-input size="medium" v-model="form.order" placeholder="请填写宫格排序"></el-input>
            </el-form-item>
						<el-form-item label="显示上线" prop="show">
							<el-switch
								v-model="form.show"
								active-color="#3963bc"
							></el-switch>
						</el-form-item>
						<el-form-item label="图片" prop="img">
							<upload-imgs ref="uploadEle" :rules="imgRules" :value="solveShowImg(form.img)" :maxNum="1" />
						</el-form-item>
            <el-form-item label="宫格描述" prop="description">
              <el-input size="medium" v-model="form.description" placeholder="请填写宫格描述"></el-input>
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
import gridCategory from '@/models/grid-category'
import category from '@/models/category'
import Utils from '@/lin/utils/util'
import UploadImgs from '@/components/base/upload-imgs'

export default {
  props: {
    pid: Number,
    editID: Number
  },
  components: {
    UploadImgs
  },
  data() {
    return {
      loading: false,
      form: {
        name: '',
        order: 50,
        show: 1,
        description: '',
      },
      imgRules: {
        minWidth: 0,
        minHeight: 0,
        maxSize: 5,
      },
      cateData: {},
      rules: {
        title: [
          { required: true, message: '请输入宫格标题', trigger: 'blur' }
        ]
      },
    }
  },
  created() {
    this.getGrid()
    this.getTreeCate()
  },
  methods: {
    async getGrid() {
      this.loading = true
      const id = this.editID
      if (!id) this.back(false)
      try {
        this.form = await gridCategory.getGrid(id)
        // 把数字转化成boolean值
        this.form.show = !!this.form.show
      } catch (e) {
        this.back(false)
      }
      this.loading = false
    },
    submitForm(formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          try {
            // 解析上传数据
            const imgUrl = await this.$refs.uploadEle.getValue()
            this.form.img = Utils.solveUploadImg(imgUrl)
            this.loading = true
            const res = await gridCategory.updateGrid(this.editID, this.form)
            this.loading = false
            if (res.error_code === 0) {
              this.$message.success(`${res.msg}`)
              this.resetForm(formName)
              this.back()
            }
          } catch (error) {
            const message = error.data.msg
            if (message && typeof message === 'object') {
              for (const key in message) {
                this.$message.error(message[key])
                await setTimeout(() => {}, 1000)
              }
            }
          }
        } else {
          this.$message.error('请填写正确的信息')
          return false
        }
      })
    },
    // 获取分类树
    async getTreeCate(id = 0, deep = 2) {
      try {
        this.cateData = await category.getTreeCate(id, deep)
        console.log(this.cateData)
      } catch (error) {
        this.cateData = {}
      }
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
    }
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
