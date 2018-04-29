/*!
 * vue-material v1.0.0-beta-8
 * Made with <3 by marcosmoura 2018
 * Released under the MIT License.
 */
!(function(e,t){var n,r;if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("vue"));else if("function"==typeof define&&define.amd)define(["vue"],t);else{n=t("object"==typeof exports?require("vue"):e.Vue);for(r in n)("object"==typeof exports?exports:e)[r]=n[r]}})("undefined"!=typeof self?self:this,(function(e){return (function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=509)})({0:function(e,t){e.exports=function(e,t,n,r,o,i){var a,l,s,u,d,c=e=e||{},f=typeof e.default;return"object"!==f&&"function"!==f||(a=e,c=e.default),l="function"==typeof c?c.options:c,t&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns,l._compiled=!0),n&&(l.functional=!0),o&&(l._scopeId=o),i?(s=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},l._ssrRegister=s):r&&(s=r),s&&(u=l.functional,d=u?l.render:l.beforeCreate,u?(l._injectStyles=s,l.render=function(e,t){return s.call(t),d(e,t)}):l.beforeCreate=d?[].concat(d,s):[s]),{esModule:a,exports:c,options:l}}},1:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o,i,a,l;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t={props:{mdTheme:null},computed:{$mdActiveTheme:function(){var e=i.default.enabled,t=i.default.getThemeName,n=i.default.getAncestorTheme;return e&&!1!==this.mdTheme?t(this.mdTheme||n(this)):null}}};return(0,l.default)(t,e)},o=n(4),i=r(o),a=n(6),l=r(a)},106:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){return e&&p.includes(e.tag)}function i(e,t,n,r){var i=[];return e&&e.forEach((function(e){var a=e.data,l=e.componentOptions;(a&&p.includes(a.slot)||o(l))&&(e.data.slot=a.slot||l.tag,e.data.provide=r.Ctor.options.provide,e.context=t,e.functionalContext=n,i.push(e))})),i}function a(e){var t=e.filter((function(e){return"md-app-drawer"===e.componentOptions.tag}));return t.length?t:[]}function l(e){var t=e&&e["md-permanent"];return t&&("clipped"===t||"card"===t)}var s,u,d,c,f,p;Object.defineProperty(t,"__esModule",{value:!0}),s=Object.assign||function(e){var t,n,r;for(t=1;t<arguments.length;t++){n=arguments[t];for(r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=n(223),d=r(u),c=n(226),f=r(c),p=["md-app-toolbar","md-app-drawer","md-app-content"],t.default={name:"MdApp",functional:!0,render:function(e,t){var n,r=t.children,o=t.props,u=t.data,c=d.default,p=e(c),h=p.context,m=p.functionalContext,v=p.componentOptions,b=i(r,h,m,v);return a(b).forEach((function(e){e&&l(e.data.attrs)&&(c=f.default)})),n={},u.staticClass&&u.staticClass.split(/\s+/).forEach((function(e){0!==e.length&&(n[e]=!0)})),e(c,{attrs:o,class:s({},n,u.class),style:s({},u.staticStyle,u.style)},b)}}},107:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o,i,a,l;Object.defineProperty(t,"__esModule",{value:!0}),o=n(1),i=r(o),a=n(108),l=r(a),t.default=new i.default({name:"MdAppInternalSideDrawer",mixins:[l.default]})},108:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o,i,a,l,s,u;Object.defineProperty(t,"__esModule",{value:!0}),o=Object.assign||function(e){var t,n,r;for(t=1;t<arguments.length;t++){n=arguments[t];for(r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=n(9),a=r(i),l=n(8),s=r(l),u=["fixed","fixed-last","reveal","overlap","flexible"],t.default={props:{mdMode:o({type:String},(0,s.default)("md-mode",u)),mdWaterfall:Boolean,mdScrollbar:{type:Boolean,default:!0}},data:function(){return{revealTimer:null,revealLastPos:0,manualTick:!1,MdApp:{options:{mode:null,waterfall:!1,flexible:!1},toolbar:{element:null,titleElement:null,height:"0px",initialHeight:0,top:0,titleSize:20,hasElevation:!0,revealActive:!1,fixedLastActive:!1,fixedLastHeight:!1,overlapOff:!1},drawer:{initialWidth:0,active:!1,mode:"temporary",width:0}}}},provide:function(){return{MdApp:this.MdApp}},computed:{isFixed:function(){return this.mdMode&&"fixed"!==this.mdMode},isMini:function(){return"persistent"===this.MdApp.drawer.mode&&"mini"===this.MdApp.drawer.submode},contentStyles:function(){var e=this.MdApp.drawer;if(e.active&&"persistent"===e.mode&&"full"===e.submode)return{"padding-left":e.width}},containerStyles:function(){var e={};return this.isFixed&&(e["margin-top"]=this.MdApp.toolbar.initialHeight+"px"),this.isMini&&(e["padding-left"]=this.MdApp.drawer.active?0:this.MdApp.drawer.initialWidth+"px"),e},scrollerClasses:function(){if(this.mdScrollbar)return"md-scrollbar"},appClasses:function(){return{"md-waterfall":this.mdWaterfall,"md-flexible":"flexible"===this.mdMode,"md-fixed":"fixed"===this.mdMode,"md-fixed-last":"fixed-last"===this.mdMode,"md-reveal":"reveal"===this.mdMode,"md-overlap":"overlap"===this.mdMode,"md-drawer-active":this.MdApp.drawer.active}}},watch:{mdMode:function(e){this.MdApp.options.mode=e},mdWaterfall:function(e){this.MdApp.options.waterfall=e,this.setToolbarElevation()}},methods:{setToolbarElevation:function(){this.MdApp.toolbar.hasElevation=!this.mdWaterfall},setToolbarTimer:function(e){var t=this;window.clearTimeout(this.revealTimer),this.revealTimer=window.setTimeout((function(){t.revealLastPos=e}),100)},setToolbarMarginAndHeight:function(e,t){this.MdApp.toolbar.top=e,this.MdApp.toolbar.height=t},getToolbarConstrants:function(e){var t=this.MdApp.toolbar.element.offsetHeight,n=10,r=t+n,o=e.target.scrollTop;return this.MdApp.toolbar.initialHeight||(this.MdApp.toolbar.initialHeight=t),{toolbarHeight:t,safeAmount:n,threshold:r,scrollTop:o,initialHeight:this.MdApp.toolbar.initialHeight}},handleWaterfallScroll:function(e){var t=this.getToolbarConstrants(e),n=t.threshold,r=t.scrollTop,o=4;"reveal"===this.mdMode&&(o=n),this.MdApp.toolbar.hasElevation=r>=o},handleFlexibleMode:function(e){var t,n,r,o,i,a,l,s=this.getToolbarConstrants(e),u=s.scrollTop,d=s.initialHeight,c=this.MdApp.toolbar.element,f=c.querySelector(".md-toolbar-row:first-child"),p=f.offsetHeight,h=d-u,m=u<d-p;p&&(c.style.height=m?h+"px":p+"px"),t=this.MdApp.toolbar.titleElement,t&&(n=20,r=this.MdApp.toolbar.titleSize,m?(o=Math.max(0,1-(u-r)/(h+r+1e-6))*(r-n)+n,t.style.fontSize=o+"px"):t.style.fontSize="20px"),i=this.getToolbarConstrants(e),a=i.threshold,l=i.toolbarHeight,this.setToolbarMarginAndHeight(u-a,l)},handleRevealMode:function(e){var t=this.getToolbarConstrants(e),n=t.toolbarHeight,r=t.safeAmount,o=t.threshold,i=t.scrollTop;this.setToolbarTimer(i),this.setToolbarMarginAndHeight(i-o,n),this.MdApp.toolbar.revealActive=!(i>=o)||this.revealLastPos>i+r},handleFixedLastMode:function(e){var t=this.getToolbarConstrants(e),n=t.scrollTop,r=t.toolbarHeight,o=t.safeAmount,i=this.MdApp.toolbar.element,a=i.querySelector(".md-toolbar-row:first-child"),l=a.offsetHeight;this.setToolbarTimer(n),this.setToolbarMarginAndHeight(n-l,r),this.MdApp.toolbar.fixedLastHeight=l,this.MdApp.toolbar.fixedLastActive=!(n>=l)||this.revealLastPos>n+o},handleOverlapMode:function(e){var t=this.getToolbarConstrants(e),n=t.toolbarHeight,r=t.scrollTop,o=t.initialHeight,i=this.MdApp.toolbar.element,a=i.querySelector(".md-toolbar-row:first-child"),l=a.offsetHeight,s=o-r-100*r/(o-l-l/1.5);l&&(r<o-l&&s>=l?(this.MdApp.toolbar.overlapOff=!1,i.style.height=s+"px"):(this.MdApp.toolbar.overlapOff=!0,i.style.height=l+"px")),this.setToolbarMarginAndHeight(r,n)},handleModeScroll:function(e){"reveal"===this.mdMode?this.handleRevealMode(e):"fixed-last"===this.mdMode?this.handleFixedLastMode(e):"overlap"===this.mdMode?this.handleOverlapMode(e):"flexible"===this.mdMode&&this.handleFlexibleMode(e)},handleScroll:function(e){var t=this;this.MdApp.toolbar.element&&(0,a.default)((function(){t.mdWaterfall&&t.handleWaterfallScroll(e),t.mdMode&&t.handleModeScroll(e)}))}},created:function(){this.MdApp.options.mode=this.mdMode,this.MdApp.options.waterfall=this.mdWaterfall,this.setToolbarElevation()},mounted:function(){var e={target:{scrollTop:0}};"reveal"===this.mdMode&&(this.MdApp.toolbar.revealActive=!0,this.handleRevealMode(e)),"flexible"===this.mdMode&&(this.MdApp.toolbar.revealActive=!0,this.handleFlexibleMode(e)),"fixed-last"===this.mdMode&&(this.MdApp.toolbar.fixedLastActive=!0,this.handleFixedLastMode(e)),"overlap"===this.mdMode&&this.handleOverlapMode(e)}}},109:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o,i,a,l;Object.defineProperty(t,"__esModule",{value:!0}),o=n(1),i=r(o),a=n(108),l=r(a),t.default=new i.default({name:"MdAppInternalDrawer",mixins:[l.default]})},11:function(e,t){var n;n=(function(){return this})();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},110:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"MdAppToolbar",inject:["MdApp"],computed:{toolbarClasses:function(){return{"md-no-elevation":!this.MdApp.toolbar.hasElevation,"md-reveal-active":this.MdApp.toolbar.revealActive,"md-fixed-last-active":this.MdApp.toolbar.fixedLastActive,"md-overlap-off":this.MdApp.toolbar.overlapOff}},toolbarStyles:function(){var e={top:this.MdApp.toolbar.top+"px"};return this.MdApp.toolbar.fixedLastActive&&(e.transform="translate3D(0, "+this.MdApp.toolbar.fixedLastHeight+"px, 0)"),e}},mounted:function(){var e=this.$el.querySelector(".md-title, .md-display-1, .md-display-2");this.MdApp.toolbar.element=this.$el,this.MdApp.toolbar.titleElement=e,e&&(this.MdApp.toolbar.titleSize=parseInt(window.getComputedStyle(e).fontSize,10))}}},111:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"MdAppContent",inject:["MdApp"],computed:{showCard:function(){return this.MdApp.options&&"overlap"===this.MdApp.options.mode}}}},112:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"MdAppDrawer",inject:["MdApp"],data:function(){return{drawerElement:{mdActive:null,mode:null,submode:null}}},computed:{visible:function(){return this.drawerElement.mdActive},mode:function(){return this.drawerElement.mode},submode:function(){return this.drawerElement.submode}},watch:{visible:function(e){this.MdApp.drawer.width=this.getDrawerWidth(),this.MdApp.drawer.active=e},mode:function(e){this.MdApp.drawer.mode=e},submode:function(e){this.MdApp.drawer.submode=e}},methods:{getDrawerWidth:function(){return this.$el?window.getComputedStyle(this.$el).width:0}},mounted:function(){var e=this;this.$nextTick().then((function(){e.drawerElement=e.$children[0],e.MdApp.drawer.width=e.getDrawerWidth(),e.MdApp.drawer.active=e.visible,e.MdApp.drawer.mode=e.mode,e.MdApp.drawer.submode=e.submode,e.MdApp.drawer.initialWidth=e.$el.offsetWidth}))}}},13:function(e,t,n){(function(t){(function(){var n,r,o,i,a,l;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:void 0!==t&&null!==t&&t.hrtime?(e.exports=function(){return(n()-a)/1e6},r=t.hrtime,n=function(){var e;return e=r(),1e9*e[0]+e[1]},i=n(),l=1e9*t.uptime(),a=i-l):Date.now?(e.exports=function(){return Date.now()-o},o=Date.now()):(e.exports=function(){return(new Date).getTime()-o},o=(new Date).getTime())}).call(this)}).call(t,n(14))},14:function(e,t){function n(){throw Error("setTimeout has not been defined")}function r(){throw Error("clearTimeout has not been defined")}function o(e){if(d===setTimeout)return setTimeout(e,0);if((d===n||!d)&&setTimeout)return d=setTimeout,setTimeout(e,0);try{return d(e,0)}catch(t){try{return d.call(null,e,0)}catch(t){return d.call(this,e,0)}}}function i(e){if(c===clearTimeout)return clearTimeout(e);if((c===r||!c)&&clearTimeout)return c=clearTimeout,clearTimeout(e);try{return c(e)}catch(t){try{return c.call(null,e)}catch(t){return c.call(this,e)}}}function a(){p&&h&&(p=!1,h.length?f=h.concat(f):m=-1,f.length&&l())}function l(){var e,t;if(!p){for(e=o(a),p=!0,t=f.length;t;){for(h=f,f=[];++m<t;)h&&h[m].run();m=-1,t=f.length}h=null,p=!1,i(e)}}function s(e,t){this.fun=e,this.array=t}function u(){}var d,c,f,p,h,m,v=e.exports={};!(function(){try{d="function"==typeof setTimeout?setTimeout:n}catch(e){d=n}try{c="function"==typeof clearTimeout?clearTimeout:r}catch(e){c=r}})(),f=[],p=!1,m=-1,v.nextTick=function(e){var t,n=Array(arguments.length-1);if(arguments.length>1)for(t=1;t<arguments.length;t++)n[t-1]=arguments[t];f.push(new s(e,n)),1!==f.length||p||o(l)},s.prototype.run=function(){this.fun.apply(null,this.array)},v.title="browser",v.browser=!0,v.env={},v.argv=[],v.version="",v.versions={},v.on=u,v.addListener=u,v.once=u,v.off=u,v.removeListener=u,v.removeAllListeners=u,v.emit=u,v.prependListener=u,v.prependOnceListener=u,v.listeners=function(e){return[]},v.binding=function(e){throw Error("process.binding is not supported")},v.cwd=function(){return"/"},v.chdir=function(e){throw Error("process.chdir is not supported")},v.umask=function(){return 0}},2:function(t,n){t.exports=e},220:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o,i,a,l,s,u,d,c,f,p;Object.defineProperty(t,"__esModule",{value:!0}),o=n(3),i=r(o),a=n(221),l=r(a),s=n(229),u=r(s),d=n(232),c=r(d),f=n(235),p=r(f),t.default=function(e){(0,i.default)(e),e.component(l.default.name,l.default),e.component(u.default.name,u.default),e.component(c.default.name,c.default),e.component(p.default.name,p.default)}},221:function(e,t,n){"use strict";function r(e){n(222)}var o,i,a,l,s,u,d,c,f,p;Object.defineProperty(t,"__esModule",{value:!0}),o=n(106),i=n.n(o);for(a in o)"default"!==a&&(function(e){n.d(t,e,(function(){return o[e]}))})(a);l=n(0),s=null,u=!1,d=r,c=null,f=null,p=l(i.a,s,u,d,c,f),t.default=p.exports},222:function(e,t){},223:function(e,t,n){"use strict";function r(e){n(224)}var o,i,a,l,s,u,d,c,f,p;Object.defineProperty(t,"__esModule",{value:!0}),o=n(107),i=n.n(o);for(a in o)"default"!==a&&(function(e){n.d(t,e,(function(){return o[e]}))})(a);l=n(225),s=n(0),u=!1,d=r,c=null,f=null,p=s(i.a,l.a,u,d,c,f),t.default=p.exports},224:function(e,t){},225:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"md-app md-app-side-drawer md-layout-row",class:[e.appClasses,e.$mdActiveTheme]},[e._t("md-app-drawer"),e._v(" "),n("main",{staticClass:"md-app-container md-flex md-layout-column",class:[e.$mdActiveTheme,e.scrollerClasses],style:e.contentStyles,on:{"&scroll":function(t){return e.handleScroll(t)}}},[e._t("md-app-toolbar"),e._v(" "),n("div",{staticClass:"md-app-scroller md-layout-column md-flex",class:[e.$mdActiveTheme,e.scrollerClasses],style:e.containerStyles,on:{"&scroll":function(t){return e.handleScroll(t)}}},[e._t("md-app-content")],2)],2)],2)},o=[],i={render:r,staticRenderFns:o};t.a=i},226:function(e,t,n){"use strict";function r(e){n(227)}var o,i,a,l,s,u,d,c,f,p;Object.defineProperty(t,"__esModule",{value:!0}),o=n(109),i=n.n(o);for(a in o)"default"!==a&&(function(e){n.d(t,e,(function(){return o[e]}))})(a);l=n(228),s=n(0),u=!1,d=r,c=null,f=null,p=s(i.a,l.a,u,d,c,f),t.default=p.exports},227:function(e,t){},228:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"md-app md-app-internal-drawer md-layout-column",class:[e.appClasses,e.$mdActiveTheme]},[e._t("md-app-toolbar"),e._v(" "),n("main",{staticClass:"md-app-container md-flex md-layout-row",class:[e.$mdActiveTheme,e.scrollerClasses],style:[e.containerStyles,e.contentStyles]},[e._t("md-app-drawer"),e._v(" "),n("div",{staticClass:"md-app-scroller md-layout-column md-flex",class:[e.$mdActiveTheme,e.scrollerClasses]},[e._t("md-app-content")],2)],2)],2)},o=[],i={render:r,staticRenderFns:o};t.a=i},229:function(e,t,n){"use strict";function r(e){n(230)}var o,i,a,l,s,u,d,c,f,p;Object.defineProperty(t,"__esModule",{value:!0}),o=n(110),i=n.n(o);for(a in o)"default"!==a&&(function(e){n.d(t,e,(function(){return o[e]}))})(a);l=n(231),s=n(0),u=!1,d=r,c=null,f=null,p=s(i.a,l.a,u,d,c,f),t.default=p.exports},230:function(e,t){},231:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement;return(e._self._c||t)("md-toolbar",e._g(e._b({staticClass:"md-app-toolbar",class:e.toolbarClasses,style:e.toolbarStyles},"md-toolbar",e.$attrs,!1),e.$listeners),[e._t("default")],2)},o=[],i={render:r,staticRenderFns:o};t.a=i},232:function(e,t,n){"use strict";function r(e){n(233)}var o,i,a,l,s,u,d,c,f,p;Object.defineProperty(t,"__esModule",{value:!0}),o=n(111),i=n.n(o);for(a in o)"default"!==a&&(function(e){n.d(t,e,(function(){return o[e]}))})(a);l=n(234),s=n(0),u=!1,d=r,c=null,f=null,p=s(i.a,l.a,u,d,c,f),t.default=p.exports},233:function(e,t){},234:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.showCard?n("md-card",e._g(e._b({staticClass:"md-app-content md-flex"},"md-card",e.$attrs,!1),e.$listeners),[e._t("default")],2):n("md-content",e._g(e._b({staticClass:"md-app-content md-flex"},"md-content",e.$attrs,!1),e.$listeners),[e._t("default")],2)},o=[],i={render:r,staticRenderFns:o};t.a=i},235:function(e,t,n){"use strict";var r,o,i,a,l,s,u,d,c,f;Object.defineProperty(t,"__esModule",{value:!0}),r=n(112),o=n.n(r);for(i in r)"default"!==i&&(function(e){n.d(t,e,(function(){return r[e]}))})(i);a=n(236),l=n(0),s=!1,u=null,d=null,c=null,f=l(o.a,a.a,s,u,d,c),t.default=f.exports},236:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement;return(e._self._c||t)("md-drawer",e._g(e._b({staticClass:"md-app-drawer"},"md-drawer",e.$attrs,!1),e.$listeners),[e._t("default")],2)},o=[],i={render:r,staticRenderFns:o};t.a=i},3:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o,i,a,l,s;Object.defineProperty(t,"__esModule",{value:!0}),n(7),o=n(5),i=r(o),a=n(4),l=r(a),s=function(){var e=new i.default({ripple:!0,theming:{},locale:{startYear:1900,endYear:2099,dateFormat:"YYYY-MM-DD",days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],shorterDays:["S","M","T","W","T","F","S"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"],shorterMonths:["J","F","M","A","M","Ju","Ju","A","Se","O","N","D"],firstDayOfAWeek:0}});return Object.defineProperties(e.theming,{metaColors:{get:function(){return l.default.metaColors},set:function(e){l.default.metaColors=e}},theme:{get:function(){return l.default.theme},set:function(e){l.default.theme=e}},enabled:{get:function(){return l.default.enabled},set:function(e){l.default.enabled=e}}}),e},t.default=function(e){e.material||(e.material=s(),e.prototype.$material=e.material)}},4:function(e,t,n){"use strict";var r,o,i,a,l;Object.defineProperty(t,"__esModule",{value:!0}),r=n(2),o=(function(e){return e&&e.__esModule?e:{default:e}})(r),i=null,a=null,l=null,t.default=new o.default({data:function(){return{prefix:"md-theme-",theme:"default",enabled:!0,metaColors:!1}},computed:{themeTarget:function(){return!this.$isServer&&document.documentElement},fullThemeName:function(){return this.getThemeName()}},watch:{enabled:{immediate:!0,handler:function(){var e=this.fullThemeName,t=this.themeTarget,n=this.enabled;t&&(n?(t.classList.add(e),this.metaColors&&this.setHtmlMetaColors(e)):(t.classList.remove(e),this.metaColors&&this.setHtmlMetaColors()))}},theme:function(e,t){var n=this.getThemeName,r=this.themeTarget;e=n(e),r.classList.remove(n(t)),r.classList.add(e),this.metaColors&&this.setHtmlMetaColors(e)},metaColors:function(e){e?this.setHtmlMetaColors(this.fullThemeName):this.setHtmlMetaColors()}},methods:{getAncestorTheme:function(e){var t,n=this;return e?(t=e.mdTheme,(function e(r){if(r){var o=r.mdTheme,i=r.$parent;return o&&o!==t?o:e(i)}return n.theme})(e.$parent)):null},getThemeName:function(e){var t=e||this.theme;return this.prefix+t},setMicrosoftColors:function(e){i&&i.setAttribute("content",e)},setThemeColors:function(e){a&&a.setAttribute("content",e)},setMaskColors:function(e){l&&l.setAttribute("color",e)},setHtmlMetaColors:function(e){var t,n="#fff";e&&(t=window.getComputedStyle(document.documentElement),n=t.getPropertyValue("--"+e+"-primary")),n&&(this.setMicrosoftColors(n),this.setThemeColors(n),this.setMaskColors(n))}},mounted:function(){var e=this;i=document.querySelector('[name="msapplication-TileColor"]'),a=document.querySelector('[name="theme-color"]'),l=document.querySelector('[rel="mask-icon"]'),this.enabled&&this.metaColors&&window.addEventListener("load",(function(){e.setHtmlMetaColors(e.fullThemeName)}))}})},5:function(e,t,n){"use strict";var r,o;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t={};return o.default.util.defineReactive(t,"reactive",e),t.reactive},r=n(2),o=(function(e){return e&&e.__esModule?e:{default:e}})(r)},509:function(e,t,n){e.exports=n(220)},6:function(e,t,n){"use strict";function r(e){return!!e&&"object"==typeof e}function o(e){var t=Object.prototype.toString.call(e);return"[object RegExp]"===t||"[object Date]"===t||i(e)}function i(e){return e.$$typeof===p}function a(e){return Array.isArray(e)?[]:{}}function l(e,t){return!1!==t.clone&&t.isMergeableObject(e)?d(a(e),e,t):e}function s(e,t,n){return e.concat(t).map((function(e){return l(e,n)}))}function u(e,t,n){var r={};return n.isMergeableObject(e)&&Object.keys(e).forEach((function(t){r[t]=l(e[t],n)})),Object.keys(t).forEach((function(o){n.isMergeableObject(t[o])&&e[o]?r[o]=d(e[o],t[o],n):r[o]=l(t[o],n)})),r}function d(e,t,n){var r,o,i;return n=n||{},n.arrayMerge=n.arrayMerge||s,n.isMergeableObject=n.isMergeableObject||c,r=Array.isArray(t),o=Array.isArray(e),i=r===o,i?r?n.arrayMerge(e,t,n):u(e,t,n):l(t,n)}var c,f,p,h;Object.defineProperty(t,"__esModule",{value:!0}),c=function(e){return r(e)&&!o(e)},f="function"==typeof Symbol&&Symbol.for,p=f?Symbol.for("react.element"):60103,d.all=function(e,t){if(!Array.isArray(e))throw Error("first argument should be an array");return e.reduce((function(e,n){return d(e,n,t)}),{})},h=d,t.default=h},7:function(e,t){},8:function(e,t,n){"use strict";var r,o;Object.defineProperty(t,"__esModule",{value:!0}),r=n(2),o=(function(e){return e&&e.__esModule?e:{default:e}})(r),t.default=function(e,t){return{validator:function(n){return!!t.includes(n)||(o.default.util.warn("The "+e+" prop is invalid. Given value: "+n+". Available options: "+t.join(", ")+".",void 0),!1)}}}},9:function(e,t,n){(function(t){var r,o,i,a,l,s=n(13),u="undefined"==typeof window?t:window,d=["moz","webkit"],c="AnimationFrame",f=u["request"+c],p=u["cancel"+c]||u["cancelRequest"+c];for(r=0;!f&&r<d.length;r++)f=u[d[r]+"Request"+c],p=u[d[r]+"Cancel"+c]||u[d[r]+"CancelRequest"+c];f&&p||(o=0,i=0,a=[],l=1e3/60,f=function(e){if(0===a.length){var t=s(),n=Math.max(0,l-(t-o));o=n+t,setTimeout((function(){var e,t=a.slice(0);for(a.length=0,e=0;e<t.length;e++)if(!t[e].cancelled)try{t[e].callback(o)}catch(e){setTimeout((function(){throw e}),0)}}),Math.round(n))}return a.push({handle:++i,callback:e,cancelled:!1}),i},p=function(e){for(var t=0;t<a.length;t++)a[t].handle===e&&(a[t].cancelled=!0)}),e.exports=function(e){return f.call(u,e)},e.exports.cancel=function(){p.apply(u,arguments)},e.exports.polyfill=function(e){e||(e=u),e.requestAnimationFrame=f,e.cancelAnimationFrame=p}}).call(t,n(11))}})}));