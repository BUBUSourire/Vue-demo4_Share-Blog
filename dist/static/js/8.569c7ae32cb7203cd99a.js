webpackJsonp([8],{"8/ZH":function(t,e){},mFje:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("ZYmg"),a={data:function(){return{title:"",description:"",content:"",atIndex:!1}},methods:{onCreate:function(){var t=this;i.a.createBlog({title:this.title,content:this.content,description:this.description,atIndex:this.atIndex}).then(function(e){console.log(e),t.$message.success(e.msg),t.$router.push({path:"/detail/"+e.data.id})})}}},o={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"create"}},[n("h1",[t._v("创建文章")]),t._v(" "),n("h3",[t._v("文章标题")]),t._v(" "),n("el-input",{attrs:{placeholder:"请输入不超过15个字",maxlength:"15"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),t._v(" "),n("h3",[t._v("内容简介")]),t._v(" "),n("el-input",{attrs:{type:"textarea",autosize:{minRows:6,maxRows:6}},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}}),t._v(" "),n("h3",[t._v("文章内容")]),t._v(" "),n("el-input",{attrs:{type:"textarea",autosize:{minRows:7,maxRows:7}},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}}),t._v(" "),n("p",[n("label",[t._v("是否展示到首页")]),t._v(" "),n("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:t.atIndex,callback:function(e){t.atIndex=e},expression:"atIndex"}})],1),t._v(" "),n("el-button",{on:{click:t.onCreate}},[t._v("确定")])],1)},staticRenderFns:[]};var c=n("VU/8")(a,o,!1,function(t){n("8/ZH")},null,null);e.default=c.exports}});
//# sourceMappingURL=8.569c7ae32cb7203cd99a.js.map