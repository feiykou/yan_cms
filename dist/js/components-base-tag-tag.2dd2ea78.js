(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["components-base-tag-tag"],{"016b":function(t,n,i){"use strict";i("5a7d")},"5a7d":function(t,n,i){},f941:function(t,n,i){"use strict";i.r(n);var e=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"mg-tag"},[t._l(t.dynamicTags,function(n){return i("el-tag",{key:n,attrs:{closable:"","disable-transitions":!1},on:{close:function(i){return t.handleClose(n)}}},[t._v("\n\t\t"+t._s(n)+"\n\t")])}),t.inputVisible?i("el-input",{ref:"saveTagInput",staticClass:"input-new-tag",attrs:{size:"small"},on:{blur:t.handleInputConfirm},nativeOn:{keyup:function(n){return!n.type.indexOf("key")&&t._k(n.keyCode,"enter",13,n.key,"Enter")?null:t.handleInputConfirm(n)}},model:{value:t.inputValue,callback:function(n){t.inputValue=n},expression:"inputValue"}}):i("el-button",{staticClass:"button-new-tag",attrs:{size:"small"},on:{click:t.showInput}},[t._v(t._s(t.btnName))])],2)},a=[],s={name:"tag",props:{btnName:{type:String,default:"添加标签"},tags:{type:Array,default:function(){return[]}}},data:function(){return{dynamicTags:[],inputVisible:!1,inputValue:""}},methods:{handleClose:function(t){this.dynamicTags.splice(this.dynamicTags.indexOf(t),1),this.$emit("handleConfirm",this.dynamicTags)},showInput:function(){var t=this;this.inputVisible=!0,this.$nextTick(function(n){t.$refs.saveTagInput.$refs.input.focus()})},handleInputConfirm:function(){var t=this.inputValue;t&&this.dynamicTags.push(t),this.inputVisible=!1,this.inputValue="",this.$emit("handleConfirm",this.dynamicTags)}},watch:{tags:{handler:function(t){this.dynamicTags=t},deep:!0}}},u=s,l=(i("016b"),i("2877")),o=Object(l["a"])(u,e,a,!1,null,"242f6bb6",null);n["default"]=o.exports}}]);