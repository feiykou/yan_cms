(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d44efb3","chunk-2ece9681","chunk-482474ea"],{"11ef":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mg-order"},["list"===e.redirectType?a("div",[a("sticky-top",[a("div",{staticClass:"order-header"},[a("div",{staticClass:"header-left"},[a("p",{staticClass:"title"},[e._v("用户列表")])]),a("div",{directives:[{name:"auth",rawName:"v-auth",value:"搜索日志",expression:"'搜索日志'"}],staticClass:"header-right"},[a("lin-search",{ref:"searchKeyword",attrs:{placeholder:"姓名"},on:{btn:e.onQueryChange}}),a("el-button",{staticClass:"backAll",attrs:{type:"primary",plain:"",size:"mini"},on:{click:e.backInit}},[e._v("返回浏览")])],1)]),e.keyword?e._e():a("el-divider")],1),a("div",{staticClass:"container"},[a("lin-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{tableColumn:e.tableColumn,tableData:e.tableData,operate:e.operate,pagination:e.pagination,curPage:e.currentPage},on:{currentChange:e.currentChange,handleEdit:e.handleEdit,handleDelete:e.handleDelete}})],1),a("div",{staticClass:"chart-container"},[a("div",{staticClass:"chart-title"},[e._v("订单统计数据")]),a("div",{staticClass:"chart-wrap"},[a("columnar-analysis",{staticClass:"analysis"}),a("broken-analysis",{staticClass:"analysis"})],1)])],1):"edit"===e.redirectType?a("user-edit",{attrs:{editID:e.editID},on:{close:e.closePage}}):e._e()],1)},i=[],r=a("a34a"),s=a.n(r),c=a("8eab"),l=a("e053"),o=a("5fe3"),u=a("e546"),d=a("239e");function h(e,t,a,n,i,r,s){try{var c=e[r](s),l=c.value}catch(o){return void a(o)}c.done?t(l):Promise.resolve(l).then(n,i)}function p(e){return function(){var t=this,a=arguments;return new Promise(function(n,i){var r=e.apply(t,a);function s(e){h(r,n,i,s,c,"next",e)}function c(e){h(r,n,i,s,c,"throw",e)}s(void 0)})}}var f={name:"UserList",components:{LinSearch:c["default"],UserEdit:o["default"],brokenAnalysis:u["default"],columnarAnalysis:d["default"]},data:function(){return{loading:!1,tableColumn:[{prop:"id",label:"id",width:100},{prop:"avatar_img",label:"头像",type:"image",width:200},{prop:"openid",label:"openid",width:300},{prop:"nickName",label:"用户名",width:250},{prop:"telephone",label:"联系方式",width:200},{prop:"create_time",label:"注册时间"}],tableData:[],operate:[],pagination:{pageTotal:0},currentPage:1,redirectType:"list",editID:1,keyword:null,searchKeyword:"",searchDate:[],searchParams:{},isSearch:!1}},created:function(){this.operate=[{name:"查看",func:"handleEdit",type:"primary"},{name:"删除",func:"handleDelete",type:"danger",auth:"删除图书"}],this.getCusers()},methods:{getCusers:function(){var e=p(s.a.mark(function e(){var t,a,n=arguments;return s.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:0,a=[],e.prev=2,this.loading=!0,e.next=6,l["default"].getCusers(t,this.searchParams);case 6:a=e.sent,this.loading=!1,this.pagination.pageTotal||(this.pagination={pageTotal:a.total_nums}),a=a.collection,e.next=17;break;case 12:e.prev=12,e.t0=e["catch"](2),a=[],this.isSearch&&this.$message.error("未搜索到匹配的结果"),this.loading=!1;case 17:this.tableData=a;case 18:case"end":return e.stop()}},e,this,[[2,12]])}));function t(){return e.apply(this,arguments)}return t}(),searchParam:function(){var e={};this.searchKeyword&&(e["nickName"]=this.searchKeyword),this.searchParams=e,this.isSearch=!0},onQueryChange:function(e){this.searchKeyword=e.trim(),this.searchParam(),this.getCusers()},backInit:function(){var e=p(s.a.mark(function e(){return s.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.searchKeyword="",this.searchParams={},this.$refs.searchKeyword.clear(),this.isSearch=!1,e.next=6,this.getCusers();case 6:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),currentChange:function(e){e<=0||(e-=1,this.currentPage=e+1,this.getCusers(e))},handleEdit:function(e){var t=e.row;this.editID=t.id,this.redirectType="edit"},handleDelete:function(e){var t=this;this.$confirm("此操作将永久删除该订单, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(p(s.a.mark(function a(){var n,i;return s.a.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return n=[e.row.id],t.loading=!0,a.next=4,l["default"].delCuser(n);case 4:i=a.sent,t.loading=!1,0===i.error_code&&(t.getCusers(t.currentPage-1),t.$message({type:"success",message:"".concat(i.msg)}));case 7:case"end":return a.stop()}},a)})))},closePage:function(e){this.redirectType="list",e&&this.getCusers()}}},v=f,m=(a("e5da"),a("cba8")),g=Object(m["a"])(v,n,i,!1,null,"fba491bc",null);t["default"]=g.exports},"239e":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"title"},[e._v("仅一周用户新增人数")]),a("v-chart",{attrs:{forceFit:!0,height:400,scale:e.params.scale,padding:e.params.padding}},[a("v-tooltip",{attrs:{shared:!0}}),a("v-view",{attrs:{data:e.data}},[a("v-axis",{attrs:{dataKey:"date",label:e.params.label,tickLine:e.params.tickLine}}),a("v-axis",{attrs:{dataKey:"count",label:e.params.label,title:e.params.title}}),a("v-interval",{attrs:{position:"date*count",opacity:1}})],1)],1)],1)},i=[],r=a("a34a"),s=a.n(r),c=a("306b"),l=a("a50d");function o(e,t,a,n,i,r,s){try{var c=e[r](s),l=c.value}catch(o){return void a(o)}c.done?t(l):Promise.resolve(l).then(n,i)}function u(e){return function(){var t=this,a=arguments;return new Promise(function(n,i){var r=e.apply(t,a);function s(e){o(r,n,i,s,c,"next",e)}function c(e){o(r,n,i,s,c,"throw",e)}s(void 0)})}}var d=a("7104"),h={data:function(){return{data:[],dv:{},params:{scale:{},label:{},tickLine:{},title:{},style:{},guideStyle:{},pos:["min","min"],padding:[20,20,50,60]}}},created:function(){this.getStatistics()},methods:{createData:function(e){var t=new d;this.data=e;var a=t.createView().source(e);a.transform({type:"map",callback:function(e){return e.date=parseInt(e.date),e}}).transform({type:"regression",method:"polynomial",fields:["date","count"],bandwidth:.1,as:["date","count"]}),this.dv=a,this.setData()},setData:function(){this.params={guideStyle:{fill:"#8c8c8c",fontSize:14,fontWeight:300},style:{stroke:"#969696",lineDash:[3,3]},title:{offset:50},tickLine:{alignWithLabel:!1,length:0},label:{textStyle:{fill:"#aaaaaa"}},scale:[{dataKey:"count",alias:"数量（单）"},{dataKey:"date",range:[0,1],alias:"星期"}]}},getStatistics:function(){var e=u(s.a.mark(function e(){var t,a;return s.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=[],e.prev=1,this.loading=!0,a=c["default"].getDateRange(new Date,6,!0),e.next=6,l["default"].getUserBaseStatistics(a[0],a[1],"day");case 6:t=e.sent,console.log(t),t.forEach(function(e){e["date"]=c["default"].getWeeksByDay(e["date"])}),this.createData(t),e.next=16;break;case 12:e.prev=12,e.t0=e["catch"](1),t=[],this.loading=!1;case 16:this.data=t;case 17:case"end":return e.stop()}},e,this,[[1,12]])}));function t(){return e.apply(this,arguments)}return t}()}},p=h,f=(a("23e7"),a("cba8")),v=Object(f["a"])(p,n,i,!1,null,"4dc0beee",null);t["default"]=v.exports},"23e7":function(e,t,a){"use strict";a("ee57")},"33e8":function(e,t,a){},"69c6":function(e,t,a){"use strict";a("d0f1")},"8eab":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"lin-search"},[a("el-select",{staticClass:"el-select",attrs:{size:"medium",filterable:"",placeholder:"请选择客户等级"},on:{change:e.selEvent},model:{value:e.curSel,callback:function(t){e.curSel=t},expression:"curSel"}},[e._l(e.selData,function(t,n){return[a("el-option",{key:t,attrs:{value:n,label:t}},[a("span",[e._v(e._s(t))])])]})],2),a("el-input",{staticClass:"input-with-select",attrs:{size:"medium",placeholder:e.placeholder,clearable:""},model:{value:e.keyword,callback:function(t){e.keyword=t},expression:"keyword"}},[a("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:e.searchBtn},slot:"append"})],1)],1)},i=[],r=a("306b"),s={props:{placeholder:{type:String,default:"请输入内容"},selData:{type:Array,default:["客户名","责任人"]}},data:function(){return{keyword:"",curSel:0}},created:function(){var e=this;this.$watch("keyword",r["default"].debounce(function(t){e.$emit("query",t)},1e3))},methods:{clear:function(){this.keyword="",this.$emit("close")},selEvent:function(){var e=this.curSel;this.$emit("sel",e)},searchBtn:function(){var e=this.keyword;this.$emit("btn",e)}}},c=s,l=(a("69c6"),a("cba8")),o=Object(l["a"])(c,n,i,!1,null,"d0682418",null);t["default"]=o.exports},b0f1:function(e,t,a){"use strict";a("da22")},d0f1:function(e,t,a){},da22:function(e,t,a){},e546:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"title"},[e._v("仅一月用户新增人数")]),a("v-chart",{attrs:{forceFit:!0,height:e.params.height,data:e.data,scale:e.params.scale}},[a("v-tooltip"),a("v-axis"),a("v-legend"),a("v-line",{attrs:{position:"date*count"}}),a("v-point",{attrs:{position:"date*count",shape:"circle"}})],1)],1)},i=[],r=a("a34a"),s=a.n(r),c=a("a50d"),l=a("306b");function o(e,t,a,n,i,r,s){try{var c=e[r](s),l=c.value}catch(o){return void a(o)}c.done?t(l):Promise.resolve(l).then(n,i)}function u(e){return function(){var t=this,a=arguments;return new Promise(function(n,i){var r=e.apply(t,a);function s(e){o(r,n,i,s,c,"next",e)}function c(e){o(r,n,i,s,c,"throw",e)}s(void 0)})}}var d={data:function(){return{data:[],params:{scale:[{dataKey:"date",range:[0,1],type:"timeCat"},{dataKey:"count",alias:"注册数量",min:0}],height:400}}},created:function(){this.getStatistics()},methods:{getStatistics:function(){var e=u(s.a.mark(function e(){var t,a;return s.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=[],a=l["default"].getDateRange(new Date,30,!0),e.prev=2,this.loading=!0,e.next=6,c["default"].getUserBaseStatistics(a[0],a[1],"day");case 6:t=e.sent,this.loading=!1,e.next=14;break;case 10:e.prev=10,e.t0=e["catch"](2),t=[],this.loading=!1;case 14:this.data=t;case 15:case"end":return e.stop()}},e,this,[[2,10]])}));function t(){return e.apply(this,arguments)}return t}()}},h=d,p=(a("b0f1"),a("cba8")),f=Object(p["a"])(h,n,i,!1,null,"dc73922a",null);t["default"]=f.exports},e5da:function(e,t,a){"use strict";a("33e8")},ee57:function(e,t,a){}}]);