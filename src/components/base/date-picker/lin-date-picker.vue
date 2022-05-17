<!--
 * @Author: feiy 648039341@qq.com
 * @Date: 2021-09-18 15:56:57
 * @LastEditors: feiy 648039341@qq.com
 * @LastEditTime: 2022-05-17 23:15:37
 * @FilePath: \yan-cms\src\components\base\date-picker\lin-date-picker.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="container">
    <el-date-picker
      v-model="value"
      type="daterange"
      unlink-panels
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      align="right"
      size="medium"
      popper-class="date-box"
      value-format="yyyy-MM-dd HH:mm:ss"
      :default-time="['00:00:00', '23:59:59']"
      :picker-options="pickerOptions"
    >
    </el-date-picker>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      value: '',
      pickerOptions: {
        shortcuts: [{
          text: '最近一周',
          onClick(picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - (3600 * 1000 * 24 * 7))
            picker.$emit('pick', [start, end])
          },
        }, {
          text: '最近一个月',
          onClick(picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - (3600 * 1000 * 24 * 30))
            picker.$emit('pick', [start, end])
          },
        }, {
          text: '最近三个月',
          onClick(picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - (3600 * 1000 * 24 * 90))
            picker.$emit('pick', [start, end])
          },
        }],
      },
    }
  },
  watch: {
    value(date) {
      this.$emit('dateChange', date)
    },
  },
  methods: {
    clear() {
      this.value = ''
    },
  },
}
</script>
