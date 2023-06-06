import{m as p,n as c}from"./app.5e0461e9.js";var h=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"task-priority",style:t.myStyle},[t._t("default")],2)},m=[];const _={name:"TaskPriority",props:{color:{default:"#ffffff"},background:{default:"#7DBEEA"},backgroundColor:{default:"#7DBEEA"}},data(){return{}},computed:{...p(["themeIsDark"]),myStyle(){const{color:t,background:e,backgroundColor:s,themeIsDark:a}=this;return a?{color:s||e,borderColor:s||e,backgroundColor:"transparent"}:{color:t,borderColor:s||e,backgroundColor:s||e}}}},l={};var f=c(_,h,m,!1,g,null,null,null);function g(t){for(let e in l)this[e]=l[e]}var I=function(){return f.exports}(),v={name:"ProjectLogDetail",functional:!0,props:{render:Function,item:Object},render:(t,e)=>e.props.render(t,e.props.item)},$=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{class:["project-log",t.taskId==0?"is-drawer":""]},[s("div",{staticClass:"log-title"},[t._v(t._s(t.$L("\u9879\u76EE\u52A8\u6001")))]),s("ul",{staticClass:"logs-activity"},[t._l(t.lists,function(a){return s("li",[s("div",{staticClass:"logs-date"},[t._v(t._s(t.logDate(a)))]),s("div",{staticClass:"logs-section"},[s("Timeline",t._l(a.lists,function(r,o){return s("TimelineItem",{key:o},[s("div",{staticClass:"logs-dot",attrs:{slot:"dot"},slot:"dot"},[r.userid?s("UserAvatar",{attrs:{userid:r.userid,size:18,showName:""}}):s("div",{staticClass:"avatar-wrapper common-avatar"},[s("EAvatar",{attrs:{size:18}},[t._v("A")]),s("div",{staticClass:"avatar-name auto"},[t._v(t._s(t.$L("\u7CFB\u7EDF")))])],1)],1),t._l(r.lists,function(i){return[s("div",{staticClass:"log-summary"},[s("ProjectLogDetail",{attrs:{render:t.logDetail,item:i}}),t.operationList(i).length>0?s("span",{staticClass:"log-operation"},t._l(t.operationList(i),function(n,d){return s("Button",{key:d,attrs:{size:"small"},on:{click:function(P){return t.onOperation(n)}}},[t._v(t._s(n.button))])}),1):t._e(),s("span",{staticClass:"log-time"},[t._v(t._s(i.time.ymd)+" "+t._s(i.time.segment)+" "+t._s(i.time.hi))])],1),i.project_task?s("div",{staticClass:"log-task"},[s("em",{on:{click:function(n){return t.openTask(i.project_task)}}},[t._v(t._s(t.$L("\u5173\u8054\u4EFB\u52A1"))+": "+t._s(i.project_task.name))])]):t._e()]})],2)}),1)],1)])}),t.loadIng>0&&t.showLoad?s("li",{staticClass:"logs-loading"},[s("Loading")],1):t.hasMorePages?s("li",{staticClass:"logs-more",on:{click:t.getMore}},[t._v(t._s(t.$L("\u52A0\u8F7D\u66F4\u591A")))]):t.totalNum==0?s("li",{staticClass:"logs-none",on:{click:function(a){return t.getLists(!0)}}},[t._v(t._s(t.$L("\u6CA1\u6709\u4EFB\u4F55\u52A8\u6001")))]):t._e()],2)])},k=[];const y={name:"ProjectLog",components:{ProjectLogDetail:v},props:{projectId:{type:Number,default:0},taskId:{type:Number,default:0},showLoad:{type:Boolean,default:!0}},data(){return{loadIng:0,lists:[],listPage:1,listPageSize:20,hasMorePages:!1,totalNum:-1}},mounted(){this.getLists(!0)},computed:{},watch:{projectId(){this.lists=[],this.getLists(!0)},taskId(){this.lists=[],this.getLists(!0)},loadIng(t){this.$emit("on-load-change",t>0)}},methods:{logDate(t){return $A.formatDate("m-d")==t.ymd?t.ymd+" "+this.$L("\u4ECA\u5929"):t.key},getLists(t){t===!0&&(this.listPage=1),this.loadIng++,this.$store.dispatch("call",{url:"project/log/lists",data:{project_id:this.projectId,task_id:this.taskId,page:Math.max(this.listPage,1),pagesize:Math.max($A.runNum(this.listPageSize),10)}}).then(({data:e})=>{t===!0&&(this.lists=[]),e.data.some(s=>{let a=s.time,r=a.ymd+" "+a.week,o=this.lists.find(({key:i})=>i==r);if(o){let i=o.lists.find(({userid:n})=>n==s.userid);i?i.lists.push(s):o.lists.push({userid:s.userid,lists:[s]})}else this.lists.push({key:r,ymd:s.ymd,lists:[{userid:s.userid,lists:[s]}]})}),this.hasMorePages=e.current_page<e.last_page,this.totalNum=e.total}).catch(()=>{this.lists=[],this.hasMorePages=!1,this.totalNum=0}).finally(e=>{this.loadIng--})},getMore(){!this.hasMorePages||(this.hasMorePages=!1,this.listPage++,this.getLists())},logDetail(t,{detail:e,record:s}){let a=[t("span",e)];if($A.isJson(s)){if($A.isArray(s.change)){let[r,o]=s.change;a.push(t("span",": ")),r&&r!=o?(a.push(t("span",{class:"change-value"},`${r||"-"}`)),a.push(t("span"," => ")),a.push(t("span",{class:"change-value"},`${o||"-"}`))):a.push(t("span",{class:"change-value"},o||"-"))}if(s.userid){let r=$A.isArray(s.userid)?s.userid:[s.userid],o=[];r.some(i=>{/^\d+$/.test(i)?o.push(t("UserAvatar",{props:{size:18,userid:i}})):o.push(t("span",i))}),o.length>0&&a.push(t("div",{class:"detail-user"},[t("div",{class:"detail-user-wrap"},o)]))}}return t("span",{class:"log-text"},a)},operationList({id:t,record:e}){let s=[];if(!$A.isJson(e))return s;if(this.taskId>0&&$A.isJson(e.flow)){let a=$A.getMiddle(e.flow.flow_item_name,"|");a&&s.push({id:t,button:this.$L("\u91CD\u7F6E"),content:this.$L(`\u786E\u5B9A\u91CD\u7F6E\u4E3A\u3010${a}\u3011\u5417\uFF1F`)})}return s},onOperation(t){$A.modalConfirm({content:t.content,loading:!0,onOk:()=>new Promise((e,s)=>{this.$store.dispatch("call",{url:"project/task/resetfromlog",data:{id:t.id}}).then(({data:a,msg:r})=>{e(r),this.$store.dispatch("saveTask",a),this.getLists(!0)}).catch(({msg:a})=>{s(a)})})})},openTask(t){this.$store.dispatch("openTask",t)}}},u={};var L=c(y,$,k,!1,C,null,null,null);function C(t){for(let e in u)this[e]=u[e]}var A=function(){return L.exports}();export{A as P,I as T};
