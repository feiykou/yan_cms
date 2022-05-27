<template>
	<div class="container">
		<div class="title"><span>更新BannerItem</span> <span class="back" @click="back(false)"> <i class="iconfont icon-fanhui"></i> 返回 </span></div>
		<div class="wrap">
			<el-row>
				<el-col :lg="16" :md="20" :sm="24" :xs="24">
					<el-form :model="form" status-icon ref="form" v-loading="loading" :rules="rules" label-width="120px" @submit.native.prevent>
						<el-form-item label="名称" prop="name">
							<el-input size="medium" v-model="form.name" placeholder="请填写名称"></el-input>
						</el-form-item>
						<el-form-item label="关键词" prop="key_word">
							<el-input size="medium" v-model="form.key_word" placeholder="请填写关键词"></el-input>
						</el-form-item>
						<el-form-item label="类型" prop="type">
							<el-input size="medium" v-model="form.type" placeholder="请填写类型"></el-input>
						</el-form-item>
						<el-form-item label="图片" prop="img">
							<upload-imgs ref="uploadEle" :rules="imgRules" :value="solveShowImg(form.img)" :maxNum="1" />
						</el-form-item>
						<el-form-item label="加载中图片" prop="load_img">
							<upload-imgs ref="uploadLoadEle" :rules="imgRules" :value="solveShowImg(form.load_img)" :maxNum="1" />
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
	import Utils from "@/lin/utils/util";
  import CustomReport from '@/models/custom_report'
  import UploadImgs from '@/components/base/upload-imgs'

  export default {
    components: {
      UploadImgs
    },
    props: {
      bannerId: Number,
      editID: Number
    },
    data() {
      return {
        form: {
          id: 0,
          title: '',
          name: '',
          description: '',
					img: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入轮播图元素名称', trigger: 'blur' }
          ],
          key_word: [
            { required: true, message: '请输入轮播图元素关键词', trigger: 'blur' }
          ],
        },
        imgRules: {
          minWidth: 100,
          minHeight: 100,
          maxSize: 5,
        },
        loading: false,
      }
    },
    async created() {
      this.loading = true
      this.form = await banner.getItem(this.editID)
      this.loading = false
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate(async valid => {
          if(valid) {
            try {
              // 解析上传数据
              let imgUrl = await this.$refs.uploadEle.getValue(),
				loadImgUrl =  await this.$refs.uploadLoadEle.getValue()
              this.form['img'] = Utils.solveUploadImg(imgUrl)
			  this.form['load_img'] = Utils.solveUploadImg(loadImgUrl)

              if(this.bannerId > 0) {
                this.form['banner_id'] = this.bannerId
              }
              // 创建轮播图元素
              this.loading = true
              const res = await banner.updateItem(this.form.id, this.form)
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
      // 重置表单
      resetForm(formName) {
        this.$refs[formName].resetFields()
      },
      // 解析响应的图片
      solveShowImg(val) {
        return Utils.solveShowImg(val)
      },
			// 返回上一级
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
			.back {
				float: right;
				margin-right: 40px;
				cursor: pointer;
			}
		}

		.wrap {
			padding: 20px;
		}

		.submit {
			float: left;
		}
	}
</style>
