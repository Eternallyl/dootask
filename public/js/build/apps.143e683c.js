import{M as o}from"./MicroApps.00927100.js";import{n as m}from"./app.995e49d8.js";import"./vue.1f6d1fff.js";import"./@traptitech.88860da3.js";import"./katex.4a7ead58.js";import"./vuex.cc7cb26e.js";import"./@micro-zoe.c2e1472d.js";import"./DialogWrapper.ba2bc988.js";import"./le5le-store.b40f9152.js";import"./longpress.5305f240.js";import"./index.d3a489a7.js";import"./quill.b985c8ce.js";import"./quill-mention-hi.c7a745b0.js";import"./vue-jsonp.be27271b.js";import"./vue-virtual-scroll-list-hi.8d64dcb4.js";import"./ImgUpload.bf375766.js";import"./view-design-hi.8f621b1c.js";import"./details.79b667fe.js";import"./jquery.59e618ff.js";import"./localforage.78abc453.js";import"./markdown-it.7c737f4d.js";import"./entities.797c3e49.js";import"./uc.micro.39573202.js";import"./mdurl.2f66c031.js";import"./linkify-it.3ecfda1e.js";import"./punycode.1f25cbf2.js";import"./highlight.js.1d50a63d.js";import"./markdown-it-link-attributes.e1d5d151.js";import"./axios.6ec123f8.js";import"./openpgp_hi.15f91b1d.js";import"./vue-router.2d566cd7.js";import"./vue-clipboard2.14cddeec.js";import"./clipboard.a5ccae61.js";import"./vuedraggable.d4178698.js";import"./sortablejs.ccb26b57.js";import"./vue-resize-observer.f25572a9.js";import"./element-sea.dea177ef.js";import"./deepmerge.cecf392e.js";import"./resize-observer-polyfill.cc119aac.js";import"./throttle-debounce.7c3948b2.js";import"./babel-helper-vue-jsx-merge-props.5ed215c3.js";import"./normalize-wheel.2a034b9f.js";import"./async-validator.87a1f938.js";import"./babel-runtime.4773988a.js";import"./core-js.314b4a1d.js";import"./tip.c35a0927.js";var a=function(){var t=this,r=t.$createElement,i=t._self._c||r;return!t.loading&&t.$route.name=="manage-apps"?i("MicroApps",{attrs:{url:t.appUrl,path:t.path}}):t._e()},e=[];const n={components:{MicroApps:o},data(){return{loading:!1,appUrl:"",path:""}},deactivated(){this.loading=!0},watch:{$route:{handler(t){this.loading=!0,t.name=="manage-apps"?this.$nextTick(()=>{this.loading=!1,this.appUrl={}.VITE_OKR_WEB_URL||$A.apiUrl("../apps/okr"),this.path=this.$route.query.path||""}):this.appUrl=""},immediate:!0}}},p={};var s=m(n,a,e,!1,l,null,null,null);function l(t){for(let r in p)this[r]=p[r]}var it=function(){return s.exports}();export{it as default};
