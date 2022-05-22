(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["views-custom_report-ReportEdit","models-custom_report"],{"44f5":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("div",{staticClass:"title"},[r("span",[e._v("更新BannerItem")]),r("span",{staticClass:"back",on:{click:function(t){return e.back(!1)}}},[r("i",{staticClass:"iconfont icon-fanhui"}),e._v(" 返回 ")])]),r("div",{staticClass:"wrap"},[r("el-row",[r("el-col",{attrs:{lg:16,md:20,sm:24,xs:24}},[r("el-form",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"form",attrs:{model:e.form,"status-icon":"",rules:e.rules,"label-width":"120px"},nativeOn:{submit:function(e){e.preventDefault()}}},[r("el-form-item",{attrs:{label:"名称",prop:"name"}},[r("el-input",{attrs:{size:"medium",placeholder:"请填写名称"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),r("el-form-item",{attrs:{label:"关键词",prop:"key_word"}},[r("el-input",{attrs:{size:"medium",placeholder:"请填写关键词"},model:{value:e.form.key_word,callback:function(t){e.$set(e.form,"key_word",t)},expression:"form.key_word"}})],1),r("el-form-item",{attrs:{label:"类型",prop:"type"}},[r("el-input",{attrs:{size:"medium",placeholder:"请填写类型"},model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}})],1),r("el-form-item",{attrs:{label:"图片",prop:"img"}},[r("upload-imgs",{ref:"uploadEle",attrs:{rules:e.imgRules,value:e.solveShowImg(e.form.img),maxNum:1}})],1),r("el-form-item",{attrs:{label:"加载中图片",prop:"load_img"}},[r("upload-imgs",{ref:"uploadLoadEle",attrs:{rules:e.imgRules,value:e.solveShowImg(e.form.load_img),maxNum:1}})],1),r("el-form-item",{staticClass:"submit"},[r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("form")}}},[e._v("保 存")]),r("el-button",{on:{click:function(t){return e.resetForm("form")}}},[e._v("重 置")])],1)],1)],1)],1)],1)])},a=[],o=r("a34a"),u=r.n(o),i=r("306b"),s=(r("bb8b"),r("e0ba"));function c(e){return c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function l(e,t,r,n,a,o,u){try{var i=e[o](u),s=i.value}catch(c){return void r(c)}i.done?t(s):Promise.resolve(s).then(n,a)}function f(e){return function(){var t=this,r=arguments;return new Promise(function(n,a){var o=e.apply(t,r);function u(e){l(o,n,a,u,i,"next",e)}function i(e){l(o,n,a,u,i,"throw",e)}u(void 0)})}}var m={components:{UploadImgs:s["default"]},props:{bannerId:Number,editID:Number},data:function(){return{form:{id:0,title:"",name:"",description:"",img:""},rules:{name:[{required:!0,message:"请输入轮播图元素名称",trigger:"blur"}],key_word:[{required:!0,message:"请输入轮播图元素关键词",trigger:"blur"}]},imgRules:{minWidth:100,minHeight:100,maxSize:5},loading:!1}},created:function(){var e=f(u.a.mark(function e(){return u.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.loading=!0,e.next=3,banner.getItem(this.editID);case 3:this.form=e.sent,this.loading=!1;case 5:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),methods:{submitForm:function(e){var t=this;this.$refs[e].validate(function(){var r=f(u.a.mark(function r(n){var a,o,s,l,f;return u.a.wrap(function(r){while(1)switch(r.prev=r.next){case 0:if(!n){r.next=33;break}return r.prev=1,r.next=4,t.$refs.uploadEle.getValue();case 4:return a=r.sent,r.next=7,t.$refs.uploadLoadEle.getValue();case 7:return o=r.sent,t.form["img"]=i["default"].solveUploadImg(a),t.form["load_img"]=i["default"].solveUploadImg(o),t.bannerId>0&&(t.form["banner_id"]=t.bannerId),t.loading=!0,r.next=14,banner.updateItem(t.form.id,t.form);case 14:s=r.sent,t.loading=!1,0===s.error_code&&(t.$message.success("".concat(s.msg)),t.resetForm(e),t.back()),r.next=31;break;case 19:if(r.prev=19,r.t0=r["catch"](1),l=r.t0.data.msg,!l||"object"!==c(l)){r.next=31;break}r.t1=u.a.keys(l);case 24:if((r.t2=r.t1()).done){r.next=31;break}return f=r.t2.value,t.$message.error(l[f]),r.next=29,setTimeout(function(){},1e3);case 29:r.next=24;break;case 31:r.next=35;break;case 33:return t.$message.error("请填写正确的信息"),r.abrupt("return",!1);case 35:case"end":return r.stop()}},r,null,[[1,19]])}));return function(e){return r.apply(this,arguments)}}())},resetForm:function(e){this.$refs[e].resetFields()},solveShowImg:function(e){return i["default"].solveShowImg(e)},back:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.$emit("close",e)}}},p=m,d=(r("662b"),r("2877")),v=Object(d["a"])(p,n,a,!1,null,"619e4092",null);t["default"]=v.exports},"662b":function(e,t,r){"use strict";r("b6d2")},b6d2:function(e,t,r){},bb8b:function(e,t,r){"use strict";r.r(t);var n=r("a34a"),a=r.n(n),o=r("dfd8"),u=r("f121");function i(e,t,r,n,a,o,u){try{var i=e[o](u),s=i.value}catch(c){return void r(c)}i.done?t(s):Promise.resolve(s).then(n,a)}function s(e){return function(){var t=this,r=arguments;return new Promise(function(n,a){var o=e.apply(t,r);function u(e){i(o,n,a,u,s,"next",e)}function s(e){i(o,n,a,u,s,"throw",e)}u(void 0)})}}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,t,r){return t&&l(e.prototype,t),r&&l(e,r),e}var m=function(){function e(){c(this,e)}return f(e,[{key:"getLists",value:function(){var e=s(a.a.mark(function e(){var t,r,n,i,s,c=arguments;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:0,r=c.length>1&&void 0!==c[1]?c[1]:u["default"].pageSize,n=c.length>2&&void 0!==c[2]&&c[2],i={page:t,count:r,handleError:!0},n&&(i.status=n),e.next=7,Object(o["get"])("v1/customer_report",i);case 7:return s=e.sent,e.abrupt("return",s);case 9:case"end":return e.stop()}},e)}));function t(){return e.apply(this,arguments)}return t}()},{key:"getAll",value:function(){var e=s(a.a.mark(function e(){var t,r,n,i=arguments;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=i.length>0&&void 0!==i[0]?i[0]:0,r=i.length>1&&void 0!==i[1]?i[1]:u["default"].pageSize,e.next=4,Object(o["get"])("v1/customer_report/all",{page:t,count:r,handleError:!0});case 4:return n=e.sent,e.abrupt("return",n);case 6:case"end":return e.stop()}},e)}));function t(){return e.apply(this,arguments)}return t}()},{key:"getDetail",value:function(){var e=s(a.a.mark(function e(t){var r;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(o["get"])("v1/customer_report/".concat(t),{handleError:!0});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"getStatusDetail",value:function(){var e=s(a.a.mark(function e(t){var r;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(o["get"])("v1/customer_report/".concat(t,"/detail"),{handleError:!0});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"add",value:function(){var e=s(a.a.mark(function e(t){var r;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(o["post"])("v1/customer_report",t,{handleError:!0});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"edit",value:function(){var e=s(a.a.mark(function e(t,r){var n;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(o["put"])("v1/customer_report/".concat(t),r,{handleError:!0});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}},e)}));function t(t,r){return e.apply(this,arguments)}return t}()},{key:"del",value:function(){var e=s(a.a.mark(function e(t){var r;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(o["_delete"])("v1/customer_report",{ids:t});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()}]),e}();t["default"]=new m}}]);