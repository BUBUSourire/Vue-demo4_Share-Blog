webpackJsonp([10],{"22dz":function(e,t){},GrV6:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("7+uW"),a=n("Dd8w"),s=n.n(a),o=n("Pfph"),i=n("NYxO");window.auth=o.a;var u={data:function(){return{}},computed:s()({},Object(i.c)(["isLogin","user"])),created:function(){this.checkLogin()},methods:s()({},Object(i.b)(["checkLogin","logout"]),{onLogout:function(){this.logout()}})},c={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{class:{login:e.isLogin,"no-login":!e.isLogin}},[e.isLogin?e._e():[n("router-link",{attrs:{to:"/"}},[n("h1",[e._v("LET'S SHARE")])]),e._v(" "),n("p",[e._v("精品博客汇聚")]),e._v(" "),n("div",{staticClass:"buttons"},[n("el-button",[n("router-link",{attrs:{to:"/login"}},[e._v("立即登录")])],1),e._v(" "),n("el-button",[n("router-link",{attrs:{to:"/register"}},[e._v("注册账号")])],1)],1)],e._v(" "),e.isLogin?[n("router-link",{attrs:{to:"/"}},[n("h1",[e._v("LET'S SHARE")])]),e._v(" "),n("router-link",{attrs:{to:"/create"}},[n("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":"#icon-gangbi"}})])]),e._v(" "),n("div",{staticClass:"head-portrait"},[n("router-link",{attrs:{to:"/my"}},[n("img",{attrs:{src:e.user.avatar,alt:e.user.username,title:e.user.username}})])],1),e._v(" "),n("span",{staticClass:"delete-blog",on:{click:e.onLogout}},[e._v("注销")])]:e._e()],2)},staticRenderFns:[]};var l={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("footer",[t("p",[this._v("© 2018 wechat")])])}]};var d={render:function(){var e=this.$createElement;return(this._self._c||e)("div")},staticRenderFns:[]};var f={name:"App",components:{Header:n("VU/8")(u,c,!1,function(e){n("22dz")},"data-v-3f04669a",null).exports,Footer:n("VU/8")({name:"Footer"},l,!1,function(e){n("w1kg")},"data-v-261766b0",null).exports,sliderbar:n("VU/8")({name:"sliderbar"},d,!1,function(e){n("GrV6")},"data-v-7724fc35",null).exports}},h={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("Header",{attrs:{id:"header"}},[this._v("header")]),this._v(" "),t("sliderbar",{staticClass:"item1"}),this._v(" "),t("main",{attrs:{id:"main"}},[t("router-view")],1),this._v(" "),t("sliderbar",{staticClass:"item1"}),this._v(" "),t("Footer",{attrs:{id:"footer"}},[this._v("footer")])],1)},staticRenderFns:[]};var p=n("VU/8")(f,h,!1,function(e){n("lQrO")},null,null).exports,g=n("/ocq"),m=n("Xxa5"),v=n.n(m),b=n("exGp"),L=n.n(b),w={state:{user:null,isLogin:!1},getters:{user:function(e){return e.user},isLogin:function(e){return e.isLogin}},mutations:{setUser:function(e,t){e.user=t.user},setLogin:function(e,t){e.isLogin=t.isLogin}},actions:{login:function(e,t){var n=e.commit,r=t.username,a=t.password;return o.a.login({username:r,password:a}).then(function(e){n("setUser",{user:e.data}),n("setLogin",{isLogin:!0})})},register:function(e,t){var n=this,r=e.commit,a=t.username,s=t.password;return L()(v.a.mark(function e(){var t;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.register({username:a,password:s});case 2:return t=e.sent,r("setUser",{user:t.data}),r("setLogin",{isLogin:!0}),e.abrupt("return",t.data);case 6:case"end":return e.stop()}},e,n)}))()},logout:function(e){var t=this,n=e.commit;return L()(v.a.mark(function e(){return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.logout();case 2:n("setUser",{user:null}),n("setLogin",{isLogin:!1});case 4:case"end":return e.stop()}},e,t)}))()},checkLogin:function(e){var t=this,n=e.commit,r=e.state;return L()(v.a.mark(function e(){var a;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!r.isLogin){e.next=2;break}return e.abrupt("return",!0);case 2:return e.next=4,o.a.getInfo();case 4:if(a=e.sent,n("setLogin",{isLogin:a.isLogin}),a.isLogin){e.next=8;break}return e.abrupt("return",!1);case 8:return n("setUser",{user:a.data}),e.abrupt("return",!0);case 10:case"end":return e.stop()}},e,t)}))()}}},_={state:{},getters:{},mutations:{},actions:{}};r.default.use(i.a);var k=new i.a.Store({modules:{auth:w,blog:_}});r.default.use(g.a);var x=new g.a({routes:[{path:"/",component:function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,"R1AL"))}},{path:"/login",component:function(){return n.e(3).then(n.bind(null,"QlWu"))}},{path:"/detail/:blogId",component:function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"OtD6"))}},{path:"/edit/:blogId",component:function(){return Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"BqDn"))},meta:{requiresAuth:!0}},{path:"/create",component:function(){return Promise.all([n.e(0),n.e(8)]).then(n.bind(null,"mFje"))},meta:{requiresAuth:!0}},{path:"/user/:userId",component:function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"2AnY"))}},{path:"/my",component:function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,"XJOZ"))},meta:{requiresAuth:!0}},{path:"/register",component:function(){return n.e(6).then(n.bind(null,"Xaqj"))}}]});x.beforeEach(function(e,t,n){e.matched.some(function(e){return e.meta.requiresAuth})?k.dispatch("checkLogin").then(function(t){t?n():n({path:"/login",query:{redirect:e.fullPath}})}):n()});var O=x,P=n("zL8q"),A=n.n(P),E=(n("tvR6"),n("pFYg")),I=n.n(E);function j(e){var t=("object"===(void 0===e?"undefined":I()(e))?e:new Date(e)).getTime(),n=Date.now()-t,r="";switch(!0){case n<6e4:r="刚刚";break;case n<36e5:r=Math.floor(n/6e4)+"分钟前";break;case n<864e5:r=Math.floor(n/36e5)+"小时前";break;default:r=Math.floor(n/864e5)+"天前"}return r}var q={install:function(e,t){e.prototype.friendlyDate=j}};r.default.filter("formatDate",function(e){if(!e)return"";var t=new Date(e),n=(new Date).getTime()-t.getTime();return n<0?"":n/1e3<30?"刚刚":n/1e3<60?parseInt(n/1e3)+"秒前":n/6e4<60?parseInt(n/6e4)+"分钟前":n/36e5<24?parseInt(n/36e5)+"小时前":n/864e5<31?parseInt(n/864e5)+"天前":n/2592e6<12?parseInt(n/2592e6)+"月前":parseInt(n/31536e6)+"年前"}),r.default.use(q),r.default.config.productionTip=!1,r.default.use(A.a),new r.default({el:"#app",router:O,store:k,components:{App:p},template:"<App/>"})},Pfph:function(e,t,n){"use strict";var r=n("p+dL"),a="/auth/register",s="/auth/login",o="/auth/logout",i="/auth";t.a={register:function(e){var t=e.username,n=e.password;return Object(r.a)(a,"POST",{username:t,password:n})},login:function(e){var t=e.username,n=e.password;return Object(r.a)(s,"POST",{username:t,password:n})},logout:function(){return Object(r.a)(o)},getInfo:function(){return Object(r.a)(i)}}},lQrO:function(e,t){},"p+dL":function(e,t,n){"use strict";t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new a.a(function(r,a){var s={url:e,method:t};"get"===t.toLowerCase()?s.params=n:s.data=n,o()(s).then(function(e){"ok"===e.data.status?r(e.data):(i.Message.error(e.data.msg),a(e.data))}).catch(function(e){i.Message.error("网络异常"),a({msg:"网络异常"})})})};var r=n("//Fk"),a=n.n(r),s=n("mtWM"),o=n.n(s),i=n("zL8q");n.n(i);o.a.defaults.headers.post["Content-Type"]="appliction/x-www-form-urlencoded",o.a.defaults.baseURL="https://blog-server.hunger-valley.com",o.a.defaults.withCredentials=!0},tvR6:function(e,t){},w1kg:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.00b479d8c7d9d933dec7.js.map