(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-09f4ba1c","chunk-2d0ea162","chunk-2d0c8d5b"],{5725:function(e,t,r){"use strict";r.r(t);var n=r("a34a"),a=r.n(n),o=r("dfd8"),u=r("f121");function i(e,t,r,n,a,o,u){try{var i=e[o](u),c=i.value}catch(s){return void r(s)}i.done?t(c):Promise.resolve(c).then(n,a)}function c(e){return function(){var t=this,r=arguments;return new Promise(function(n,a){var o=e.apply(t,r);function u(e){i(o,n,a,u,c,"next",e)}function c(e){i(o,n,a,u,c,"throw",e)}u(void 0)})}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,t,r){return t&&l(e.prototype,t),r&&l(e,r),e}var p=function(){function e(){s(this,e)}return f(e,[{key:"getSkus",value:function(){var e=c(a.a.mark(function e(){var t,r,n,i=arguments;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=i.length>0&&void 0!==i[0]?i[0]:0,r=i.length>1&&void 0!==i[1]?i[1]:u["default"].pageSize,console.log(r),e.next=5,Object(o["get"])("v1/sku",{page:t,count:r,handleError:!0});case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}},e)}));function t(){return e.apply(this,arguments)}return t}()},{key:"getSku",value:function(){var e=c(a.a.mark(function e(t){var r;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(o["get"])("v1/sku/".concat(t),{handleError:!0});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"addSku",value:function(){var e=c(a.a.mark(function e(t){var r;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(o["post"])("v1/sku",t,{handleError:!0});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"editSku",value:function(){var e=c(a.a.mark(function e(t,r){var n;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return console.log("============"),console.log(t),e.next=4,Object(o["put"])("v1/sku/".concat(t),r,{handleError:!0});case 4:return n=e.sent,e.abrupt("return",n);case 6:case"end":return e.stop()}},e)}));function t(t,r){return e.apply(this,arguments)}return t}()},{key:"delSku",value:function(){var e=c(a.a.mark(function e(t){var r;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(o["_delete"])("v1/sku",{ids:t});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()}]),e}();t["default"]=new p},"8ffd":function(e,t,r){"use strict";r.r(t);var n=r("a34a"),a=r.n(n),o=r("dfd8"),u=r("f121");function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(r,!0).forEach(function(t){s(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t,r,n,a,o,u){try{var i=e[o](u),c=i.value}catch(s){return void r(s)}i.done?t(c):Promise.resolve(c).then(n,a)}function f(e){return function(){var t=this,r=arguments;return new Promise(function(n,a){var o=e.apply(t,r);function u(e){l(o,n,a,u,i,"next",e)}function i(e){l(o,n,a,u,i,"throw",e)}u(void 0)})}}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function v(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function d(e,t,r){return t&&v(e.prototype,t),r&&v(e,r),e}var m=function(){function e(){p(this,e)}return d(e,[{key:"getStorages",value:function(){var e=f(a.a.mark(function e(){var t,r,n,i,s=arguments;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=s.length>0&&void 0!==s[0]?s[0]:0,r=s.length>1&&void 0!==s[1]?s[1]:{},n=s.length>2&&void 0!==s[2]?s[2]:u["default"].pageSize,e.next=5,Object(o["get"])("v1/sku_storage",c({page:t,count:n},r,{handleError:!0}));case 5:return i=e.sent,e.abrupt("return",i);case 7:case"end":return e.stop()}},e)}));function t(){return e.apply(this,arguments)}return t}()},{key:"getStorage",value:function(){var e=f(a.a.mark(function e(t){var r;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(o["get"])("v1/sku_storage/".concat(t),{handleError:!0});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"addStorage",value:function(){var e=f(a.a.mark(function e(t){var r;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(o["post"])("v1/sku_storage",t,{handleError:!0});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"editStorage",value:function(){var e=f(a.a.mark(function e(t,r){var n;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(o["put"])("v1/sku_storage/".concat(t),r,{handleError:!0});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}},e)}));function t(t,r){return e.apply(this,arguments)}return t}()},{key:"delStorage",value:function(){var e=f(a.a.mark(function e(t){var r;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(o["_delete"])("v1/sku_storage",{ids:t});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"getStorageRecord",value:function(){var e=f(a.a.mark(function e(){var t,r,n,i,c=arguments;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:0,r=c.length>1?c[1]:void 0,n=c.length>2&&void 0!==c[2]?c[2]:u["default"].pageSize,e.next=5,Object(o["get"])("v1/sku_storage/record",{page:t,count:n,id:r,handleError:!0});case 5:return i=e.sent,e.abrupt("return",i);case 7:case"end":return e.stop()}},e)}));function t(){return e.apply(this,arguments)}return t}()},{key:"createRecord",value:function(){var e=f(a.a.mark(function e(t){var r,n,u,i,c;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.count,n=t.type,u=t.status,i=t.storage_id,e.next=3,Object(o["post"])("v1/sku_storage/record",{count:r,type:n,status:u,storage_id:i,handleError:!0});case 3:return c=e.sent,e.abrupt("return",c);case 5:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()}]),e}();t["default"]=new m},ba05:function(e,t,r){},c219:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("div",{staticClass:"title"},[e._v("新建库存商品 "),r("span",{staticClass:"back",on:{click:function(t){return e.back(!1)}}},[r("i",{staticClass:"iconfont icon-fanhui"}),e._v(" 返回 ")])]),r("div",{staticClass:"wrap"},[r("el-row",[r("el-col",{attrs:{lg:16,md:20,sm:24,xs:24}},[r("el-form",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"form",attrs:{model:e.form,"status-icon":"",rules:e.rules,"label-width":"120px"},nativeOn:{submit:function(e){e.preventDefault()}}},[r("el-form-item",{attrs:{label:"标题",prop:"title"}},[r("el-input",{attrs:{size:"medium",placeholder:"请填写标题"},model:{value:e.form.title,callback:function(t){e.$set(e.form,"title",t)},expression:"form.title"}})],1),r("el-form-item",{attrs:{label:"属性值",prop:"prop_value"}},[r("el-input",{attrs:{size:"medium",placeholder:"请填写sku属性值"},model:{value:e.form.prop_value,callback:function(t){e.$set(e.form,"prop_value",t)},expression:"form.prop_value"}})],1),r("el-form-item",{attrs:{label:"价格",prop:"price"}},[r("el-input-number",{attrs:{precision:2,step:.1,min:0,label:"价格"},model:{value:e.form.price,callback:function(t){e.$set(e.form,"price",t)},expression:"form.price"}})],1),r("el-form-item",{attrs:{label:"出厂价格",prop:"original_price"}},[r("el-input-number",{attrs:{precision:2,step:.1,min:0,label:"出厂价格"},model:{value:e.form.original_price,callback:function(t){e.$set(e.form,"original_price",t)},expression:"form.original_price"}})],1),r("el-form-item",{attrs:{label:"SKU",prop:"sku_id"}},[r("el-select",{attrs:{size:"medium",filterable:"",placeholder:"请选择所属SKU"},on:{change:e.skuChange},model:{value:e.form.sku_id,callback:function(t){e.$set(e.form,"sku_id",t)},expression:"form.sku_id"}},e._l(e.skuData,function(t){return r("el-option",{attrs:{value:t.id,label:t.title}},[r("span",{staticStyle:{color:"#b4b4b4","margin-right":"15px","font-size":"12px"}},[e._v(e._s(t.id))]),r("span",[e._v(e._s(t.title))])])}),1)],1),r("el-form-item",{attrs:{label:"是否上架",prop:"online"}},[r("el-switch",{attrs:{"active-color":"#3963bc"},model:{value:e.form.online,callback:function(t){e.$set(e.form,"online",t)},expression:"form.online"}})],1),r("el-form-item",{staticClass:"submit"},[r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("form")}}},[e._v("保 存")]),r("el-button",{on:{click:function(t){return e.resetForm("form")}}},[e._v("重 置")])],1)],1)],1)],1)],1)])},a=[],o=r("a34a"),u=r.n(o),i=r("5725"),c=r("8ffd");function s(e){return s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function l(e,t,r,n,a,o,u){try{var i=e[o](u),c=i.value}catch(s){return void r(s)}i.done?t(c):Promise.resolve(c).then(n,a)}function f(e){return function(){var t=this,r=arguments;return new Promise(function(n,a){var o=e.apply(t,r);function u(e){l(o,n,a,u,i,"next",e)}function i(e){l(o,n,a,u,i,"throw",e)}u(void 0)})}}var p={name:"add",data:function(){return{loading:!1,skuData:[],form:{title:"",prop_value:"",online:!0,price:0,original_price:0},rules:{}}},created:function(){this.getSkus()},methods:{getSkus:function(){var e=f(u.a.mark(function e(){var t;return u.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,i["default"].getSkus(0,100);case 2:t=e.sent,this.skuData=t.collection;case 4:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),skuChange:function(){var e=f(u.a.mark(function e(t){var r,n;return u.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(r=this.skuData.filter(function(e){return e.id===t}),r&&!(r.length<=0)){e.next=3;break}return e.abrupt("return");case 3:n=this.form,n.title=r[0]["title"],n.online=1==r[0]["online"],n.price=r[0]["price"],n.img=r[0]["img"],r[0]["spu"]&&(n.code=r[0]["spu"]["code"]),this.form=n;case 10:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),submitForm:function(e){var t=this;this.$refs[e].validate(function(){var r=f(u.a.mark(function r(n){var a,o,i;return u.a.wrap(function(r){while(1)switch(r.prev=r.next){case 0:if(!n){r.next=24;break}return t.loading=!0,r.prev=2,r.next=5,c["default"].addStorage(t.form);case 5:a=r.sent,0===a.error_code&&(t.$message.success("".concat(a.msg)),t.resetForm(e),t.back()),r.next=21;break;case 9:if(r.prev=9,r.t0=r["catch"](2),o=r.t0.data.msg,!o||"object"!==s(o)){r.next=21;break}r.t1=u.a.keys(o);case 14:if((r.t2=r.t1()).done){r.next=21;break}return i=r.t2.value,t.$message.error(o[i]),r.next=19,setTimeout(function(){},1e3);case 19:r.next=14;break;case 21:t.loading=!1,r.next=26;break;case 24:return t.$message.error("请填写正确的信息"),r.abrupt("return",!1);case 26:case"end":return r.stop()}},r,null,[[2,9]])}));return function(e){return r.apply(this,arguments)}}())},resetForm:function(e){this.$refs[e].resetFields()},back:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.$emit("close",e)}}},v=p,d=(r("dcd0"),r("2877")),m=Object(d["a"])(v,n,a,!1,null,"2f8e1af8",null);t["default"]=m.exports},dcd0:function(e,t,r){"use strict";r("ba05")}}]);