function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./DSxGIjy_.js","./BcqZkZus.js","./entry.kCcLxV0Q.css","./swiper-vue.CJDJU8ss.css","./F6Cw1Rnw.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{a9 as p,bz as m,b_ as o,ay as i,b$ as c,c0 as g,a7 as f,c1 as h,bG as v}from"./BcqZkZus.js";const P=async a=>{const{content:e}=p().public;typeof a?.params!="function"&&(a=m(a));const t=a.params(),s=e.experimental.stripQueryParameters?o(`/navigation/${`${i(t)}.${e.integrity}`}/${c(t)}.json`):o(`/navigation/${i(t)}.${e.integrity}.json`);if(g())return(await f(()=>import("./DSxGIjy_.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url).then(r=>r.generateNavigation))(t);const n=await $fetch(s,{method:"GET",responseType:"json",params:e.experimental.stripQueryParameters?void 0:{_params:h(t),previewToken:v().getPreviewToken()}});if(typeof n=="string"&&n.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return n};export{P as f};
