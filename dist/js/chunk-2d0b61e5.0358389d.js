(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b61e5"],{"1c96":function(e,r,n){"use strict";n.r(r);var t=n("a34a"),a=n.n(t),u=n("dfd8");n("f121");function o(e,r,n,t,a,u,o){try{var c=e[u](o),i=c.value}catch(s){return void n(s)}c.done?r(i):Promise.resolve(i).then(t,a)}function c(e){return function(){var r=this,n=arguments;return new Promise(function(t,a){var u=e.apply(r,n);function c(e){o(u,t,a,c,i,"next",e)}function i(e){o(u,t,a,c,i,"throw",e)}c(void 0)})}}function i(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function s(e,r){for(var n=0;n<r.length;n++){var t=r[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function l(e,r,n){return r&&s(e.prototype,r),n&&s(e,n),e}var p=function(){function e(){i(this,e)}return l(e,[{key:"importCustomerLog",value:function(){var e=c(a.a.mark(function e(r){var n,t;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(n={},r&&r["raw"]){e.next=3;break}return e.abrupt("return");case 3:return n["file"]=r["raw"],e.next=6,Object(u["post"])("v1/excel/customer_log",n,{handleError:!0});case 6:return t=e.sent,e.abrupt("return",t);case 8:case"end":return e.stop()}},e)}));function r(r){return e.apply(this,arguments)}return r}()},{key:"importCustomer",value:function(){var e=c(a.a.mark(function e(r){var n,t;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(n={},r&&r["raw"]){e.next=3;break}return e.abrupt("return");case 3:return n["file"]=r["raw"],e.next=6,Object(u["post"])("v1/excel/customer",n,{handleError:!0});case 6:return t=e.sent,console.log(t),e.abrupt("return",t);case 9:case"end":return e.stop()}},e)}));function r(r){return e.apply(this,arguments)}return r}()},{key:"exportCustomer",value:function(){var e=c(a.a.mark(function e(){var r,n,t=arguments;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.length>0&&void 0!==t[0]?t[0]:[],e.next=3,Object(u["get"])("v1/excel/customer",{ids:r,handleError:!0});case 3:return n=e.sent,console.log(n),e.abrupt("return",n);case 6:case"end":return e.stop()}},e)}));function r(){return e.apply(this,arguments)}return r}()},{key:"exportCustomerLog",value:function(){var e=c(a.a.mark(function e(){var r,n,t=arguments;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.length>0&&void 0!==t[0]?t[0]:[],e.next=3,Object(u["get"])("v1/excel/customer_log",{ids:r,handleError:!0});case 3:return n=e.sent,console.log(n),e.abrupt("return",n);case 6:case"end":return e.stop()}},e)}));function r(){return e.apply(this,arguments)}return r}()}]),e}();r["default"]=new p}}]);