import{a as E,_ as I}from"./Bz2bvZB4.js";import{d as N,N as R,x as F,a as k,M as V,z as o,A as l,D as e,B as u,C as d,u as a,F as r,E as _,O as p,P as f,Z as z,H as m,$ as C,a0 as M,Y as q}from"./Dpei8Fnb.js";import{u as A,a as H}from"./Ct6YtRlB.js";const Y={class:"infoMain container mt-4 d-flex justify-content-left"},L={class:"itemSwiperDiv",style:{width:"510px"}},O=["src"],P=["src"],Z={class:"itemInfoDiv"},G={class:"tags d-flex"},J={class:"title"},K={class:"fw-normal fs-5"},Q={class:"point fs-5 d-flex justify-content-start"},U=e("div",{class:"text pe-3"},[e("strong",null,"菓子點")],-1),W={class:"number fs-1"},X=e("hr",null,null,-1),ee={class:"detailImageDiv container d-flex flex-wrap justify-content-center mt-5"},te={class:"child_image"},se=["src","data-src"],ue=N({__name:"[id]",async setup(oe){let i,h;const v=A().currentRoute.value,D=v.query.category,j=v.query.itemCode,{data:T,refresh:ae}=([i,h]=R(()=>H(`https://isnmk.com/api/${D}`,"$FRYjk9Ro18")),i=await i,h(),i),n=F(T.value).find(t=>t.item_code===j),w=t=>/^https.*\.mp4$/i.test(t);let c=k();V(()=>{if(c.value=n.product_picture_url_list,n.product_video_url&&n.product_video_url!==""){const t={url:n.product_video_url};c.value.unshift(t)}else console.log("[Error] can not find product_video_url!")});const g=k(null),B=t=>{g.value=t};return(t,ne)=>{const b=E,y=q,x=z,S=I;return o(),l(p,null,[e("div",Y,[e("div",L,[u(x,{class:"swiper_thumbs_main",modules:["SwiperThumbs"in t?t.SwiperThumbs:a(C),"SwiperEffectCreative"in t?t.SwiperEffectCreative:a(M)],thumbs:{swiper:a(g)},"slides-per-view":1,loop:!1,effect:"creative","creative-effect":{prev:{shadow:!1,translate:["-20%",0,-1]},next:{translate:["100%",0,0]}}},{default:d(()=>[(o(!0),l(p,null,f(a(c),(s,$)=>(o(),m(y,{class:"d-flex align-items-baseline justify-content-between flex-wrap"},{default:d(()=>[w(s.url)?(o(),l("video",{key:0,src:`${s.url}`,controls:"",loop:"",muted:"",autoplay:""},null,8,O)):(o(),m(b,{key:1,class:"lazyload",itemprop:"image",src:`${s.url}`,"data-src":`${s.url}`},null,8,["src","data-src"]))]),_:2},1024))),256))]),_:1},8,["modules","thumbs"]),r(),u(x,{class:"swiper_thumbs_bottom",autoHeight:!0,modules:["SwiperThumbs"in t?t.SwiperThumbs:a(C)],onSwiper:B,"watch-slides-progress":!0,"slides-per-view":4,"space-between":40,"grab-cursor":!0,loop:!1},{default:d(()=>[(o(!0),l(p,null,f(a(c),(s,$)=>(o(),m(y,{class:"d-flex align-items-baseline justify-content-between flex-wrap"},{default:d(()=>[w(s.url)?(o(),l("video",{key:0,src:`${s.url}`,muted:""},null,8,P)):(o(),m(b,{key:1,class:"lazyload",itemprop:"image",src:`${s.url}`,"data-src":`${s.url}`},null,8,["src","data-src"]))]),_:2},1024))),256))]),_:1},8,["modules"])]),r(),e("div",Z,[e("div",G,[u(S,{name:"tags-fill",class:"icon me-4"}),r(),e("strong",null,_(a(n).main_category),1),r(),u(S,{name:"chevron-double-right",class:"icon mx-2"}),r(),e("strong",null,_(a(n).sub_category),1)]),r(),e("div",J,[e("h2",K,_(a(n).item_name),1)]),r(),e("div",Q,[U,r(),e("div",W,[e("strong",null,_(a(n).point),1)])]),r(),X])]),r(),e("div",ee,[(o(!0),l(p,null,f(a(n).product_detail_picture_url_list,(s,$)=>(o(),l("div",te,[e("img",{src:`${s.url}`,"data-src":`${s.url}`},null,8,se)]))),256))])],64)}}});export{ue as default};
