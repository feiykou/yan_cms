(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-75ec6463"],{c259:function(e,a,n){"use strict";n.r(a);var t=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"lin-container"},[n("div",{staticClass:"lin-title"},[e._v("Loading 加载")]),n("div",{staticClass:"lin-wrap-ui loadingDemo"},[n("el-card",{staticStyle:{"margin-bottom":"50px"}},[n("div",{attrs:{slot:"header"},slot:"header"},[n("span",[e._v("基础用法")])]),n("el-row",[n("div",[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:e.tableData}},[n("el-table-column",{attrs:{prop:"date",label:"日期",width:"180"}}),n("el-table-column",{attrs:{prop:"name",label:"姓名",width:"180"}}),n("el-table-column",{attrs:{prop:"address",label:"地址"}})],1)],1)]),n("el-collapse",[n("el-collapse-item",{attrs:{title:"查看代码",name:"2"}},[n("div",{staticStyle:{"white-space":"pre-wrap"}},[e._v(e._s(e.base))])])],1)],1),n("el-card",{staticStyle:{"margin-bottom":"50px"}},[n("div",{attrs:{slot:"header"},slot:"header"},[n("span",[e._v("不同状态")])]),n("el-row",[n("div",[[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading1,expression:"loading1"}],staticStyle:{width:"100%"},attrs:{"element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.8)",data:e.tableData1}},[n("el-table-column",{attrs:{prop:"date",label:"日期",width:"180"}}),n("el-table-column",{attrs:{prop:"name",label:"姓名",width:"180"}}),n("el-table-column",{attrs:{prop:"address",label:"地址"}})],1)]],2)]),n("el-collapse",{staticClass:"test",staticStyle:{color:"red"}},[n("el-collapse-item",{attrs:{title:"查看代码",name:"2"}},[n("div",{staticStyle:{"white-space":"pre-wrap"}},[e._v(e._s(e.diy))])])],1)],1)],1)])},l=[],d={name:"LinCmsUiButton",components:{},data:function(){return{tableData:[{date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"}],loading:!0,tableData1:[{date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"}],loading1:!0,base:'<template>\n  <el-table\n    v-loading="loading"\n    element-loading-text="拼命加载中"\n    element-loading-spinner="el-icon-loading"\n    element-loading-background="rgba(0, 0, 0, 0.8)"\n    :data="tableData"\n    style="width: 100%">\n    <el-table-column\n      prop="date"\n      label="日期"\n      width="180">\n    </el-table-column>\n    <el-table-column\n      prop="name"\n      label="姓名"\n      width="180">\n    </el-table-column>\n    <el-table-column\n      prop="address"\n      label="地址">\n    </el-table-column>\n  </el-table>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        tableData: [{\n          date: \'2016-05-03\',\n          name: \'王小虎\',\n          address: \'上海市普陀区金沙江路 1518 弄\'\n        }, {\n          date: \'2016-05-02\',\n          name: \'王小虎\',\n          address: \'上海市普陀区金沙江路 1518 弄\'\n        }, {\n          date: \'2016-05-04\',\n          name: \'王小虎\',\n          address: \'上海市普陀区金沙江路 1518 弄\'\n        }],\n        loading: true\n      };\n    }\n  };\n<\/script>',diy:'\n    <template>\n  <el-table\n    v-loading="loading"\n    element-loading-text="拼命加载中"\n    element-loading-spinner="el-icon-loading"\n    element-loading-background="rgba(0, 0, 0, 0.8)"\n    :data="tableData"\n    style="width: 100%">\n    <el-table-column\n      prop="date"\n      label="日期"\n      width="180">\n    </el-table-column>\n    <el-table-column\n      prop="name"\n      label="姓名"\n      width="180">\n    </el-table-column>\n    <el-table-column\n      prop="address"\n      label="地址">\n    </el-table-column>\n  </el-table>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        tableData: [{\n          date: \'2016-05-03\',\n          name: \'王小虎\',\n          address: \'上海市普陀区金沙江路 1518 弄\'\n        }, {\n          date: \'2016-05-02\',\n          name: \'王小虎\',\n          address: \'上海市普陀区金沙江路 1518 弄\'\n        }, {\n          date: \'2016-05-04\',\n          name: \'王小虎\',\n          address: \'上海市普陀区金沙江路 1518 弄\'\n        }],\n        loading: true\n      };\n    }\n  };\n<\/script>'}},computed:{},watch:{},mounted:function(){this.init()},methods:{init:function(){}}},i=d,s=(n("ec6d"),n("cba8")),o=Object(s["a"])(i,t,l,!1,null,"592f4c70",null);a["default"]=o.exports},def2:function(e,a,n){},ec6d:function(e,a,n){"use strict";n("def2")}}]);