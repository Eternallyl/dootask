import{l as n,a as o,m as d,s as l,n as g}from"./app.5e0461e9.js";import{U as m}from"./UpdateLog.7e147135.js";var c=function(){var t=this,i=t.$createElement,e=t._self._c||i;return t.needStartHome?e("div",{staticClass:"page-index"},[e("PageTitle",{attrs:{title:t.appTitle}}),e("div",{staticClass:"page-warp"},[e("div",{staticClass:"page-header"},[e("div",{staticClass:"header-nav"},[t._m(0),t.windowWidth>780?e("div",{staticClass:"header-nav-box header-nav-boxs"},[t.showItem.pro?e("Button",{staticClass:"header-right-pro no-dark-content",attrs:{size:"small"},on:{click:t.onPro}},[t._v(t._s(t.$L("Pro\u7248")))]):t._e(),t.windowWidth>=820?[t.showItem.github?e("a",{staticClass:"header-right-github",attrs:{href:t.showItem.github,target:"_blank"}},[e("Icon",{attrs:{type:"logo-github"}})],1):t._e(),t.showItem.updateLog?e("div",{staticClass:"header-right-uplog",on:{click:function(s){t.uplogShow=!0}}},[t._v(t._s(t.$L("\u66F4\u65B0\u65E5\u5FD7")))]):t._e()]:t._e(),e("div",{staticClass:"header-right-1"},[e("Dropdown",{attrs:{trigger:"click"},on:{"on-click":t.onLanguage}},[e("a",{staticClass:"header-right-1-dropdown",attrs:{href:"javascript:void(0)"}},[t._v(" "+t._s(t.currentLanguage)+" "),e("Icon",{attrs:{type:"ios-arrow-down"}})],1),e("DropdownMenu",{attrs:{slot:"list"},slot:"list"},t._l(t.languageList,function(s,a){return e("DropdownItem",{key:a,attrs:{name:a,selected:t.languageType===a}},[t._v(t._s(s))])}),1)],1)],1),t.windowWidth>=980?e("div",{staticClass:"header-right-2"},[e("Dropdown",{attrs:{trigger:"click"},on:{"on-click":t.setTheme}},[e("a",{staticClass:"header-right-2-dropdown",attrs:{href:"javascript:void(0)"}},[t._v(" "+t._s(t.$L("\u4E3B\u9898\u76AE\u80A4"))+" "),e("Icon",{attrs:{type:"ios-arrow-down"}})],1),e("DropdownMenu",{attrs:{slot:"list"},slot:"list"},t._l(t.themeList,function(s,a){return e("DropdownItem",{key:a,attrs:{name:s.value,selected:t.themeMode===s.value}},[t._v(t._s(t.$L(s.name)))])}),1)],1)],1):t._e(),t.userId>0?e("div",{staticClass:"header-right-5 no-dark-content",on:{click:t.login}},[e("UserAvatar",{attrs:{userid:t.userId,size:38}})],1):[e("div",{staticClass:"header-right-3",on:{click:t.register}},[t._v(t._s(t.$L("\u6CE8\u518C\u5E10\u53F7")))]),e("div",{staticClass:"header-right-4 no-dark-content",on:{click:t.login}},[t._v(t._s(t.$L("\u767B\u5F55")))])]],2):e("div",{staticClass:"header-nav-box header-nav-boxs"},[e("Dropdown",{attrs:{trigger:"click"}},[e("a",{attrs:{href:"javascript:void(0)"}},[e("Icon",{staticClass:"header-nav-more no-dark-content",attrs:{type:"md-menu"}})],1),e("DropdownMenu",{attrs:{slot:"list"},slot:"list"},[t.userId>0?e("DropdownItem",{nativeOn:{click:function(s){return t.login.apply(null,arguments)}}},[e("UserAvatar",{attrs:{userid:t.userId,"show-name":"","show-icon":!1}})],1):[e("DropdownItem",{nativeOn:{click:function(s){return t.login.apply(null,arguments)}}},[t._v(t._s(t.$L("\u767B\u5F55")))]),e("DropdownItem",{nativeOn:{click:function(s){return t.register.apply(null,arguments)}}},[t._v(t._s(t.$L("\u6CE8\u518C\u5E10\u53F7")))])],t.showItem.github?e("DropdownItem",{nativeOn:{click:function(s){return t.windowOpen(t.showItem.github)}}},[t._v("Github")]):t._e(),t.showItem.updateLog?e("DropdownItem",{nativeOn:{click:function(s){t.uplogShow=!0}}},[t._v(t._s(t.$L("\u66F4\u65B0\u65E5\u5FD7")))]):t._e(),e("Dropdown",{attrs:{placement:"right-start",transfer:""},on:{"on-click":t.onLanguage}},[e("DropdownItem",[e("div",{staticClass:"header-nav-dropdown-item"},[t._v(" "+t._s(t.currentLanguage)+" "),e("Icon",{attrs:{type:"ios-arrow-forward"}})],1)]),e("DropdownMenu",{attrs:{slot:"list"},slot:"list"},t._l(t.languageList,function(s,a){return e("DropdownItem",{key:a,attrs:{name:a,selected:t.languageType===a}},[t._v(t._s(s))])}),1)],1),e("Dropdown",{attrs:{trigger:"click",placement:"right-end",transfer:""},on:{"on-click":t.setTheme}},[e("DropdownItem",[e("div",{staticClass:"header-nav-dropdown-item"},[t._v(" "+t._s(t.$L("\u4E3B\u9898\u76AE\u80A4"))+" "),e("Icon",{attrs:{type:"ios-arrow-forward"}})],1)]),e("DropdownMenu",{attrs:{slot:"list"},slot:"list"},t._l(t.themeList,function(s,a){return e("DropdownItem",{key:a,attrs:{name:s.value,selected:t.themeMode===s.value}},[t._v(t._s(t.$L(s.name)))])}),1)],1)],2)],1)],1)]),e("div",{staticClass:"header-content"},[e("div",{staticClass:"header-title header-title-one"},[t._v(t._s(t.appTitle))]),e("div",{staticClass:"header-title"},[t._v(" "+t._s(t.$L("\u8F7B\u91CF\u7EA7\u4EFB\u52A1\u7BA1\u7406\u5DE5\u5177"))+" ")]),e("div",{staticClass:"header-tips"},[t._v(" "+t._s(t.$L(`${t.appTitle}\u662F\u4E00\u6B3E\u8F7B\u91CF\u7EA7\u7684\u5F00\u6E90\u5728\u7EBF\u9879\u76EE\u4EFB\u52A1\u7BA1\u7406\u5DE5\u5177\uFF0C\u63D0\u4F9B\u5404\u7C7B\u6587\u6863\u534F\u4F5C\u5DE5\u5177\u3001\u5728\u7EBF\u601D\u7EF4\u5BFC\u56FE\u3001\u5728\u7EBF\u6D41\u7A0B\u56FE\u3001\u9879\u76EE\u7BA1\u7406\u3001\u4EFB\u52A1\u5206\u53D1\u3001\u5373\u65F6IM\uFF0C\u6587\u4EF6\u7BA1\u7406\u7B49\u5DE5\u5177\u3002`))+" ")]),e("div",{staticClass:"login-buttom no-dark-content",on:{click:t.login}},[t._v(" "+t._s(t.$L("\u767B\u5F55"))+" ")])])]),e("div",{staticClass:"page-header-bottom"},[e("div",{staticClass:"page-header-bottoms"},[e("ImgView",{attrs:{src:t.themeIsDark?"images/index/dark/1.png":"images/index/light/1.png"}})],1)]),e("div",{staticClass:"page-main"},[e("Row",{class:t.windowWidth>1200?"page-main-row":"page-main-rows"},[e("Col",{class:t.windowWidth>1200?"page-main-img":"page-main-imgs",attrs:{xs:24,sm:24,xl:12}},[e("ImgView",{attrs:{src:t.themeIsDark?"images/index/dark/2.png":"images/index/light/2.png"}})],1),t.windowWidth>1200?e("Col",{staticClass:"page-main-text",attrs:{xs:24,sm:24,xl:12}},[e("ImgView",{attrs:{src:"images/index/square.png"}}),e("h3",[t._v(t._s(t.$L("\u9AD8\u6548\u4FBF\u6377\u7684\u56E2\u961F\u6C9F\u901A\u5DE5\u5177")))]),e("p",[t._v(t._s(t.$L("\u9488\u5BF9\u9879\u76EE\u548C\u4EFB\u52A1\u5EFA\u7ACB\u7FA4\u7EC4\uFF0C\u5DE5\u4F5C\u95EE\u9898\u53EF\u53CA\u65F6\u6C9F\u901A\uFF0C\u4FC3\u8FDB\u56E2\u961F\u5FEB\u901F\u534F\u4F5C\uFF0C\u63D0\u9AD8\u56E2\u961F\u5DE5\u4F5C\u6548\u7387\u3002")))])],1):e("Col",{staticClass:"page-main-text page-main-texts",attrs:{xs:24,sm:24,xl:12}},[e("h3",[e("ImgView",{attrs:{src:"images/index/square.png"}}),t._v(t._s(t.$L("\u9AD8\u6548\u4FBF\u6377\u7684\u56E2\u961F\u6C9F\u901A\u5DE5\u5177")))],1),e("p",[t._v(t._s(t.$L("\u9488\u5BF9\u9879\u76EE\u548C\u4EFB\u52A1\u5EFA\u7ACB\u7FA4\u7EC4\uFF0C\u5DE5\u4F5C\u95EE\u9898\u53EF\u53CA\u65F6\u6C9F\u901A\uFF0C\u4FC3\u8FDB\u56E2\u961F\u5FEB\u901F\u534F\u4F5C\uFF0C\u63D0\u9AD8\u56E2\u961F\u5DE5\u4F5C\u6548\u7387\u3002")))])])],1),e("Row",{class:t.windowWidth>1200?"page-main-row":"page-main-rows"},[t.windowWidth>1200?e("Col",{staticClass:"page-main-text",attrs:{xs:24,sm:24,xl:12}},[e("ImgView",{attrs:{src:"images/index/square.png"}}),e("h3",[t._v(t._s(t.$L("\u5F3A\u5927\u6613\u7528\u7684\u534F\u540C\u521B\u4F5C\u4E91\u6587\u6863")))]),e("p",[t._v(t._s(t.$L("\u6C47\u96C6\u6587\u6863\u3001\u7535\u5B50\u8868\u683C\u3001\u601D\u7EF4\u7B14\u8BB0\u7B49\u591A\u79CD\u5728\u7EBF\u5DE5\u5177\uFF0C\u6C47\u805A\u4F01\u4E1A\u77E5\u8BC6\u8D44\u6E90\u4E8E\u4E00\u5904\uFF0C\u652F\u6301\u591A\u4EBA\u5B9E\u65F6\u534F\u540C\u7F16\u8F91\uFF0C\u8BA9\u56E2\u961F\u534F\u4F5C\u66F4\u4FBF\u6377\u3002")))])],1):t._e(),e("Col",{class:t.windowWidth>1200?"page-main-img":"page-main-imgs",attrs:{xs:24,sm:24,xl:12}},[e("ImgView",{attrs:{src:t.themeIsDark?"images/index/dark/3.png":"images/index/light/3.png"}})],1),t.windowWidth<=1200?e("Col",{staticClass:"page-main-text page-main-texts",attrs:{xs:24,sm:24,xl:12}},[e("h3",[e("ImgView",{attrs:{src:"images/index/square.png"}}),t._v(t._s(t.$L("\u5F3A\u5927\u6613\u7528\u7684\u534F\u540C\u521B\u4F5C\u4E91\u6587\u6863")))],1),e("p",[t._v(t._s(t.$L("\u6C47\u96C6\u6587\u6863\u3001\u7535\u5B50\u8868\u683C\u3001\u601D\u7EF4\u7B14\u8BB0\u7B49\u591A\u79CD\u5728\u7EBF\u5DE5\u5177\uFF0C\u6C47\u805A\u4F01\u4E1A\u77E5\u8BC6\u8D44\u6E90\u4E8E\u4E00\u5904\uFF0C\u652F\u6301\u591A\u4EBA\u5B9E\u65F6\u534F\u540C\u7F16\u8F91\uFF0C\u8BA9\u56E2\u961F\u534F\u4F5C\u66F4\u4FBF\u6377\u3002")))])]):t._e()],1),e("Row",{class:t.windowWidth>1200?"page-main-row":"page-main-rows"},[e("Col",{class:t.windowWidth>1200?"page-main-img":"page-main-imgs",attrs:{xs:24,sm:24,xl:12}},[e("ImgView",{attrs:{src:t.themeIsDark?"images/index/dark/4.png":"images/index/light/4.png"}})],1),t.windowWidth>1200?e("Col",{staticClass:"page-main-text",attrs:{xs:24,sm:24,xl:12}},[e("ImgView",{attrs:{src:"images/index/square.png"}}),e("h3",[t._v(t._s(t.$L("\u4FBF\u6377\u6613\u7528\u7684\u9879\u76EE\u7BA1\u7406\u6A21\u677F")))]),e("p",[t._v(t._s(t.$L("\u6A21\u7248\u6EE1\u8DB3\u591A\u79CD\u56E2\u961F\u534F\u4F5C\u573A\u666F\uFF0C\u540C\u65F6\u652F\u6301\u81EA\u5B9A\u4E49\u6A21\u7248\uFF0C\u6EE1\u8DB3\u56E2\u961F\u4E2A\u6027\u5316\u573A\u666F\u7BA1\u7406\u9700\u6C42\uFF0C\u53EF\u76F4\u89C2\u7684\u67E5\u770B\u9879\u76EE\u7684\u8FDB\u5C55\u60C5\u51B5\uFF0C\u56E2\u961F\u534F\u4F5C\u66F4\u65B9\u4FBF\u3002")))])],1):e("Col",{staticClass:"page-main-text page-main-texts",attrs:{xs:24,sm:24,xl:12}},[e("h3",[e("ImgView",{attrs:{src:"images/index/square.png"}}),t._v(t._s(t.$L("\u4FBF\u6377\u6613\u7528\u7684\u9879\u76EE\u7BA1\u7406\u6A21\u677F")))],1),e("p",[t._v(t._s(t.$L("\u6A21\u7248\u6EE1\u8DB3\u591A\u79CD\u56E2\u961F\u534F\u4F5C\u573A\u666F\uFF0C\u540C\u65F6\u652F\u6301\u81EA\u5B9A\u4E49\u6A21\u7248\uFF0C\u6EE1\u8DB3\u56E2\u961F\u4E2A\u6027\u5316\u573A\u666F\u7BA1\u7406\u9700\u6C42\uFF0C\u53EF\u76F4\u89C2\u7684\u67E5\u770B\u9879\u76EE\u7684\u8FDB\u5C55\u60C5\u51B5\uFF0C\u56E2\u961F\u534F\u4F5C\u66F4\u65B9\u4FBF\u3002")))])])],1),e("Row",{class:t.windowWidth>1200?"page-main-row":"page-main-rows"},[t.windowWidth>1200?e("Col",{staticClass:"page-main-text",attrs:{xs:24,sm:24,xl:12}},[e("ImgView",{attrs:{src:"images/index/square.png"}}),e("h3",[t._v(t._s(t.$L("\u6E05\u6670\u76F4\u89C2\u7684\u4EFB\u52A1\u65E5\u5386")))]),e("p",[t._v(t._s(t.$L("\u901A\u8FC7\u7075\u6D3B\u7684\u4EFB\u52A1\u65E5\u5386\uFF0C\u8F7B\u677E\u5B89\u6392\u6BCF\u4E00\u5929\u7684\u65E5\u7A0B\uFF0C\u628A\u4EFB\u52A1\u62C6\u89E3\u5230\u6BCF\u5929\uFF0C\u8BA9\u5DE5\u4F5C\u76EE\u6807\u66F4\u6E05\u6670\uFF0C\u65F6\u95F4\u5206\u914D\u66F4\u5408\u7406\u3002")))])],1):t._e(),e("Col",{class:t.windowWidth>1200?"page-main-img":"page-main-imgs",attrs:{xs:24,sm:24,xl:12}},[e("ImgView",{attrs:{src:t.themeIsDark?"images/index/dark/5.png":"images/index/light/5.png"}})],1),t.windowWidth<=1200?e("Col",{staticClass:"page-main-text page-main-texts",attrs:{xs:24,sm:24,xl:12}},[e("h3",[e("ImgView",{attrs:{src:"images/index/square.png"}}),t._v(t._s(t.$L("\u6E05\u6670\u76F4\u89C2\u7684\u4EFB\u52A1\u65E5\u5386")))],1),e("p",[t._v(t._s(t.$L("\u901A\u8FC7\u7075\u6D3B\u7684\u4EFB\u52A1\u65E5\u5386\uFF0C\u8F7B\u677E\u5B89\u6392\u6BCF\u4E00\u5929\u7684\u65E5\u7A0B\uFF0C\u628A\u4EFB\u52A1\u62C6\u89E3\u5230\u6BCF\u5929\uFF0C\u8BA9\u5DE5\u4F5C\u76EE\u6807\u66F4\u6E05\u6670\uFF0C\u65F6\u95F4\u5206\u914D\u66F4\u5408\u7406\u3002")))])]):t._e()],1),e("Row",{class:t.windowWidth>1200?"page-main-row":"page-main-rows"},[e("Col",{class:t.windowWidth>1200?"page-main-img":"page-main-imgs",attrs:{xs:24,sm:24,xl:12}},[e("ImgView",{attrs:{src:t.themeIsDark?"images/index/dark/6.png":"images/index/light/6.png"}})],1),t.windowWidth>1200?e("Col",{staticClass:"page-main-text",attrs:{xs:24,sm:24,xl:12}},[e("ImgView",{attrs:{src:"images/index/square.png"}}),e("h3",[t._v(t._s(t.$L("\u652F\u6301\u591A\u5E73\u53F0\u5E94\u7528")))]),e("p",[t._v(t._s(t.$L("\u591A\u5E73\u53F0\u5E94\u7528\u652F\u6301\uFF0C\u6253\u5F00\u5BA2\u6237\u7AEF\u5373\u53EF\u8DDF\u8FDB\u9879\u76EE\u4EFB\u52A1\u8FDB\u5EA6\uFF0C \u540C\u65F6\u8BA9\u4F60\u5728\u5DE5\u4F5C\u4E2D\u6BCF\u4E00\u4E2A\u6B65\u9AA4\u90FD\u80FD\u62E5\u6709\u66F4\u9AD8\u6548\u6109\u60A6\u7684\u4F53\u9A8C\u3002")))])],1):e("Col",{staticClass:"page-main-text page-main-texts",attrs:{xs:24,sm:24,xl:12}},[e("h3",[e("ImgView",{attrs:{src:"images/index/square.png"}}),t._v(t._s(t.$L("\u652F\u6301\u591A\u5E73\u53F0\u5E94\u7528")))],1),e("p",[t._v(t._s(t.$L("\u591A\u5E73\u53F0\u5E94\u7528\u652F\u6301\uFF0C\u6253\u5F00\u5BA2\u6237\u7AEF\u5373\u53EF\u8DDF\u8FDB\u9879\u76EE\u4EFB\u52A1\u8FDB\u5EA6\uFF0C \u540C\u65F6\u8BA9\u4F60\u5728\u5DE5\u4F5C\u4E2D\u6BCF\u4E00\u4E2A\u6B65\u9AA4\u90FD\u80FD\u62E5\u6709\u66F4\u9AD8\u6548\u6109\u60A6\u7684\u4F53\u9A8C\u3002")))])])],1)],1),e("div",{staticClass:"page-footer"},[e("div",{staticClass:"footer-service no-dark-content"},[e("div",{staticClass:"footer-bg-box"},[e("div",{staticClass:"box-title"},[t._v(t._s(t.$L(`\u5F00\u542F\u60A8\u7684 ${t.appTitle} \u56E2\u961F\u534F\u4F5C`)))]),e("div",{staticClass:"buttom-box"},[e("div",{staticClass:"login-btn",on:{click:t.login}},[t._v(t._s(t.$L("\u7ACB\u5373\u767B\u5F55")))]),e("div",{staticClass:"reg-btn",on:{click:t.register}},[t._v(t._s(t.$L("\u6CE8\u518C")))])])])]),t.homeFooter?e("div",{staticClass:"footer-copyright",domProps:{innerHTML:t._s(t.homeFooter)}}):t._e()])]),e("UpdateLog",{attrs:{"update-log":t.showItem.updateLog,"update-ver":t.showItem.updateVer},model:{value:t.uplogShow,callback:function(s){t.uplogShow=s},expression:"uplogShow"}})],1):t._e()},h=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"header-nav-box"},[e("div",{staticClass:"logo no-dark-content"})])}];const p={components:{UpdateLog:m},data(){return{languageList:n,languageType:o,showItem:{pro:!1,github:"",updateLog:"",updateVer:""},needStartHome:!1,homeFooter:"",uplogShow:!1}},computed:{...d(["themeMode","themeIsDark","themeList"]),isSoftware(){return this.$Electron||this.$isEEUiApp},currentLanguage(){return n[o]||"Language"},appTitle(){return window.systemInfo.title||"DooTask"}},mounted(){/^https*:/i.test(window.location.protocol)&&(this.$router.mode==="hash"?$A.stringLength(window.location.pathname)>2&&(window.location.href=`${window.location.origin}/#${window.location.pathname}${window.location.search}`):this.$router.mode==="history"&&$A.strExists(window.location.href,"/#/")&&(window.location.href=window.location.href.replace("/#/","/")))},activated(){this.getShowItem(),this.getNeedStartHome()},methods:{onPro(){this.goForward({name:"pro"})},setTheme(t){this.$store.dispatch("setTheme",t)},login(){this.userId>0?this.goForward({name:"manage-dashboard"},!0):this.goForward({name:"login"},!0)},register(){this.goForward({name:"login",query:{type:"reg"}})},windowOpen(t){window.open(t)},getShowItem(){this.$store.dispatch("call",{url:"system/get/showitem",spinner:1e3}).then(({data:t})=>{this.showItem=t}).catch(t=>{this.showItem={}})},getNeedStartHome(){if(this.isSoftware){this.needStartHome=!1,this.userId>0?this.goForward({name:"manage-dashboard"},!0):this.goForward({name:"login"},!0);return}this.$store.dispatch("showSpinner",1e3),this.$store.dispatch("needHome").then(({home_footer:t})=>{this.needStartHome=!0,this.homeFooter=t}).catch(t=>{this.needStartHome=!1,this.goNext()}).finally(t=>{this.$store.dispatch("hiddenSpinner")})},goNext(){this.userId>0?this.goForward({name:"manage-dashboard"},!0):this.goForward({name:"login"},!0)},onLanguage(t){l(t)}}},r={};var w=g(p,c,h,!1,u,null,null,null);function u(t){for(let i in r)this[i]=r[i]}var x=function(){return w.exports}();export{x as default};
