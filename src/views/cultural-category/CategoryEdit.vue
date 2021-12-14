<template>
  <div class="container">
    <div class="title"><span>更新分类</span> <span class="back" @click="back(false)"> <i class="iconfont icon-fanhui"></i> 返回 </span></div>
    <div class="wrap">
      <el-row>
        <el-col :lg="16" :md="20" :sm="24" :xs="24">
          <el-form :model="form" status-icon ref="form" :rules="rules" v-loading="loading" label-width="120px" @submit.native.prevent>
            <el-form-item label="分类名" prop="name">
              <el-input size="medium" v-model="form.name" placeholder="请填写分类名"></el-input>
            </el-form-item>
            <el-form-item label="排序" prop="order">
              <el-input size="medium" v-model="form.order" placeholder="请填写分类排序"></el-input>
            </el-form-item>
            <el-form-item label="显示上线" prop="show">
                <el-switch
                    v-model="form.show"
                    active-color="#3963bc"
                ></el-switch>
            </el-form-item>
              <el-form-item label="标题图" prop="title_img">
                  <upload-imgs ref="uploadEleTitle" :rules="imgRules" :value="solveShowImg(form.title_img)" :maxNum="1" />
              </el-form-item>
            <el-form-item label="图片" prop="img">
                <upload-imgs ref="uploadEle" :rules="imgRules" :value="solveShowImg(form.img)" :maxNum="1" />
            </el-form-item>
              <el-form-item label="入口图" prop="entrance_img">
                  <upload-imgs ref="uploadEleEntrance" :rules="imgRules" :value="solveShowImg(form.entrance_img)" :maxNum="1" />
              </el-form-item>
            <el-form-item label="分类描述" prop="description">
              <el-input size="medium" v-model="form.description" placeholder="请填写分类描述"></el-input>
            </el-form-item>
            <el-form-item class="submit">
              <el-button type="primary" @click="submitForm('form')">保 存</el-button>
              <el-button @click="resetForm('form')">重 置</el-button>
            </el-form-item>


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
									<el-select size="medium" filterable v-model="selSpu" @change="spuChange" placeholder="请选择所属SPU">
										<el-option v-for="(spu, index) in spuData" :value="spu.id" :key="index" :label="spu.title">
											<span style="color: #b4b4b4; margin-right: 15px; font-size: 12px;">{{ spu.id }}</span>
											<span>{{ spu.title }}</span>
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
import culturalCategory from '@/models/cultural-category'
import Utils from "@/lin/utils/util";
import UploadImgs from '@/components/base/upload-imgs'
import spu from "@/models/spu";

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
      rules: {
        name: [
          { required: true, message: '请输入分类名称', trigger: 'blur' }
        ]
      },
      tableData: [],
      tableColumn: [
        { prop: 'id', label: 'id', width: 100 },
        { prop: 'img', label: '主图', type: 'image', width: 100 },
        { prop: 'title', label: '标题', width: 150 },
        { prop: 'subtitle', label: '副标题' },
      ],
      operate: [],
      selSpuId: '',
      selSpu: '',
      spuLoading: false,
      spuData: []
    }
  },
  created() {
    this.getCate()
    this.getSpus()
    this.getRelaSpus(this.editID)
    this.operate = [
      {
        name: '删除',
        func: 'handleDelete',
        type: 'danger',
      },
    ]
  },
  methods: {
    async getCate() {
      this.loading = true
      const id = this.editID
      if(!id) this.back(false)
      try{
        this.form = await culturalCategory.getCate(id)
				// 把数字转化成boolean值
        this.form['show'] = !!this.form['show']
      } catch (e) {
        this.back(false)
      }
      this.loading = false
		},
    submitForm(formName) {
      this.$refs[formName].validate(async valid => {
        if(valid) {
          try {
            // 解析上传数据
            let imgUrl = await this.$refs.uploadEle.getValue(),
              enteanceUrl = await this.$refs.uploadEleEntrance.getValue(),
              titleUrl = await this.$refs.uploadEleTitle.getValue()
            this.form['entrance_img'] = Utils.solveUploadImg(enteanceUrl)
            this.form['img'] = Utils.solveUploadImg(imgUrl)
            this.form['title_img'] = Utils.solveUploadImg(titleUrl)
            if(this.pid > 0) {
              this.form['parent_id'] = this.pid
            }
            this.loading = true
            const res = await culturalCategory.updateCate(this.editID, this.form)
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
    // 解析响应的图片
    solveShowImg(val) {
      return Utils.solveShowImg(val)
    },
    // 重置表单
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
		back( status = true ) {
       this.$emit('close', status)
    },
    // 获取SPU全部数据
    async getSpus() {
      this.spuLoading = true
      let spuData = await spu.getSpus(0, 80)
      this.spuLoading = false
      this.spuData = spuData.collection
    },
    async addSpu() {
      if(!this.selSpuId) {
        this.$message.error('请选择spu')
        return;
      };
      if(this.validateIsExistSpu(this.selSpuId)) {
        this.$message.error('已存在该spu')
        return;
      }
      const that = this,
          info = {
            spu_id: that.selSpuId,
            cultural_category_id: that.editID
          };
      try {
        this.spuLoading = true
        const res = await culturalCategory.addSpu(info)
        await this.getRelaSpus(this.editID)
        this.spuLoading = false
        if (res.error_code === 0) {
          this.$message.success(`${res.msg}`)
          this.selSpuId = ''
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
    // 获取关联SPU数据
    async getRelaSpus(column_id) {
      let relaSpus = await culturalCategory.allSpu(column_id)
      this.tableData = relaSpus
    },
    validateIsExistSpu(spu_id) {
      if (!spu_id) return;
      return this.tableData.some( (item, index) => {
        return item.id === spu_id
      } )
    },
    spuChange(val) {
      if(!val) return;
      this.selSpuId = val
      this.validateIsExistSpu(val)
    },
    handleDelete(val) {
				this.$confirm('此操作将删除spu', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning',
				}).then(async () => {
					const id = [val.row.id]
					this.spuLoading = true
					const res = await culturalCategory.delSpu(id)
					this.spuLoading = false
					if (res.error_code === 0) {
						this.getRelaSpus(this.editID)
						this.$message({
							type: 'success',
							message: `${res.msg}`,
						})
					}
				})
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
</style>
