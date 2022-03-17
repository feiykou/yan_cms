(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0c8f9494","chunk-2d0ea162"],{"03b2":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("div",{staticClass:"title"},[e._v("库存变更 "),r("span",{staticClass:"back",on:{click:function(t){return e.back(!1)}}},[r("i",{staticClass:"iconfont icon-fanhui"}),e._v(" 返回 ")])]),r("div",{staticClass:"wrap"},[r("el-row",[r("el-col",{attrs:{lg:16,md:20,sm:24,xs:24}},[r("el-form",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"form",attrs:{model:e.form,"status-icon":"",rules:e.rules,"label-width":"120px"},nativeOn:{submit:function(e){e.preventDefault()}}},[r("el-form-item",{attrs:{label:"标题",prop:"title"}},[r("el-input",{attrs:{size:"medium",value:e.storageData.title,disabled:""}})],1),r("el-form-item",{attrs:{label:"商品总库存",prop:"stock"}},[r("el-input",{attrs:{size:"medium",value:e.storageData.stock,disabled:""}})],1),r("el-form-item",{attrs:{label:"剩余库存",prop:"stock"}},[r("el-input",{attrs:{size:"medium",value:e.storageData.rest_stock,disabled:""}})],1),r("el-form-item",{attrs:{label:"出入库",prop:"status"}},[r("el-select",{attrs:{size:"medium",filterable:"",placeholder:"请选择出入库"},on:{change:e.statusChange},model:{value:e.form.status,callback:function(t){e.$set(e.form,"status",t)},expression:"form.status"}},e._l(e.statusData,function(t){return r("el-option",{attrs:{value:t.type,label:t.value}},[r("span",{staticStyle:{color:"#b4b4b4","margin-right":"15px","font-size":"12px"}},[e._v(e._s(t.type))]),r("span",[e._v(e._s(t.value))])])}),1)],1),r("el-form-item",{attrs:{label:"渠道",prop:"type"}},[r("el-select",{attrs:{size:"medium",filterable:"",placeholder:"请选择渠道"},on:{change:e.channelChange},model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},e._l(e.channelData,function(t){return r("el-option",{attrs:{value:t.type,label:t.value}},[r("span",{staticStyle:{color:"#b4b4b4","margin-right":"15px","font-size":"12px"}},[e._v(e._s(t.type))]),r("span",[e._v(e._s(t.value))])])}),1)],1),r("el-form-item",{attrs:{label:"库存数量",prop:"count"}},[r("el-input",{attrs:{size:"medium",placeholder:"请填写库存数量"},model:{value:e.form.count,callback:function(t){e.$set(e.form,"count",e._n(t))},expression:"form.count"}})],1),r("el-form-item",{staticClass:"submit"},[r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("form")}}},[e._v("保 存")]),r("el-button",{on:{click:function(t){return e.resetForm("form")}}},[e._v("重 置")])],1)],1)],1)],1)],1)])},a=[],o=r("a34a"),s=r.n(o),u=r("8ffd");function i(e){return i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function c(e,t,r,n,a,o,s){try{var u=e[o](s),i=u.value}catch(c){return void r(c)}u.done?t(i):Promise.resolve(i).then(n,a)}function l(e){return function(){var t=this,r=arguments;return new Promise(function(n,a){var o=e.apply(t,r);function s(e){c(o,n,a,s,u,"next",e)}function u(e){c(o,n,a,s,u,"throw",e)}s(void 0)})}}var f={name:"add",props:{editID:Number},data:function(){var e=this,t=function(t,r,n){r?Number.isInteger(r)?r<0?n(new Error("值必须大于0")):""===e.form.status?(e.$refs.form.validateField("status"),n(new Error("出入库必须填写"))):0==e.form.status&&r>e.storageData["rest_stock"]?n(new Error("该库存数大于总库存数")):n():n(new Error("必须是数字")):n(new Error("库存数量不能为空"))};return{loading:!1,skuData:[],form:{type:"",status:"",count:0},storageData:{},channelData:[{type:1,value:"小程序"},{type:2,value:"淘宝"},{type:3,value:"供应商"}],statusData:[{type:0,value:"出库"},{type:1,value:"入库"}],rules:{count:[{validator:t,trigger:"blur"}],status:[{required:!0,message:"出入库状态必须选择",trigger:"blur"}],type:[{required:!0,message:"渠道必须选择",trigger:"blur"}]}}},created:function(){this.getStorage()},methods:{getStorage:function(){var e=l(s.a.mark(function e(){var t;return s.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.loading=!0,e.prev=1,e.next=4,u["default"].getStorage(this.editID);case 4:t=e.sent,t["online"]=!!t["online"],this.storageData=t,console.log(this.storageData),e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](1),this.back(!1);case 13:this.loading=!1;case 14:case"end":return e.stop()}},e,this,[[1,10]])}));function t(){return e.apply(this,arguments)}return t}(),channelChange:function(e){this.form.type=e},statusChange:function(e){this.form.status=e},submitForm:function(e){var t=this;this.$refs[e].validate(function(){var r=l(s.a.mark(function r(n){var a,o,c;return s.a.wrap(function(r){while(1)switch(r.prev=r.next){case 0:if(!n){r.next=25;break}return t.loading=!0,r.prev=2,t.form["storage_id"]=t.editID,r.next=6,u["default"].createRecord(t.form);case 6:a=r.sent,0===a.error_code&&(t.$message.success("".concat(a.msg)),t.resetForm(e),t.back()),r.next=22;break;case 10:if(r.prev=10,r.t0=r["catch"](2),o=r.t0.data.msg,!o||"object"!==i(o)){r.next=22;break}r.t1=s.a.keys(o);case 15:if((r.t2=r.t1()).done){r.next=22;break}return c=r.t2.value,t.$message.error(o[c]),r.next=20,setTimeout(function(){},1e3);case 20:r.next=15;break;case 22:t.loading=!1,r.next=27;break;case 25:return t.$message.error("请填写正确的信息"),r.abrupt("return",!1);case 27:case"end":return r.stop()}},r,null,[[2,10]])}));return function(e){return r.apply(this,arguments)}}())},resetForm:function(e){this.$refs[e].resetFields()},back:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.$emit("close",e)}}},p=f,v=(r("630c"),r("2877")),d=Object(v["a"])(p,n,a,!1,null,"54225fa8",null);t["default"]=d.exports},"630c":function(e,t,r){"use strict";r("df38")},"8ffd":function(e,t,r){"use strict";r.r(t);var n=r("a34a"),a=r.n(n),o=r("dfd8"),s=r("f121");function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(r,!0).forEach(function(t){c(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t,r,n,a,o,s){try{var u=e[o](s),i=u.value}catch(c){return void r(c)}u.done?t(i):Promise.resolve(i).then(n,a)}function f(e){return function(){var t=this,r=arguments;return new Promise(function(n,a){var o=e.apply(t,r);function s(e){l(o,n,a,s,u,"next",e)}function u(e){l(o,n,a,s,u,"throw",e)}s(void 0)})}}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function v(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function d(e,t,r){return t&&v(e.prototype,t),r&&v(e,r),e}var m=function(){function e(){p(this,e)}return d(e,[{key:"getStorages",value:function(){var e=f(a.a.mark(function e(){var t,r,n,u,c=arguments;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:0,r=c.length>1&&void 0!==c[1]?c[1]:{},n=c.length>2&&void 0!==c[2]?c[2]:s["default"].pageSize,e.next=5,Object(o["get"])("v1/sku_storage",i({page:t,count:n},r,{handleError:!0}));case 5:return u=e.sent,e.abrupt("return",u);case 7:case"end":return e.stop()}},e)}));function t(){return e.apply(this,arguments)}return t}()},{key:"getStorage",value:function(){var e=f(a.a.mark(function e(t){var r;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(o["get"])("v1/sku_storage/".concat(t),{handleError:!0});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"addStorage",value:function(){var e=f(a.a.mark(function e(t){var r;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(o["post"])("v1/sku_storage",t,{handleError:!0});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"editStorage",value:function(){var e=f(a.a.mark(function e(t,r){var n;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(o["put"])("v1/sku_storage/".concat(t),r,{handleError:!0});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}},e)}));function t(t,r){return e.apply(this,arguments)}return t}()},{key:"delStorage",value:function(){var e=f(a.a.mark(function e(t){var r;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(o["_delete"])("v1/sku_storage",{ids:t});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"getStorageRecord",value:function(){var e=f(a.a.mark(function e(){var t,r,n,u,i=arguments;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=i.length>0&&void 0!==i[0]?i[0]:0,r=i.length>1?i[1]:void 0,n=i.length>2&&void 0!==i[2]?i[2]:s["default"].pageSize,e.next=5,Object(o["get"])("v1/sku_storage/record",{page:t,count:n,id:r,handleError:!0});case 5:return u=e.sent,e.abrupt("return",u);case 7:case"end":return e.stop()}},e)}));function t(){return e.apply(this,arguments)}return t}()},{key:"createRecord",value:function(){var e=f(a.a.mark(function e(t){var r,n,s,u,i;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.count,n=t.type,s=t.status,u=t.storage_id,e.next=3,Object(o["post"])("v1/sku_storage/record",{count:r,type:n,status:s,storage_id:u,handleError:!0});case 3:return i=e.sent,e.abrupt("return",i);case 5:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()}]),e}();t["default"]=new m},df38:function(e,t,r){}}]);