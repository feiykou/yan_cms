(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["views-customer-CustomerAdd","lin-models-admin","models-customer","models-type"],{"3ef2":function(e,t,r){"use strict";r.r(t);var n=r("a34a"),a=r.n(n),u=r("dfd8"),s=r("f121");function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(r,!0).forEach(function(t){i(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t,r,n,a,u,s){try{var c=e[u](s),o=c.value}catch(i){return void r(i)}c.done?t(o):Promise.resolve(o).then(n,a)}function p(e){return function(){var t=this,r=arguments;return new Promise(function(n,a){var u=e.apply(t,r);function s(e){l(u,n,a,s,c,"next",e)}function c(e){l(u,n,a,s,c,"throw",e)}s(void 0)})}}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function v(e,t,r){return t&&m(e.prototype,t),r&&m(e,r),e}var d=function(){function e(){f(this,e)}return v(e,[{key:"getCustomers",value:function(){var e=p(a.a.mark(function e(){var t,r,n,c,i,l=arguments;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=l.length>0&&void 0!==l[0]?l[0]:0,r=l.length>1&&void 0!==l[1]?l[1]:{},n=l.length>2&&void 0!==l[2]?l[2]:s["default"].pageSize,c=o({page:t,count:n},r,{handleError:!0}),e.next=6,Object(u["get"])("v1/customer",c);case 6:return i=e.sent,e.abrupt("return",i);case 8:case"end":return e.stop()}},e)}));function t(){return e.apply(this,arguments)}return t}()},{key:"getAllCustomers",value:function(){var e=p(a.a.mark(function e(){var t,r,n,c,i=arguments;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=i.length>0&&void 0!==i[0]?i[0]:0,r=i.length>1&&void 0!==i[1]?i[1]:{},n=i.length>2&&void 0!==i[2]?i[2]:s["default"].pageSize,e.next=5,Object(u["get"])("v1/customer/all",o({page:t,count:n},r,{handleError:!0}));case 5:return c=e.sent,e.abrupt("return",c);case 7:case"end":return e.stop()}},e)}));function t(){return e.apply(this,arguments)}return t}()},{key:"updateCustomersEntryPublic",value:function(){var e=p(a.a.mark(function e(){var t,r,n=arguments;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:[],e.next=3,Object(u["put"])("v1/customer/public/release",{ids:t});case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}},e)}));function t(){return e.apply(this,arguments)}return t}()},{key:"getPublicAllCustomers",value:function(){var e=p(a.a.mark(function e(){var t,r,n,c=arguments;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:0,r=c.length>1&&void 0!==c[1]?c[1]:s["default"].pageSize,e.next=4,Object(u["get"])("v1/customer/public/all",{page:t,count:r,handleError:!0});case 4:return n=e.sent,e.abrupt("return",n);case 6:case"end":return e.stop()}},e)}));function t(){return e.apply(this,arguments)}return t}()},{key:"getPublicSetCustomers",value:function(){var e=p(a.a.mark(function e(t){var r;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["put"])("v1/customer/public/set",{cutomer_id:t},{handleError:!0});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"getCustomer",value:function(){var e=p(a.a.mark(function e(t){var r;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["get"])("v1/customer/".concat(t),{handleError:!0});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"getCustomerByLinkCode",value:function(){var e=p(a.a.mark(function e(){var t,r,n=arguments;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:0,e.next=3,Object(u["get"])("v1/customer/link_code/".concat(t),{handleError:!0});case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}},e)}));function t(){return e.apply(this,arguments)}return t}()},{key:"addCustomer",value:function(){var e=p(a.a.mark(function e(t){var r;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["post"])("v1/customer",t,{handleError:!0});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"editCustomer",value:function(){var e=p(a.a.mark(function e(t,r){var n;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["put"])("v1/customer/".concat(t),r,{handleError:!0});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}},e)}));function t(t,r){return e.apply(this,arguments)}return t}()},{key:"delCustomer",value:function(){var e=p(a.a.mark(function e(t){var r;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["_delete"])("v1/customer",{ids:t});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"updateMainCustomer",value:function(){var e=p(a.a.mark(function e(t){var r;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["put"])("v1/customer/main",t,{handleError:!0});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"updateFollowCustomer",value:function(){var e=p(a.a.mark(function e(t){var r;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["put"])("v1/customer/follow",t,{handleError:!0});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"updateFollowCustomer",value:function(){var e=p(a.a.mark(function e(t){var r;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["put"])("v1/customer/follow",t,{handleError:!0});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()}]),e}();t["default"]=new d},4723:function(e,t,r){"use strict";r.r(t),r.d(t,"default",function(){return p});var n=r("a34a"),a=r.n(n),u=r("dfd8");function s(e,t,r,n,a,u,s){try{var c=e[u](s),o=c.value}catch(i){return void r(i)}c.done?t(o):Promise.resolve(o).then(n,a)}function c(e){return function(){var t=this,r=arguments;return new Promise(function(n,a){var u=e.apply(t,r);function c(e){s(u,n,a,c,o,"next",e)}function o(e){s(u,n,a,c,o,"throw",e)}c(void 0)})}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function l(e,t,r){return t&&i(e.prototype,t),r&&i(e,r),e}var p=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:5;o(this,e),this.uPage=t,this.uCount=r,this.lPage=n,this.gCount=a}return l(e,[{key:"increseUpage",value:function(){var e=c(a.a.mark(function e(){return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:this.uPage+=1;case 1:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},{key:"increseGpage",value:function(){var e=c(a.a.mark(function e(){return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:this.lPage+=1;case 1:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},{key:"decreseUpage",value:function(){var e=c(a.a.mark(function e(){return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:this.uPage-=1,this.uPage<0&&(this.uPage=0);case 2:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},{key:"decreseGpage",value:function(){var e=c(a.a.mark(function e(){return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:this.lPage-=1,this.lPage<0&&(this.lPage=0);case 2:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},{key:"nextUsersPage",value:function(){var e=c(a.a.mark(function e(){return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.increseUpage();case 2:return e.abrupt("return",this.getAdminUsers({}));case 3:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},{key:"preUsersPage",value:function(){var e=c(a.a.mark(function e(){return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.decreseUpage();case 2:return e.abrupt("return",this.getAdminUsers({}));case 3:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},{key:"getGroupsWithAuths",value:function(){var e=c(a.a.mark(function e(t){var r,n,s,c,o;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.count,n=void 0===r?this.uCount:r,s=t.page,c=void 0===s?this.uPag:s,e.next=3,Object(u["get"])("cms/admin/groups",{count:n,page:c});case 3:return o=e.sent,e.abrupt("return",o);case 5:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"nextGroupsPage",value:function(){var e=c(a.a.mark(function e(){return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.increseGpage();case 2:return e.abrupt("return",this.getGroupsWithAuths({}));case 3:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},{key:"preGroupsPage",value:function(){var e=c(a.a.mark(function e(){return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.decreseGpage();case 2:return e.abrupt("return",this.getGroupsWithAuths({}));case 3:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()}],[{key:"getAllAuths",value:function(){return Object(u["get"])("cms/admin/authority")}},{key:"getAdminUsers",value:function(){var e=c(a.a.mark(function e(t){var r,n,s,c,o,i;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(r=t.group_id,n=t.count,s=void 0===n?this.uCount:n,c=t.page,o=void 0===c?this.uPag:c,!r){e.next=7;break}return e.next=4,Object(u["get"])("cms/admin/users",{count:s,page:o,group_id:r});case 4:i=e.sent,e.next=10;break;case 7:return e.next=9,Object(u["get"])("cms/admin/users",{count:s,page:o});case 9:i=e.sent;case 10:return e.abrupt("return",i);case 11:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"getAllGroups",value:function(){var e=c(a.a.mark(function e(){var t;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["get"])("cms/admin/group/all");case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}},e)}));function t(){return e.apply(this,arguments)}return t}()},{key:"getOneGroup",value:function(){var e=c(a.a.mark(function e(t){var r;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["get"])("cms/admin/group/".concat(t));case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"createOneGroup",value:function(){var e=c(a.a.mark(function e(t,r,n){var s;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["post"])("cms/admin/group",{name:t,info:r,auths:n});case 2:return s=e.sent,e.abrupt("return",s);case 4:case"end":return e.stop()}},e)}));function t(t,r,n){return e.apply(this,arguments)}return t}()},{key:"updateOneGroup",value:function(){var e=c(a.a.mark(function e(t,r,n){var s;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["put"])("cms/admin/group/".concat(n),{name:t,info:r});case 2:return s=e.sent,e.abrupt("return",s);case 4:case"end":return e.stop()}},e)}));function t(t,r,n){return e.apply(this,arguments)}return t}()},{key:"deleteOneGroup",value:function(){var e=c(a.a.mark(function e(t){var r;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["_delete"])("cms/admin/group/".concat(t));case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"deleteOneUser",value:function(){var e=c(a.a.mark(function e(t){var r;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["_delete"])("cms/admin/".concat(t));case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"updateOneUser",value:function(){var e=c(a.a.mark(function e(t,r,n){var s;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["put"])("cms/admin/".concat(n),{email:t,group_id:r});case 2:return s=e.sent,e.abrupt("return",s);case 4:case"end":return e.stop()}},e)}));function t(t,r,n){return e.apply(this,arguments)}return t}()},{key:"dispatchAuths",value:function(){var e=c(a.a.mark(function e(t,r){var n;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["post"])("cms/admin/dispatch/patch",{group_id:t,auths:r});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}},e)}));function t(t,r){return e.apply(this,arguments)}return t}()},{key:"changePassword",value:function(){var e=c(a.a.mark(function e(t,r,n){var s;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["put"])("cms/admin/password/".concat(n),{new_password:t,confirm_password:r});case 2:return s=e.sent,e.abrupt("return",s);case 4:case"end":return e.stop()}},e)}));function t(t,r,n){return e.apply(this,arguments)}return t}()},{key:"removeAuths",value:function(){var e=c(a.a.mark(function e(t,r){var n;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["post"])("cms/admin/remove",{group_id:t,auths:r});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}},e)}));function t(t,r){return e.apply(this,arguments)}return t}()}]),e}()},"778e":function(e,t,r){"use strict";r("7894")},7894:function(e,t,r){},"93c2":function(e,t,r){"use strict";r.r(t);var n=r("a34a"),a=r.n(n),u=r("dfd8"),s=r("f121");function c(e,t,r,n,a,u,s){try{var c=e[u](s),o=c.value}catch(i){return void r(i)}c.done?t(o):Promise.resolve(o).then(n,a)}function o(e){return function(){var t=this,r=arguments;return new Promise(function(n,a){var u=e.apply(t,r);function s(e){c(u,n,a,s,o,"next",e)}function o(e){c(u,n,a,s,o,"throw",e)}s(void 0)})}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e,t,r){return t&&l(e.prototype,t),r&&l(e,r),e}var f=function(){function e(){i(this,e)}return p(e,[{key:"getTypes",value:function(){var e=o(a.a.mark(function e(){var t,r,n,c=arguments;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:0,r=c.length>1&&void 0!==c[1]?c[1]:s["default"].pageSize,e.next=4,Object(u["get"])("v1/type",{page:t,count:r,handleError:!0});case 4:return n=e.sent,e.abrupt("return",n);case 6:case"end":return e.stop()}},e)}));function t(){return e.apply(this,arguments)}return t}()},{key:"getType",value:function(){var e=o(a.a.mark(function e(t){var r;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["get"])("v1/type/".concat(t),{handleError:!0});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"getTypeByField",value:function(){var e=o(a.a.mark(function e(){var t,r,n=arguments;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:"",e.next=3,Object(u["get"])("v1/type/field",{field:t,handleError:!0});case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}},e)}));function t(){return e.apply(this,arguments)}return t}()},{key:"addType",value:function(){var e=o(a.a.mark(function e(t){var r;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["post"])("v1/type",t,{handleError:!0});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"editType",value:function(){var e=o(a.a.mark(function e(t,r){var n;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["put"])("v1/type/".concat(t),r,{handleError:!0});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}},e)}));function t(t,r){return e.apply(this,arguments)}return t}()},{key:"delType",value:function(){var e=o(a.a.mark(function e(t){var r;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["_delete"])("v1/type",{ids:t});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()}]),e}();t["default"]=new f},c8d7:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("div",{staticClass:"title"},[e._v("添加客户基本信息 "),r("span",{staticClass:"back",on:{click:function(t){return e.back(!1)}}},[r("i",{staticClass:"iconfont icon-fanhui"}),e._v(" 返回 ")])]),r("div",{staticClass:"wrap"},[r("el-row",[r("el-col",{attrs:{lg:16,md:20,sm:24,xs:24}},[r("el-form",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"form",attrs:{model:e.form,"status-icon":"",rules:e.rules,"label-width":"120px"},nativeOn:{submit:function(e){e.preventDefault()}}},[r("el-form-item",{attrs:{label:"客户名",prop:"name"}},[r("el-input",{attrs:{size:"medium",placeholder:"请填写客户名"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),r("el-form-item",{attrs:{label:"联系人",prop:"contacts_name"}},[r("el-input",{attrs:{size:"medium",placeholder:"请填写联系人"},model:{value:e.form.contacts_name,callback:function(t){e.$set(e.form,"contacts_name",t)},expression:"form.contacts_name"}})],1),r("el-form-item",{staticClass:"form-item",attrs:{label:"联系电话",prop:"telephone"}},[r("el-input",{attrs:{size:"medium",placeholder:"联系电话"},model:{value:e.form.telephone,callback:function(t){e.$set(e.form,"telephone",t)},expression:"form.telephone"}})],1),r("el-form-item",{attrs:{label:"联系人邮箱",prop:"email"}},[r("el-input",{attrs:{size:"medium",placeholder:"请填写email"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),r("el-form-item",{attrs:{label:"客户类型",prop:"customer_type"}},[r("el-select",{attrs:{size:"medium",filterable:"",placeholder:"请选择客户类型"},model:{value:e.form.customer_type,callback:function(t){e.$set(e.form,"customer_type",t)},expression:"form.customer_type"}},[e._l(e.customerTypeData,function(t,n){return[r("el-option",{key:n,attrs:{value:t,label:t}},[r("span",{staticStyle:{color:"#b4b4b4","margin-right":"15px","font-size":"12px"}},[e._v(e._s(n+1))]),r("span",[e._v(e._s(t))])])]})],2)],1),r("el-form-item",{attrs:{label:"联系人地址",prop:"address"}},[r("el-cascader",{attrs:{size:"large",filterable:"",options:e.addressData},model:{value:e.form.address,callback:function(t){e.$set(e.form,"address",t)},expression:"form.address"}})],1),r("el-form-item",{attrs:{label:"跟进状态",prop:"follow_status"}},[r("el-select",{attrs:{size:"medium",filterable:"",placeholder:"请选择跟进状态"},model:{value:e.form.follow_status,callback:function(t){e.$set(e.form,"follow_status",t)},expression:"form.follow_status"}},[e._l(e.followStatuslData,function(t,n){return[r("el-option",{key:n,attrs:{value:t,label:t}},[r("span",{staticStyle:{color:"#b4b4b4","margin-right":"15px","font-size":"12px"}},[e._v(e._s(n+1))]),r("span",[e._v(e._s(t))])])]})],2)],1),r("el-form-item",{attrs:{label:"项目用途",prop:"purpose"}},[r("el-input",{attrs:{size:"medium",placeholder:"请填写项目用途"},model:{value:e.form.purpose,callback:function(t){e.$set(e.form,"purpose",t)},expression:"form.purpose"}})],1),r("el-form-item",{attrs:{label:"客户来源",prop:"channel"}},[r("el-select",{attrs:{size:"medium",filterable:"",placeholder:"请选择客户来源"},model:{value:e.form.channel,callback:function(t){e.$set(e.form,"channel",t)},expression:"form.channel"}},[e._l(e.channelData,function(t,n){return[r("el-option",{key:n,attrs:{value:t,label:t}},[r("span",{staticStyle:{color:"#b4b4b4","margin-right":"15px","font-size":"12px"}},[e._v(e._s(n+1))]),r("span",[e._v(e._s(t))])])]})],2)],1),r("el-form-item",{attrs:{label:"客户等级",prop:"level"}},[r("el-select",{attrs:{size:"medium",filterable:"",placeholder:"请选择客户等级"},model:{value:e.form.level,callback:function(t){e.$set(e.form,"level",t)},expression:"form.level"}},[e._l(e.levelData,function(t,n){return[r("el-option",{key:t,attrs:{value:t,label:t}},[r("span",{staticStyle:{color:"#b4b4b4","margin-right":"15px","font-size":"12px"}},[e._v(e._s(n+1))]),r("span",[e._v(e._s(t))])])]})],2)],1),"super"==e.adminName?r("el-form-item",{attrs:{label:"分配用户",prop:"dicider_user"}},[r("el-select",{attrs:{size:"medium",filterable:"",placeholder:"请选择分配用户"},model:{value:e.form.dicider_user,callback:function(t){e.$set(e.form,"dicider_user",t)},expression:"form.dicider_user"}},[e._l(e.cuserLists,function(t,n){return[r("el-option",{key:n,attrs:{value:t.id,label:t.username}},[r("span",{staticStyle:{color:"#b4b4b4","margin-right":"15px","font-size":"12px"}},[e._v(e._s(n+1))]),r("span",[e._v(e._s(t.username))])])]})],2)],1):e._e(),r("el-form-item",{attrs:{label:"释放客户",prop:"is_release_user"}},[r("el-switch",{attrs:{"active-color":"#3963bc"},model:{value:e.form.is_release_user,callback:function(t){e.$set(e.form,"is_release_user",t)},expression:"form.is_release_user"}})],1),r("el-form-item",{staticClass:"submit"},[r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("form")}}},[e._v("保 存")]),r("el-button",{on:{click:function(t){return e.resetForm("form")}}},[e._v("重 置")])],1)],1)],1)],1)],1)])},a=[],u=r("a34a"),s=r.n(u),c=r("ef6c"),o=r("3ef2"),i=r("93c2"),l=r("4723"),p=r("4360");function f(e){return d(e)||v(e)||m()}function m(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function v(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function d(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}function h(e){return h="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}function b(e,t,r,n,a,u,s){try{var c=e[u](s),o=c.value}catch(i){return void r(i)}c.done?t(o):Promise.resolve(o).then(n,a)}function w(e){return function(){var t=this,r=arguments;return new Promise(function(n,a){var u=e.apply(t,r);function s(e){b(u,n,a,s,c,"next",e)}function c(e){b(u,n,a,s,c,"throw",e)}s(void 0)})}}var y={name:"CustomerAdd",data:function(){return{addressData:c["provinceAndCityData"],adminName:p["default"].state.user.username,fieldObj:{channel:"channelData",follow_status:"followStatuslData",customer_type:"customerTypeData",level:"levelData"},channelData:[],followStatuslData:[],levelData:["A","B","C"],customerTypeData:["业主","施工方"],loading:!1,columnData:[],cateData:[],cuserLists:[],form:{name:"",contacts_name:"",telephone:"",email:"",address:"",follow_status:"",purpose:"",channel:"",is_release_user:!1,customer_type:"",dicider_user:""},rules:{contacts_name:[{required:!0,message:"请输入联系人",trigger:"blur"}],telephone:[],email:[{type:"email",message:"请输入正确的邮箱地址",trigger:["blur"]}],address:[{required:!0,message:"请选择联系人地址"}],purpose:[{required:!0,message:"请输入项目用途",trigger:"blur"}],channel:[{required:!0,message:"请输入客户来源",trigger:"blur"}]}}},created:function(){this.getAdminUsers(),this.getTypes()},methods:{submitForm:function(e){var t=this;this.$refs[e].validate(function(){var r=w(s.a.mark(function r(n){var a,u,c;return s.a.wrap(function(r){while(1)switch(r.prev=r.next){case 0:if(!n){r.next=29;break}return t.loading=!0,r.prev=2,t.form.address=t.handleReqAddress(),r.next=6,o["default"].addCustomer(t.form);case 6:a=r.sent,0===a.error_code&&(t.$message.success("".concat(a.msg)),t.resetForm(e),t.back()),r.next=26;break;case 10:if(r.prev=10,r.t0=r["catch"](2),!r.t0.data){r.next=25;break}if(u=r.t0.data.msg,!u||"object"!==h(u)){r.next=23;break}r.t1=s.a.keys(u);case 16:if((r.t2=r.t1()).done){r.next=23;break}return c=r.t2.value,t.$message.error(u[c]),r.next=21,setTimeout(function(){},1e3);case 21:r.next=16;break;case 23:r.next=26;break;case 25:t.$message.error(r.t0.toString());case 26:t.loading=!1,r.next=31;break;case 29:return t.$message.error("请填写正确的信息"),r.abrupt("return",!1);case 31:case"end":return r.stop()}},r,null,[[2,10]])}));return function(e){return r.apply(this,arguments)}}())},handleReqAddress:function(){var e=this.form.address,t=["province","city"],r={};return e=e.map(function(e,n){if(e){var a=t[n];r[a]=c["CodeToText"][e]}}),r},getTypes:function(){var e=w(s.a.mark(function e(){var t,r,n,a,u,c,o=this;return s.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:for(n in t=[],r=this.fieldObj,r)t.push(n);return t=t.join(),e.next=6,i["default"].getTypeByField(t);case 6:if(a=e.sent,a&&0!=a.length){e.next=9;break}return e.abrupt("return");case 9:for(c in u=function(e){var t=r[e],n=a.find(function(t){return t["field"]==e});n&&(o[t]=n["value"])},r)u(c);case 11:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),getAdminUsers:function(){var e=w(s.a.mark(function e(){var t;return s.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l["default"].getAdminUsers({count:30,page:0});case 3:t=e.sent,this.cuserLists=f(t.items),e.next=9;break;case 7:e.prev=7,e.t0=e["catch"](0);case 9:case"end":return e.stop()}},e,this,[[0,7]])}));function t(){return e.apply(this,arguments)}return t}(),resetForm:function(e){this.$refs[e].resetFields()},back:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.$emit("close",e)}}},g=y,k=(r("778e"),r("2877")),x=Object(k["a"])(g,n,a,!1,null,"5de1ad8c",null);t["default"]=x.exports}}]);