(function(){"use strict";var t={8713:function(t,e,n){var a=n(2483),r=n(3396),o=n(7139);const l={class:"hello"};function u(t,e,n,a,u,i){return(0,r.wg)(),(0,r.iD)("div",l,[(0,r._)("h1",null,(0,o.zw)(u.msg),1),(0,r._)("ul",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(u.dataArray,(t=>((0,r.wg)(),(0,r.iD)("li",{key:t.id},(0,o.zw)(t.firstname)+" "+(0,o.zw)(t.lastname),1)))),128))])])}var i=n(6265),s=n.n(i);const c=s().create({baseURL:"https://desolate-mountain-37815.herokuapp.com"});var d=c,m={getData:p,getParentsData:f,listData:b};function p(){return d.get("/data").then((t=>t.data))}function f(){return d.get("/parents").then((t=>t.data))}function b(){return d.get("/list").then((t=>t.data))}var v={name:"home-component",data(){return{msg:"Landing component",dataArray:[]}},created(){return m.getData().then((t=>{this.dataArray=t}))}},g=n(89);const h=(0,g.Z)(v,[["render",u],["__scopeId","data-v-048712ad"]]);var _=h;const w={class:"container"},y=(0,r._)("h1",null,"Users Data",-1),k={class:"table table-bordered table-striped table-sm"},W=(0,r._)("tr",null,[(0,r._)("th",null,"Employee First Name"),(0,r._)("th",null,"Employee Last Name"),(0,r._)("th",null,"Manager First Name"),(0,r._)("th",null,"Manager Last Name"),(0,r._)("th",null,"Action")],-1),D=(0,r.Uk)("Button");function O(t,e,n,a,l,u){const i=(0,r.up)("b-button"),s=(0,r.up)("b-card");return(0,r.wg)(),(0,r.iD)("div",w,[(0,r.Wm)(s,{class:"col-md-12"},{default:(0,r.w5)((()=>[y,(0,r._)("table",k,[W,((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(l.list,((t,e)=>((0,r.wg)(),(0,r.iD)("tr",{key:e},[(0,r._)("td",null,(0,o.zw)(t.employee_first_name??"N/A"),1),(0,r._)("td",null,(0,o.zw)(t.employee_last_name??"N/A"),1),(0,r._)("td",null,(0,o.zw)(t.manager_first_name??"N/A"),1),(0,r._)("td",null,(0,o.zw)(t.manager_last_name??"N/A"),1),(0,r._)("td",null,[(0,r.Wm)(i,{onClick:e=>u.editUser(t),variant:"outline-primary"},{default:(0,r.w5)((()=>[D])),_:2},1032,["onClick"])])])))),128))])])),_:1})])}var U={name:"list-component",data(){return{list:[]}},created(){return m.listData().then((t=>{this.list=t}))},methods:{editUser(t){console.log(t)}}};const A=(0,g.Z)(U,[["render",O]]);var P=A;const N=(0,r.Uk)("Submit");function S(t,e,n,a,o,l){const u=(0,r.up)("b-form-select"),i=(0,r.up)("b-form-group"),s=(0,r.up)("b-form-input"),c=(0,r.up)("b-button"),d=(0,r.up)("b-form");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.Wm)(d,{onSubmit:t.onSubmit},{default:(0,r.w5)((()=>[(0,r.Wm)(i,{id:"input-group-1",label:"Email address:","label-for":"input-1",description:"We'll never share your email with anyone else."},{default:(0,r.w5)((()=>[(0,r.Wm)(u,{id:"input-3",modelValue:o.parent,"onUpdate:modelValue":e[0]||(e[0]=t=>o.parent=t),options:o.parents},null,8,["modelValue","options"])])),_:1}),(0,r.Wm)(i,{id:"input-group-2",label:"Your Name:","label-for":"input-2"},{default:(0,r.w5)((()=>[(0,r.Wm)(s,{id:"input-2",modelValue:o.name,"onUpdate:modelValue":e[1]||(e[1]=t=>o.name=t),placeholder:"Enter name",required:""},null,8,["modelValue"])])),_:1}),(0,r.Wm)(c,{type:"submit",variant:"primary"},{default:(0,r.w5)((()=>[N])),_:1})])),_:1},8,["onSubmit"])])}var j={name:"create-component",data(){return{parent:"#",parents:[],name:""}},created(){return m.getParentsData().then((t=>{this.parents=t}))}};const z=(0,g.Z)(j,[["render",S]]);var V=z;const C=[{path:"/",name:"home",component:_},{path:"/list",name:"list",component:P},{path:"/create",name:"create",component:V}],E=(0,a.p7)({history:(0,a.PO)(),routes:C});var L=E,M=n(9242);const Z={id:"app"},x=(0,r.Uk)("CRUD APP"),T=(0,r.Uk)("List");function F(t,e,n,a,o,l){const u=(0,r.up)("router-link"),i=(0,r.up)("b-navbar-brand"),s=(0,r.up)("b-navbar-toggle"),c=(0,r.up)("b-nav-item"),d=(0,r.up)("b-navbar-nav"),m=(0,r.up)("b-collapse"),p=(0,r.up)("b-navbar"),f=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)("div",Z,[(0,r.Wm)(p,{toggleable:"lg",type:"dark",variant:"info",class:"mb-3"},{default:(0,r.w5)((()=>[(0,r.Wm)(i,null,{default:(0,r.w5)((()=>[(0,r.Wm)(u,{class:"col a-link","class-active":"active",to:"/"},{default:(0,r.w5)((()=>[x])),_:1})])),_:1}),(0,r.Wm)(s,{target:"nav-collapse"}),(0,r.Wm)(m,{id:"nav-collapse","is-nav":""},{default:(0,r.w5)((()=>[(0,r.Wm)(d,null,{default:(0,r.w5)((()=>[(0,r.Wm)(c,null,{default:(0,r.w5)((()=>[(0,r.Wm)(u,{class:"col a-link","class-active":"active",to:"/list"},{default:(0,r.w5)((()=>[T])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),(0,r.Wm)(f)])}var Y={name:"App"};const H=(0,g.Z)(Y,[["render",F]]);var K=H,R=n(2026);const q=(0,M.ri)(K);q.use(R.ZP),q.use(L),q.mount("#app")}},e={};function n(a){var r=e[a];if(void 0!==r)return r.exports;var o=e[a]={exports:{}};return t[a](o,o.exports,n),o.exports}n.m=t,function(){var t=[];n.O=function(e,a,r,o){if(!a){var l=1/0;for(c=0;c<t.length;c++){a=t[c][0],r=t[c][1],o=t[c][2];for(var u=!0,i=0;i<a.length;i++)(!1&o||l>=o)&&Object.keys(n.O).every((function(t){return n.O[t](a[i])}))?a.splice(i--,1):(u=!1,o<l&&(l=o));if(u){t.splice(c--,1);var s=r();void 0!==s&&(e=s)}}return e}o=o||0;for(var c=t.length;c>0&&t[c-1][2]>o;c--)t[c]=t[c-1];t[c]=[a,r,o]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var a in e)n.o(e,a)&&!n.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,a){var r,o,l=a[0],u=a[1],i=a[2],s=0;if(l.some((function(e){return 0!==t[e]}))){for(r in u)n.o(u,r)&&(n.m[r]=u[r]);if(i)var c=i(n)}for(e&&e(a);s<l.length;s++)o=l[s],n.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return n.O(c)},a=self["webpackChunktestcicd"]=self["webpackChunktestcicd"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(8713)}));a=n.O(a)})();
//# sourceMappingURL=app.5a658e13.js.map