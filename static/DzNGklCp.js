import{_ as J,a as K,b as Q,c as W}from"./DcBFexhK.js";import{d as X,u as Y,r as u,o as tt,t as F,c as et,w as st,a,b as l,e as s,f as n,g as _,h as p,i,F as C,j as k,n as v,k as ot,l as f,m as P,p as nt}from"./Bv_1NjIn.js";import{f as at}from"./clxyF2lu.js";const lt={class:"page_main container d-flex justify-content-between"},it={class:"div_page_left col-md-2 bg-light"},rt=s("div",{class:"menu_title"},[s("div",null,"分類找商品")],-1),ct={class:"menu_item"},_t={class:"me-3"},ut={class:"text d-flex align-items-center"},dt={key:0},pt={class:"div_page_right col-md-9 col-12 bg-light"},mt={class:"page_header_breadcrumb d-flex align-items-center"},ft={class:"page_subItem d-flex align-items-center justify-content-between flex-wrap"},gt={class:"d-flex align-items-center justify-content-start control_bar"},vt=s("div",{class:"control_label"},"篩選",-1),ht={class:"control_options"},yt={class:"page_itemBody mt-3"},xt={class:"d-flex align-items-baseline justify-content-between flex-wrap"},bt={class:""},Ct={class:"title"},kt={key:0},wt={class:"point"},$t=s("button",{class:"nutton d-none"},"點數兌換",-1),Ft=X({__name:"index",async setup(Bt){let h,w;const y=Y().currentRoute.value.params.category;let $=u(!1),x=u([]),B=u([]);const N=u(null),{$MenuItemsData:T}=nt(),D=u(T);let r=u(),S=u([]);const m=u("");u(),tt(()=>{if(D.value.forEach((e,t)=>{e.category_url===y&&(x=F(e),console.log(x),N.value.textContent=x.category_name,B.value=x.sub_categories,$.value=!0)}),!$.value)throw console.log("Not ==="),et({statusCode:404,statusMessage:"Page Not Found",fatal:!0})});const{data:H,refresh:Dt}=([h,w]=st(()=>ot(`https://isnmk.com/api/${y}`,"$lUdZf5FrkZ")),h=await h,w(),h);r=F(H.value);const g=e=>{m.value=e},I=(e,t)=>{let c=e.last_30days_sales*e.point,d=t.last_30days_sales*t.point;return c=c<=0?e.point:c,d=d<=0?t.point:d,d-c},L=(e,t)=>new Date(e.timestamp).getTime()-new Date(t.timestamp).getTime(),V=(e,t)=>(e.point===""&&(e.last_30days_sales="0"),t.point===""&&(t.last_30days_sales="0"),t.last_30days_sales-e.last_30days_sales),A=(e,t)=>(e.point===""&&(e.point="99999"),t.point===""&&(t.point="99999"),t.point-e.point),E=(e,t)=>(e.point===""&&(e.point="99999"),t.point===""&&(t.point="99999"),e.point-t.point);for(let e in r)S.value.push(r[e]);r=S;const O=()=>{r.value.sort(I)},R=()=>{r.value.sort(L)},z=()=>{r.value.sort(V)},Z=()=>{r.value.sort(A)},U=()=>{r.value.sort(E)};return(e,t)=>{const c=J,d=K,M=Q,q=W;return a(),l("div",lt,[s("div",it,[rt,n(),s("div",ct,[s("ul",_t,[_(d,null,{default:p(()=>[(a(!0),l(C,null,k(i(D),(o,b)=>(a(),l("li",{key:b,class:"mx-3"},[_(c,{class:"d-flex align-items-center position-relative pb-2",to:`/${o.category_url}`},{default:p(()=>[s("div",ut,f(o.category_name),1)]),_:2},1032,["to"]),n(),o.sub_categories?(a(),l("div",dt,[(a(!0),l(C,null,k(o.sub_categories,(j,G)=>(a(),l("div",{key:G,class:"page_Cat_Sub"},[_(c,{to:`/${o.category_url}/${j.sub_url}`},{default:p(()=>[n(f(j.sub_name),1)]),_:2},1032,["to"])]))),128))])):P("",!0)]))),128))]),_:1})])])]),n(),s("div",pt,[s("div",mt,[_(M,{name:"house-door-fill",class:"icon"}),n(),_(M,{name:"chevron-double-right",class:"icon mx-2"}),n(),_(c,{to:{path:`/${i(y)}`,hash:""}},{default:p(()=>[s("div",{ref_key:"DOM_ch_category",ref:N},null,512)]),_:1},8,["to"])]),n(),s("div",ft,[(a(!0),l(C,null,k(i(B),(o,b)=>(a(),l("div",{class:"subItem_text bg-light col-4 col-md-3",key:b},[_(c,{to:`/${i(y)}/${o.sub_url}`},{default:p(()=>[n(f(o.sub_name),1)]),_:2},1032,["to"])]))),128))]),n(),s("div",gt,[vt,n(),s("div",ht,[s("button",{class:v({active:i(m)==="complex"}),onClick:t[0]||(t[0]=o=>{g("complex"),O()})},"綜合排名",2),n(),s("button",{class:v({active:i(m)==="time"}),onClick:t[1]||(t[1]=o=>{g("time"),R()})},"最新",2),n(),s("button",{class:v({active:i(m)==="hot"}),onClick:t[2]||(t[2]=o=>{g("hot"),z()})},"最熱銷",2),n(),s("button",{class:v({active:i(m)==="point_height"}),onClick:t[3]||(t[3]=o=>{g("point_height"),Z()})},"點數高",2),n(),s("button",{class:v({active:i(m)==="point_low"}),onClick:t[4]||(t[4]=o=>{g("point_low"),U()})},"點數低",2)])]),n(),s("div",yt,[_(d,null,{default:p(()=>[s("ul",xt,[(a(!0),l(C,null,k(i(r),(o,b)=>(a(),l("li",bt,[_(c,{class:"disabled-link",to:{path:"/",hash:""}},{default:p(()=>[_(q,{class:"lazyload",itemprop:"image",src:`${o.picture_url}`,"data-src":`${o.picture_url}`},null,8,["src","data-src"])]),_:2},1024),n(),s("div",Ct,[n(f(o.item_name)+" ",1),o.spec!==""&&o.spec!=="無"?(a(),l("span",kt," : "+f(o.spec),1)):P("",!0)]),n(),s("div",wt,f(("formatNumber"in e?e.formatNumber:i(at))(o.point))+` 菓子點
                            `,1),n(),$t]))),256))])]),_:1})])])])}}});export{Ft as default};
