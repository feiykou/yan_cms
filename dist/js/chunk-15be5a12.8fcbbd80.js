(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-15be5a12","chunk-2d0aef18","chunk-2d2302d4"],{"0be5":function(e,t,r){"use strict";r.r(t);var n={1:"搜索",2:"spu",3:"分类",4:"文创"};t["default"]=n},5125:function(e,t,r){},"9c35":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("div",{staticClass:"title"},[e._v("新建tag "),r("span",{staticClass:"back",on:{click:function(t){return e.back(!1)}}},[r("i",{staticClass:"iconfont icon-fanhui"}),e._v(" 返回 ")])]),r("div",{staticClass:"wrap"},[r("el-row",[r("el-col",{attrs:{lg:16,md:20,sm:24,xs:24}},[r("el-form",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"form",attrs:{model:e.form,"status-icon":"",rules:e.rules,"label-width":"120px"},nativeOn:{submit:function(e){e.preventDefault()}}},[r("el-form-item",{attrs:{label:"标题",prop:"title"}},[r("el-input",{attrs:{size:"medium",placeholder:"请填写标题"},model:{value:e.form.title,callback:function(t){e.$set(e.form,"title",t)},expression:"form.title"}})],1),r("el-form-item",{attrs:{label:"类型",prop:"type"}},[r("el-select",{attrs:{size:"medium",filterable:"",placeholder:"请选择类型"},model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},e._l(e.typeArr,function(t,n){return r("el-option",{attrs:{value:e.setNumber(n),label:t}},[r("span",{staticStyle:{color:"#b4b4b4","margin-right":"15px","font-size":"12px"}},[e._v(e._s(n))]),r("span",[e._v(e._s(t))])])}),1)],1),r("el-form-item",{attrs:{label:"类型id",prop:"type_id"}},[r("el-input",{attrs:{size:"medium",placeholder:"请填写类型id"},model:{value:e.form.type_id,callback:function(t){e.$set(e.form,"type_id",t)},expression:"form.type_id"}})],1),r("el-form-item",{attrs:{label:"是否高亮",prop:"highlight"}},[r("el-switch",{attrs:{"active-color":"#3963bc"},model:{value:e.form.highlight,callback:function(t){e.$set(e.form,"highlight",t)},expression:"form.highlight"}})],1),r("el-form-item",{attrs:{label:"排序",prop:"order"}},[r("el-input",{attrs:{size:"medium",placeholder:"请填写排序"},model:{value:e.form.order,callback:function(t){e.$set(e.form,"order",t)},expression:"form.order"}})],1),r("el-form-item",{attrs:{label:"描述",prop:"description"}},[r("el-input",{attrs:{size:"medium",placeholder:"请填写描述"},model:{value:e.form.description,callback:function(t){e.$set(e.form,"description",t)},expression:"form.description"}})],1),r("el-form-item",{staticClass:"submit"},[r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("form")}}},[e._v("保 存")]),r("el-button",{on:{click:function(t){return e.resetForm("form")}}},[e._v("重 置")])],1)],1)],1)],1)],1)])},a=[],o=r("a34a"),i=r.n(o),c=r("0be5"),s=r("eabd");function u(e){return u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function l(e,t,r,n,a,o,i){try{var c=e[o](i),s=c.value}catch(u){return void r(u)}c.done?t(s):Promise.resolve(s).then(n,a)}function f(e){return function(){var t=this,r=arguments;return new Promise(function(n,a){var o=e.apply(t,r);function i(e){l(o,n,a,i,c,"next",e)}function c(e){l(o,n,a,i,c,"throw",e)}i(void 0)})}}var p={name:"TagAdd",props:{editID:Number},data:function(){return{loading:!1,typeArr:c["default"],cateData:{},spuData:[],form:{title:"",description:"",highlight:!1,order:50},rules:{}}},created:function(){this.getTag()},methods:{setNumber:function(e){if(console.log(e),e)return Number(e)},getTag:function(){var e=f(i.a.mark(function e(){return i.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.loading=!0,e.prev=1,e.next=4,s["default"].getTag(this.editID);case 4:this.form=e.sent,this.form["highlight"]=!!this.form["highlight"],e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](1),this.back(!1);case 11:this.loading=!1;case 12:case"end":return e.stop()}},e,this,[[1,8]])}));function t(){return e.apply(this,arguments)}return t}(),submitForm:function(e){var t=this;this.$refs[e].validate(function(){var r=f(i.a.mark(function r(n){var a,o,c;return i.a.wrap(function(r){while(1)switch(r.prev=r.next){case 0:if(!n){r.next=24;break}return t.loading=!0,r.prev=2,r.next=5,s["default"].editTag(t.editID,t.form);case 5:a=r.sent,0===a.error_code&&(t.$message.success("".concat(a.msg)),t.resetForm(e),t.back()),r.next=21;break;case 9:if(r.prev=9,r.t0=r["catch"](2),o=r.t0.data.msg,!o||"object"!==u(o)){r.next=21;break}r.t1=i.a.keys(o);case 14:if((r.t2=r.t1()).done){r.next=21;break}return c=r.t2.value,t.$message.error(o[c]),r.next=19,setTimeout(function(){},1e3);case 19:r.next=14;break;case 21:t.loading=!1,r.next=26;break;case 24:return t.$message.error("请填写正确的信息"),r.abrupt("return",!1);case 26:case"end":return r.stop()}},r,null,[[2,9]])}));return function(e){return r.apply(this,arguments)}}())},resetForm:function(e){this.$refs[e].resetFields()},back:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.$emit("close",e)}}},m=p,d=(r("b121"),r("2877")),h=Object(d["a"])(m,n,a,!1,null,"1a06d66e",null);t["default"]=h.exports},b121:function(e,t,r){"use strict";r("5125")},eabd:function(e,t,r){"use strict";r.r(t);var n=r("a34a"),a=r.n(n),o=r("dfd8"),i=r("f121");function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(r,!0).forEach(function(t){u(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t,r,n,a,o,i){try{var c=e[o](i),s=c.value}catch(u){return void r(u)}c.done?t(s):Promise.resolve(s).then(n,a)}function f(e){return function(){var t=this,r=arguments;return new Promise(function(n,a){var o=e.apply(t,r);function i(e){l(o,n,a,i,c,"next",e)}function c(e){l(o,n,a,i,c,"throw",e)}i(void 0)})}}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function d(e,t,r){return t&&m(e.prototype,t),r&&m(e,r),e}var h=function(){function e(){p(this,e)}return d(e,[{key:"getTags",value:function(){var e=f(a.a.mark(function e(){var t,r,n,c,u=arguments;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=u.length>0&&void 0!==u[0]?u[0]:0,r=u.length>1&&void 0!==u[1]?u[1]:{},n=u.length>2&&void 0!==u[2]?u[2]:i["default"].pageSize,e.next=5,Object(o["get"])("v1/tag",s({page:t,count:n},r,{handleError:!0}));case 5:return c=e.sent,e.abrupt("return",c);case 7:case"end":return e.stop()}},e)}));function t(){return e.apply(this,arguments)}return t}()},{key:"getTag",value:function(){var e=f(a.a.mark(function e(t){var r;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(o["get"])("v1/tag/".concat(t),{handleError:!0});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"addTag",value:function(){var e=f(a.a.mark(function e(t){var r;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(o["post"])("v1/tag",t,{handleError:!0});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"editTag",value:function(){var e=f(a.a.mark(function e(t,r){var n;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(o["put"])("v1/tag/".concat(t),r,{handleError:!0});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}},e)}));function t(t,r){return e.apply(this,arguments)}return t}()},{key:"delTag",value:function(){var e=f(a.a.mark(function e(t){var r;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(o["_delete"])("v1/tag",{ids:t});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()}]),e}();t["default"]=new h}}]);