import{_ as j,a as M,b as V}from"./Dby7JapI.js";import{d as B,r as k,g as E,p as F,a as s,u as O,c as A,o,e,b as a,F as v,h as x,i as f,j as r,w as m,t as u,k as I,f as _}from"./DEemp6dc.js";const L=Symbol.for("nuxt:client-only"),R=B({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(S,{slots:i,attrs:g}){const D=k(!1);return E(()=>{D.value=!0}),F(L,!0),n=>{var c;if(D.value)return(c=i.default)==null?void 0:c.call(i);const l=i.fallback||i.placeholder;if(l)return l();const b=n.fallback||n.placeholder||"",y=n.fallbackTag||n.placeholderTag||"span";return s(y,g,b)}}}),U={class:"page_main container d-flex justify-content-between"},z={class:"div_page_left col-md-2 bg-light"},P=e("div",{class:"menu_title"},[e("div",null,"分類找商品")],-1),q={class:"menu_item"},G={class:"me-3"},H={class:"text d-flex align-items-center"},J={key:0},K={class:"div_page_right col-md-9 col-12 bg-light"},Q={class:"page_header_breadcrumb d-flex align-items-center"},W={class:"page_subItem d-flex align-items-center justify-content-between"},X={class:"page_itemBody"},Y={class:"d-flex align-items-baseline justify-content-between flex-wrap"},Z={class:""},tt={class:"title"},et={key:0},at={class:"point"},st=e("button",{class:"nutton d-none"},"點數兌換",-1),lt=B({__name:"index",setup(S){const{$MenuItemsData:i}=_(),g=i,n=O().currentRoute.value.params.category;let l=k();switch(n){case"好吃零食":const{$foodData:c}=_();l=c;break;case"品牌玩具":const{$toyData:d}=_();l=d;break;case"盲盒娃娃":const{$dollData:w}=_();l=w;break;case"生活用品":const{$supplyData:t}=_();l=t;break;case"其他好物":const{$otherData:p}=_();l=p;break}let b=k([]),y=k(!1);if(g.forEach((c,C)=>{c.title===n&&(b=c,y.value=!0)}),!y.value)throw A({statusCode:404,statusMessage:"Page Not Found",fatal:!0});return(c,C)=>{const d=j,$=M,w=V,N=R;return o(),s("div",U,[e("div",z,[P,a(),e("div",q,[e("ul",G,[(o(!0),s(v,null,x(f(g),(t,h)=>(o(),s("li",{key:h,class:"mx-3"},[r(d,{class:"d-flex align-items-center position-relative pb-2",to:{path:`${t.url.path}`,hash:`${t.url.hash}`}},{default:m(()=>[e("div",H,u(t.title),1)]),_:2},1032,["to"]),a(),t.subItem.length>0?(o(),s("div",J,[(o(!0),s(v,null,x(t.subItem,(p,T)=>(o(),s("div",{key:T,class:"page_Cat_Sub"},[r(d,{to:{path:`${p.sUrl.path}`,hash:`${p.sUrl.hash}`}},{default:m(()=>[a(u(p.sTitle),1)]),_:2},1032,["to"])]))),128))])):I("",!0)]))),128))])])]),a(),e("div",K,[e("div",Q,[r($,{name:"house-door-fill",class:"icon"}),a(),r($,{name:"chevron-double-right",class:"icon mx-2"}),a(),r(d,{to:{path:`/${f(n)}`,hash:""}},{default:m(()=>[a(u(f(n)),1)]),_:1},8,["to"])]),a(),e("div",W,[(o(!0),s(v,null,x(f(b).subItem,(t,h)=>(o(),s("div",{class:"subItem_text",key:h},u(t.sTitle),1))),128))]),a(),e("div",X,[r(N,null,{default:m(()=>[e("ul",Y,[(o(!0),s(v,null,x(f(l),(t,h)=>(o(),s("li",Z,[r(d,{class:"disabled-link",to:{path:"/",hash:""}},{default:m(()=>[r(w,{class:"lazyload",itemprop:"image",src:`${t.picture}`,"data-src":`${t.picture}`},null,8,["src","data-src"])]),_:2},1024),a(),e("div",tt,[a(u(t.name)+" ",1),t.spec!==""&&t.spec!=="無"?(o(),s("span",et," : "+u(t.spec),1)):I("",!0)]),a(),e("div",at,u(t.point)+` 菓子點
                            `,1),a(),st]))),256))])]),_:1})])])])}}});export{lt as default};
