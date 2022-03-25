(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-04c7e2bd"],{"2a62":function(t,e,r){"use strict";r("d7fb")},cd2a:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("div",{staticClass:"title"},[t._v("编辑客户日志 "),r("span",{staticClass:"back",on:{click:function(e){return t.back(!1)}}},[r("i",{staticClass:"iconfont icon-fanhui"}),t._v(" 返回 ")])]),r("div",{staticClass:"wrap"},[r("el-row",[r("el-col",{attrs:{lg:16,md:20,sm:24,xs:24}},[r("el-form",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"form",attrs:{model:t.form,"status-icon":"",rules:t.rules,"label-width":"120px"},nativeOn:{submit:function(t){t.preventDefault()}}},[r("el-form-item",{attrs:{label:"日志名",prop:"name"}},[r("el-input",{attrs:{size:"medium",placeholder:"请填写日志名"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),r("el-form-item",{attrs:{label:"图片信息",prop:"img_urls"}},[r("upload-imgs",{ref:"uploadImgs",attrs:{multiple:!0,rules:t.imgRules,value:t.responseImg(t.form.img_urls),sortable:!0,maxNum:20}})],1),r("el-form-item",{attrs:{label:"日志状态",prop:"status"}},[r("el-select",{attrs:{size:"medium",filterable:"",placeholder:"请选择日志状态"},model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}},[t._l(t.statusData,function(e,n){return[r("el-option",{key:e,attrs:{value:e,label:e,disabled:t.displayStatus!=e?void 0:""}},[r("span",{staticStyle:{color:"#b4b4b4","margin-right":"15px","font-size":"12px"}},[t._v(t._s(n+1))]),r("span",[t._v(t._s(e))])])]})],2)],1),r("el-form-item",{attrs:{label:"交流方式",prop:"commun_type"}},[r("el-select",{attrs:{size:"medium",filterable:"",placeholder:"请选择交流方式"},model:{value:t.form.commun_type,callback:function(e){t.$set(t.form,"commun_type",e)},expression:"form.commun_type"}},[t._l(t.communtypeData,function(e,n){return[r("el-option",{key:e,attrs:{value:e,label:e}},[r("span",{staticStyle:{color:"#b4b4b4","margin-right":"15px","font-size":"12px"}},[t._v(t._s(n+1))]),r("span",[t._v(t._s(e))])])]})],2)],1),r("el-form-item",{attrs:{label:"项目列表",prop:"project_id"}},[r("el-select",{attrs:{size:"medium",filterable:"",disabled:"{!!projectID}",placeholder:"请选择项目"},model:{value:t.form.project_id,callback:function(e){t.$set(t.form,"project_id",e)},expression:"form.project_id"}},[r("el-option",{key:"",attrs:{value:0,label:"日常维护"}},[r("span",{staticStyle:{color:"#b4b4b4","margin-right":"15px","font-size":"12px"}},[t._v("00")]),r("span",[t._v("日常维护")])]),t._l(t.projectData,function(e){return[r("el-option",{key:e.id,attrs:{value:e.id,label:e.name}},[r("span",{staticStyle:{color:"#b4b4b4","margin-right":"15px","font-size":"12px"}},[t._v(t._s(e.id))]),r("span",[t._v(t._s(e.name))])])]})],2)],1),r("el-form-item",{attrs:{label:"日志内容",prop:"content"}},[r("editor",{attrs:{id:"tinymce",init:t.editInit},model:{value:t.form.content,callback:function(e){t.$set(t.form,"content",e)},expression:"form.content"}})],1),r("el-form-item",{staticClass:"submit"},[r("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.submitForm("form")}}},[t._v("保 存")]),r("el-button",{on:{click:function(e){return t.resetForm("form")}}},[t._v("重 置")])],1)],1)],1)],1)],1)])},a=[],s=r("a34a"),i=r.n(s),o=(r("e562"),r("030f"),r("ca72")),l=(r("ec27"),r("e0ba")),u=r("ae02"),c=r("306b"),m=r("93c2"),f=r("f121"),p=r("f8fd");function d(t){return d="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}function b(t,e,r,n,a,s,i){try{var o=t[s](i),l=o.value}catch(u){return void r(u)}o.done?e(l):Promise.resolve(l).then(n,a)}function g(t){return function(){var e=this,r=arguments;return new Promise(function(n,a){var s=t.apply(e,r);function i(t){b(s,n,a,i,o,"next",t)}function o(t){b(s,n,a,i,o,"throw",t)}i(void 0)})}}var h={name:"CustomerLogEdit",props:{editID:Number,projectID:Number,linkCode:Number},data:function(){return{content:"",fieldObj:{commun_type:"communtypeData"},statusData:["初步联系","见面拜访","停滞客户","成交客户","正式报价"],communtypeData:["见面拜访","微信","钉钉"],projectData:[],displayStatus:f["default"].followStatusExamine,editInit:{selector:"#tinymce",language_url:"/tinymce/langs/zh_CN.js",language:"zh_CN",height:"400px",skin_url:"/tinymce/skins/ui/oxide"},value:"",imgRules:{minWidth:100,minHeight:100,maxSize:5},loading:!1,columnData:[],cateData:[],form:{name:"",content:""},rules:{name:[{required:!0,message:"请输入客户名称",trigger:"blur"}],content:[{required:!0,message:"请输入日志内容",trigger:"blur"}]}}},components:{UploadImgs:l["default"],Editor:o["a"]},created:function(){this._initialize(),this.getTypes(),this.getProjects()},methods:{_initialize:function(){this.getCustomerLog()},getCustomerLog:function(){var t=g(i.a.mark(function t(){var e;return i.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.loading=!0,t.prev=1,t.next=4,u["default"].getCustomerLog(this.editID);case 4:e=t.sent,this.projectID&&(e.project_id=this.projectID),this.form=e,t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](1),this.back(!1);case 12:this.loading=!1;case 13:case"end":return t.stop()}},t,this,[[1,9]])}));function e(){return t.apply(this,arguments)}return e}(),submitForm:function(t){var e=this;this.$refs[t].validate(function(){var t=g(i.a.mark(function t(r){var n,a,s,o;return i.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!r){t.next=32;break}return e.loading=!0,t.prev=2,t.next=5,e.$refs.uploadImgs.getValue();case 5:return n=t.sent,e.form["img_urls"]=c["default"].solveUploadMultipleImg(n),t.next=9,u["default"].editCustomerLog(e.editID,e.form);case 9:a=t.sent,0===a.error_code&&(e.$message.success("".concat(a.msg)),e.back()),t.next=29;break;case 13:if(t.prev=13,t.t0=t["catch"](2),!t.t0.data){t.next=28;break}if(s=t.t0.data.msg,!s||"object"!==d(s)){t.next=26;break}t.t1=i.a.keys(s);case 19:if((t.t2=t.t1()).done){t.next=26;break}return o=t.t2.value,e.$message.error(s[o]),t.next=24,setTimeout(function(){},1e3);case 24:t.next=19;break;case 26:t.next=29;break;case 28:e.$message.error(t.t0.toString());case 29:e.loading=!1,t.next=34;break;case 32:return e.$message.error("请填写正确的信息"),t.abrupt("return",!1);case 34:case"end":return t.stop()}},t,null,[[2,13]])}));return function(e){return t.apply(this,arguments)}}())},setStatusTypeField:function(){this.projectID?this.fieldObj["status"]="statusData":this.fieldObj["follow_status"]="statusData"},getTypes:function(){var t=g(i.a.mark(function t(){var e,r,n,a,s,o,l=this;return i.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:for(n in setStatusTypeField(),e=[],r=this.fieldObj,r)e.push(n);return e=e.join(),t.next=7,m["default"].getTypeByField(e);case 7:if(a=t.sent,a&&0!=a.length){t.next=10;break}return t.abrupt("return");case 10:for(o in s=function(t){var e=r[t],n=a.find(function(e){return e["field"]==t});n&&(l[e]=n["value"])},r)s(o);case 12:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),getProjects:function(){var t=g(i.a.mark(function t(){var e,r,n=arguments;return i.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(e=n.length>0&&void 0!==n[0]?n[0]:0,!(this.linkCode<=0)){t.next=4;break}return this.$message({type:"success",message:"客户错误"}),t.abrupt("return");case 4:return t.next=6,p["default"].getCustomerProjects(e,{},this.linkCode,0,20);case 6:if(r=t.sent,!(r.total_nums<=0)){t.next=10;break}return this.projectData=[],t.abrupt("return");case 10:this.projectData=r.collection;case 11:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),resetForm:function(t){this.$refs[t].resetFields()},back:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.$emit("close",t)},responseImg:function(t){if(t&&"undefined"!=t)return c["default"].solveReponseMultipleImg(t)}}},v=h,y=(r("2a62"),r("2877")),x=Object(y["a"])(v,n,a,!1,null,"6e524a24",null);e["default"]=x.exports},d7fb:function(t,e,r){}}]);