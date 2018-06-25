webpackJsonp([1],{5759:function(a,t){},NHnr:function(a,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=s("7+uW"),n=(s("ziQE"),s("mtWM")),i=s.n(n),o={render:function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",[s("div",{staticClass:"tabs"},[s("ul",{staticClass:"list-reset rounded bg-blue m0"},a._l(a.tabs,function(t){return s("li",{staticClass:"inline-block m2"},[s("a",{staticClass:"aligned-text text-decoration-none",class:{"is-active":t.isActive,"is-inactive":!t.isActive},attrs:{href:"#"},on:{click:function(s){a.selectTab(t)}}},[a._v(a._s(t.name))])])}))]),a._v(" "),s("div",{staticClass:"p2"},[a._t("default")],2)])},staticRenderFns:[]};var c=s("VU/8")({name:"Tabs",data:function(){return{tabs:[]}},methods:{selectTab:function(a){this.tabs.forEach(function(t){t.isActive=t.name===a.name})}},created:function(){this.tabs=this.$children},mounted:function(){this.isactive=this.selected,this.tabs.forEach(function(a){a.default&&(a.isActive=!0)})}},o,!1,function(a){s("i9kc")},"data-v-78b36118",null).exports,r={render:function(){var a=this.$createElement;return(this._self._c||a)("div",{directives:[{name:"show",rawName:"v-show",value:this.isActive,expression:"isActive"}]},[this._t("default")],2)},staticRenderFns:[]},d=s("VU/8")({data:function(){return{isActive:!1}},props:{name:{required:!0},default:{default:!1}}},r,!1,null,null,null).exports;e.a.filter("formatToLocale",function(a){return a.toLocaleString()}),e.a.filter("formatToCurrency",function(a){return a.toLocaleString()+' <span class="blue">NANO</span>'});var l={name:"NodeFront",components:{Tabs:c,Tab:d},data:function(){return{api:[],counter:0,show:!1}},methods:{fetchData:function(){var a=this;setInterval(function(){a.getApiData(),a.counter++,console.log("Fetching API data. Times -> "+a.counter)},6e4)},getApiData:function(){var a=this;i.a.get("http://178.128.176.212/api.php").then(function(t){a.api=t}).catch(function(a){console.log(a)})},copy:function(a){var t=this;a.target.select(),document.execCommand("copy"),setTimeout(function(){t.show=!t.show},1e3),this.show=!this.show}},beforeMount:function(){this.getApiData(),this.fetchData()},mounted:function(){}},p={render:function(){var a=this,t=a.$createElement,s=a._self._c||t;return a.api.data?s("div",[s("div",{staticClass:"col-8 mx-auto pb3",attrs:{id:"top-area"}},[s("span",{staticClass:"h2"},[a._v("Node Address")]),a._v(" "),s("input",{staticClass:"col-8 mx-auto border-none",attrs:{type:"text",readonly:"",id:"address-bar"},domProps:{value:a.api.data.nanoNodeAccount},on:{click:a.copy}}),s("transition",{attrs:{name:"fade"}},[a.show?s("span",{attrs:{id:"copy-notif"}},[a._v("copied")]):a._e()])],1),a._v(" "),s("div",{staticClass:"sm-col-6 mx-auto",attrs:{id:"container"}},[s("Tabs",[s("Tab",{attrs:{name:"Node",default:!0}},[s("ul",{staticClass:"list-reset max-width-1 mx-auto mb0"},[s("li",{staticClass:"data"},[s("span",{staticClass:"data-header"},[a._v("Block Sync:")]),a._v(" "),s("span",{staticClass:"data-body"},[a._v(a._s(a._f("formatToLocale")(a.api.data.blockSync))+"%")])]),a._v(" "),s("li",{staticClass:"data"},[s("span",{staticClass:"data-header"},[a._v("Current Block:")]),a._v(" "),s("span",{staticClass:"data-body"},[a._v(a._s(a._f("formatToLocale")(a.api.data.currentBlock)))])]),a._v(" "),s("li",{staticClass:"data"},[s("span",{staticClass:"data-header"},[a._v("Unchecked Blocks:")]),a._v(" "),s("span",{staticClass:"data-body"},[a._v(a._s(a._f("formatToLocale")(a.api.data.uncheckedBlocks)))])]),a._v(" "),s("li",{staticClass:"data"},[s("span",{staticClass:"data-header"},[a._v("Peers:")]),a._v(" "),s("span",{staticClass:"data-body"},[a._v(a._s(a._f("formatToLocale")(a.api.data.numPeers)))])])])]),a._v(" "),s("Tab",{attrs:{name:"Account"}},[s("ul",{staticClass:"list-reset max-width-1 mx-auto mb0"},[s("li",{staticClass:"data"},[s("span",{staticClass:"data-header"},[a._v("Balance:")]),a._v(" "),s("span",{staticClass:"data-body",domProps:{innerHTML:a._s(a.$options.filters.formatToCurrency(a.api.data.accBalanceMnano))}})]),a._v(" "),s("li",{staticClass:"data"},[s("span",{staticClass:"data-header"},[a._v("Pending:")]),a._v(" "),s("span",{staticClass:"data-body",domProps:{innerHTML:a._s(a.$options.filters.formatToCurrency(a.api.data.accPendingMnano))}})]),a._v(" "),s("li",{staticClass:"data"},[s("span",{staticClass:"data-header"},[a._v("Voting Weight:")]),a._v(" "),s("span",{staticClass:"data-body",domProps:{innerHTML:a._s(a.$options.filters.formatToCurrency(a.api.data.votingWeight))}})]),a._v(" "),s("li",{staticClass:"data"},[s("span",{staticClass:"data-header"},[a._v("Representative:")]),a._v(" "),s("span",{staticClass:"data-body"},[a._v(a._s(""===a.api.data.repAccount?"N/A":a.api.data.repAccountShort))])])]),a._v(" "),s("span",{staticClass:"h4 m2"},[s("a",{staticClass:"text-decoration-none",attrs:{target:"_blank",href:"https://nano.meltingice.net/explorer/account/"+a.api.data.nanoNodeAccount}},[a._v("View Account on Melting Ice")])])]),a._v(" "),s("Tab",{attrs:{name:"System"}},[s("ul",{staticClass:"list-reset max-width-1 mx-auto mb0"},[s("li",{staticClass:"data"},[s("span",{staticClass:"data-header"},[a._v("Node Version:")]),a._v(" "),s("span",{staticClass:"data-body"},[a._v(a._s(a.api.data.version))])]),a._v(" "),s("li",{staticClass:"data"},[s("span",{staticClass:"data-header"},[a._v("Uptime:")]),a._v(" "),s("span",{staticClass:"data-body"},[a._v(a._s(a.api.data.systemUptime))])]),a._v(" "),s("li",{staticClass:"data"},[s("span",{staticClass:"data-header"},[a._v("Server Load:")]),a._v(" "),s("span",{staticClass:"data-body"},[a._v(a._s(a.api.data.systemLoad)+"%")])]),a._v(" "),s("li",{staticClass:"data"},[s("span",{staticClass:"data-header"},[a._v("Memory Usage:")]),a._v(" "),s("span",{staticClass:"data-body"},[a._v(a._s(a._f("formatToLocale")(a.api.data.usedMem))+" / "+a._s(a._f("formatToLocale")(a.api.data.totalMem))+" MB")])])])])],1)],1)]):a._e()},staticRenderFns:[]};var u={name:"App",components:{NodeFront:s("VU/8")(l,p,!1,function(a){s("5759"),s("iibN")},"data-v-a043b904",null).exports},data:function(){return{}}},v={render:function(){var a=this.$createElement,t=this._self._c||a;return t("div",{staticClass:"clearfix",attrs:{id:"app"}},[t("NodeFront")],1)},staticRenderFns:[]};var _=s("VU/8")(u,v,!1,function(a){s("PNAA")},null,null).exports;e.a.config.productionTip=!1,new e.a({el:"#app",components:{App:_},template:"<App/>"})},PNAA:function(a,t){},i9kc:function(a,t){},iibN:function(a,t){},ziQE:function(a,t){}},["NHnr"]);
//# sourceMappingURL=app.f47496a41ba539a921d2.js.map