function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./BCNR_Zn3.js","./BcqZkZus.js","./entry.kCcLxV0Q.css","./swiper-vue.CJDJU8ss.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{am as y,ar as f,a7 as x,$ as g,d as C,r as i,as as k,o as a,c as v,g as s,D as n,Y as p,K as A,b as w,w as L,Z as b,y as z,at as B,au as P,a5 as V}from"./BcqZkZus.js";const u=()=>y("apex-loaded",()=>!1),D=f({suspensible:!1,loader:()=>x(()=>import("./BCNR_Zn3.js"),__vite__mapDeps([0,1,2,3]),import.meta.url).then(e=>(g(()=>{u().value=!0}),e.default))});function E(){const e=u();return{LazyApexCharts:D,isLoaded:e}}const $=C({__name:"AddonApexcharts",props:{type:{},height:{},width:{},series:{},options:{}},setup(e){const _=e,{LazyApexCharts:d,isLoaded:r}=E(),l=i(null),o=i(!1),{stop:h}=k(l,([{isIntersecting:t}])=>{t&&(o.value=t,h())});return(t,O)=>{const c=P,m=V;return a(),v("div",{ref_key:"target",ref:l},[!s(r)&&!s(o)?(a(),n(c,{key:0,class:"m-4 w-[calc(100%-32px)]",style:p({height:`${t.height-32}px`})},null,8,["style"])):A("",!0),w(m,null,{default:L(()=>[s(o)?b((a(),n(s(d),z({key:0},_,{dir:"ltr"}),null,16)),[[B,s(r)]]):(a(),n(c,{key:1,class:"m-4 w-[calc(100%-32px)]",style:p({height:`${t.height-32}px`})},null,8,["style"]))]),_:1})],512)}}});export{$ as _};
