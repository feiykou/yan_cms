(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-455f031f","chunk-5ed1ff05","chunk-2d2165e6","chunk-2d0c8d5b","chunk-2d0df0a7","chunk-2d0d7df7"],{"016b":function(e,t,r){"use strict";r("5a7d")},5725:function(e,t,r){"use strict";r.r(t);var n=r("a34a"),a=r.n(n),i=r("dfd8"),s=r("f121");function u(e,t,r,n,a,i,s){try{var u=e[i](s),c=u.value}catch(o){return void r(o)}u.done?t(c):Promise.resolve(c).then(n,a)}function c(e){return function(){var t=this,r=arguments;return new Promise(function(n,a){var i=e.apply(t,r);function s(e){u(i,n,a,s,c,"next",e)}function c(e){u(i,n,a,s,c,"throw",e)}s(void 0)})}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e,t,r){return t&&l(e.prototype,t),r&&l(e,r),e}var f=function(){function e(){o(this,e)}return p(e,[{key:"getSkus",value:function(){var e=c(a.a.mark(function e(){var t,r,n,u=arguments;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=u.length>0&&void 0!==u[0]?u[0]:0,r=u.length>1&&void 0!==u[1]?u[1]:s["default"].pageSize,console.log(r),e.next=5,Object(i["get"])("v1/sku",{page:t,count:r,handleError:!0});case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}},e)}));function t(){return e.apply(this,arguments)}return t}()},{key:"getSku",value:function(){var e=c(a.a.mark(function e(t){var r;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(i["get"])("v1/sku/".concat(t),{handleError:!0});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"addSku",value:function(){var e=c(a.a.mark(function e(t){var r;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(i["post"])("v1/sku",t,{handleError:!0});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"editSku",value:function(){var e=c(a.a.mark(function e(t,r){var n;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return console.log("============"),console.log(t),e.next=4,Object(i["put"])("v1/sku/".concat(t),r,{handleError:!0});case 4:return n=e.sent,e.abrupt("return",n);case 6:case"end":return e.stop()}},e)}));function t(t,r){return e.apply(this,arguments)}return t}()},{key:"delSku",value:function(){var e=c(a.a.mark(function e(t){var r;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(i["_delete"])("v1/sku",{ids:t});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()}]),e}();t["default"]=new f},"57a2":function(e,t,r){"use strict";r("fffc")},"5a7d":function(e,t,r){},7954:function(e,t,r){"use strict";r.r(t);var n=r("a34a"),a=r.n(n),i=r("dfd8"),s=r("f121");function u(e,t,r,n,a,i,s){try{var u=e[i](s),c=u.value}catch(o){return void r(o)}u.done?t(c):Promise.resolve(c).then(n,a)}function c(e){return function(){var t=this,r=arguments;return new Promise(function(n,a){var i=e.apply(t,r);function s(e){u(i,n,a,s,c,"next",e)}function c(e){u(i,n,a,s,c,"throw",e)}s(void 0)})}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e,t,r){return t&&l(e.prototype,t),r&&l(e,r),e}var f=function(){function e(){o(this,e)}return p(e,[{key:"getSpus",value:function(){var e=c(a.a.mark(function e(){var t,r,n,u=arguments;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=u.length>0&&void 0!==u[0]?u[0]:0,r=u.length>1&&void 0!==u[1]?u[1]:s["default"].pageSize,e.next=4,Object(i["get"])("v1/spu",{page:t,count:r,handleError:!0});case 4:return n=e.sent,e.abrupt("return",n);case 6:case"end":return e.stop()}},e)}));function t(){return e.apply(this,arguments)}return t}()},{key:"getSpu",value:function(){var e=c(a.a.mark(function e(t){var r;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(i["get"])("v1/spu/".concat(t),{handleError:!0});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"addSpu",value:function(){var e=c(a.a.mark(function e(t){var r;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(i["post"])("v1/spu",t,{handleError:!0});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"editSpu",value:function(){var e=c(a.a.mark(function e(t,r){var n;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(i["put"])("v1/spu/".concat(t),r,{handleError:!0});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}},e)}));function t(t,r){return e.apply(this,arguments)}return t}()},{key:"delSpu",value:function(){var e=c(a.a.mark(function e(t){var r;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(i["_delete"])("v1/spu",{ids:t});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"getSpuSpec",value:function(){var e=c(a.a.mark(function e(t){var r;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(i["get"])("v1/spu/".concat(t,"/spec"),{handleError:!0});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()}]),e}();t["default"]=new f},"87e7":function(e,t,r){"use strict";r.r(t);var n=r("a34a"),a=r.n(n),i=r("dfd8"),s=r("f121");function u(e,t,r,n,a,i,s){try{var u=e[i](s),c=u.value}catch(o){return void r(o)}u.done?t(c):Promise.resolve(c).then(n,a)}function c(e){return function(){var t=this,r=arguments;return new Promise(function(n,a){var i=e.apply(t,r);function s(e){u(i,n,a,s,c,"next",e)}function c(e){u(i,n,a,s,c,"throw",e)}s(void 0)})}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e,t,r){return t&&l(e.prototype,t),r&&l(e,r),e}var f=function(){function e(){o(this,e)}return p(e,[{key:"getSpecs",value:function(){var e=c(a.a.mark(function e(){var t,r,n,u=arguments;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=u.length>0&&void 0!==u[0]?u[0]:0,r=u.length>1&&void 0!==u[1]?u[1]:s["default"].pageSize,e.next=4,Object(i["get"])("v1/spec",{page:t,count:r,handleError:!0});case 4:return n=e.sent,e.abrupt("return",n);case 6:case"end":return e.stop()}},e)}));function t(){return e.apply(this,arguments)}return t}()},{key:"getSpec",value:function(){var e=c(a.a.mark(function e(t){var r;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(i["get"])("v1/spec/".concat(t),{handleError:!0});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"addSpec",value:function(){var e=c(a.a.mark(function e(t){var r;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(i["post"])("v1/spec",t,{handleError:!0});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"editSpec",value:function(){var e=c(a.a.mark(function e(t,r){var n;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(i["put"])("v1/spec/".concat(t),r,{handleError:!0});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}},e)}));function t(t,r){return e.apply(this,arguments)}return t}()},{key:"delSpec",value:function(){var e=c(a.a.mark(function e(t){var r;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(i["_delete"])("v1/spec",{ids:t});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"getItem",value:function(){var e=c(a.a.mark(function e(t){var r;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(i["get"])("v1/spec/item/".concat(t),{handleError:!0});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"createItem",value:function(){var e=c(a.a.mark(function e(t){var r;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(i["post"])("v1/spec/item",t,{handleError:!0});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"updateItem",value:function(){var e=c(a.a.mark(function e(t,r){var n;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(i["put"])("v1/spec/item/".concat(t),r,{handleError:!0});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}},e)}));function t(t,r){return e.apply(this,arguments)}return t}()},{key:"delItem",value:function(){var e=c(a.a.mark(function e(t){var r;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(i["_delete"])("v1/spec/item",{ids:t});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()}]),e}();t["default"]=new f},c1bd:function(e,t,r){"use strict";r.r(t);var n=r("a34a"),a=r.n(n),i=r("dfd8");function s(e,t,r,n,a,i,s){try{var u=e[i](s),c=u.value}catch(o){return void r(o)}u.done?t(c):Promise.resolve(c).then(n,a)}function u(e){return function(){var t=this,r=arguments;return new Promise(function(n,a){var i=e.apply(t,r);function u(e){s(i,n,a,u,c,"next",e)}function c(e){s(i,n,a,u,c,"throw",e)}u(void 0)})}}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function l(e,t,r){return t&&o(e.prototype,t),r&&o(e,r),e}var p=function(){function e(){c(this,e)}return l(e,[{key:"getCate",value:function(){var e=u(a.a.mark(function e(t){var r;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(i["get"])("v1/category/".concat(t));case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"getSonCate",value:function(){var e=u(a.a.mark(function e(){var t,r,n,s=arguments;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=s.length>0&&void 0!==s[0]?s[0]:-1,console.log(t),r="",t>=0&&(r+="?parent_id=".concat(t)),e.next=6,Object(i["get"])("v1/category".concat(r),{handleError:!0});case 6:return n=e.sent,e.abrupt("return",n);case 8:case"end":return e.stop()}},e)}));function t(){return e.apply(this,arguments)}return t}()},{key:"getTreeCate",value:function(){var e=u(a.a.mark(function e(){var t,r,n,s=arguments;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=s.length>0&&void 0!==s[0]?s[0]:0,r=s.length>1&&void 0!==s[1]?s[1]:0,e.next=4,Object(i["get"])("v1/category/".concat(t,"/deep?deep=").concat(r),{handleError:!0});case 4:return n=e.sent,e.abrupt("return",n);case 6:case"end":return e.stop()}},e)}));function t(){return e.apply(this,arguments)}return t}()},{key:"addCate",value:function(){var e=u(a.a.mark(function e(t){var r;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(i["post"])("v1/category",t);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"updateCate",value:function(){var e=u(a.a.mark(function e(t,r){var n;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(i["put"])("v1/category/".concat(t),r);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}},e)}));function t(t,r){return e.apply(this,arguments)}return t}()},{key:"updateSingle",value:function(){var e=u(a.a.mark(function e(t){var r;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(i["patch"])("v1/category/single",t);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"delCate",value:function(){var e=u(a.a.mark(function e(t){var r;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(i["_delete"])("v1/category",{ids:t});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()}]),e}();t["default"]=new p},e529:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("div",{staticClass:"title"},[e._v("新建SPU "),r("span",{staticClass:"back",on:{click:function(t){return e.back(!1)}}},[r("i",{staticClass:"iconfont icon-fanhui"}),e._v(" 返回 ")])]),r("div",{staticClass:"wrap"},[r("el-row",[r("el-col",{attrs:{lg:16,md:20,sm:24,xs:24}},[r("el-form",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"form",attrs:{model:e.form,"status-icon":"",rules:e.rules,"label-width":"120px"},nativeOn:{submit:function(e){e.preventDefault()}}},[r("el-form-item",{attrs:{label:"标题",prop:"title"}},[r("el-input",{attrs:{size:"medium",placeholder:"请填写标题"},model:{value:e.form.title,callback:function(t){e.$set(e.form,"title",t)},expression:"form.title"}})],1),r("el-form-item",{attrs:{label:"副标题",prop:"subtitle"}},[r("el-input",{attrs:{size:"medium",placeholder:"请填写副标题"},model:{value:e.form.subtitle,callback:function(t){e.$set(e.form,"subtitle",t)},expression:"form.subtitle"}})],1),r("el-form-item",{attrs:{label:"文创标题",prop:"extratitle"}},[r("el-input",{attrs:{size:"medium",placeholder:"请填写文创标题"},model:{value:e.form.extratitle,callback:function(t){e.$set(e.form,"extratitle",t)},expression:"form.extratitle"}})],1),r("el-form-item",{attrs:{label:"文创描述",prop:"extradesc"}},[r("el-input",{attrs:{size:"medium",placeholder:"请填写文创描述"},model:{value:e.form.extradesc,callback:function(t){e.$set(e.form,"extradesc",t)},expression:"form.extradesc"}})],1),r("el-form-item",{attrs:{label:"价格",prop:"price"}},[r("el-input",{attrs:{size:"medium",placeholder:"请填写价格"},model:{value:e.form.price,callback:function(t){e.$set(e.form,"price",t)},expression:"form.price"}})],1),r("el-form-item",{attrs:{label:"折扣",prop:"discount_price"}},[r("el-input",{attrs:{size:"medium",placeholder:"请填写折扣"},model:{value:e.form.discount_price,callback:function(t){e.$set(e.form,"discount_price",t)},expression:"form.discount_price"}})],1),r("el-form-item",{attrs:{label:"淘宝口令",prop:"tb_command"}},[r("el-input",{attrs:{size:"medium",placeholder:"请填写淘宝口令"},model:{value:e.form.tb_command,callback:function(t){e.$set(e.form,"tb_command",t)},expression:"form.tb_command"}})],1),r("el-form-item",{attrs:{label:"分类",prop:"category_id"}},[r("el-select",{attrs:{size:"medium",filterable:"",placeholder:"请选择分类"},model:{value:e.form.category_id,callback:function(t){e.$set(e.form,"category_id",t)},expression:"form.category_id"}},[r("el-option",{attrs:{value:0,label:"请选择分类"}},[r("span",[e._v("请选择分类")])]),e._l(e.cateData,function(t){return[r("el-option",{key:t.id,attrs:{value:t.id,label:t.name}},[r("span",{staticStyle:{color:"#b4b4b4","margin-right":"15px","font-size":"12px"}},[e._v(e._s(t.id))]),r("span",[e._v(e._s(t.name))])]),e._l(t.sub,function(n){return t.sub?[r("el-option",{key:n.id,attrs:{value:n.id,label:n.name}},[r("span",{staticStyle:{color:"#b4b4b4","margin-right":"15px","font-size":"12px"}},[e._v("┞----"+e._s(n.id))]),r("span",[e._v(e._s(n.name))])])]:e._e()})]})],2)],1),r("el-form-item",{attrs:{label:"默认sku",prop:"default_sku_id"}},[r("el-select",{attrs:{size:"medium",filterable:"",placeholder:"请选择默认sku"},model:{value:e.form.default_sku_id,callback:function(t){e.$set(e.form,"default_sku_id",t)},expression:"form.default_sku_id"}},[r("el-option",{attrs:{value:0,label:"请选择分类"}},[r("span",[e._v("请选择分类")])]),e._l(e.skuData,function(t){return[r("el-option",{attrs:{value:t.id,label:t.title}},[r("span",{staticStyle:{color:"#b4b4b4","margin-right":"15px","font-size":"12px"}},[e._v(e._s(t.id))]),r("span",[e._v(e._s(t.title))])])]})],2)],1),r("el-form-item",{attrs:{label:"是否上架",prop:"online"}},[r("el-switch",{attrs:{"active-color":"#3963bc"},model:{value:e.form.online,callback:function(t){e.$set(e.form,"online",t)},expression:"form.online"}})],1),r("el-form-item",{attrs:{label:"主图",prop:"img"}},[r("upload-imgs",{ref:"uploadEleMain",attrs:{rules:e.imgRules,maxNum:1}})],1),r("el-form-item",{attrs:{label:"主题图",prop:"for_theme_img"}},[r("upload-imgs",{ref:"uploadEleTheme",attrs:{rules:e.imgRules,maxNum:1}})],1),r("el-form-item",{attrs:{label:"轮播图",prop:"spu_img_list"}},[r("upload-imgs",{ref:"uploadEleImg",attrs:{rules:e.imgRules,sortable:!0}})],1),r("el-form-item",{attrs:{label:"详情图",prop:"spu_detail_img_list"}},[r("upload-imgs",{ref:"uploadEleImgList",attrs:{rules:e.imgRules,sortable:!0}})],1),r("el-form-item",{attrs:{label:"规格图",prop:"spec_img"}},[r("upload-imgs",{ref:"uploadEleSpec",attrs:{rules:e.imgRules,maxNum:2}})],1),r("el-form-item",{attrs:{label:"注意事项",prop:"notice_img"}},[r("upload-imgs",{ref:"uploadEleNotice",attrs:{rules:e.imgRules,maxNum:2}})],1),r("el-form-item",{attrs:{label:"标签",prop:"tags"}},[r("tag",{on:{handleConfirm:e.handleTagConfirm}})],1),r("el-form-item",{staticClass:"multiple-select",attrs:{label:"选择规格",prop:"specs"}},[r("el-select",{attrs:{multiple:"",placeholder:"请选择规格"},on:{change:e.specChange},model:{value:e.form.specs,callback:function(t){e.$set(e.form,"specs",t)},expression:"form.specs"}},e._l(e.specData,function(e){return r("el-option",{key:e.value,attrs:{label:e.name,value:e.id}})}),1)],1),r("el-form-item",{attrs:{label:"可视规格",prop:"sketch_spec_id"}},[r("el-select",{attrs:{size:"medium",filterable:"",placeholder:"请选择可视规格"},on:{"visible-change":e.visibleChange},model:{value:e.form.sketch_spec_id,callback:function(t){e.$set(e.form,"sketch_spec_id",t)},expression:"form.sketch_spec_id"}},e._l(e.selSepcData,function(e){return r("el-option",{key:e.value,attrs:{value:e.spec_id,label:e.value}})}),1)],1),r("el-form-item",{attrs:{label:"是否测试",prop:"is_test"}},[r("el-switch",{attrs:{"active-color":"#3963bc"},model:{value:e.form.is_test,callback:function(t){e.$set(e.form,"is_test",t)},expression:"form.is_test"}})],1),r("el-form-item",{attrs:{label:"是否参加活动",prop:"is_active"}},[r("el-switch",{attrs:{"active-color":"#3963bc"},model:{value:e.form.is_active,callback:function(t){e.$set(e.form,"is_active",t)},expression:"form.is_active"}})],1),r("el-form-item",{attrs:{label:"描述",prop:"description"}},[r("el-input",{attrs:{size:"medium",placeholder:"请填写描述"},model:{value:e.form.description,callback:function(t){e.$set(e.form,"description",t)},expression:"form.description"}})],1),r("el-form-item",{attrs:{label:"扩展字段",prop:"extend_field"}},[r("el-input",{attrs:{size:"medium",placeholder:"请填写分享位置索引"},model:{value:e.form.extend_field,callback:function(t){e.$set(e.form,"extend_field",t)},expression:"form.extend_field"}})],1),r("el-form-item",{attrs:{label:"已售数量",prop:"sale_num"}},[r("el-input",{attrs:{size:"medium",placeholder:"请填写已售数量"},model:{value:e.form.sale_num,callback:function(t){e.$set(e.form,"sale_num",t)},expression:"form.sale_num"}})],1),r("el-form-item",{attrs:{label:"总数量",prop:"total_num"}},[r("el-input",{attrs:{size:"medium",placeholder:"请填写总数量"},model:{value:e.form.total_num,callback:function(t){e.$set(e.form,"total_num",t)},expression:"form.total_num"}})],1),r("el-form-item",{staticClass:"submit"},[r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("form")}}},[e._v("保 存")]),r("el-button",{on:{click:function(t){return e.resetForm("form")}}},[e._v("重 置")])],1)],1)],1)],1)],1)])},a=[],i=r("a34a"),s=r.n(i),u=r("c1bd"),c=r("7954"),o=r("87e7"),l=r("5725"),p=r("306b"),f=r("e0ba"),m=r("f941");function d(e){return d="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function v(e,t,r,n,a,i,s){try{var u=e[i](s),c=u.value}catch(o){return void r(o)}u.done?t(c):Promise.resolve(c).then(n,a)}function h(e){return function(){var t=this,r=arguments;return new Promise(function(n,a){var i=e.apply(t,r);function s(e){v(i,n,a,s,u,"next",e)}function u(e){v(i,n,a,s,u,"throw",e)}s(void 0)})}}var b={name:"SpuAdd",components:{UploadImgs:f["default"],tag:m["default"]},data:function(){return{loading:!1,cateData:{},skuData:[],specData:[],selSepcData:[],form:{title:"",name:"",description:"",online:!0,is_active:!1,specs:[],spu_detail_img_list:[],spu_img_list:[],for_theme_img:"",sketch_spec_id:"",img:"",tags:[]},imgRules:{minWidth:100,minHeight:100,maxSize:5},rules:{name:[{required:!0,message:"请输入名称",trigger:"blur"}],title:[{required:!0,message:"请输入标题",trigger:"blur"}],tpl_name:[{required:!0,message:"请输入模板名",trigger:"blur"}]}}},created:function(){this._initialize()},methods:{_initialize:function(){this.getSkus(),this.getTreeCate(),this.getSpecs()},getSkus:function(){var e=h(s.a.mark(function e(){var t;return s.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,l["default"].getSkus(0,80);case 2:t=e.sent,this.skuData=t["collection"];case 4:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),getTreeCate:function(){var e=h(s.a.mark(function e(){var t,r,n=arguments;return s.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:0,r=n.length>1&&void 0!==n[1]?n[1]:2,e.prev=2,e.next=5,u["default"].getTreeCate(t,r);case 5:this.cateData=e.sent,e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](2),this.cateData={};case 11:case"end":return e.stop()}},e,this,[[2,8]])}));function t(){return e.apply(this,arguments)}return t}(),getSpecs:function(){var e=h(s.a.mark(function e(){var t;return s.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o["default"].getSpecs(0,20);case 3:t=e.sent,this.specData=t.collection,this.solveSpecs(this.specData),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),this.specData=[];case 11:case"end":return e.stop()}},e,this,[[0,8]])}));function t(){return e.apply(this,arguments)}return t}(),visibleChange:function(e){e&&0===this.selSepcData.length&&this.$message.error("请先选择规格")},specChange:function(e){var t=this,r=e.map(function(e){if(t.solveSpec[e])return t.solveSpec[e]});this.selSepcData=r,this.observerSketchSpecId(r)},observerSketchSpecId:function(e){var t=this.form.sketch_spec_id;t||(this.form.sketch_spec_id="");var r=e.some(function(e){return e.spec_id===t});r||this.$set(this.form,"sketch_spec_id","")},solveSpecs:function(e){if(Array.isArray(e)&&0!==e.length){var t={};e.forEach(function(e){var r=e["id"]||e["spec_id"];t[r]={spec_id:r,value:e["name"]||e["value"]}}),this.solveSpec=t}},submitForm:function(e){var t=this;this.$refs[e].validate(function(){var r=h(s.a.mark(function r(n){var a,i,u;return s.a.wrap(function(r){while(1)switch(r.prev=r.next){case 0:if(!n){r.next=28;break}return t.loading=!0,r.prev=2,r.next=5,t.solveAllImgs();case 5:return t.form["specs"]=t.selSepcData,t.form["tags"]=t.form["tags"].join("$"),r.next=9,c["default"].addSpu(t.form);case 9:a=r.sent,0===a.error_code&&(t.$message.success("".concat(a.msg)),t.resetForm(e),t.back()),r.next=25;break;case 13:if(r.prev=13,r.t0=r["catch"](2),i=r.t0.data.msg,!i||"object"!==d(i)){r.next=25;break}r.t1=s.a.keys(i);case 18:if((r.t2=r.t1()).done){r.next=25;break}return u=r.t2.value,t.$message.error(i[u]),r.next=23,setTimeout(function(){},1e3);case 23:r.next=18;break;case 25:t.loading=!1,r.next=30;break;case 28:return t.$message.error("请填写正确的信息"),r.abrupt("return",!1);case 30:case"end":return r.stop()}},r,null,[[2,13]])}));return function(e){return r.apply(this,arguments)}}())},solveAllImgs:function(){var e=h(s.a.mark(function e(){var t,r,n,a,i,u;return s.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$refs.uploadEleMain.getValue();case 2:return t=e.sent,e.next=5,this.$refs.uploadEleTheme.getValue();case 5:return r=e.sent,e.next=8,this.$refs.uploadEleImg.getValue();case 8:return n=e.sent,e.next=11,this.$refs.uploadEleImgList.getValue();case 11:return a=e.sent,e.next=14,this.$refs.uploadEleSpec.getValue();case 14:return i=e.sent,e.next=17,this.$refs.uploadEleNotice.getValue();case 17:u=e.sent,this.form["img"]=p["default"].solveUploadImg(t),this.form["for_theme_img"]=p["default"].solveUploadImg(r),this.form["spu_img_list"]=p["default"].solveUploadMultipleImg(n),this.form["spu_detail_img_list"]=p["default"].solveUploadMultipleImg(a),this.form["spec_img"]=p["default"].solveUploadMultipleImg(i),this.form["notice_img"]=p["default"].solveUploadMultipleImg(u);case 24:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),handleTagConfirm:function(e){this.form.tags=e},resetForm:function(e){this.$refs[e].resetFields()},back:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.$emit("close",e)}}},g=b,k=(r("57a2"),r("2877")),w=Object(k["a"])(g,n,a,!1,null,"ff657fce",null);t["default"]=w.exports},f941:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"mg-tag"},[e._l(e.dynamicTags,function(t){return r("el-tag",{key:t,attrs:{closable:"","disable-transitions":!1},on:{close:function(r){return e.handleClose(t)}}},[e._v("\n\t\t"+e._s(t)+"\n\t")])}),e.inputVisible?r("el-input",{ref:"saveTagInput",staticClass:"input-new-tag",attrs:{size:"small"},on:{blur:e.handleInputConfirm},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleInputConfirm(t)}},model:{value:e.inputValue,callback:function(t){e.inputValue=t},expression:"inputValue"}}):r("el-button",{staticClass:"button-new-tag",attrs:{size:"small"},on:{click:e.showInput}},[e._v(e._s(e.btnName))])],2)},a=[],i={name:"tag",props:{btnName:{type:String,default:"添加标签"},tags:{type:Array,default:function(){return[]}}},data:function(){return{dynamicTags:[],inputVisible:!1,inputValue:""}},methods:{handleClose:function(e){this.dynamicTags.splice(this.dynamicTags.indexOf(e),1),this.$emit("handleConfirm",this.dynamicTags)},showInput:function(){var e=this;this.inputVisible=!0,this.$nextTick(function(t){e.$refs.saveTagInput.$refs.input.focus()})},handleInputConfirm:function(){var e=this.inputValue;e&&this.dynamicTags.push(e),this.inputVisible=!1,this.inputValue="",this.$emit("handleConfirm",this.dynamicTags)}},watch:{tags:{handler:function(e){this.dynamicTags=e},deep:!0}}},s=i,u=(r("016b"),r("2877")),c=Object(u["a"])(s,n,a,!1,null,"242f6bb6",null);t["default"]=c.exports},fffc:function(e,t,r){}}]);