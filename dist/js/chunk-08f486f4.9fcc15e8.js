(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-08f486f4","chunk-2d213ee6","chunk-2d229822","chunk-2d229822"],{"640f":function(e,r,t){"use strict";t.r(r);var n=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("el-form",{directives:[{name:"loading",rawName:"v-loading",value:e.sendLoading,expression:"sendLoading"}],ref:"sendForm",attrs:{model:e.sendForm,rules:e.sendRules},nativeOn:{submit:function(e){e.preventDefault()}}},[t("el-form-item",{attrs:{label:"请选择快递公司","label-width":"120px"}},[t("el-select",{attrs:{placeholder:"请选择公司",prop:"comp"},model:{value:e.sendForm.comp,callback:function(r){e.$set(e.sendForm,"comp",r)},expression:"sendForm.comp"}},e._l(e.company,function(e,r){return t("el-option",{attrs:{label:e,value:r}})}),1)],1),t("el-form-item",{attrs:{label:"快递编号","label-width":"120px",prop:"number"}},[t("el-input",{attrs:{autocomplete:"off"},model:{value:e.sendForm.number,callback:function(r){e.$set(e.sendForm,"number",r)},expression:"sendForm.number"}})],1),t("el-form-item",{attrs:{label:"","label-width":"120px"}},[t("el-button",{attrs:{type:"primary"},on:{click:function(r){return e.sendSku("sendForm")}}},[e._v("确认发货")])],1)],1)},a=[],u=t("a34a"),o=t.n(u),c=t("de6a"),s=t("af7b");function i(e){return i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function l(e,r,t,n,a,u,o){try{var c=e[u](o),s=c.value}catch(i){return void t(i)}c.done?r(s):Promise.resolve(s).then(n,a)}function p(e){return function(){var r=this,t=arguments;return new Promise(function(n,a){var u=e.apply(r,t);function o(e){l(u,n,a,o,c,"next",e)}function c(e){l(u,n,a,o,c,"throw",e)}o(void 0)})}}var f={name:"logistics",props:{order_id:Number},data:function(){return{company:s["default"],sendLoading:!1,sendRules:{number:[{required:!0,message:"请输入快递号",trigger:"blur"}],comp:[{required:!0,message:"请输入快递公司名",trigger:"blur"}]},sendForm:{number:"",comp:""}}},created:function(){},methods:{sendSku:function(e){var r=this;this.$refs[e].validate(function(){var e=p(o.a.mark(function e(t){var n,a,u,s;return o.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!t){e.next=33;break}return r.sendLoading=!0,e.prev=2,n=r.sendForm,n["orderID"]=r.order_id,e.next=7,c["default"].deliverGoods(n);case 7:a=e.sent,0===a.error_code&&(r.$message.success("".concat(a.msg)),r.$emit("send")),e.next=30;break;case 11:if(e.prev=11,e.t0=e["catch"](2),r.sendLoading=!1,console.log(e.t0),e.t0.data){e.next=18;break}return r.$message.error(e.t0),e.abrupt("return");case 18:if(u=e.t0.data.msg,!u||"object"!==i(u)){e.next=30;break}e.t1=o.a.keys(u);case 21:if((e.t2=e.t1()).done){e.next=30;break}if(s=e.t2.value,u[s]){e.next=25;break}return e.abrupt("continue",21);case 25:return r.$message.error(u[s]),e.next=28,setTimeout(function(){},1e3);case 28:e.next=21;break;case 30:r.sendLoading=!1,e.next=35;break;case 33:return r.$message.error("请填写正确的信息"),e.abrupt("return",!1);case 35:case"end":return e.stop()}},e,null,[[2,11]])}));return function(r){return e.apply(this,arguments)}}())}}},d=f,v=t("cba8"),b=Object(v["a"])(d,n,a,!1,null,"7a704252",null);r["default"]=b.exports},af7b:function(e,r,t){"use strict";t.r(r);var n={sf:"顺丰",sto:"申通",yt:"圆通",yd:"韵达",tt:"天天",ems:"EMS",zto:"中通",ht:"汇通",qf:"全峰",db:"德邦",gt:"国通",rfd:"如风达",jd:"京东",zjs:"宅急送",youzheng:"邮政快递",bsky:"百世"};r["default"]=n},de6a:function(e,r,t){"use strict";t.r(r);var n=t("a34a"),a=t.n(n),u=t("dfd8"),o=t("f121");function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(t,!0).forEach(function(r){i(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(t).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r,t,n,a,u,o){try{var c=e[u](o),s=c.value}catch(i){return void t(i)}c.done?r(s):Promise.resolve(s).then(n,a)}function p(e){return function(){var r=this,t=arguments;return new Promise(function(n,a){var u=e.apply(r,t);function o(e){l(u,n,a,o,c,"next",e)}function c(e){l(u,n,a,o,c,"throw",e)}o(void 0)})}}function f(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function d(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function v(e,r,t){return r&&d(e.prototype,r),t&&d(e,t),e}var b=function(){function e(){f(this,e)}return v(e,[{key:"getOrders",value:function(){var e=p(a.a.mark(function e(){var r,t,n,c,i=arguments;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=i.length>0&&void 0!==i[0]?i[0]:0,t=i.length>1&&void 0!==i[1]?i[1]:{},n=i.length>2&&void 0!==i[2]?i[2]:o["default"].pageSize,e.next=5,Object(u["get"])("v1/order",s({page:r,count:n},t,{handleError:!0}));case 5:return c=e.sent,e.abrupt("return",c);case 7:case"end":return e.stop()}},e)}));function r(){return e.apply(this,arguments)}return r}()},{key:"getOrder",value:function(){var e=p(a.a.mark(function e(r){var t;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["get"])("v1/order/".concat(r),{handleError:!0});case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}},e)}));function r(r){return e.apply(this,arguments)}return r}()},{key:"delOrder",value:function(){var e=p(a.a.mark(function e(r){var t;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["_delete"])("v1/order",{ids:r});case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}},e)}));function r(r){return e.apply(this,arguments)}return r}()},{key:"deliverGoods",value:function(){var e=p(a.a.mark(function e(r){var t,n,o,c;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=r.orderID,n=r.comp,o=r.number,e.next=3,Object(u["post"])("v1/order/shipment/".concat(t,"?handleError=true"),{comp:n,number:o});case 3:return c=e.sent,e.abrupt("return",c);case 5:case"end":return e.stop()}},e)}));function r(r){return e.apply(this,arguments)}return r}()},{key:"getLogistics",value:function(){var e=p(a.a.mark(function e(r){var t;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["get"])("v1/logistics/".concat(r,"?handleError=true"));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}},e)}));function r(r){return e.apply(this,arguments)}return r}()},{key:"getDeliverRecord",value:function(){var e=p(a.a.mark(function e(r){var t;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["get"])("v1/order/shipment/record/".concat(r,"?handleError=true"));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}},e)}));function r(r){return e.apply(this,arguments)}return r}()},{key:"updateDeliverRecord",value:function(){var e=p(a.a.mark(function e(r,t){var n;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["post"])("v1/logistics/".concat(r,"?handleError=true"),t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}},e)}));function r(r,t){return e.apply(this,arguments)}return r}()},{key:"updateSingle",value:function(){var e=p(a.a.mark(function e(r){var t;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["patch"])("v1/order/single",r);case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}},e)}));function r(r){return e.apply(this,arguments)}return r}()},{key:"getRefunds",value:function(){var e=p(a.a.mark(function e(r){var t;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["get"])("v1/order/refund/".concat(r,"?handleError=true"));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}},e)}));function r(r){return e.apply(this,arguments)}return r}()},{key:"getRefundDetail",value:function(){var e=p(a.a.mark(function e(r,t){var n;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["get"])("v1/order/refund/detail?order_id=".concat(r,"&sku_id=").concat(t,"&handleError=true"));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}},e)}));function r(r,t){return e.apply(this,arguments)}return r}()},{key:"refundCancel",value:function(){var e=p(a.a.mark(function e(r,t){var n;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["patch"])("v1/order/refund/cancel?order_id=".concat(r,"&sku_id=").concat(t,"&handleError=true"));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}},e)}));function r(r,t){return e.apply(this,arguments)}return r}()},{key:"refundAgree",value:function(){var e=p(a.a.mark(function e(r,t){var n;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["patch"])("v1/order/refund/agree?order_id=".concat(r,"&sku_id=").concat(t,"&handleError=true"));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}},e)}));function r(r,t){return e.apply(this,arguments)}return r}()},{key:"updateRefundSingle",value:function(){var e=p(a.a.mark(function e(r){var t;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["patch"])("v1/order/refund/single",r);case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}},e)}));function r(r){return e.apply(this,arguments)}return r}()}]),e}();r["default"]=new b}}]);