(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9195e16e"],{"9d7c":function(t,e,n){"use strict";n("e160")},bf9d:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lin-container"},[n("div",{staticClass:"lin-title"},[t._v("Tag 标签")]),n("div",{staticClass:"lin-wrap-ui"},[n("el-card",{staticStyle:{"margin-bottom":"50px"}},[n("div",{attrs:{slot:"header"},slot:"header"},[n("span",[t._v("基础用法")])]),n("el-row",[n("div",[n("el-tag",[t._v("标签一")]),n("el-tag",{attrs:{type:"success"}},[t._v("标签二")]),n("el-tag",{attrs:{type:"info"}},[t._v("标签三")]),n("el-tag",{attrs:{type:"warning"}},[t._v("标签四")]),n("el-tag",{attrs:{type:"danger"}},[t._v("标签五")])],1)]),n("el-collapse",[n("el-collapse-item",{attrs:{title:"查看代码",name:"2"}},[n("div",{staticStyle:{"white-space":"pre-wrap"}},[t._v(t._s(t.base))])])],1)],1),n("el-card",{staticStyle:{"margin-bottom":"50px"}},[n("div",{attrs:{slot:"header"},slot:"header"},[n("span",[t._v("可移除标签")])]),n("el-row",[n("div",t._l(t.tags,function(e){return n("el-tag",{key:e.name,attrs:{closable:"",type:e.type},on:{close:function(n){return t.handleCloseTag(e)}}},[t._v("\n            "+t._s(e.name)+"\n          ")])}),1)]),n("el-collapse",{staticClass:"test",staticStyle:{color:"red"}},[n("el-collapse-item",{attrs:{title:"查看代码",name:"2"}},[n("div",{staticStyle:{"white-space":"pre-wrap"}},[t._v(t._s(t.closable))])])],1)],1),n("el-card",{staticStyle:{"margin-bottom":"50px"}},[n("div",{attrs:{slot:"header"},slot:"header"},[n("span",[t._v("动态编辑标签")])]),n("el-row",[n("div",[t._l(t.dynamicTags,function(e){return n("el-tag",{key:e,attrs:{closable:"","disable-transitions":!1},on:{close:function(n){return t.handleClose(e)}}},[t._v("\n            "+t._s(e)+"\n          ")])}),t.inputVisible?n("el-input",{ref:"saveTagInput",staticClass:"input-new-tag",attrs:{size:"small"},on:{blur:t.handleInputConfirm},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleInputConfirm(e)}},model:{value:t.inputValue,callback:function(e){t.inputValue=e},expression:"inputValue"}}):n("i",{staticClass:"el-icon-circle-plus button-new-tag",on:{click:t.showInput}})],2)]),n("el-collapse",{staticClass:"test",staticStyle:{color:"red"}},[n("el-collapse-item",{attrs:{title:"查看代码",name:"2"}},[n("div",{staticStyle:{"white-space":"pre-wrap"}},[t._v(t._s(t.dynamic))])])],1)],1),n("el-card",{staticStyle:{"margin-bottom":"50px"}},[n("div",{attrs:{slot:"header"},slot:"header"},[n("span",[t._v("不同尺寸")])]),n("el-row",[n("div",[n("el-tag",{attrs:{closable:""}},[t._v("默认标签")]),n("el-tag",{attrs:{size:"medium",closable:""}},[t._v("中等标签")]),n("el-tag",{attrs:{size:"small",closable:""}},[t._v("小型标签")]),n("el-tag",{attrs:{size:"mini",closable:""}},[t._v("超小标签")])],1)]),n("el-collapse",[n("el-collapse-item",{attrs:{title:"查看代码",name:"2"}},[n("div",{staticStyle:{"white-space":"pre-wrap"}},[t._v(t._s(t.size))])])],1)],1)],1)])},s=[],i={name:"",components:{},data:function(){return{dynamicTags:["标签一","标签二","标签三"],inputVisible:!1,inputValue:"",tags:[{name:"标签一",type:""},{name:"标签二",type:"success"},{name:"标签三",type:"info"},{name:"标签四",type:"warning"},{name:"标签五",type:"danger"}],text:"",base:'     \n        <el-tag>标签一</el-tag>\n        <el-tag type="success">标签二</el-tag>\n        <el-tag type="info">标签三</el-tag>\n        <el-tag type="warning">标签四</el-tag>\n        <el-tag type="danger">标签五</el-tag>',closable:"\n       <el-tag\n        v-for=\"tag in tags\"\n        :key=\"tag.name\"\n        closable\n        @close=\"handleCloseTag(tag)\"\n        :type=\"tag.type\">\n        {{tag.name}}\n      </el-tag>\n\n      <script>\n        export default {\n          data() {\n            return {\n              tags: [\n                { name: '标签一', type: '' },\n                { name: '标签二', type: 'success' },\n                { name: '标签三', type: 'info' },\n                { name: '标签四', type: 'warning' },\n                { name: '标签五', type: 'danger' }\n              ]\n            };\n          methods: {\n            handleCloseTag(tag) {\n              this.tags.splice(this.tags.indexOf(tag), 1);\n            },\n          }\n        }\n      <\/script>",dynamic:'\n           <el-tag\n            :key="tag"\n            v-for="tag in dynamicTags"\n            closable\n            :disable-transitions="false"\n            @close="handleClose(tag)">\n            {{tag}}\n          </el-tag>\n          <el-input\n            class="input-new-tag"\n            v-if="inputVisible"\n            v-model="inputValue"\n            ref="saveTagInput"\n            size="small"\n            @keyup.enter.native="handleInputConfirm"\n            @blur="handleInputConfirm"\n          >\n          </el-input>\n          <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>\n\n          <style>\n            .el-tag + .el-tag {\n              margin-left: 10px;\n            }\n            .button-new-tag {\n              margin-left: 10px;\n              height: 32px;\n              line-height: 30px;\n              padding-top: 0;\n              padding-bottom: 0;\n            }\n            .input-new-tag {\n              width: 90px;\n              margin-left: 10px;\n              vertical-align: bottom;\n            }\n            .input-new-tag ::v-deep .el-input__inner {\n              height: 24px;\n            }\n          </style>\n\n          <script>\n            export default {\n              data() {\n                return {\n                  dynamicTags: [\'标签一\', \'标签二\', \'标签三\'],\n                  inputVisible: false,\n                  inputValue: \'\'\n                };\n              },\n              methods: {\n                handleClose(tag) {\n                  this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);\n                },\n\n                showInput() {\n                  this.inputVisible = true;\n                  this.$nextTick(_ => {\n                    this.$refs.saveTagInput.$refs.input.focus();\n                  });\n                },\n\n                handleInputConfirm() {\n                  let inputValue = this.inputValue;\n                  if (inputValue) {\n                    this.dynamicTags.push(inputValue);\n                  }\n                  this.inputVisible = false;\n                  this.inputValue = \'\';\n                }\n              }\n            }\n          <\/script>',size:'\n            <el-tag closable>默认标签</el-tag>\n            <el-tag size="medium" closable>中等标签</el-tag>\n            <el-tag size="small" closable>小型标签</el-tag>\n            <el-tag size="mini" closable>超小标签</el-tag>\n            '}},computed:{},watch:{},mounted:function(){this.init()},methods:{handleInputConfirm:function(){var t=this.inputValue;t&&this.dynamicTags.push(t),this.inputVisible=!1,this.inputValue=""},handleCloseTag:function(t){this.tags.splice(this.tags.indexOf(t),1)},handleClose:function(t){this.dynamicTags.splice(this.dynamicTags.indexOf(t),1)},showInput:function(){var t=this;this.inputVisible=!0,this.$nextTick(function(){t.$refs.saveTagInput.$refs.input.focus()})},init:function(){}}},l=i,p=(n("9d7c"),n("2877")),o=Object(p["a"])(l,a,s,!1,null,"18f987eb",null);e["default"]=o.exports},e160:function(t,e,n){}}]);