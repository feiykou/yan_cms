(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["plugins-LinCmsUi-views-form-switch-Switch"],{"42a0":function(e,t,l){"use strict";l.r(t);var a=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"lin-container"},[l("div",{staticClass:"lin-title"},[e._v("Switch 开关")]),l("div",{staticClass:"lin-wrap-ui"},[l("el-card",{staticStyle:{"margin-bottom":"50px"}},[l("div",{attrs:{slot:"header"},slot:"header"},[l("span",[e._v("基础用法")])]),l("el-row",[l("el-switch",{staticStyle:{"margin-right":"20px"},attrs:{"active-color":"#3963bc"},model:{value:e.value2,callback:function(t){e.value2=t},expression:"value2"}}),l("el-switch",{attrs:{"active-color":"#00C292","inactive-color":"#E46A76"},model:{value:e.value1,callback:function(t){e.value1=t},expression:"value1"}})],1),l("el-collapse",[l("el-collapse-item",{attrs:{title:"查看代码",name:"2"}},[l("div",{staticStyle:{"white-space":"pre-wrap"}},[e._v(e._s(e.base))])])],1)],1),l("el-card",{staticStyle:{"margin-bottom":"50px"}},[l("div",{attrs:{slot:"header"},slot:"header"},[l("span",[e._v("文字描述")])]),l("el-row",[l("el-switch",{attrs:{"active-color":"#00C292","inactive-color":"#E46A76","active-text":"按月付费","inactive-text":"按年付费"},model:{value:e.value3,callback:function(t){e.value3=t},expression:"value3"}})],1),l("el-collapse",[l("el-collapse-item",{attrs:{title:"查看代码",name:"2"}},[l("div",{staticStyle:{"white-space":"pre-wrap"}},[e._v(e._s(e.withText))])])],1)],1),l("el-card",{staticStyle:{"margin-bottom":"50px"}},[l("div",{attrs:{slot:"header"},slot:"header"},[l("span",[e._v("扩展的 value 类型")])]),l("el-row",[l("el-tooltip",{attrs:{content:"Switch value: "+e.value4,placement:"top"}},[l("el-switch",{attrs:{"active-color":"#00C292","inactive-color":"#E46A76","active-value":"100","inactive-value":"0"},model:{value:e.value5,callback:function(t){e.value5=t},expression:"value5"}})],1)],1),l("el-collapse",[l("el-collapse-item",{attrs:{title:"查看代码",name:"2"}},[l("div",{staticStyle:{"white-space":"pre-wrap"}},[e._v(e._s(e.extendValue))])])],1)],1),l("el-card",{staticStyle:{"margin-bottom":"50px"}},[l("div",{attrs:{slot:"header"},slot:"header"},[l("span",[e._v("禁用")])]),l("el-row",[l("el-switch",{staticStyle:{"margin-right":"20px"},attrs:{"active-color":"#3963bc",disabled:""},model:{value:e.value6,callback:function(t){e.value6=t},expression:"value6"}}),l("el-switch",{attrs:{"active-color":"#3963bc",disabled:""},model:{value:e.value7,callback:function(t){e.value7=t},expression:"value7"}})],1),l("el-collapse",[l("el-collapse-item",{attrs:{title:"查看代码",name:"2"}},[l("div",{staticStyle:{"white-space":"pre-wrap"}},[e._v(e._s(e.forbidden))])])],1)],1)],1)])},i=[],c={data:function(){return{value1:!0,value2:!0,value3:!0,value4:100,value5:!0,value6:!0,value7:!1,base:'     \n          <el-switch v-model="value2" active-color="#3963bc">\n          </el-switch>\n          <el-switch v-model="value1" active-color="#00C292" inactive-color="#E46A76">\n          </el-switch>',withText:'\n          <el-switch\n            v-model="value3"\n            active-color="#00C292"\n            inactive-color="#E46A76"\n            active-text="按月付费"\n            inactive-text="按年付费">\n          </el-switch>',extendValue:'\n          <el-tooltip :content="\'Switch value: \' + value4" placement="top">\n            <el-switch\n              v-model="value5"\n              active-color="#00C292"\n              inactive-color="#E46A76"\n              active-value="100"\n              inactive-value="0">\n            </el-switch>\n          </el-tooltip>',forbidden:'\n          <el-switch v-model="value6" active-color="#3963bc" disabled>\n          </el-switch>'}},components:{}},o=c,s=(l("b5ac"),l("2877")),n=Object(s["a"])(o,a,i,!1,null,"af2d3694",null);t["default"]=n.exports},b5ac:function(e,t,l){"use strict";l("c7a9")},c7a9:function(e,t,l){}}]);