(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d5c52"],{7069:function(t,e,n){"use strict";n.r(e);var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i={version:"1.1.0",storage:window.localStorage,session:{storage:window.sessionStorage}},s={set:function(t,e){if(!this.disabled)return void 0===e?this.remove(t):(this.storage.setItem(t,o(e)),e)},get:function(t,e){if(this.disabled)return e;var n=a(this.storage.getItem(t));return void 0===n?e:n},has:function(t){return void 0!==this.get(t)},remove:function(t){this.disabled||this.storage.removeItem(t)},clear:function(){this.disabled||this.storage.clear()},getAll:function(){if(this.disabled)return null;var t={};return this.forEach(function(e,n){t[e]=n}),t},forEach:function(t){if(!this.disabled)for(var e=0;e<this.storage.length;e++){var n=this.storage.key(e);t(n,this.get(n))}}};function o(t){return JSON.stringify(t)}function a(t){if("string"===typeof t)try{return JSON.parse(t)}catch(e){return t||void 0}}r(i,s),r(i.session,s);try{var u="__storejs__";i.set(u,u),i.get(u)!==u&&(i.disabled=!0),i.remove(u)}catch(l){i.disabled=!0}var c=i;n.d(e,"setLogined",function(){return f}),n.d(e,"loadLogined",function(){return g}),n.d(e,"cleanLogined",function(){return h});var d="__login__";function f(t){return c.session.set(d,t),t}function g(){return c.session.get(d,"")}function h(){c.session.remove(d)}}}]);