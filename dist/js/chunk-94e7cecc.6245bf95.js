(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-94e7cecc"],{"258e":function(e,a,t){"use strict";t.r(a);var l=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"lin-container"},[t("div",{staticClass:"lin-title"},[e._v("Tabs 标签页")]),t("div",{staticClass:"lin-wrap-ui"},[t("el-card",{staticStyle:{"margin-bottom":"50px"}},[t("div",{attrs:{slot:"header"},slot:"header"},[t("span",[e._v("基础用法")])]),t("el-row",[t("el-tabs",{on:{"tab-click":e.handleClick},model:{value:e.activeName,callback:function(a){e.activeName=a},expression:"activeName"}},[t("el-tab-pane",{attrs:{label:"用户管理",name:"first"}},[e._v("用户管理")]),t("el-tab-pane",{attrs:{label:"配置管理",name:"second"}},[e._v("配置管理")]),t("el-tab-pane",{attrs:{label:"角色管理",name:"third"}},[e._v("角色管理")]),t("el-tab-pane",{attrs:{label:"定时任务补偿",name:"fourth"}},[e._v("定时任务补偿")])],1)],1),t("el-collapse",[t("el-collapse-item",{attrs:{title:"查看代码",name:"2"}},[t("div",{staticStyle:{"white-space":"pre-wrap"}},[e._v(e._s(e.base))])])],1)],1),t("el-card",{staticStyle:{"margin-bottom":"50px"}},[t("div",{attrs:{slot:"header"},slot:"header"},[t("span",[e._v("选项卡样式")])]),t("el-row",[t("el-tabs",{attrs:{type:"card"},on:{"tab-click":e.handleClick},model:{value:e.activeName,callback:function(a){e.activeName=a},expression:"activeName"}},[t("el-tab-pane",{attrs:{label:"用户管理",name:"first"}},[e._v("用户管理")]),t("el-tab-pane",{attrs:{label:"配置管理",name:"second"}},[e._v("配置管理")]),t("el-tab-pane",{attrs:{label:"角色管理",name:"third"}},[e._v("角色管理")]),t("el-tab-pane",{attrs:{label:"定时任务补偿",name:"fourth"}},[e._v("定时任务补偿")])],1)],1),t("el-collapse",[t("el-collapse-item",{attrs:{title:"查看代码",name:"2"}},[t("div",{staticStyle:{"white-space":"pre-wrap"}},[e._v(e._s(e.tabs))])])],1)],1),t("el-card",{staticStyle:{"margin-bottom":"50px"}},[t("div",{attrs:{slot:"header"},slot:"header"},[t("span",[e._v("卡片化")])]),t("el-row",[t("el-tabs",{attrs:{type:"border-card"}},[t("el-tab-pane",{attrs:{label:"用户管理"}},[e._v("用户管理")]),t("el-tab-pane",{attrs:{label:"配置管理"}},[e._v("配置管理")]),t("el-tab-pane",{attrs:{label:"角色管理"}},[e._v("角色管理")]),t("el-tab-pane",{attrs:{label:"定时任务补偿"}},[e._v("定时任务补偿")])],1)],1),t("el-collapse",[t("el-collapse-item",{attrs:{title:"查看代码",name:"2"}},[t("div",{staticStyle:{"white-space":"pre-wrap"}},[e._v(e._s(e.card))])])],1)],1),t("el-card",{staticStyle:{"margin-bottom":"50px"}},[t("div",{attrs:{slot:"header"},slot:"header"},[t("span",[e._v("位置")])]),t("el-radio-group",{staticStyle:{"margin-bottom":"30px"},model:{value:e.tabPosition,callback:function(a){e.tabPosition=a},expression:"tabPosition"}},[t("el-radio-button",{attrs:{label:"top"}},[e._v("top")]),t("el-radio-button",{attrs:{label:"right"}},[e._v("right")]),t("el-radio-button",{attrs:{label:"bottom"}},[e._v("bottom")]),t("el-radio-button",{attrs:{label:"left"}},[e._v("left")])],1),t("el-tabs",{staticStyle:{height:"200px"},attrs:{"tab-position":e.tabPosition}},[t("el-tab-pane",{attrs:{label:"用户管理"}},[e._v("用户管理")]),t("el-tab-pane",{attrs:{label:"配置管理"}},[e._v("配置管理")]),t("el-tab-pane",{attrs:{label:"角色管理"}},[e._v("角色管理")]),t("el-tab-pane",{attrs:{label:"定时任务补偿"}},[e._v("定时任务补偿")])],1),t("el-collapse",[t("el-collapse-item",{attrs:{title:"查看代码",name:"2"}},[t("div",{staticStyle:{"white-space":"pre-wrap"}},[e._v(e._s(e.position))])])],1)],1),t("el-card",{staticStyle:{"margin-bottom":"50px"}},[t("div",{attrs:{slot:"header"},slot:"header"},[t("span",[e._v("自定义")])]),t("el-tabs",{attrs:{type:"border-card"}},[t("el-tab-pane",[t("span",{attrs:{slot:"label"},slot:"label"},[t("i",{staticClass:"el-icon-date"}),e._v(" 我的行程 ")]),e._v(" 我的行程\n        ")]),t("el-tab-pane",{attrs:{label:"消息中心"}},[e._v("消息中心")]),t("el-tab-pane",{attrs:{label:"角色管理"}},[e._v("角色管理")]),t("el-tab-pane",{attrs:{label:"定时任务补偿"}},[e._v("定时任务补偿")])],1),t("el-collapse",[t("el-collapse-item",{attrs:{title:"查看代码",name:"2"}},[t("div",{staticStyle:{"white-space":"pre-wrap"}},[e._v(e._s(e.define))])])],1)],1)],1)])},n=[],b={data:function(){return{activeName:"second",tabPosition:"left",base:'     \n          <el-tabs v-model="activeName" @tab-click="handleClick">\n            <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>\n            <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>\n            <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>\n            <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>\n          </el-tabs>',tabs:'\n           <el-tabs v-model="activeName" type="card" @tab-click="handleClick">\n            <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>\n            <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>\n            <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>\n            <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>\n          </el-tabs>',card:'\n          <el-tabs type="border-card">\n            <el-tab-pane label="用户管理">用户管理</el-tab-pane>\n            <el-tab-pane label="配置管理">配置管理</el-tab-pane>\n            <el-tab-pane label="角色管理">角色管理</el-tab-pane>\n            <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>\n          </el-tabs>',position:'\n          <el-radio-group v-model="tabPosition" style="margin-bottom: 30px;">\n            <el-radio-button label="top">top</el-radio-button>\n            <el-radio-button label="right">right</el-radio-button>\n            <el-radio-button label="bottom">bottom</el-radio-button>\n            <el-radio-button label="left">left</el-radio-button>\n          </el-radio-group>\n\n          <el-tabs :tab-position="tabPosition" style="height: 200px;">\n            <el-tab-pane label="用户管理">用户管理</el-tab-pane>\n            <el-tab-pane label="配置管理">配置管理</el-tab-pane>\n            <el-tab-pane label="角色管理">角色管理</el-tab-pane>\n            <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>\n          </el-tabs>',define:'\n          <el-tabs type="border-card">\n            <el-tab-pane>\n              <span slot="label"><i class="el-icon-date"></i> 我的行程</span>\n              我的行程\n            </el-tab-pane>\n            <el-tab-pane label="消息中心">消息中心</el-tab-pane>\n            <el-tab-pane label="角色管理">角色管理</el-tab-pane>\n            <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>\n          </el-tabs>\n      '}},components:{},methods:{handleClick:function(e,a){console.log(e,a)}}},s=b,o=(t("fdce"),t("2877")),i=Object(o["a"])(s,l,n,!1,null,"0a0ce074",null);a["default"]=i.exports},ed46:function(e,a,t){},fdce:function(e,a,t){"use strict";t("ed46")}}]);