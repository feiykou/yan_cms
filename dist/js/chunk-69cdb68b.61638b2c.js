(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-69cdb68b","chunk-6280d26d","chunk-2d0df0a7"],{"0b95":function(e,t,n){},"168a":function(e,t,n){"use strict";n("db5e")},4219:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",["list"===e.redirectType?n("div",{staticClass:"container"},[n("div",{staticClass:"header"},[n("div",{staticClass:"title"},[e._v("规格名列表 "),n("el-button",{staticClass:"add-banner-item",attrs:{type:"primary",plain:""},on:{click:e.handleAdd}},[e._v("添加规格名")])],1)]),n("lin-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{tableColumn:e.tableColumn,tableData:e.tableData,operate:e.operate,pagination:e.pagination,curPage:e.currentPage},on:{handleEdit:e.handleEdit,handleDelete:e.handleDelete,currentChange:e.currentChange}})],1):"add"===e.redirectType?n("spec-add",{on:{close:e.closePage}}):e._e()],1)},a=[],i=n("a34a"),c=n.n(i),o=n("87e7"),s=n("6239");function u(e,t,n,r,a,i,c){try{var o=e[i](c),s=o.value}catch(u){return void n(u)}o.done?t(s):Promise.resolve(s).then(r,a)}function l(e){return function(){var t=this,n=arguments;return new Promise(function(r,a){var i=e.apply(t,n);function c(e){u(i,r,a,c,o,"next",e)}function o(e){u(i,r,a,c,o,"throw",e)}c(void 0)})}}var p={name:"SpecList",components:{SpecAdd:s["default"]},data:function(){return{loading:!1,redirectType:"list",tableColumn:[{prop:"id",label:"id",width:100},{prop:"name",label:"名称",width:200},{prop:"description",label:"描述",width:300},{prop:"unit",label:"单位",width:100},{prop:"standard",label:"标准"}],tableData:[],operate:[],currentPage:1,pagination:{pageTotal:0},editID:1}},created:function(){this.getSpecs(),this.operate=[{name:"编辑",func:"handleEdit",type:"primary"},{name:"删除",func:"handleDelete",type:"danger",auth:"删除图书"}]},methods:{getSpecs:function(){var e=l(c.a.mark(function e(){var t,n,r=arguments;return c.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:0,this.loading=!0,e.next=4,o["default"].getSpecs(t);case 4:if(n=e.sent,this.loading=!1,!(n.total_nums<=0)){e.next=9;break}return this.tableData=[],e.abrupt("return");case 9:this.pagination.pageTotal||(this.pagination={pageTotal:n.total_nums}),n.collection.forEach(function(e){e["standard"]=e["standard"]?"标准":"非标准"}),this.tableData=n.collection;case 12:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),currentChange:function(e){e<=0||(e-=1,this.currentPage=e+1,this.getSpecs(e))},handleAdd:function(){this.redirectType="add"},handleEdit:function(e){this.$router.push("/spec/".concat(e.row.id))},handleDelete:function(e){var t=this;this.$confirm("此操作将永久删除该规格名, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(l(c.a.mark(function n(){var r,a;return c.a.wrap(function(n){while(1)switch(n.prev=n.next){case 0:return r=[e.row.id],t.loading=!0,n.next=4,o["default"].delSpec(r);case 4:a=n.sent,t.loading=!1,0===a.error_code&&(t.getSpecs(),t.$message({type:"success",message:"".concat(a.msg)}));case 7:case"end":return n.stop()}},n)})))},closePage:function(e){this.redirectType="list",e&&this.getSpecs(this.currentPage-1)}}},d=p,f=(n("168a"),n("cba8")),m=Object(f["a"])(d,r,a,!1,null,"11497dae",null);t["default"]=m.exports},6239:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",{staticClass:"title"},[e._v("新建规格名 "),n("span",{staticClass:"back",on:{click:function(t){return e.back(!1)}}},[n("i",{staticClass:"iconfont icon-fanhui"}),e._v(" 返回 ")])]),n("div",{staticClass:"wrap"},[n("el-row",[n("el-col",{attrs:{lg:16,md:20,sm:24,xs:24}},[n("el-form",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"form",attrs:{model:e.form,"status-icon":"",rules:e.rules,"label-width":"120px"},nativeOn:{submit:function(e){e.preventDefault()}}},[n("el-form-item",{attrs:{label:"规格名名称",prop:"name"}},[n("el-input",{attrs:{size:"medium",placeholder:"请填写规格名名称"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),n("el-form-item",{attrs:{label:"规格名描述",prop:"description"}},[n("el-input",{attrs:{size:"medium",placeholder:"请填写规格名描述"},model:{value:e.form.description,callback:function(t){e.$set(e.form,"description",t)},expression:"form.description"}})],1),n("el-form-item",{attrs:{label:"单位",prop:"unit"}},[n("el-input",{attrs:{size:"medium",placeholder:"请填写单位"},model:{value:e.form.unit,callback:function(t){e.$set(e.form,"unit",t)},expression:"form.unit"}})],1),n("el-form-item",{attrs:{label:"是否标准",prop:"online"}},[n("el-switch",{attrs:{"active-color":"#3963bc","active-text":"标准","inactive-text":"非标准"},model:{value:e.form.standard,callback:function(t){e.$set(e.form,"standard",t)},expression:"form.standard"}})],1),n("el-form-item",{staticClass:"submit"},[n("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("form")}}},[e._v("保 存")]),n("el-button",{on:{click:function(t){return e.resetForm("form")}}},[e._v("重 置")])],1)],1)],1)],1)],1)])},a=[],i=n("a34a"),c=n.n(i),o=n("87e7");function s(e){return s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function u(e,t,n,r,a,i,c){try{var o=e[i](c),s=o.value}catch(u){return void n(u)}o.done?t(s):Promise.resolve(s).then(r,a)}function l(e){return function(){var t=this,n=arguments;return new Promise(function(r,a){var i=e.apply(t,n);function c(e){u(i,r,a,c,o,"next",e)}function o(e){u(i,r,a,c,o,"throw",e)}c(void 0)})}}var p={data:function(){return{loading:!1,form:{name:"",description:"",unit:"",standard:!0},rules:{name:[{required:!0,message:"请输入轮播图名称",trigger:"blur"}]}}},methods:{submitForm:function(e){var t=this;this.$refs[e].validate(function(){var n=l(c.a.mark(function n(r){var a,i,u;return c.a.wrap(function(n){while(1)switch(n.prev=n.next){case 0:if(!r){n.next=24;break}return n.prev=1,t.loading=!0,n.next=5,o["default"].addSpec(t.form);case 5:a=n.sent,t.loading=!1,0===a.error_code&&(t.$message.success("".concat(a.msg)),t.resetForm(e),t.back(!0)),n.next=22;break;case 10:if(n.prev=10,n.t0=n["catch"](1),i=n.t0.data.msg,!i||"object"!==s(i)){n.next=22;break}n.t1=c.a.keys(i);case 15:if((n.t2=n.t1()).done){n.next=22;break}return u=n.t2.value,t.$message.error(i[u]),n.next=20,setTimeout(function(){},1e3);case 20:n.next=15;break;case 22:n.next=26;break;case 24:return t.$message.error("请填写正确的信息"),n.abrupt("return",!1);case 26:case"end":return n.stop()}},n,null,[[1,10]])}));return function(e){return n.apply(this,arguments)}}())},resetForm:function(e){this.$refs[e].resetFields()},back:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.$emit("close",e)}}},d=p,f=(n("f936"),n("cba8")),m=Object(f["a"])(d,r,a,!1,null,"33319f08",null);t["default"]=m.exports},"87e7":function(e,t,n){"use strict";n.r(t);var r=n("a34a"),a=n.n(r),i=n("dfd8"),c=n("f121");function o(e,t,n,r,a,i,c){try{var o=e[i](c),s=o.value}catch(u){return void n(u)}o.done?t(s):Promise.resolve(s).then(r,a)}function s(e){return function(){var t=this,n=arguments;return new Promise(function(r,a){var i=e.apply(t,n);function c(e){o(i,r,a,c,s,"next",e)}function s(e){o(i,r,a,c,s,"throw",e)}c(void 0)})}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t,n){return t&&l(e.prototype,t),n&&l(e,n),e}var d=function(){function e(){u(this,e)}return p(e,[{key:"getSpecs",value:function(){var e=s(a.a.mark(function e(){var t,n,r,o=arguments;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=o.length>0&&void 0!==o[0]?o[0]:0,n=o.length>1&&void 0!==o[1]?o[1]:c["default"].pageSize,e.next=4,Object(i["get"])("v1/spec",{page:t,count:n,handleError:!0});case 4:return r=e.sent,e.abrupt("return",r);case 6:case"end":return e.stop()}},e)}));function t(){return e.apply(this,arguments)}return t}()},{key:"getSpec",value:function(){var e=s(a.a.mark(function e(t){var n;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(i["get"])("v1/spec/".concat(t),{handleError:!0});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"addSpec",value:function(){var e=s(a.a.mark(function e(t){var n;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(i["post"])("v1/spec",t,{handleError:!0});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"editSpec",value:function(){var e=s(a.a.mark(function e(t,n){var r;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(i["put"])("v1/spec/".concat(t),n,{handleError:!0});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}},e)}));function t(t,n){return e.apply(this,arguments)}return t}()},{key:"delSpec",value:function(){var e=s(a.a.mark(function e(t){var n;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(i["_delete"])("v1/spec",{ids:t});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"getItem",value:function(){var e=s(a.a.mark(function e(t){var n;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(i["get"])("v1/spec/item/".concat(t),{handleError:!0});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"createItem",value:function(){var e=s(a.a.mark(function e(t){var n;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(i["post"])("v1/spec/item",t,{handleError:!0});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"updateItem",value:function(){var e=s(a.a.mark(function e(t,n){var r;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(i["put"])("v1/spec/item/".concat(t),n,{handleError:!0});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}},e)}));function t(t,n){return e.apply(this,arguments)}return t}()},{key:"delItem",value:function(){var e=s(a.a.mark(function e(t){var n;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(i["_delete"])("v1/spec/item",{ids:t});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()}]),e}();t["default"]=new d},db5e:function(e,t,n){},f936:function(e,t,n){"use strict";n("0b95")}}]);