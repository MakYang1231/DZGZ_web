import{s as F,r as P,x as V,y as G,z as R,A as J,B as Q,C as Z,D as X,u as B,d as $,E as y,G as z,g as M,H as Y,I as K,J as ee,K as q,L as te,M as I,N as E,O as ie,Q as re,R as O,f as C,S as ne,U as ae,V as se,o as oe,a as le,q as ce,W as ue,X as H,Y as de,Z as A}from"./rlhfd34B.js";function fe(e,t={}){const r=t.head||F();if(r)return r.ssr?r.push(e,t):he(r,e,t)}function he(e,t,r={}){const i=P(!1),n=P({});V(()=>{n.value=i.value?{}:Z(t)});const a=e.push(n.value,r);return G(n,o=>{a.patch(o)}),X()&&(R(()=>{a.dispose()}),J(()=>{i.value=!0}),Q(()=>{i.value=!1})),a}async function L(e,t=B()){const{path:r,matched:i}=t.resolve(e);if(!i.length||(t._routePreloaded||(t._routePreloaded=new Set),t._routePreloaded.has(r)))return;const n=t._preloadPromises=t._preloadPromises||[];if(n.length>4)return Promise.all(n).then(()=>L(e,t));t._routePreloaded.add(r);const a=i.map(s=>{var o;return(o=s.components)==null?void 0:o.default}).filter(s=>typeof s=="function");for(const s of a){const o=Promise.resolve(s()).catch(()=>{}).finally(()=>n.splice(n.indexOf(o)));n.push(o)}await Promise.all(n)}const ge=(...e)=>e.find(t=>t!==void 0);function ve(e){const t=e.componentName||"NuxtLink";function r(i,n){if(!i||e.trailingSlash!=="append"&&e.trailingSlash!=="remove")return i;if(typeof i=="string")return N(i,e.trailingSlash);const a="path"in i&&i.path!==void 0?i.path:n(i).path;return{...i,name:void 0,path:N(a,e.trailingSlash)}}return $({name:t,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1}},setup(i,{slots:n}){const a=B(),s=O(),o=y(()=>{const c=i.to||i.href||"";return r(c,a.resolve)}),u=y(()=>typeof o.value=="string"&&z(o.value,{acceptRelative:!0})),d=y(()=>i.target&&i.target!=="_self"),v=y(()=>i.external||d.value?!0:typeof o.value=="object"?!1:o.value===""||u.value),m=P(!1),p=P(null),l=c=>{var w;p.value=i.custom?(w=c==null?void 0:c.$el)==null?void 0:w.nextElementSibling:c==null?void 0:c.$el};if(i.prefetch!==!1&&i.noPrefetch!==!0&&i.target!=="_blank"&&!pe()){const w=C();let S,g=null;M(()=>{const _=me();Y(()=>{S=K(()=>{var f;(f=p==null?void 0:p.value)!=null&&f.tagName&&(g=_.observe(p.value,async()=>{g==null||g(),g=null;const h=typeof o.value=="string"?o.value:a.resolve(o.value).fullPath;await Promise.all([w.hooks.callHook("link:prefetch",h).catch(()=>{}),!v.value&&L(o.value,a).catch(()=>{})]),m.value=!0}))})})}),R(()=>{S&&ee(S),g==null||g(),g=null})}return()=>{var g,_;if(!v.value){const f={ref:l,to:o.value,activeClass:i.activeClass||e.activeClass,exactActiveClass:i.exactActiveClass||e.exactActiveClass,replace:i.replace,ariaCurrentValue:i.ariaCurrentValue,custom:i.custom};return i.custom||(m.value&&(f.class=i.prefetchedClass||e.prefetchedClass),f.rel=i.rel||void 0),q(te("RouterLink"),f,n.default)}const c=typeof o.value=="object"?((g=a.resolve(o.value))==null?void 0:g.href)??null:o.value&&!i.external&&!u.value?r(I(s.app.baseURL,o.value),a.resolve):o.value||null,w=i.target||null,S=ge(i.noRel?"":i.rel,e.externalRelAttribute,u.value||d.value?"noopener noreferrer":"")||null;if(i.custom){if(!n.default)return null;const f=()=>ne(c,{replace:i.replace,external:i.external});return n.default({href:c,navigate:f,get route(){if(!c)return;const h=E(c);return{path:h.pathname,fullPath:h.pathname,get query(){return ie(h.search)},hash:h.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:c}},rel:S,target:w,isExternal:v.value,isActive:!1,isExactActive:!1})}return q("a",{ref:p,href:c,rel:S,target:w},(_=n.default)==null?void 0:_.call(n))}}})}const Le=ve(re);function N(e,t){const r=t==="append"?ae:se;return z(e)&&!e.startsWith("http")?e:r(e,!0)}function me(){const e=C();if(e._observer)return e._observer;let t=null;const r=new Map,i=(a,s)=>(t||(t=new IntersectionObserver(o=>{for(const u of o){const d=r.get(u.target);(u.isIntersecting||u.intersectionRatio>0)&&d&&d()}})),r.set(a,s),t.observe(a),()=>{r.delete(a),t.unobserve(a),r.size===0&&(t.disconnect(),t=null)});return e._observer={observe:i}}function pe(){const e=navigator.connection;return!!(e&&(e.saveData||/2g/.test(e.effectiveType)))}const Ue=$({__name:"BootstrapIcon",props:{name:{}},setup(e){return(t,r)=>(oe(),le("i",{class:ce("bi bi-"+t.$props.name)},null,2))}});async function ye(e,t){return await we(t).catch(i=>(console.error("Failed to get image meta for "+t,i+""),{width:0,height:0,ratio:0}))}async function we(e){if(typeof Image>"u")throw new TypeError("Image not supported");return new Promise((t,r)=>{const i=new Image;i.onload=()=>{const n={width:i.width,height:i.height,ratio:i.width/i.height};t(n)},i.onerror=n=>r(n),i.src=e})}function j(e){return t=>t?e[t]||t:e.missingValue}function be({formatter:e,keyMap:t,joinWith:r="/",valueMap:i}={}){e||(e=(a,s)=>`${a}=${s}`),t&&typeof t!="function"&&(t=j(t));const n=i||{};return Object.keys(n).forEach(a=>{typeof n[a]!="function"&&(n[a]=j(n[a]))}),(a={})=>Object.entries(a).filter(([o,u])=>typeof u<"u").map(([o,u])=>{const d=n[o];return typeof d=="function"&&(u=d(a[o])),o=typeof t=="function"?t(o):o,e(o,u)}).join(r)}function b(e=""){if(typeof e=="number")return e;if(typeof e=="string"&&e.replace("px","").match(/^\d+$/g))return Number.parseInt(e,10)}function Se(e=""){if(e===void 0||!e.length)return[];const t=new Set;for(const r of e.split(" ")){const i=Number.parseInt(r.replace("x",""));i&&t.add(i)}return Array.from(t)}function _e(e){if(e.length===0)throw new Error("`densities` must not be empty, configure to `1` to render regular size only (DPR 1.0)")}function xe(e){const t={};if(typeof e=="string")for(const r of e.split(/[\s,]+/).filter(i=>i)){const i=r.split(":");i.length!==2?t["1px"]=i[0].trim():t[i[0].trim()]=i[1].trim()}else Object.assign(t,e);return t}function Pe(e){const t={options:e},r=(n,a={})=>U(t,n,a),i=(n,a={},s={})=>r(n,{...s,modifiers:H(a,s.modifiers||{})}).url;for(const n in e.presets)i[n]=(a,s,o)=>i(a,s,{...e.presets[n],...o});return i.options=e,i.getImage=r,i.getMeta=(n,a)=>ze(t,n,a),i.getSizes=(n,a)=>qe(t,n,a),t.$img=i,i}async function ze(e,t,r){const i=U(e,t,{...r});return typeof i.getMeta=="function"?await i.getMeta():await ye(e,i.url)}function U(e,t,r){var d,v;if(t&&typeof t!="string")throw new TypeError(`input must be a string (received ${typeof t}: ${JSON.stringify(t)})`);if(!t||t.startsWith("data:"))return{url:t};const{provider:i,defaults:n}=Ie(e,r.provider||e.options.provider),a=Ce(e,r.preset);if(t=z(t)?t:ue(t),!i.supportsAlias)for(const m in e.options.alias)t.startsWith(m)&&(t=I(e.options.alias[m],t.substr(m.length)));if(i.validateDomains&&z(t)){const m=E(t).host;if(!e.options.domains.find(p=>p===m))return{url:t}}const s=H(r,a,n);s.modifiers={...s.modifiers};const o=s.modifiers.format;(d=s.modifiers)!=null&&d.width&&(s.modifiers.width=b(s.modifiers.width)),(v=s.modifiers)!=null&&v.height&&(s.modifiers.height=b(s.modifiers.height));const u=i.getImage(t,s,e);return u.format=u.format||o||"",u}function Ie(e,t){const r=e.options.providers[t];if(!r)throw new Error("Unknown provider: "+t);return r}function Ce(e,t){if(!t)return{};if(!e.options.presets[t])throw new Error("Unknown preset: "+t);return e.options.presets[t]}function qe(e,t,r){var c,w,S,g,_;const i=b((c=r.modifiers)==null?void 0:c.width),n=b((w=r.modifiers)==null?void 0:w.height),a=xe(r.sizes),s=(S=r.densities)!=null&&S.trim()?Se(r.densities.trim()):e.options.densities;_e(s);const o=i&&n?n/i:0,u=[],d=[];if(Object.keys(a).length>=1){for(const f in a){const h=W(f,String(a[f]),n,o,e);if(h!==void 0){u.push({size:h.size,screenMaxWidth:h.screenMaxWidth,media:`(max-width: ${h.screenMaxWidth}px)`});for(const x of s)d.push({width:h._cWidth*x,src:k(e,t,r,h,x)})}}$e(u)}else for(const f of s){const h=Object.keys(a)[0];let x=W(h,String(a[h]),n,o,e);x===void 0&&(x={size:"",screenMaxWidth:0,_cWidth:(g=r.modifiers)==null?void 0:g.width,_cHeight:(_=r.modifiers)==null?void 0:_.height}),d.push({width:f,src:k(e,t,r,x,f)})}Ae(d);const v=d[d.length-1],m=u.length?u.map(f=>`${f.media?f.media+" ":""}${f.size}`).join(", "):void 0,p=m?"w":"x",l=d.map(f=>`${f.src} ${f.width}${p}`).join(", ");return{sizes:m,srcset:l,src:v==null?void 0:v.src}}function W(e,t,r,i,n){const a=n.options.screens&&n.options.screens[e]||Number.parseInt(e),s=t.endsWith("vw");if(!s&&/^\d+$/.test(t)&&(t=t+"px"),!s&&!t.endsWith("px"))return;let o=Number.parseInt(t);if(!a||!o)return;s&&(o=Math.round(o/100*a));const u=i?Math.round(o*i):r;return{size:t,screenMaxWidth:a,_cWidth:o,_cHeight:u}}function k(e,t,r,i,n){return e.$img(t,{...r.modifiers,width:i._cWidth?i._cWidth*n:void 0,height:i._cHeight?i._cHeight*n:void 0},r)}function $e(e){var r;e.sort((i,n)=>i.screenMaxWidth-n.screenMaxWidth);let t=null;for(let i=e.length-1;i>=0;i--){const n=e[i];n.media===t&&e.splice(i,1),t=n.media}for(let i=0;i<e.length;i++)e[i].media=((r=e[i+1])==null?void 0:r.media)||""}function Ae(e){e.sort((r,i)=>r.width-i.width);let t=null;for(let r=e.length-1;r>=0;r--){const i=e[r];i.width===t&&e.splice(r,1),t=i.width}}const Ne=be({keyMap:{format:"f",fit:"fit",width:"w",height:"h",resize:"s",quality:"q",background:"b"},joinWith:"&",formatter:(e,t)=>A(e)+"_"+A(t)}),je=(e,{modifiers:t={},baseURL:r}={},i)=>{t.width&&t.height&&(t.resize=`${t.width}x${t.height}`,delete t.width,delete t.height);const n=Ne(t)||"_";return r||(r=I(i.options.nuxt.baseURL,"/_ipx")),{url:I(r,n,de(e))}},We=!0,ke=!0,Re=Object.freeze(Object.defineProperty({__proto__:null,getImage:je,supportsAlias:ke,validateDomains:We},Symbol.toStringTag,{value:"Module"})),D={screens:{xs:320,sm:640,md:768,lg:1024,xl:1280,xxl:1536,"2xl":1536},presets:{},provider:"ipxStatic",domains:[],alias:{},densities:[1,2],format:["webp"]};D.providers={ipxStatic:{provider:Re,defaults:{}}};const T=()=>{const e=O(),t=C();return t.$img||t._img||(t._img=Pe({...D,nuxt:{baseURL:e.app.baseURL}}))};function Be(e){var t;(t=performance==null?void 0:performance.mark)==null||t.call(performance,"mark_feature_usage",{detail:{feature:e}})}const Me={src:{type:String,default:void 0},format:{type:String,default:void 0},quality:{type:[Number,String],default:void 0},background:{type:String,default:void 0},fit:{type:String,default:void 0},modifiers:{type:Object,default:void 0},preset:{type:String,default:void 0},provider:{type:String,default:void 0},sizes:{type:[Object,String],default:void 0},densities:{type:String,default:void 0},preload:{type:Boolean,default:void 0},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0},alt:{type:String,default:void 0},referrerpolicy:{type:String,default:void 0},usemap:{type:String,default:void 0},longdesc:{type:String,default:void 0},ismap:{type:Boolean,default:void 0},loading:{type:String,default:void 0,validator:e=>["lazy","eager"].includes(e)},crossorigin:{type:[Boolean,String],default:void 0,validator:e=>["anonymous","use-credentials","",!0,!1].includes(e)},decoding:{type:String,default:void 0,validator:e=>["async","auto","sync"].includes(e)},nonce:{type:[String],default:void 0}},Ee=e=>{const t=y(()=>({provider:e.provider,preset:e.preset})),r=y(()=>({width:b(e.width),height:b(e.height),alt:e.alt,referrerpolicy:e.referrerpolicy,usemap:e.usemap,longdesc:e.longdesc,ismap:e.ismap,crossorigin:e.crossorigin===!0?"anonymous":e.crossorigin||void 0,loading:e.loading,decoding:e.decoding,nonce:e.nonce})),i=T(),n=y(()=>({...e.modifiers,width:b(e.width),height:b(e.height),format:e.format,quality:e.quality||i.options.quality,background:e.background,fit:e.fit}));return{options:t,attrs:r,modifiers:n}},Oe={...Me,placeholder:{type:[Boolean,String,Number,Array],default:void 0},placeholderClass:{type:String,default:void 0}},De=$({name:"NuxtImg",props:Oe,emits:["load","error"],setup:(e,t)=>{const r=T(),i=Ee(e),n=P(!1),a=P(),s=y(()=>r.getSizes(e.src,{...i.options.value,sizes:e.sizes,densities:e.densities,modifiers:{...i.modifiers.value,width:b(e.width),height:b(e.height)}})),o=y(()=>{const l={...i.attrs.value,"data-nuxt-img":""};return(!e.placeholder||n.value)&&(l.sizes=s.value.sizes,l.srcset=s.value.srcset),l}),u=y(()=>{let l=e.placeholder;if(l===""&&(l=!0),!l||n.value)return!1;if(typeof l=="string")return l;const c=Array.isArray(l)?l:typeof l=="number"?[l,l]:[10,10];return r(e.src,{...i.modifiers.value,width:c[0],height:c[1],quality:c[2]||50,blur:c[3]||3},i.options.value)}),d=y(()=>e.sizes?s.value.src:r(e.src,i.modifiers.value,i.options.value)),v=y(()=>u.value?u.value:d.value);if(e.preload){const l=Object.values(s.value).every(c=>c);fe({link:[{rel:"preload",as:"image",nonce:e.nonce,...l?{href:s.value.src,imagesizes:s.value.sizes,imagesrcset:s.value.srcset}:{href:v.value}}]})}const p=C().isHydrating;return M(()=>{if(u.value){const l=new Image;l.src=d.value,e.sizes&&(l.sizes=s.value.sizes||"",l.srcset=s.value.srcset),l.onload=c=>{n.value=!0,t.emit("load",c)},Be("nuxt-image");return}a.value&&(a.value.complete&&p&&(a.value.getAttribute("data-error")?t.emit("error",new Event("error")):t.emit("load",new Event("load"))),a.value.onload=l=>{t.emit("load",l)},a.value.onerror=l=>{t.emit("error",l)})}),()=>q("img",{ref:a,src:v.value,...o.value,...t.attrs,class:e.placeholder&&!n.value?[e.placeholderClass]:void 0})}});export{Le as _,Ue as a,De as b};
