(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-12e835e0","chunk-ae63b0c2","chunk-2d0bdfa6","chunk-2d228ea1","chunk-2d22453f"],{"07a6":function(e,t,a){},"2dfd":function(e,t,a){"use strict";a.r(t);var n={REMOVE:0,UNPAID:1,PAID:2,DELIVERED:3,PAID_BUT_OUT_OF:4,HANDLED_OUT_OF:5,CANCEL:6,SUREDELIVERY:7,COMMENT:8,REFUND:9,REFUNDSUCCESS:91,REFUNDFAIL:90,RETURNREFUND:10,RETURNREFUNDSUCCESS:101,RETURNREFUNDFAIL:100};t["default"]=n},"418b":function(e,t,a){},"5fe3":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("div",{staticClass:"title"},[e._v("C端用户详情 "),a("span",{staticClass:"back",on:{click:function(t){return e.back(!1)}}},[a("i",{staticClass:"iconfont icon-fanhui"}),e._v(" 返回 ")])]),a("div",{staticClass:"wrap"},[a("el-row",[a("el-col",{attrs:{lg:16,md:20,sm:24,xs:24}},[a("el-form",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{"status-icon":"","label-width":"120px"},nativeOn:{submit:function(e){e.preventDefault()}}},[a("el-form-item",{attrs:{label:"昵称",prop:"nickName"}},[a("el-input",{attrs:{size:"medium",disabled:"",placeholder:"昵称"},model:{value:e.form.nickName,callback:function(t){e.$set(e.form,"nickName",t)},expression:"form.nickName"}})],1),a("el-form-item",{attrs:{label:"头像",prop:"avatar_img"}},[a("el-image",{staticStyle:{width:"100px",height:"100px"},attrs:{src:e.form.avatar_img,fit:"contain"}})],1),a("el-form-item",{attrs:{label:"openid",prop:"openid"}},[a("el-input",{attrs:{size:"medium",disabled:"",placeholder:"openid"},model:{value:e.form.openid,callback:function(t){e.$set(e.form,"openid",t)},expression:"form.openid"}})],1),a("el-form-item",{attrs:{label:"地址",prop:"address"}},[a("el-input",{attrs:{size:"medium",disabled:"",placeholder:"地址"},model:{value:e.form.address,callback:function(t){e.$set(e.form,"address",t)},expression:"form.address"}})],1),a("el-form-item",{attrs:{label:"电话",prop:"telephone"}},[a("el-input",{attrs:{size:"medium",disabled:"",placeholder:"电话"},model:{value:e.form.telephone,callback:function(t){e.$set(e.form,"telephone",t)},expression:"form.telephone"}})],1),a("el-form-item",{attrs:{label:"性别",prop:"gender"}},[a("el-input",{attrs:{size:"medium",disabled:"",placeholder:"性别"},model:{value:e.form.gender,callback:function(t){e.$set(e.form,"gender",t)},expression:"form.gender"}})],1)],1)],1)],1),a("el-tabs",{on:{"tab-click":e.handleClick},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"加入购物车产品",name:"first"}},[a("lin-table",{directives:[{name:"loading",rawName:"v-loading",value:e.cartLoading,expression:"cartLoading"}],attrs:{tableColumn:e.cartTableColumn,tableData:e.cartTableData}})],1),a("el-tab-pane",{attrs:{label:"提交的订单",name:"second"}},[a("feiy-table",{directives:[{name:"loading",rawName:"v-loading",value:e.orderLoading,expression:"orderLoading"}],attrs:{tableColumn:e.tableColumn,tableData:e.tableData,pagination:e.pagination,curPage:e.currentPage,operate:e.operate},on:{currentChange:e.currentChange,handleEdit:e.handleEdit},scopedSlots:e._u([{key:"default",fn:function(t){return[t.tag&&"status"==t.prop?a("el-tag",{attrs:{type:e.getStatusVal(t.tag)["type"]}},[e._v(e._s(e.getStatusVal(t.tag)["statusVal"]))]):e._e()]}}])})],1)],1)],1)])},r=[],i=a("a34a"),l=a.n(i),o=a("e053"),s=a("a50d"),c=a("f73d"),u=a("2dfd"),d=a("dae3");function p(e,t,a,n,r,i,l){try{var o=e[i](l),s=o.value}catch(c){return void a(c)}o.done?t(s):Promise.resolve(s).then(n,r)}function h(e){return function(){var t=this,a=arguments;return new Promise(function(n,r){var i=e.apply(t,a);function l(e){p(i,n,r,l,o,"next",e)}function o(e){p(i,n,r,l,o,"throw",e)}l(void 0)})}}var f={name:"UserEdit",props:{editID:Number},components:{feiyTable:c["default"]},data:function(){return{loading:!1,orderLoading:!1,activeName:"first",form:{},cartTableData:[],cartLoading:!1,pagination:{pageTotal:0},currentPage:1,tableData:[],operate:[],tableColumn:[{prop:"id",label:"id",width:100},{prop:"order_no",label:"订单号",width:200},{prop:"total_count",label:"单品数量",width:200},{prop:"total_price",label:"总价格",width:200},{prop:"status",label:"状态",type:"tag",width:200,noRepeat:!0},{prop:"create_time",label:"创建时间"}],cartTableColumn:[{prop:"id",label:"id",width:100},{prop:"img",label:"图片",type:"image",width:220},{prop:"title",label:"sku标题",width:200},{prop:"num",label:"数量",width:200},{prop:"price",label:"单价",width:200},{prop:"total_price",label:"总价格",width:200},{prop:"create_time",label:"创建时间"}]}},created:function(){this.getCuser(),this.getUserAllCart(),this.operate=[{name:"查看",func:"handleEdit",type:"primary"}]},methods:{currentChange:function(e){e<=0||(e-=1,this.currentPage=e+1,this.getUserOrderData(e))},getStatusVal:function(e){return Object(d["getStatusVal"])(e,u["default"])},handleClick:function(e){var t=e.name;t&&(this.activeName=t,"second"==t&&this.tableData.length<=0&&this.getUserOrderData())},handleEdit:function(){},getUserAllCart:function(){var e=h(l.a.mark(function e(){var t;return l.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=[],this.cartLoading=!0,e.prev=2,e.next=5,s["default"].getUserAllCart(this.editID);case 5:t=e.sent,e.next=10;break;case 8:e.prev=8,e.t0=e["catch"](2);case 10:this.cartLoading=!1,this.cartTableData=t;case 12:case"end":return e.stop()}},e,this,[[2,8]])}));function t(){return e.apply(this,arguments)}return t}(),getUserOrderData:function(){var e=h(l.a.mark(function e(){var t,a,n=arguments;return l.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:0,a=[],e.prev=2,this.orderLoading=!0,e.next=6,s["default"].getUserOrderData(t,this.editID,6);case 6:a=e.sent,this.orderLoading=!1,this.pagination.pageTotal||(this.pagination={pageTotal:a.total_nums}),a=a.collection,e.next=17;break;case 12:e.prev=12,e.t0=e["catch"](2),a=[],this.isSearch&&this.$message.error("未搜索到匹配的结果"),this.orderLoading=!1;case 17:this.tableData=a;case 18:case"end":return e.stop()}},e,this,[[2,12]])}));function t(){return e.apply(this,arguments)}return t}(),getCuser:function(){var e=h(l.a.mark(function e(){var t;return l.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return console.log(this.editID),this.loading=!0,e.next=4,o["default"].getCuser(this.editID);case 4:t=e.sent,this._handleSkuResData(t),this.loading=!1;case 7:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),_handleSkuResData:function(e){e.address=e["province"]+"&"+e["city"]+"&"+e["country"],e.gender=1===e.gender?"男":"女",this.form=e},resetForm:function(e){this.$refs[e].resetFields()},back:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.$emit("close",e)}}},b=f,m=(a("bdaa"),a("2877")),g=Object(m["a"])(b,n,r,!1,null,"13f6b8e2",null);t["default"]=g.exports},bdaa:function(e,t,a){"use strict";a("418b")},dae3:function(e,t,a){"use strict";function n(e,t){var a={statusVal:"",type:""};switch(e){case t["UNPAID"]:a={statusVal:"待支付",type:"danger"};break;case t["PAID"]:a={statusVal:"已支付",type:"success"};break;case t["DELIVERED"]:a={statusVal:"已发货",type:"success"};break;case t["PAID_BUT_OUT_OF"]:a={statusVal:"已支付，但库存不足",type:"success"};break;case t["HANDLED_OUT_OF"]:a={statusVal:"已处理库存不足情况",type:"success"};break;case t["SUREDELIVERY"]:a={statusVal:"已确认收货",type:"success"};break;case t["COMMENT"]:a={statusVal:"已评价",type:"success"};break;case t["REFUND"]:a={statusVal:"退款中",type:"success"};break;case t["REFUNDSUCCESS"]:a={statusVal:"退款成功",type:"success"};break;case t["REFUNDFAIL"]:a={statusVal:"退款失败",type:"success"};break;case t["RETURNREFUND"]:a={statusVal:"退货退款中",type:"success"};break;case t["RETURNREFUNDSUCCESS"]:a={statusVal:"退货退款成功",type:"success"};break;case t["RETURNREFUNDFAIL"]:a={statusVal:"退货退款失败",type:"success"};break;case t["REMOVE"]:a={statusVal:"已删除",type:"success"};break;case t["CANCEL"]:a={statusVal:"已取消",type:"warning"}}return a}a.r(t),a.d(t,"getStatusVal",function(){return n})},e053:function(e,t,a){"use strict";a.r(t);var n=a("a34a"),r=a.n(n),i=a("dfd8"),l=a("f121");function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(a,!0).forEach(function(t){c(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function u(e,t,a,n,r,i,l){try{var o=e[i](l),s=o.value}catch(c){return void a(c)}o.done?t(s):Promise.resolve(s).then(n,r)}function d(e){return function(){var t=this,a=arguments;return new Promise(function(n,r){var i=e.apply(t,a);function l(e){u(i,n,r,l,o,"next",e)}function o(e){u(i,n,r,l,o,"throw",e)}l(void 0)})}}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,t,a){return t&&h(e.prototype,t),a&&h(e,a),e}var b=function(){function e(){p(this,e)}return f(e,[{key:"getCusers",value:function(){var e=d(r.a.mark(function e(){var t,a,n,o,c=arguments;return r.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:0,a=c.length>1&&void 0!==c[1]?c[1]:{},n=c.length>2&&void 0!==c[2]?c[2]:l["default"].pageSize,e.next=5,Object(i["get"])("v1/cuser",s({page:t,count:n},a,{handleError:!0}));case 5:return o=e.sent,e.abrupt("return",o);case 7:case"end":return e.stop()}},e)}));function t(){return e.apply(this,arguments)}return t}()},{key:"getCuser",value:function(){var e=d(r.a.mark(function e(t){var a;return r.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(i["get"])("v1/cuser/".concat(t),{handleError:!0});case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"delCuser",value:function(){var e=d(r.a.mark(function e(t){var a;return r.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(i["_delete"])("v1/cuser",{ids:t});case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()}]),e}();t["default"]=new b},e71c:function(e,t,a){"use strict";a("07a6")},f73d:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"feiy-table"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"el-table-wrap",attrs:{data:e.tableData,id:"out-table'"},on:{"cell-mouse-enter":e.cellMouseEnter,"cell-mouse-leave":e.cellMouseLeave}},[e._l(e.filterTableColumn,function(t){return[t.noRepeat?e._e():a("el-table-column",{key:t.label,attrs:{prop:t.prop,label:t.label,"show-overflow-tooltip":!0,fixed:!!t.fixed&&t.fixed,width:t.width?t.width:""}}),"image"===t.type?a("el-table-column",{key:t.label,attrs:{label:t.label,prop:t.prop,width:t.width},scopedSlots:e._u([{key:"default",fn:function(n){return[n.row[t.prop]?a("el-image",{staticStyle:{width:"50px",height:"50px"},attrs:{src:n.row[t.prop],fit:"cover"}}):a("span",[e._v("暂无图片")])]}}],null,!0)}):e._e(),"tag"===t.type?a("el-table-column",{key:t.label,attrs:{label:t.label,prop:t.prop,width:t.width},scopedSlots:e._u([{key:"default",fn:function(a){return[e._t("default",null,{tag:a.row[t.prop],prop:t.prop})]}}],null,!0)}):e._e(),"edit"===t.type?a("el-table-column",{key:t.label,attrs:{label:t.label,prop:t.prop,width:t.width,"show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(n){return[n.row.editFlag?a("div",{staticClass:"table-edit"},[a("el-input",{attrs:{size:"mini"},model:{value:n.row[t.prop],callback:function(a){e.$set(n.row,t.prop,a)},expression:"scope.row[item.prop]"}}),a("div",{staticClass:"cell-icon-edit"},[a("div",{staticClass:"cell-save",on:{click:function(a){return e.handleCellSave(n.row,n.$index,t.prop)}}},[a("i",{staticClass:"el-icon-check"})]),a("div",{staticClass:"cell-cancel",on:{click:function(a){return e.handleCellCancel(n.row,n.$index,t.prop)}}},[a("i",{staticClass:"el-icon-close"})])])],1):a("div",{staticClass:"table-edit table-edit-start"},[a("div",{staticClass:"content"},[e._v(e._s(n.row[t.prop]))]),a("div",{directives:[{name:"show",rawName:"v-show",value:e.showEdit[n.row.id],expression:"showEdit[scope.row.id]"}],staticClass:"cell-icon",on:{click:function(a){return e.handleCellEdit(n.row,n.$index,t.prop)}}},[a("i",{staticClass:"el-icon-edit"})])])]}}],null,!0)}):e._e(),"radio"===t.type?a("el-table-column",{key:t.label,attrs:{label:t.label,prop:t.prop,width:t.width},scopedSlots:e._u([{key:"default",fn:function(n){return[a("el-switch",{attrs:{"active-color":"#3963bc"},on:{change:function(t){return e.handleRecommend(t,n.row)}},model:{value:n.row[t.prop],callback:function(a){e.$set(n.row,t.prop,a)},expression:"scope.row[item.prop]"}})]}}],null,!0)}):e._e(),"rate"===t.type?a("el-table-column",{attrs:{label:t.label,prop:t.prop,width:t.width},scopedSlots:e._u([{key:"default",fn:function(n){return[a("el-rate",{attrs:{colors:t.color,disabled:t.disabled,max:t.max},on:{change:function(a){return e.rateChange(t.prop,n.row)}},model:{value:n.row[t.prop],callback:function(a){e.$set(n.row,t.prop,a)},expression:"scope.row[item.prop]"}}),t.reset?a("div",{staticClass:"reset-rate",staticStyle:{"font-size":"12px","margin-left":"10px",cursor:"pointer"},on:{click:function(a){return e.resetRate(t.prop,n.row)}}},[e._v("重置")]):e._e()]}}],null,!0)}):e._e()]}),e.operate.length>0?a("el-table-column",{attrs:{label:"操作",fixed:"right",width:e.operateStyle.width},scopedSlots:e._u([{key:"default",fn:function(t){return e.operate.icon?e._l(e.operate,function(n,r){return a("el-button",{key:r,attrs:{type:n.type,plain:"",size:"mini"},nativeOn:{click:function(a){return a.preventDefault(),a.stopPropagation(),e.buttonMethods(n.func,t.$index,t.row)}}},[e._v(e._s(n.name))])}):void 0}}],null,!0)}):e._e()],2),e.pagination?a("el-pagination",{staticClass:"pagination",attrs:{background:"",layout:"prev, pager, next","page-size":e.pagination.pageSize?e.pagination.pageSize:10,total:e.pagination.pageTotal?e.pagination.pageTotal:null},on:{"current-change":e.currentChange}}):e._e()],1)},r=[],i={name:"feiy-table",props:{tableColumn:{type:Array,default:function(){return[]}},tableData:{type:Array,default:function(){return[]}},operate:{type:Array,default:function(){return[]}},operateStyle:{type:Object,default:function(){return{width:250}}},customColumn:{type:Array,default:function(){return[]}},pagination:{type:[Object,Boolean],default:!1},loading:{type:Boolean,default:!1}},data:function(){return{filterTableColumn:[],currentPage:1,currentData:[],selectedTableData:[],showEdit:{},cellIndex:-1,tempEditVal:{}}},created:function(){},watch:{customColumn:{handler:function(e){e.length>1&&(this.filterTableColumn=this.tableColumn.filter(function(t){return e.indexOf(t.label)>-1}))},deep:!0},tableData:{handler:function(){var e=this;this.initMouseEvent(),this.pagination&&this.pagination.pageSize?this.currentData=this.tableData.filter(function(t,a){return a<e.pagination.pageSize}):this.currentData=this.tableData},deep:!0,immediate:!0},tableColumn:{handler:function(e){var t=this;this.customColumn.length>1?this.filterTableColumn=this.tableColumn.filter(function(e){return t.customColumn.indexOf(e.label)>-1}):this.filterTableColumn=this.tableColumn},deep:!0,immediate:!0}},methods:{buttonMethods:function(e,t,a){var n=this,r=this.$options.methods;console.log(r),r[e](n,t,a)},handleEdit:function(e,t,a){e.$emit("handleEdit",{index:t,row:a})},handleDetail:function(e,t,a){e.$emit("handleDetail",{index:t,row:a})},handleStorage:function(e,t,a){e.$emit("handleStorage",{index:t,row:a})},resetRate:function(e,t){t[e]=0,this.rateChange(e,t)},rateChange:function(e,t){var a=t[e],n=t["id"];this.$emit("handleRate",{val:a,id:n})},handleDelete:function(e,t,a){e.$emit("handleDelete",{index:t,row:a})},handleSonCate:function(e,t,a){e.$emit("handleSonCate",{index:t,row:a})},handleCellEdit:function(e,t,a){e.editFlag=!0,this.cellIndex=t,this.tempEditVal[a]=e[a]},handleCellCancel:function(e,t,a){e.editFlag=!1,e[a]=this.tempEditVal[a]},handleCellSave:function(e,t,a){e.editFlag=!1,this.tempEditVal[a]=e[a],this.$emit("handleCellSave",{row:e,prop:a})},handleRecommend:function(e,t){this.$emit("handleRecommend",{val:e,row:t})},cellMouseEnter:function(e){this.showEdit[e.id]||this.$set(this.showEdit,e.id,!0)},cellMouseLeave:function(e){this.showEdit[e.id]&&this.$set(this.showEdit,e.id,!1)},initMouseEvent:function(){for(var e in this.showEdit)this.showEdit[e]&&this.$set(this.showEdit,e,!1)},currentChange:function(e){var t=this,a=[];this.oldVal=[],this.currentPage=e,this.selectedTableData=JSON.parse(sessionStorage.getItem("selectedTableData")),this.currentData=this.tableData.filter(function(e,a){return a>=(t.currentPage-1)*t.pagination.pageSize&&a<t.currentPage*t.pagination.pageSize}),this.$emit("currentChange",e),this.selectedTableData.forEach(function(e){for(var n=0;n<t.currentData.length;n++)t.currentData[n].key===e.key&&(t.oldVal.push(t.currentData[n]),a.push(t.currentData[n]))}),this.$nextTick(function(){t.toggleSelection instanceof Function&&t.toggleSelection(a)}),this.currentIndex=(this.currentPage-1)*this.pagination.pageSize+1}}},l=i,o=(a("e71c"),a("2877")),s=Object(o["a"])(l,n,r,!1,null,"35ec54b2",null);t["default"]=s.exports}}]);