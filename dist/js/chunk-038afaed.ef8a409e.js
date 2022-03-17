(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-038afaed","chunk-5ed1ff05","chunk-2d2165e6","chunk-2d0c8d5b","chunk-2d0df0a7","chunk-2d0d7df7"],{"016b":function(e,t,n){"use strict";n("5a7d")},"4b94":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",{staticClass:"title"},[e._v("新建SKU "),n("span",{staticClass:"back",on:{click:function(t){return e.back(!1)}}},[n("i",{staticClass:"iconfont icon-fanhui"}),e._v(" 返回 ")])]),n("div",{staticClass:"wrap"},[n("el-row",[n("el-col",{attrs:{lg:16,md:20,sm:24,xs:24}},[n("el-form",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"form",attrs:{model:e.form,"status-icon":"",rules:e.rules,"label-width":"120px"},nativeOn:{submit:function(e){e.preventDefault()}}},[n("el-form-item",{attrs:{label:"标题",prop:"title"}},[n("el-input",{attrs:{size:"medium",placeholder:"请填写标题"},model:{value:e.form.title,callback:function(t){e.$set(e.form,"title",t)},expression:"form.title"}})],1),n("el-form-item",{attrs:{label:"价格",prop:"price"}},[n("el-input-number",{attrs:{precision:2,step:.1,min:0,label:"描述文字"},on:{change:e.handlePriceChange},model:{value:e.form.price,callback:function(t){e.$set(e.form,"price",t)},expression:"form.price"}})],1),n("el-form-item",{staticClass:"discount_price",attrs:{label:"折扣",prop:"discount_price"}},[n("el-radio-group",{model:{value:e.discountRadio,callback:function(t){e.discountRadio=t},expression:"discountRadio"}},[n("el-radio",{attrs:{label:1}},[e._v("无折扣")]),n("el-radio",{attrs:{label:2}},[e._v("折扣价")]),n("el-radio",{attrs:{label:3}},[e._v("打折")])],1),n("el-input",{staticClass:"discount-input",attrs:{size:"medium",disabled:1===e.discountRadio,placeholder:"请输入折扣值"},on:{input:e.handleDiscountInput},model:{value:e.discountPrice,callback:function(t){e.discountPrice=t},expression:"discountPrice"}}),n("el-input",{attrs:{size:"medium",disabled:"",placeholder:"最终折扣值"},model:{value:e.form.discount_price,callback:function(t){e.$set(e.form,"discount_price",t)},expression:"form.discount_price"}})],1),n("el-form-item",{attrs:{label:"库存",prop:"stock"}},[n("el-input-number",{attrs:{min:0,label:"库存"},model:{value:e.form.stock,callback:function(t){e.$set(e.form,"stock",t)},expression:"form.stock"}})],1),n("el-form-item",{attrs:{label:"分类",prop:"category_id"}},[n("el-option",{attrs:{value:0,label:"请选择分类"}},[n("span",[e._v("请选择分类")])]),n("el-select",{attrs:{size:"medium",filterable:"",placeholder:"请选择分类"},model:{value:e.form.category_id,callback:function(t){e.$set(e.form,"category_id",t)},expression:"form.category_id"}},[e._l(e.cateData,function(t){return[n("el-option",{attrs:{value:t.id,label:t.name,disabled:""}},[n("span",{staticStyle:{color:"#b4b4b4","margin-right":"15px","font-size":"12px"}},[e._v(e._s(t.id))]),n("span",[e._v(e._s(t.name))])]),e._l(t.sub,function(r){return t.sub?[n("el-option",{attrs:{value:r.id,label:r.name}},[n("span",{staticStyle:{color:"#b4b4b4","margin-right":"15px","font-size":"12px"}},[e._v("┞----"+e._s(r.id))]),n("span",[e._v(e._s(r.name))])])]:e._e()})]})],2)],1),n("el-form-item",{attrs:{label:"SPU",prop:"category_id"}},[n("el-select",{attrs:{size:"medium",filterable:"",placeholder:"请选择所属SPU"},on:{change:e.spuChange},model:{value:e.form.spu_id,callback:function(t){e.$set(e.form,"spu_id",t)},expression:"form.spu_id"}},e._l(e.spuData,function(t){return n("el-option",{attrs:{value:t.id,label:t.title}},[n("span",{staticStyle:{color:"#b4b4b4","margin-right":"15px","font-size":"12px"}},[e._v(e._s(t.id))]),n("span",[e._v(e._s(t.title))])])}),1)],1),n("el-form-item",{attrs:{label:"是否上架",prop:"online"}},[n("el-switch",{attrs:{"active-color":"#3963bc"},model:{value:e.form.online,callback:function(t){e.$set(e.form,"online",t)},expression:"form.online"}})],1),n("el-form-item",{attrs:{label:"主图",prop:"img"}},[n("upload-imgs",{ref:"uploadEleMain",attrs:{rules:e.imgRules,maxNum:1}})],1),e._l(e.spuSpecData,function(t,r){return n("el-form-item",{attrs:{label:t.name,prop:"spec"}},[n("el-select",{attrs:{size:"medium",filterable:"",placeholder:"请选择"+t.name+"值"},model:{value:e.selSpecValue[t.id],callback:function(n){e.$set(e.selSpecValue,t.id,n)},expression:"selSpecValue[spec.id]"}},e._l(t.items,function(t){return n("el-option",{key:t.name,attrs:{value:t.id,label:t.name}},[n("span",{staticStyle:{color:"#b4b4b4","margin-right":"15px","font-size":"12px"}},[e._v(e._s(t.id))]),n("span",[e._v(e._s(t.name))])])}),1)],1)}),n("el-form-item",{staticClass:"submit"},[n("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("form")}}},[e._v("保 存")]),n("el-button",{on:{click:function(t){return e.resetForm("form")}}},[e._v("重 置")])],1)],2)],1)],1)],1)])},a=[],u=n("a34a"),i=n.n(u),c=n("c1bd"),s=n("5725"),o=n("7954"),l=(n("87e7"),n("306b")),p=n("e0ba"),f=n("f941");function d(e){return d="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function v(e,t,n,r,a,u,i){try{var c=e[u](i),s=c.value}catch(o){return void n(o)}c.done?t(s):Promise.resolve(s).then(r,a)}function h(e){return function(){var t=this,n=arguments;return new Promise(function(r,a){var u=e.apply(t,n);function i(e){v(u,r,a,i,c,"next",e)}function c(e){v(u,r,a,i,c,"throw",e)}i(void 0)})}}var m={name:"SkuAdd",components:{UploadImgs:p["default"],tag:f["default"]},data:function(){return{loading:!1,cateData:{},spuData:[],spuSpecData:[],discountRadio:1,discountPrice:"",specData:[],selSpecValue:{},form:{title:"",description:"",online:!0,specs:[],img:"",price:0,stock:0,discount_price:0},imgRules:{minWidth:100,minHeight:100,maxSize:5},rules:{}}},created:function(){this._initialize()},methods:{_initialize:function(){this.getTreeCate(),this.getSpus()},getTreeCate:function(){var e=h(i.a.mark(function e(){var t,n,r=arguments;return i.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:0,n=r.length>1&&void 0!==r[1]?r[1]:2,e.prev=2,e.next=5,c["default"].getTreeCate(t,n);case 5:this.cateData=e.sent,e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](2),this.cateData={};case 11:case"end":return e.stop()}},e,this,[[2,8]])}));function t(){return e.apply(this,arguments)}return t}(),getSpus:function(){var e=h(i.a.mark(function e(){var t;return i.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o["default"].getSpus(0,80);case 2:t=e.sent,this.spuData=t.collection,console.log(t);case 5:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),getSpuSpec:function(){var e=h(i.a.mark(function e(t){var n;return i.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=[],e.prev=1,e.next=4,o["default"].getSpuSpec(t);case 4:n=e.sent,e.next=9;break;case 7:e.prev=7,e.t0=e["catch"](1);case 9:this.sloveResSpec(n);case 10:case"end":return e.stop()}},e,this,[[1,7]])}));function t(t){return e.apply(this,arguments)}return t}(),spuChange:function(){var e=h(i.a.mark(function e(t){return i.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:this.getSpuSpec(t);case 1:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),sloveResSpec:function(e){if(e&&0!==e.length&&0!==e.specs.length){var t=e.specs,n={},r=[];t.forEach(function(e){n.id=e.id,n.name=e.name,n.items=e.items,r.push(n),n={}}),this.spuSpecData=r}else this.spuSpecData=[]},handlePriceChange:function(e){if(this.discountPrice){var t=this.discountPrice;this.getDiscountPrice(parseFloat(t))}},handleDiscountInput:function(e){var t=parseFloat(e);Number.isNaN(t)?this.discountPrice="":(this.discountPrice=e,this.getDiscountPrice(t))},getDiscountPrice:function(e){var t=this.discountRadio,n=0;switch(t){case 1:break;case 2:n=e;break;case 3:n=parseFloat(100*this.form.price*e*100/1e4);break}this.form.discount_price=n},submitForm:function(e){var t=this;this.$refs[e].validate(function(){var n=h(i.a.mark(function n(r){var a,u,c;return i.a.wrap(function(n){while(1)switch(n.prev=n.next){case 0:if(!r){n.next=27;break}return t.loading=!0,n.prev=2,n.next=5,t.solveAllImgs();case 5:return t.form["specs"]=t.solveReqSpec(),n.next=8,s["default"].addSku(t.form);case 8:a=n.sent,0===a.error_code&&(t.$message.success("".concat(a.msg)),t.resetForm(e),t.back()),n.next=24;break;case 12:if(n.prev=12,n.t0=n["catch"](2),u=n.t0.data.msg,!u||"object"!==d(u)){n.next=24;break}n.t1=i.a.keys(u);case 17:if((n.t2=n.t1()).done){n.next=24;break}return c=n.t2.value,t.$message.error(u[c]),n.next=22,setTimeout(function(){},1e3);case 22:n.next=17;break;case 24:t.loading=!1,n.next=29;break;case 27:return t.$message.error("请填写正确的信息"),n.abrupt("return",!1);case 29:case"end":return n.stop()}},n,null,[[2,12]])}));return function(e){return n.apply(this,arguments)}}())},solveAllImgs:function(){var e=h(i.a.mark(function e(){var t;return i.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$refs.uploadEleMain.getValue();case 2:t=e.sent,this.form["img"]=l["default"].solveUploadImg(t);case 4:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),solveReqSpec:function(){var e=this.spuSpecData,t=this.selSpecValue;e.length>0&&e.length!=Object.values(t).length&&this.$message.error("请确认规格是否全部选择");var n={},r=[],a=function(a){var u=e.find(function(e){return e.id===Number(a)});if(n.key_id=u.id,n.key=u.name,u.items.length>0){var i=u.items.find(function(e){return e.id===t[a]});n.value_id=i.id,n.value=i.name}r.push(n),n={}};for(var u in t)a(u);return r},resetForm:function(e){this.$refs[e].resetFields()},back:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.$emit("close",e)}},watch:{discountRadio:{handler:function(){this.discountPrice="",this.form.discount_price=0}}}},b=m,g=(n("4c57"),n("2877")),w=Object(g["a"])(b,r,a,!1,null,"ec266a1a",null);t["default"]=w.exports},"4c57":function(e,t,n){"use strict";n("cbea")},5725:function(e,t,n){"use strict";n.r(t);var r=n("a34a"),a=n.n(r),u=n("dfd8"),i=n("f121");function c(e,t,n,r,a,u,i){try{var c=e[u](i),s=c.value}catch(o){return void n(o)}c.done?t(s):Promise.resolve(s).then(r,a)}function s(e){return function(){var t=this,n=arguments;return new Promise(function(r,a){var u=e.apply(t,n);function i(e){c(u,r,a,i,s,"next",e)}function s(e){c(u,r,a,i,s,"throw",e)}i(void 0)})}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t,n){return t&&l(e.prototype,t),n&&l(e,n),e}var f=function(){function e(){o(this,e)}return p(e,[{key:"getSkus",value:function(){var e=s(a.a.mark(function e(){var t,n,r,c=arguments;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:0,n=c.length>1&&void 0!==c[1]?c[1]:i["default"].pageSize,console.log(n),e.next=5,Object(u["get"])("v1/sku",{page:t,count:n,handleError:!0});case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}},e)}));function t(){return e.apply(this,arguments)}return t}()},{key:"getSku",value:function(){var e=s(a.a.mark(function e(t){var n;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["get"])("v1/sku/".concat(t),{handleError:!0});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"addSku",value:function(){var e=s(a.a.mark(function e(t){var n;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["post"])("v1/sku",t,{handleError:!0});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"editSku",value:function(){var e=s(a.a.mark(function e(t,n){var r;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return console.log("============"),console.log(t),e.next=4,Object(u["put"])("v1/sku/".concat(t),n,{handleError:!0});case 4:return r=e.sent,e.abrupt("return",r);case 6:case"end":return e.stop()}},e)}));function t(t,n){return e.apply(this,arguments)}return t}()},{key:"delSku",value:function(){var e=s(a.a.mark(function e(t){var n;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["_delete"])("v1/sku",{ids:t});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()}]),e}();t["default"]=new f},"5a7d":function(e,t,n){},7954:function(e,t,n){"use strict";n.r(t);var r=n("a34a"),a=n.n(r),u=n("dfd8"),i=n("f121");function c(e,t,n,r,a,u,i){try{var c=e[u](i),s=c.value}catch(o){return void n(o)}c.done?t(s):Promise.resolve(s).then(r,a)}function s(e){return function(){var t=this,n=arguments;return new Promise(function(r,a){var u=e.apply(t,n);function i(e){c(u,r,a,i,s,"next",e)}function s(e){c(u,r,a,i,s,"throw",e)}i(void 0)})}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t,n){return t&&l(e.prototype,t),n&&l(e,n),e}var f=function(){function e(){o(this,e)}return p(e,[{key:"getSpus",value:function(){var e=s(a.a.mark(function e(){var t,n,r,c=arguments;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:0,n=c.length>1&&void 0!==c[1]?c[1]:i["default"].pageSize,e.next=4,Object(u["get"])("v1/spu",{page:t,count:n,handleError:!0});case 4:return r=e.sent,e.abrupt("return",r);case 6:case"end":return e.stop()}},e)}));function t(){return e.apply(this,arguments)}return t}()},{key:"getSpu",value:function(){var e=s(a.a.mark(function e(t){var n;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["get"])("v1/spu/".concat(t),{handleError:!0});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"addSpu",value:function(){var e=s(a.a.mark(function e(t){var n;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["post"])("v1/spu",t,{handleError:!0});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"editSpu",value:function(){var e=s(a.a.mark(function e(t,n){var r;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["put"])("v1/spu/".concat(t),n,{handleError:!0});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}},e)}));function t(t,n){return e.apply(this,arguments)}return t}()},{key:"delSpu",value:function(){var e=s(a.a.mark(function e(t){var n;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["_delete"])("v1/spu",{ids:t});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"getSpuSpec",value:function(){var e=s(a.a.mark(function e(t){var n;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["get"])("v1/spu/".concat(t,"/spec"),{handleError:!0});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()}]),e}();t["default"]=new f},"87e7":function(e,t,n){"use strict";n.r(t);var r=n("a34a"),a=n.n(r),u=n("dfd8"),i=n("f121");function c(e,t,n,r,a,u,i){try{var c=e[u](i),s=c.value}catch(o){return void n(o)}c.done?t(s):Promise.resolve(s).then(r,a)}function s(e){return function(){var t=this,n=arguments;return new Promise(function(r,a){var u=e.apply(t,n);function i(e){c(u,r,a,i,s,"next",e)}function s(e){c(u,r,a,i,s,"throw",e)}i(void 0)})}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t,n){return t&&l(e.prototype,t),n&&l(e,n),e}var f=function(){function e(){o(this,e)}return p(e,[{key:"getSpecs",value:function(){var e=s(a.a.mark(function e(){var t,n,r,c=arguments;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:0,n=c.length>1&&void 0!==c[1]?c[1]:i["default"].pageSize,e.next=4,Object(u["get"])("v1/spec",{page:t,count:n,handleError:!0});case 4:return r=e.sent,e.abrupt("return",r);case 6:case"end":return e.stop()}},e)}));function t(){return e.apply(this,arguments)}return t}()},{key:"getSpec",value:function(){var e=s(a.a.mark(function e(t){var n;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["get"])("v1/spec/".concat(t),{handleError:!0});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"addSpec",value:function(){var e=s(a.a.mark(function e(t){var n;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["post"])("v1/spec",t,{handleError:!0});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"editSpec",value:function(){var e=s(a.a.mark(function e(t,n){var r;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["put"])("v1/spec/".concat(t),n,{handleError:!0});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}},e)}));function t(t,n){return e.apply(this,arguments)}return t}()},{key:"delSpec",value:function(){var e=s(a.a.mark(function e(t){var n;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["_delete"])("v1/spec",{ids:t});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"getItem",value:function(){var e=s(a.a.mark(function e(t){var n;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["get"])("v1/spec/item/".concat(t),{handleError:!0});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"createItem",value:function(){var e=s(a.a.mark(function e(t){var n;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["post"])("v1/spec/item",t,{handleError:!0});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"updateItem",value:function(){var e=s(a.a.mark(function e(t,n){var r;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["put"])("v1/spec/item/".concat(t),n,{handleError:!0});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}},e)}));function t(t,n){return e.apply(this,arguments)}return t}()},{key:"delItem",value:function(){var e=s(a.a.mark(function e(t){var n;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["_delete"])("v1/spec/item",{ids:t});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()}]),e}();t["default"]=new f},c1bd:function(e,t,n){"use strict";n.r(t);var r=n("a34a"),a=n.n(r),u=n("dfd8");function i(e,t,n,r,a,u,i){try{var c=e[u](i),s=c.value}catch(o){return void n(o)}c.done?t(s):Promise.resolve(s).then(r,a)}function c(e){return function(){var t=this,n=arguments;return new Promise(function(r,a){var u=e.apply(t,n);function c(e){i(u,r,a,c,s,"next",e)}function s(e){i(u,r,a,c,s,"throw",e)}c(void 0)})}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}var p=function(){function e(){s(this,e)}return l(e,[{key:"getCate",value:function(){var e=c(a.a.mark(function e(t){var n;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["get"])("v1/category/".concat(t));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"getSonCate",value:function(){var e=c(a.a.mark(function e(){var t,n,r,i=arguments;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=i.length>0&&void 0!==i[0]?i[0]:-1,console.log(t),n="",t>=0&&(n+="?parent_id=".concat(t)),e.next=6,Object(u["get"])("v1/category".concat(n),{handleError:!0});case 6:return r=e.sent,e.abrupt("return",r);case 8:case"end":return e.stop()}},e)}));function t(){return e.apply(this,arguments)}return t}()},{key:"getTreeCate",value:function(){var e=c(a.a.mark(function e(){var t,n,r,i=arguments;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=i.length>0&&void 0!==i[0]?i[0]:0,n=i.length>1&&void 0!==i[1]?i[1]:0,e.next=4,Object(u["get"])("v1/category/".concat(t,"/deep?deep=").concat(n),{handleError:!0});case 4:return r=e.sent,e.abrupt("return",r);case 6:case"end":return e.stop()}},e)}));function t(){return e.apply(this,arguments)}return t}()},{key:"addCate",value:function(){var e=c(a.a.mark(function e(t){var n;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["post"])("v1/category",t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"updateCate",value:function(){var e=c(a.a.mark(function e(t,n){var r;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["put"])("v1/category/".concat(t),n);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}},e)}));function t(t,n){return e.apply(this,arguments)}return t}()},{key:"updateSingle",value:function(){var e=c(a.a.mark(function e(t){var n;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["patch"])("v1/category/single",t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"delCate",value:function(){var e=c(a.a.mark(function e(t){var n;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["_delete"])("v1/category",{ids:t});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()}]),e}();t["default"]=new p},cbea:function(e,t,n){},f941:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mg-tag"},[e._l(e.dynamicTags,function(t){return n("el-tag",{key:t,attrs:{closable:"","disable-transitions":!1},on:{close:function(n){return e.handleClose(t)}}},[e._v("\n\t\t"+e._s(t)+"\n\t")])}),e.inputVisible?n("el-input",{ref:"saveTagInput",staticClass:"input-new-tag",attrs:{size:"small"},on:{blur:e.handleInputConfirm},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleInputConfirm(t)}},model:{value:e.inputValue,callback:function(t){e.inputValue=t},expression:"inputValue"}}):n("el-button",{staticClass:"button-new-tag",attrs:{size:"small"},on:{click:e.showInput}},[e._v(e._s(e.btnName))])],2)},a=[],u={name:"tag",props:{btnName:{type:String,default:"添加标签"},tags:{type:Array,default:function(){return[]}}},data:function(){return{dynamicTags:[],inputVisible:!1,inputValue:""}},methods:{handleClose:function(e){this.dynamicTags.splice(this.dynamicTags.indexOf(e),1),this.$emit("handleConfirm",this.dynamicTags)},showInput:function(){var e=this;this.inputVisible=!0,this.$nextTick(function(t){e.$refs.saveTagInput.$refs.input.focus()})},handleInputConfirm:function(){var e=this.inputValue;e&&this.dynamicTags.push(e),this.inputVisible=!1,this.inputValue="",this.$emit("handleConfirm",this.dynamicTags)}},watch:{tags:{handler:function(e){this.dynamicTags=e},deep:!0}}},i=u,c=(n("016b"),n("2877")),s=Object(c["a"])(i,r,a,!1,null,"242f6bb6",null);t["default"]=s.exports}}]);