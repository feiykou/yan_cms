(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-034fbda3","chunk-1b2f06b2","chunk-9622a504","chunk-58187b67","chunk-2d21a460","chunk-2d0c5794"],{"1d01":function(e,t,r){"use strict";r("e96f")},"3b2f":function(e,t,r){},"3ef2":function(e,t,r){"use strict";r.r(t);var n=r("a34a"),a=r.n(n),o=r("dfd8"),i=r("f121");function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(r,!0).forEach(function(t){u(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t,r,n,a,o,i){try{var s=e[o](i),l=s.value}catch(u){return void r(u)}s.done?t(l):Promise.resolve(l).then(n,a)}function m(e){return function(){var t=this,r=arguments;return new Promise(function(n,a){var o=e.apply(t,r);function i(e){c(o,n,a,i,s,"next",e)}function s(e){c(o,n,a,i,s,"throw",e)}i(void 0)})}}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function d(e,t,r){return t&&f(e.prototype,t),r&&f(e,r),e}var v=function(){function e(){p(this,e)}return d(e,[{key:"getCustomers",value:function(){var e=m(a.a.mark(function e(){var t,r,n,s,u,c=arguments;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:0,r=c.length>1&&void 0!==c[1]?c[1]:{},n=c.length>2&&void 0!==c[2]?c[2]:i["default"].pageSize,s=l({page:t,count:n},r,{handleError:!0}),e.next=6,Object(o["get"])("v1/customer",s);case 6:return u=e.sent,e.abrupt("return",u);case 8:case"end":return e.stop()}},e)}));function t(){return e.apply(this,arguments)}return t}()},{key:"getAllCustomers",value:function(){var e=m(a.a.mark(function e(){var t,r,n,s,u=arguments;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=u.length>0&&void 0!==u[0]?u[0]:0,r=u.length>1&&void 0!==u[1]?u[1]:{},n=u.length>2&&void 0!==u[2]?u[2]:i["default"].pageSize,e.next=5,Object(o["get"])("v1/customer/all",l({page:t,count:n},r,{handleError:!0}));case 5:return s=e.sent,e.abrupt("return",s);case 7:case"end":return e.stop()}},e)}));function t(){return e.apply(this,arguments)}return t}()},{key:"updateCustomersEntryPublic",value:function(){var e=m(a.a.mark(function e(){var t,r,n=arguments;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:[],e.next=3,Object(o["put"])("v1/customer/public/release",{ids:t});case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}},e)}));function t(){return e.apply(this,arguments)}return t}()},{key:"getPublicAllCustomers",value:function(){var e=m(a.a.mark(function e(){var t,r,n,s=arguments;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=s.length>0&&void 0!==s[0]?s[0]:0,r=s.length>1&&void 0!==s[1]?s[1]:i["default"].pageSize,e.next=4,Object(o["get"])("v1/customer/public/all",{page:t,count:r,handleError:!0});case 4:return n=e.sent,e.abrupt("return",n);case 6:case"end":return e.stop()}},e)}));function t(){return e.apply(this,arguments)}return t}()},{key:"getPublicSetCustomers",value:function(){var e=m(a.a.mark(function e(t){var r;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(o["put"])("v1/customer/public/set",{cutomer_id:t},{handleError:!0});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"getCustomer",value:function(){var e=m(a.a.mark(function e(t){var r;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(o["get"])("v1/customer/".concat(t),{handleError:!0});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"addCustomer",value:function(){var e=m(a.a.mark(function e(t){var r;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(o["post"])("v1/customer",t,{handleError:!0});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"editCustomer",value:function(){var e=m(a.a.mark(function e(t,r){var n;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(o["put"])("v1/customer/".concat(t),r,{handleError:!0});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}},e)}));function t(t,r){return e.apply(this,arguments)}return t}()},{key:"delCustomer",value:function(){var e=m(a.a.mark(function e(t){var r;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(o["_delete"])("v1/customer",{ids:t});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"updateMainCustomer",value:function(){var e=m(a.a.mark(function e(t){var r;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(o["put"])("v1/customer/main",t,{handleError:!0});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"updateFollowCustomer",value:function(){var e=m(a.a.mark(function e(t){var r;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(o["put"])("v1/customer/follow",t,{handleError:!0});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"updateFollowCustomer",value:function(){var e=m(a.a.mark(function e(t){var r;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(o["put"])("v1/customer/follow",t,{handleError:!0});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()}]),e}();t["default"]=new v},"405b":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("div",{staticClass:"header"},[r("div",{staticClass:"title"},[r("span",[e._v("报价列表")]),r("el-button",{staticClass:"add-banner-item",attrs:{type:"primary",plain:""},on:{click:e.handleAdd}},[e._v("添加报价")])],1)]),r("lin-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{tableColumn:e.tableColumn,tableData:e.tableData,operate:e.operate},on:{handleEdit:e.handleEdit,handleDelete:e.handleDelete,"row-click":e.rowClick}})],1)},a=[],o=r("a34a"),i=r.n(o);r("bb8b");function s(e,t,r,n,a,o,i){try{var s=e[o](i),l=s.value}catch(u){return void r(u)}s.done?t(l):Promise.resolve(l).then(n,a)}function l(e){return function(){var t=this,r=arguments;return new Promise(function(n,a){var o=e.apply(t,r);function i(e){s(o,n,a,i,l,"next",e)}function l(e){s(o,n,a,i,l,"throw",e)}i(void 0)})}}var u={name:"BannerItemList",props:{tableData:Array,cLoading:Boolean},data:function(){return{tableColumn:[{prop:"id",label:"id",width:150},{prop:"img",label:"图片",type:"image",width:220},{prop:"name",label:"名称",width:200},{prop:"key_word",label:"关键字",width:200},{prop:"type",label:"类型"}],operate:[],loading:!1,currentData:[]}},created:function(){this.operate=[{name:"编辑",func:"handleEdit",type:"primary"},{name:"删除",func:"handleDelete",type:"danger",auth:"删除轮播图元素"}]},watch:{cLoading:{handler:function(e){this.loading=e},immediate:!0},tableData:{handler:function(){this.currentData=this.tableData},deep:!0,immediate:!0}},methods:{handleEdit:function(e){this.$emit("handleEdit",e.row.id)},handleAdd:function(){this.$emit("handleAdd")},handleDelete:function(e){var t=this;this.$confirm("此操作将永久删除该图书, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(l(i.a.mark(function r(){var n;return i.a.wrap(function(r){while(1)switch(r.prev=r.next){case 0:return t.loading=!0,r.next=3,banner.delItem(e.row.id);case 3:n=r.sent,0===n.error_code?(t.$emit("handleDel"),t.$message({type:"success",message:"".concat(n.msg)})):t.loading=!1;case 5:case"end":return r.stop()}},r)})))},rowClick:function(){}}},c=u,m=(r("1d01"),r("cba8")),p=Object(m["a"])(c,n,a,!1,null,"0d37dc80",null);t["default"]=p.exports},"40cb":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[e.showItemForm?e._e():[r("div",{staticClass:"title"},[r("span",[e._v("修改客户报表")]),r("span",{staticClass:"back",on:{click:e.back}},[r("i",{staticClass:"iconfont icon-fanhui"}),e._v(" 返回 ")])]),r("el-divider"),r("div",{staticClass:"wrap"},[r("el-row",[r("el-col",{attrs:{lg:16,md:20,sm:24,xs:24}},[r("el-form",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"form",attrs:{model:e.form,"status-icon":"",rules:e.rules,"label-width":"120px"},nativeOn:{submit:function(e){e.preventDefault()}}},[r("el-form-item",{attrs:{label:"名称",prop:"name"}},[r("el-input",{attrs:{size:"medium",placeholder:"请填写名称"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),r("el-form-item",{attrs:{label:"客户",prop:"user_id"}},[r("el-select",{attrs:{size:"medium",filterable:"",placeholder:"请选择客户"},model:{value:e.form.user_id,callback:function(t){e.$set(e.form,"user_id",t)},expression:"form.user_id"}},[e._l(e.customerData,function(t,n){return[r("el-option",{key:n,attrs:{value:t.id,label:t.name}},[r("span",{staticStyle:{color:"#b4b4b4","margin-right":"15px","font-size":"12px"}},[e._v(e._s(n+1))]),r("span",[e._v(e._s(t.name))])])]})],2)],1),r("el-form-item",{attrs:{label:"备注",prop:"remarks"}},[r("el-input",{attrs:{size:"medium",placeholder:"请输入备注"},model:{value:e.form.remarks,callback:function(t){e.$set(e.form,"remarks",t)},expression:"form.remarks"}})],1),e.statusAuth?r("el-form-item",{attrs:{label:"审核状态",prop:"status"}},[r("el-switch",{attrs:{"active-color":"#3963bc"},model:{value:e.form.status,callback:function(t){e.$set(e.form,"status",t)},expression:"form.status"}})],1):e._e(),r("el-form-item",{staticClass:"submit"},[r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("form")}}},[e._v("保 存")]),r("el-button",{on:{click:function(t){return e.resetForm("form")}}},[e._v("重 置")])],1)],1)],1)],1)],1),r("el-divider"),r("report-list",{attrs:{tableData:e.form.items,cLoading:e.cLoading},on:{handleDel:e.handleBannerItemDel,handleAdd:e.handleBannerItemAdd,handleEdit:e.handleBannerItemEdit}})],e.showItemForm&&"add"===e.itemType?r("report-add",{attrs:{bannerId:e.form.id},on:{close:e.handleClose}}):e._e(),e.showItemForm&&"edit"===e.itemType?r("report-edit",{attrs:{editID:e.itemid,bannerId:e.form.id},on:{close:e.handleClose}}):e._e()],2)},a=[],o=r("a34a"),i=r.n(o),s=r("3ef2"),l=r("bb8b"),u=r("4360"),c=r("405b"),m=r("5127"),p=r("44f5");function f(e,t,r,n,a,o,i){try{var s=e[o](i),l=s.value}catch(u){return void r(u)}s.done?t(l):Promise.resolve(l).then(n,a)}function d(e){return function(){var t=this,r=arguments;return new Promise(function(n,a){var o=e.apply(t,r);function i(e){f(o,n,a,i,s,"next",e)}function s(e){f(o,n,a,i,s,"throw",e)}i(void 0)})}}var v={name:"CustomReportEdit",components:{ReportList:c["default"],ReportAdd:m["default"],ReportEdit:p["default"]},data:function(){return{id:0,loading:!1,customerData:[],statusAuth:u["default"].state.auths.includes("获取客户报表审核权限")||u["default"].state.user.isSuper,listData:[],showItemForm:!1,itemType:"",itemid:1,cLoading:!1,form:{user_id:"",name:"",remarks:"",status:!1},rules:{user_id:[{required:!0,message:"请选择用户",trigger:"blur"}],name:[{required:!0,message:"请输入名称",trigger:"blur"}],remarks:[{required:!0,message:"请输入备注",trigger:"blur"}]}}},props:{editID:Number},created:function(){this.id=this.$route.params.id,this.getCustomers(),this.getDetail()},methods:{getCustomers:function(){var e=d(i.a.mark(function e(){var t,r,n=arguments;return i.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:0,e.next=3,s["default"].getCustomers(t,100,1);case 3:if(r=e.sent,!(r.total_nums<=0)){e.next=7;break}return this.customerData=[],e.abrupt("return");case 7:this.customerData=r.collection;case 8:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),getDetail:function(){var e=d(i.a.mark(function e(){var t;return i.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(this.cLoading=this.loading=!0,e.prev=1,t={},!this.statusAuth){e.next=10;break}return e.next=6,l["default"].getDetail(this.editID);case 6:t=e.sent,t["status"]=!!t["status"],e.next=13;break;case 10:return e.next=12,l["default"].getStatusDetail(this.editID);case 12:t=e.sent;case 13:this.form=t,e.next=19;break;case 16:e.prev=16,e.t0=e["catch"](1),this.back(!1);case 19:this.cLoading=this.loading=!1;case 20:case"end":return e.stop()}},e,this,[[1,16]])}));function t(){return e.apply(this,arguments)}return t}(),submitForm:function(e){var t=this;this.$refs[e].validate(function(){var e=d(i.a.mark(function e(r){var n;return i.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!r){e.next=9;break}return t.loading=!0,e.next=4,l["default"].editBanner(t.id,t.form);case 4:n=e.sent,t.loading=!1,0===n.error_code&&(t.$message.success("".concat(n.msg)),t.$emit("editClose")),e.next=11;break;case 9:return t.$message.error("请填写正确的信息"),e.abrupt("return",!1);case 11:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}())},resetForm:function(e){this.$refs[e].resetFields()},back:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.$emit("close",status)},handleClose:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.showItemForm=!1,e&&this.getCustomReport()},handleBannerItemAdd:function(){this.showItemForm=!0,this.itemType="add"},handleBannerItemEdit:function(e){this.showItemForm=!0,this.itemType="edit",this.itemid=e},handleBannerItemDel:function(){this.getCustomReport()}}},b=v,h=(r("b0b8"),r("cba8")),g=Object(h["a"])(b,n,a,!1,null,"3eec0f36",null);t["default"]=g.exports},"44f5":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("div",{staticClass:"title"},[r("span",[e._v("更新BannerItem")]),r("span",{staticClass:"back",on:{click:function(t){return e.back(!1)}}},[r("i",{staticClass:"iconfont icon-fanhui"}),e._v(" 返回 ")])]),r("div",{staticClass:"wrap"},[r("el-row",[r("el-col",{attrs:{lg:16,md:20,sm:24,xs:24}},[r("el-form",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"form",attrs:{model:e.form,"status-icon":"",rules:e.rules,"label-width":"120px"},nativeOn:{submit:function(e){e.preventDefault()}}},[r("el-form-item",{attrs:{label:"名称",prop:"name"}},[r("el-input",{attrs:{size:"medium",placeholder:"请填写名称"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),r("el-form-item",{attrs:{label:"关键词",prop:"key_word"}},[r("el-input",{attrs:{size:"medium",placeholder:"请填写关键词"},model:{value:e.form.key_word,callback:function(t){e.$set(e.form,"key_word",t)},expression:"form.key_word"}})],1),r("el-form-item",{attrs:{label:"类型",prop:"type"}},[r("el-input",{attrs:{size:"medium",placeholder:"请填写类型"},model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}})],1),r("el-form-item",{attrs:{label:"图片",prop:"img"}},[r("upload-imgs",{ref:"uploadEle",attrs:{rules:e.imgRules,value:e.solveShowImg(e.form.img),maxNum:1}})],1),r("el-form-item",{attrs:{label:"加载中图片",prop:"load_img"}},[r("upload-imgs",{ref:"uploadLoadEle",attrs:{rules:e.imgRules,value:e.solveShowImg(e.form.load_img),maxNum:1}})],1),r("el-form-item",{staticClass:"submit"},[r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("form")}}},[e._v("保 存")]),r("el-button",{on:{click:function(t){return e.resetForm("form")}}},[e._v("重 置")])],1)],1)],1)],1)],1)])},a=[],o=r("a34a"),i=r.n(o),s=r("306b"),l=(r("bb8b"),r("e0ba"));function u(e){return u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function c(e,t,r,n,a,o,i){try{var s=e[o](i),l=s.value}catch(u){return void r(u)}s.done?t(l):Promise.resolve(l).then(n,a)}function m(e){return function(){var t=this,r=arguments;return new Promise(function(n,a){var o=e.apply(t,r);function i(e){c(o,n,a,i,s,"next",e)}function s(e){c(o,n,a,i,s,"throw",e)}i(void 0)})}}var p={components:{UploadImgs:l["default"]},props:{bannerId:Number,editID:Number},data:function(){return{form:{id:0,title:"",name:"",description:"",img:""},rules:{name:[{required:!0,message:"请输入轮播图元素名称",trigger:"blur"}],key_word:[{required:!0,message:"请输入轮播图元素关键词",trigger:"blur"}]},imgRules:{minWidth:100,minHeight:100,maxSize:5},loading:!1}},created:function(){var e=m(i.a.mark(function e(){return i.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.loading=!0,e.next=3,banner.getItem(this.editID);case 3:this.form=e.sent,this.loading=!1;case 5:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),methods:{submitForm:function(e){var t=this;this.$refs[e].validate(function(){var r=m(i.a.mark(function r(n){var a,o,l,c,m;return i.a.wrap(function(r){while(1)switch(r.prev=r.next){case 0:if(!n){r.next=33;break}return r.prev=1,r.next=4,t.$refs.uploadEle.getValue();case 4:return a=r.sent,r.next=7,t.$refs.uploadLoadEle.getValue();case 7:return o=r.sent,t.form["img"]=s["default"].solveUploadImg(a),t.form["load_img"]=s["default"].solveUploadImg(o),t.bannerId>0&&(t.form["banner_id"]=t.bannerId),t.loading=!0,r.next=14,banner.updateItem(t.form.id,t.form);case 14:l=r.sent,t.loading=!1,0===l.error_code&&(t.$message.success("".concat(l.msg)),t.resetForm(e),t.back()),r.next=31;break;case 19:if(r.prev=19,r.t0=r["catch"](1),c=r.t0.data.msg,!c||"object"!==u(c)){r.next=31;break}r.t1=i.a.keys(c);case 24:if((r.t2=r.t1()).done){r.next=31;break}return m=r.t2.value,t.$message.error(c[m]),r.next=29,setTimeout(function(){},1e3);case 29:r.next=24;break;case 31:r.next=35;break;case 33:return t.$message.error("请填写正确的信息"),r.abrupt("return",!1);case 35:case"end":return r.stop()}},r,null,[[1,19]])}));return function(e){return r.apply(this,arguments)}}())},resetForm:function(e){this.$refs[e].resetFields()},solveShowImg:function(e){return s["default"].solveShowImg(e)},back:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.$emit("close",e)}}},f=p,d=(r("662b"),r("cba8")),v=Object(d["a"])(f,n,a,!1,null,"619e4092",null);t["default"]=v.exports},5127:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("div",{staticClass:"title"},[r("span",[e._v("报价表")]),r("span",{staticClass:"back",on:{click:function(t){return e.back(!1)}}},[r("i",{staticClass:"iconfont icon-fanhui"}),e._v(" 返回 ")])]),r("div",{staticClass:"wrap"},[r("el-row",[r("el-col",{attrs:{lg:16,md:20,sm:24,xs:24}},[r("el-form",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"form",attrs:{model:e.form,"status-icon":"",rules:e.rules,"label-width":"120px"},nativeOn:{submit:function(e){e.preventDefault()}}},[r("el-row",[r("el-col",{attrs:{lg:8,md:20,sm:24,xs:24}},[r("el-form-item",{attrs:{label:"产品类型",prop:"user_id"}},[r("el-select",{attrs:{size:"medium",filterable:"",placeholder:"请选择边柱规格"},model:{value:e.form.user_id,callback:function(t){e.$set(e.form,"user_id",t)},expression:"form.user_id"}},[e._l(e.data,function(t,n){return[r("el-option",{key:n,attrs:{value:t.id,label:t.name}},[r("span",{staticStyle:{color:"#b4b4b4","margin-right":"15px","font-size":"12px"}},[e._v(e._s(n+1))]),r("span",[e._v(e._s(t.name))])])]})],2)],1)],1),r("el-col",{attrs:{lg:8,md:20,sm:24,xs:24}},[r("el-form-item",{attrs:{label:"产品宽",prop:"key_word"}},[r("el-input",{attrs:{size:"medium",placeholder:"请填写产品宽（单位：米）"},model:{value:e.form.key_word,callback:function(t){e.$set(e.form,"key_word",t)},expression:"form.key_word"}})],1)],1),r("el-col",{attrs:{lg:8,md:20,sm:24,xs:24}},[r("el-form-item",{attrs:{label:"产品高",prop:"type"}},[r("el-input",{attrs:{size:"medium",placeholder:"请填写产品高（单位：米）"},model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}})],1)],1)],1),r("el-row",[r("el-col",{attrs:{lg:8,md:20,sm:24,xs:24}},[r("el-form-item",{attrs:{label:"边柱规格",prop:"user_id"}},[r("el-select",{attrs:{size:"medium",filterable:"",placeholder:"请选择边柱规格"},model:{value:e.form.user_id,callback:function(t){e.$set(e.form,"user_id",t)},expression:"form.user_id"}},[e._l(e.data,function(t,n){return[r("el-option",{key:n,attrs:{value:t.id,label:t.name}},[r("span",{staticStyle:{color:"#b4b4b4","margin-right":"15px","font-size":"12px"}},[e._v(e._s(n+1))]),r("span",[e._v(e._s(t.name))])])]})],2)],1)],1),r("el-col",{attrs:{lg:8,md:20,sm:24,xs:24}},[r("el-form-item",{attrs:{label:"边柱类型",prop:"user_id"}},[r("el-select",{attrs:{size:"medium",filterable:"",placeholder:"请选择边柱类型"},model:{value:e.form.user_id,callback:function(t){e.$set(e.form,"user_id",t)},expression:"form.user_id"}},[e._l(e.data,function(t,n){return[r("el-option",{key:n,attrs:{value:t.id,label:t.name}},[r("span",{staticStyle:{color:"#b4b4b4","margin-right":"15px","font-size":"12px"}},[e._v(e._s(n+1))]),r("span",[e._v(e._s(t.name))])])]})],2)],1)],1)],1),r("el-row",[r("el-col",{attrs:{lg:8,md:20,sm:24,xs:24}},[r("el-form-item",{attrs:{label:"地轨",prop:"track"}},[r("el-select",{attrs:{size:"medium",filterable:"",placeholder:"请选择地轨"},model:{value:e.form.track,callback:function(t){e.$set(e.form,"track",t)},expression:"form.track"}},[r("el-option",{key:"0",attrs:{value:1,label:"需要"}},[r("span",{staticStyle:{color:"#b4b4b4","margin-right":"15px","font-size":"12px"}},[e._v("1")]),r("span",[e._v("需要")])]),r("el-option",{key:"1",attrs:{value:2,label:"不需要"}},[r("span",{staticStyle:{color:"#b4b4b4","margin-right":"15px","font-size":"12px"}},[e._v("2")]),r("span",[e._v("不需要")])])],1)],1)],1),r("el-col",{attrs:{lg:8,md:20,sm:24,xs:24}},[r("el-form-item",{attrs:{label:"边柱外盖",prop:"side_outer"}},[r("el-select",{attrs:{size:"medium",filterable:"",placeholder:"请选择边柱外盖"},model:{value:e.form.side_outer,callback:function(t){e.$set(e.form,"side_outer",t)},expression:"form.side_outer"}},[r("el-option",{key:"0",attrs:{value:1,label:"需要"}},[r("span",{staticStyle:{color:"#b4b4b4","margin-right":"15px","font-size":"12px"}},[e._v("1")]),r("span",[e._v("需要")])]),r("el-option",{key:"1",attrs:{value:2,label:"不需要"}},[r("span",{staticStyle:{color:"#b4b4b4","margin-right":"15px","font-size":"12px"}},[e._v("2")]),r("span",[e._v("不需要")])])],1)],1)],1),r("el-col",{attrs:{lg:8,md:20,sm:24,xs:24}},[r("el-form-item",{attrs:{label:"收藏架",prop:"rack"}},[r("el-select",{attrs:{size:"medium",filterable:"",placeholder:"请选择收藏架"},model:{value:e.form.rack,callback:function(t){e.$set(e.form,"rack",t)},expression:"form.rack"}},[r("el-option",{key:"0",attrs:{value:1,label:"需要"}},[r("span",{staticStyle:{color:"#b4b4b4","margin-right":"15px","font-size":"12px"}},[e._v("1")]),r("span",[e._v("需要")])]),r("el-option",{key:"1",attrs:{value:2,label:"不需要"}},[r("span",{staticStyle:{color:"#b4b4b4","margin-right":"15px","font-size":"12px"}},[e._v("2")]),r("span",[e._v("不需要")])])],1)],1)],1)],1),r("el-row",[r("el-col",{attrs:{lg:8,md:20,sm:24,xs:24}},[r("el-form-item",{attrs:{label:"物流",prop:"logistics"}},[r("el-select",{attrs:{size:"medium",filterable:"",placeholder:"请选择物流"},model:{value:e.form.logistics,callback:function(t){e.$set(e.form,"logistics",t)},expression:"form.logistics"}},[r("el-option",{key:"1",attrs:{value:1,label:"需要"}},[r("span",{staticStyle:{color:"#b4b4b4","margin-right":"15px","font-size":"12px"}},[e._v("1")]),r("span",[e._v("需要")])]),r("el-option",{key:"2",attrs:{value:2,label:"不需要"}},[r("span",{staticStyle:{color:"#b4b4b4","margin-right":"15px","font-size":"12px"}},[e._v("2")]),r("span",[e._v("不需要")])])],1)],1)],1),r("el-col",{attrs:{lg:8,md:20,sm:24,xs:24}},[r("el-form-item",{attrs:{label:"安装",prop:"install"}},[r("el-select",{attrs:{size:"medium",filterable:"",placeholder:"请选择安装"},model:{value:e.form.install,callback:function(t){e.$set(e.form,"install",t)},expression:"form.install"}},[r("el-option",{key:"0",attrs:{value:1,label:"需要"}},[r("span",{staticStyle:{color:"#b4b4b4","margin-right":"15px","font-size":"12px"}},[e._v("1")]),r("span",[e._v("需要")])]),r("el-option",{key:"1",attrs:{value:2,label:"不需要"}},[r("span",{staticStyle:{color:"#b4b4b4","margin-right":"15px","font-size":"12px"}},[e._v("2")]),r("span",[e._v("不需要")])])],1)],1)],1)],1),r("el-form-item",{attrs:{label:"发票",prop:"invoice"}},[r("el-select",{attrs:{size:"medium",filterable:"",placeholder:"请选择发票"},model:{value:e.form.invoice,callback:function(t){e.$set(e.form,"invoice",t)},expression:"form.invoice"}},[r("el-option",{key:"0",attrs:{value:1,label:"需要"}},[r("span",{staticStyle:{color:"#b4b4b4","margin-right":"15px","font-size":"12px"}},[e._v("1")]),r("span",[e._v("需要")])]),r("el-option",{key:"1",attrs:{value:2,label:"不需要"}},[r("span",{staticStyle:{color:"#b4b4b4","margin-right":"15px","font-size":"12px"}},[e._v("2")]),r("span",[e._v("不需要")])])],1)],1),r("el-form-item",{attrs:{label:"折扣",prop:"discount"}},[r("el-input",{attrs:{size:"medium",placeholder:"请填写折扣"},model:{value:e.form.discount,callback:function(t){e.$set(e.form,"discount",t)},expression:"form.discount"}})],1),r("el-form-item",{staticClass:"submit"},[r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("form")}}},[e._v("保 存")]),r("el-button",{on:{click:function(t){return e.resetForm("form")}}},[e._v("重 置")])],1)],1)],1)],1)],1)])},a=[],o=r("a34a"),i=r.n(o),s=(r("bb8b"),r("e0ba")),l=r("306b");function u(e){return u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function c(e,t,r,n,a,o,i){try{var s=e[o](i),l=s.value}catch(u){return void r(u)}s.done?t(l):Promise.resolve(l).then(n,a)}function m(e){return function(){var t=this,r=arguments;return new Promise(function(n,a){var o=e.apply(t,r);function i(e){c(o,n,a,i,s,"next",e)}function s(e){c(o,n,a,i,s,"throw",e)}i(void 0)})}}var p={components:{UploadImgs:s["default"]},props:{bannerId:Number},data:function(){return{data:[{id:1,name:"feiy"},{id:2,name:"zhuo"},{id:3,name:"feiy_zhuo"}],form:{type_name:"",width:"",height:"",side_spec:"",side_type:"",track:2,side_outer:2,rack:2,logistics:2,install:2,invoice:2,discount:""},rules:{name:[{required:!0,message:"请输入轮播图元素名称",trigger:"blur"}],key_word:[{required:!0,message:"请输入轮播图元素关键词",trigger:"blur"}]},imgRules:{minWidth:100,minHeight:100,maxSize:5},loading:!1}},methods:{submitForm:function(e){var t=this;this.$refs[e].validate(function(){var r=m(i.a.mark(function r(n){var a,o,s,c,m;return i.a.wrap(function(r){while(1)switch(r.prev=r.next){case 0:if(!n){r.next=35;break}return r.prev=1,r.next=4,t.$refs.uploadEle.getValue();case 4:return a=r.sent,r.next=7,t.$refs.uploadLoadEle.getValue();case 7:return o=r.sent,t.form["img"]=l["default"].solveUploadImg(a),t.form["load_img"]=l["default"].solveUploadImg(o),t.bannerId>0&&(t.form["banner_id"]=t.bannerId),t.loading=!0,r.next=14,banner.createItem(t.form);case 14:s=r.sent,t.loading=!1,0===s.error_code&&(t.$message.success("".concat(s.msg)),t.resetForm(e),t.back(!0)),r.next=33;break;case 19:if(r.prev=19,r.t0=r["catch"](1),console.log(r.t0),t.loading=!1,c=r.t0.data.msg,!c||"object"!==u(c)){r.next=33;break}r.t1=i.a.keys(c);case 26:if((r.t2=r.t1()).done){r.next=33;break}return m=r.t2.value,t.$message.error(c[m]),r.next=31,setTimeout(function(){},1e3);case 31:r.next=26;break;case 33:r.next=37;break;case 35:return t.$message.error("请填写正确的信息"),r.abrupt("return",!1);case 37:case"end":return r.stop()}},r,null,[[1,19]])}));return function(e){return r.apply(this,arguments)}}())},resetForm:function(e){this.$refs[e].resetFields()},back:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.$emit("close",e)}}},f=p,d=(r("f8cf"),r("cba8")),v=Object(d["a"])(f,n,a,!1,null,"7492c33c",null);t["default"]=v.exports},"662b":function(e,t,r){"use strict";r("3b2f")},"831c":function(e,t,r){},b0b8:function(e,t,r){"use strict";r("fb56")},bb8b:function(e,t,r){"use strict";r.r(t);var n=r("a34a"),a=r.n(n),o=r("dfd8"),i=r("f121");function s(e,t,r,n,a,o,i){try{var s=e[o](i),l=s.value}catch(u){return void r(u)}s.done?t(l):Promise.resolve(l).then(n,a)}function l(e){return function(){var t=this,r=arguments;return new Promise(function(n,a){var o=e.apply(t,r);function i(e){s(o,n,a,i,l,"next",e)}function l(e){s(o,n,a,i,l,"throw",e)}i(void 0)})}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function m(e,t,r){return t&&c(e.prototype,t),r&&c(e,r),e}var p=function(){function e(){u(this,e)}return m(e,[{key:"getLists",value:function(){var e=l(a.a.mark(function e(){var t,r,n,s,l,u=arguments;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=u.length>0&&void 0!==u[0]?u[0]:0,r=u.length>1&&void 0!==u[1]?u[1]:i["default"].pageSize,n=u.length>2&&void 0!==u[2]&&u[2],s={page:t,count:r,handleError:!0},n&&(s.status=n),e.next=7,Object(o["get"])("v1/customer_report",s);case 7:return l=e.sent,e.abrupt("return",l);case 9:case"end":return e.stop()}},e)}));function t(){return e.apply(this,arguments)}return t}()},{key:"getAll",value:function(){var e=l(a.a.mark(function e(){var t,r,n,s=arguments;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=s.length>0&&void 0!==s[0]?s[0]:0,r=s.length>1&&void 0!==s[1]?s[1]:i["default"].pageSize,e.next=4,Object(o["get"])("v1/customer_report/all",{page:t,count:r,handleError:!0});case 4:return n=e.sent,e.abrupt("return",n);case 6:case"end":return e.stop()}},e)}));function t(){return e.apply(this,arguments)}return t}()},{key:"getDetail",value:function(){var e=l(a.a.mark(function e(t){var r;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(o["get"])("v1/customer_report/".concat(t),{handleError:!0});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"getStatusDetail",value:function(){var e=l(a.a.mark(function e(t){var r;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(o["get"])("v1/customer_report/".concat(t,"/detail"),{handleError:!0});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"add",value:function(){var e=l(a.a.mark(function e(t){var r;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(o["post"])("v1/customer_report",t,{handleError:!0});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"edit",value:function(){var e=l(a.a.mark(function e(t,r){var n;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(o["put"])("v1/customer_report/".concat(t),r,{handleError:!0});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}},e)}));function t(t,r){return e.apply(this,arguments)}return t}()},{key:"del",value:function(){var e=l(a.a.mark(function e(t){var r;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(o["_delete"])("v1/customer_report",{ids:t});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()}]),e}();t["default"]=new p},e96f:function(e,t,r){},f8cf:function(e,t,r){"use strict";r("831c")},fb56:function(e,t,r){}}]);