import{i as V,r as G,u as B,h as z,o as Q,d as J,e as Z,j as k,p as M,f as X,n as Y,g as O,b as I,k as K,w as ee,l as te,m as ie,q as T,s as re,t as A}from"./DbszNA4r.js";import{a as x,$ as ae,w as ne,a0 as E,a1 as se,a2 as oe,g as le,d as C,M as $,p as ce,A as H,c as y,f as q,a3 as ue,z as de,Q as fe}from"./orbDqLiy.js";function he(e,t={}){const r=t.head||V();if(r)return r.ssr?r.push(e,t):ge(r,e,t)}function ge(e,t,r={}){const i=x(!1),a=x({});ae(()=>{a.value=i.value?{}:G(t)});const n=e.push(a.value,r);return ne(a,o=>{n.patch(o)}),le()&&(E(()=>{n.dispose()}),se(()=>{i.value=!0}),oe(()=>{i.value=!1})),n}async function L(e,t=B()){const{path:r,matched:i}=t.resolve(e);if(!i.length||(t._routePreloaded||(t._routePreloaded=new Set),t._routePreloaded.has(r)))return;const a=t._preloadPromises=t._preloadPromises||[];if(a.length>4)return Promise.all(a).then(()=>L(e,t));t._routePreloaded.add(r);const n=i.map(s=>{var o;return(o=s.components)==null?void 0:o.default}).filter(s=>typeof s=="function");for(const s of n){const o=Promise.resolve(s()).catch(()=>{}).finally(()=>a.splice(a.indexOf(o)));a.push(o)}await Promise.all(a)}const ve=Symbol.for("nuxt:client-only"),De=C({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(e,{slots:t,attrs:r}){const i=x(!1);return $(()=>{i.value=!0}),ce(ve,!0),a=>{var l;if(i.value)return(l=t.default)==null?void 0:l.call(t);const n=t.fallback||t.placeholder;if(n)return n();const s=a.fallback||a.placeholder||"",o=a.fallbackTag||a.placeholderTag||"span";return H(o,r,s)}}}),me=(...e)=>e.find(t=>t!==void 0);function pe(e){const t=e.componentName||"NuxtLink";function r(i,a){if(!i||e.trailingSlash!=="append"&&e.trailingSlash!=="remove")return i;if(typeof i=="string")return j(i,e.trailingSlash);const n="path"in i&&i.path!==void 0?i.path:a(i).path;return{...i,name:void 0,path:j(n,e.trailingSlash)}}return C({name:t,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1}},setup(i,{slots:a}){const n=B(),s=O(),o=y(()=>{const u=i.to||i.href||"";return r(u,n.resolve)}),l=y(()=>typeof o.value=="string"&&z(o.value,{acceptRelative:!0})),d=y(()=>i.target&&i.target!=="_self"),v=y(()=>i.external||d.value?!0:typeof o.value=="object"?!1:o.value===""||l.value),m=x(!1),p=x(null),c=u=>{var b;p.value=i.custom?(b=u==null?void 0:u.$el)==null?void 0:b.nextElementSibling:u==null?void 0:u.$el};if(i.prefetch!==!1&&i.noPrefetch!==!0&&i.target!=="_blank"&&!be()){const b=I();let S,g=null;$(()=>{const _=ye();Q(()=>{S=J(()=>{var f;(f=p==null?void 0:p.value)!=null&&f.tagName&&(g=_.observe(p.value,async()=>{g==null||g(),g=null;const h=typeof o.value=="string"?o.value:n.resolve(o.value).fullPath;await Promise.all([b.hooks.callHook("link:prefetch",h).catch(()=>{}),!v.value&&L(o.value,n).catch(()=>{})]),m.value=!0}))})})}),E(()=>{S&&Z(S),g==null||g(),g=null})}return()=>{var g,_;if(!v.value){const f={ref:c,to:o.value,activeClass:i.activeClass||e.activeClass,exactActiveClass:i.exactActiveClass||e.exactActiveClass,replace:i.replace,ariaCurrentValue:i.ariaCurrentValue,custom:i.custom};return i.custom||(m.value&&(f.class=i.prefetchedClass||e.prefetchedClass),f.rel=i.rel||void 0),q(ue("RouterLink"),f,a.default)}const u=typeof o.value=="object"?((g=n.resolve(o.value))==null?void 0:g.href)??null:o.value&&!i.external&&!l.value?r(k(s.app.baseURL,o.value),n.resolve):o.value||null,b=i.target||null,S=me(i.noRel?"":i.rel,e.externalRelAttribute,l.value||d.value?"noopener noreferrer":"")||null;if(i.custom){if(!a.default)return null;const f=()=>K(u,{replace:i.replace,external:i.external});return a.default({href:u,navigate:f,get route(){if(!u)return;const h=M(u);return{path:h.pathname,fullPath:h.pathname,get query(){return X(h.search)},hash:h.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:u}},rel:S,target:b,isExternal:v.value,isActive:!1,isExactActive:!1})}return q("a",{ref:p,href:u,rel:S,target:b},(_=a.default)==null?void 0:_.call(a))}}})}const Fe=pe(Y);function j(e,t){const r=t==="append"?ee:te;return z(e)&&!e.startsWith("http")?e:r(e,!0)}function ye(){const e=I();if(e._observer)return e._observer;let t=null;const r=new Map,i=(n,s)=>(t||(t=new IntersectionObserver(o=>{for(const l of o){const d=r.get(l.target);(l.isIntersecting||l.intersectionRatio>0)&&d&&d()}})),r.set(n,s),t.observe(n),()=>{r.delete(n),t.unobserve(n),r.size===0&&(t.disconnect(),t=null)});return e._observer={observe:i}}function be(){const e=navigator.connection;return!!(e&&(e.saveData||/2g/.test(e.effectiveType)))}const Ve=C({__name:"BootstrapIcon",props:{name:{}},setup(e){return(t,r)=>(de(),H("i",{class:fe("bi bi-"+t.$props.name)},null,2))}});async function we(e,t){return await Se(t).catch(i=>(console.error("Failed to get image meta for "+t,i+""),{width:0,height:0,ratio:0}))}async function Se(e){if(typeof Image>"u")throw new TypeError("Image not supported");return new Promise((t,r)=>{const i=new Image;i.onload=()=>{const a={width:i.width,height:i.height,ratio:i.width/i.height};t(a)},i.onerror=a=>r(a),i.src=e})}function N(e){return t=>t?e[t]||t:e.missingValue}function _e({formatter:e,keyMap:t,joinWith:r="/",valueMap:i}={}){e||(e=(n,s)=>`${n}=${s}`),t&&typeof t!="function"&&(t=N(t));const a=i||{};return Object.keys(a).forEach(n=>{typeof a[n]!="function"&&(a[n]=N(a[n]))}),(n={})=>Object.entries(n).filter(([o,l])=>typeof l<"u").map(([o,l])=>{const d=a[o];return typeof d=="function"&&(l=d(n[o])),o=typeof t=="function"?t(o):o,e(o,l)}).join(r)}function w(e=""){if(typeof e=="number")return e;if(typeof e=="string"&&e.replace("px","").match(/^\d+$/g))return Number.parseInt(e,10)}function xe(e=""){if(e===void 0||!e.length)return[];const t=new Set;for(const r of e.split(" ")){const i=Number.parseInt(r.replace("x",""));i&&t.add(i)}return Array.from(t)}function Pe(e){if(e.length===0)throw new Error("`densities` must not be empty, configure to `1` to render regular size only (DPR 1.0)")}function ze(e){const t={};if(typeof e=="string")for(const r of e.split(/[\s,]+/).filter(i=>i)){const i=r.split(":");i.length!==2?t["1px"]=i[0].trim():t[i[0].trim()]=i[1].trim()}else Object.assign(t,e);return t}function ke(e){const t={options:e},r=(a,n={})=>U(t,a,n),i=(a,n={},s={})=>r(a,{...s,modifiers:T(n,s.modifiers||{})}).url;for(const a in e.presets)i[a]=(n,s,o)=>i(n,s,{...e.presets[a],...o});return i.options=e,i.getImage=r,i.getMeta=(a,n)=>Ie(t,a,n),i.getSizes=(a,n)=>$e(t,a,n),t.$img=i,i}async function Ie(e,t,r){const i=U(e,t,{...r});return typeof i.getMeta=="function"?await i.getMeta():await we(e,i.url)}function U(e,t,r){var d,v;if(t&&typeof t!="string")throw new TypeError(`input must be a string (received ${typeof t}: ${JSON.stringify(t)})`);if(!t||t.startsWith("data:"))return{url:t};const{provider:i,defaults:a}=Ce(e,r.provider||e.options.provider),n=qe(e,r.preset);if(t=z(t)?t:ie(t),!i.supportsAlias)for(const m in e.options.alias)t.startsWith(m)&&(t=k(e.options.alias[m],t.substr(m.length)));if(i.validateDomains&&z(t)){const m=M(t).host;if(!e.options.domains.find(p=>p===m))return{url:t}}const s=T(r,n,a);s.modifiers={...s.modifiers};const o=s.modifiers.format;(d=s.modifiers)!=null&&d.width&&(s.modifiers.width=w(s.modifiers.width)),(v=s.modifiers)!=null&&v.height&&(s.modifiers.height=w(s.modifiers.height));const l=i.getImage(t,s,e);return l.format=l.format||o||"",l}function Ce(e,t){const r=e.options.providers[t];if(!r)throw new Error("Unknown provider: "+t);return r}function qe(e,t){if(!t)return{};if(!e.options.presets[t])throw new Error("Unknown preset: "+t);return e.options.presets[t]}function $e(e,t,r){var u,b,S,g,_;const i=w((u=r.modifiers)==null?void 0:u.width),a=w((b=r.modifiers)==null?void 0:b.height),n=ze(r.sizes),s=(S=r.densities)!=null&&S.trim()?xe(r.densities.trim()):e.options.densities;Pe(s);const o=i&&a?a/i:0,l=[],d=[];if(Object.keys(n).length>=1){for(const f in n){const h=W(f,String(n[f]),a,o,e);if(h!==void 0){l.push({size:h.size,screenMaxWidth:h.screenMaxWidth,media:`(max-width: ${h.screenMaxWidth}px)`});for(const P of s)d.push({width:h._cWidth*P,src:R(e,t,r,h,P)})}}Ae(l)}else for(const f of s){const h=Object.keys(n)[0];let P=W(h,String(n[h]),a,o,e);P===void 0&&(P={size:"",screenMaxWidth:0,_cWidth:(g=r.modifiers)==null?void 0:g.width,_cHeight:(_=r.modifiers)==null?void 0:_.height}),d.push({width:f,src:R(e,t,r,P,f)})}je(d);const v=d[d.length-1],m=l.length?l.map(f=>`${f.media?f.media+" ":""}${f.size}`).join(", "):void 0,p=m?"w":"x",c=d.map(f=>`${f.src} ${f.width}${p}`).join(", ");return{sizes:m,srcset:c,src:v==null?void 0:v.src}}function W(e,t,r,i,a){const n=a.options.screens&&a.options.screens[e]||Number.parseInt(e),s=t.endsWith("vw");if(!s&&/^\d+$/.test(t)&&(t=t+"px"),!s&&!t.endsWith("px"))return;let o=Number.parseInt(t);if(!n||!o)return;s&&(o=Math.round(o/100*n));const l=i?Math.round(o*i):r;return{size:t,screenMaxWidth:n,_cWidth:o,_cHeight:l}}function R(e,t,r,i,a){return e.$img(t,{...r.modifiers,width:i._cWidth?i._cWidth*a:void 0,height:i._cHeight?i._cHeight*a:void 0},r)}function Ae(e){var r;e.sort((i,a)=>i.screenMaxWidth-a.screenMaxWidth);let t=null;for(let i=e.length-1;i>=0;i--){const a=e[i];a.media===t&&e.splice(i,1),t=a.media}for(let i=0;i<e.length;i++)e[i].media=((r=e[i+1])==null?void 0:r.media)||""}function je(e){e.sort((r,i)=>r.width-i.width);let t=null;for(let r=e.length-1;r>=0;r--){const i=e[r];i.width===t&&e.splice(r,1),t=i.width}}const Ne=_e({keyMap:{format:"f",fit:"fit",width:"w",height:"h",resize:"s",quality:"q",background:"b"},joinWith:"&",formatter:(e,t)=>A(e)+"_"+A(t)}),We=(e,{modifiers:t={},baseURL:r}={},i)=>{t.width&&t.height&&(t.resize=`${t.width}x${t.height}`,delete t.width,delete t.height);const a=Ne(t)||"_";return r||(r=k(i.options.nuxt.baseURL,"/_ipx")),{url:k(r,a,re(e))}},Re=!0,Be=!0,Me=Object.freeze(Object.defineProperty({__proto__:null,getImage:We,supportsAlias:Be,validateDomains:Re},Symbol.toStringTag,{value:"Module"})),D={screens:{xs:320,sm:640,md:768,lg:1024,xl:1280,xxl:1536,"2xl":1536},presets:{},provider:"ipxStatic",domains:[],alias:{},densities:[1,2],format:["webp"]};D.providers={ipxStatic:{provider:Me,defaults:{}}};const F=()=>{const e=O(),t=I();return t.$img||t._img||(t._img=ke({...D,nuxt:{baseURL:e.app.baseURL}}))};function Oe(e){var t;(t=performance==null?void 0:performance.mark)==null||t.call(performance,"mark_feature_usage",{detail:{feature:e}})}const Te={src:{type:String,default:void 0},format:{type:String,default:void 0},quality:{type:[Number,String],default:void 0},background:{type:String,default:void 0},fit:{type:String,default:void 0},modifiers:{type:Object,default:void 0},preset:{type:String,default:void 0},provider:{type:String,default:void 0},sizes:{type:[Object,String],default:void 0},densities:{type:String,default:void 0},preload:{type:Boolean,default:void 0},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0},alt:{type:String,default:void 0},referrerpolicy:{type:String,default:void 0},usemap:{type:String,default:void 0},longdesc:{type:String,default:void 0},ismap:{type:Boolean,default:void 0},loading:{type:String,default:void 0,validator:e=>["lazy","eager"].includes(e)},crossorigin:{type:[Boolean,String],default:void 0,validator:e=>["anonymous","use-credentials","",!0,!1].includes(e)},decoding:{type:String,default:void 0,validator:e=>["async","auto","sync"].includes(e)},nonce:{type:[String],default:void 0}},Ee=e=>{const t=y(()=>({provider:e.provider,preset:e.preset})),r=y(()=>({width:w(e.width),height:w(e.height),alt:e.alt,referrerpolicy:e.referrerpolicy,usemap:e.usemap,longdesc:e.longdesc,ismap:e.ismap,crossorigin:e.crossorigin===!0?"anonymous":e.crossorigin||void 0,loading:e.loading,decoding:e.decoding,nonce:e.nonce})),i=F(),a=y(()=>({...e.modifiers,width:w(e.width),height:w(e.height),format:e.format,quality:e.quality||i.options.quality,background:e.background,fit:e.fit}));return{options:t,attrs:r,modifiers:a}},He={...Te,placeholder:{type:[Boolean,String,Number,Array],default:void 0},placeholderClass:{type:String,default:void 0}},Ge=C({name:"NuxtImg",props:He,emits:["load","error"],setup:(e,t)=>{const r=F(),i=Ee(e),a=x(!1),n=x(),s=y(()=>r.getSizes(e.src,{...i.options.value,sizes:e.sizes,densities:e.densities,modifiers:{...i.modifiers.value,width:w(e.width),height:w(e.height)}})),o=y(()=>{const c={...i.attrs.value,"data-nuxt-img":""};return(!e.placeholder||a.value)&&(c.sizes=s.value.sizes,c.srcset=s.value.srcset),c}),l=y(()=>{let c=e.placeholder;if(c===""&&(c=!0),!c||a.value)return!1;if(typeof c=="string")return c;const u=Array.isArray(c)?c:typeof c=="number"?[c,c]:[10,10];return r(e.src,{...i.modifiers.value,width:u[0],height:u[1],quality:u[2]||50,blur:u[3]||3},i.options.value)}),d=y(()=>e.sizes?s.value.src:r(e.src,i.modifiers.value,i.options.value)),v=y(()=>l.value?l.value:d.value);if(e.preload){const c=Object.values(s.value).every(u=>u);he({link:[{rel:"preload",as:"image",nonce:e.nonce,...c?{href:s.value.src,imagesizes:s.value.sizes,imagesrcset:s.value.srcset}:{href:v.value}}]})}const p=I().isHydrating;return $(()=>{if(l.value){const c=new Image;c.src=d.value,e.sizes&&(c.sizes=s.value.sizes||"",c.srcset=s.value.srcset),c.onload=u=>{a.value=!0,t.emit("load",u)},Oe("nuxt-image");return}n.value&&(n.value.complete&&p&&(n.value.getAttribute("data-error")?t.emit("error",new Event("error")):t.emit("load",new Event("load"))),n.value.onload=c=>{t.emit("load",c)},n.value.onerror=c=>{t.emit("error",c)})}),()=>q("img",{ref:n,src:v.value,...o.value,...t.attrs,class:e.placeholder&&!a.value?[e.placeholderClass]:void 0})}});export{Fe as _,De as a,Ve as b,Ge as c};
