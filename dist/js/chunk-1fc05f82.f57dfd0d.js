(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1fc05f82","chunk-2d22ddc6","chunk-2d0e55bf"],{8998:function(e,t,r){"use strict";r("c035")},"93c2":function(e,t,r){"use strict";r.r(t);var n=r("a34a"),a=r.n(n),o=r("dfd8"),u=r("f121");function s(e,t,r,n,a,o,u){try{var s=e[o](u),i=s.value}catch(l){return void r(l)}s.done?t(i):Promise.resolve(i).then(n,a)}function i(e){return function(){var t=this,r=arguments;return new Promise(function(n,a){var o=e.apply(t,r);function u(e){s(o,n,a,u,i,"next",e)}function i(e){s(o,n,a,u,i,"throw",e)}u(void 0)})}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e,t,r){return t&&c(e.prototype,t),r&&c(e,r),e}var f=function(){function e(){l(this,e)}return p(e,[{key:"getTypes",value:function(){var e=i(a.a.mark(function e(){var t,r,n,s=arguments;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=s.length>0&&void 0!==s[0]?s[0]:0,r=s.length>1&&void 0!==s[1]?s[1]:u["default"].pageSize,e.next=4,Object(o["get"])("v1/type",{page:t,count:r,handleError:!0});case 4:return n=e.sent,e.abrupt("return",n);case 6:case"end":return e.stop()}},e)}));function t(){return e.apply(this,arguments)}return t}()},{key:"getType",value:function(){var e=i(a.a.mark(function e(t){var r;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(o["get"])("v1/type/".concat(t),{handleError:!0});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"getTypeByField",value:function(){var e=i(a.a.mark(function e(){var t,r,n=arguments;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:"",e.next=3,Object(o["get"])("v1/type/field",{field:t,handleError:!0});case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}},e)}));function t(){return e.apply(this,arguments)}return t}()},{key:"addType",value:function(){var e=i(a.a.mark(function e(t){var r;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(o["post"])("v1/type",t,{handleError:!0});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"editType",value:function(){var e=i(a.a.mark(function e(t,r){var n;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(o["put"])("v1/type/".concat(t),r,{handleError:!0});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}},e)}));function t(t,r){return e.apply(this,arguments)}return t}()},{key:"delType",value:function(){var e=i(a.a.mark(function e(t){var r;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(o["_delete"])("v1/type",{ids:t});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()}]),e}();t["default"]=new f},c035:function(e,t,r){},f2cc:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("div",{staticClass:"title"},[e._v("新建项目 "),r("span",{staticClass:"back",on:{click:function(t){return e.back(!1)}}},[r("i",{staticClass:"iconfont icon-fanhui"}),e._v(" 返回 ")])]),r("div",{staticClass:"wrap"},[r("el-row",[r("el-col",{attrs:{lg:16,md:20,sm:24,xs:24}},[r("el-form",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"form",attrs:{model:e.form,"status-icon":"",rules:e.rules,"label-width":"120px"},nativeOn:{submit:function(e){e.preventDefault()}}},[r("el-form-item",{attrs:{label:"项目名",prop:"name"}},[r("el-input",{attrs:{size:"medium",placeholder:"请填写项目名"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),r("el-form-item",{attrs:{label:"使用场景",prop:"scene"}},[r("el-input",{attrs:{size:"medium",placeholder:"请填写使用场景"},model:{value:e.form.scene,callback:function(t){e.$set(e.form,"scene",t)},expression:"form.scene"}})],1),r("el-form-item",{attrs:{label:"客户行业",prop:"industry"}},[r("el-select",{attrs:{size:"medium",filterable:"",placeholder:"请选择客户行业"},model:{value:e.form.industry,callback:function(t){e.$set(e.form,"industry",t)},expression:"form.industry"}},[e._l(e.industryData,function(t,n){return[r("el-option",{key:n,attrs:{value:t,label:t}},[r("span",{staticStyle:{color:"#b4b4b4","margin-right":"15px","font-size":"12px"}},[e._v(e._s(n+1))]),r("span",[e._v(e._s(t))])])]})],2),r("el-input",{staticClass:"mt10",attrs:{disabled:!e.industryDisplay&&"disabled",size:"medium",placeholder:"请填写客户行业"},model:{value:e.industry_other,callback:function(t){e.industry_other=t},expression:"industry_other"}})],1),r("el-form-item",{attrs:{label:"产品类型",prop:"product_type"}},[r("el-select",{attrs:{size:"medium",filterable:"",placeholder:"请选择产品类型"},model:{value:e.form.product_type,callback:function(t){e.$set(e.form,"product_type",t)},expression:"form.product_type"}},[e._l(e.productTypeData,function(t,n){return[r("el-option",{key:t,attrs:{value:n,label:t}},[r("span",{staticStyle:{color:"#b4b4b4","margin-right":"15px","font-size":"12px"}},[e._v(e._s(n+1))]),r("span",[e._v(e._s(t))])])]})],2)],1),r("el-form-item",{staticClass:"form-item",attrs:{label:"产品规格",prop:"product_spec"}},[r("el-input",{attrs:{size:"medium",placeholder:"请填写产品规格"},model:{value:e.form.product_spec,callback:function(t){e.$set(e.form,"product_spec",t)},expression:"form.product_spec"}})],1),r("el-form-item",{attrs:{label:"产品数量",prop:"product_num"}},[r("el-input-number",{attrs:{min:1,max:10,label:"产品数量"},model:{value:e.form.product_num,callback:function(t){e.$set(e.form,"product_num",t)},expression:"form.product_num"}})],1),r("el-form-item",{attrs:{label:"产品报价",prop:"product_price"}},[r("el-input",{attrs:{size:"medium",placeholder:"请填写产品报价"},model:{value:e.form.product_price,callback:function(t){e.$set(e.form,"product_price",t)},expression:"form.product_price"}})],1),r("el-form-item",{attrs:{label:"客户需求背景",prop:"demand_bg"}},[r("el-select",{attrs:{size:"medium",filterable:"",placeholder:"请选择客户需求背景"},model:{value:e.form.demand_bg,callback:function(t){e.$set(e.form,"demand_bg",t)},expression:"form.demand_bg"}},[e._l(e.demandBgData,function(t,n){return[r("el-option",{key:n,attrs:{value:t,label:t}},[r("span",{staticStyle:{color:"#b4b4b4","margin-right":"15px","font-size":"12px"}},[e._v(e._s(n+1))]),r("span",[e._v(e._s(t))])])]})],2),r("el-input",{staticClass:"mt10",attrs:{size:"medium",disabled:!e.demandBgDisplay&&"disabled",placeholder:"请填写客户需求背景"},model:{value:e.demand_bg_other,callback:function(t){e.demand_bg_other=t},expression:"demand_bg_other"}})],1),r("el-form-item",{attrs:{label:"需求描述",prop:"demand_desc"}},[r("el-input",{attrs:{type:"textarea",size:"medium",placeholder:"请填写需求描述"},model:{value:e.form.demand_desc,callback:function(t){e.$set(e.form,"demand_desc",t)},expression:"form.demand_desc"}})],1),r("el-form-item",{attrs:{label:"提供对应解决方案",prop:"solution"}},[r("el-input",{attrs:{type:"textarea",size:"medium",placeholder:"请填写对应解决方案"},model:{value:e.form.solution,callback:function(t){e.$set(e.form,"solution",t)},expression:"form.solution"}})],1),r("el-form-item",{attrs:{label:"工程安装解决方案",prop:"install_solution"}},[r("el-input",{attrs:{type:"textarea",size:"medium",placeholder:"请填写工程安装解决方案"},model:{value:e.form.install_solution,callback:function(t){e.$set(e.form,"install_solution",t)},expression:"form.install_solution"}})],1),r("el-form-item",{attrs:{label:"客户关注产品亮点",prop:"product_lights"}},[r("el-input",{attrs:{type:"textarea",size:"medium",placeholder:"请填写客户关注产品亮点"},model:{value:e.form.product_lights,callback:function(t){e.$set(e.form,"product_lights",t)},expression:"form.product_lights"}})],1),r("el-form-item",{attrs:{label:"客户价值",prop:"custom_value"}},[r("el-input",{attrs:{type:"textarea",size:"medium",placeholder:"请填写客户价值"},model:{value:e.form.custom_value,callback:function(t){e.$set(e.form,"custom_value",t)},expression:"form.custom_value"}})],1),r("el-form-item",{attrs:{label:"业务跟进困难点",prop:"follow_difficulty"}},[r("el-input",{attrs:{type:"textarea",size:"medium",placeholder:"请填写业务跟进困难点"},model:{value:e.form.follow_difficulty,callback:function(t){e.$set(e.form,"follow_difficulty",t)},expression:"form.follow_difficulty"}})],1),r("el-form-item",{attrs:{label:"客户反馈",prop:"custom_feedback"}},[r("el-input",{attrs:{type:"textarea",size:"medium",placeholder:"请填写客户反馈"},model:{value:e.form.custom_feedback,callback:function(t){e.$set(e.form,"custom_feedback",t)},expression:"form.custom_feedback"}})],1),r("el-form-item",{attrs:{label:"跟进状态",prop:"follow_status"}},[r("el-select",{attrs:{size:"medium",filterable:"",placeholder:"请选择跟进状态"},model:{value:e.form.follow_status,callback:function(t){e.$set(e.form,"follow_status",t)},expression:"form.follow_status"}},[e._l(e.followStatuslData,function(t,n){return[r("el-option",{key:n,attrs:{value:t,label:t}},[r("span",{staticStyle:{color:"#b4b4b4","margin-right":"15px","font-size":"12px"}},[e._v(e._s(n+1))]),r("span",[e._v(e._s(t))])])]})],2)],1),r("el-form-item",{attrs:{label:"跟进次数",prop:"follow_count"}},[r("el-input",{attrs:{size:"small",placeholder:"请填写跟进次数"},model:{value:e.form.follow_count,callback:function(t){e.$set(e.form,"follow_count",t)},expression:"form.follow_count"}})],1),r("el-form-item",{attrs:{label:"丢单原因",prop:"reason"}},[r("el-input",{attrs:{type:"textarea",size:"medium",placeholder:"请填写丢单原因"},model:{value:e.form.reason,callback:function(t){e.$set(e.form,"reason",t)},expression:"form.reason"}})],1),r("el-form-item",{staticClass:"submit"},[r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitform("form")}}},[e._v("保 存")]),r("el-button",{on:{click:function(t){return e.resetForm("form")}}},[e._v("重 置")])],1)],1)],1)],1)],1)])},a=[],o=r("a34a"),u=r.n(o),s=r("f8fd"),i=r("93c2");function l(e){return l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function c(e,t,r,n,a,o,u){try{var s=e[o](u),i=s.value}catch(l){return void r(l)}s.done?t(i):Promise.resolve(i).then(n,a)}function p(e){return function(){var t=this,r=arguments;return new Promise(function(n,a){var o=e.apply(t,r);function u(e){c(o,n,a,u,s,"next",e)}function s(e){c(o,n,a,u,s,"throw",e)}u(void 0)})}}var f={name:"CulturalAdd",props:{linkCode:Number},data:function(){return{loading:!1,demandBgData:["已受灾","应付检查","系统统一安装","领导要求","其他"],productTypeData:["不锈钢开启式","不锈钢密闭式","铝合金组合式","水动力","ABS"],industryData:["商场","工厂","其他"],fieldObj:{industry:"industryData",follow_status:"followStatuslData",product_type:"productTypeData",demand_bg:"demandBgData"},industry_other:"",demand_bg_other:"",demandBgDisplay:!1,industryDisplay:!1,form:{name:"",scene:"",industry:"",product_type:"",product_spec:"",product_num:"",product_price:"",demand_bg:"",demand_desc:"",solution:"",install_solution:"",product_lights:"",custom_value:"",follow_difficulty:"",custom_feedback:"",follow_count:0,reason:"",follow_status:""},rules:{name:[{required:!0,message:"请输入名称",trigger:"blur"}]}}},created:function(){this.getTypes()},watch:{form:{handler:function(e,t){"其他"==e.industry?this.industryDisplay=!0:(this.industryDisplay=!1,this.industry_other=""),"其他"==e.demand_bg?this.demandBgDisplay=!0:(this.demandBgDisplay=!1,this.demand_bg_other="")},deep:!0}},methods:{settingFollow:function(){var e=this.form;return e.link_code=this.linkCode,"其他"==e.industry&&(e.industry="其他-"+this.industry_other),"其他"==e.demand_bg&&(e.demand_bg="其他-"+this.demand_bg_other),e},submitform:function(e){var t=this;this.$refs[e].validate(function(){var e=p(u.a.mark(function e(r){var n,a,o;return u.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!r){e.next=25;break}return t.loading=!0,e.prev=2,e.next=5,s["default"].addCustomerProject(t.settingFollow());case 5:n=e.sent,0===n.error_code&&t.$message.success("".concat(n.msg)),t.back(),e.next=22;break;case 10:if(e.prev=10,e.t0=e["catch"](2),a=e.t0.data.msg,!a||"object"!==l(a)){e.next=22;break}e.t1=u.a.keys(a);case 15:if((e.t2=e.t1()).done){e.next=22;break}return o=e.t2.value,t.$message.error(a[o]),e.next=20,setTimeout(function(){},1e3);case 20:e.next=15;break;case 22:t.loading=!1,e.next=27;break;case 25:return t.$message.error("请填写正确的信息"),e.abrupt("return",!1);case 27:case"end":return e.stop()}},e,null,[[2,10]])}));return function(t){return e.apply(this,arguments)}}())},getTypes:function(){var e=p(u.a.mark(function e(){var t,r,n,a,o,s,l=this;return u.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:for(n in t=[],r=this.fieldObj,r)t.push(n);return t=t.join(),e.next=6,i["default"].getTypeByField(t);case 6:if(a=e.sent,a&&0!=a.length){e.next=9;break}return e.abrupt("return");case 9:for(s in o=function(e){var t=r[e],n=a.find(function(t){return t["field"]==e});n&&(l[t]=n["value"])},r)o(s);case 11:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),resetForm:function(e){this.$refs[e].resetFields()},back:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.$emit("close",e)}}},d=f,m=(r("8998"),r("cba8")),v=Object(m["a"])(d,n,a,!1,null,"1a730286",null);t["default"]=v.exports},f8fd:function(e,t,r){"use strict";r.r(t);var n=r("a34a"),a=r.n(n),o=r("dfd8"),u=r("f121");function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(r,!0).forEach(function(t){l(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t,r,n,a,o,u){try{var s=e[o](u),i=s.value}catch(l){return void r(l)}s.done?t(i):Promise.resolve(i).then(n,a)}function p(e){return function(){var t=this,r=arguments;return new Promise(function(n,a){var o=e.apply(t,r);function u(e){c(o,n,a,u,s,"next",e)}function s(e){c(o,n,a,u,s,"throw",e)}u(void 0)})}}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function m(e,t,r){return t&&d(e.prototype,t),r&&d(e,r),e}var v=function(){function e(){f(this,e)}return m(e,[{key:"getAllCustomerProjects",value:function(){var e=p(a.a.mark(function e(){var t,r,n,s,l,c=arguments;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:0,r=c.length>1&&void 0!==c[1]?c[1]:{},n=c.length>2&&void 0!==c[2]?c[2]:u["default"].pageSize,s=i({page:t,count:n},r,{handleError:!0}),e.next=6,Object(o["get"])("v1/customer_project/all",s);case 6:return l=e.sent,e.abrupt("return",l);case 8:case"end":return e.stop()}},e)}));function t(){return e.apply(this,arguments)}return t}()},{key:"getCustomerProjects",value:function(){var e=p(a.a.mark(function e(){var t,r,n,s,l,c,p,f=arguments;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=f.length>0&&void 0!==f[0]?f[0]:0,r=f.length>1&&void 0!==f[1]?f[1]:{},n=f.length>2&&void 0!==f[2]?f[2]:0,s=f.length>3&&void 0!==f[3]?f[3]:1,l=f.length>4&&void 0!==f[4]?f[4]:u["default"].pageSize,c=i({page:t,count:l},r,{customer_id:n,isAdmin:s,handleError:!0}),e.next=8,Object(o["get"])("v1/customer_project",c);case 8:return p=e.sent,e.abrupt("return",p);case 10:case"end":return e.stop()}},e)}));function t(){return e.apply(this,arguments)}return t}()},{key:"getCustomerProject",value:function(){var e=p(a.a.mark(function e(t){var r;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(o["get"])("v1/customer_project/".concat(t),{handleError:!0});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"addCustomerProject",value:function(){var e=p(a.a.mark(function e(t){var r;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(o["post"])("v1/customer_project",t,{handleError:!0});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"editCustomerProject",value:function(){var e=p(a.a.mark(function e(t,r){var n;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(o["put"])("v1/customer_project/".concat(t),r,{handleError:!0});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}},e)}));function t(t,r){return e.apply(this,arguments)}return t}()},{key:"delCustomerProject",value:function(){var e=p(a.a.mark(function e(t){var r;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(o["_delete"])("v1/customer_project",{ids:t});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()}]),e}();t["default"]=new v}}]);