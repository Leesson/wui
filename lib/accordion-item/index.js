!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var o in n)("object"==typeof exports?exports:e)[o]=n[o]}}("undefined"!=typeof self?self:this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=64)}({0:function(e,t){e.exports=function(e,t,n,o,i,r){var s,c=e=e||{},u=typeof e.default;"object"!==u&&"function"!==u||(s=e,c=e.default);var f="function"==typeof c?c.options:c;t&&(f.render=t.render,f.staticRenderFns=t.staticRenderFns,f._compiled=!0),n&&(f.functional=!0),i&&(f._scopeId=i);var a;if(r?(a=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},f._ssrRegister=a):o&&(a=o),a){var l=f.functional,d=l?f.render:f.beforeCreate;l?(f._injectStyles=a,f.render=function(e,t){return a.call(t),d(e,t)}):f.beforeCreate=d?[].concat(d,a):[a]}return{esModule:s,exports:c,options:f}}},64:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AccordionItem=void 0;var o=n(65),i=function(e){return e&&e.__esModule?e:{default:e}}(o);t.AccordionItem=i.default},65:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(8),i=n.n(o);for(var r in o)"default"!==r&&function(e){n.d(t,e,function(){return o[e]})}(r);var s=n(66),c=n(0),u=c(i.a,s.a,!1,null,null,null);u.options.__file="packages/accordion-item/src/AccordionItem.vue",t.default=u.exports},66:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"w-accordion-title",on:{click:e.toggle}},[e.$slots.title?n("span",[e._t("title")],2):n("span",[e._v(e._s(e.title))]),e._v(" "),n("i",{class:e.show?"accordion-rotated":""})]),e._v(" "),n("div",{staticClass:"w-accordion-content",style:e.styleHeight},[n("div",{ref:"content"},[e._t("default")],2)])])},i=[];o._withStripped=!0;var r={render:o,staticRenderFns:i};t.a=r},8:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"w-accordion-item",data:function(){return{show:this.open,height:0,styleHeight:{height:0}}},props:{title:String,open:{type:Boolean,default:!1}},watch:{open:function(e){e?this.$parent.open(this._uid):this.closeItem()}},methods:{toggle:function(){this.$parent.open(this._uid)},openItem:function(){var e=this;this.$parent.opening=!0,this.styleHeight={height:this.$refs.content.offsetHeight+"px"},setTimeout(function(){e.styleHeight={},e.$parent.opening=!1},200),this.show=!0},closeItem:function(){var e=this;void 0===this.styleHeight.height?(this.styleHeight={height:this.$refs.content.offsetHeight+"px"},setTimeout(function(){e.styleHeight={height:0}},50)):this.styleHeight={height:0},this.show=!1}},mounted:function(){var e=this;this.$nextTick(function(){e.open&&e.openItem()})}}}})});