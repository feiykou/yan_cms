(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["views-about-About","components-base-home-columnar-analysis","assets-img-about-header-bg-png","assets-img-about-icon1-png","assets-img-about-icon2-png","assets-img-about-icon3-png","assets-img-about-icon4-png","assets-img-about-qrcode-jpg"],{"05da":function(t,a,i){t.exports=i.p+"img/qrcode.d73ed15f.jpg"},"07d7e":function(t,a,i){"use strict";i("4d64")},3677:function(t,a,i){},"4d64":function(t,a,i){},"58ec":function(t,a,i){"use strict";i.r(a);var s=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"columnar-container"},[i("div",{staticClass:"title"},[t._v("仅一周用户新增人数")]),i("v-chart",{attrs:{forceFit:!0,height:400,scale:t.params.scale,padding:t.params.padding}},[i("v-tooltip",{attrs:{shared:!0}}),i("v-view",{attrs:{data:t.data}},[i("v-axis",{attrs:{dataKey:"date",label:t.params.label,tickLine:t.params.tickLine}}),i("v-axis",{attrs:{dataKey:"count",label:t.params.label,title:t.params.title}}),i("v-interval",{attrs:{position:"date*count",opacity:1}})],1),i("v-view",{attrs:{data:t.dv.rows}},[i("v-tooltip",{attrs:{show:!1}}),i("v-line",{attrs:{position:"date*count",vStyle:t.params.style}}),i("v-guide",{attrs:{type:"text",content:"趋势线",position:t.params.pos,vStyle:t.params.guideStyle,offsetY:-140}})],1)],1)],1)},e=[],n=i("a34a"),c=i.n(n),r=i("306b"),l=i("a50d");function o(t,a,i,s,e,n,c){try{var r=t[n](c),l=r.value}catch(o){return void i(o)}r.done?a(l):Promise.resolve(l).then(s,e)}function d(t){return function(){var a=this,i=arguments;return new Promise(function(s,e){var n=t.apply(a,i);function c(t){o(n,s,e,c,r,"next",t)}function r(t){o(n,s,e,c,r,"throw",t)}c(void 0)})}}var u=i("7104"),v={data:function(){return{data:[],dv:{},params:{scale:{},label:{},tickLine:{},title:{},style:{},guideStyle:{},pos:["min","min"],padding:[20,20,50,110]}}},created:function(){this.getStatistics()},methods:{createData:function(t){var a=new u;this.data=t;var i=a.createView().source(t);i.transform({type:"map",callback:function(t){return t.date=parseInt(t.date),t}}).transform({type:"regression",method:"polynomial",fields:["date","count"],bandwidth:.1,as:["date","count"]}),this.dv=i,this.setData()},setData:function(){this.params={guideStyle:{fill:"#8c8c8c",fontSize:14,fontWeight:300},style:{stroke:"#969696",lineDash:[3,3]},title:{offset:50},tickLine:{alignWithLabel:!1,length:0},label:{textStyle:{fill:"#aaaaaa"}},scale:[{dataKey:"count",alias:"数量（单）"},{dataKey:"date",range:[0,1],alias:"星期"}]}},getStatistics:function(){var t=d(c.a.mark(function t(){var a,i;return c.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return a=[],t.prev=1,this.loading=!0,i=r["default"].getDateRange(new Date,6,!0),t.next=6,l["default"].getCustomerBaseStatistics(i[0],i[1],"day");case 6:a=t.sent,console.log(a),a.forEach(function(t){t["date"]=r["default"].getWeeksByDay(t["date"])}),this.createData(a),t.next=16;break;case 12:t.prev=12,t.t0=t["catch"](1),a=[],this.loading=!1;case 16:this.data=a;case 17:case"end":return t.stop()}},t,this,[[1,12]])}));function a(){return t.apply(this,arguments)}return a}()}},f=v,m=(i("bf8f"),i("2877")),p=Object(m["a"])(f,s,e,!1,null,"318ccaa2",null);a["default"]=p.exports},"59ab":function(t,a,i){t.exports=i.p+"img/icon2.536aeec1.png"},"67a4":function(t,a,i){t.exports=i.p+"img/icon4.70fb6fd7.png"},8198:function(t,a,i){"use strict";i("b71d")},"924f":function(t,a,i){t.exports=i.p+"img/icon3.742e784d.png"},aa68:function(t,a,i){"use strict";i.r(a);var s=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"broken-container"},[i("div",{staticClass:"title"},[t._v("仅一月用户新增人数")]),i("v-chart",{attrs:{forceFit:!0,height:t.params.height,data:t.data,scale:t.params.scale}},[i("v-tooltip"),i("v-axis"),i("v-legend"),i("v-line",{attrs:{position:"date*count"}}),i("v-point",{attrs:{position:"date*count",shape:"circle"}})],1)],1)},e=[],n=i("a34a"),c=i.n(n),r=i("a50d"),l=i("306b");function o(t,a,i,s,e,n,c){try{var r=t[n](c),l=r.value}catch(o){return void i(o)}r.done?a(l):Promise.resolve(l).then(s,e)}function d(t){return function(){var a=this,i=arguments;return new Promise(function(s,e){var n=t.apply(a,i);function c(t){o(n,s,e,c,r,"next",t)}function r(t){o(n,s,e,c,r,"throw",t)}c(void 0)})}}var u={data:function(){return{data:[],params:{scale:[{dataKey:"date",range:[0,1],type:"timeCat"},{dataKey:"count",alias:"注册数量",min:0}],height:400}}},created:function(){this.getStatistics()},methods:{getStatistics:function(){var t=d(c.a.mark(function t(){var a,i;return c.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return a=[],i=l["default"].getDateRange(new Date,30,!0),t.prev=2,this.loading=!0,t.next=6,r["default"].getCustomerBaseStatistics(i[0],i[1],"day");case 6:a=t.sent,this.loading=!1,t.next=14;break;case 10:t.prev=10,t.t0=t["catch"](2),a=[],this.loading=!1;case 14:this.data=a;case 15:case"end":return t.stop()}},t,this,[[2,10]])}));function a(){return t.apply(this,arguments)}return a}()}},v=u,f=(i("07d7e"),i("2877")),m=Object(f["a"])(v,s,e,!1,null,"3a1edece",null);a["default"]=m.exports},b71d:function(t,a,i){},bf8f:function(t,a,i){"use strict";i("3677")},c169:function(t,a,i){t.exports=i.p+"img/icon1.d23ace36.png"},e279:function(t,a,i){t.exports=i.p+"img/header-bg.89b936bb.png"},ef4c:function(t,a,i){"use strict";i.r(a);var s=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"container"},[i("div",{staticClass:"lin-info"},[t._m(0),i("div",{staticClass:"lin-info-right"},[i("div",{staticClass:"team-detail"},[i("div",{staticClass:"team-box"},[i("div",{staticClass:"team-title"},[t._v("内部成员")]),i("ul",{staticClass:"team-ul"},[t._m(1),i("li",[t._m(2),i("span",{staticClass:"team-role"},[t._v("销售")]),i("span",{staticClass:"team-name"},[t.showTeam?t._e():i("ul",[i("li",[t._v("feiy")]),i("li",[t._v("zhuo")])])])])])]),t._m(3),i("p",{staticClass:"team-label"})])])]),t._m(4),t._m(5)])},e=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"lin-info-left"},[s("div",{staticClass:"welcome"},[s("div",{staticClass:"subtitle"},[s("div",{staticClass:"guide"},[t._v("欢迎进入CMS后台管理系统")])])]),s("img",{staticClass:"welcome-bg",attrs:{src:i("e279"),alt:""}})])},function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("li",[i("span",{staticClass:"shadow-box"},[i("i",{staticClass:"team-shadow"})]),i("span",{staticClass:"team-role"},[t._v("管理")]),i("span",{staticClass:"team-name"},[t._v("feiy")])])},function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("span",{staticClass:"shadow-box"},[i("i",{staticClass:"team-shadow"})])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"team-icon"},[s("img",{attrs:{src:i("05da"),alt:""}})])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"quantity-statistics"},[s("div",{staticClass:"quantity-item"},[s("div",{staticClass:"quantity-detail"},[s("div",{staticClass:"quantity-detail-box"},[s("div",{staticClass:"quantity-title"},[t._v("总客户数量")]),s("div",{staticClass:"quantity-border-line"}),s("div",{staticClass:"quantity"},[t._v("11,590")])])]),s("div",{staticClass:"quantity-icon"},[s("img",{attrs:{src:i("c169"),alt:""}})])]),s("div",{staticClass:"quantity-item"},[s("div",{staticClass:"quantity-detail"},[s("div",{staticClass:"quantity-detail-box"},[s("div",{staticClass:"quantity-title"},[t._v("新增用户数(月)")]),s("div",{staticClass:"quantity-border-line"}),s("div",{staticClass:"quantity"},[t._v("51,862")])])]),s("div",{staticClass:"quantity-icon"},[s("img",{attrs:{src:i("59ab"),alt:""}})])]),s("div",{staticClass:"quantity-item"},[s("div",{staticClass:"quantity-detail"},[s("div",{staticClass:"quantity-detail-box"},[s("div",{staticClass:"quantity-title"},[t._v("公域池客户数量")]),s("div",{staticClass:"quantity-border-line"}),s("div",{staticClass:"quantity"},[t._v("1,862")])])]),s("div",{staticClass:"quantity-icon"},[s("img",{attrs:{src:i("924f"),alt:""}})])]),s("div",{staticClass:"quantity-item"},[s("div",{staticClass:"quantity-detail"},[s("div",{staticClass:"quantity-detail-box"},[s("div",{staticClass:"quantity-title"},[t._v("超3天未维护客户数")]),s("div",{staticClass:"quantity-border-line"}),s("div",{staticClass:"quantity"},[t._v("1,323")])])]),s("div",{staticClass:"quantity-icon"},[s("img",{attrs:{src:i("67a4"),alt:""}})])])])},function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"chart-container"},[i("div",{staticClass:"chart-wrap"})])}],n=i("aa68"),c=i("58ec"),r={data:function(){return{activeName:"first",showTeam:!1}},components:{brokenAnalysis:n["default"],columnarAnalysis:c["default"]},mounted:function(){document.body.clientWidth>1200&&document.body.clientWidth<1330&&(this.showTeam=!0)},methods:{handleArticle:function(t){window.open(t)}}},l=r,o=(i("8198"),i("2877")),d=Object(o["a"])(l,s,e,!1,null,"8a2a2f8e",null);a["default"]=d.exports}}]);