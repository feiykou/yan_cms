(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0f17b1fa","chunk-4635bb99"],{"01ad":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("div",{staticClass:"title"},[e._v("新建文创 "),a("span",{staticClass:"back",on:{click:function(t){return e.back(!1)}}},[a("i",{staticClass:"iconfont icon-fanhui"}),e._v(" 返回 ")])]),a("div",{staticClass:"wrap"},[a("el-row",[a("el-col",{attrs:{lg:16,md:20,sm:24,xs:24}},[a("el-form",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"form",attrs:{model:e.form,"status-icon":"",rules:e.rules,"label-width":"120px"},nativeOn:{submit:function(e){e.preventDefault()}}},[a("el-form-item",{attrs:{label:"标题",prop:"title"}},[a("el-input",{attrs:{size:"medium",placeholder:"请填写标题"},model:{value:e.form.title,callback:function(t){e.$set(e.form,"title",t)},expression:"form.title"}})],1),a("el-form-item",{attrs:{label:"名称",prop:"name"}},[a("el-input",{attrs:{size:"medium",placeholder:"请填写名称"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),a("el-form-item",{attrs:{label:"文创描述",prop:"description"}},[a("el-input",{attrs:{size:"medium",placeholder:"文创描述"},model:{value:e.form.description,callback:function(t){e.$set(e.form,"description",t)},expression:"form.description"}})],1),a("el-form-item",{attrs:{label:"分类",prop:"category_id"}},[a("el-select",{attrs:{size:"medium",filterable:"",placeholder:"请选择分类"},model:{value:e.form.category_id,callback:function(t){e.$set(e.form,"category_id",t)},expression:"form.category_id"}},[e._l(e.cateData,function(t,n){return[a("el-option",{key:n,attrs:{value:t.id,label:t.name}},[a("span",{staticStyle:{color:"#b4b4b4","margin-right":"15px","font-size":"12px"}},[e._v(e._s(t.id))]),a("span",[e._v(e._s(t.name))])]),t.sub?[e._l(t.sub,function(t,n){return[a("el-option",{key:n,attrs:{value:t.id,label:t.name}},[a("span",{staticStyle:{color:"#b4b4b4","margin-right":"15px","font-size":"12px"}},[e._v("┞----"+e._s(t.id))]),a("span",[e._v(e._s(t.name))])])]})]:e._e()]})],2)],1),a("el-form-item",{attrs:{label:"模板",prop:"template"}},[a("el-select",{attrs:{size:"medium",filterable:"",placeholder:"请选择模板"},model:{value:e.form.template,callback:function(t){e.$set(e.form,"template",t)},expression:"form.template"}},[a("el-option",{attrs:{value:""}},[a("span",[e._v("请选择模板")])]),e._l(e.template,function(t,n){return[a("el-option",{key:n,attrs:{value:t.field,label:t.name}},[a("span",[e._v(e._s(t.name))])])]})],2)],1),a("el-form-item",{attrs:{label:"默认spu",prop:"default_spu_id"}},[a("el-select",{attrs:{size:"medium",filterable:"",placeholder:"请选择spu"},model:{value:e.form.default_spu_id,callback:function(t){e.$set(e.form,"default_spu_id",t)},expression:"form.default_spu_id"}},[e._l(e.spuData,function(t,n){return[a("el-option",{key:n,attrs:{value:t.id,label:t.title}},[a("span",{staticStyle:{color:"#b4b4b4","margin-right":"15px","font-size":"12px"}},[e._v(e._s(t.id))]),a("span",[e._v(e._s(t.title))])])]})],2)],1),a("el-form-item",{attrs:{label:"是否上线",prop:"online"}},[a("el-switch",{attrs:{"active-color":"#3963bc"},model:{value:e.form.online,callback:function(t){e.$set(e.form,"online",t)},expression:"form.online"}})],1),a("el-form-item",{attrs:{label:"标题图",prop:"title_img"}},[a("upload-imgs",{ref:"uploadEleTitle",attrs:{rules:e.imgRules,maxNum:1}})],1),a("el-form-item",{attrs:{label:"入口图",prop:"entrance_img"}},[a("upload-imgs",{ref:"uploadEleEntrance",attrs:{rules:e.imgRules,maxNum:1}})],1),a("el-form-item",{attrs:{label:"外部图",prop:"internal_top_img"}},[a("upload-imgs",{ref:"uploadEleInternal",attrs:{rules:e.imgRules,maxNum:1}})],1),a("el-form-item",{staticClass:"submit"},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("form")}}},[e._v("保 存")]),a("el-button",{on:{click:function(t){return e.resetForm("form")}}},[e._v("重 置")])],1)],1)],1)],1)],1)])},l=[],i=a("a34a"),r=a.n(i),o=a("0b35"),s=a("6f20"),u=a("306b"),c=a("e0ba"),d=a("7954");function p(e){return p="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function f(e,t,a,n,l,i,r){try{var o=e[i](r),s=o.value}catch(u){return void a(u)}o.done?t(s):Promise.resolve(s).then(n,l)}function m(e){return function(){var t=this,a=arguments;return new Promise(function(n,l){var i=e.apply(t,a);function r(e){f(i,n,l,r,o,"next",e)}function o(e){f(i,n,l,r,o,"throw",e)}r(void 0)})}}var h={name:"CulturalAdd",components:{UploadImgs:c["default"]},data:function(){return{loading:!1,spuData:[],cateData:[],template:[{field:"horizontal",name:"横排"},{field:"vertical",name:"竖排"}],form:{title:"",name:"",description:"",online:!0},imgRules:{minWidth:100,minHeight:100,maxSize:5},rules:{name:[{required:!0,message:"请输入名称",trigger:"blur"}],title:[{required:!0,message:"请输入标题",trigger:"blur"}]}}},created:function(){this.getSpus(),this.getTreeCate()},methods:{submitForm:function(e){var t=this;this.$refs[e].validate(function(){var a=m(r.a.mark(function a(n){var l,i,s,c,d,f;return r.a.wrap(function(a){while(1)switch(a.prev=a.next){case 0:if(!n){a.next=37;break}return t.loading=!0,a.prev=2,a.next=5,t.$refs.uploadEleTitle.getValue();case 5:return l=a.sent,a.next=8,t.$refs.uploadEleEntrance.getValue();case 8:return i=a.sent,a.next=11,t.$refs.uploadEleInternal.getValue();case 11:return s=a.sent,t.form["title_img"]=u["default"].solveUploadImg(l),t.form["entrance_img"]=u["default"].solveUploadImg(i),t.form["internal_top_img"]=u["default"].solveUploadImg(s),a.next=17,o["default"].addCultural(t.form);case 17:c=a.sent,0===c.error_code&&(t.$message.success("".concat(c.msg)),t.resetForm(e),t.back()),a.next=34;break;case 21:if(a.prev=21,a.t0=a["catch"](2),console.log(a.t0),d=a.t0.data.msg,!d||"object"!==p(d)){a.next=34;break}a.t1=r.a.keys(d);case 27:if((a.t2=a.t1()).done){a.next=34;break}return f=a.t2.value,t.$message.error(d[f]),a.next=32,setTimeout(function(){},1e3);case 32:a.next=27;break;case 34:t.loading=!1,a.next=39;break;case 37:return t.$message.error("请填写正确的信息"),a.abrupt("return",!1);case 39:case"end":return a.stop()}},a,null,[[2,21]])}));return function(e){return a.apply(this,arguments)}}())},getSpus:function(){var e=m(r.a.mark(function e(){var t;return r.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,d["default"].getSpus(0,80);case 2:t=e.sent,this.spuData=t.collection;case 4:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),getTreeCate:function(){var e=m(r.a.mark(function e(){var t,a,n=arguments;return r.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:0,a=n.length>1&&void 0!==n[1]?n[1]:2,e.prev=2,e.next=5,s["default"].getTreeCate(t,a);case 5:this.cateData=e.sent,e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](2),this.cateData=[];case 11:case"end":return e.stop()}},e,this,[[2,8]])}));function t(){return e.apply(this,arguments)}return t}(),resetForm:function(e){this.$refs[e].resetFields()},back:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.$emit("close",e)}}},b=h,g=(a("ea8e"),a("cba8")),v=Object(g["a"])(b,n,l,!1,null,"7ee8bb95",null);t["default"]=v.exports},"01ea":function(e,t,a){"use strict";a("cff8")},"2db4":function(e,t,a){"use strict";a("2ee5")},"2ee5":function(e,t,a){},"8cbf":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",["list"===e.redirectType?a("div",{staticClass:"container"},[a("div",{staticClass:"header"},[a("div",{staticClass:"title"},[a("span",[e._v("文创列表")]),a("el-button",{staticClass:"add-banner-item",attrs:{type:"primary",plain:""},on:{click:e.handleAdd}},[e._v("添加文创")])],1)]),a("feiy-table",{attrs:{tableColumn:e.tableColumn,tableData:e.tableData,operate:e.operate,loading:e.loading},on:{handleEdit:e.handleEdit,handleDelete:e.handleDelete,handleCellSave:e.handleCellSave,handleRecommend:e.handleRecommend}})],1):"add"===e.redirectType?a("cultural-add",{on:{close:e.closePage}}):"edit"===e.redirectType?a("cultural-edit",{attrs:{editID:e.editID},on:{close:e.closePage}}):e._e()],1)},l=[],i=a("a34a"),r=a.n(i),o=a("0b35"),s=a("7ea8"),u=a("01ad"),c=a("f73d");function d(e,t,a,n,l,i,r){try{var o=e[i](r),s=o.value}catch(u){return void a(u)}o.done?t(s):Promise.resolve(s).then(n,l)}function p(e){return function(){var t=this,a=arguments;return new Promise(function(n,l){var i=e.apply(t,a);function r(e){d(i,n,l,r,o,"next",e)}function o(e){d(i,n,l,r,o,"throw",e)}r(void 0)})}}var f={name:"CulturalList",components:{CulturalEdit:s["default"],CulturalAdd:u["default"],feiyTable:c["default"]},data:function(){return{tableColumn:[{prop:"id",label:"id",width:150},{prop:"title_img",label:"标题图",type:"image",width:150,noRepeat:!0},{prop:"title",label:"标题",width:150},{prop:"name",label:"名称",width:150},{prop:"description",label:"描述",width:200},{prop:"entrance_img",label:"入口图",type:"image",width:150,noRepeat:!0},{prop:"order",label:"排序",type:"edit",order:1,width:200,edit:!1,noRepeat:!0},{prop:"internal_top_img",label:"外部图",type:"image",noRepeat:!0}],tableData:[],operate:[],showEdit:!1,loading:!1,editID:1,redirectType:"list"}},created:function(){this.operate=[{name:"编辑",func:"handleEdit",type:"primary"},{name:"删除",func:"handleDelete",type:"danger",auth:"删除图书"}],this.getCulturals()},methods:{getCulturals:function(){var e=p(r.a.mark(function e(){var t;return r.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.loading=!0,e.next=3,o["default"].getCulturals();case 3:t=e.sent,this.loading=!1,this.tableData=0===t.total_nums?[]:t.collection,console.log(t);case 7:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),handleAdd:function(){this.redirectType="add"},handleEdit:function(e){var t=e.row;this.editID=t.id,this.redirectType="edit"},handleCellSave:function(){var e=p(r.a.mark(function e(t){var a,n,l,i;return r.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=t.row,n=t.prop,l=this.singleUpdate({id:a.id,value:a[n],type:1,field:n}),this.loading=!0,e.next=5,o["default"].updateSingle(l);case 5:i=e.sent,this.loading=!1,0===i.error_code&&(this.$message.success("".concat(i.msg)),this.getCulturals());case 8:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),singleUpdate:function(e){var t=e.id,a=e.value,n=e.field,l=e.type,i={};return i.id=t,i.value=a,n&&(i.field=n),l&&(i.type=1),i},handleDelete:function(e){var t=this;this.$confirm("此操作将永久删除该图书, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(p(r.a.mark(function a(){var n,l;return r.a.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return n=[e.row.id],t.loading=!0,a.next=4,o["default"].delCultural(n);case 4:l=a.sent,t.loading=!1,0===l.error_code&&(t.getCulturals(),t.$message({type:"success",message:"".concat(l.msg)}));case 7:case"end":return a.stop()}},a)})))},rowClick:function(){},closePage:function(e){this.redirectType="list",e&&this.getCulturals()}}},m=f,h=(a("2db4"),a("cba8")),b=Object(h["a"])(m,n,l,!1,null,"1e65fca8",null);t["default"]=b.exports},b3f2:function(e,t,a){},cff8:function(e,t,a){},ea8e:function(e,t,a){"use strict";a("b3f2")},f73d:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"feiy-table"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"el-table-wrap",attrs:{data:e.tableData,id:"out-table'"},on:{"cell-mouse-enter":e.cellMouseEnter,"cell-mouse-leave":e.cellMouseLeave}},[e._l(e.filterTableColumn,function(t){return[t.noRepeat?e._e():a("el-table-column",{key:t.label,attrs:{prop:t.prop,label:t.label,"show-overflow-tooltip":!0,fixed:!!t.fixed&&t.fixed,width:t.width?t.width:""}}),"image"===t.type?a("el-table-column",{key:t.label,attrs:{label:t.label,prop:t.prop,width:t.width},scopedSlots:e._u([{key:"default",fn:function(n){return[n.row[t.prop]?a("el-image",{staticStyle:{width:"50px",height:"50px"},attrs:{src:n.row[t.prop],fit:"cover"}}):a("span",[e._v("暂无图片")])]}}],null,!0)}):e._e(),"tag"===t.type?a("el-table-column",{key:t.label,attrs:{label:t.label,prop:t.prop,width:t.width},scopedSlots:e._u([{key:"default",fn:function(a){return[e._t("default",null,{tag:a.row[t.prop],prop:t.prop})]}}],null,!0)}):e._e(),"edit"===t.type?a("el-table-column",{key:t.label,attrs:{label:t.label,prop:t.prop,width:t.width,"show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(n){return[n.row.editFlag?a("div",{staticClass:"table-edit"},[a("el-input",{attrs:{size:"mini"},model:{value:n.row[t.prop],callback:function(a){e.$set(n.row,t.prop,a)},expression:"scope.row[item.prop]"}}),a("div",{staticClass:"cell-icon-edit"},[a("div",{staticClass:"cell-save",on:{click:function(a){return e.handleCellSave(n.row,n.$index,t.prop)}}},[a("i",{staticClass:"el-icon-check"})]),a("div",{staticClass:"cell-cancel",on:{click:function(a){return e.handleCellCancel(n.row,n.$index,t.prop)}}},[a("i",{staticClass:"el-icon-close"})])])],1):a("div",{staticClass:"table-edit table-edit-start"},[a("div",{staticClass:"content"},[e._v(e._s(n.row[t.prop]))]),a("div",{directives:[{name:"show",rawName:"v-show",value:e.showEdit[n.row.id],expression:"showEdit[scope.row.id]"}],staticClass:"cell-icon",on:{click:function(a){return e.handleCellEdit(n.row,n.$index,t.prop)}}},[a("i",{staticClass:"el-icon-edit"})])])]}}],null,!0)}):e._e(),"radio"===t.type?a("el-table-column",{key:t.label,attrs:{label:t.label,prop:t.prop,width:t.width},scopedSlots:e._u([{key:"default",fn:function(n){return[a("el-switch",{attrs:{"active-color":"#3963bc"},on:{change:function(t){return e.handleRecommend(t,n.row)}},model:{value:n.row[t.prop],callback:function(a){e.$set(n.row,t.prop,a)},expression:"scope.row[item.prop]"}})]}}],null,!0)}):e._e(),"rate"===t.type?a("el-table-column",{attrs:{label:t.label,prop:t.prop,width:t.width},scopedSlots:e._u([{key:"default",fn:function(n){return[a("el-rate",{attrs:{colors:t.color,disabled:t.disabled,max:t.max},on:{change:function(a){return e.rateChange(t.prop,n.row)}},model:{value:n.row[t.prop],callback:function(a){e.$set(n.row,t.prop,a)},expression:"scope.row[item.prop]"}}),t.reset?a("div",{staticClass:"reset-rate",staticStyle:{"font-size":"12px","margin-left":"10px",cursor:"pointer"},on:{click:function(a){return e.resetRate(t.prop,n.row)}}},[e._v("重置")]):e._e()]}}],null,!0)}):e._e()]}),e.operate.length>0?a("el-table-column",{attrs:{label:"操作",fixed:"right",width:e.operateStyle.width},scopedSlots:e._u([{key:"default",fn:function(t){return e._l(e.operate,function(n,l){return a("el-button",{key:l,attrs:{type:n.type,plain:"",size:"mini"},nativeOn:{click:function(a){return a.preventDefault(),a.stopPropagation(),e.buttonMethods(n.func,t.$index,t.row)}}},[e._v(e._s(n.name))])})}}],null,!1,3794201391)}):e._e()],2),e.pagination?a("el-pagination",{staticClass:"pagination",attrs:{background:"",layout:"prev, pager, next","page-size":e.pagination.pageSize?e.pagination.pageSize:10,total:e.pagination.pageTotal?e.pagination.pageTotal:null},on:{"current-change":e.currentChange}}):e._e()],1)},l=[],i={name:"feiy-table",props:{tableColumn:{type:Array,default:function(){return[]}},tableData:{type:Array,default:function(){return[]}},operate:{type:Array,default:function(){return[]}},operateStyle:{type:Object,default:function(){return{width:250}}},customColumn:{type:Array,default:function(){return[]}},pagination:{type:[Object,Boolean],default:!1},loading:{type:Boolean,default:!1}},data:function(){return{filterTableColumn:[],currentPage:1,currentData:[],selectedTableData:[],showEdit:{},cellIndex:-1,tempEditVal:{}}},created:function(){},watch:{customColumn:{handler:function(e){e.length>1&&(this.filterTableColumn=this.tableColumn.filter(function(t){return e.indexOf(t.label)>-1}))},deep:!0},tableData:{handler:function(){var e=this;this.initMouseEvent(),this.pagination&&this.pagination.pageSize?this.currentData=this.tableData.filter(function(t,a){return a<e.pagination.pageSize}):this.currentData=this.tableData},deep:!0,immediate:!0},tableColumn:{handler:function(e){var t=this;this.customColumn.length>1?this.filterTableColumn=this.tableColumn.filter(function(e){return t.customColumn.indexOf(e.label)>-1}):this.filterTableColumn=this.tableColumn},deep:!0,immediate:!0}},methods:{buttonMethods:function(e,t,a){var n=this,l=this.$options.methods;console.log(l),l[e](n,t,a)},handleEdit:function(e,t,a){e.$emit("handleEdit",{index:t,row:a})},handleDetail:function(e,t,a){e.$emit("handleDetail",{index:t,row:a})},handleStorage:function(e,t,a){e.$emit("handleStorage",{index:t,row:a})},resetRate:function(e,t){t[e]=0,this.rateChange(e,t)},rateChange:function(e,t){var a=t[e],n=t["id"];this.$emit("handleRate",{val:a,id:n})},handleDelete:function(e,t,a){e.$emit("handleDelete",{index:t,row:a})},handleSonCate:function(e,t,a){e.$emit("handleSonCate",{index:t,row:a})},handleCellEdit:function(e,t,a){e.editFlag=!0,this.cellIndex=t,this.tempEditVal[a]=e[a]},handleCellCancel:function(e,t,a){e.editFlag=!1,e[a]=this.tempEditVal[a]},handleCellSave:function(e,t,a){e.editFlag=!1,this.tempEditVal[a]=e[a],this.$emit("handleCellSave",{row:e,prop:a})},handleRecommend:function(e,t){this.$emit("handleRecommend",{val:e,row:t})},cellMouseEnter:function(e){this.showEdit[e.id]||this.$set(this.showEdit,e.id,!0)},cellMouseLeave:function(e){this.showEdit[e.id]&&this.$set(this.showEdit,e.id,!1)},initMouseEvent:function(){for(var e in this.showEdit)this.showEdit[e]&&this.$set(this.showEdit,e,!1)},currentChange:function(e){var t=this,a=[];this.oldVal=[],this.currentPage=e,this.selectedTableData=JSON.parse(sessionStorage.getItem("selectedTableData")),this.currentData=this.tableData.filter(function(e,a){return a>=(t.currentPage-1)*t.pagination.pageSize&&a<t.currentPage*t.pagination.pageSize}),this.$emit("currentChange",e),this.selectedTableData.forEach(function(e){for(var n=0;n<t.currentData.length;n++)t.currentData[n].key===e.key&&(t.oldVal.push(t.currentData[n]),a.push(t.currentData[n]))}),this.$nextTick(function(){t.toggleSelection instanceof Function&&t.toggleSelection(a)}),this.currentIndex=(this.currentPage-1)*this.pagination.pageSize+1}}},r=i,o=(a("01ea"),a("cba8")),s=Object(o["a"])(r,n,l,!1,null,"9ca25128",null);t["default"]=s.exports}}]);