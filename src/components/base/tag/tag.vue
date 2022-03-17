<template>
	<div class="mg-tag">
		<el-tag
			:key="tag"
			v-for="tag in dynamicTags"
			closable
			:disable-transitions="false"
			@close="handleClose(tag)">
			{{tag}}
		</el-tag>
		<el-input
			class="input-new-tag"
			v-if="inputVisible"
			v-model="inputValue"
			ref="saveTagInput"
			size="small"
			@keyup.enter.native="handleInputConfirm"
			@blur="handleInputConfirm"
		>
		</el-input>
		<el-button v-else class="button-new-tag" size="small" @click="showInput">{{ btnName }}</el-button>
	</div>
</template>

<script>
  export default {
    name: "tag",
		props: {
      btnName: {
        type: String,
				default: '添加标签'
			},
			tags: {
        type: Array,
				default: () => {
				  return []
				}
			}
		},
    data() {
      return {
        dynamicTags: [],
        inputVisible: false,
        inputValue: ''
      };
    },
    methods: {
      handleClose(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
        this.$emit('handleConfirm', this.dynamicTags)
      },

      showInput() {
        this.inputVisible = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },

      handleInputConfirm() {
        let inputValue = this.inputValue;
        if (inputValue) {
          this.dynamicTags.push(inputValue);
        }
        this.inputVisible = false;
        this.inputValue = '';
        this.$emit('handleConfirm', this.dynamicTags)
      }
    },
		watch: {
      tags: {
        handler(val) {
          this.dynamicTags = val
				},
        deep: true,
			}
		},
  }
</script>

<style lang="scss" scoped>
	.el-tag + .el-tag {
		margin-left: 10px;
	}
	.button-new-tag {
		margin-left: 10px;
		height: 32px;
		line-height: 30px;
		padding-top: 0;
		padding-bottom: 0;
	}
	.input-new-tag {
		width: 90px;
		margin-left: 10px;
		vertical-align: bottom;
	}
	.input-new-tag ::v-deep .el-input__inner {
		height: 24px;
	}
</style>