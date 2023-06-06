import{m as h,n as l}from"./app.5e0461e9.js";const d={name:"AceEditor",props:{value:{default:""},options:{type:Object,default:()=>({})},theme:{type:String,default:"auto"},ext:{type:String,default:"txt"},height:{type:Number||null,default:null},width:{type:Number||null,default:null},wrap:{type:Boolean,default:!1},readOnly:{type:Boolean,default:!1}},render(e){return e("div",{class:"no-dark-content"})},data:()=>({code:"",editor:null,cursorPosition:{row:0,column:0},supportedModes:{Apache_Conf:["^htaccess|^htgroups|^htpasswd|^conf|htaccess|htgroups|htpasswd"],BatchFile:["bat|cmd"],C_Cpp:["cpp|c|cc|cxx|h|hh|hpp|ino"],CSharp:["cs"],CSS:["css"],Dockerfile:["^Dockerfile"],golang:["go|golang"],HTML:["html|htm|xhtml|vue|we|wpy"],Java:["java"],JavaScript:["js|jsm|jsx"],JSON:["json"],JSP:["jsp"],LESS:["less"],Lua:["lua"],Makefile:["^Makefile|^GNUmakefile|^makefile|^OCamlMakefile|make"],Markdown:["md|markdown"],MySQL:["mysql"],Nginx:["nginx|conf"],INI:["ini|conf|cfg|prefs"],ObjectiveC:["m|mm"],Perl:["pl|pm"],Perl6:["p6|pl6|pm6"],pgSQL:["pgsql"],PHP_Laravel_blade:["blade.php"],PHP:["php|inc|phtml|shtml|php3|php4|php5|phps|phpt|aw|ctp|module"],Powershell:["ps1"],Python:["py"],R:["r"],Ruby:["rb|ru|gemspec|rake|^Guardfile|^Rakefile|^Gemfile"],Rust:["rs"],SASS:["sass"],SCSS:["scss"],SH:["sh|bash|^.bashrc"],SQL:["sql"],SQLServer:["sqlserver"],Swift:["swift"],Text:["txt"],Typescript:["ts|typescript|str"],VBScript:["vbs|vb"],Verilog:["v|vh|sv|svh"],XML:["xml|rdf|rss|wsdl|xslt|atom|mathml|mml|xul|xbl|xaml|plist"],YAML:["yaml|yml"],Compress:["tar|zip|7z|rar|gz|arj|z"],images:["icon|jpg|jpeg|webp|png|bmp|gif|tif|emf"]}}),mounted(){$A.loadScriptS(["js/ace/ace.js","js/ace/mode-json.js"]).then(e=>{this.setSize(this.$el,{height:this.height,width:this.width}),this.editor=window.ace.edit(this.$el,{wrap:this.wrap,showPrintMargin:!1,readOnly:this.readOnly,keyboardHandler:"vscode"}),this.editor.session.setMode(`ace/mode/${this.getFileMode()}`),this.$emit("mounted",this.editor),this.editor.session.$worker&&this.editor.session.$worker.addEventListener("annotate",this.workerMessage,!1),this.setValue(this.value),this.editor.setOptions(this.options),this.editTheme&&this.editor.setTheme(`ace/theme/${this.editTheme}`),this.editor.commands.addCommand({name:"\u4FDD\u5B58\u6587\u4EF6",bindKey:{win:"Ctrl-S",mac:"Command-S"},exec:()=>{this.$emit("saveData")},readOnly:!1}),this.editor.getSession().on("change",()=>{this.code=this.editor.getValue(),this.$emit("input",this.code)})})},methods:{workerMessage({data:e}){this.cursorPosition=this.editor.selection.getCursor();const[t]=e;t&&t.type==="error"?this.$emit("validationFailed",t):this.$emit("change",this.editor.getValue())},setSize(e,{width:t=this.width,height:s=this.height}){e.style.width=t&&typeof t=="number"?`${t}px`:"100%",e.style.height=s&&typeof s=="number"?`${s}px`:"100%",this.$nextTick(()=>this.editor&&this.editor.resize())},setValue(e){typeof e=="string"&&this.editor&&(this.editor.setValue(e),this.editor.clearSelection())},getFileMode(){var e=this.ext||"text";for(var t in this.supportedModes)for(var s=this.supportedModes[t],r=s[0].split("|"),a=t.toLowerCase(),i=0;i<r.length;i++)if(e==r[i])return a;return"text"}},computed:{...h(["themeIsDark"]),editTheme(){return this.theme=="auto"?this.themeIsDark?"dracula-dark":"chrome":this.theme}},watch:{options(e){e&&typeof e=="object"&&this.editor&&this.editor.setOptions(e)},editTheme(e){e&&typeof e=="string"&&this.editor&&this.editor.setTheme(`ace/theme/${e}`)},ext(e){e&&typeof e=="string"&&this.editor&&this.editor.session.setMode(`ace/mode/${this.getFileMode()}`)},width(e){this.setSize(this.el,{width:e})},height(e){this.setSize(this.el,{height:e})},readOnly(e){typeof e=="boolean"&&this.editor&&this.editor.setReadOnly(e)},value(e){if(!this.editor||e==this.code)return;this.setValue(e);const{row:t,column:s}=this.cursorPosition;this.editor.selection.moveCursorTo(t,s)}},beforeDestroy(){this.editor&&(this.editor.session.$worker&&this.editor.session.$worker.removeEventListener("message",this.workerMessage,!1),this.editor.destroy(),this.editor.container.remove())}};let n,p;const o={};var c=l(d,n,p,!1,m,null,null,null);function m(e){for(let t in o)this[t]=o[t]}var f=function(){return c.exports}();export{f as default};
