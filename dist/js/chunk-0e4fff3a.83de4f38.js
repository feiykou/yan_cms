(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0e4fff3a"],{"17ea":function(e,t,r){},aab7:function(e,t,r){"use strict";r("17ea")},c8d7:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("div",{staticClass:"title"},[e._v("添加客户基本信息 "),r("span",{staticClass:"back",on:{click:function(t){return e.back(!1)}}},[r("i",{staticClass:"iconfont icon-fanhui"}),e._v(" 返回 ")])]),r("div",{staticClass:"wrap"},[r("el-row",[r("el-col",{attrs:{lg:16,md:20,sm:24,xs:24}},[r("el-form",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"form",attrs:{model:e.form,"status-icon":"",rules:e.rules,"label-width":"120px"},nativeOn:{submit:function(e){e.preventDefault()}}},[r("el-form-item",{attrs:{label:"客户名",prop:"name"}},[r("el-input",{attrs:{size:"medium",placeholder:"请填写客户名"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),r("el-form-item",{attrs:{label:"联系人",prop:"contacts_name"}},[r("el-input",{attrs:{size:"medium",placeholder:"请填写联系人"},model:{value:e.form.contacts_name,callback:function(t){e.$set(e.form,"contacts_name",t)},expression:"form.contacts_name"}})],1),r("el-form-item",{staticClass:"form-item",attrs:{label:"联系电话",prop:"telephone"}},[r("el-input",{attrs:{size:"medium",placeholder:"联系电话"},model:{value:e.form.telephone,callback:function(t){e.$set(e.form,"telephone",t)},expression:"form.telephone"}})],1),r("el-form-item",{attrs:{label:"联系人邮箱",prop:"email"}},[r("el-input",{attrs:{size:"medium",placeholder:"请填写email"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),r("el-form-item",{attrs:{label:"客户类型",prop:"customer_type"}},[r("el-select",{attrs:{size:"medium",filterable:"",placeholder:"请选择客户类型"},model:{value:e.form.customer_type,callback:function(t){e.$set(e.form,"customer_type",t)},expression:"form.customer_type"}},[e._l(e.customerTypeData,function(t,a){return[r("el-option",{key:a,attrs:{value:t,label:t}},[r("span",{staticStyle:{color:"#b4b4b4","margin-right":"15px","font-size":"12px"}},[e._v(e._s(a+1))]),r("span",[e._v(e._s(t))])])]})],2)],1),r("el-form-item",{attrs:{label:"联系人地址",prop:"address"}},[r("el-cascader",{attrs:{size:"large",filterable:"",options:e.addressData},model:{value:e.form.address,callback:function(t){e.$set(e.form,"address",t)},expression:"form.address"}})],1),r("el-form-item",{attrs:{label:"跟进状态",prop:"follow_status"}},[r("el-select",{attrs:{size:"medium",filterable:"",placeholder:"请选择跟进状态"},model:{value:e.form.follow_status,callback:function(t){e.$set(e.form,"follow_status",t)},expression:"form.follow_status"}},[e._l(e.followStatuslData,function(t,a){return[r("el-option",{key:a,attrs:{value:t,label:t}},[r("span",{staticStyle:{color:"#b4b4b4","margin-right":"15px","font-size":"12px"}},[e._v(e._s(a+1))]),r("span",[e._v(e._s(t))])])]})],2)],1),r("el-form-item",{attrs:{label:"项目用途",prop:"purpose"}},[r("el-input",{attrs:{size:"medium",placeholder:"请填写项目用途"},model:{value:e.form.purpose,callback:function(t){e.$set(e.form,"purpose",t)},expression:"form.purpose"}})],1),r("el-form-item",{attrs:{label:"客户来源",prop:"channel"}},[r("el-select",{attrs:{size:"medium",filterable:"",placeholder:"请选择客户来源"},model:{value:e.form.channel,callback:function(t){e.$set(e.form,"channel",t)},expression:"form.channel"}},[e._l(e.channelData,function(t,a){return[r("el-option",{key:a,attrs:{value:t,label:t}},[r("span",{staticStyle:{color:"#b4b4b4","margin-right":"15px","font-size":"12px"}},[e._v(e._s(a+1))]),r("span",[e._v(e._s(t))])])]})],2)],1),r("el-form-item",{attrs:{label:"客户等级",prop:"level"}},[r("el-select",{attrs:{size:"medium",filterable:"",placeholder:"请选择客户等级"},model:{value:e.form.level,callback:function(t){e.$set(e.form,"level",t)},expression:"form.level"}},[e._l(e.levelData,function(t,a){return[r("el-option",{key:t,attrs:{value:t,label:t}},[r("span",{staticStyle:{color:"#b4b4b4","margin-right":"15px","font-size":"12px"}},[e._v(e._s(a+1))]),r("span",[e._v(e._s(t))])])]})],2)],1),"super"==e.adminName?r("el-form-item",{attrs:{label:"分配用户",prop:"dicider_user"}},[r("el-select",{attrs:{size:"medium",filterable:"",placeholder:"请选择分配用户"},model:{value:e.form.dicider_user,callback:function(t){e.$set(e.form,"dicider_user",t)},expression:"form.dicider_user"}},[e._l(e.cuserLists,function(t,a){return[r("el-option",{key:a,attrs:{value:t.id,label:t.username}},[r("span",{staticStyle:{color:"#b4b4b4","margin-right":"15px","font-size":"12px"}},[e._v(e._s(a+1))]),r("span",[e._v(e._s(t.username))])])]})],2)],1):e._e(),r("el-form-item",{attrs:{label:"释放客户",prop:"is_release_user"}},[r("el-switch",{attrs:{"active-color":"#3963bc"},model:{value:e.form.is_release_user,callback:function(t){e.$set(e.form,"is_release_user",t)},expression:"form.is_release_user"}})],1),r("el-form-item",{staticClass:"submit"},[r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("form")}}},[e._v("保 存")]),r("el-button",{on:{click:function(t){return e.resetForm("form")}}},[e._v("重 置")])],1)],1)],1)],1)],1)])},s=[],n=r("a34a"),o=r.n(n),l=r("2e3f"),i=r("3ef2"),c=r("93c2"),u=r("4723"),m=r("4360");function f(e){return b(e)||d(e)||p()}function p(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function d(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function b(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}function v(e){return v="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function h(e,t,r,a,s,n,o){try{var l=e[n](o),i=l.value}catch(c){return void r(c)}l.done?t(i):Promise.resolve(i).then(a,s)}function _(e){return function(){var t=this,r=arguments;return new Promise(function(a,s){var n=e.apply(t,r);function o(e){h(n,a,s,o,l,"next",e)}function l(e){h(n,a,s,o,l,"throw",e)}o(void 0)})}}var y={name:"CustomerAdd",data:function(){return{addressData:l["provinceAndCityData"],adminName:m["default"].state.user.username,fieldObj:{channel:"channelData",follow_status:"followStatuslData",customer_type:"customerTypeData",level:"levelData"},channelData:[],followStatuslData:[],levelData:["A","B","C"],customerTypeData:["业主","施工方"],loading:!1,columnData:[],cateData:[],cuserLists:[],form:{name:"",contacts_name:"",telephone:"",email:"",address:"",follow_status:"",purpose:"",channel:"",is_release_user:!1,customer_type:"",dicider_user:""},rules:{contacts_name:[{required:!0,message:"请输入联系人",trigger:"blur"}],telephone:[],email:[{type:"email",message:"请输入正确的邮箱地址",trigger:["blur"]}],address:[{required:!0,message:"请选择联系人地址"}],purpose:[{required:!0,message:"请输入项目用途",trigger:"blur"}],channel:[{required:!0,message:"请输入客户来源",trigger:"blur"}]}}},created:function(){this.getAdminUsers(),this.getTypes()},methods:{submitForm:function(e){var t=this;this.$refs[e].validate(function(){var r=_(o.a.mark(function r(a){var s,n,l;return o.a.wrap(function(r){while(1)switch(r.prev=r.next){case 0:if(!a){r.next=24;break}return t.loading=!0,r.prev=2,r.next=5,i["default"].addCustomer(t.form);case 5:s=r.sent,0===s.error_code&&(t.$message.success("".concat(s.msg)),t.resetForm(e),t.back()),r.next=21;break;case 9:if(r.prev=9,r.t0=r["catch"](2),n=r.t0.data.msg,!n||"object"!==v(n)){r.next=21;break}r.t1=o.a.keys(n);case 14:if((r.t2=r.t1()).done){r.next=21;break}return l=r.t2.value,t.$message.error(n[l]),r.next=19,setTimeout(function(){},1e3);case 19:r.next=14;break;case 21:t.loading=!1,r.next=26;break;case 24:return t.$message.error("请填写正确的信息"),r.abrupt("return",!1);case 26:case"end":return r.stop()}},r,null,[[2,9]])}));return function(e){return r.apply(this,arguments)}}())},getTypes:function(){var e=_(o.a.mark(function e(){var t,r,a,s,n,l,i=this;return o.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:for(a in t=[],r=this.fieldObj,r)t.push(a);return t=t.join(),e.next=6,c["default"].getTypeByField(t);case 6:if(s=e.sent,s&&0!=s.length){e.next=9;break}return e.abrupt("return");case 9:for(l in n=function(e){var t=r[e],a=s.find(function(t){return t["field"]==e});a&&(i[t]=a["value"])},r)n(l);case 11:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),getAdminUsers:function(){var e=_(o.a.mark(function e(){var t;return o.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u["default"].getAdminUsers({count:30,page:0});case 3:t=e.sent,this.cuserLists=f(t.items),e.next=9;break;case 7:e.prev=7,e.t0=e["catch"](0);case 9:case"end":return e.stop()}},e,this,[[0,7]])}));function t(){return e.apply(this,arguments)}return t}(),resetForm:function(e){this.$refs[e].resetFields()},back:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.$emit("close",e)}}},g=y,x=(r("aab7"),r("cba8")),k=Object(x["a"])(g,a,s,!1,null,"044a8a5a",null);t["default"]=k.exports}}]);