(function(){"use strict";var t={7411:function(t,e,n){var r=n(9242),a=n(3396);function o(t,e,n,r,o,s){const i=(0,a.up)("router-view"),u=(0,a.up)("PurchaseInfo");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(i),(0,a.Wm)(u,{onPurchaseLength:s.purchaseLength,onCarts:s.getCartsData},null,8,["onPurchaseLength","onCarts"])],64)}var s={data(){return{count:{myCartsLength:0,myCarts:[]}}},provide(){return{count:this.count}},methods:{purchaseLength(t){this.count.myCartsLength=t},getCartsData(t){this.count.myCarts=t}},watch:{$route(){setTimeout((()=>{clearInterval(window.time)}),100)}},mounted(){}},i=n(89);const u=(0,i.Z)(s,[["render",o]]);var c=u,l=n(2483);const f=[{path:"/",name:"searcharea",component:()=>Promise.resolve().then(n.bind(n,7826))},{path:"/music",name:"music",component:()=>n.e(281).then(n.bind(n,8281))},{path:"/shoppingmall",name:"shoppingmall",component:()=>n.e(537).then(n.bind(n,2537))},{path:"/profile",name:"profile",component:()=>n.e(202).then(n.bind(n,7202))},{path:"/shoppingcart",name:"shoppingcart",component:()=>n.e(352).then(n.bind(n,5371))}],d=(0,l.p7)({history:(0,l.PO)("/dist/"),routes:f,linkActiveClass:"active"});var m=d,h=n(7826);function p(t,e,n,r,o,s){return(0,a.wg)(),(0,a.iD)("div")}n(7658);var g=n(5820),v={data(){return{myCarts:[],myCartsLength:0}},watch:{myCarts:{handler(){g.Z.emit("purchaseLength",this.myCartsLength),this.$emit("purchaseLength",this.myCartsLength),this.$emit("carts",this.myCarts)},deep:!0}},mounted(){g.Z.on("purchaseItem",(t=>{const e=this.myCarts.findIndex((e=>e.id===t.id));-1===e&&(this.myCarts.push(t),this.myCartsLength=this.myCarts.length)})),g.Z.on("cartToInfo",(t=>{this.myCarts=t.myCarts,this.myCartsLength=t.myCartsLength,console.log(t.myCartsLength),console.log(this.count.myCartsLength)}))}};function y(){const t=this.myCartsLength;return t}const b=(0,i.Z)(v,[["render",p]]);var C=b,w=n(3494),k=n(8539),L=n(4551),_=n(7749);w.vI.add(k.xiG,k.DYF,k.zc,k.XQY,k.irl,k.opg,k.Z__,k.FU$,L.neY,L.zhw,k.Y$T,k.gr5,k.EQ8,k.$aW,k.r8p,k.Kl4);const j=(0,r.ri)(c);j.config.globalProperties.$length={length:y},j.use(m),j.component("font-awesome-icon",_.GN),j.component("NavBar",h["default"]),j.component("PurchaseInfo",C),j.mount("#app")},5820:function(t,e,n){var r=n(1373);const a=(0,r.Z)();e["Z"]=a},7826:function(t,e,n){n.r(e),n.d(e,{default:function(){return w}});var r=n(3396),a=n(7139);const o={class:"desktop_screen list-group me-2"},s=(0,r._)("span",null,"購物車",-1),i={key:0,class:"badge bg-dark rounded-circle"},u={class:"mobile_screen offcanvas offcanvas-start","data-bs-scroll":"true","data-bs-backdrop":"false",tabindex:"-1",id:"offcanvasExample","aria-labelledby":"offcanvasExampleLabel"},c=(0,r._)("div",{class:"offcanvas-header"},[(0,r._)("h3",{style:{visibility:"hidden"}},"選單"),(0,r._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"offcanvas","aria-label":"Close"})],-1),l={class:"offcanvas-body"},f={class:"list-group container-fluid"},d=(0,r._)("span",null,"購物車",-1),m={key:0,class:"badge bg-dark rounded-circle"};function h(t,e,n,h,p,g){const v=(0,r.up)("router-link"),y=(0,r.up)("font-awesome-icon");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("ul",o,[(0,r.Wm)(v,{to:"/profile",class:"list-group-item","aria-disabled":"true"},{default:(0,r.w5)((()=>[(0,r.Uk)("履歷")])),_:1}),(0,r.Wm)(v,{to:"/shoppingmall",class:"list-group-item"},{default:(0,r.w5)((()=>[(0,r.Uk)("商品列表")])),_:1}),(0,r.Wm)(v,{to:"/shoppingcart",class:"list-group-item d-flex justify-content-between"},{default:(0,r.w5)((()=>[s,p.myCartsLength?((0,r.wg)(),(0,r.iD)("span",i,(0,a.zw)(p.myCartsLength),1)):(0,r.kq)("",!0)])),_:1}),(0,r.Wm)(v,{to:"/music",class:"list-group-item"},{default:(0,r.w5)((()=>[(0,r.Uk)("音樂播放器")])),_:1})]),(0,r.Wm)(y,{icon:"fa-solid fa-bars",size:"2x",border:"",style:{background:"#eee"},class:"mobile_screen_btn","data-bs-toggle":"offcanvas","data-bs-target":"#offcanvasExample","aria-controls":"offcanvasExample"}),(0,r._)("div",u,[c,(0,r._)("div",l,[(0,r._)("ul",f,[(0,r.Wm)(v,{to:"/profile",class:"list-group-item","aria-disabled":"true"},{default:(0,r.w5)((()=>[(0,r.Uk)("履歷")])),_:1}),(0,r.Wm)(v,{to:"/shoppingmall",class:"list-group-item"},{default:(0,r.w5)((()=>[(0,r.Uk)("商品列表")])),_:1}),(0,r.Wm)(v,{to:"/shoppingcart",class:"list-group-item d-flex justify-content-between"},{default:(0,r.w5)((()=>[d,p.myCartsLength?((0,r.wg)(),(0,r.iD)("span",m,(0,a.zw)(p.myCartsLength),1)):(0,r.kq)("",!0)])),_:1}),(0,r.Wm)(v,{to:"/music",class:"list-group-item"},{default:(0,r.w5)((()=>[(0,r.Uk)("音樂播放器")])),_:1})])])])],64)}var p=n(4032),g=n.n(p),v=n(5820),y={inject:["count"],data(){return{myoffcanvas:"",navSelected:"",myCartsLength:0}},created(){},mounted(){this.myoffcanvas=new(g())("#offcanvasExample"),v.Z.on("purchaseLength",(t=>{this.myCartsLength=t})),this.myCartsLength=this.count.myCartsLength}},b=n(89);const C=(0,b.Z)(y,[["render",h]]);var w=C}},e={};function n(r){var a=e[r];if(void 0!==a)return a.exports;var o=e[r]={exports:{}};return t[r].call(o.exports,o,o.exports,n),o.exports}n.m=t,function(){var t=[];n.O=function(e,r,a,o){if(!r){var s=1/0;for(l=0;l<t.length;l++){r=t[l][0],a=t[l][1],o=t[l][2];for(var i=!0,u=0;u<r.length;u++)(!1&o||s>=o)&&Object.keys(n.O).every((function(t){return n.O[t](r[u])}))?r.splice(u--,1):(i=!1,o<s&&(s=o));if(i){t.splice(l--,1);var c=a();void 0!==c&&(e=c)}}return e}o=o||0;for(var l=t.length;l>0&&t[l-1][2]>o;l--)t[l]=t[l-1];t[l]=[r,a,o]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,r){return n.f[r](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+t+"."+{202:"74ac9886",281:"bcdc0101",352:"6eb764e5",537:"489ac149"}[t]+".js"}}(),function(){n.miniCssF=function(t){return"css/"+t+"."+{202:"5a27bd19",281:"c99a187e",352:"26afd3fa",537:"8018aee6"}[t]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="my-sideproject:";n.l=function(r,a,o,s){if(t[r])t[r].push(a);else{var i,u;if(void 0!==o)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var f=c[l];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==e+o){i=f;break}}i||(u=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,n.nc&&i.setAttribute("nonce",n.nc),i.setAttribute("data-webpack",e+o),i.src=r),t[r]=[a];var d=function(e,n){i.onerror=i.onload=null,clearTimeout(m);var a=t[r];if(delete t[r],i.parentNode&&i.parentNode.removeChild(i),a&&a.forEach((function(t){return t(n)})),e)return e(n)},m=setTimeout(d.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=d.bind(null,i.onerror),i.onload=d.bind(null,i.onload),u&&document.head.appendChild(i)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/dist/"}(),function(){if("undefined"!==typeof document){var t=function(t,e,n,r,a){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var s=function(n){if(o.onerror=o.onload=null,"load"===n.type)r();else{var s=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.href||e,u=new Error("Loading CSS chunk "+t+" failed.\n("+i+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=s,u.request=i,o.parentNode.removeChild(o),a(u)}};return o.onerror=o.onload=s,o.href=e,n?n.parentNode.insertBefore(o,n.nextSibling):document.head.appendChild(o),o},e=function(t,e){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var a=n[r],o=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(o===t||o===e))return a}var s=document.getElementsByTagName("style");for(r=0;r<s.length;r++){a=s[r],o=a.getAttribute("data-href");if(o===t||o===e)return a}},r=function(r){return new Promise((function(a,o){var s=n.miniCssF(r),i=n.p+s;if(e(s,i))return a();t(r,i,null,a,o)}))},a={143:0};n.f.miniCss=function(t,e){var n={202:1,281:1,352:1,537:1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=r(t).then((function(){a[t]=0}),(function(e){throw delete a[t],e})))}}}(),function(){var t={143:0};n.f.j=function(e,r){var a=n.o(t,e)?t[e]:void 0;if(0!==a)if(a)r.push(a[2]);else{var o=new Promise((function(n,r){a=t[e]=[n,r]}));r.push(a[2]=o);var s=n.p+n.u(e),i=new Error,u=function(r){if(n.o(t,e)&&(a=t[e],0!==a&&(t[e]=void 0),a)){var o=r&&("load"===r.type?"missing":r.type),s=r&&r.target&&r.target.src;i.message="Loading chunk "+e+" failed.\n("+o+": "+s+")",i.name="ChunkLoadError",i.type=o,i.request=s,a[1](i)}};n.l(s,u,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,r){var a,o,s=r[0],i=r[1],u=r[2],c=0;if(s.some((function(e){return 0!==t[e]}))){for(a in i)n.o(i,a)&&(n.m[a]=i[a]);if(u)var l=u(n)}for(e&&e(r);c<s.length;c++)o=s[c],n.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return n.O(l)},r=self["webpackChunkmy_sideproject"]=self["webpackChunkmy_sideproject"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(7411)}));r=n.O(r)})();
//# sourceMappingURL=app.5270c8a6.js.map