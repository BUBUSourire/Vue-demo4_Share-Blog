webpackJsonp([10],{"8p0U":function(t,e){},GrV6:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("7+uW"),a=n("Dd8w"),s=n.n(a),o=n("Pfph"),i=n("NYxO");window.auth=o.a;var u={data:function(){return{}},computed:s()({},Object(i.c)(["isLogin","user"])),created:function(){this.checkLogin()},methods:s()({},Object(i.b)(["checkLogin","logout"]),{onLogout:function(){this.logout()}})},c={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{class:{login:t.isLogin,"no-login":!t.isLogin}},[t.isLogin?t._e():[n("router-link",{attrs:{to:"/"}},[n("h1",[t._v("LET'S SHARE")])]),t._v(" "),n("p",[t._v("精品博客汇聚")]),t._v(" "),n("div",{staticClass:"buttons"},[n("el-button",[n("router-link",{attrs:{to:"/login"}},[t._v("立即登录")])],1),t._v(" "),n("el-button",[n("router-link",{attrs:{to:"/register"}},[t._v("注册账号")])],1)],1)],t._v(" "),t.isLogin?[n("router-link",{attrs:{to:"/"}},[n("h1",[t._v("LET'S SHARE")])]),t._v(" "),n("router-link",{attrs:{to:"/create"}},[n("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":"#icon-gangbi"}})])]),t._v(" "),n("div",{staticClass:"bbb"},[n("div",{staticClass:"head-portrait"},[n("router-link",{attrs:{to:"/my"}},[n("img",{attrs:{src:t.user.avatar,alt:t.user.username,title:t.user.username}})]),t._v(" "),n("div",{staticClass:"aaa",staticStyle:{"background-color":"red",width:"100px",height:"100px",position:"absolute",top:"0",right:"0",display:"none"}},[t._v("\n          aaa\n        ")])],1)]),t._v(" "),n("span",{staticClass:"delete-blog",on:{click:t.onLogout}},[t._v("注销")])]:t._e()],2)},staticRenderFns:[]};var l={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("footer",[e("p",[this._v("© 2018 wechat")])])}]};var d={render:function(){var t=this.$createElement;return(this._self._c||t)("div")},staticRenderFns:[]};var f={name:"App",components:{Header:n("VU/8")(u,c,!1,function(t){n("dmHf")},"data-v-6e0010d6",null).exports,Footer:n("VU/8")({name:"Footer"},l,!1,function(t){n("w1kg")},"data-v-261766b0",null).exports,sliderbar:n("VU/8")({name:"sliderbar"},d,!1,function(t){n("GrV6")},"data-v-7724fc35",null).exports}},p={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("Header",{attrs:{id:"header"}},[this._v("header")]),this._v(" "),e("sliderbar",{staticClass:"item1"}),this._v(" "),e("main",{attrs:{id:"main"}},[e("router-view")],1),this._v(" "),e("sliderbar",{staticClass:"item1"}),this._v(" "),e("Footer",{attrs:{id:"footer"}},[this._v("footer")])],1)},staticRenderFns:[]};var h=n("VU/8")(f,p,!1,function(t){n("8p0U")},null,null).exports,g=n("/ocq"),m=n("Xxa5"),v=n.n(m),b=n("exGp"),w=n.n(b),L={state:{user:null,isLogin:!1},getters:{user:function(t){return t.user},isLogin:function(t){return t.isLogin}},mutations:{setUser:function(t,e){t.user=e.user},setLogin:function(t,e){t.isLogin=e.isLogin}},actions:{login:function(t,e){var n=t.commit,r=e.username,a=e.password;return o.a.login({username:r,password:a}).then(function(t){n("setUser",{user:t.data}),n("setLogin",{isLogin:!0})})},register:function(t,e){var n=this,r=t.commit,a=e.username,s=e.password;return w()(v.a.mark(function t(){var e;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.register({username:a,password:s});case 2:return e=t.sent,r("setUser",{user:e.data}),r("setLogin",{isLogin:!0}),t.abrupt("return",e.data);case 6:case"end":return t.stop()}},t,n)}))()},logout:function(t){var e=this,n=t.commit;return w()(v.a.mark(function t(){return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.logout();case 2:n("setUser",{user:null}),n("setLogin",{isLogin:!1});case 4:case"end":return t.stop()}},t,e)}))()},checkLogin:function(t){var e=this,n=t.commit,r=t.state;return w()(v.a.mark(function t(){var a;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!r.isLogin){t.next=2;break}return t.abrupt("return",!0);case 2:return t.next=4,o.a.getInfo();case 4:if(a=t.sent,n("setLogin",{isLogin:a.isLogin}),a.isLogin){t.next=8;break}return t.abrupt("return",!1);case 8:return n("setUser",{user:a.data}),t.abrupt("return",!0);case 10:case"end":return t.stop()}},t,e)}))()}}},_={state:{},getters:{},mutations:{},actions:{}};r.default.use(i.a);var k=new i.a.Store({modules:{auth:L,blog:_}});r.default.use(g.a);var x=new g.a({routes:[{path:"/",component:function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,"R1AL"))}},{path:"/login",component:function(){return n.e(3).then(n.bind(null,"QlWu"))}},{path:"/detail/:blogId",component:function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"OtD6"))}},{path:"/edit/:blogId",component:function(){return Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"BqDn"))},meta:{requiresAuth:!0}},{path:"/create",component:function(){return Promise.all([n.e(0),n.e(8)]).then(n.bind(null,"mFje"))},meta:{requiresAuth:!0}},{path:"/user/:userId",component:function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"2AnY"))}},{path:"/my",component:function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,"XJOZ"))},meta:{requiresAuth:!0}},{path:"/register",component:function(){return n.e(6).then(n.bind(null,"Xaqj"))}}]});x.beforeEach(function(t,e,n){t.matched.some(function(t){return t.meta.requiresAuth})?k.dispatch("checkLogin").then(function(e){e?n():n({path:"/login",query:{redirect:t.fullPath}})}):n()});var O=x,P=n("zL8q"),U=n.n(P),A=(n("tvR6"),n("pFYg")),C=n.n(A);function E(t){var e=("object"===(void 0===t?"undefined":C()(t))?t:new Date(t)).getTime(),n=Date.now()-e,r="";switch(!0){case n<6e4:r="刚刚";break;case n<36e5:r=Math.floor(n/6e4)+"分钟前";break;case n<864e5:r=Math.floor(n/36e5)+"小时前";break;default:r=Math.floor(n/864e5)+"天前"}return r}var I={install:function(t,e){t.prototype.friendlyDate=E}};r.default.filter("formatDate",function(t){if(!t)return"";var e=new Date(t),n=(new Date).getTime()-e.getTime();return n<0?"":n/1e3<30?"刚刚":n/1e3<60?parseInt(n/1e3)+"秒前":n/6e4<60?parseInt(n/6e4)+"分钟前":n/36e5<24?parseInt(n/36e5)+"小时前":n/864e5<31?parseInt(n/864e5)+"天前":n/2592e6<12?parseInt(n/2592e6)+"月前":parseInt(n/31536e6)+"年前"}),r.default.use(I),r.default.config.productionTip=!1,r.default.use(U.a),new r.default({el:"#app",router:O,store:k,components:{App:h},template:"<App/>"})},Pfph:function(t,e,n){"use strict";var r=n("p+dL"),a="/auth/register",s="/auth/login",o="/auth/logout",i="/auth";e.a={register:function(t){var e=t.username,n=t.password;return Object(r.a)(a,"POST",{username:e,password:n})},login:function(t){var e=t.username,n=t.password;return Object(r.a)(s,"POST",{username:e,password:n})},logout:function(){return Object(r.a)(o)},getInfo:function(){return Object(r.a)(i)}}},dmHf:function(t,e){},"p+dL":function(t,e,n){"use strict";e.a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new a.a(function(r,a){var s={url:t,method:e};"get"===e.toLowerCase()?s.params=n:s.data=n,o()(s).then(function(t){"ok"===t.data.status?r(t.data):(i.Message.error(t.data.msg),a(t.data))}).catch(function(t){i.Message.error("网络异常"),a({msg:"网络异常"})})})};var r=n("//Fk"),a=n.n(r),s=n("mtWM"),o=n.n(s),i=n("zL8q");n.n(i);o.a.defaults.headers.post["Content-Type"]="appliction/x-www-form-urlencoded",o.a.defaults.baseURL="https://blog-server.hunger-valley.com",o.a.defaults.withCredentials=!0},tvR6:function(t,e){},w1kg:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.2d8c4293c5c29db71372.js.map