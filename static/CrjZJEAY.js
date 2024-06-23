import{a as S,a6 as B,w as U,a4 as R,a7 as k,a8 as C,g as D,d as N,z as L,A as F,Q as T,c as p,M as G,f as J}from"./Dpei8Fnb.js";import{l as Q,m as V,h as $,q as Z,j as _,e as X,s as E,t as Y,v as W,g as K,b as P}from"./DlL0Cun7.js";function ee(e,t={}){const r=t.head||Q();if(r)return r.ssr?r.push(e,t):te(r,e,t)}function te(e,t,r={}){const i=S(!1),n=S({});B(()=>{n.value=i.value?{}:V(t)});const s=e.push(n.value,r);return U(n,d=>{s.patch(d)}),D()&&(R(()=>{s.dispose()}),k(()=>{i.value=!0}),C(()=>{i.value=!1})),s}const $e=N({__name:"BootstrapIcon",props:{name:{}},setup(e){return(t,r)=>(L(),F("i",{class:T("bi bi-"+t.$props.name)},null,2))}});async function ie(e,t){return await re(t).catch(i=>(console.error("Failed to get image meta for "+t,i+""),{width:0,height:0,ratio:0}))}async function re(e){if(typeof Image>"u")throw new TypeError("Image not supported");return new Promise((t,r)=>{const i=new Image;i.onload=()=>{const n={width:i.width,height:i.height,ratio:i.width/i.height};t(n)},i.onerror=n=>r(n),i.src=e})}function j(e){return t=>t?e[t]||t:e.missingValue}function ne({formatter:e,keyMap:t,joinWith:r="/",valueMap:i}={}){e||(e=(s,o)=>`${s}=${o}`),t&&typeof t!="function"&&(t=j(t));const n=i||{};return Object.keys(n).forEach(s=>{typeof n[s]!="function"&&(n[s]=j(n[s]))}),(s={})=>Object.entries(s).filter(([d,c])=>typeof c<"u").map(([d,c])=>{const l=n[d];return typeof l=="function"&&(c=l(s[d])),d=typeof t=="function"?t(d):d,e(d,c)}).join(r)}function g(e=""){if(typeof e=="number")return e;if(typeof e=="string"&&e.replace("px","").match(/^\d+$/g))return Number.parseInt(e,10)}function se(e=""){if(e===void 0||!e.length)return[];const t=new Set;for(const r of e.split(" ")){const i=Number.parseInt(r.replace("x",""));i&&t.add(i)}return Array.from(t)}function oe(e){if(e.length===0)throw new Error("`densities` must not be empty, configure to `1` to render regular size only (DPR 1.0)")}function ae(e){const t={};if(typeof e=="string")for(const r of e.split(/[\s,]+/).filter(i=>i)){const i=r.split(":");i.length!==2?t["1px"]=i[0].trim():t[i[0].trim()]=i[1].trim()}else Object.assign(t,e);return t}function de(e){const t={options:e},r=(n,s={})=>H(t,n,s),i=(n,s={},o={})=>r(n,{...o,modifiers:E(s,o.modifiers||{})}).url;for(const n in e.presets)i[n]=(s,o,d)=>i(s,o,{...e.presets[n],...d});return i.options=e,i.getImage=r,i.getMeta=(n,s)=>ce(t,n,s),i.getSizes=(n,s)=>fe(t,n,s),t.$img=i,i}async function ce(e,t,r){const i=H(e,t,{...r});return typeof i.getMeta=="function"?await i.getMeta():await ie(e,i.url)}function H(e,t,r){var l,h;if(t&&typeof t!="string")throw new TypeError(`input must be a string (received ${typeof t}: ${JSON.stringify(t)})`);if(!t||t.startsWith("data:"))return{url:t};const{provider:i,defaults:n}=le(e,r.provider||e.options.provider),s=ue(e,r.preset);if(t=$(t)?t:Z(t),!i.supportsAlias)for(const m in e.options.alias)t.startsWith(m)&&(t=_(e.options.alias[m],t.substr(m.length)));if(i.validateDomains&&$(t)){const m=X(t).host;if(!e.options.domains.find(w=>w===m))return{url:t}}const o=E(r,s,n);o.modifiers={...o.modifiers};const d=o.modifiers.format;(l=o.modifiers)!=null&&l.width&&(o.modifiers.width=g(o.modifiers.width)),(h=o.modifiers)!=null&&h.height&&(o.modifiers.height=g(o.modifiers.height));const c=i.getImage(t,o,e);return c.format=c.format||d||"",c}function le(e,t){const r=e.options.providers[t];if(!r)throw new Error("Unknown provider: "+t);return r}function ue(e,t){if(!t)return{};if(!e.options.presets[t])throw new Error("Unknown preset: "+t);return e.options.presets[t]}function fe(e,t,r){var f,b,z,x,I;const i=g((f=r.modifiers)==null?void 0:f.width),n=g((b=r.modifiers)==null?void 0:b.height),s=ae(r.sizes),o=(z=r.densities)!=null&&z.trim()?se(r.densities.trim()):e.options.densities;oe(o);const d=i&&n?n/i:0,c=[],l=[];if(Object.keys(s).length>=1){for(const u in s){const v=M(u,String(s[u]),n,d,e);if(v!==void 0){c.push({size:v.size,screenMaxWidth:v.screenMaxWidth,media:`(max-width: ${v.screenMaxWidth}px)`});for(const y of o)l.push({width:v._cWidth*y,src:A(e,t,r,v,y)})}}ge(c)}else for(const u of o){const v=Object.keys(s)[0];let y=M(v,String(s[v]),n,d,e);y===void 0&&(y={size:"",screenMaxWidth:0,_cWidth:(x=r.modifiers)==null?void 0:x.width,_cHeight:(I=r.modifiers)==null?void 0:I.height}),l.push({width:u,src:A(e,t,r,y,u)})}he(l);const h=l[l.length-1],m=c.length?c.map(u=>`${u.media?u.media+" ":""}${u.size}`).join(", "):void 0,w=m?"w":"x",a=l.map(u=>`${u.src} ${u.width}${w}`).join(", ");return{sizes:m,srcset:a,src:h==null?void 0:h.src}}function M(e,t,r,i,n){const s=n.options.screens&&n.options.screens[e]||Number.parseInt(e),o=t.endsWith("vw");if(!o&&/^\d+$/.test(t)&&(t=t+"px"),!o&&!t.endsWith("px"))return;let d=Number.parseInt(t);if(!s||!d)return;o&&(d=Math.round(d/100*s));const c=i?Math.round(d*i):r;return{size:t,screenMaxWidth:s,_cWidth:d,_cHeight:c}}function A(e,t,r,i,n){return e.$img(t,{...r.modifiers,width:i._cWidth?i._cWidth*n:void 0,height:i._cHeight?i._cHeight*n:void 0},r)}function ge(e){var r;e.sort((i,n)=>i.screenMaxWidth-n.screenMaxWidth);let t=null;for(let i=e.length-1;i>=0;i--){const n=e[i];n.media===t&&e.splice(i,1),t=n.media}for(let i=0;i<e.length;i++)e[i].media=((r=e[i+1])==null?void 0:r.media)||""}function he(e){e.sort((r,i)=>r.width-i.width);let t=null;for(let r=e.length-1;r>=0;r--){const i=e[r];i.width===t&&e.splice(r,1),t=i.width}}const me=ne({keyMap:{format:"f",fit:"fit",width:"w",height:"h",resize:"s",quality:"q",background:"b"},joinWith:"&",formatter:(e,t)=>W(e)+"_"+W(t)}),ve=(e,{modifiers:t={},baseURL:r}={},i)=>{t.width&&t.height&&(t.resize=`${t.width}x${t.height}`,delete t.width,delete t.height);const n=me(t)||"_";return r||(r=_(i.options.nuxt.baseURL,"/_ipx")),{url:_(r,n,Y(e))}},pe=!0,ye=!0,we=Object.freeze(Object.defineProperty({__proto__:null,getImage:ve,supportsAlias:ye,validateDomains:pe},Symbol.toStringTag,{value:"Module"})),O={screens:{xs:320,sm:640,md:768,lg:1024,xl:1280,xxl:1536,"2xl":1536},presets:{},provider:"ipxStatic",domains:[],alias:{},densities:[1,2],format:["webp"]};O.providers={ipxStatic:{provider:we,defaults:{}}};const q=()=>{const e=K(),t=P();return t.$img||t._img||(t._img=de({...O,nuxt:{baseURL:e.app.baseURL}}))};function Se(e){var t;(t=performance==null?void 0:performance.mark)==null||t.call(performance,"mark_feature_usage",{detail:{feature:e}})}const _e={src:{type:String,default:void 0},format:{type:String,default:void 0},quality:{type:[Number,String],default:void 0},background:{type:String,default:void 0},fit:{type:String,default:void 0},modifiers:{type:Object,default:void 0},preset:{type:String,default:void 0},provider:{type:String,default:void 0},sizes:{type:[Object,String],default:void 0},densities:{type:String,default:void 0},preload:{type:Boolean,default:void 0},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0},alt:{type:String,default:void 0},referrerpolicy:{type:String,default:void 0},usemap:{type:String,default:void 0},longdesc:{type:String,default:void 0},ismap:{type:Boolean,default:void 0},loading:{type:String,default:void 0,validator:e=>["lazy","eager"].includes(e)},crossorigin:{type:[Boolean,String],default:void 0,validator:e=>["anonymous","use-credentials","",!0,!1].includes(e)},decoding:{type:String,default:void 0,validator:e=>["async","auto","sync"].includes(e)},nonce:{type:[String],default:void 0}},be=e=>{const t=p(()=>({provider:e.provider,preset:e.preset})),r=p(()=>({width:g(e.width),height:g(e.height),alt:e.alt,referrerpolicy:e.referrerpolicy,usemap:e.usemap,longdesc:e.longdesc,ismap:e.ismap,crossorigin:e.crossorigin===!0?"anonymous":e.crossorigin||void 0,loading:e.loading,decoding:e.decoding,nonce:e.nonce})),i=q(),n=p(()=>({...e.modifiers,width:g(e.width),height:g(e.height),format:e.format,quality:e.quality||i.options.quality,background:e.background,fit:e.fit}));return{options:t,attrs:r,modifiers:n}},ze={..._e,placeholder:{type:[Boolean,String,Number,Array],default:void 0},placeholderClass:{type:String,default:void 0}},We=N({name:"NuxtImg",props:ze,emits:["load","error"],setup:(e,t)=>{const r=q(),i=be(e),n=S(!1),s=S(),o=p(()=>r.getSizes(e.src,{...i.options.value,sizes:e.sizes,densities:e.densities,modifiers:{...i.modifiers.value,width:g(e.width),height:g(e.height)}})),d=p(()=>{const a={...i.attrs.value,"data-nuxt-img":""};return(!e.placeholder||n.value)&&(a.sizes=o.value.sizes,a.srcset=o.value.srcset),a}),c=p(()=>{let a=e.placeholder;if(a===""&&(a=!0),!a||n.value)return!1;if(typeof a=="string")return a;const f=Array.isArray(a)?a:typeof a=="number"?[a,a]:[10,10];return r(e.src,{...i.modifiers.value,width:f[0],height:f[1],quality:f[2]||50,blur:f[3]||3},i.options.value)}),l=p(()=>e.sizes?o.value.src:r(e.src,i.modifiers.value,i.options.value)),h=p(()=>c.value?c.value:l.value);if(e.preload){const a=Object.values(o.value).every(f=>f);ee({link:[{rel:"preload",as:"image",nonce:e.nonce,...a?{href:o.value.src,imagesizes:o.value.sizes,imagesrcset:o.value.srcset}:{href:h.value}}]})}const w=P().isHydrating;return G(()=>{if(c.value){const a=new Image;a.src=l.value,e.sizes&&(a.sizes=o.value.sizes||"",a.srcset=o.value.srcset),a.onload=f=>{n.value=!0,t.emit("load",f)},Se("nuxt-image");return}s.value&&(s.value.complete&&w&&(s.value.getAttribute("data-error")?t.emit("error",new Event("error")):t.emit("load",new Event("load"))),s.value.onload=a=>{t.emit("load",a)},s.value.onerror=a=>{t.emit("error",a)})}),()=>J("img",{ref:s,src:h.value,...d.value,...t.attrs,class:e.placeholder&&!n.value?[e.placeholderClass]:void 0})}});export{$e as _,We as a};
