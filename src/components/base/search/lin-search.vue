<template>
  <div class="lin-search">
    <el-select class="el-select" size="medium" @change="selEvent" filterable v-model="curSel" placeholder="请选择客户等级">
      <template v-for="(val, index) in selData">
        <el-option :value="index" :key="val" :label="val">
          <span>{{ val }}</span>
        </el-option>
      </template>
    </el-select>
    <el-input size="medium" :placeholder="placeholder" clearable v-model="keyword" class="input-with-select">
      <el-button slot="append" icon="el-icon-search" @click="searchBtn"></el-button>
    </el-input>
  </div>
</template>

<script>
import Utils from 'lin/utils/util'

export default {
  props: {
    placeholder: {
      type: String,
      default: '请输入内容',
    },
    selData: {
      type: Array,
      default: function() {
        return ['客户名','责任人']
      }
    },
  },
  data() {
    return {
      keyword: '',
      curSel: 0
    }
  },
  created() {
    // 节流搜索
    this.$watch(
      'keyword',
      Utils.debounce(newQuery => {
        this.$emit('query', newQuery)
      }, 1000),
    )
  },
  methods: {
    clear() {
      this.keyword = ''
      this.$emit('close')
    },
    selEvent() {
      let curSel = this.curSel
      this.$emit('sel', curSel)
    },
    searchBtn() {
      let keyword = this.keyword
      this.$emit('btn', keyword)
		},
  },
}
</script>
<style lang="scss" scoped>
.lin-search{
  display: flex;
  .el-select{
    width: 100px;
  }
}
.lin-search ::v-deep .el-input-group__append {
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  padding: 0 8px;
  color: #ffffff;
  border: 1px solid $theme;
  .el-icon-search {
    font-size: 18px;
  }
}
.lin-search ::v-deep .el-input__inner {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-right: none;
  width: 250px;
  transition: all 0.2s linear;

  /*&:focus {*/
  /*  width: 250px;*/
  /*  transition: all 0.3s linear;*/
  /*}*/
}
</style>
