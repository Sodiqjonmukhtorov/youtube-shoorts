import{r as a,k as C,s as b,n as T,R as P,b as K,K as B,j as t,c as N,m as G,e as oe,f as re,i as ie,g as se,h as le,t as F,l as ce,q as de,v as ue}from"./index.js";const V=o=>{const[r,e]=a.useState(()=>typeof o=="function"?o():o),n=a.useRef(o);return a.useEffect(()=>{n.current=r},[r]),[r,s=>{const l=typeof s=="function"?s(n.current):s;n.current=l,e(l)},n]},me={scrollLayer:!1},D=new Map,A=o=>!!(o.touches&&o.touches.length>1)||(o.preventDefault(),!1),pe=(o,r)=>{if(typeof document>"u")return[!1,c=>c];const e=o||a.useRef(document.body),[n,s]=a.useState(!1),l={...me,...r||{}},i=()=>!l.scrollLayer&&!(typeof window>"u"||!window.navigator)&&/iP(ad|hone|od)/.test(window.navigator.platform);return a.useEffect(()=>{if(!e||!e.current)return;const c=e.current.style.overflow;if(n)return D.has(e.current)?void 0:(i()?document.addEventListener("touchmove",A,{passive:!1}):e.current.style.overflow="hidden",void D.set(e.current,{last:c}));if(D.has(e.current)){if(i())document.removeEventListener("touchmove",A);else{const u=D.get(e.current);e.current.style.overflow=u.last}D.delete(e.current)}},[n,e]),[n,s]},fe=C({"0%":{opacity:0},"60%":{opacity:.75},"100%":{opacity:1}}),I=C({"0%":{opacity:0}}),xe=C({"0%":{backdropFilter:"saturate(0%) blur(0)"}}),Y=b("div",{position:"relative",display:"inline-block",zIndex:"$max",outline:"none",width:"100%",margin:"$9 auto",verticalAlign:"middle","@sm":{width:"90%",maxWidth:"90%"},variants:{animated:{true:{"&":{animationName:fe,animationDuration:"200ms",animationTimingFunction:"ease-in",animationDirection:"normal"}},false:{transition:"none"}}}}),U=b("div",{position:"fixed",top:0,left:0,right:0,bottom:0,size:"100%",pe:"none",zIndex:"$max","@motion":{transition:"none"},variants:{blur:{true:{bg:"$black",opacity:"$$backdropOpacity","@supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none))":{opacity:1,backdropFilter:"saturate(180%) blur(20px)",animationName:`${xe}, ${I}`,bg:"rgba(0, 0, 0, 0.1)"}},false:{bg:"$black",opacity:"$$backdropOpacity",animationName:`${I}`,animationDuration:"0.2s",animationTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)"}},animated:{true:{animationName:`${I}`,animationDuration:"0.2s",animationTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)"},false:{transition:"none"}}}}),be=b("div",{position:"fixed",top:0,left:0,right:0,bottom:0,overflow:"auto",zIndex:"$max",WebkitOverflowScrolling:"touch",boxSizing:"border-box",textAlign:"center","&:before":{content:"",display:"inline-block",width:0,height:"100%",verticalAlign:"middle"},".nextui-backdrop-wrapper-enter .nextui-backdrop-layer-default":{opacity:0},".nextui-backdrop-wrapper-enter-active .nextui-backdrop-layer-default":{opacity:"$$backdropOpacity"},".nextui-backdrop-wrapper-leave .nextui-backdrop-layer-default":{opacity:"$$backdropOpacity"},".nextui-backdrop-wrapper-leave-active .nextui-backdrop-layer-default":{opacity:0},".nextui-backdrop-wrapper-enter .nextui-backdrop-layer-blur":{bg:"rgba(0, 0, 0, 0.1)"},".nextui-backdrop-wrapper-enter-active .nextui-backdrop-layer-blur":{bg:"rgba(0, 0, 0, 0.4)"},".nextui-backdrop-wrapper-leave .nextui-backdrop-layer-blur":{bg:"rgba(0, 0, 0, 0.4)"},".nextui-backdrop-wrapper-leave-active .nextui-backdrop-layer-blur":{bg:"rgba(0, 0, 0, 0.1)"},variants:{fullScreen:{true:{display:"inline-flex",overflow:"hidden",[`& ${Y}`]:{width:"100vw",maxWidth:"100vw",height:"100vh",margin:0},[`& ${U}`]:{display:"none"}}}},defaultVariants:{fullScreen:!1}}),y="nextui-backdrop",q=P.memo(({children:o,onClick:r,onKeyPress:e,visible:n,maxWidth:s,blur:l,animated:i,opacity:c,preventDefault:u,className:w,css:g,...p})=>{const[,f,h]=V(!1),k=d=>{h.current||r&&r(d)},S=a.useCallback(d=>{d.stopPropagation()},[]),M=()=>{if(!h.current)return;const d=setTimeout(()=>{f(!1),clearTimeout(d)},0)},{bindings:j}=K(d=>{e&&e(d)},[B.Escape,B.Space],{disableGlobalEvent:!0,preventDefault:u}),$=a.useMemo(()=>n?"open":"closed",[n]),m=a.useMemo(()=>t.jsxs(be,{"aria-hidden":!0,className:N(y,`${y}--${$}`,w),css:{$$backdropOpacity:c,...g},"data-state":$,role:"button",tabIndex:-1,onClick:k,onMouseUp:M,...j,...p,children:[t.jsx(U,{animated:i,blur:l,className:N(`${y}-layer`,l?`${y}-layer-blur`:`${y}-layer-default`)}),t.jsx(Y,{animated:i,className:`${y}-content`,css:{maxWidth:s},onClick:S,onMouseDown:()=>f(!0),children:o})]}),[o]);return t.jsx(t.Fragment,{children:i?t.jsx(G,{clearTime:150,enterTime:20,leaveTime:20,name:`${y}-wrapper`,visible:n,children:m}):n?m:null})});q.toString=()=>".nextui-backdrop";const ge=T(q,{onClick:()=>{},visible:!1,blur:!1,animated:!0,preventDefault:!0,opacity:.5,className:""}),he=C({"0%":{transform:"scale(0.95)"},"40%":{transform:"scale(1.02)"},"80%":{transform:"scale(0.98)"},"100%":{transform:"scale(1)"}}),$e=C({"0%":{opacity:0,transform:"scale(0.95)"},"60%":{opacity:.75,transform:"scale(1.02)"},"100%":{opacity:1,transform:"scale(1)"}}),ye=C({"0%":{opacity:1,transform:"scale(1)"},"100%":{opacity:0,transform:"scale(0.95)"}}),L=b("div",{outline:"none",overflow:"hidden",width:0,height:0,opacity:0}),J=b("button",{position:"absolute",background:"transparent",border:"none",zIndex:"$1",top:"$space$3",right:"$space$2",margin:0,d:"inline-flex",ai:"center",height:"auto",cursor:"pointer",boxSizing:"border-box",transition:"$default",padding:"calc($space$sm * 0.5)",color:"$accents4",br:"$space$5",svg:{color:"currentColor"},"&:hover":{svg:{opacity:.8}},variants:{disabled:{true:{cursor:"not-allowed"}}}},oe),ve=b("div",{display:"flex",flexShrink:0,ai:"center",ov:"hidden",color:"inherit",padding:"$sm $10",fs:"$xs",variants:{noPadding:{true:{padding:0}},autoMargin:{true:{"> *:first-child":{mt:0},"> *:last-child":{mb:0}}}}}),we=b("div",{display:"flex",flexDirection:"column",flex:"1 1 auto",padding:"$sm $10",oy:"auto",position:"relative",ta:"left",variants:{noPadding:{true:{flex:1,padding:0}},autoMargin:{true:{"> *:first-child":{mt:0},"> *":{mb:"$8"},"> *:last-child":{mb:0}}}}}),ke=b("div",{d:"flex",flexWrap:"wrap",flexShrink:0,overflow:"hidden",color:"inherit",ai:"center",fs:"$xs",padding:"$sm $lg",variants:{noPadding:{true:{padding:0}},autoMargin:{true:{"> *":{m:"$2"}}}}}),Se=b("section",{maxWidth:"100%",verticalAlign:"middle",overflow:"hidden",height:"fit-content(20em)",maxHeight:"inherit",display:"flex",outline:"none",flexDirection:"column",position:"relative",boxSizing:"border-box",color:"$foreground",br:"$lg",boxShadow:"$lg",bg:"$backgroundContrast",animationFillMode:"forwards","@motion":{transition:"none"},"&.nextui-modal-wrapper-enter:not(.nextui-modal-rendered)":{animationName:$e,animationDuration:"200ms",animationTimingFunction:"ease-in",animationDirection:"normal"},"&.nextui-modal-wrapper-leave":{animationName:ye,animationDuration:"50ms",animationTimingFunction:"ease-out"},variants:{fullScreen:{true:{size:"100%",maxHeight:"100%"},false:{"&.nextui-modal-rebound":{animationDuration:"250ms",animationName:he,animationTimingFunction:"ease",animationFillMode:"forwards"}}},scroll:{true:{maxHeight:"calc(100vh - 200px)"}},closeButton:{true:{paddingTop:"$lg",[`& ${J}`]:{svg:{size:"$10"}}}}},compoundVariants:[{scroll:!0,fullScreen:!0,css:{maxHeight:"100%"}}]}),Q=({onClick:o,...r})=>t.jsx(J,{"aria-label":"Close",className:"nextui-modal-close-icon",type:"button",onClick:e=>{e.preventDefault(),e.stopPropagation(),e.nativeEvent.stopImmediatePropagation(),o&&o(e)},...r,children:t.jsx(re,{plain:!0,"aria-hidden":!0,className:"nextui-modal-close-icon-svg",fill:"currentColor",size:18})});Q.toString=()=>".nextui-modal-close-icon";const Me=P.memo(Q),je=Me,x="nextui-modal",X=({className:o,children:r,visible:e,fullScreen:n,closeButton:s,rebound:l,animated:i,onCloseButtonClick:c,scroll:u,...w})=>{const g=a.useRef(null),p=a.useRef(null),f=a.useRef(null),[h,k]=a.useState(!1);a.useEffect(()=>{const m=setTimeout(()=>{k(!0),clearTimeout(m)},300);return()=>clearTimeout(m)},[]),a.useEffect(()=>{if(!e)return;const m=document.activeElement;ie(g.current,m)||p.current&&p.current.focus()},[e]);const S=m=>{const d=m.keyCode===B.Tab;if(!e||!d)return;const E=document.activeElement;m.shiftKey?E===p.current&&f.current&&f.current.focus():E===f.current&&p.current&&p.current.focus()},M=()=>{c&&c()},j=a.useMemo(()=>e?"open":"closed",[e]),$=a.useMemo(()=>t.jsxs(Se,{ref:g,"aria-modal":e,className:N(x,`${x}--${j}`,{[`${x}-fullscreen`]:n,[`${x}-with-close-button`]:s,[`${x}-rebound`]:l,[`${x}-rendered`]:h},o),closeButton:s,"data-state":j,fullScreen:n,role:"dialog",scroll:u,tabIndex:-1,...w,onKeyDown:S,children:[t.jsx(L,{ref:p,"aria-hidden":"true",className:`${x}-hide-tab`,role:"button",tabIndex:0}),s&&t.jsx(je,{onClick:M}),r,t.jsx(L,{ref:f,"aria-hidden":"true",className:`${x}-hide-tab`,role:"button",tabIndex:0})]}),[l,r]);return t.jsx(t.Fragment,{children:i?t.jsx(G,{clearTime:300,enterTime:20,leaveTime:20,name:`${x}-wrapper`,visible:e,children:$}):e?$:null})};X.toString=()=>".nextui-modal-wrapper";const Ne=T(X,{className:"",visible:!1,rebound:!1}),Ce={},z=P.createContext(Ce),R=({children:o,onClose:r,onOpen:e,open:n,autoMargin:s,width:l,className:i,preventClose:c,blur:u,animated:w,fullScreen:g,noPadding:p,...f})=>{const h=se("modal"),[,k]=pe(null,{scrollLayer:!0}),[S,M,j]=V(!1),[$,m]=a.useState(!1),d=()=>{r&&r(),M(!1),k(!1)};a.useEffect(()=>{n!==void 0&&(n&&e&&e(),!n&&j.current&&r&&r(),M(n),k(n))},[n]);const E=()=>{m(!0);const ae=setTimeout(()=>{m(!1),clearTimeout(ae)},300)},{bindings:te}=K(()=>{c?E():d()},B.Escape,{disableGlobalEvent:!0,preventDefault:!0}),ne=a.useMemo(()=>({close:d,autoMargin:s,noPadding:p}),[]);return h?le.createPortal(t.jsx(z.Provider,{value:ne,children:t.jsx(ge,{animated:w,blur:u,fullScreen:g,maxWidth:l,visible:S,onClick:()=>{c?E():d()},...te,children:t.jsx(Ne,{animated:w,className:i,fullScreen:g,rebound:$,visible:S,onCloseButtonClick:d,...f,children:o})})}),h):null};R.toString=()=>".nextui-modal",R.defaultProps={width:"400px",className:"",preventClose:!1,fullScreen:!1,closeButton:!1,animated:!0,blur:!1,scroll:!1,noPadding:!1};const v=R,H="nextui-modal-header",Z=({children:o,className:r,justify:e,autoMargin:n,css:s,...l})=>{const{autoMargin:i,noPadding:c}=a.useContext(z),u=a.useMemo(()=>i!==void 0?i:n,[n,i]);return t.jsx(ve,{autoMargin:u,className:N(H,{[`${H}-auto-margin`]:u,[`${H}-no-padding`]:c},r),css:{justifyContent:e,...s},noPadding:c,...l,children:o})};Z.toString=()=>".nextui-modal-header";const Pe=P.memo(Z),Ee=T(Pe,{className:"",justify:"center",autoMargin:!0}),O="nextui-modal-body",_=({className:o,children:r,autoMargin:e,...n})=>{const{autoMargin:s,noPadding:l}=a.useContext(z),i=a.useMemo(()=>s!==void 0?s:e,[e,s]);return t.jsx(we,{autoMargin:i,className:N(O,{[`${O}-auto-margin`]:i,[`${O}-no-padding`]:l},o),noPadding:l,...n,children:r})};_.toString=()=>".nextui-modal-body";const De=P.memo(_),Te=T(De,{className:"",autoMargin:!0}),W="nextui-modal-footer",ee=({children:o,className:r,justify:e,autoMargin:n,css:s,...l})=>{const{autoMargin:i,noPadding:c}=a.useContext(z),u=a.useMemo(()=>i!==void 0?i:n,[n,i]);return t.jsx(ke,{autoMargin:u,className:N(W,{[`${W}-auto-margin`]:u,[`${W}-no-padding`]:c},r),css:{justifyContent:e,...s},noPadding:c,...l,children:o})};ee.toString=()=>".nextui-modal-footer";const Fe=P.memo(ee),Be=T(Fe,{className:"",justify:"flex-end",autoMargin:!0});v.Header=Ee,v.Body=Te,v.Footer=Be;const Ie=()=>{const[o,r]=a.useState(!1),[e,n]=a.useState(!1);a.useEffect(()=>{(async()=>{try{const i=await de();r(i),n(i)}catch(i){console.error("Error fetching switch data:",i)}})()},[]);const s=()=>{ue(),n(!1)};return o&&t.jsxs(v,{closeButton:!0,blur:!0,"aria-labelledby":"modal-title",open:e,onClose:s,className:"max-h-[440px]",children:[t.jsxs(v.Header,{className:"absolute flex flex-col items-start top-0",children:[t.jsx(F,{className:"font-semibold",size:16,children:"What's New In 1.6.15.4"}),t.jsx(F,{className:"text-[12px]",children:"Aug 14, 2023"})]}),t.jsxs(v.Body,{className:"mt-[50px]",children:[t.jsx(F,{className:"added mb-4",children:"Fixed Pro Prices"}),t.jsxs(F,{className:"text-[13px] mb-2",children:["Fixed the prices on the 'Get Pro' screen which were showing incorrectly, but were shown correctly on the checkout screen",t.jsx("br",{}),t.jsx("br",{}),"HYS Monthly - ",t.jsx("strong",{children:"$2.50"})," p/mo",t.jsx("br",{}),"HYS Yearly - ",t.jsx("strong",{children:"$25.00"})," p/yr",t.jsx("br",{}),t.jsx("br",{}),"Use code ",t.jsx("strong",{children:"'HYSSAVE30'"})," at checkout to save ",t.jsx("strong",{children:"30% off"})," your first month/year"]})]}),t.jsx(v.Footer,{children:t.jsx(ce,{flat:!0,color:"none",className:"w-full",onPress:s,children:"Close"})})]})};export{Ie as default};