import{_ as G}from"./yU7ezJDP.js";import{_ as F}from"./cVmkR8Ef.js";import{_ as V,a as Z}from"./C04SOAgQ.js";import{u as A,a as E,b as P,_ as R}from"./qQA-uQ23.js";import{d as q,a as l,M as W,y as _,z as i,B as e,A as s,D as t,G as c,a2 as X,T as J,O as N,a3 as K,a4 as Q,u as b,N as O,W as U,X as Y,P as D,C}from"./CTCtpd9K.js";const x=u=>(U("data-v-00143c68"),u=u(),Y(),u),ee={class:"Head_content nav_height d-flex align-items-center justify-content-around"},ae={class:"main_item d-flex flex-column align-items-center"},te={class:"toolItem d-flex align-items-center justify-content-around"},se={class:"item search"},oe={class:"item cart"},ne={class:"item user"},le=x(()=>e("footer",{class:"Footer_root"},[e("div",{class:"bg-warning d-flex align-items-center justify-content-center mt-5"},`
            FOOTER
        `)],-1)),_e={class:"MainNav_wrapper"},ie={class:"MainNav_close"},re={class:"MainNav_navNav"},ce=x(()=>e("ul",{class:"MainNav_menu"},[e("li",{class:"MainNav_menu_logo"},[e("p",null,"目錄")])],-1)),de={class:"MainNav_menu MainNav_Cat",id:"MainNav_menu"},ue=["id"],me=["id"],pe={class:"preIcon"},ve=["id","aria-labelledby"],Me=["id"],fe={class:"preIcon"},ge=q({__name:"custom-layout",async setup(u){let m,$;A().currentRoute.value;const H=l(),w=l(),B=l(),I=l(),M=l(),h=l(),k=l([]),f=l(!1),j=()=>{f.value=!0,M.value.style.animation="menuPaper_show 225ms cubic-bezier(0, 0, 0.2, 1) 0ms",document.body.style.overflow="hidden"},d=()=>{f.value=!1,M.value.style.animation="menuPaper_hide 225ms cubic-bezier(0, 0, 0.2, 1) 0ms",h.value.scrollTo(0,0),document.body.style.overflow="",k.value.forEach((g,o)=>{g.classList.remove("show")})},{$MenuItemsData:z}=P(),S=z;return[m,$]=W(()=>E("https://isnmk.com/api/categories","$skkuo4NVMT")),m=await m,$(),(g,o)=>{const r=G,y=F,p=V,L=Z;return _(),i(N,null,[e("header",{class:"Header_root nav_height sticky-top",ref_key:"DOM_Header_root",ref:H},[e("div",ee,[e("div",{class:"menu_button",onClick:o[0]||(o[0]=a=>{j()})},[s(r,{name:"list"})]),t(),e("div",{class:"logo d-flex align-items-center justify-content-around",ref_key:"DOM_Header_logo",ref:w},[s(p,{to:"/"},{default:c(()=>[s(y,{class:"lazyload",itemprop:"image",src:"images/logo/DZGZ_logo.png","data-src":"images/logo/DZGZ_logo.png",title:"彈珠菓子_LOGO",alt:"彈珠菓子_LOGO"})]),_:1})],512),t(),e("div",ae,[e("div",{class:"item_top",ref_key:"DOM_Header_mitem_top",ref:B},"士林夜市即時戰力榜",512)]),t(),e("div",te,[e("div",se,[s(r,{name:"search"})]),t(),e("div",oe,[s(r,{name:"cart-plus-fill"})]),t(),e("div",ne,[s(r,{name:"person-plus-fill"})])])])],512),t(),X(g.$slots,"default",{},void 0,!0),t(),le,t(),s(J,{name:"Menufade"},{default:c(()=>[K(e("div",{class:"MenuModule position-fixed",ref_key:"DOM_MenuModule",ref:I},[e("div",{class:"MenuModule_backdrop position-fixed d-flex align-items-center justify-content-center",onClick:o[1]||(o[1]=a=>{d()})}),t(),e("div",{class:"MenuModule_paper d-flex flex-column position-fixed",ref_key:"DOM_MenuModule_paper",ref:M},[e("nav",{ref_key:"DOM_MenuModule_Nav",ref:h},[e("div",_e,[e("div",ie,[s(r,{name:"x-square ",class:"icon",onClick:o[2]||(o[2]=a=>{d()})})]),t(),e("div",re,[ce,t(),e("ul",de,[s(L,null,{default:c(()=>[(_(!0),i(N,null,O(b(S),(a,n)=>(_(),i("li",{key:n,class:"MainNav_Cat_link",id:`MainNav_Cat_link_${n}`},[a.sub_categories?(_(),i("div",{key:0,class:D(`MainNav_Cat_item MainNav_Cat_item_${n}`)},[e("div",{class:"MainNav_Cat_Head",id:`MainNav_Cat_Head_${n}`},[s(p,{to:`/${a.category_url}`,class:"d-flex align-items-center justify-content-center",onClick:o[3]||(o[3]=v=>{d()}),type:"button"},{default:c(()=>[e("div",pe,[s(y,{class:"lazyload",itemprop:"image",src:`/images/Header/${a.category_url}.png`,"data-src":`/images/Header/${a.category_url}.png`,title:`Menu_icon_${a.category_url}`,alt:`Menu_icon_${a.category_url}`},null,8,["src","data-src","title","alt"])]),t(" "+C(a.category_name),1)]),_:2},1032,["to"]),t(),s(r,{name:"plus-lg",class:"icon",type:"button","data-bs-toggle":"collapse","data-bs-target":`#MainNav_Cat_Body_${n}`,"aria-expanded":"false","aria-controls":`MainNav_Cat_Body_${n}`},null,8,["data-bs-target","aria-controls"])],8,me),t(),e("div",{id:`MainNav_Cat_Body_${n}`,class:"MainNav_Cat_Body collapse",ref_for:!0,ref_key:"DOM_CollBady",ref:k,"aria-labelledby":`MainNav_Cat_Head_${n}`,"data-bs-parent":"#MainNav_menu"},[(_(!0),i(N,null,O(a.sub_categories,(v,T)=>(_(),i("div",{key:T,class:"MainNav_Cat_Sub"},[s(p,{to:`/${a.category_url}/${v.sub_url}`,onClick:o[4]||(o[4]=ye=>{d()})},{default:c(()=>[t(C(v.sub_name),1)]),_:2},1032,["to"])]))),128))],8,ve)],2)):(_(),i("div",{key:1,class:D(`MainNav_Cat_item MainNav_Cat_item_${n}`)},[e("div",{class:"MainNav_Cat_Head",id:`MainNav_Cat_Head_${n}`},[s(p,{to:`/${a.category_url}`,class:"d-flex align-items-center justify-content-center",onClick:o[5]||(o[5]=v=>{d()}),type:"button"},{default:c(()=>[e("div",fe,[s(y,{class:"lazyload",itemprop:"image",src:`/images/Header/${a.category_url}.png`,"data-src":`/images/Header/${a.category_url}.png`,title:`Menu_icon_${a.category_url}`,alt:`Menu_icon_${a.category_url}`},null,8,["src","data-src","title","alt"])]),t(" "+C(a.category_name),1)]),_:2},1032,["to"])],8,Me)],2))],8,ue))),128))]),_:1})])])])],512)],512)],512),[[Q,b(f)]])]),_:1})],64)}}}),be=R(ge,[["__scopeId","data-v-00143c68"]]);export{be as default};
