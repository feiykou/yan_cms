<template>
	<div class="container">
		<div class="title"><span>报价表</span> <span class="back" @click="back(false)"> <i class="iconfont icon-fanhui"></i> 返回 </span></div>
		<div class="wrap">
			<el-row>
				<el-col :lg="16" :md="20" :sm="24" :xs="24">
					<el-form :model="form" status-icon ref="form" v-loading="loading" :rules="rules" label-width="120px" @submit.native.prevent>
            
            <el-row>
              <el-col :lg="8" :md="20" :sm="24" :xs="24">
                <el-form-item label="产品类型" prop="user_id">
                  <el-select size="medium" filterable v-model="form.user_id" placeholder="请选择边柱规格">
                    <template v-for="(val, index) in data">
                      <el-option :value="val.id" :key="index" :label="val.name">
                        <span style="color: #b4b4b4; margin-right: 15px; font-size: 12px;">{{ index+1}}</span>
                        <span>{{ val.name }}</span>
                      </el-option>
                    </template>
                  </el-select>
                </el-form-item>
              </el-col>
            
              <el-col :lg="8" :md="20" :sm="24" :xs="24">
                <el-form-item label="产品宽" prop="key_word">
                  <el-input size="medium" v-model="form.key_word" placeholder="请填写产品宽（单位：米）"></el-input>
                </el-form-item>
              </el-col>
              <el-col :lg="8" :md="20" :sm="24" :xs="24">
                <el-form-item label="产品高" prop="type">
                  <el-input size="medium" v-model="form.type" placeholder="请填写产品高（单位：米）"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :lg="8" :md="20" :sm="24" :xs="24">
                <el-form-item label="边柱规格" prop="user_id">
                  <el-select size="medium" filterable v-model="form.user_id" placeholder="请选择边柱规格">
                    <template v-for="(val, index) in data">
                      <el-option :value="val.id" :key="index" :label="val.name">
                        <span style="color: #b4b4b4; margin-right: 15px; font-size: 12px;">{{ index+1}}</span>
                        <span>{{ val.name }}</span>
                      </el-option>
                    </template>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :lg="8" :md="20" :sm="24" :xs="24">
                  <el-form-item label="边柱类型" prop="user_id">
                    <el-select size="medium" filterable v-model="form.user_id" placeholder="请选择边柱类型">
                      <template v-for="(val, index) in data">
                        <el-option :value="val.id" :key="index" :label="val.name">
                          <span style="color: #b4b4b4; margin-right: 15px; font-size: 12px;">{{ index+1}}</span>
                          <span>{{ val.name }}</span>
                        </el-option>
                      </template>
                    </el-select>
                  </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :lg="8" :md="20" :sm="24" :xs="24">
                  <el-form-item label="地轨" prop="track">
                    <el-select size="medium" filterable v-model="form.track" placeholder="请选择地轨">
                        <el-option :value="1" key="0" label="需要">
                          <span style="color: #b4b4b4; margin-right: 15px; font-size: 12px;">1</span>
                          <span>需要</span>
                        </el-option>
                        <el-option :value="2" key="1" label="不需要">
                          <span style="color: #b4b4b4; margin-right: 15px; font-size: 12px;">2</span>
                          <span>不需要</span>
                        </el-option>
                    </el-select>
                  </el-form-item>
              </el-col>
              <el-col :lg="8" :md="20" :sm="24" :xs="24">
                  <el-form-item label="边柱外盖" prop="side_outer">
                    <el-select size="medium" filterable v-model="form.side_outer" placeholder="请选择边柱外盖">
                        <el-option :value="1" key="0" label="需要">
                          <span style="color: #b4b4b4; margin-right: 15px; font-size: 12px;">1</span>
                          <span>需要</span>
                        </el-option>
                        <el-option :value="2" key="1" label="不需要">
                          <span style="color: #b4b4b4; margin-right: 15px; font-size: 12px;">2</span>
                          <span>不需要</span>
                        </el-option>
                    </el-select>
                  </el-form-item>
              </el-col>
              <el-col :lg="8" :md="20" :sm="24" :xs="24">
                  <el-form-item label="收藏架" prop="rack">
                    <el-select size="medium" filterable v-model="form.rack" placeholder="请选择收藏架">
                        <el-option :value="1" key="0" label="需要">
                          <span style="color: #b4b4b4; margin-right: 15px; font-size: 12px;">1</span>
                          <span>需要</span>
                        </el-option>
                        <el-option :value="2" key="1" label="不需要">
                          <span style="color: #b4b4b4; margin-right: 15px; font-size: 12px;">2</span>
                          <span>不需要</span>
                        </el-option>
                    </el-select>
                  </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :lg="8" :md="20" :sm="24" :xs="24">
                <el-form-item label="物流" prop="logistics">
                  <el-select size="medium" filterable v-model="form.logistics" placeholder="请选择物流">
                      <el-option :value="1" key="1" label="需要">
                        <span style="color: #b4b4b4; margin-right: 15px; font-size: 12px;">1</span>
                        <span>需要</span>
                      </el-option>
                      <el-option :value="2" key="2" label="不需要">
                        <span style="color: #b4b4b4; margin-right: 15px; font-size: 12px;">2</span>
                        <span>不需要</span>
                      </el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :lg="8" :md="20" :sm="24" :xs="24">
                  <el-form-item label="安装" prop="install">
                    <el-select size="medium" filterable v-model="form.install" placeholder="请选择安装">
                        <el-option :value="1" key="0" label="需要">
                          <span style="color: #b4b4b4; margin-right: 15px; font-size: 12px;">1</span>
                          <span>需要</span>
                        </el-option>
                        <el-option :value="2" key="1" label="不需要">
                          <span style="color: #b4b4b4; margin-right: 15px; font-size: 12px;">2</span>
                          <span>不需要</span>
                        </el-option>
                    </el-select>
                  </el-form-item>
              </el-col>
            </el-row>
            <el-form-item label="发票" prop="invoice">
							<el-select size="medium" filterable v-model="form.invoice" placeholder="请选择发票">
									<el-option :value="1" key="0" label="需要">
										<span style="color: #b4b4b4; margin-right: 15px; font-size: 12px;">1</span>
										<span>需要</span>
									</el-option>
                  <el-option :value="2" key="1" label="不需要">
										<span style="color: #b4b4b4; margin-right: 15px; font-size: 12px;">2</span>
										<span>不需要</span>
									</el-option>
							</el-select>
						</el-form-item>
            <el-form-item label="折扣" prop="discount">
							<el-input size="medium" v-model="form.discount" placeholder="请填写折扣"></el-input>
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
  import CustomReport from '@/models/custom_report'
  import UploadImgs from '@/components/base/upload-imgs'
  import Utils from "../../lin/utils/util";

  export default {
    components: {
      UploadImgs
		},
		props: {
      bannerId: Number
		},
    data() {
      return {
        data: [{
          id: 1,
          name: 'feiy'
        },{
          id: 2,
          name: 'zhuo'
        },{
          id: 3,
          name: 'feiy_zhuo'
        }],
        form: {
          type_name: '',
          width: '',
          height: '',
          side_spec: '',
          side_type: '',
          track: 2,
          side_outer: 2,
          rack: 2,
          logistics: 2,
          install: 2,
          invoice: 2,
          discount: ''
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
              const res = await banner.createItem(this.form)
			  this.loading = false
              if (res.error_code === 0) {
                this.$message.success(`${res.msg}`)
                this.resetForm(formName)
				this.back(true)
              }
            } catch (error) {
				console.log(error)
              this.loading = false
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
      /**
			 * 返回上一级
       * @param status 是否更新，true：更新  false：未更新
       */
      back(status = false) {
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
