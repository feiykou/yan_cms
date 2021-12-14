<template>
<div class="container">
      <template v-if="!showItemForm">
            <div class="title">
                  <span>修改客户报表</span> <span class="back" @click="back"> <i class="iconfont icon-fanhui"></i> 返回 </span>
            </div>
            <el-divider></el-divider>
            <div class="wrap">
                  <el-row>
                        <el-col :lg="16" :md="20" :sm="24" :xs="24">
                              <el-form :model="form" status-icon ref="form" :rules="rules" v-loading="loading" label-width="120px" @submit.native.prevent>
                                    <el-form-item label="名称" prop="name">
                                          <el-input size="medium" v-model="form.name" placeholder="请填写名称"></el-input>
                                    </el-form-item>

                                    <el-form-item label="客户" prop="user_id">
                                          <el-select size="medium" filterable v-model="form.user_id" placeholder="请选择客户">
                                                <template v-for="(val, index) in customerData">
                                                      <el-option :value="val.id" :key="index" :label="val.name">
                                                            <span style="color: #b4b4b4; margin-right: 15px; font-size: 12px;">{{ index+1}}</span>
                                                            <span>{{ val.name }}</span>
                                                      </el-option>
                                                </template>
                                          </el-select>
                                    </el-form-item>

                                    <el-form-item label="备注" prop="remarks">
                                          <el-input size="medium" v-model="form.remarks" placeholder="请输入备注"></el-input>
                                    </el-form-item>

                                    <el-form-item label="审核状态" prop="status" v-if="statusAuth">
                                          <el-switch v-model="form.status" active-color="#3963bc"></el-switch>
                                    </el-form-item>

                                    <el-form-item class="submit">
                                          <el-button type="primary" @click="submitForm('form')">保 存</el-button>
                                          <el-button @click="resetForm('form')">重 置</el-button>
                                    </el-form-item>
                              </el-form>
                        </el-col>
                  </el-row>
            </div>
            <!-- 报表 -->
            <el-divider></el-divider>
            <report-list :tableData="form.items" :cLoading="cLoading" @handleDel="handleBannerItemDel" @handleAdd="handleBannerItemAdd" @handleEdit="handleBannerItemEdit"></report-list>
      </template>
      <report-add v-if="showItemForm && itemType === 'add'" @close="handleClose" :bannerId="form.id"></report-add>
      <report-edit v-if="showItemForm && itemType === 'edit'" @close="handleClose" :editID="itemid" :bannerId="form.id"></report-edit>
</div>
</template>

<script>
import customer from "@/models/customer"
import CustomReport from '@/models/custom_report'
import store from '@/store'
import ReportList from "./ReportList";
import ReportAdd from "./ReportAdd";
import ReportEdit from "./ReportEdit";
export default {
      name: 'CustomReportEdit',
      components: {
            ReportList,
            ReportAdd,
            ReportEdit
      },
      data() {
            return {
                  id: 0,
                  loading: false,
                  customerData: [],
                  statusAuth: store.state.auths.includes('获取客户报表审核权限') || store.state.user.isSuper,

                  listData: [],
                  showItemForm: false, // 是否展示item的编辑或添加
                  itemType: '', // item类型：add：添加  edit：编辑
                  itemid: 1,
                  cLoading: false,
                  form: {
                        user_id: '',
                        name: '',
                        remarks: '',
                        status: false
                  },
                  rules: {
                        user_id: [{
                              required: true,
                              message: '请选择用户',
                              trigger: 'blur'
                        }],
                        name: [{
                              required: true,
                              message: '请输入名称',
                              trigger: 'blur'
                        }],
                        remarks: [{
                              required: true,
                              message: '请输入备注',
                              trigger: 'blur'
                        }]
                  },
            }
      },
      props: {
            editID: Number
      },
      created() {
            this.id = this.$route.params.id
            this.getCustomers()
            this.getDetail()
      },
      methods: {
            async getCustomers(page = 0) {
                  let customerLists = await customer.getCustomers(page, 100, 1)
                  if (customerLists.total_nums <= 0) {
                        this.customerData = []
                        return
                  }
                  this.customerData = customerLists.collection
            },
            // 获取轮播图和轮播图元素信息
            async getDetail() {
                  this.cLoading = this.loading = true
                  try {
                        let form = {}
                        if (this.statusAuth) {
                              form = await CustomReport.getDetail(this.editID)
                              form['status'] = !!form['status']
                        } else {
                              form = await CustomReport.getStatusDetail(this.editID)
                        }
                        this.form = form
                  } catch (error) {
                        this.back(false)
                  }
                  this.cLoading = this.loading = false
            },
            // 提交轮播图信息
            submitForm(formName) {
                  this.$refs[formName].validate(async valid => {
                        if (valid) {
                              this.loading = true
                              const res = await CustomReport.editBanner(this.id, this.form)
                              this.loading = false
                              if (res.error_code === 0) {
                                    this.$message.success(`${res.msg}`)
                                    this.$emit('editClose')
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
            back(staus = false) {
                  this.$emit('close', status)
            },
            handleClose(status = false) {
                  this.showItemForm = false
                  if (status) this.getCustomReport()
            },
            handleBannerItemAdd() {
                  this.showItemForm = true
                  this.itemType = "add"
            },
            handleBannerItemEdit(id) {
                  this.showItemForm = true
                  this.itemType = "edit"
                  this.itemid = id
            },
            handleBannerItemDel() {
                  this.getCustomReport()
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
            text-indent: 40px;

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
