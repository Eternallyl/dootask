import{n as o,m as p}from"./app.5e0461e9.js";import c from"./details.a3fd9acf.js";import{D as v}from"./index.98ccc27e.js";import{I as u}from"./ImgUpload.a8fe3c26.js";var h=function(){var t,s,a,e,i=this,l=i.$createElement,r=i._self._c||l;return r("div",{staticClass:"approve-list"},[r("h2",[r("span",{staticClass:"list-name"},[i._v(i._s(i.$L(i.data.proc_def_name)))]),i.data.state==0?r("Tag",{attrs:{color:"cyan"}},[i._v(i._s(i.$L("\u5F85\u5BA1\u6279")))]):i._e(),i.data.state==1?r("Tag",{attrs:{color:"cyan"}},[i._v(i._s(i.$L("\u5BA1\u6279\u4E2D")))]):i._e(),i.data.state==2?r("Tag",{attrs:{color:"green"}},[i._v(i._s(i.$L("\u5DF2\u901A\u8FC7")))]):i._e(),i.data.state==3?r("Tag",{attrs:{color:"red"}},[i._v(i._s(i.$L("\u5DF2\u62D2\u7EDD")))]):i._e(),i.data.state==4?r("Tag",{attrs:{color:"red"}},[i._v(i._s(i.$L("\u5DF2\u64A4\u56DE")))]):i._e()],1),(t=i.data.var)!==null&&t!==void 0&&t.type?r("p",[i._v(i._s(i.$L("\u5047\u671F\u7C7B\u578B"))+"\uFF1A"),r("span",[i._v(i._s(i.$L((s=i.data.var)===null||s===void 0?void 0:s.type)))])]):i._e(),r("p",[i._v(i._s(i.$L("\u5F00\u59CB\u65F6\u95F4"))+"\uFF1A"),r("span",[i._v(i._s((a=i.data.var)===null||a===void 0?void 0:a.start_time))])]),r("p",[i._v(i._s(i.$L("\u7ED3\u675F\u65F6\u95F4"))+"\uFF1A"),r("span",[i._v(i._s((e=i.data.var)===null||e===void 0?void 0:e.end_time))])]),r("div",{staticClass:"list-member"},[r("span",[r("Avatar",{attrs:{src:i.data.userimg,size:"20"}}),i._v(" "+i._s(i.data.start_user_name)+" ")],1),r("span",[i._v(" "+i._s(i.$L("\u53D1\u8D77\u65F6\u95F4"))+"\uFF1A"+i._s(i.data.start_time)+" ")])])])},_=[];const m={name:"list",props:{data:{type:Object,default(){return{}}}},data(){return{}}},n={};var f=o(m,h,_,!1,y,null,null,null);function y(t){for(let s in n)this[s]=n[s]}var g=function(){return f.exports}(),$=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"page-approve"},[a("PageTitle",{attrs:{title:t.$L("\u5BA1\u6279\u4E2D\u5FC3")}}),a("div",{ref:"fileWrapper",staticClass:"approve-wrapper"},[a("div",{staticClass:"approve-head"},[a("div",{staticClass:"approve-nav"},[a("h1",[t._v(t._s(t.$L("\u5BA1\u6279\u4E2D\u5FC3")))])]),a("Button",{attrs:{type:"primary"},on:{click:t.addApply}},[t._v(t._s(t.$L("\u6DFB\u52A0\u7533\u8BF7")))])],1),a("Tabs",{staticStyle:{margin:"0 20px",height:"100%"},attrs:{value:t.tabsValue,size:"small"},on:{"on-click":t.tabsClick}},[a("TabPane",{staticStyle:{height:"100%"},attrs:{label:t.$L("\u5F85\u529E")+(t.unreadTotal>0?"("+t.unreadTotal+")":""),name:"unread"}},[a("div",{staticClass:"approve-main-search"},[a("div",{staticStyle:{display:"flex",gap:"10px"}},[a("Select",{staticStyle:{width:"150px"},on:{"on-change":function(e){return t.tabsClick("",0)}},model:{value:t.approvalType,callback:function(e){t.approvalType=e},expression:"approvalType"}},t._l(t.approvalList,function(e){return a("Option",{key:e.value,attrs:{value:e.value}},[t._v(t._s(e.label))])}),1)],1)]),t.unreadList.length==0?a("div",{staticClass:"noData"},[t._v(t._s(t.$L("\u6682\u65E0\u6570\u636E")))]):a("div",{staticClass:"approve-mains"},[a("div",{staticClass:"approve-main-left"},[a("div",{staticClass:"approve-main-list"},t._l(t.unreadList,function(e,i){return a("div",{on:{click:function(l){return l.stopPropagation(),t.clickList(e,i)}}},[a("list",{class:{"approve-list-active":e._active},attrs:{data:e}})],1)}),0)]),a("div",{staticClass:"approve-main-right"},[!t.detailsShow&&t.tabsValue=="unread"?a("listDetails",{attrs:{data:t.details},on:{approve:t.tabsClick,revocation:t.tabsClick}}):t._e()],1)])]),a("TabPane",{attrs:{label:t.$L("\u5DF2\u529E"),name:"done"}},[a("div",{staticClass:"approve-main-search"},[a("div",{staticStyle:{display:"flex",gap:"10px"}},[a("Select",{staticStyle:{width:"150px"},on:{"on-change":function(e){return t.tabsClick("",0)}},model:{value:t.approvalType,callback:function(e){t.approvalType=e},expression:"approvalType"}},t._l(t.approvalList,function(e){return a("Option",{key:e.value,attrs:{value:e.value}},[t._v(t._s(e.label))])}),1)],1)]),t.doneList.length==0?a("div",{staticClass:"noData"},[t._v(t._s(t.$L("\u6682\u65E0\u6570\u636E")))]):a("div",{staticClass:"approve-mains"},[a("div",{staticClass:"approve-main-left"},[a("div",{staticClass:"approve-main-list"},t._l(t.doneList,function(e,i){return a("div",{on:{click:function(l){return l.stopPropagation(),t.clickList(e,i)}}},[a("list",{class:{"approve-list-active":e._active},attrs:{data:e}})],1)}),0)]),a("div",{staticClass:"approve-main-right"},[!t.detailsShow&&t.tabsValue=="done"?a("listDetails",{attrs:{data:t.details},on:{approve:t.tabsClick,revocation:t.tabsClick}}):t._e()],1)])]),a("TabPane",{attrs:{label:t.$L("\u6284\u9001\u6211"),name:"notify"}},[a("div",{staticClass:"approve-main-search"},[a("div",{staticClass:"approve-main-search"},[a("div",{staticStyle:{display:"flex",gap:"10px"}},[a("Select",{staticStyle:{width:"150px"},on:{"on-change":function(e){return t.tabsClick("",0)}},model:{value:t.approvalType,callback:function(e){t.approvalType=e},expression:"approvalType"}},t._l(t.approvalList,function(e){return a("Option",{key:e.value,attrs:{value:e.value}},[t._v(t._s(e.label))])}),1)],1)])]),t.notifyList.length==0?a("div",{staticClass:"noData"},[t._v(t._s(t.$L("\u6682\u65E0\u6570\u636E")))]):a("div",{staticClass:"approve-mains"},[a("div",{staticClass:"approve-main-left"},[a("div",{staticClass:"approve-main-list"},t._l(t.notifyList,function(e,i){return a("div",{on:{click:function(l){return l.stopPropagation(),t.clickList(e,i)}}},[a("list",{class:{"approve-list-active":e._active},attrs:{data:e}})],1)}),0)]),a("div",{staticClass:"approve-main-right"},[!t.detailsShow&&t.tabsValue=="notify"?a("listDetails",{attrs:{data:t.details},on:{approve:t.tabsClick,revocation:t.tabsClick}}):t._e()],1)])]),a("TabPane",{attrs:{label:t.$L("\u5DF2\u53D1\u8D77"),name:"initiated"}},[a("div",{staticClass:"approve-main-search"},[a("div",{staticStyle:{display:"flex",gap:"10px"}},[a("Select",{staticStyle:{width:"150px"},on:{"on-change":function(e){return t.tabsClick("",0)}},model:{value:t.approvalType,callback:function(e){t.approvalType=e},expression:"approvalType"}},t._l(t.approvalList,function(e){return a("Option",{key:e.value,attrs:{value:e.value}},[t._v(t._s(e.label))])}),1),a("Select",{staticStyle:{width:"150px"},on:{"on-change":function(e){return t.tabsClick("",0)}},model:{value:t.searchState,callback:function(e){t.searchState=e},expression:"searchState"}},t._l(t.searchStateList,function(e){return a("Option",{key:e.value,attrs:{value:e.value}},[t._v(t._s(e.label))])}),1)],1)]),t.initiatedList.length==0?a("div",{staticClass:"noData"},[t._v(t._s(t.$L("\u6682\u65E0\u6570\u636E")))]):a("div",{staticClass:"approve-mains"},[a("div",{staticClass:"approve-main-left"},[a("div",{staticClass:"approve-main-list"},t._l(t.initiatedList,function(e,i){return a("div",{on:{click:function(l){return l.stopPropagation(),t.clickList(e,i)}}},[a("list",{class:{"approve-list-active":e._active},attrs:{data:e}})],1)}),0)]),a("div",{staticClass:"approve-main-right"},[!t.detailsShow&&t.tabsValue=="initiated"?a("listDetails",{attrs:{data:t.details},on:{approve:t.tabsClick,revocation:t.tabsClick}}):t._e()],1)])])],1)],1),a("DrawerOverlay",{attrs:{placement:"right",size:600},model:{value:t.detailsShow,callback:function(e){t.detailsShow=e},expression:"detailsShow"}},[t.detailsShow?a("listDetails",{staticStyle:{height:"100%","border-radius":"10px"},attrs:{data:t.details},on:{approve:t.tabsClick,revocation:t.tabsClick}}):t._e()],1),a("Modal",{staticClass:"page-approve-initiate",attrs:{title:t.$L(t.addTitle),"mask-closable":!1},model:{value:t.addShow,callback:function(e){t.addShow=e},expression:"addShow"}},[a("Form",{ref:"initiateRef",attrs:{model:t.addData,rules:t.addRule,"label-width":"auto"},nativeOn:{submit:function(e){e.preventDefault()}}},[t.departmentList.length>1?a("FormItem",{attrs:{prop:"department_id",label:t.$L("\u9009\u62E9\u90E8\u95E8")}},[a("Select",{attrs:{placeholder:t.$L("\u8BF7\u9009\u62E9\u90E8\u95E8")},model:{value:t.addData.department_id,callback:function(e){t.$set(t.addData,"department_id",e)},expression:"addData.department_id"}},t._l(t.departmentList,function(e,i){return a("Option",{key:i,attrs:{value:e.id}},[t._v(t._s(e.name))])}),1)],1):t._e(),a("FormItem",{attrs:{prop:"applyType",label:t.$L("\u7533\u8BF7\u7C7B\u578B")}},[a("Select",{attrs:{placeholder:t.$L("\u8BF7\u9009\u62E9\u7533\u8BF7\u7C7B\u578B")},model:{value:t.addData.applyType,callback:function(e){t.$set(t.addData,"applyType",e)},expression:"addData.applyType"}},t._l(t.procdefList,function(e,i){return a("Option",{key:i,attrs:{value:e.name}},[t._v(t._s(e.name))])}),1)],1),(t.addData.applyType||"").indexOf("\u8BF7\u5047")!==-1?a("FormItem",{attrs:{prop:"type",label:t.$L("\u5047\u671F\u7C7B\u578B")}},[a("Select",{attrs:{placeholder:t.$L("\u8BF7\u9009\u62E9\u5047\u671F\u7C7B\u578B")},model:{value:t.addData.type,callback:function(e){t.$set(t.addData,"type",e)},expression:"addData.type"}},t._l(t.selectTypes,function(e,i){return a("Option",{key:i,attrs:{value:e}},[t._v(t._s(t.$L(e)))])}),1)],1):t._e(),a("FormItem",{attrs:{prop:"startTime",label:t.$L("\u5F00\u59CB\u65F6\u95F4")}},[a("div",{staticStyle:{display:"flex",gap:"3px"}},[a("DatePicker",{staticStyle:{flex:"1","min-width":"122px"},attrs:{type:"date",format:"yyyy-MM-dd",editable:!1,placeholder:t.$L("\u8BF7\u9009\u62E9\u5F00\u59CB\u65F6\u95F4")},on:{"on-change":function(e){t.addData.startTime=e}},model:{value:t.addData.startTime,callback:function(e){t.$set(t.addData,"startTime",e)},expression:"addData.startTime"}}),a("Select",{staticStyle:{"max-width":"100px"},model:{value:t.addData.startTimeHour,callback:function(e){t.$set(t.addData,"startTimeHour",e)},expression:"addData.startTimeHour"}},t._l(24,function(e,i){return a("Option",{key:i,attrs:{value:e-1<10?"0"+(e-1):e-1}},[t._v(t._s(e-1<10?"0":"")+t._s(e-1))])}),1),a("Select",{staticStyle:{"max-width":"100px"},model:{value:t.addData.startTimeMinute,callback:function(e){t.$set(t.addData,"startTimeMinute",e)},expression:"addData.startTimeMinute"}},[a("Option",{attrs:{value:"00"}},[t._v("00")]),a("Option",{attrs:{value:"30"}},[t._v("30")])],1)],1)]),a("FormItem",{attrs:{prop:"endTime",label:t.$L("\u7ED3\u675F\u65F6\u95F4")}},[a("div",{staticStyle:{display:"flex",gap:"3px"}},[a("DatePicker",{staticStyle:{flex:"1","min-width":"122px"},attrs:{type:"date",format:"yyyy-MM-dd",editable:!1,placeholder:t.$L("\u8BF7\u9009\u62E9\u7ED3\u675F\u65F6\u95F4")},on:{"on-change":function(e){t.addData.endTime=e}},model:{value:t.addData.endTime,callback:function(e){t.$set(t.addData,"endTime",e)},expression:"addData.endTime"}}),a("Select",{staticStyle:{"max-width":"100px"},model:{value:t.addData.endTimeHour,callback:function(e){t.$set(t.addData,"endTimeHour",e)},expression:"addData.endTimeHour"}},t._l(24,function(e,i){return a("Option",{key:i,attrs:{value:e-1<10?"0"+(e-1):e-1+""}},[t._v(t._s(e-1<10?"0":"")+t._s(e-1))])}),1),a("Select",{staticStyle:{"max-width":"100px"},model:{value:t.addData.endTimeMinute,callback:function(e){t.$set(t.addData,"endTimeMinute",e)},expression:"addData.endTimeMinute"}},[a("Option",{attrs:{value:"00"}},[t._v("00")]),a("Option",{attrs:{value:"30"}},[t._v("30")])],1)],1)]),a("FormItem",{attrs:{prop:"description",label:t.$L("\u4E8B\u7531")}},[a("Input",{attrs:{type:"textarea"},model:{value:t.addData.description,callback:function(e){t.$set(t.addData,"description",e)},expression:"addData.description"}})],1),a("FormItem",{attrs:{prop:"other",label:t.$L("\u56FE\u7247")}},[a("ImgUpload",{attrs:{num:3,width:512,height:512,whcut:1},model:{value:t.addData.other,callback:function(e){t.$set(t.addData,"other",e)},expression:"addData.other"}})],1)],1),a("div",{staticClass:"adaption",attrs:{slot:"footer"},slot:"footer"},[a("Button",{attrs:{type:"default"},on:{click:function(e){t.addShow=!1}}},[t._v(t._s(t.$L("\u53D6\u6D88")))]),a("Button",{attrs:{type:"primary",loading:t.loadIng>0},on:{click:t.onInitiate}},[t._v(t._s(t.$L("\u786E\u8BA4")))])],1)],1)],1)},L=[];const T={components:{list:g,listDetails:c,DrawerOverlay:v,ImgUpload:u},name:"approve",data(){return{minDate:new Date(2020,0,1),maxDate:new Date(2025,10,1),currentDate:new Date(2021,0,17),procdefList:[],page:1,pageSize:250,total:0,noText:"",loadIng:!1,tabsValue:"",approvalType:"all",approvalList:[{value:"all",label:this.$L("\u5168\u90E8\u5BA1\u6279")},{value:"\u8BF7\u5047",label:this.$L("\u8BF7\u5047")},{value:"\u52A0\u73ED\u7533\u8BF7",label:this.$L("\u52A0\u73ED\u7533\u8BF7")}],searchState:"all",searchStateList:[{value:"all",label:this.$L("\u5168\u90E8\u72B6\u6001")},{value:1,label:this.$L("\u5BA1\u6279\u4E2D")},{value:2,label:this.$L("\u5DF2\u901A\u8FC7")},{value:3,label:this.$L("\u5DF2\u62D2\u7EDD")},{value:4,label:this.$L("\u5DF2\u64A4\u56DE")}],unreadTotal:0,unreadList:[],doneList:[],notifyList:[],initiatedList:[],details:{},detailsShow:!1,addTitle:"",addShow:!1,startTimeOpen:!1,endTimeOpen:!1,addData:{department_id:0,applyType:"",type:"",startTime:"2023-04-20",startTimeHour:"09",startTimeMinute:"00",endTime:"2023-04-20",endTimeHour:"18",endTimeMinute:"00",other:""},addRule:{department_id:{type:"number",required:!0,message:this.$L("\u8BF7\u9009\u62E9\u90E8\u95E8\uFF01"),trigger:"change"},applyType:{type:"string",required:!0,message:this.$L("\u8BF7\u9009\u62E9\u7533\u8BF7\u7C7B\u578B\uFF01"),trigger:"change"},type:{type:"string",required:!0,message:this.$L("\u8BF7\u9009\u62E9\u5047\u671F\u7C7B\u578B\uFF01"),trigger:"change"},startTime:{type:"string",required:!0,message:this.$L("\u8BF7\u9009\u62E9\u5F00\u59CB\u65F6\u95F4\uFF01"),trigger:"change"},endTime:{type:"string",required:!0,message:this.$L("\u8BF7\u9009\u62E9\u7ED3\u675F\u65F6\u95F4\uFF01"),trigger:"change"},description:{type:"string",required:!0,message:this.$L("\u8BF7\u8F93\u5165\u4E8B\u7531\uFF01"),trigger:"change"}},selectTypes:["\u5E74\u5047","\u4E8B\u5047","\u75C5\u5047","\u8C03\u4F11","\u4EA7\u5047","\u966A\u4EA7\u5047","\u5A5A\u5047","\u4E27\u5047","\u54FA\u4E73\u5047"],showDateTime:!1}},computed:{...p(["wsMsg","userInfo","userIsAdmin"]),departmentList(){let t=(this.userInfo.department_name||"").split(",");return(this.userInfo.department||[]).map((s,a)=>({id:s,name:t[a]}))}},watch:{$route(t,s){t.name=="manage-approve"&&this.tabsClick()},wsMsg:{handler(t){const{type:s,action:a}=t;switch(s){case"approve":a=="unread"&&this.tabsClick();break}},deep:!0},addShow(t){t||(this.addData.other="")}},mounted(){this.tabsValue="unread",this.tabsClick(),this.getUnreadList(),this.addData.department_id=this.userInfo.department[0]||0,this.addData.startTime=this.addData.endTime=this.getCurrentDate()},methods:{getCurrentDate(){const t=new Date,s=t.getFullYear(),a=String(t.getMonth()+1).padStart(2,"0"),e=String(t.getDate()).padStart(2,"0");return`${s}-${a}-${e}`},tabsClick(t,s=1e3){!t&&this.__tabsClick&&s>0||(this.__tabsClick=setTimeout(()=>{this.__tabsClick=null},s),this.tabsValue=t||this.tabsValue,t!=""&&(this.approvalType=this.searchState="all"),this.tabsValue=="unread"&&this.getUnreadList(),this.tabsValue=="done"&&this.getDoneList(),this.tabsValue=="notify"&&this.getNotifyList(),this.tabsValue=="initiated"&&this.getInitiatedList())},clickList(t){if(this.unreadList.map(s=>{s._active=!1}),this.doneList.map(s=>{s._active=!1}),this.notifyList.map(s=>{s._active=!1}),this.initiatedList.map(s=>{s._active=!1}),t._active=!0,window.innerWidth<426){this.goForward({name:"manage-approve-details",query:{id:t.id}});return}window.innerWidth<1010&&(this.detailsShow=!0),this.details={},this.$nextTick(()=>{this.details=t})},getUnreadList(){this.$store.dispatch("call",{method:"get",url:"approve/process/findTask",data:{page:this.page,page_size:this.pageSize,proc_def_name:this.approvalType=="all"?"":this.approvalType}}).then(({data:t})=>{this.unreadList=t.rows.map((s,a)=>(s._active=a==0,s)),this.approvalType=="all"&&(this.unreadTotal=this.unreadList.length),this.tabsValue=="unread"&&this.$nextTick(()=>{this.details=this.unreadList[0]||{}})}).catch(({msg:t})=>{$A.modalError(t)}).finally(t=>{this.loadIng--})},getDoneList(){this.$store.dispatch("call",{method:"get",url:"approve/procHistory/findTask",data:{page:this.page,page_size:this.pageSize,proc_def_name:this.approvalType=="all"?"":this.approvalType}}).then(({data:t})=>{this.doneList=t.rows.map((s,a)=>(s._active=a==0,s)),this.tabsValue=="done"&&this.$nextTick(()=>{this.details=this.doneList[0]||{}})}).catch(({msg:t})=>{$A.modalError(t)}).finally(t=>{this.loadIng--})},getNotifyList(){this.$store.dispatch("call",{method:"get",url:"approve/procHistory/findProcNotify",data:{page:this.page,page_size:this.pageSize,proc_def_name:this.approvalType=="all"?"":this.approvalType}}).then(({data:t})=>{this.notifyList=t.rows.map((s,a)=>(s._active=a==0,s)),this.tabsValue=="notify"&&this.$nextTick(()=>{this.details=this.notifyList[0]||{}})}).catch(({msg:t})=>{$A.modalError(t)}).finally(t=>{this.loadIng--})},getInitiatedList(){this.$store.dispatch("call",{method:"post",url:"approve/process/startByMyselfAll",data:{page:this.page,page_size:this.pageSize,proc_def_name:this.approvalType=="all"?"":this.approvalType,state:this.searchState=="all"?"":this.searchState}}).then(({data:t})=>{this.initiatedList=t.rows.map((s,a)=>(s._active=a==0,s)),this.tabsValue=="initiated"&&this.$nextTick(()=>{this.details=this.initiatedList[0]||{}})}).catch(({msg:t})=>{$A.modalError(t)}).finally(t=>{this.loadIng--})},addApply(){this.$store.dispatch("call",{url:"users/basic",data:{userid:[this.userInfo.userid]},skipAuthError:!0}).then(({data:t})=>{var s;if(this.addData.department_id=((s=t[0])==null?void 0:s.department[0])||0,!this.addData.department_id)return $A.modalError("\u60A8\u5F53\u524D\u672A\u52A0\u5165\u4EFB\u4F55\u90E8\u95E8\uFF0C\u4E0D\u80FD\u53D1\u8D77\uFF01"),!1;this.$store.dispatch("call",{url:"approve/procdef/all",method:"post"}).then(({data:a})=>{this.procdefList=a.rows||[],this.addTitle=this.$L("\u6DFB\u52A0\u7533\u8BF7"),this.addShow=!0}).catch(({msg:a})=>{$A.modalError(a)}).finally(a=>{this.loadIng--})}).catch(({msg:t})=>{$A.modalError(t)}).finally(t=>{this.loadIng--})},onInitiate(){this.$refs.initiateRef.validate(t=>{if(t){this.loadIng=1;var s=JSON.parse(JSON.stringify(this.addData));s.startTime=s.startTime+" "+s.startTimeHour+":"+s.startTimeMinute,s.endTime=s.endTime+" "+s.endTimeHour+":"+s.endTimeMinute,this.addData.other&&(s.other=this.addData.other.map(a=>a.path).join(",")),this.$store.dispatch("call",{url:"approve/process/start",data:{proc_name:s.applyType,department_id:s.department_id,var:JSON.stringify(s)},method:"post"}).then(({data:a,msg:e})=>{$A.messageSuccess(e),this.addShow=!1,this.$refs.initiateRef.resetFields(),this.tabsClick()}).catch(({msg:a})=>{$A.modalError(a)}).finally(a=>{this.loadIng--})}})}}},d={};var b=o(T,$,L,!1,k,null,null,null);function k(t){for(let s in d)this[s]=d[s]}var w=function(){return b.exports}();export{w as default};
