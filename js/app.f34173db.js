(function(t){function e(e){for(var a,i,c=e[0],s=e[1],l=e[2],u=0,p=[];u<c.length;u++)i=c[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);d&&d(e);while(p.length)p.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,i=1;i<n.length;i++){var s=n[i];0!==r[s]&&(a=!1)}a&&(o.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},r={app:0},o=[];function i(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-2d0e95df":"ca4b4f43"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise((function(e,a){n=r[t]=[e,a]}));e.push(n[2]=a);var o,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=i(t);var l=new Error;o=function(e){s.onerror=s.onload=null,clearTimeout(u);var n=r[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",l.name="ChunkLoadError",l.type=a,l.request=o,n[1](l)}r[t]=void 0}};var u=setTimeout((function(){o({type:"timeout",target:s})}),12e4);s.onerror=s.onload=o,document.head.appendChild(s)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/twn-challenge/",c.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var d=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-app-bar",{attrs:{dense:"",dark:""}},[n("v-toolbar-title",[t._v("Countries Infos")])],1),n("v-main",[n("v-container",{attrs:{fluid:""}},[n("router-view")],1)],1),n("v-footer",{attrs:{app:""}})],1)},o=[],i={name:"App",components:{}},c=i,s=n("2877"),l=n("6544"),u=n.n(l),d=n("7496"),p=n("40dc"),v=n("a523"),f=n("553a"),h=n("f6c4"),g=n("2a7f"),m=Object(s["a"])(c,r,o,!1,null,null,null),b=m.exports;u()(m,{VApp:d["a"],VAppBar:p["a"],VContainer:v["a"],VFooter:f["a"],VMain:h["a"],VToolbarTitle:g["a"]});n("d3b7");var _=n("8c4f"),y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("CountriesSearch")],1)},C=[],x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",{staticClass:"text-center"},[n("v-col",{staticClass:"mb-4"},[n("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v(" Welcome to Countries Infos ")])]),n("v-col",{attrs:{cols:"12"}},[n("v-card",{attrs:{color:"red lighten-2",dark:""}},[n("v-card-title",{staticClass:"headline red lighten-3"},[t._v(" Search for Country ")]),n("v-card-text",[t._v(" Explore all the Countries in the world. ")]),n("v-card-text",[n("v-autocomplete",{attrs:{items:t.items,loading:t.isLoading,"search-input":t.search,color:"white","hide-no-data":"","hide-selected":"","item-text":"Description","item-value":"API",label:"Countries",placeholder:"Start typing to Search","prepend-icon":"mdi-flag","return-object":""},on:{"update:searchInput":function(e){t.search=e},"update:search-input":function(e){t.search=e}},model:{value:t.model,callback:function(e){t.model=e},expression:"model"}})],1),n("v-divider"),n("v-expand-transition",[t.model?n("v-list",{staticClass:"red lighten-3"},t._l(t.fields,(function(e,a){return n("v-list-item",{key:a},[n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:t._s(e.value)}}),n("v-list-item-subtitle",{domProps:{textContent:t._s(e.key)}})],1)],1)})),1):t._e()],1),n("v-card-actions",[n("v-radio-group",{attrs:{row:""},model:{value:t.selectedCategory,callback:function(e){t.selectedCategory=e},expression:"selectedCategory"}},[n("v-radio",{attrs:{model:"selectedCategory",label:"Name",value:"name"}}),n("v-radio",{attrs:{model:"selectedCategory",label:"Capital",value:"capital"}}),n("v-radio",{attrs:{model:"selectedCategory",label:"Region",value:"region"}})],1),n("v-spacer"),n("v-btn",{attrs:{disabled:!t.model,color:"grey darken-3"},on:{click:function(e){t.model=null}}},[t._v(" Clear "),n("v-icon",{attrs:{right:""}},[t._v("mdi-close-circle")])],1)],1)],1)],1),n("v-col",[n("v-container",{attrs:{fluid:""}},[n("v-row",{attrs:{dense:""}},[t.isLoading?n("v-col",[n("v-progress-circular",{attrs:{indeterminate:"",color:"red"}})],1):t._l(t.filteredCountry,(function(e){return n("v-col",{key:e.name,attrs:{cols:"6",pagination:t.pagination,items:t.countries,search:t.search},on:{"update:pagination":function(e){t.pagination=e}}},[n("v-card",[n("v-img",{staticClass:"white--text align-end",attrs:{src:e.flag,gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",height:"200px"}},[n("v-card-title",{domProps:{textContent:t._s(e.name)}})],1),n("v-card-subtitle",{staticClass:"pb-0"},[t._v("Capital: "+t._s(e.capital))]),n("v-card-subtitle",{staticClass:"pb-0"},[t._v("Region: "+t._s(e.region))]),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{dark:""},on:{click:function(n){n.stopPropagation(),t.dialog=!0,t.country_select=e}}},[t._v(" Read More ")])],1)],1)],1)}))],2)],1)],1)],1),n("v-row",{staticClass:"text-center"},[n("v-container",{staticClass:"max-width"},[n("v-pagination",{attrs:{length:t.pages},model:{value:t.pagination.page,callback:function(e){t.$set(t.pagination,"page",e)},expression:"pagination.page"}})],1)],1),n("v-dialog",{attrs:{"max-width":"1200"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-card-title",{staticClass:"headline"},[t._v(t._s(t.country_select.name))]),n("v-card-text",[n("h3",[t._v(" Currencies ")])]),t._l(t.country_select.currencies,(function(e,a){return n("v-card-text",{key:a},[t._v(" "+t._s(e.name)+" ")])})),n("v-card-text",[n("h3",[t._v(" Currencies ")])]),t._l(t.country_select.currencies,(function(e,a){return n("v-card-text",{key:a},[t._v(" "+t._s(e.name)+" ")])})),n("v-card-text",[n("h3",[t._v(" Border Country ")])]),t._l(t.country_select.borders,(function(e,a){return n("v-card-text",{key:a},[n("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(n){return t.changeDialog(e)}}},[t._v(" "+t._s(e)+" ")])],1)})),n("v-card-text",[n("h3",[t._v(" Alt Spelling ")])]),t._l(t.country_select.altSpellings,(function(e,a){return n("v-card-text",{key:a},[t._v(" "+t._s(e)+" ")])})),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(e){t.dialog=!1}}},[t._v(" Close ")])],1)],2)],1)],1)},w=[],k=(n("d81d"),n("fb6a"),n("b0c0"),n("b64b"),n("ddb0"),{name:"CountriesSearch",data:function(){return{selectedCategory:"all",descriptionLimit:60,dialog:!1,entries:[],isLoading:!1,model:null,search:null,countries:[],country_select:{},all_countries:[],pagination:{page:1,total:0,perPage:20,visible:7}}},methods:{changeDialog:function(t){for(var e=0;e<this.countries.length;e++){var n=this.countries[e];n.cioc==t&&(this.country_select=n)}},init:function(){var t=this;this.isLoading||(this.isLoading=!0,fetch("https://restcountries.eu/rest/v2/all").then((function(t){return t.json()})).then((function(e){t.countries=e})).catch((function(t){console.log(t)})).finally((function(){t.isLoading=!1})))}},created:function(){this.init()},computed:{fields:function(){var t=this;return this.model?Object.keys(this.model).map((function(e){return{key:e,value:t.model[e]||"n/a"}})):[]},items:function(){var t=this;return this.entries.map((function(e){var n=e.Description.length>t.descriptionLimit?e.Description.slice(0,t.descriptionLimit)+"...":e.Description;return Object.assign({},e,{Description:n})}))},pages:function(){return this.pagination.rowsPerPage?Math.ceil(this.countries.length/this.pagination.rowsPerPage):0},filteredCountry:function(){var t=this,e=t.selectedCategory;return"all"==e?this.countries:"name"==e?t.sort((function(t,e){return t.name<e.name?-1:t.name>e.name?1:0})):"capital"==e?t.countries.sort((function(t,e){return t.capital<e.capital?-1:t.capital>e.capital?1:0})):"region"==e?t.countries.sort((function(t,e){return t.region<e.region?-1:t.region>e.region?1:0})):t.countries}},watch:{search:function(t){var e=this;console.log(t),this.items.length>0||this.isLoading||(this.isLoading=!0,fetch("https://restcountries.eu/rest/v2/name/".concat(t)).then((function(t){return t.json()})).then((function(t){e.countries=t})).catch((function(t){console.log(t)})).finally((function(){return e.isLoading=!1})))}}}),V=k,P=n("c6a6"),j=n("8336"),L=n("b0af"),S=n("99d9"),O=n("62ad"),T=n("169a"),I=n("ce7e"),D=n("0789"),A=n("132d"),E=n("adda"),M=n("8860"),R=n("da13"),$=n("5d23"),B=n("891e"),H=n("490a"),J=n("67b6"),q=n("43a6"),F=n("0fd9"),G=n("2fa4"),N=Object(s["a"])(V,x,w,!1,null,null,null),W=N.exports;u()(N,{VAutocomplete:P["a"],VBtn:j["a"],VCard:L["a"],VCardActions:S["a"],VCardSubtitle:S["b"],VCardText:S["c"],VCardTitle:S["d"],VCol:O["a"],VContainer:v["a"],VDialog:T["a"],VDivider:I["a"],VExpandTransition:D["a"],VIcon:A["a"],VImg:E["a"],VList:M["a"],VListItem:R["a"],VListItemContent:$["a"],VListItemSubtitle:$["b"],VListItemTitle:$["c"],VPagination:B["a"],VProgressCircular:H["a"],VRadio:J["a"],VRadioGroup:q["a"],VRow:F["a"],VSpacer:G["a"]});var z={name:"Home",components:{CountriesSearch:W}},K=z,Q=Object(s["a"])(K,y,C,!1,null,null,null),U=Q.exports;a["a"].use(_["a"]);var X=[{path:"/",name:"Home",component:U},{path:"*",component:function(){return n.e("chunk-2d0e95df").then(n.bind(null,"8cdb"))}}],Y=new _["a"]({routes:X}),Z=Y,tt=n("2f62");a["a"].use(tt["a"]);var et=new tt["a"].Store({state:{},mutations:{},actions:{},modules:{}}),nt=n("f309");a["a"].use(nt["a"]);var at=new nt["a"]({theme:{dark:!0}});a["a"].config.productionTip=!1,new a["a"]({router:Z,store:et,vuetify:at,render:function(t){return t(b)}}).$mount("#app")}});
//# sourceMappingURL=app.f34173db.js.map