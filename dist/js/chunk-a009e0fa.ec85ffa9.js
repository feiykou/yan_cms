(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a009e0fa","chunk-2d21a460","chunk-2d0c5794"],{"3ef2":function(e,t,r){"use strict";r.r(t);var n=r("a34a"),a=r.n(n),u=r("dfd8"),o=r("f121");function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(r,!0).forEach(function(t){i(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t,r,n,a,u,o){try{var c=e[u](o),s=c.value}catch(i){return void r(i)}c.done?t(s):Promise.resolve(s).then(n,a)}function p(e){return function(){var t=this,r=arguments;return new Promise(function(n,a){var u=e.apply(t,r);function o(e){l(u,n,a,o,c,"next",e)}function c(e){l(u,n,a,o,c,"throw",e)}o(void 0)})}}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function v(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function m(e,t,r){return t&&v(e.prototype,t),r&&v(e,r),e}var d=function(){function e(){f(this,e)}return m(e,[{key:"getCustomers",value:function(){var e=p(a.a.mark(function e(){var t,r,n,c,i,l=arguments;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=l.length>0&&void 0!==l[0]?l[0]:0,r=l.length>1&&void 0!==l[1]?l[1]:{},n=l.length>2&&void 0!==l[2]?l[2]:o["default"].pageSize,c=s({page:t,count:n},r,{handleError:!0}),e.next=6,Object(u["get"])("v1/customer",c);case 6:return i=e.sent,e.abrupt("return",i);case 8:case"end":return e.stop()}},e)}));function t(){return e.apply(this,arguments)}return t}()},{key:"getAllCustomers",value:function(){var e=p(a.a.mark(function e(){var t,r,n,c,i=arguments;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=i.length>0&&void 0!==i[0]?i[0]:0,r=i.length>1&&void 0!==i[1]?i[1]:{},n=i.length>2&&void 0!==i[2]?i[2]:o["default"].pageSize,e.next=5,Object(u["get"])("v1/customer/all",s({page:t,count:n},r,{handleError:!0}));case 5:return c=e.sent,e.abrupt("return",c);case 7:case"end":return e.stop()}},e)}));function t(){return e.apply(this,arguments)}return t}()},{key:"updateCustomersEntryPublic",value:function(){var e=p(a.a.mark(function e(){var t,r,n=arguments;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:[],e.next=3,Object(u["put"])("v1/customer/public/release",{ids:t});case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}},e)}));function t(){return e.apply(this,arguments)}return t}()},{key:"getPublicAllCustomers",value:function(){var e=p(a.a.mark(function e(){var t,r,n,c=arguments;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:0,r=c.length>1&&void 0!==c[1]?c[1]:o["default"].pageSize,e.next=4,Object(u["get"])("v1/customer/public/all",{page:t,count:r,handleError:!0});case 4:return n=e.sent,e.abrupt("return",n);case 6:case"end":return e.stop()}},e)}));function t(){return e.apply(this,arguments)}return t}()},{key:"getPublicSetCustomers",value:function(){var e=p(a.a.mark(function e(t){var r;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["put"])("v1/customer/public/set",{cutomer_id:t},{handleError:!0});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"getCustomer",value:function(){var e=p(a.a.mark(function e(t){var r;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["get"])("v1/customer/".concat(t),{handleError:!0});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"getCustomerByLinkCode",value:function(){var e=p(a.a.mark(function e(){var t,r,n=arguments;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:0,e.next=3,Object(u["get"])("v1/customer/link_code/".concat(t),{handleError:!0});case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}},e)}));function t(){return e.apply(this,arguments)}return t}()},{key:"addCustomer",value:function(){var e=p(a.a.mark(function e(t){var r;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["post"])("v1/customer",t,{handleError:!0});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"editCustomer",value:function(){var e=p(a.a.mark(function e(t,r){var n;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["put"])("v1/customer/".concat(t),r,{handleError:!0});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}},e)}));function t(t,r){return e.apply(this,arguments)}return t}()},{key:"delCustomer",value:function(){var e=p(a.a.mark(function e(t){var r;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["_delete"])("v1/customer",{ids:t});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"updateMainCustomer",value:function(){var e=p(a.a.mark(function e(t){var r;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["put"])("v1/customer/main",t,{handleError:!0});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"updateFollowCustomer",value:function(){var e=p(a.a.mark(function e(t){var r;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["put"])("v1/customer/follow",t,{handleError:!0});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"updateFollowCustomer",value:function(){var e=p(a.a.mark(function e(t){var r;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["put"])("v1/customer/follow",t,{handleError:!0});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()}]),e}();t["default"]=new d},"435b":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("div",{staticClass:"title"},[e._v("添加客户报表")]),r("div",{staticClass:"wrap"},[r("el-row",[r("el-col",{attrs:{lg:16,md:20,sm:24,xs:24}},[r("el-form",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"form",attrs:{model:e.form,"status-icon":"",rules:e.rules,"label-width":"120px"},nativeOn:{submit:function(e){e.preventDefault()}}},[r("el-form-item",{attrs:{label:"名称",prop:"name"}},[r("el-input",{attrs:{size:"medium",placeholder:"请填写名称"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),r("el-form-item",{attrs:{label:"客户",prop:"user_id"}},[r("el-select",{attrs:{size:"medium",filterable:"",placeholder:"请选择客户"},model:{value:e.form.user_id,callback:function(t){e.$set(e.form,"user_id",t)},expression:"form.user_id"}},[e._l(e.customerData,function(t,n){return[r("el-option",{key:n,attrs:{value:t.id,label:t.name}},[r("span",{staticStyle:{color:"#b4b4b4","margin-right":"15px","font-size":"12px"}},[e._v(e._s(n+1))]),r("span",[e._v(e._s(t.name))])])]})],2)],1),r("el-form-item",{attrs:{label:"备注",prop:"remarks"}},[r("el-input",{attrs:{size:"medium",placeholder:"请输入备注"},model:{value:e.form.remarks,callback:function(t){e.$set(e.form,"remarks",t)},expression:"form.remarks"}})],1),r("el-form-item",{attrs:{label:"审核状态",prop:"status"}},[r("el-switch",{attrs:{"active-color":"#3963bc"},model:{value:e.form.status,callback:function(t){e.$set(e.form,"status",t)},expression:"form.status"}})],1),r("el-form-item",{staticClass:"submit"},[r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("form")}}},[e._v("保 存")]),r("el-button",{on:{click:function(t){return e.resetForm("form")}}},[e._v("重 置")])],1)],1)],1)],1)],1)])},a=[],u=r("a34a"),o=r.n(u),c=r("bb8b"),s=r("3ef2");function i(e){return i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function l(e,t,r,n,a,u,o){try{var c=e[u](o),s=c.value}catch(i){return void r(i)}c.done?t(s):Promise.resolve(s).then(n,a)}function p(e){return function(){var t=this,r=arguments;return new Promise(function(n,a){var u=e.apply(t,r);function o(e){l(u,n,a,o,c,"next",e)}function c(e){l(u,n,a,o,c,"throw",e)}o(void 0)})}}var f={data:function(){return{loading:!1,customerData:[],form:{user_id:"",name:"",remarks:"",status:!1},rules:{user_id:[{required:!0,message:"请选择用户",trigger:"blur"}],name:[{required:!0,message:"请输入名称",trigger:"blur"}],remarks:[{required:!0,message:"请输入备注",trigger:"blur"}]}}},created:function(){this.getCustomers()},methods:{getCustomers:function(){var e=p(o.a.mark(function e(){var t,r,n=arguments;return o.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:0,e.next=3,s["default"].getCustomers(t,100,1);case 3:if(r=e.sent,!(r.total_nums<=0)){e.next=7;break}return this.customerData=[],e.abrupt("return");case 7:this.customerData=r.collection;case 8:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),submitForm:function(e){var t=this;this.$refs[e].validate(function(){var r=p(o.a.mark(function r(n){var a,u,s;return o.a.wrap(function(r){while(1)switch(r.prev=r.next){case 0:if(!n){r.next=24;break}return r.prev=1,t.loading=!0,r.next=5,c["default"].add(t.form);case 5:a=r.sent,t.loading=!1,0===a.error_code&&(t.$message.success("".concat(a.msg)),t.resetForm(e)),r.next=22;break;case 10:if(r.prev=10,r.t0=r["catch"](1),u=r.t0.data.msg,!u||"object"!==i(u)){r.next=22;break}r.t1=o.a.keys(u);case 15:if((r.t2=r.t1()).done){r.next=22;break}return s=r.t2.value,t.$message.error(u[s]),r.next=20,setTimeout(function(){},1e3);case 20:r.next=15;break;case 22:r.next=26;break;case 24:return t.$message.error("请填写正确的信息"),r.abrupt("return",!1);case 26:case"end":return r.stop()}},r,null,[[1,10]])}));return function(e){return r.apply(this,arguments)}}())},resetForm:function(e){this.$refs[e].resetFields()}}},v=f,m=(r("474d"),r("cba8")),d=Object(m["a"])(v,n,a,!1,null,"f45dfa3c",null);t["default"]=d.exports},"474d":function(e,t,r){"use strict";r("e404")},bb8b:function(e,t,r){"use strict";r.r(t);var n=r("a34a"),a=r.n(n),u=r("dfd8"),o=r("f121");function c(e,t,r,n,a,u,o){try{var c=e[u](o),s=c.value}catch(i){return void r(i)}c.done?t(s):Promise.resolve(s).then(n,a)}function s(e){return function(){var t=this,r=arguments;return new Promise(function(n,a){var u=e.apply(t,r);function o(e){c(u,n,a,o,s,"next",e)}function s(e){c(u,n,a,o,s,"throw",e)}o(void 0)})}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e,t,r){return t&&l(e.prototype,t),r&&l(e,r),e}var f=function(){function e(){i(this,e)}return p(e,[{key:"getLists",value:function(){var e=s(a.a.mark(function e(){var t,r,n,c,s,i=arguments;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=i.length>0&&void 0!==i[0]?i[0]:0,r=i.length>1&&void 0!==i[1]?i[1]:o["default"].pageSize,n=i.length>2&&void 0!==i[2]&&i[2],c={page:t,count:r,handleError:!0},n&&(c.status=n),e.next=7,Object(u["get"])("v1/customer_report",c);case 7:return s=e.sent,e.abrupt("return",s);case 9:case"end":return e.stop()}},e)}));function t(){return e.apply(this,arguments)}return t}()},{key:"getAll",value:function(){var e=s(a.a.mark(function e(){var t,r,n,c=arguments;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:0,r=c.length>1&&void 0!==c[1]?c[1]:o["default"].pageSize,e.next=4,Object(u["get"])("v1/customer_report/all",{page:t,count:r,handleError:!0});case 4:return n=e.sent,e.abrupt("return",n);case 6:case"end":return e.stop()}},e)}));function t(){return e.apply(this,arguments)}return t}()},{key:"getDetail",value:function(){var e=s(a.a.mark(function e(t){var r;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["get"])("v1/customer_report/".concat(t),{handleError:!0});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"getStatusDetail",value:function(){var e=s(a.a.mark(function e(t){var r;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["get"])("v1/customer_report/".concat(t,"/detail"),{handleError:!0});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"add",value:function(){var e=s(a.a.mark(function e(t){var r;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["post"])("v1/customer_report",t,{handleError:!0});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"edit",value:function(){var e=s(a.a.mark(function e(t,r){var n;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["put"])("v1/customer_report/".concat(t),r,{handleError:!0});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}},e)}));function t(t,r){return e.apply(this,arguments)}return t}()},{key:"del",value:function(){var e=s(a.a.mark(function e(t){var r;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["_delete"])("v1/customer_report",{ids:t});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()}]),e}();t["default"]=new f},e404:function(e,t,r){}}]);