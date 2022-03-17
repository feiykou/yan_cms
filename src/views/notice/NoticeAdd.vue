<template>
	<div class="container">
		<div class="title">新建tag <span class="back" @click="back(false)"> <i class="iconfont icon-fanhui"></i> 返回 </span></div>
		<div class="wrap">
			<el-row>
				<el-col :lg="16" :md="20" :sm="24" :xs="24">
					<el-form :model="form" status-icon ref="form" v-loading="loading" :rules="rules" label-width="120px" @submit.native.prevent>
						<el-form-item label="标题" prop="title">
							<el-input size="medium" v-model="form.title" placeholder="请填写标题"></el-input>
						</el-form-item>
						<el-form-item label="类型" prop="type">
							<el-select size="medium" filterable v-model="form.type" placeholder="请选择类型">
								<el-option v-for="(value, type) in typeArr" :key="type" :value="type" :label="value">
									<!-- <span style="color: #b4b4b4; margin-right: 15px; font-size: 12px;">{{ type }}</span> -->
									<span>{{ value }}</span>
								</el-option>
							</el-select>
						</el-form-item>
						<el-form-item label="直播房间id" prop="room_id">
							<el-input size="medium" v-model="form.room_id" placeholder="请填写房间id"></el-input>
						</el-form-item>
						<el-form-item label="直播路径" prop="path">
							<el-input size="medium" v-model="form.path" placeholder="请填写直播路径"></el-input>
						</el-form-item>
						<el-form-item label="开始日期" prop="start_date">
							<el-date-picker
								v-model="form.start_date"
								type="datetime"
								placeholder="选择日期时间"
								align="right"
								:picker-options="pickerOptions"
							></el-date-picker>
						</el-form-item>
						<el-form-item label="是否高亮" prop="highlight">
							<el-switch
								v-model="form.highlight"
								active-color="#3963bc"
							></el-switch>
						</el-form-item>
						<el-form-item label="上线" prop="online">
							<el-switch
								v-model="form.online"
								active-color="#3963bc"
							></el-switch>
						</el-form-item>
						<el-form-item label="排序" prop="order">
							<el-input size="medium" v-model="form.order" placeholder="请填写排序"></el-input>
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
import NoticeEnum from '../../config/notice/NoticeEnum'
import notice from "../../models/notice"
export default {
	name: 'NoticeAdd',
	data() {
		return {
			loading: false,
			typeArr: NoticeEnum,
			cateData: {}, // 分类数据
			spuData: [], // spu数据
			form: {
				title: '',
				description: '',
				highlight: false,
				order: 50,
				type: 'text'
			},
			rules: {
				// title: [
				//   { required: true, message: '请输入标题', trigger: 'blur' }
				// ],
			},
			pickerOptions: {
			  shortcuts: [
				  {
					  text: '今天',
					  onClick(picker) {
						  picker.$emit('pick', new Date())
					  },
				  },
				  {
					  text: '昨天',
					  onClick(picker) {
						  const date = new Date()
						  date.setTime(date.getTime() - 3600 * 1000 * 24)
						  picker.$emit('pick', date)
					  },
				  },
				  {
					  text: '一周前',
					  onClick(picker) {
						  const date = new Date()
						  date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
						  picker.$emit('pick', date)
					  },
				  },
			  ],
		 	},
		}
	},
	created() {

	},
	methods: {
		setNumber(value) {
			if(!value) return;
			return Number(value)
		},
		submitForm(formName) {
			this.$refs[formName].validate(async valid => {
				if(valid) {
					this.loading = true
					try {
						const res = await notice.addNotice(this.form)
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
		// 重置表单
		resetForm(formName) {
			this.$refs[formName].resetFields()
		},
		back(status = true) {
			this.$emit('close', status)
		},
	}
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
