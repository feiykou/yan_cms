(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e53d1"],{9444:function(e,n,t){"use strict";t.r(n);var r=t("a34a"),a=t.n(r),u=t("dfd8"),c=t("f121");function i(e,n,t,r,a,u,c){try{var i=e[u](c),o=i.value}catch(s){return void t(s)}i.done?n(o):Promise.resolve(o).then(r,a)}function o(e){return function(){var n=this,t=arguments;return new Promise(function(r,a){var u=e.apply(n,t);function c(e){i(u,r,a,c,o,"next",e)}function o(e){i(u,r,a,c,o,"throw",e)}c(void 0)})}}function s(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function p(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,n,t){return n&&p(e.prototype,n),t&&p(e,t),e}var v=function(){function e(){s(this,e)}return f(e,[{key:"getNotices",value:function(){var e=o(a.a.mark(function e(){var n,t,r,i=arguments;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=i.length>0&&void 0!==i[0]?i[0]:0,t=i.length>1&&void 0!==i[1]?i[1]:c["default"].pageSize,e.next=4,Object(u["get"])("v1/notice",{page:n,count:t,handleError:!0});case 4:return r=e.sent,e.abrupt("return",r);case 6:case"end":return e.stop()}},e)}));function n(){return e.apply(this,arguments)}return n}()},{key:"getNotice",value:function(){var e=o(a.a.mark(function e(n){var t;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["get"])("v1/notice/".concat(n),{handleError:!0});case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}},e)}));function n(n){return e.apply(this,arguments)}return n}()},{key:"addNotice",value:function(){var e=o(a.a.mark(function e(n){var t;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["post"])("v1/notice",n,{handleError:!0});case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}},e)}));function n(n){return e.apply(this,arguments)}return n}()},{key:"editNotice",value:function(){var e=o(a.a.mark(function e(n,t){var r;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["put"])("v1/notice/".concat(n),t,{handleError:!0});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}},e)}));function n(n,t){return e.apply(this,arguments)}return n}()},{key:"delNotice",value:function(){var e=o(a.a.mark(function e(n){var t;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["_delete"])("v1/notice",{ids:n});case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}},e)}));function n(n){return e.apply(this,arguments)}return n}()},{key:"updateSingle",value:function(){var e=o(a.a.mark(function e(n){var t;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["patch"])("v1/notice/single",n);case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}},e)}));function n(n){return e.apply(this,arguments)}return n}()}]),e}();n["default"]=new v}}]);