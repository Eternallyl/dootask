import{n as i}from"./app.5e0461e9.js";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"valid-wrap"},[e("div",{staticClass:"valid-box"},[e("div",{staticClass:"valid-title"},[t._v(t._s(t.$L("\u9A8C\u8BC1\u90AE\u7BB1")))]),!t.success&&!t.error?e("Spin",{attrs:{size:"large"}}):t._e(),t.success?e("div",{staticClass:"validation-text"},[e("p",[t._v(t._s(t.$L("\u60A8\u7684\u90AE\u7BB1\u5DF2\u901A\u8FC7\u9A8C\u8BC1")))]),e("p",[t._v(t._s(t.$L("\u4ECA\u540E\u60A8\u53EF\u4EE5\u901A\u8FC7\u6B64\u90AE\u7BB1\u91CD\u7F6E\u60A8\u7684\u5E10\u53F7\u5BC6\u7801")))])]):t._e(),t.error?e("div",{staticClass:"validation-text"},[e("div",[t._v(t._s(t.errorText))])]):t._e(),t.success?e("div",{attrs:{slot:"footer"},slot:"footer"},[e("Button",{attrs:{type:"primary",long:""},on:{click:t.userLogout}},[t._v(t._s(t.$L("\u8FD4\u56DE\u9996\u9875")))])],1):t._e()],1)])},o=[];const c={data(){return{success:!1,error:!1,errorText:this.$L("\u94FE\u63A5\u5DF2\u8FC7\u671F\uFF0C\u5DF2\u91CD\u65B0\u53D1\u9001")}},mounted(){this.verificationEmail()},methods:{verificationEmail(){this.$store.dispatch("call",{url:"users/email/verification",data:{code:this.$route.query.code}}).then(()=>{this.success=!0,this.error=!1}).catch(({data:t,msg:s})=>{t.code===2?this.goForward({name:"index",query:{action:"index"}},!0):(this.success=!1,this.error=!0,this.errorText=this.$L(s))})},userLogout(){this.$store.dispatch("logout",!1)}}},r={};var l=i(c,a,o,!1,n,"763444c4",null,null);function n(t){for(let s in r)this[s]=r[s]}var u=function(){return l.exports}();export{u as default};
