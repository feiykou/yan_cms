(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1cc451c6","chunk-2d20861e","chunk-2d20861e"],{"07d7":function(t,e,n){"use strict";n("9e7d")},"9e7d":function(t,e,n){},a50d:function(t,e,n){"use strict";n.r(e);var r=n("a34a"),a=n.n(r),u=n("dfd8"),c=n("f121");function i(t,e,n,r,a,u,c){try{var i=t[u](c),s=i.value}catch(o){return void n(o)}i.done?e(s):Promise.resolve(s).then(r,a)}function s(t){return function(){var e=this,n=arguments;return new Promise(function(r,a){var u=t.apply(e,n);function c(t){i(u,r,a,c,s,"next",t)}function s(t){i(u,r,a,c,s,"throw",t)}c(void 0)})}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function l(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function f(t,e,n){return e&&l(t.prototype,e),n&&l(t,n),t}var p=function(){function t(){o(this,t)}return f(t,[{key:"getCustomerChannelData",value:function(){var t=s(a.a.mark(function t(){var e;return a.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(u["get"])("v1/analysis/customer/channel",{handleError:!0});case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}},t)}));function e(){return t.apply(this,arguments)}return e}()},{key:"getCustomerBaseStatistics",value:function(){var t=s(a.a.mark(function t(e,n,r){var c;return a.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(u["get"])("v1/analysis/customer/base",{start:e,end:n,type:r,handleError:!0});case 2:return c=t.sent,t.abrupt("return",c);case 4:case"end":return t.stop()}},t)}));function e(e,n,r){return t.apply(this,arguments)}return e}()},{key:"getCustomerNoFollow",value:function(){var t=s(a.a.mark(function t(){var e;return a.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(u["get"])("v1/analysis/customer/no_follow",{handleError:!0});case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}},t)}));function e(){return t.apply(this,arguments)}return e}()},{key:"getCustomerFollow",value:function(){var t=s(a.a.mark(function t(){var e;return a.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(u["get"])("v1/analysis/customer/follow",{handleError:!0});case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}},t)}));function e(){return t.apply(this,arguments)}return e}()},{key:"getUserOrderData",value:function(){var t=s(a.a.mark(function t(){var e,n,r,i,s=arguments;return a.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=s.length>0&&void 0!==s[0]?s[0]:0,n=s.length>1?s[1]:void 0,r=s.length>2&&void 0!==s[2]?s[2]:c["default"].pageSize,t.next=5,Object(u["get"])("v1/analysis/user/order",{uid:n,page:e,count:r,handleError:!0});case 5:return i=t.sent,t.abrupt("return",i);case 7:case"end":return t.stop()}},t)}));function e(){return t.apply(this,arguments)}return e}()},{key:"getUserAllCart",value:function(){var t=s(a.a.mark(function t(e){var n;return a.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(u["get"])("v1/cart",{uid:e,handleError:!0});case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}},t)}));function e(e){return t.apply(this,arguments)}return e}()}]),t}();e["default"]=new p},aa68:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"broken-container"},[n("div",{staticClass:"title"},[t._v("仅一月用户新增人数")]),n("v-chart",{attrs:{forceFit:!0,height:t.params.height,data:t.data,scale:t.params.scale}},[n("v-tooltip"),n("v-axis"),n("v-legend"),n("v-line",{attrs:{position:"date*count"}}),n("v-point",{attrs:{position:"date*count",shape:"circle"}})],1)],1)},a=[],u=n("a34a"),c=n.n(u),i=n("a50d"),s=n("306b");function o(t,e,n,r,a,u,c){try{var i=t[u](c),s=i.value}catch(o){return void n(o)}i.done?e(s):Promise.resolve(s).then(r,a)}function l(t){return function(){var e=this,n=arguments;return new Promise(function(r,a){var u=t.apply(e,n);function c(t){o(u,r,a,c,i,"next",t)}function i(t){o(u,r,a,c,i,"throw",t)}c(void 0)})}}var f={data:function(){return{data:[],params:{scale:[{dataKey:"date",range:[0,1],type:"timeCat"},{dataKey:"count",alias:"注册数量",min:0}],height:400}}},created:function(){this.getStatistics()},methods:{getStatistics:function(){var t=l(c.a.mark(function t(){var e,n;return c.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=[],n=s["default"].getDateRange(new Date,30,!0),t.prev=2,this.loading=!0,t.next=6,i["default"].getCustomerBaseStatistics(n[0],n[1],"day");case 6:e=t.sent,this.loading=!1,t.next=14;break;case 10:t.prev=10,t.t0=t["catch"](2),e=[],this.loading=!1;case 14:this.data=e;case 15:case"end":return t.stop()}},t,this,[[2,10]])}));function e(){return t.apply(this,arguments)}return e}()}},p=f,v=(n("07d7"),n("cba8")),d=Object(v["a"])(p,r,a,!1,null,"3a1edece",null);e["default"]=d.exports}}]);