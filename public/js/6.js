(window.webpackJsonp=window.webpackJsonp||[]).push([[6,12],{"+SZM":function(t,s,e){"use strict";var a={props:["level","message"],data:function(){return{isOpen:!1,isVisibleClass:"is-visible",closeAfter:1e4,levelClass:null,messageText:null}},created:function(){this.level&&(this.levelClass="is-"+this.level),this.message&&(this.messageText=this.message,this.flash());var t=this;window.events.$on("flash",(function(s){return t.flash(s)}))},methods:{flash:function(t){t&&(this.messageText=t.message,this.levelClass="is-"+t.level);var s=this;setTimeout((function(){s.isOpen=!0}),100),this.hide()},hide:function(){var t=this;setTimeout((function(){t.isOpen=!1}),t.closeAfter)}}},i=(e("8M+A"),e("KHd+")),n={components:{Notification:Object(i.a)(a,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"flash notification",class:[t.levelClass,t.isOpen?t.isVisibleClass:""]},[e("button",{staticClass:"delete",on:{click:function(s){t.isOpen=!1}}}),t._v("\n    "+t._s(t.messageText)+"\n")])}),[],!1,null,"370f2cbe",null).exports},props:{title:{type:String,default:""}},data:function(){return{}},watch:{title:function(t){this.updatePageTitle(t)}},mounted:function(){this.updatePageTitle(this.title)},methods:{updatePageTitle:function(t){document.title=t?"".concat(t," | Monica"):"Monica"},submit:function(){}}},l=Object(i.a)(n,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("header",{staticClass:"w-100 ph3 ph5-ns pv2 bg-white bb"},[e("div",{staticClass:"db dt-ns mw9 center w-100"},[t._m(0),t._v(" "),e("nav",{staticClass:"db dtc-ns v-mid w-100 tl tr-ns mt2 mt0-ns"},[e("inertia-link",{staticClass:"f6 fw6 hover-blue link black-70 mr2 mr3-m mr4-l dib",attrs:{title:"Documentation",href:"/"}},[t._v("\n          Dashboard\n        ")]),t._v(" "),e("inertia-link",{staticClass:"f6 fw6 hover-blue link black-70 mr2 mr3-m mr4-l dib",attrs:{title:"Components",href:"/people"}},[t._v("\n          Contacts\n        ")]),t._v(" "),e("inertia-link",{staticClass:"f6 fw6 hover-blue link black-70 mr2 mr3-m mr4-l dib",attrs:{title:"Gallery of sites built with Tachyons",href:"/gallery/"}},[t._v("\n          Groups\n        ")]),t._v(" "),e("inertia-link",{staticClass:"f6 fw6 hover-blue link black-70 mr2 mr3-m mr4-l dib",attrs:{title:"Gallery of sites built with Tachyons",href:"/gallery/"}},[t._v("\n          Events\n        ")]),t._v(" "),e("inertia-link",{staticClass:"f6 fw6 hover-blue link black-70 mr2 mr3-m mr4-l dib",attrs:{title:"Gallery of sites built with Tachyons",href:"/gallery/"}},[t._v("\n          Journal\n        ")]),t._v(" "),e("inertia-link",{staticClass:"f6 fw6 hover-blue link black-70 mr2 mr3-m mr4-l dib",attrs:{title:"Resources",href:"/resources/"}},[t._v("\n          Settings\n        ")])],1)])]),t._v(" "),t._t("default"),t._v(" "),e("notification")],2)}),[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"db dtc-ns v-mid tl w-10"},[s("a",{staticClass:"dib f5 f4-ns fw6 mt0 mb1 link black-70",attrs:{href:"/",title:"Home"}},[this._v("\n          Monica\n        ")])])}],!1,null,"4e2fee02",null);s.a=l.exports},"1Yj9":function(t,s,e){var a=e("2Xib");"string"==typeof a&&(a=[[t.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(a,i);a.locals&&(t.exports=a.locals)},"2Xib":function(t,s,e){(t.exports=e("I1BE")(!1)).push([t.i,".flash.notification[data-v-370f2cbe]{z-index:99999999999;position:fixed;bottom:30px;right:30px;opacity:0;transform:translate(100%);transition:all .8s ease-in-out}.flash.notification.is-visible[data-v-370f2cbe]{transform:translate(0);opacity:1}",""])},"4ZLM":function(t,s,e){var a=e("hHZA");"string"==typeof a&&(a=[[t.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(a,i);a.locals&&(t.exports=a.locals)},"7rSe":function(t,s,e){"use strict";var a=e("4ZLM");e.n(a).a},"8M+A":function(t,s,e){"use strict";var a=e("1Yj9");e.n(a).a},DUoa:function(t,s,e){"use strict";e.r(s);var a=e("+SZM"),i=e("wWM4"),n={components:{Layout:a.a,Reminders:i.default},props:{reminders:{type:Array,default:null},tasks:{type:Array,default:null}}},l=(e("U4KT"),e("KHd+")),r=Object(l.a)(n,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("layout",{attrs:{title:"Dashboard"}},[e("section",{staticClass:"w-100 pa3 ph5-ns"},[e("div",{staticClass:"db cf mw9 center"},[e("div",{staticClass:"fl w-50-l w-100 pr2-l pr0 mb3 mb0-l"},[e("reminders",{attrs:{reminders:t.reminders}})],1),t._v(" "),e("div",{staticClass:"fl w-50-l w-100 pl2-l pl0"},[e("div",{staticClass:"ba mb3"},[e("h2",{staticClass:"ma0 bb pa2 fw4 f5"},[t._v("Latest activity")]),t._v(" "),e("ul",{staticClass:"ma0 list pl0"},[e("li",{staticClass:"bb pa2"},[e("span",{staticClass:"f6 db pb2"},[t._v("Regis Freyd on Feb 02, 19:23")]),t._v(" "),e("span",{staticClass:"db"},[t._v("Added Mali as a new contact")])]),t._v(" "),e("li",{staticClass:"pa2"},[e("span",{staticClass:"f6 db pb2"},[t._v("Regis Freyd on Feb 02, 19:23")]),t._v(" "),e("span",{staticClass:"db"},[t._v("Added Mali as a new contact")])])])]),t._v(" "),e("div",{staticClass:"ba"},[e("h2",{staticClass:"ma0 bb pa2 fw4 f5"},[t._v("Your tasks")]),t._v(" "),e("ul",{staticClass:"ma0 list pl0"},[e("li",{staticClass:"bb pa2"},[e("div",{staticClass:"flex items-start"},[e("div",{staticClass:"flex items-center"},[e("input",{attrs:{type:"checkbox"}})]),t._v(" "),e("label",{staticClass:"ml2",attrs:{for:""}},[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue\n                ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas\n                mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur. Donec ut libero sed arcu\n                vehicula ultricies a non tortor.")])])]),t._v(" "),e("li",{staticClass:"pa2"},[t._v("Reminder 2")])])])])])])])}),[],!1,null,"49429575",null);s.default=r.exports},K1UA:function(t,s,e){(t.exports=e("I1BE")(!1)).push([t.i,".reminders li[data-v-49429575]:last-child{border-bottom:0}",""])},"KHd+":function(t,s,e){"use strict";function a(t,s,e,a,i,n,l,r){var o,c="function"==typeof t?t.options:t;if(s&&(c.render=s,c.staticRenderFns=e,c._compiled=!0),a&&(c.functional=!0),n&&(c._scopeId="data-v-"+n),l?(o=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(l)},c._ssrRegister=o):i&&(o=r?function(){i.call(this,this.$root.$options.shadowRoot)}:i),o)if(c.functional){c._injectStyles=o;var u=c.render;c.render=function(t,s){return o.call(s),u(t,s)}}else{var d=c.beforeCreate;c.beforeCreate=d?[].concat(d,o):[o]}return{exports:t,options:c}}e.d(s,"a",(function(){return a}))},U4KT:function(t,s,e){"use strict";var a=e("dISj");e.n(a).a},dISj:function(t,s,e){var a=e("K1UA");"string"==typeof a&&(a=[[t.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(a,i);a.locals&&(t.exports=a.locals)},hHZA:function(t,s,e){(t.exports=e("I1BE")(!1)).push([t.i,".reminders li[data-v-68b2ba36]:last-child{border-bottom:0}",""])},wWM4:function(t,s,e){"use strict";e.r(s);var a={props:{reminders:{type:Array,default:null}}},i=(e("7rSe"),e("KHd+")),n=Object(i.a)(a,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"ba"},[e("h2",{staticClass:"ma0 bb pa2 fw4 f5"},[t._v("Upcoming reminders")]),t._v(" "),e("ul",{staticClass:"ma0 list pl0 reminders"},t._l(t.reminders,(function(s){return e("li",{key:s.id,staticClass:"bb pa2 flex items-center"},[e("span",{staticClass:"mr3 tc"},[t._v("\n        "+t._s(s.month)+"\n        "),e("span",{staticClass:"db"},[t._v(t._s(s.day))])]),t._v(" "),e("img",{staticClass:"br-100 ba h2 w2 dib mr2",attrs:{src:s.contact.avatar,alt:"avatar"}}),t._v(" "),e("div",[t._v("\n        "+t._s(s.title)+"\n        "),e("span",{staticClass:"db f6"},[e("inertia-link",{attrs:{href:s.contact.url}},[t._v(t._s(s.contact.name))])],1)])])})),0)])}),[],!1,null,"68b2ba36",null);s.default=n.exports}}]);