(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["views-customer_project-ProjectList","models-project-examine"],{"13af":function(e,t,r){},"235a":function(e,t,r){"use strict";r("13af")},3151:function(e,t,r){"use strict";r("fabb")},"3c01":function(e,t,r){"use strict";r("5970")},5970:function(e,t,r){},"5b05":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("div",{staticClass:"title"},[e._v("编辑项目 "),r("span",{staticClass:"back",on:{click:function(t){return e.back(!1)}}},[r("i",{staticClass:"iconfont icon-fanhui"}),e._v(" 返回 ")])]),r("div",{staticClass:"wrap"},[r("el-row",[r("el-col",{attrs:{lg:16,md:20,sm:24,xs:24}},[r("el-form",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"form",attrs:{model:e.form,"status-icon":"",rules:e.rules,"label-width":"120px"},nativeOn:{submit:function(e){e.preventDefault()}}},[r("el-form-item",{attrs:{label:"项目名",prop:"name"}},[r("el-input",{attrs:{size:"medium",placeholder:"请填写项目名"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),r("el-form-item",{attrs:{label:"客户来源",prop:"project_channel"}},[r("el-select",{attrs:{size:"medium",filterable:"",placeholder:"请选择客户来源"},model:{value:e.form.project_channel,callback:function(t){e.$set(e.form,"project_channel",t)},expression:"form.project_channel"}},[e._l(e.channelData,function(t,a){return[r("el-option",{key:a,attrs:{value:t,label:t}},[r("span",{staticStyle:{color:"#b4b4b4","margin-right":"15px","font-size":"12px"}},[e._v(e._s(a+1))]),r("span",[e._v(e._s(t))])])]})],2)],1),r("el-form-item",{attrs:{label:"使用场景",prop:"scene"}},[r("el-input",{attrs:{size:"medium",placeholder:"请填写使用场景"},model:{value:e.form.scene,callback:function(t){e.$set(e.form,"scene",t)},expression:"form.scene"}})],1),r("el-form-item",{attrs:{label:"客户行业",prop:"industry"}},[r("el-select",{attrs:{size:"medium",filterable:"",placeholder:"请选择客户行业"},model:{value:e.form.industry,callback:function(t){e.$set(e.form,"industry",t)},expression:"form.industry"}},[e._l(e.industryData,function(t,a){return[r("el-option",{key:a,attrs:{value:t,label:t}},[r("span",{staticStyle:{color:"#b4b4b4","margin-right":"15px","font-size":"12px"}},[e._v(e._s(a+1))]),r("span",[e._v(e._s(t))])])]})],2),r("el-input",{staticClass:"mt10",attrs:{disabled:!e.industryDisplay&&"disabled",size:"medium",placeholder:"请填写客户行业"},model:{value:e.industry_other,callback:function(t){e.industry_other=t},expression:"industry_other"}})],1),r("el-form-item",{attrs:{label:"产品类型",prop:"product_type"}},[r("el-select",{attrs:{size:"medium",filterable:"",placeholder:"请选择产品类型"},model:{value:e.form.product_type,callback:function(t){e.$set(e.form,"product_type",t)},expression:"form.product_type"}},[e._l(e.productTypeData,function(t,a){return[r("el-option",{key:t,attrs:{value:a,label:t}},[r("span",{staticStyle:{color:"#b4b4b4","margin-right":"15px","font-size":"12px"}},[e._v(e._s(a+1))]),r("span",[e._v(e._s(t))])])]})],2)],1),r("el-form-item",{staticClass:"form-item",attrs:{label:"产品规格",prop:"product_spec"}},[r("el-input",{attrs:{size:"medium",placeholder:"请填写产品规格"},model:{value:e.form.product_spec,callback:function(t){e.$set(e.form,"product_spec",t)},expression:"form.product_spec"}})],1),r("el-form-item",{attrs:{label:"产品数量",prop:"product_num"}},[r("el-input-number",{attrs:{min:1,max:10,label:"产品数量"},model:{value:e.form.product_num,callback:function(t){e.$set(e.form,"product_num",t)},expression:"form.product_num"}})],1),r("el-form-item",{attrs:{label:"产品报价",prop:"product_price"}},[r("el-input",{attrs:{size:"medium",placeholder:"请填写产品报价"},model:{value:e.form.product_price,callback:function(t){e.$set(e.form,"product_price",t)},expression:"form.product_price"}})],1),r("el-form-item",{attrs:{label:"客户需求背景",prop:"demand_bg"}},[r("el-select",{attrs:{size:"medium",filterable:"",placeholder:"请选择客户需求背景"},model:{value:e.form.demand_bg,callback:function(t){e.$set(e.form,"demand_bg",t)},expression:"form.demand_bg"}},[e._l(e.demandBgData,function(t,a){return[r("el-option",{key:a,attrs:{value:t,label:t}},[r("span",{staticStyle:{color:"#b4b4b4","margin-right":"15px","font-size":"12px"}},[e._v(e._s(a+1))]),r("span",[e._v(e._s(t))])])]})],2),r("el-input",{staticClass:"mt10",attrs:{size:"medium",disabled:!e.demandBgDisplay&&"disabled",placeholder:"请填写客户需求背景"},model:{value:e.demand_bg_other,callback:function(t){e.demand_bg_other=t},expression:"demand_bg_other"}})],1),r("el-form-item",{attrs:{label:"需求描述",prop:"demand_desc"}},[r("el-input",{attrs:{type:"textarea",size:"medium",placeholder:"请填写需求描述"},model:{value:e.form.demand_desc,callback:function(t){e.$set(e.form,"demand_desc",t)},expression:"form.demand_desc"}})],1),r("el-form-item",{attrs:{label:"提供对应解决方案",prop:"solution"}},[r("el-input",{attrs:{type:"textarea",size:"medium",placeholder:"请填写对应解决方案"},model:{value:e.form.solution,callback:function(t){e.$set(e.form,"solution",t)},expression:"form.solution"}})],1),r("el-form-item",{attrs:{label:"工程安装解决方案",prop:"install_solution"}},[r("el-input",{attrs:{type:"textarea",size:"medium",placeholder:"请填写工程安装解决方案"},model:{value:e.form.install_solution,callback:function(t){e.$set(e.form,"install_solution",t)},expression:"form.install_solution"}})],1),r("el-form-item",{attrs:{label:"客户关注产品亮点",prop:"product_lights"}},[r("el-input",{attrs:{type:"textarea",size:"medium",placeholder:"请填写客户关注产品亮点"},model:{value:e.form.product_lights,callback:function(t){e.$set(e.form,"product_lights",t)},expression:"form.product_lights"}})],1),r("el-form-item",{attrs:{label:"客户价值",prop:"custom_value"}},[r("el-input",{attrs:{type:"textarea",size:"medium",placeholder:"请填写客户价值"},model:{value:e.form.custom_value,callback:function(t){e.$set(e.form,"custom_value",t)},expression:"form.custom_value"}})],1),r("el-form-item",{attrs:{label:"业务跟进困难点",prop:"follow_difficulty"}},[r("el-input",{attrs:{type:"textarea",size:"medium",placeholder:"请填写业务跟进困难点"},model:{value:e.form.follow_difficulty,callback:function(t){e.$set(e.form,"follow_difficulty",t)},expression:"form.follow_difficulty"}})],1),r("el-form-item",{attrs:{label:"客户反馈",prop:"custom_feedback"}},[r("el-input",{attrs:{type:"textarea",size:"medium",placeholder:"请填写客户反馈"},model:{value:e.form.custom_feedback,callback:function(t){e.$set(e.form,"custom_feedback",t)},expression:"form.custom_feedback"}})],1),r("el-form-item",{attrs:{label:"跟进状态",prop:"follow_status"}},[r("el-select",{attrs:{size:"medium",filterable:"",placeholder:"请选择跟进状态"},model:{value:e.form.follow_status,callback:function(t){e.$set(e.form,"follow_status",t)},expression:"form.follow_status"}},[e._l(e.statusData,function(t,a){return[r("el-option",{key:a,attrs:{value:t,label:t}},[r("span",{staticStyle:{color:"#b4b4b4","margin-right":"15px","font-size":"12px"}},[e._v(e._s(a+1))]),r("span",[e._v(e._s(t))])])]})],2)],1),e.form.follow_status==e.successStatus?r("el-form-item",{attrs:{label:"成交时间",prop:"status_success_time"}},[r("el-date-picker",{attrs:{type:"date","value-format":"yyyy-MM-dd HH:mm:ss",placeholder:"选择成交时间"},model:{value:e.form.status_success_time,callback:function(t){e.$set(e.form,"status_success_time",t)},expression:"form.status_success_time"}})],1):e._e(),e.isStatusExamine?r("el-form-item",{attrs:{label:"丢单原因",prop:"reason"}},[r("el-input",{attrs:{type:"textarea",size:"medium",placeholder:"请填写丢单原因"},model:{value:e.form.reason,callback:function(t){e.$set(e.form,"reason",t)},expression:"form.reason"}})],1):e._e(),r("el-form-item",{attrs:{label:"订单编码",prop:"order_no"}},[r("el-input",{attrs:{size:"medium",placeholder:"请填写订单编码"},model:{value:e.form.order_no,callback:function(t){e.$set(e.form,"order_no",t)},expression:"form.order_no"}})],1),r("el-form-item",{attrs:{label:"跟进次数",prop:"follow_count"}},[r("el-input",{attrs:{size:"small",placeholder:"请填写跟进次数"},model:{value:e.form.follow_count,callback:function(t){e.$set(e.form,"follow_count",t)},expression:"form.follow_count"}})],1),e.onlyRead?e._e():r("el-form-item",{staticClass:"submit"},[r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitform("form")}}},[e._v(e._s(e.isStatusExamine?"申 请":"保 存"))]),r("el-button",{on:{click:function(t){return e.resetForm("form")}}},[e._v("重 置")])],1)],1)],1)],1)],1)])},o=[],n=r("a34a"),s=r.n(n),l=r("f8fd"),i=r("93c2"),c=r("f121"),u=r("5c7f");function d(e){return d="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function m(e,t,r,a,o,n,s){try{var l=e[n](s),i=l.value}catch(error){return void r(error)}l.done?t(i):Promise.resolve(i).then(a,o)}function f(e){return function(){var t=this,r=arguments;return new Promise(function(a,o){var n=e.apply(t,r);function s(e){m(n,a,o,s,l,"next",e)}function l(e){m(n,a,o,s,l,"throw",e)}s(void 0)})}}var p={name:"CulturalAdd",props:{editID:Number,onlyRead:{type:Boolean,default:!1}},data:function(){var e=this,t=function(t,r,a){-1!=c["default"].followStatusExamine.indexOf(r)&&e.$refs.form.validateField("reason"),a()};return{loading:!1,demandBgData:["已受灾","应付检查","系统统一安装","领导要求","其他"],productTypeData:["不锈钢开启式","不锈钢密闭式","铝合金组合式","水动力","ABS"],industryData:["商场","工厂","其他"],statusData:[],channelData:[],fieldObj:{industry:"industryData",status:"statusData",product_type:"productTypeData",demand_bg:"demandBgData",project_channel:"channelData"},industry_other:"",demand_bg_other:"",demandBgDisplay:!1,industryDisplay:!1,isStatusExamine:!1,successStatus:c["default"].successStatus,form:{name:"",scene:"",industry:"",product_type:"",product_spec:"",product_num:"",product_price:"",demand_bg:"",demand_desc:"",solution:"",install_solution:"",product_lights:"",custom_value:"",follow_difficulty:"",custom_feedback:"",follow_count:0,reason:"",follow_status:""},rules:{name:[{required:!0,message:"请输入名称",trigger:"blur"}],follow_status:[{validator:t}],reason:[{required:!0,message:"选择无意向客户，原因必填",trigger:"blur"}]}}},created:function(){this.getProject(),this.getTypes()},watch:{form:{handler:function(e,t){e.follow_status&&-1!=c["default"].followStatusExamine.indexOf(e.follow_status)?this.isStatusExamine=!0:this.isStatusExamine=!1,"其他"==e.industry?this.industryDisplay=!0:(this.industryDisplay=!1,this.industry_other=""),"其他"==e.demand_bg?this.demandBgDisplay=!0:(this.demandBgDisplay=!1,this.demand_bg_other="")},deep:!0}},methods:{getProject:function(){var e=f(s.a.mark(function e(){var t,r,a;return s.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.loading=!0,e.prev=1,e.next=4,l["default"].getCustomerProject(this.editID);case 4:t=e.sent,this._handleCustomerResData(t),e.next=24;break;case 8:if(e.prev=8,e.t0=e["catch"](1),!e.t0.data){e.next=23;break}if(r=e.t0.data.msg,!r||"object"!==d(r)){e.next=21;break}e.t1=s.a.keys(r);case 14:if((e.t2=e.t1()).done){e.next=21;break}return a=e.t2.value,this.$message.error(r[a]),e.next=19,setTimeout(function(){},1e3);case 19:e.next=14;break;case 21:e.next=24;break;case 23:this.$message.error(e.t0.toString());case 24:this.loading=!1;case 25:case"end":return e.stop()}},e,this,[[1,8]])}));function t(){return e.apply(this,arguments)}return t}(),_handleCustomerResData:function(e){var t=e;if(-1!=t["industry"].indexOf("其他")){var r=t["industry"].split("-");t["industry"]=r[0],this.industry_other=r[1]}if(-1!=t["demand_bg"].indexOf("其他")){var a=t["demand_bg"].split("-");t["demand_bg"]=a[0],this.demand_bg_other=a[1]}this.form=e},settingFollow:function(){var e=this.form;return"其他"==e.industry&&(e.industry="其他-"+this.industry_other),"其他"==e.demand_bg&&(e.demand_bg="其他-"+this.demand_bg_other),e},submitform:function(e){var t=this,r=this;this.$refs[e].validate(function(){var e=f(s.a.mark(function e(a){var o,n,i;return s.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!a){e.next=32;break}return t.loading=!0,e.prev=2,e.next=5,l["default"].editCustomerProject(t.editID,t.settingFollow());case 5:if(o=e.sent,-1==c["default"].followStatusExamine.indexOf(t.form.follow_status)){e.next=9;break}return e.next=9,u["default"].addProjectExamine({project_id:r.form.id,customer_id:r.form["customer_id"]});case 9:0===o.error_code&&t.$message.success("".concat(o.msg)),t.back(),e.next=29;break;case 13:if(e.prev=13,e.t0=e["catch"](2),!e.t0.data){e.next=28;break}if(n=e.t0.data.msg,!n||"object"!==d(n)){e.next=26;break}e.t1=s.a.keys(n);case 19:if((e.t2=e.t1()).done){e.next=26;break}return i=e.t2.value,t.$message.error(n[i]),e.next=24,setTimeout(function(){},1e3);case 24:e.next=19;break;case 26:e.next=29;break;case 28:t.$message.error(e.t0.toString());case 29:t.loading=!1,e.next=34;break;case 32:return t.$message.error("请填写正确的信息"),e.abrupt("return",!1);case 34:case"end":return e.stop()}},e,null,[[2,13]])}));return function(t){return e.apply(this,arguments)}}())},getTypes:function(){var e=f(s.a.mark(function e(){var t,r,a,o,n,l,c=this;return s.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:for(a in t=[],r=this.fieldObj,r)t.push(a);return t=t.join(),e.next=6,i["default"].getTypeByField(t);case 6:if(o=e.sent,o&&0!=o.length){e.next=9;break}return e.abrupt("return");case 9:for(l in n=function(e){var t=r[e],a=o.find(function(t){return t["field"]==e});a&&(c[t]=a["value"])},r)n(l);case 11:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),resetForm:function(e){this.$refs[e].resetFields()},back:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.$emit("close",e)}}},b=p,h=(r("3c01"),r("2877")),_=Object(h["a"])(b,a,o,!1,null,"d149b6fa",null);t["default"]=_.exports},"5c7f":function(e,t,r){"use strict";r.r(t);var a=r("a34a"),o=r.n(a),n=r("dfd8"),s=r("f121");function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(r,!0).forEach(function(t){c(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t,r,a,o,n,s){try{var l=e[n](s),i=l.value}catch(error){return void r(error)}l.done?t(i):Promise.resolve(i).then(a,o)}function d(e){return function(){var t=this,r=arguments;return new Promise(function(a,o){var n=e.apply(t,r);function s(e){u(n,a,o,s,l,"next",e)}function l(e){u(n,a,o,s,l,"throw",e)}s(void 0)})}}function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function p(e,t,r){return t&&f(e.prototype,t),r&&f(e,r),e}var b=function(){function e(){m(this,e)}return p(e,[{key:"getAllProjectExamine",value:function(){var e=d(o.a.mark(function e(){var t,r,a,l,c,u=arguments;return o.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=u.length>0&&void 0!==u[0]?u[0]:0,r=u.length>1&&void 0!==u[1]?u[1]:{},a=u.length>2&&void 0!==u[2]?u[2]:s["default"].pageSize,l=i({page:t,count:a},r,{handleError:!0}),e.next=6,Object(n["get"])("v1/project_examine/all",l);case 6:return c=e.sent,e.abrupt("return",c);case 8:case"end":return e.stop()}},e)}));function t(){return e.apply(this,arguments)}return t}()},{key:"getProjectExamines",value:function(){var e=d(o.a.mark(function e(){var t,r,a,l,c,u=arguments;return o.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=u.length>0&&void 0!==u[0]?u[0]:0,r=u.length>1&&void 0!==u[1]?u[1]:{},a=u.length>2&&void 0!==u[2]?u[2]:s["default"].pageSize,l=i({page:t,count:a},r,{handleError:!0}),e.next=6,Object(n["get"])("v1/project_examine",l);case 6:return c=e.sent,e.abrupt("return",c);case 8:case"end":return e.stop()}},e)}));function t(){return e.apply(this,arguments)}return t}()},{key:"getProjectExamine",value:function(){var e=d(o.a.mark(function e(t){var r;return o.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(n["get"])("v1/project_examine/".concat(t),{handleError:!0});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"addProjectExamine",value:function(){var e=d(o.a.mark(function e(t){var r;return o.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(n["post"])("v1/project_examine",t,{handleError:!0});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"editProjectExamine",value:function(){var e=d(o.a.mark(function e(t,r){var a;return o.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(n["put"])("v1/project_examine/".concat(t),r,{handleError:!0});case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}},e)}));function t(t,r){return e.apply(this,arguments)}return t}()}]),e}();t["default"]=new b},7416:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",["list"===e.redirectType?r("div",{staticClass:"container"},[r("div",{staticClass:"header"},[r("div",{staticClass:"title"},[r("span",[e._v("客户项目列表")]),r("el-button",{staticClass:"add-banner-item",attrs:{type:"primary",plain:""},on:{click:e.handleAdd}},[e._v("添加项目")])],1),r("span",{staticClass:"back",on:{click:function(t){return e.back(!1)}}},[r("i",{staticClass:"iconfont icon-fanhui"}),e._v(" 返回 ")])]),r("lin-table",{attrs:{tableColumn:e.tableColumn,tableData:e.tableData,operate:e.operate,loading:e.loading,curPage:e.currentPage},on:{handleLog:e.handleLog,currentChange:e.currentChange,handleEdit:e.handleEdit,handleDelete:e.handleDelete}})],1):"log"===e.redirectType?r("customer-log-list",{attrs:{projectID:e.editID,customerID:e.customerID,linkCode:e.linkCode},on:{close:e.closePage}}):"add"===e.redirectType?r("project-add",{attrs:{linkCode:e.linkCode},on:{close:e.closePage}}):"edit"===e.redirectType?r("project-edit",{attrs:{editID:e.editID},on:{close:e.closePage}}):e._e()],1)},o=[],n=r("a34a"),s=r.n(n),l=r("f8fd"),i=r("5b05"),c=r("f2cc"),u=r("cd57");function d(e){return d="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function m(e,t,r,a,o,n,s){try{var l=e[n](s),i=l.value}catch(error){return void r(error)}l.done?t(i):Promise.resolve(i).then(a,o)}function f(e){return function(){var t=this,r=arguments;return new Promise(function(a,o){var n=e.apply(t,r);function s(e){m(n,a,o,s,l,"next",e)}function l(e){m(n,a,o,s,l,"throw",e)}s(void 0)})}}var p={name:"ProjectList",components:{ProjectEdit:i["default"],ProjectAdd:c["default"],CustomerLogList:u["default"]},props:{linkCode:{type:Number,default:0},customerID:Number},data:function(){return{editID:0,currentPage:1,tableColumn:[{prop:"id",label:"id",width:150},{prop:"customer_name",label:"客户名"},{prop:"scene",label:"使用场景",width:200},{prop:"author",label:"录入人员"},{prop:"create_time",label:"生成时间",width:200}],tableData:[],operate:[],showEdit:!1,loading:!1,redirectType:"list"}},created:function(){this.operate=[],this.linkCode&&this.operate.push({name:"编辑",func:"handleEdit",type:"primary"}),this.operate.push({name:"删除",func:"handleDelete",type:"danger",auth:"删除客户项目"}),this.operate.push({name:"日志",func:"handleLog",type:"danger",icon:""}),this.getProjects()},methods:{getProjects:function(){var e=f(s.a.mark(function e(){var t,r,a,o,n=arguments;return s.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(t=n.length>0&&void 0!==n[0]?n[0]:0,this.loading=!0,!(this.linkCode<=0)){e.next=5;break}return this.$message({type:"success",message:"客户错误"}),e.abrupt("return");case 5:return e.prev=5,e.next=8,l["default"].getCustomerProjects(t,{},this.linkCode,0);case 8:if(r=e.sent,!(r.total_nums<=0)){e.next=13;break}return this.tableData=[],this.loading=!1,e.abrupt("return");case 13:this.loading=!1,this.tableData=r.collection,e.next=35;break;case 17:if(e.prev=17,e.t0=e["catch"](5),this.loading=!1,this.tableData=[],!error.data){e.next=34;break}if(a=error.data.msg,!a||"object"!==d(a)){e.next=32;break}e.t1=s.a.keys(a);case 25:if((e.t2=e.t1()).done){e.next=32;break}return o=e.t2.value,this.$message.error(a[o]),e.next=30,setTimeout(function(){},1e3);case 30:e.next=25;break;case 32:e.next=35;break;case 34:this.$message.error(error.toString());case 35:case"end":return e.stop()}},e,this,[[5,17]])}));function t(){return e.apply(this,arguments)}return t}(),currentChange:function(e){e<=0||(e-=1,this.currentPage=e+1,this.getProjects(e))},handleAdd:function(){this.redirectType="add"},handleEdit:function(e){var t=e.row;this.editID=t.id,this.redirectType="edit"},handleLog:function(e){var t=e.row;this.linkCode=t.link_code,this.editID=t.id,this.redirectType="log"},handleDelete:function(e){var t=this;this.$confirm("此操作将永久删除该项目, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(f(s.a.mark(function r(){var a,o;return s.a.wrap(function(r){while(1)switch(r.prev=r.next){case 0:return a=[e.row.id],t.loading=!0,r.next=4,l["default"].delCustomerProject(a);case 4:o=r.sent,t.loading=!1,0===o.error_code&&(t.getProjects(t.currentPage-1),t.$message({type:"success",message:"".concat(o.msg)}));case 7:case"end":return r.stop()}},r)})))},rowClick:function(){},back:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.$emit("close",e)},closePage:function(e){this.redirectType="list",e&&this.getProjects()}}},b=p,h=(r("235a"),r("2877")),_=Object(h["a"])(b,a,o,!1,null,"e5f973ee",null);t["default"]=_.exports},f2cc:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("div",{staticClass:"title"},[e._v("新建项目 "),r("span",{staticClass:"back",on:{click:function(t){return e.back(!1)}}},[r("i",{staticClass:"iconfont icon-fanhui"}),e._v(" 返回 ")])]),r("div",{staticClass:"wrap"},[r("el-row",[r("el-col",{attrs:{lg:16,md:20,sm:24,xs:24}},[r("el-form",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"form",attrs:{model:e.form,"status-icon":"",rules:e.rules,"label-width":"120px"},nativeOn:{submit:function(e){e.preventDefault()}}},[r("el-form-item",{attrs:{label:"项目名",prop:"name"}},[r("el-input",{attrs:{size:"medium",placeholder:"请填写项目名"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),r("el-form-item",{attrs:{label:"客户来源",prop:"project_channel"}},[r("el-select",{attrs:{size:"medium",filterable:"",placeholder:"请选择客户来源"},model:{value:e.form.project_channel,callback:function(t){e.$set(e.form,"project_channel",t)},expression:"form.project_channel"}},[e._l(e.channelData,function(t,a){return[r("el-option",{key:a,attrs:{value:t,label:t}},[r("span",{staticStyle:{color:"#b4b4b4","margin-right":"15px","font-size":"12px"}},[e._v(e._s(a+1))]),r("span",[e._v(e._s(t))])])]})],2)],1),r("el-form-item",{attrs:{label:"使用场景",prop:"scene"}},[r("el-input",{attrs:{size:"medium",placeholder:"请填写使用场景"},model:{value:e.form.scene,callback:function(t){e.$set(e.form,"scene",t)},expression:"form.scene"}})],1),r("el-form-item",{attrs:{label:"客户行业",prop:"industry"}},[r("el-select",{attrs:{size:"medium",filterable:"",placeholder:"请选择客户行业"},model:{value:e.form.industry,callback:function(t){e.$set(e.form,"industry",t)},expression:"form.industry"}},[e._l(e.industryData,function(t,a){return[r("el-option",{key:a,attrs:{value:t,label:t}},[r("span",{staticStyle:{color:"#b4b4b4","margin-right":"15px","font-size":"12px"}},[e._v(e._s(a+1))]),r("span",[e._v(e._s(t))])])]})],2),r("el-input",{staticClass:"mt10",attrs:{disabled:!e.industryDisplay&&"disabled",size:"medium",placeholder:"请填写客户行业"},model:{value:e.industry_other,callback:function(t){e.industry_other=t},expression:"industry_other"}})],1),r("el-form-item",{attrs:{label:"产品类型",prop:"product_type"}},[r("el-select",{attrs:{size:"medium",filterable:"",placeholder:"请选择产品类型"},model:{value:e.form.product_type,callback:function(t){e.$set(e.form,"product_type",t)},expression:"form.product_type"}},[e._l(e.productTypeData,function(t,a){return[r("el-option",{key:t,attrs:{value:a,label:t}},[r("span",{staticStyle:{color:"#b4b4b4","margin-right":"15px","font-size":"12px"}},[e._v(e._s(a+1))]),r("span",[e._v(e._s(t))])])]})],2)],1),r("el-form-item",{staticClass:"form-item",attrs:{label:"产品规格",prop:"product_spec"}},[r("el-input",{attrs:{size:"medium",placeholder:"请填写产品规格"},model:{value:e.form.product_spec,callback:function(t){e.$set(e.form,"product_spec",t)},expression:"form.product_spec"}})],1),r("el-form-item",{attrs:{label:"产品数量",prop:"product_num"}},[r("el-input-number",{attrs:{min:1,max:10,label:"产品数量"},model:{value:e.form.product_num,callback:function(t){e.$set(e.form,"product_num",t)},expression:"form.product_num"}})],1),r("el-form-item",{attrs:{label:"产品报价",prop:"product_price"}},[r("el-input",{attrs:{size:"medium",placeholder:"请填写产品报价"},model:{value:e.form.product_price,callback:function(t){e.$set(e.form,"product_price",t)},expression:"form.product_price"}})],1),r("el-form-item",{attrs:{label:"客户需求背景",prop:"demand_bg"}},[r("el-select",{attrs:{size:"medium",filterable:"",placeholder:"请选择客户需求背景"},model:{value:e.form.demand_bg,callback:function(t){e.$set(e.form,"demand_bg",t)},expression:"form.demand_bg"}},[e._l(e.demandBgData,function(t,a){return[r("el-option",{key:a,attrs:{value:t,label:t}},[r("span",{staticStyle:{color:"#b4b4b4","margin-right":"15px","font-size":"12px"}},[e._v(e._s(a+1))]),r("span",[e._v(e._s(t))])])]})],2),r("el-input",{staticClass:"mt10",attrs:{size:"medium",disabled:!e.demandBgDisplay&&"disabled",placeholder:"请填写客户需求背景"},model:{value:e.demand_bg_other,callback:function(t){e.demand_bg_other=t},expression:"demand_bg_other"}})],1),r("el-form-item",{attrs:{label:"需求描述",prop:"demand_desc"}},[r("el-input",{attrs:{type:"textarea",size:"medium",placeholder:"请填写需求描述"},model:{value:e.form.demand_desc,callback:function(t){e.$set(e.form,"demand_desc",t)},expression:"form.demand_desc"}})],1),r("el-form-item",{attrs:{label:"提供对应解决方案",prop:"solution"}},[r("el-input",{attrs:{type:"textarea",size:"medium",placeholder:"请填写对应解决方案"},model:{value:e.form.solution,callback:function(t){e.$set(e.form,"solution",t)},expression:"form.solution"}})],1),r("el-form-item",{attrs:{label:"工程安装解决方案",prop:"install_solution"}},[r("el-input",{attrs:{type:"textarea",size:"medium",placeholder:"请填写工程安装解决方案"},model:{value:e.form.install_solution,callback:function(t){e.$set(e.form,"install_solution",t)},expression:"form.install_solution"}})],1),r("el-form-item",{attrs:{label:"客户关注产品亮点",prop:"product_lights"}},[r("el-input",{attrs:{type:"textarea",size:"medium",placeholder:"请填写客户关注产品亮点"},model:{value:e.form.product_lights,callback:function(t){e.$set(e.form,"product_lights",t)},expression:"form.product_lights"}})],1),r("el-form-item",{attrs:{label:"客户价值",prop:"custom_value"}},[r("el-input",{attrs:{type:"textarea",size:"medium",placeholder:"请填写客户价值"},model:{value:e.form.custom_value,callback:function(t){e.$set(e.form,"custom_value",t)},expression:"form.custom_value"}})],1),r("el-form-item",{attrs:{label:"业务跟进困难点",prop:"follow_difficulty"}},[r("el-input",{attrs:{type:"textarea",size:"medium",placeholder:"请填写业务跟进困难点"},model:{value:e.form.follow_difficulty,callback:function(t){e.$set(e.form,"follow_difficulty",t)},expression:"form.follow_difficulty"}})],1),r("el-form-item",{attrs:{label:"客户反馈",prop:"custom_feedback"}},[r("el-input",{attrs:{type:"textarea",size:"medium",placeholder:"请填写客户反馈"},model:{value:e.form.custom_feedback,callback:function(t){e.$set(e.form,"custom_feedback",t)},expression:"form.custom_feedback"}})],1),r("el-form-item",{attrs:{label:"跟进状态",prop:"follow_status"}},[r("el-select",{attrs:{size:"medium",filterable:"",placeholder:"请选择跟进状态"},model:{value:e.form.follow_status,callback:function(t){e.$set(e.form,"follow_status",t)},expression:"form.follow_status"}},[e._l(e.statusData,function(t,a){return[r("el-option",{key:a,attrs:{value:t,label:t}},[r("span",{staticStyle:{color:"#b4b4b4","margin-right":"15px","font-size":"12px"}},[e._v(e._s(a+1))]),r("span",[e._v(e._s(t))])])]})],2)],1),r("el-form-item",{attrs:{label:"订单编码",prop:"order_no"}},[r("el-input",{attrs:{size:"medium",placeholder:"请填写订单编码"},model:{value:e.form.order_no,callback:function(t){e.$set(e.form,"order_no",t)},expression:"form.order_no"}})],1),r("el-form-item",{attrs:{label:"跟进次数",prop:"follow_count"}},[r("el-input",{attrs:{size:"small",placeholder:"请填写跟进次数"},model:{value:e.form.follow_count,callback:function(t){e.$set(e.form,"follow_count",t)},expression:"form.follow_count"}})],1),r("el-form-item",{attrs:{label:"丢单原因",prop:"reason"}},[r("el-input",{attrs:{type:"textarea",size:"medium",placeholder:"请填写丢单原因"},model:{value:e.form.reason,callback:function(t){e.$set(e.form,"reason",t)},expression:"form.reason"}})],1),r("el-form-item",{staticClass:"submit"},[r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitform("form")}}},[e._v("保 存")]),r("el-button",{on:{click:function(t){return e.resetForm("form")}}},[e._v("重 置")])],1)],1)],1)],1)],1)])},o=[],n=r("a34a"),s=r.n(n),l=r("f8fd"),i=r("93c2");function c(e){return c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function u(e,t,r,a,o,n,s){try{var l=e[n](s),i=l.value}catch(error){return void r(error)}l.done?t(i):Promise.resolve(i).then(a,o)}function d(e){return function(){var t=this,r=arguments;return new Promise(function(a,o){var n=e.apply(t,r);function s(e){u(n,a,o,s,l,"next",e)}function l(e){u(n,a,o,s,l,"throw",e)}s(void 0)})}}var m={name:"CulturalAdd",props:{linkCode:Number},data:function(){return{loading:!1,demandBgData:["已受灾","应付检查","系统统一安装","领导要求","其他"],productTypeData:["不锈钢开启式","不锈钢密闭式","铝合金组合式","水动力","ABS"],industryData:["商场","工厂","其他"],statusData:[],channelData:[],fieldObj:{industry:"industryData",status:"statusData",product_type:"productTypeData",demand_bg:"demandBgData",project_channel:"channelData"},industry_other:"",demand_bg_other:"",demandBgDisplay:!1,industryDisplay:!1,form:{name:"",scene:"",industry:"",product_type:"",product_spec:"",product_num:"",product_price:"",demand_bg:"",demand_desc:"",solution:"",install_solution:"",product_lights:"",custom_value:"",follow_difficulty:"",custom_feedback:"",follow_count:0,reason:"",follow_status:""},rules:{name:[{required:!0,message:"请输入名称",trigger:"blur"}]}}},created:function(){this.getTypes()},watch:{form:{handler:function(e,t){"其他"==e.industry?this.industryDisplay=!0:(this.industryDisplay=!1,this.industry_other=""),"其他"==e.demand_bg?this.demandBgDisplay=!0:(this.demandBgDisplay=!1,this.demand_bg_other="")},deep:!0}},methods:{settingFollow:function(){var e=this.form;return e.link_code=this.linkCode,"其他"==e.industry&&(e.industry="其他-"+this.industry_other),"其他"==e.demand_bg&&(e.demand_bg="其他-"+this.demand_bg_other),e},submitform:function(e){var t=this;this.$refs[e].validate(function(){var e=d(s.a.mark(function e(r){var a,o,n;return s.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!r){e.next=29;break}return t.loading=!0,e.prev=2,e.next=5,l["default"].addCustomerProject(t.settingFollow());case 5:a=e.sent,0===a.error_code&&t.$message.success("".concat(a.msg)),t.back(),e.next=26;break;case 10:if(e.prev=10,e.t0=e["catch"](2),!e.t0.data){e.next=25;break}if(o=e.t0.data.msg,!o||"object"!==c(o)){e.next=23;break}e.t1=s.a.keys(o);case 16:if((e.t2=e.t1()).done){e.next=23;break}return n=e.t2.value,t.$message.error(o[n]),e.next=21,setTimeout(function(){},1e3);case 21:e.next=16;break;case 23:e.next=26;break;case 25:t.$message.error(e.t0.toString());case 26:t.loading=!1,e.next=31;break;case 29:return t.$message.error("请填写正确的信息"),e.abrupt("return",!1);case 31:case"end":return e.stop()}},e,null,[[2,10]])}));return function(t){return e.apply(this,arguments)}}())},getTypes:function(){var e=d(s.a.mark(function e(){var t,r,a,o,n,l,c=this;return s.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:for(a in t=[],r=this.fieldObj,r)t.push(a);return t=t.join(),e.next=6,i["default"].getTypeByField(t);case 6:if(o=e.sent,o&&0!=o.length){e.next=9;break}return e.abrupt("return");case 9:for(l in n=function(e){var t=r[e],a=o.find(function(t){return t["field"]==e});a&&(c[t]=a["value"])},r)n(l);case 11:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),resetForm:function(e){this.$refs[e].resetFields()},back:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.$emit("close",e)}}},f=m,p=(r("3151"),r("2877")),b=Object(p["a"])(f,a,o,!1,null,"43cb1c0e",null);t["default"]=b.exports},fabb:function(e,t,r){}}]);