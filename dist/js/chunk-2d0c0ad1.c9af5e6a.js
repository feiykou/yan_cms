(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c0ad1"],{4395:function(e,n,r){"use strict";r.r(n),r.d(n,"isEmptyObj",function(){return s}),r.d(n,"createId",function(){return c}),r.d(n,"checkIsAnimated",function(){return f}),r.d(n,"getFileType",function(){return m});var t=r("a34a"),a=r.n(t);function i(e,n,r,t,a,i,u){try{var o=e[i](u),s=o.value}catch(c){return void r(c)}o.done?n(s):Promise.resolve(s).then(t,a)}function u(e){return function(){var n=this,r=arguments;return new Promise(function(t,a){var u=e.apply(n,r);function o(e){i(u,t,a,o,s,"next",e)}function s(e){i(u,t,a,o,s,"throw",e)}o(void 0)})}}var o=[{name:"image/x-icon",mask:[255,255,255,255],byte:[0,0,1,0]},{name:"image/x-icon",mask:[255,255,255,255],byte:[0,0,2,0]},{name:"image/bmp",mask:[255,255],byte:[66,77]},{name:"image/gif",mask:[255,255,255,255,255,255],byte:[71,73,70,56,55,97]},{name:"image/gif",mask:[255,255,255,255,255,255],byte:[71,73,70,56,57,97]},{name:"image/webp",mask:[255,255,255,255,0,0,0,0,255,255,255,255,255,255],byte:[82,73,70,70,0,0,0,0,87,69,66,80,86,80]},{name:"image/png",mask:[255,255,255,255,255,255,255,255],byte:[137,80,78,71,13,10,26,10]},{name:"image/jpeg",mask:[255,255,255],byte:[255,216,255]}];function s(e){return!e||"{}"===JSON.stringify(e)}function c(){return Math.random().toString(36).substring(2)}function f(e){return p.apply(this,arguments)}function p(){return p=u(a.a.mark(function e(n){var r,t,i;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(r=n.file,t=n.fileUrl,i=n.fileType,r&&r instanceof File){e.next=4;break}return console.error("isAnimated param check fail: param expected to be File object"),e.abrupt("return",!1);case 4:if("image/webp"===i||"image/gif"===i){e.next=6;break}return e.abrupt("return",!1);case 6:if("image/webp"!==i){e.next=8;break}return e.abrupt("return",new Promise(function(e){var n=new XMLHttpRequest;n.open("GET",t,!0),n.addEventListener("load",function(){e(-1!==n.response.indexOf("ANMF"))}),n.send()}));case 8:if("image/gif"!==i){e.next=10;break}return e.abrupt("return",new Promise(function(e){var n=new XMLHttpRequest;n.open("GET",t,!0),n.responseType="arraybuffer",n.addEventListener("load",function(){var r=new Uint8Array(n.response);if(71===r[0]&&73===r[1]&&70===r[2]&&56===r[3]){for(var t=0,a=0,i=r.length-9;a<i&&t<2;++a)0!==r[a]||33!==r[a+1]||249!==r[a+2]||4!==r[a+3]||0!==r[a+8]||44!==r[a+9]&&33!==r[a+9]||t++;e(t>1)}else e(!1)}),n.send()}));case 10:case"end":return e.stop()}},e)})),p.apply(this,arguments)}function m(e){return d.apply(this,arguments)}function d(){return d=u(a.a.mark(function e(n){return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(n instanceof File){e.next=2;break}return e.abrupt("return","unknown");case 2:return e.abrupt("return",new Promise(function(e){var r=new FileReader;r.onloadend=function(n){var r=new Uint8Array(n.target.result).slice(0,20),t="unknown",a=o.findIndex(function(e){return e.mask.every(function(n,t){return 0===(n&(r[t]^e.byte[t]))})});a>=0&&(t=o[a].name),e(t)},r.readAsArrayBuffer(n)}));case 3:case"end":return e.stop()}},e)})),d.apply(this,arguments)}}}]);