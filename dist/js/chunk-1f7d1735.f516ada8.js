(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1f7d1735","chunk-2d2165e6"],{4798:function(e,t,r){},"91f6":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("div",{staticClass:"title"},[r("span",[e._v("添加分类")]),r("span",{staticClass:"back",on:{click:function(t){return e.back(!1)}}},[r("i",{staticClass:"iconfont icon-fanhui"}),e._v(" 返回 ")])]),r("div",{staticClass:"wrap"},[r("el-row",[r("el-col",{attrs:{lg:16,md:20,sm:24,xs:24}},[r("el-form",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"form",attrs:{model:e.form,"status-icon":"",rules:e.rules,"label-width":"120px"},nativeOn:{submit:function(e){e.preventDefault()}}},[r("el-form-item",{attrs:{label:"分类名",prop:"name"}},[r("el-input",{attrs:{size:"medium",placeholder:"请填写分类名"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),r("el-form-item",{attrs:{label:"排序",prop:"order"}},[r("el-input",{attrs:{size:"medium",placeholder:"请填写分类排序"},model:{value:e.form.order,callback:function(t){e.$set(e.form,"order",t)},expression:"form.order"}})],1),r("el-form-item",{attrs:{label:"类别",prop:"category_id"}},[r("el-select",{attrs:{size:"medium",filterable:"",placeholder:"请选择所属类别"},model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},e._l(e.cateEnum,function(t){return r("el-option",{attrs:{value:t.type,label:t.name}},[r("span",{staticStyle:{color:"#b4b4b4","margin-right":"15px","font-size":"12px"}},[e._v(e._s(t.type))]),r("span",[e._v(e._s(t.name))])])}),1)],1),r("el-form-item",{attrs:{label:"显示上线",prop:"show"}},[r("el-switch",{attrs:{"active-color":"#3963bc"},model:{value:e.form.show,callback:function(t){e.$set(e.form,"show",t)},expression:"form.show"}})],1),r("el-form-item",{attrs:{label:"图片",prop:"img"}},[r("upload-imgs",{ref:"uploadEle",attrs:{rules:e.imgRules,maxNum:1}})],1),r("el-form-item",{attrs:{label:"分类描述",prop:"description"}},[r("el-input",{attrs:{size:"medium",placeholder:"请填写分类描述"},model:{value:e.form.description,callback:function(t){e.$set(e.form,"description",t)},expression:"form.description"}})],1),r("el-form-item",{staticClass:"submit"},[r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("form")}}},[e._v("保 存")]),r("el-button",{on:{click:function(t){return e.resetForm("form")}}},[e._v("重 置")])],1)],1)],1)],1)],1)])},a=[],o=r("a34a"),i=r.n(o),c=r("c1bd"),u=r("306b"),s=r("e0ba");function l(e){return l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function f(e,t,r,n,a,o,i){try{var c=e[o](i),u=c.value}catch(s){return void r(s)}c.done?t(u):Promise.resolve(u).then(n,a)}function p(e){return function(){var t=this,r=arguments;return new Promise(function(n,a){var o=e.apply(t,r);function i(e){f(o,n,a,i,c,"next",e)}function c(e){f(o,n,a,i,c,"throw",e)}i(void 0)})}}var m={props:{pid:Number},components:{UploadImgs:s["default"]},data:function(){return{loading:!1,form:{name:"",order:50,show:!0,description:""},imgRules:{minWidth:0,minHeight:0,maxSize:5},rules:{name:[{required:!0,message:"请输入分类名称",trigger:"blur"}]}}},methods:{submitForm:function(e){var t=this;this.$refs[e].validate(function(){var r=p(i.a.mark(function r(n){var a,o,s,f;return i.a.wrap(function(r){while(1)switch(r.prev=r.next){case 0:if(!n){r.next=29;break}return r.prev=1,r.next=4,t.$refs.uploadEle.getValue();case 4:return a=r.sent,t.form["img"]=u["default"].solveUploadImg(a),t.pid>0&&(t.form["parent_id"]=t.pid),t.loading=!0,r.next=10,c["default"].addCate(t.form);case 10:o=r.sent,t.loading=!1,0===o.error_code&&(t.$message.success("".concat(o.msg)),t.resetForm(e),t.back()),r.next=27;break;case 15:if(r.prev=15,r.t0=r["catch"](1),s=r.t0.data.msg,!s||"object"!==l(s)){r.next=27;break}r.t1=i.a.keys(s);case 20:if((r.t2=r.t1()).done){r.next=27;break}return f=r.t2.value,t.$message.error(s[f]),r.next=25,setTimeout(function(){},1e3);case 25:r.next=20;break;case 27:r.next=31;break;case 29:return t.$message.error("请填写正确的信息"),r.abrupt("return",!1);case 31:case"end":return r.stop()}},r,null,[[1,15]])}));return function(e){return r.apply(this,arguments)}}())},resetForm:function(e){this.$refs[e].resetFields()},back:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.$emit("close",e)}}},d=m,v=(r("d27b"),r("cba8")),b=Object(v["a"])(d,n,a,!1,null,"46d01a8e",null);t["default"]=b.exports},c1bd:function(e,t,r){"use strict";r.r(t);var n=r("a34a"),a=r.n(n),o=r("dfd8");function i(e,t,r,n,a,o,i){try{var c=e[o](i),u=c.value}catch(s){return void r(s)}c.done?t(u):Promise.resolve(u).then(n,a)}function c(e){return function(){var t=this,r=arguments;return new Promise(function(n,a){var o=e.apply(t,r);function c(e){i(o,n,a,c,u,"next",e)}function u(e){i(o,n,a,c,u,"throw",e)}c(void 0)})}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function l(e,t,r){return t&&s(e.prototype,t),r&&s(e,r),e}var f=function(){function e(){u(this,e)}return l(e,[{key:"getCate",value:function(){var e=c(a.a.mark(function e(t){var r;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(o["get"])("v1/category/".concat(t));case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"getSonCate",value:function(){var e=c(a.a.mark(function e(){var t,r,n,i=arguments;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=i.length>0&&void 0!==i[0]?i[0]:-1,console.log(t),r="",t>=0&&(r+="?parent_id=".concat(t)),e.next=6,Object(o["get"])("v1/category".concat(r),{handleError:!0});case 6:return n=e.sent,e.abrupt("return",n);case 8:case"end":return e.stop()}},e)}));function t(){return e.apply(this,arguments)}return t}()},{key:"getTreeCate",value:function(){var e=c(a.a.mark(function e(){var t,r,n,i=arguments;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=i.length>0&&void 0!==i[0]?i[0]:0,r=i.length>1&&void 0!==i[1]?i[1]:0,e.next=4,Object(o["get"])("v1/category/".concat(t,"/deep?deep=").concat(r),{handleError:!0});case 4:return n=e.sent,e.abrupt("return",n);case 6:case"end":return e.stop()}},e)}));function t(){return e.apply(this,arguments)}return t}()},{key:"addCate",value:function(){var e=c(a.a.mark(function e(t){var r;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(o["post"])("v1/category",t);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"updateCate",value:function(){var e=c(a.a.mark(function e(t,r){var n;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(o["put"])("v1/category/".concat(t),r);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}},e)}));function t(t,r){return e.apply(this,arguments)}return t}()},{key:"updateSingle",value:function(){var e=c(a.a.mark(function e(t){var r;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(o["patch"])("v1/category/single",t);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"delCate",value:function(){var e=c(a.a.mark(function e(t){var r;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(o["_delete"])("v1/category",{ids:t});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()}]),e}();t["default"]=new f},d27b:function(e,t,r){"use strict";r("4798")}}]);