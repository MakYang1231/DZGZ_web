import{_ as N,a as V}from"./D_TQDmU0.js";import{d as F,N as P,x as L,a as v,M as q,k as A,z as i,A as l,u as s,D as e,B as c,F as o,E as r,C as u,O as p,P as w,Z as H,H as _,V as W,$ as Y,a0 as z,a1 as O,W as U,X,Y as Z}from"./CB_E7rYp.js";import{u as G,a as J,_ as K}from"./CV9-J-Yb.js";const g=f=>(U("data-v-1149e26e"),f=f(),X(),f),Q={key:0,class:"infoMain container mt-2 d-flex flex-wrap justify-content-center"},ee={class:"itemInfoDiv"},se={class:"tags d-flex"},te={class:"title"},oe={class:"fw-normal fs-5"},ne={class:"itemSwiperDiv"},ie=["src"],ae={class:"itemInfoDiv"},le={class:"point fs-5 d-flex justify-content-end align-items-baseline"},re=g(()=>e("div",{class:"text pe-3"},[e("strong",null,"菓子點")],-1)),ce={class:"number fs-1"},de={key:1,class:"infoMain container mt-4 d-flex justify-content-left"},ue={class:"itemSwiperDiv",style:{width:"510px"}},_e=["src"],pe={key:0,class:"videoDiv position-relative"},fe=["src","poster"],me=g(()=>e("div",{class:"play-thumbs"},[e("div",{class:"youtube-play-button"},[e("div",{class:"play-icon"})])],-1)),he={class:"itemInfoDiv"},ve={class:"tags d-flex"},we={class:"title"},ge={class:"fw-normal fs-5"},ye={class:"point fs-5 d-flex justify-content-start"},be=g(()=>e("div",{class:"text pe-3"},[e("strong",null,"菓子點")],-1)),Se={class:"number fs-1"},xe=g(()=>e("hr",null,null,-1)),$e={class:"detailImageDiv container d-flex flex-wrap justify-content-center mt-5"},ke={class:"child_image"},De=["src","data-src"],Ce=F({__name:"[id]",async setup(f){let m,D;const C=G().currentRoute.value,T=C.query.category,B=C.query.itemCode,{data:R,refresh:Ie}=([m,D]=P(()=>J(`https://isnmk.com/api/${T}`,"$FRYjk9Ro18")),m=await m,D(),m),a=L(R.value).find(t=>t.item_code===B),y=t=>/^https.*\.mp4$/i.test(t);let d=v();const I=v(""),E=v(!1),b=()=>{typeof window<"u"&&(E.value=window.innerWidth<767)};q(()=>{if(typeof window<"u"&&(window.addEventListener("resize",b),b()),d.value=a.product_picture_url_list,I.value=d.value[0].url,a.product_video_url&&a.product_video_url!==""){const t={url:a.product_video_url};d.value.unshift(t)}else console.log("[Error] can not find product_video_url!")}),A(()=>{typeof window<"u"&&window.removeEventListener("resize",b)});const j=v(null),M=t=>{j.value=t};return(t,je)=>{const h=N,S=V,x=Z,$=H;return i(),l(p,null,[s(E)?(i(),l("div",Q,[e("div",ee,[e("div",se,[c(h,{name:"tags-fill",class:"icon me-2"}),o(),e("strong",null,r(s(a).main_category),1),o(),c(h,{name:"chevron-double-right",class:"icon mx-2"}),o(),e("strong",null,r(s(a).sub_category),1)]),o(),e("div",te,[e("h2",oe,r(s(a).item_name),1)])]),o(),e("div",ne,[c($,{class:"swiper_thumbs_main",modules:["SwiperPagination"in t?t.SwiperPagination:s(W),"SwiperEffectCoverflow"in t?t.SwiperEffectCoverflow:s(Y)],"slides-per-view":1,loop:!1,effect:"coverflow","coverflow-effect":{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0},pagination:{clickable:!0}},{default:u(()=>[(i(!0),l(p,null,w(s(d),(n,k)=>(i(),_(x,{class:"d-flex align-items-baseline justify-content-between flex-wrap"},{default:u(()=>[y(n.url)?(i(),l("video",{key:0,src:`${n.url}`,controls:"",loop:"",muted:"",autoplay:""},null,8,ie)):(i(),_(S,{key:1,class:"lazyload",itemprop:"image",src:`${n.url}`,"data-src":`${n.url}`},null,8,["src","data-src"]))]),_:2},1024))),256))]),_:1},8,["modules"])]),o(),e("div",ae,[e("div",le,[re,o(),e("div",ce,[e("strong",null,r(s(a).point),1)])])])])):(i(),l("div",de,[e("div",ue,[c($,{class:"swiper_thumbs_main",modules:["SwiperThumbs"in t?t.SwiperThumbs:s(z),"SwiperEffectCreative"in t?t.SwiperEffectCreative:s(O)],thumbs:{swiper:s(j)},"slides-per-view":1,loop:!1,effect:"creative","creative-effect":{prev:{shadow:!1,translate:["-20%",0,-1]},next:{translate:["100%",0,0]}}},{default:u(()=>[(i(!0),l(p,null,w(s(d),(n,k)=>(i(),_(x,{class:"d-flex align-items-baseline justify-content-between flex-wrap"},{default:u(()=>[y(n.url)?(i(),l("video",{key:0,src:`${n.url}`,controls:"",loop:"",muted:"",autoplay:""},null,8,_e)):(i(),_(S,{key:1,class:"lazyload",itemprop:"image",src:`${n.url}`,"data-src":`${n.url}`},null,8,["src","data-src"]))]),_:2},1024))),256))]),_:1},8,["modules","thumbs"]),o(),c($,{class:"swiper_thumbs_bottom",autoHeight:!0,modules:["SwiperThumbs"in t?t.SwiperThumbs:s(z)],onSwiper:M,"watch-slides-progress":!0,"slides-per-view":4,"space-between":40,"grab-cursor":!0,loop:!1},{default:u(()=>[(i(!0),l(p,null,w(s(d),(n,k)=>(i(),_(x,{class:"d-flex align-items-baseline justify-content-between flex-wrap"},{default:u(()=>[y(n.url)?(i(),l("div",pe,[e("video",{src:`${n.url}`,muted:"",poster:`${s(I)}`},null,8,fe),o(),me])):(i(),_(S,{key:1,class:"lazyload",itemprop:"image",src:`${n.url}`,"data-src":`${n.url}`},null,8,["src","data-src"]))]),_:2},1024))),256))]),_:1},8,["modules"])]),o(),e("div",he,[e("div",ve,[c(h,{name:"tags-fill",class:"icon me-4"}),o(),e("strong",null,r(s(a).main_category),1),o(),c(h,{name:"chevron-double-right",class:"icon mx-2"}),o(),e("strong",null,r(s(a).sub_category),1)]),o(),e("div",we,[e("h2",ge,r(s(a).item_name),1)]),o(),e("div",ye,[be,o(),e("div",Se,[e("strong",null,r(s(a).point),1)])]),o(),xe])])),o(),e("div",$e,[(i(!0),l(p,null,w(s(a).product_detail_picture_url_list,(n,k)=>(i(),l("div",ke,[e("img",{src:`${n.url}`,"data-src":`${n.url}`},null,8,De)]))),256))])],64)}}}),Re=K(Ce,[["__scopeId","data-v-1149e26e"]]);export{Re as default};
