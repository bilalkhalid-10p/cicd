(function(){"use strict";var t={9188:function(t,e,n){var a=n(2483),r=n(3396),l=n(7139);const o={class:"hello"};function u(t,e,n,a,u,i){return(0,r.wg)(),(0,r.iD)("div",o,[(0,r._)("h1",null,(0,l.zw)(u.msg),1),(0,r._)("ul",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(u.dataArray,(t=>((0,r.wg)(),(0,r.iD)("li",{key:t.id},(0,l.zw)(t.firstname)+" "+(0,l.zw)(t.lastname),1)))),128))])])}var i=n(6265),s=n.n(i);const c=s().create({baseURL:"https://desolate-mountain-37815.herokuapp.com"});var d=c,p={getData:m,getParentsData:f,listData:v};function m(){return d.get("/data").then((t=>t.data))}function f(){return d.get("/parents").then((t=>t.data))}function v(){return d.get("/list").then((t=>t.data))}var b={name:"home-component",data(){return{msg:"Landing component",dataArray:[]}},created(){return p.getData().then((t=>{this.dataArray=t}))}},g=n(89);const h=(0,g.Z)(b,[["render",u],["__scopeId","data-v-048712ad"]]);var _=h;const w=(0,r._)("h1",null,"Users Data",-1),y={class:"table table-bordered table-striped table-sm"},W=(0,r._)("tr",null,[(0,r._)("th",null,"Employee First Name"),(0,r._)("th",null,"Employee Last Name"),(0,r._)("th",null,"Manager First Name"),(0,r._)("th",null,"Manager Last Name"),(0,r._)("th",null,"Action")],-1),D=(0,r._)("td",null,null,-1);function k(t,e,n,a,o,u){const i=(0,r.up)("b-card");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.Wm)(i,null,{default:(0,r.w5)((()=>[w,(0,r._)("table",y,[W,((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(o.list,((t,e)=>((0,r.wg)(),(0,r.iD)("tr",{key:e},[(0,r._)("td",null,(0,l.zw)(t.Employee_first_name),1),(0,r._)("td",null,(0,l.zw)(t.Employee_last_name),1),(0,r._)("td",null,(0,l.zw)(t.Manager_first_name),1),(0,r._)("td",null,(0,l.zw)(t.Manager_first_name),1),D])))),128))])])),_:1})])}var O={name:"list-component",data(){return{list:[]}},created(){return p.listData().then((t=>{this.list=t}))}};const P=(0,g.Z)(O,[["render",k]]);var S=P;const j=(0,r.Uk)("Submit");function U(t,e,n,a,l,o){const u=(0,r.up)("b-form-select"),i=(0,r.up)("b-form-group"),s=(0,r.up)("b-form-input"),c=(0,r.up)("b-button"),d=(0,r.up)("b-form");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.Wm)(d,{onSubmit:t.onSubmit},{default:(0,r.w5)((()=>[(0,r.Wm)(i,{id:"input-group-1",label:"Email address:","label-for":"input-1",description:"We'll never share your email with anyone else."},{default:(0,r.w5)((()=>[(0,r.Wm)(u,{id:"input-3",modelValue:l.parent,"onUpdate:modelValue":e[0]||(e[0]=t=>l.parent=t),options:l.parents},null,8,["modelValue","options"])])),_:1}),(0,r.Wm)(i,{id:"input-group-2",label:"Your Name:","label-for":"input-2"},{default:(0,r.w5)((()=>[(0,r.Wm)(s,{id:"input-2",modelValue:l.name,"onUpdate:modelValue":e[1]||(e[1]=t=>l.name=t),placeholder:"Enter name",required:""},null,8,["modelValue"])])),_:1}),(0,r.Wm)(c,{type:"submit",variant:"primary"},{default:(0,r.w5)((()=>[j])),_:1})])),_:1},8,["onSubmit"])])}var z={name:"create-component",data(){return{parent:"#",parents:[],name:""}},created(){return p.getParentsData().then((t=>{this.parents=t}))}};const E=(0,g.Z)(z,[["render",U]]);var M=E;const A=[{path:"/",name:"home",component:_},{path:"/list",name:"list",component:S},{path:"/create",name:"create",component:M}],V=(0,a.p7)({history:(0,a.PO)(),routes:A});var L=V,N=n(9242);const Z={id:"app"},x=(0,r.Uk)("CRUD APP"),T=(0,r.Uk)("List");function C(t,e,n,a,l,o){const u=(0,r.up)("router-link"),i=(0,r.up)("b-navbar-brand"),s=(0,r.up)("b-navbar-toggle"),c=(0,r.up)("b-nav-item"),d=(0,r.up)("b-navbar-nav"),p=(0,r.up)("b-collapse"),m=(0,r.up)("b-navbar"),f=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)("div",Z,[(0,r.Wm)(m,{toggleable:"lg",type:"dark",variant:"info",class:"mb-3"},{default:(0,r.w5)((()=>[(0,r.Wm)(i,null,{default:(0,r.w5)((()=>[(0,r.Wm)(u,{class:"col a-link","class-active":"active",to:"/"},{default:(0,r.w5)((()=>[x])),_:1})])),_:1}),(0,r.Wm)(s,{target:"nav-collapse"}),(0,r.Wm)(p,{id:"nav-collapse","is-nav":""},{default:(0,r.w5)((()=>[(0,r.Wm)(d,null,{default:(0,r.w5)((()=>[(0,r.Wm)(c,null,{default:(0,r.w5)((()=>[(0,r.Wm)(u,{class:"col a-link","class-active":"active",to:"/list"},{default:(0,r.w5)((()=>[T])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),(0,r.Wm)(f)])}var F={name:"App"};const Y=(0,g.Z)(F,[["render",C]]);var H=Y,K=n(2026);const R=(0,N.ri)(H);R.use(K.ZP),R.use(L),R.mount("#app")}},e={};function n(a){var r=e[a];if(void 0!==r)return r.exports;var l=e[a]={exports:{}};return t[a](l,l.exports,n),l.exports}n.m=t,function(){var t=[];n.O=function(e,a,r,l){if(!a){var o=1/0;for(c=0;c<t.length;c++){a=t[c][0],r=t[c][1],l=t[c][2];for(var u=!0,i=0;i<a.length;i++)(!1&l||o>=l)&&Object.keys(n.O).every((function(t){return n.O[t](a[i])}))?a.splice(i--,1):(u=!1,l<o&&(o=l));if(u){t.splice(c--,1);var s=r();void 0!==s&&(e=s)}}return e}l=l||0;for(var c=t.length;c>0&&t[c-1][2]>l;c--)t[c]=t[c-1];t[c]=[a,r,l]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var a in e)n.o(e,a)&&!n.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,a){var r,l,o=a[0],u=a[1],i=a[2],s=0;if(o.some((function(e){return 0!==t[e]}))){for(r in u)n.o(u,r)&&(n.m[r]=u[r]);if(i)var c=i(n)}for(e&&e(a);s<o.length;s++)l=o[s],n.o(t,l)&&t[l]&&t[l][0](),t[l]=0;return n.O(c)},a=self["webpackChunktestcicd"]=self["webpackChunktestcicd"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(9188)}));a=n.O(a)})();
//# sourceMappingURL=app.8901bea2.js.map