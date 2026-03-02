import{j as s,r as xo}from"./index-Cws_IRuu.js";import{r as c}from"./index-C5e9SFkp.js";import{Q as fe,a as $n,G as mr,R as wo,H as xn,T as So,U as _o,C as Io,i as He,c as Re,u as To,p as ke,f as Le,F as oe,I as Se,W as Me,q as C,v as xe,X as mt,S as jt,A as p,z as Ye,h as B,Y as Ao,Z as qn,y as it,E as sn,_ as ko,$ as Rt,x as Vt,a0 as vo,a1 as hr,B as Ue,J as Lt,j as Eo,a2 as Co,s as Mo,k as we,K as wn,D as ln,a3 as Sn,r as _n,M as Gt,a4 as gr,a5 as Ro,a6 as Lo,o as Qe,V as cn,N as jo,a7 as dn,m as Do,O as br,a8 as In,a9 as Tn,aa as Oo}from"./Badges.test-ids-DV2emBV4.js";import"./index-Dy23IbDT.js";import"./iframe-BYteL3gW.js";const Ie={value:"",label:"Text Sample",placeholder:"Text Placeholder",helperText:"Text Helper Text",testId:"Text-12345678",hasSuggestions:!1,displayMode:"",hideLabel:!1,readOnly:!1,required:!1,disabled:!1,status:"",validatemessage:""},No={value:".TextSample",hasSuggestions:!1},Po=/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|about|blob):|[^a-z]|[a-z+.-]+(?:[^a-z+.\-:]|$))/i,un=e=>e.charAt(0).toUpperCase()+e.slice(1),Et=e=>{var n;const t=(n=e.current)==null?void 0:n.getRootNode();if(!(!fe(t,Document)&&!fe(t,ShadowRoot))){for(const r of t.childNodes)if(r.contains(e.current)&&fe(r,HTMLElement))return r}},zo=(e,t,n)=>{const r=[];if(t.global||t.sticky){let o=0,a;for(;a=t.exec(e);)r.push(e.slice(o,a.index),n(a[0])),o=a.index+a[0].length;r.push(e.slice(o))}else{const o=t.exec(e);o?r.push(e.slice(0,o.index),n(o[0]),e.slice(o.index+o[0].length)):r.push(e)}return r.flatMap((o,a)=>o?s.jsx(c.Fragment,{children:o},a):[])},Xe=()=>{const{direction:e}=$n();return c.useMemo(()=>e==="ltr"?{start:"left",end:"right",ltr:!0,rtl:!1}:{start:"right",end:"left",ltr:!1,rtl:!0},[e])},Zn=["button","a","input","li","legend"],Fo=({focusEl:e,scope:t,scopeSelector:n,selector:r,orientation:o="vertical",focusDescendantEl:a,clearFocusDescendant:l,focusReturnEl:d,clearFocusReturn:u,currentDescendantId:f,onClick:h,preventInitialScroll:g,pauseDescendantEvaluation:y=!1,clearPreventScroll:m},$=[])=>{const[T,M]=c.useState(0),S=c.useRef(""),v=c.useRef(y),[R,E]=c.useState(null),[_,A]=c.useState(null),[w,V]=c.useState(),{rtl:ee}=Xe(),L=c.useCallback(()=>{w==null||w.forEach(x=>{x.setAttribute("data-current","false")})},[w]),O=c.useCallback(x=>{L(),V(x?Array.from(x).filter(D=>fe(D,HTMLElement)):null)},[w]),W=c.useCallback(({clear:x}={clear:!1})=>{var q;const D=[];if(w&&w.length&&w.forEach(I=>{I.id=I.id||mr(),D.push(I.id)}),x){const I=(q=e==null?void 0:e.getAttribute("aria-owns"))==null?void 0:q.split(" "),P=I==null?void 0:I.filter(F=>!D.includes(F));e==null||e.setAttribute("aria-owns",(P==null?void 0:P.join(" "))||"")}else e==null||e.setAttribute("aria-owns",D.join(" "))},[e,w]),U=c.useCallback(()=>{if(y)return;let x=t;if(x&&fe(x,HTMLElement)){if(n&&(x=x.querySelector(n)),!x){O(null);return}if(r){const D=x.querySelectorAll(r);O(D)}else{const D=x.querySelectorAll(wo);O(D)}}else O(null);_===null&&A(0)},[t,n,r,y,_]);return c.useEffect(()=>{v.current=y},[y]),c.useEffect(()=>{if(!t||!e)return;t.setAttribute("data-active-scope",xn()===e?"true":"false");const x=()=>{t.setAttribute("data-active-scope","true")},D=()=>{t.setAttribute("data-active-scope","false")};return e.addEventListener("focus",x),e.addEventListener("blur",D),()=>{e.removeEventListener("focus",x),e.removeEventListener("blur",D)}},[t,e]),c.useEffect(()=>{y||U()},[y]),c.useEffect(()=>{const x=setTimeout(()=>{U(),v.current||A(0)},0);return()=>clearTimeout(x)},[...$]),c.useEffect(()=>{y?(L(),W({clear:!0})):(W(),M(Math.random()))},[y,e,w]),c.useEffect(()=>{const x=()=>{u==null||u(),m==null||m(),_!==null&&_+1<w.length?A(_+1):A(0)},D=()=>{u==null||u(),m==null||m(),_!==null&&_-1>-1?A(_-1):A(w.length-1)},q=I=>{w!=null&&w.length&&(["ArrowDown","ArrowUp"].includes(I.key)&&o==="vertical"&&I.preventDefault(),["ArrowLeft","ArrowRight"].includes(I.key)&&o==="horizontal"&&I.preventDefault(),setTimeout(()=>{var P;switch(I.key){case"ArrowDown":o==="vertical"&&x();break;case"ArrowUp":o==="vertical"&&D();break;case"ArrowRight":o==="horizontal"&&(ee?D():x());break;case"ArrowLeft":o==="horizontal"&&(ee?x():D());break;case"Enter":if(_!==null){if(h){h(w[_]);break}const F=w[_].nodeName.toLowerCase();Zn.includes(F)?w[_].click():(P=w[_].querySelector(`${Zn.join(",")}`))==null||P.click()}break}},0))};return!y&&e&&(w!=null&&w.length)&&!f&&e.addEventListener("keydown",q),()=>{e==null||e.removeEventListener("keydown",q)}},[e,_,w,y]),c.useEffect(()=>{!y&&w&&f&&w.forEach((x,D)=>{x.id===f&&A(D)})},[f,w,y]),c.useEffect(()=>{if(v.current)return;const x=R||_,D=d==null?void 0:d.id;let q;const I=a==null?void 0:a.id;let P,F=!1;if(w&&w.length){if(w.forEach((G,z)=>{R===null&&G.id===I&&(P=z,F=!0,E(z)),G.id===D&&(q=z),G.setAttribute("data-current","false")}),q&&q!==_){A(q),u==null||u();return}if(F&&P!==void 0){M(Math.random()),A(P);return}if(x!==null&&w[x]){const G=w[x];if(G.setAttribute("data-current","true"),e==null||e.setAttribute("aria-activedescendant",G.id),G.id!==S.current&&!g){const z=Element.prototype.scrollIntoViewIfNeeded??Element.prototype.scrollIntoView;z==null||z.call(G,!1)}R!==null&&(E(null),l==null||l()),S.current=G.id}}return()=>{e==null||e.removeAttribute("aria-activedescendant")}},[w,_,a,e,T]),{activeDescendant:_!==null&&w?w[_]:void 0,descendants:w||null}},Ho=({loading:e,descendants:t,previousActiveDescendant:n,activeDescendant:r,focusReturnEl:o,setFocusReturnEl:a,scrollEl:l})=>{c.useEffect(()=>{if(e&&t&&t.length&&r){const u=[...t].pop(),f=(u==null?void 0:u.id)||void 0;let h;return f===r.id?(l&&(l.scrollTop=l.scrollHeight-l.offsetHeight),(o==null?void 0:o.id)!==r.id&&(h=setTimeout(()=>{a(u)},0))):(o==null?void 0:o.id)!==r.id&&(h=setTimeout(()=>{a(r)},0)),()=>clearTimeout(h)}},[e,t,n,r,l,o])},yr=(e,t,n,r,o)=>{c.useEffect(()=>{var l;let a=null;if(t>0){const d=(e==null?void 0:e.current)??((l=o==null?void 0:o.current)==null?void 0:l.getRootNode())??document;if(!fe(d,HTMLElement,SVGElement,Document,ShadowRoot))return;const u=d.querySelectorAll(r);u.length>t&&(a=u[t])}if(a){const d=new IntersectionObserver(u=>{u[0].isIntersecting&&n()},{root:e.current??null});return d.observe(a),()=>{d.disconnect()}}},[n,t])},$r=(e,t,n)=>{var l;const{portalTarget:r}=$n(),o=((l=r==null?void 0:r.ownerDocument)==null?void 0:l.defaultView)||window,a=c.useCallback(d=>{const u=d.composedPath(),f=u[0];if(!fe(f,Node))return;let h=0,g=1;for(;!fe(u[h],Document);){const m=u[h],$=u[g];if(!m||!$)return;if(fe($,DocumentFragment)||fe($,Document)){if(!fe(m,Node)||!$.contains(m))return;h=g}else if(fe(m,DocumentFragment)){if(!fe($,Element)||$.shadowRoot!==m)return;h=g}g+=1}So(t).flatMap(m=>!fe(m,Element)&&!fe(m,Document)&&!fe(m,DocumentFragment)?[m]:[m,..._o(m)]).every(m=>m!==f&&!m.contains(f))&&n(d)},[...t,n]);c.useEffect(()=>{const d=Array.isArray(e)?e:[e];return d.forEach(u=>{var f;return(f=o==null?void 0:o.document)==null?void 0:f.addEventListener(u,a)}),()=>{d.forEach(u=>{var f;return(f=o==null?void 0:o.document)==null?void 0:f.removeEventListener(u,a)})}},[e,a])},xr=e=>{const t=c.useRef();return c.useLayoutEffect(()=>{t.current=e},[e]),t.current},Uo=e=>t=>s.jsx(Io,{children:s.jsx(e,{...t})}),Bo="budicon",Go="galaxy",Wo=()=>s.jsx("path",{d:"M17.66 3.3 16.5 6.5l-3.3 1.16c-.22.088-.264.562 0 .67l3.3 1.17 1.16 3.3c.1.3.543.3.67 0l1.17-3.3c1.981-.7 3.081-1.09 3.3-1.17.328-.119.205-.598 0-.67L19.5 6.5l-1.17-3.2c-.187-.415-.522-.377-.67 0ZM15.5 22a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM5 10a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"}),Vo="0 0 25 25",qo=Object.freeze(Object.defineProperty({__proto__:null,Component:Wo,name:Go,set:Bo,viewBox:Vo},Symbol.toStringTag,{value:"Module"})),Zo="streamline",Yo="folder-empty",Xo=()=>s.jsx("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",d:"M15.188 7.313v-2.25a1.125 1.125 0 0 0-1.126-1.125H6.189V2.813a1.125 1.125 0 0 0-1.125-1.125H1.688A1.125 1.125 0 0 0 .563 2.813v12.224a1.275 1.275 0 0 0 2.502.329l1.763-7.243a1.125 1.125 0 0 1 1.081-.81h10.404A1.125 1.125 0 0 1 17.4 8.726l-1.65 6.75a1.125 1.125 0 0 1-1.087.835H1.835"}),Ko="0 0 18 18",Jo=Object.freeze(Object.defineProperty({__proto__:null,Component:Xo,name:Yo,set:Zo,viewBox:Ko},Symbol.toStringTag,{value:"Module"})),wr=He("empty-state",["message","icon"]);Ye(qo);Ye(Jo);const An=C.div(({theme:e})=>{const t=xe(()=>mt(e.base.palette["foreground-color"],e.base.transparency["transparent-2"]));return p`
    height: 100%;

    ${jt} {
      font-size: 1.5rem;
      height: 1.5rem;
      width: 1.5rem;
      color: ${t};
    }
  `});An.defaultProps=B;const Qo=c.forwardRef(function(t,n){const{base:{"icon-set":r}}=To(),o=ke(),{testId:a,message:l=o("no_items"),...d}=t,u=Le(a,wr);return s.jsxs(oe,{"data-testid":u.root,...d,as:An,ref:n,container:{direction:"column",alignItems:"center",justify:"center",gap:1},children:[s.jsx(Se,{"data-testid":u.icon,name:r==="streamline"?"folder-empty":"galaxy"}),s.jsx(Me,{"data-testid":u.message,variant:"secondary",children:l})]})}),Sr=Re(Qo,wr),ht=c.createContext({mode:"action",variant:"drill-down",itemLayout:"stacked",scrollAt:7,loading:!1,componentId:mr(),pushFlyoutId:()=>null,flyOutActiveIdStack:[],focusControl:null,updateActiveDescendants:()=>null,setFocusDescendant:()=>null,setFocusReturnEl:()=>null,getScopedItemId:()=>"",updateParentDescendantStack:()=>null}),_r=He("meta-list",[]),ei=C.ul(({wrapItems:e})=>p`
    list-style: none;
    overflow: hidden;

    /* Negative margin to account for overflow clipping of focus indicator */
    padding: 0.3rem;
    margin: -0.3rem;

    ${!e&&p`
      white-space: nowrap;
    `}
  `),Yn=C.li(({wrapItems:e})=>p`
    min-width: 0;
    display: inline-block;

    ${e?p`
          overflow-wrap: break-word;
        `:p`
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        `}

    &[role='separator'] {
      -webkit-user-select: none;
      user-select: none;
    }
  `),ti=c.forwardRef(function({testId:t,items:n,wrapItems:r=!0,...o},a){const l=Le(t,_r),d=n.length<=1?"none":void 0;return s.jsx(oe,{"data-testid":l.root,...o,as:ei,role:d,container:{colGap:.5,alignItems:"center",wrap:r?"wrap":"nowrap"},wrapItems:r,ref:a,children:n.flatMap((u,f,h)=>u?[s.jsx(Me,{as:Yn,variant:"secondary",role:d,wrapItems:r,children:u},`${f+0}`)].concat(f!==h.length-1?[s.jsx(Me,{as:Yn,"aria-hidden":!0,variant:"secondary",children:"•"},`${f+0}-sep`)]:[]):[])})}),ni=Re(ti,_r),Xn=e=>["between","around","evenly"].includes(e)?`space-${e}`:e,Kn=e=>{if(!e)return;if(e===!0)return p`
      display: grid;
    `;const{inline:t,pad:n,cols:r,autoCols:o,rows:a,autoRows:l,autoFlow:d,areas:u,template:f,colGap:h,rowGap:g,gap:y,justifyItems:m,justifyContent:$,alignItems:T,alignContent:M}=e;return p`
    display: ${t?"inline-grid":"grid"};

    ${n!==void 0&&p`
      padding: ${({theme:{base:{spacing:S}}})=>(Array.isArray(n)?n:[n]).map(v=>`calc(${v} * ${S})`).join(" ")};
    `}

    ${r&&p`
      grid-template-columns: ${r};
    `}

    ${o&&p`
      grid-auto-columns: ${o};
    `}

    ${a&&p`
      grid-template-rows: ${a};
    `}

    ${l&&p`
      grid-auto-rows: ${l};
    `}

    ${d&&p`
      grid-auto-flow: ${d};
    `}

    ${u&&p`
      grid-template-areas: ${u};
    `}

    ${f&&p`
      grid-template: ${f};
    `}

    ${y!==void 0&&p`
      gap: calc(${y} * ${S=>S.theme.base.spacing});
    `}

    ${h!==void 0&&p`
      column-gap: calc(${h} * ${S=>S.theme.base.spacing});
    `}

    ${g!==void 0&&p`
      row-gap: calc(${g} * ${S=>S.theme.base.spacing});
    `}

    ${m&&p`
      justify-items: ${m};
    `}

    ${$&&p`
      justify-content: ${Xn($)};
    `}

    ${T&&p`
      align-items: ${T};
    `}

    ${M&&p`
      align-content: ${Xn(M)};
    `}
  `},Jn=e=>{if(!e)return;const{colStart:t,colEnd:n,colStartEnd:r,rowStart:o,rowEnd:a,rowStartEnd:l,area:d,justifySelf:u,alignSelf:f}=e;return p`
    ${t&&p`
      grid-column-start: ${t};
    `}

    ${n&&p`
      grid-column-end: ${n};
    `}

    ${r&&p`
      grid-column: ${r};
    `}

    ${o&&p`
      grid-row-start: ${o};
    `}

    ${a&&p`
      grid-row-end: ${a};
    `}

    ${l&&p`
      grid-row: ${l};
    `}

    ${d&&p`
      grid-area: ${d};
    `}

    ${u&&p`
      justify-self: ${u};
    `}

    ${f&&p`
      align-self: ${f};
    `}
  `},ri=["xs","sm","md","lg","xl"],qt=C.div(({container:e,item:t,theme:{base:{breakpoints:n}},xs:r,sm:o,md:a,lg:l,xl:d})=>{const u={xs:r,sm:o,md:a,lg:l,xl:d};return p`
      ${Kn(e)}
      ${Jn(t)}

    ${ri.map(f=>{var h,g;return u[f]&&p`
            @media screen and (min-width: ${n[f]}) {
              ${Kn((h=u[f])==null?void 0:h.container)}
              ${Jn((g=u[f])==null?void 0:g.item)}
            }
          `})}
    `});qt.defaultProps=B;const Ct=c.forwardRef(function(t,n){return s.jsx(qt,{...t,ref:n})}),Ir=He("summary-item",["primary","secondary","visual","actions"]),Pe=C.div`
  > ${Ao}, img {
    display: block;
    object-fit: cover;
    width: 2rem;
    height: 2rem;
  }
`;Pe.defaultProps=B;const kn=C(Ct)(({theme:e,isString:t,overflowStrategy:n})=>p`
    ${n==="ellipsis"?p`
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        `:p`
          word-break: break-word;
        `}

    ${t&&p`
      font-weight: ${e.base["font-weight"]["semi-bold"]};
    `}
  `);kn.defaultProps=B;const De=C(Ct)(({overflowStrategy:e})=>p`
    ${e==="ellipsis"?p`
          overflow: hidden;
          text-overflow: ellipsis;
        `:p`
          word-break: break-word;
        `}
  `),Oe=C.div`
  white-space: nowrap;
`,Tr=C.div``,oi=({visual:e,actions:t})=>`${e?"auto ":""}minmax(0, 1fr)${t?" auto":""}`,ii=({secondary:e,layout:t,visual:n,actions:r})=>`"${n?"visual ":""}primary${e&&t==="inline"?" secondary":""}${r?" actions":""}"${e&&t==="stacked"?`
"${n?"visual ":""}secondary${r?" actions":""}"`:""}`,ai=c.forwardRef(function({testId:t,visual:n,primary:r,secondary:o,layout:a="stacked",actions:l,container:d,overflowStrategy:u="wrap",as:f,...h},g){const y=Le(t,Ir);return s.jsxs(Ct,{"data-testid":y.root,...h,ref:g,container:{cols:oi({visual:n,actions:l}),colGap:2,areas:ii({secondary:o,layout:a,visual:n,actions:l}),...d},as:Tr,forwardedAs:f,children:[n&&s.jsx(Ct,{"data-testid":y.visual,as:Pe,item:{area:"visual",alignSelf:"center"},children:n}),s.jsx(kn,{"data-testid":y.primary,item:{area:"primary",alignSelf:o&&a==="stacked"?"end":"center"},isString:typeof r=="string",overflowStrategy:u,children:r}),o&&s.jsx(De,{"data-testid":y.secondary,item:{area:"secondary",alignSelf:a==="stacked"?"start":"center"},overflowStrategy:u,children:o}),l&&s.jsx(Ct,{"data-testid":y.actions,as:Oe,item:{area:"actions",alignSelf:"center"},children:l})]})}),vn=Re(ai,Ir),si="budicon",li="caret-left",ci=()=>s.jsx("path",{d:"M17.25 21H14.5L8 12.5 14.5 4h2.75l-6.5 8.5z"}),di="0 0 25 25",Ar=Object.freeze(Object.defineProperty({__proto__:null,Component:ci,name:li,set:si,viewBox:di},Symbol.toStringTag,{value:"Module"})),ui="budicon",fi="caret-right",pi=()=>s.jsx("path",{d:"M8 4h2.75l6.5 8.5-6.5 8.5H8l6.5-8.5z"}),mi="0 0 25 25",kr=Object.freeze(Object.defineProperty({__proto__:null,Component:pi,name:fi,set:ui,viewBox:mi},Symbol.toStringTag,{value:"Module"})),hi="budicon",gi="check",bi=()=>s.jsx("path",{d:"m3.464 11.371 6.222 5.974L21.582 5 23 6.371 9.732 20 2 12.743l1.464-1.372Z"}),yi="0 0 25 25",vr=Object.freeze(Object.defineProperty({__proto__:null,Component:bi,name:gi,set:hi,viewBox:yi},Symbol.toStringTag,{value:"Module"})),Er=C.span(({theme:e,variant:t,children:n})=>{const{foreground:r,background:o}=e.components.badges.count[t],a=xe(()=>mt(r,.1)),l=it(e.base["font-size"],e.base["font-scale"]);return p`
    display: inline-block;
    block-size: 1rem;
    flex-shrink: 0;
    border-radius: calc(9999 * ${e.base["border-radius"]});
    color: ${r};
    background-color: ${o};
    box-shadow: inset 0 0 0 0.0625rem ${a};
    font-size: ${l.xxs};
    font-weight: ${e.base["font-weight"].bold};
    line-height: 1rem;
    text-align: center;
    white-space: nowrap;

    ${n.length===1?p`
          aspect-ratio: 1 / 1;
        `:p`
          padding-inline: ${e.base.spacing};
        `}
  `});Er.defaultProps=B;const Qt=e=>e<1e3?"":1e3<=e&&e<1e6?"K":1e6<=e&&e<1e9?"M":1e9<=e&&e<1e12?"B":1e12<=e&&e<1e15?"T":"",$i=e=>{for(let t=3;t<15;t+=3){if(e<10**(t+1))return`${`${e}`.slice(0,1)}.${`${e}`.slice(1,2)}${Qt(e)}`;if(e<10**(t+2))return`${`${e}`.slice(0,2)}${Qt(e)}`;if(e<10**(t+3))return`${`${e}`.slice(0,3)}${Qt(e)}`}return"999T+"},xi=e=>{const t=Math.abs(e);return t<1e3?`${e}`:`${e<0?"-":""}${$i(t)}`},Cr=Re(c.forwardRef(function({testId:t,variant:n="default",children:r,...o},a){const l=Le(t,qn);return Number.isInteger(r)?s.jsx(Er,{"data-testid":l.root,variant:n,...o,ref:a,children:xi(r)}):null}),qn),Mr=C.mark(({theme:e})=>p`
    color: ${e.base.colors.black};
    background-color: ${e.components.mark["background-color"]};
    font-weight: ${e.components.mark["font-weight"]};
  `);Mr.defaultProps=B;const wi=e=>s.jsx(Mr,{...e}),ze={isItem(e){return sn(e,"primary")},getItem(e,t){let n;return e.some(r=>this.isItem(r)&&r.id===t?(n=r,!0):r.items?(n=this.getItem(r.items,t),!!n):!1),n},getPath(e,t){let n=[];return e.some(r=>{if(r.id===t)return n=[r],!0;if(r.items){const o=this.getPath(r.items,t);return o.length&&(n=o.concat(r)),!!n.length}return!1}),n},setItem(e,t,n){return e.map(r=>r.id===t?{...n}:r.items?{...r,items:this.setItem(r.items,t,n)}:r)},mapItem(e,t,n){return e.map((r,o,a)=>{let l=r;return r.items&&(l={...l,items:this.mapItem(r.items,t,n)}),this.isItem(l)&&r.id===t&&(l=n(l,o,a)),l})},mapTree(e,t){return e.map((n,r,o)=>{let a=n;return n.items&&(a={...a,items:this.mapTree(n.items,t)}),this.isItem(a)?t(a,r,o):a})},flatten(e,t=[],n={parentFirst:!1}){let r=[],o=[];return e.forEach(a=>{if(this.isItem(a)&&r.push(t.length>0?{...a,ancestors:t}:a),a.items){const l=this.flatten(a.items,[...t,a],n);n.parentFirst?o=[...o,...l]:r=[...r,...l]}}),n.parentFirst?[...r,...o]:r},toggleSelected(e,t,n,r){return this.mapTree(e,o=>{if(this.isItem(o)){if(o.id===t)return{...o,selected:r!==void 0?r:!o.selected};if(n==="single-select")return{...o,selected:!1}}return o})},selectItem(e,t,n){return this.toggleSelected(e,t,n,!0)},deselectItem(e,t,n){return this.toggleSelected(e,t,n,!1)},getSelected(e){return e.reduce((t,n)=>(this.isItem(n)&&n.selected&&(t=[...t,n]),n.items&&(t=[...t,...this.getSelected(n.items)]),t),[])},prependTo(e,t,n){return n?this.mapItem(e,n,r=>({...r,items:[...t,...r.items??[]]})):[...t,...e]},appendTo(e,t,n){return n?this.mapItem(e,n,r=>({...r,items:[...r.items??[],...t]})):[...e,...t]},getNextItem(e,t){if(!t)return e[0];let n;return this.mapItem(e,t,(r,o,a)=>(n=a[o+1],r)),n},getPrevItem(e,t){if(!t)return e[0];let n;return this.mapItem(e,t,(r,o,a)=>(n=a[o-1],r)),n},getParentItem(e,t){if(!t)return;const[,n]=this.getPath(e,t);return n}},Ut=p`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;C(Ue)`
  align-self: center;
`;const fn=C(Se)``,Rr=C.li(({theme:{base:e,components:t},isParentItem:n,itemLayout:r,mode:o="action","aria-selected":a=!1,selectableParent:l=!1})=>{const d=xe(()=>Rt(.85,e.palette["primary-background"],e.palette.interactive)),u=xe(()=>Rt(.95,e.palette["primary-background"],e.palette.interactive)),f=xe(()=>mt(t["radio-check"][":checked"]["background-color"],e.transparency["transparent-5"])),h=t["radio-check"][":checked"]["background-color"],g=xe(()=>Vt(h));return p`
      min-height: ${e["hit-area"]["mouse-min"]};
      padding-block: calc(0.75 * ${e.spacing});
      padding-inline: ${e.spacing};
      cursor: pointer;

      ${r==="inline"&&p`
        justify-content: flex-start;

        ${Tr} {
          /* Sets grid columns based on SummaryItem content combinations */

          &:has(${Pe}):has(${De}):has(${Oe}) {
            grid-template-areas: 'visual primary secondary actions';
            grid-template-columns: auto auto 1fr auto;
          }

          &:has(${Pe}):has(${De}):not(:has(${Oe})) {
            grid-template-areas: 'visual primary secondary';
            grid-template-columns: auto auto 1fr;
          }

          &:has(${Pe}):not(:has(${De})):has(${Oe}) {
            grid-template-areas: 'visual primary actions';
            grid-template-columns: auto 1fr auto;
          }

          &:has(${Pe}):not(:has(${De})):not(
              :has(${Oe})
            ) {
            grid-template-areas: 'visual primary';
            grid-template-columns: auto 1fr;
          }

          &:not(:has(${Pe})):has(${De}):has(${Oe}) {
            grid-template-areas: 'primary secondary actions';
            grid-template-columns: auto 1fr auto;
          }

          &:not(:has(${Pe})):has(${De}):not(
              :has(${Oe})
            ) {
            grid-template-areas: 'primary secondary';
            grid-template-columns: auto 1fr;
          }

          &:not(:has(${Pe})):not(:has(${De})):has(
              ${Oe}
            ) {
            grid-template-areas: 'primary actions';
            grid-template-columns: auto 1fr;
          }

          &:not(:has(${Pe})):not(:has(${De})):not(
              :has(${Oe})
            ) {
            grid-template-areas: 'primary';
            grid-template-columns: 1fr;
            flex-grow: 0;
          }

          & > ${kn} {
            ${Ut};
          }

          & > ${De} {
            ${Ut};

            ul {
              li {
                ${Ut};
              }
              justify-content: end;
            }
          }

          & > ${Oe} > ${vo} {
            justify-content: end;
          }
        }
      `}

      @media (pointer: coarse) {
        min-height: ${e["hit-area"]["finger-min"]};
      }

      &:focus-within {
        background-color: ${d};
      }

      &:hover {
        ${fn} {
          visibility: visible;
          ${o==="single-select"&&p`
            color: ${a?h:f};
          `}
          ${o==="multi-select"&&p`
            ${!a&&p`
              border-color: ${t["form-control"][":hover"]["border-color"]};
            `}
          `}
        }
      }

      &:hover:not([aria-disabled='true']) {
        background-color: ${u};
      }

      a:first-of-type {
        display: block;
        width: 100%;
        text-decoration: none;
        color: inherit;
      }

      ${n&&!l&&(o==="multi-select"||o==="single-select")&&p`
        padding-inline-start: calc(1.125rem + 2 * ${e.spacing});
      `}

      ${qt} {
        flex-grow: 1;
      }

      ${fn} {
        margin-inline-start: 0;
        ${o==="single-select"&&p`
          ${a?p`
                color: ${h};
              `:p`
                visibility: hidden;
              `}
        `}
        ${o==="multi-select"&&p`
          ${a?p`
                color: ${g};
                background-color: ${h};
                border: 0.0625rem solid ${t["radio-check"][":checked"]["border-color"]};
              `:p`
                color: transparent;
                border: 0.0625rem solid ${t["radio-check"]["border-color"]};
              `}
          border-radius: min(
            calc(${e["border-radius"]} * ${t.checkbox["border-radius"]}),
            0.25rem
          );
        `}
      }

      &[aria-disabled='true'] {
        background-color: ${t["form-control"][":disabled"]["background-color"]};
        opacity: ${e["disabled-opacity"]};
      }
    `});Rr.defaultProps=B;const Si=C.div`
  ${jt} {
    width: 1em;
    height: 1em;
  }

  & > ${hr} {
    ${Ut};
  }
`;C.p`
  ${Lt}
`;const Lr=C.li(({theme:e})=>p`
    height: 0.0625rem;
    background-color: ${e.base.palette["border-line"]};
    margin: ${e.base.spacing} 0;
  `);Lr.defaultProps=B;const En=C.div(({theme:e})=>p`
    min-height: ${e.base["hit-area"]["mouse-min"]};
    font-weight: ${e.base["font-weight"]["semi-bold"]};
    background-color: ${e.base.palette["secondary-background"]};

    @media (pointer: coarse) {
      min-height: ${e.base["hit-area"]["finger-min"]};
    }
  `);En.defaultProps=B;const jr=C.legend(({theme:{base:e}})=>{const t=xe(()=>Rt(.95,e.palette["primary-background"],e.palette.interactive)),n=xe(()=>Rt(.85,e.palette["primary-background"],e.palette.interactive));return p`
    cursor: pointer;
    width: 100%;
    background-color: ${e.palette["primary-background"]};

    &:first-child {
      border-top-left-radius: inherit;
      border-top-right-radius: inherit;
    }

    &:last-child {
      border-bottom-left-radius: inherit;
      border-bottom-right-radius: inherit;
    }

    &:focus-within {
      box-shadow: ${e.shadow["focus-inset"]};
      background-color: ${n};
    }

    &:hover:not([aria-disabled='true']):not([data-current='true']) {
      background-color: ${t};
    }
    color: ${e.palette["foreground-color"]};
    padding: calc(0.5 * ${e.spacing}) ${e.spacing};
    text-align: start;
    border-radius: inherit;

    > ${qt} {
      grid-column-gap: ${e.spacing};
    }

    ${jt} {
      /* Fixes vertical align issue increasing box size beyond square */
      display: block;
    }
  `});jr.defaultProps=B;const Cn=C.ul(({theme:e})=>p`
    overflow-x: hidden;
    overflow-y: auto;
    list-style: none;
    height: 100%;
    border-radius: inherit;

    ${An} {
      padding: ${e.base.spacing};
      height: auto;
    }

    li:not(:first-child):not([role='presentation']) > ${En} {
      margin-block-start: ${e.base.spacing};
    }
  `);Cn.defaultProps=B;const Mn=C.fieldset(({theme:e})=>p`
    background-color: ${e.base.palette["primary-background"]};
    border: 0;
    border-radius: inherit;
  `);Mn.defaultProps=B;const _i=C(Mn)`
  min-width: 10rem;
`,Dr=C.li`
  display: block;
  position: relative;
  height: 2.8rem;
`,Wt=C.div(({theme:e})=>p`
    position: relative;
    overflow: hidden;
    transition: height ${e.base.animation.speed} ${e.base.animation.timing.ease};

    & > fieldset:first-child {
      position: relative;
    }

    &:first-child {
      border-top-left-radius: inherit;
      border-top-right-radius: inherit;
    }

    &:last-child {
      border-bottom-left-radius: inherit;
      border-bottom-right-radius: inherit;
    }
  `);Wt.defaultProps=B;const Or=C.div(({theme:e})=>{const t=`0.0625rem solid ${e.base.palette["border-line"]}`;return p`
    display: flex;
    flex-direction: column;

    &,
    ${Wt} {
      max-height: inherit;
    }

    &:focus {
      box-shadow: ${e.base.shadow.focus};
      outline: none;
    }

    &:first-child {
      border-top-left-radius: inherit;
      border-top-right-radius: inherit;
    }

    &:last-child {
      border-bottom-left-radius: inherit;
      border-bottom-right-radius: inherit;
    }

    &[data-active-scope='true'] [data-current='true'] {
      box-shadow: ${e.base.shadow["focus-inset"]};
    }

    ${ko}:first-child {
      + ${Wt}, + header {
        border-top-left-radius: inherit;
        border-top-right-radius: inherit;
      }
    }

    > header,
    > footer {
      padding: ${e.base.spacing};
    }

    > header {
      border-bottom: ${t};
    }

    > footer {
      border-top: ${t};
    }
  `});Or.defaultProps=B;const Nr=He("menu",["create-new"]),Pr=He("menu-item",[]);Ye(Ar,kr,vr);const Ii=({expandHandler:e})=>{const{end:t}=Xe(),n=s.jsx(Se,{name:`caret-${t}`});return e?s.jsx(Ue,{as:"span",icon:!0,variant:"simple","aria-hidden":!0,onClick:e,children:n}):n},Ti=({ancestors:e=[]})=>{const t=e.length>2,n=t?[e[0],e[e.length-1]]:e,{end:r}=Xe();return s.jsx(oe,{container:{gap:.5,alignItems:"center"},as:Si,title:e.map(o=>ze.isItem(o)?o.primary:o.label).join(" > "),children:n.map((o,a,l)=>{const d=ze.isItem(o)?o.primary:o.label;return s.jsxs(c.Fragment,{children:[s.jsx(Me,{variant:"secondary",children:d}),a<l.length-1&&s.jsxs(s.Fragment,{children:[s.jsx(Me,{variant:"secondary",children:s.jsx(Se,{name:`caret-${r}`})}),t&&s.jsxs(s.Fragment,{children:[s.jsx(Me,{variant:"secondary",children:"…"}),s.jsx(Me,{variant:"secondary",children:s.jsx(Se,{name:`caret-${r}`})})]})]})]},o.id)})})},Ai=({testId:e,id:t,primary:n,secondary:r,ancestors:o,visual:a,count:l,items:d,selected:u,partial:f,href:h,tooltip:g,onClick:y,onExpand:m,disabled:$,role:T="menuitem",...M})=>{const S=ke(),{mode:v,onItemClick:R,itemLayout:E,accent:_,variant:A,setFocusDescendant:w,getScopedItemId:V,arrowNavigationUnsupported:ee}=c.useContext(ht),L=Le(e,Pr),O=v==="single-select"||v==="multi-select",W=d&&typeof u=="boolean",U=c.useMemo(()=>V(t),[t,V]),x=`${t}-count`,D=`${t}-secondary`,q=c.useCallback(N=>{if(N.detail>0){const se=N.target,Y=se.getAttribute("role")===T?se:se.closest(`li[role="${T}"]`);Y&&w(Y)}y==null||y(t,N),R==null||R(t,N)},[y,R,t]),I=c.useCallback(N=>{m==null||m(t,N),N.stopPropagation()},[m,t]);let P;if(_&&!d){const N=typeof _=="function"?_(n):_;P=zo(n,N,X=>s.jsx(wi,{children:X}))}const F=o?s.jsx(Ti,{ancestors:o}):r&&s.jsx(ni,{items:r,id:D}),[G,z]=Eo(),be=s.jsxs(s.Fragment,{children:[s.jsx(vn,{ref:z,primary:P||(d?n:s.jsx(Me,{children:n})),secondary:F,layout:E,visual:a,actions:d||l?s.jsxs(oe,{container:{gap:1,alignItems:"center",justify:"center"},children:[l!==void 0&&s.jsx(Cr,{id:x,"aria-label":S("menu_item_count",[l]),children:l}),d&&s.jsx(Ii,{expandHandler:W?I:void 0})]}):void 0,container:{colGap:1}}),g&&s.jsx(Co,{target:G,hideDelay:"none",showDelay:"short",children:g})]}),Z=c.useMemo(()=>{const N=S("menu_collapsed",[n]);return d?ee?S("menu_item_shift_space_expand_collapse",[N]):S("menu_item_expand_arrow",[N]):n},[u,n,d]),Be=c.useMemo(()=>{const N=!!r;let X;return N?(X=D,l!==void 0&&l>=0&&(X=`${X} ${x}`)):l!==void 0&&l>=0?X=x:X="",X},[d,r,x,D]);return s.jsxs(oe,{"data-testid":L.root,...M,container:{alignItems:"center",justify:"between",gap:1},id:U,as:Rr,"aria-label":Z,"aria-describedby":Be,role:T,"aria-disabled":$,"data-expand":!!d,itemLayout:E,tabIndex:-1,disabled:$,onMouseDown:N=>{N.preventDefault()},onClick:N=>{if(!$)return d&&typeof u!="boolean"?I(N):q(N)},onMouseEnter:A==="flyout"?I:void 0,href:h,mode:v,isParentItem:!!d,"aria-selected":!!u,selectableParent:W,children:[O&&(!d||W)&&s.jsx(fn,{name:"check"}),h&&!O?s.jsx(Mo,{href:h,tabIndex:"-1",children:be}):be]})},Rn=Re(Ai,Pr),pn=(e,t,n,r)=>{var u,f;const o=!!((u=e.firstElementChild)!=null&&u.matches("legend")),a=[':scope > ul > li:not([role="separator"]):not([role="presentation"])',':scope > ul > li[role="presentation"] > div:first-child',':scope > ul > li > ul[role="group"] > li:not([role="separator"])'],l=e.querySelectorAll(a.join(", "))[Math.max(Math.min(r-(o?2:1),n-1),0)];let d;if(l){const h=e.getBoundingClientRect().top,g=l.getBoundingClientRect(),y=((f=e.querySelector(":scope > ul"))==null?void 0:f.scrollTop)??0;let m=g.bottom;n>r&&(m=(g.top+g.bottom)/2),d=m-h+y}t.style.height=d?`${d}px`:""},zr=({id:e,label:t,items:n,itemRole:r})=>{const{componentId:o}=c.useContext(ht),a=`${o}-${e}`;return s.jsxs("li",{role:"presentation",children:[s.jsx(oe,{container:{alignItems:"center",pad:[.5,1]},as:En,id:a,children:t}),s.jsx("ul",{role:"group","aria-labelledby":a,children:n.length>0&&n.map(l=>c.createElement(Rn,{...l,key:l.id,role:r??"menuitem"}))})]})},rt=e=>Array.isArray(e.items),Fr=c.forwardRef(function({items:t,parent:n,menuRole:r},o){const a=ke(),l=we(o),d=c.useRef(null),u=c.useRef(null),f=c.useRef(null),[h,g]=c.useState(),{componentId:y,loadMore:m,loading:$,scrollAt:T,emptyText:M,onItemExpand:S,pushFlyoutId:v,flyOutActiveIdStack:R,updateActiveDescendants:E,updateParentDescendantStack:_}=c.useContext(ht),{announcePolite:A}=wn();yr(d,t.length-1,()=>{var L;m==null||m((L=n==null?void 0:n.item)==null?void 0:L.id)},":scope > li"),ln(()=>{if(h){const L=t.find(O=>O.id===h.id);L&&rt(L)?g(L):g(void 0)}},[h,t]),c.useEffect(()=>{t.some(O=>R.includes(O.id))||(f.current=null,g(void 0))},[R]),c.useEffect(()=>{t.length===0&&!$&&A({message:M??a("no_items")})},[t.length,$]);const w=c.useMemo(()=>t.length?t.map(L=>ze.isItem(L)?c.createElement(Rn,{...L,key:L.id,"aria-haspopup":!!L.items,"aria-expanded":L.items?L.id===(h==null?void 0:h.id):void 0,role:r==="listbox"?"option":"menuitem",onExpand:(O,W)=>{var U;L.items?(f.current=W.currentTarget,g(rt(L)?L:void 0),(U=L==null?void 0:L.onExpand)==null||U.call(L,O,W),S==null||S(O,W),v(L.id||y),E(),_&&_(f.current.closest("li"))):(f.current=null,g(void 0))}}):c.createElement(zr,{...L,key:L.id,itemRole:r==="listbox"?"option":"menuitem"})):$?null:s.jsx(Sr,{message:M,forwardedAs:"li"}),[t,$,M,h,R]),V=s.jsxs(Cn,{ref:d,role:r,children:[w,$&&!h&&s.jsx(Dr,{children:s.jsx(Sn,{placement:"local"})})]});c.useLayoutEffect(()=>{g(void 0),l.current&&(u.current=l.current.parentElement,pn(l.current,l.current,t.length,T))},[t]);const ee=c.useCallback(()=>{h&&g(void 0)},[h]);return s.jsxs(s.Fragment,{children:[s.jsx(_i,{ref:l,onScroll:ee,"data-flyout-menu-parent-id":y,"data-flyout-menu-id":(n==null?void 0:n.item.id)||y,children:V}),h&&l.current&&s.jsx(_n,{target:f.current,show:!0,strategy:"fixed",placement:"right-start",portal:!1,children:s.jsx(Fr,{items:h.items,parent:{el:l.current,item:h,siblingItems:t,setExpandedItem:g,returnFocusRef:f},menuRole:r})})]})}),ki="21.875rem",Qn="calc(100vw - 20rem)",vi=.05,Ei="budicon",Ci="drag",Mi=()=>s.jsx("path",{d:"M9.5 5.136V3.5h1.708v1.636H9.5Zm0 4.111V7.611h1.708v1.636H9.5Zm0 4.071v-1.636h1.708v1.636H9.5Zm0 4.11v-1.635h1.708v1.636H9.5Zm0 4.072v-1.636h1.708V21.5H9.5Zm4.292-16.364V3.5H15.5v1.636h-1.708Zm0 4.111V7.611H15.5v1.636h-1.708Zm0 4.071v-1.636H15.5v1.636h-1.708Zm0 4.11v-1.635H15.5v1.636h-1.708Zm0 4.072v-1.636H15.5V21.5h-1.708Z"}),Ri="0 0 25 25",Li=Object.freeze(Object.defineProperty({__proto__:null,Component:Mi,name:Ci,set:Ei,viewBox:Ri},Symbol.toStringTag,{value:"Module"})),ji="budicon",Di="arrow-micro-up-down",Oi=()=>s.jsx("path",{d:"m12.402 5 4.597 6H8l4.402-6Zm.195 15L8 14h9l-4.403 6Z"}),Ni="0 0 25 25",Pi=Object.freeze(Object.defineProperty({__proto__:null,Component:Oi,name:Di,set:ji,viewBox:Ni},Symbol.toStringTag,{value:"Module"}));Ye(Li);Ye(Pi);const zi=C(Ue)(({rotateIcon:e})=>p`
    cursor: grab;

    &:active {
      cursor: grabbing;
    }

    &:not(:focus) {
      ${Lt};
    }

    ${e&&p`
      ${jt} {
        transform: rotate(90deg);
      }
    `}
  `),Hr=C.div(({theme:e})=>p`
    position: absolute;
    inset-inline-start: 0;
    inset-block: 0;
    inline-size: 0.125rem;
    background-color: transparent;
    transition: background-color ${e.base.animation.speed} ${e.base.animation.timing.ease};
    cursor: ew-resize;
    z-index: ${e.base["z-index"].max};

    ::before {
      content: '';
      position: absolute;
      inset: 0;
      width: calc(${e.base["hit-area"].compact} * 0.75);
    }

    &:hover {
      background-color: ${e.base.palette.interactive};
    }

    ${gr} {
      position: absolute;
      inset-block-start: 50%;
      inset-inline-start: calc(-2 * ${e.base.spacing});
      translate: 0 -50%;
      box-shadow: ${e.base.shadow.focus};
    }
  `);Hr.defaultProps=B;const Fi=c.forwardRef(function({onMouseDown:t,onKeyDown:n},r){const o=we(r),a=ke(),[l,d]=c.useState(!1),[u,f]=c.useState(!1);Gt(()=>{d(!1),f(!1)});const h=m=>{m.code==="Space"&&(m.preventDefault(),f(!u)),n==null||n(m,u)},g=m=>{const $=Et(o);$&&($.style.setProperty("user-select","none"),d(!0),t==null||t(m))},y=()=>{const m=Et(o);m&&(m.style.removeProperty("user-select"),d(!1))};return s.jsx(Hr,{onMouseDown:g,onMouseUp:y,ref:o,children:s.jsx(zi,{tabIndex:0,icon:!0,label:!l&&!u?a("resize"):void 0,"aria-label":a(!l&&!u?"drag_handle_activate_description":"drag_handle_cancel_description"),onMouseDown:g,onKeyDown:h,onBlur:()=>{f(!1)},rotateIcon:u,children:s.jsx(Se,{name:u?"arrow-micro-up-down":"drag"})})})}),Pt=Lo(ki),Ur=C.div(e=>{const{state:t,shadow:n,position:r,placement:o,transitionSpeed:a,size:l,resizeable:d,theme:u}=e;let f="horizontal",h="X",g="top";(o==="top"||o==="bottom")&&(f="vertical",h="Y",g="left");const y=t==="open"||t==="opening"?0:"100%",m=a||u.base.animation.speed;return p`
    z-index: ${u.base["z-index"].drawer};
    position: ${r};
    ${o}: 0;
    ${g}: 0;
    height: ${f==="vertical"?l:"100%"};
    width: ${f==="horizontal"?l:"100%"};
    transition-property: transform, box-shadow, opacity;
    transition-duration: max(${m}, 0.0001s);
    transition-timing-function: ${u.base.animation.timing.ease};
    transform: ${t==="open"?"none":`translate${h}(${o==="top"||o==="left"?"-":""}${y})`};

    ${n&&p`
      box-shadow: ${u.base.shadow.high};
    `}

    ${d&&p`
      width: ${f==="horizontal"?"var(--resize-drawer-width)":"100%"};
    `}
  `});Ur.defaultProps=B;const Hi=c.forwardRef(function(t,n){const{open:r=!1,shadow:o=!1,position:a="absolute",children:l,placement:d="right",transitionSpeed:u,size:f="100%",resizeable:h=!1,onAfterOpen:g,onAfterClose:y,onBeforeOpen:m,onBeforeClose:$,onOuterClick:T,nullWhenClosed:M=!1,...S}=t,v=we(n),{ltr:R,rtl:E}=Xe(),[_,A]=c.useState(r?"open":"closed");let w=xr(_);w||(w=_),$r("mousedown",[v],c.useCallback(()=>{r&&(T==null||T())},[r,T])),c.useEffect(()=>{r&&(_==="closed"||_==="closing")?(m==null||m(),Ro(v.current),A("opening")):!r&&(_==="open"||_==="opening")?($==null||$(),A("closing")):r&&_==="open"&&w!=="open"?g==null||g():!r&&_==="closed"&&w!=="closed"&&(y==null||y())},[r,_,w,m,$,g,y]);const V=c.useCallback(U=>{U.target!==v.current||U.propertyName!=="transform"||A(r?"open":"closed")},[r]),ee=c.useRef();c.useEffect(()=>{if(!h||!v.current)return;const U=Et(v);U&&(U.style.getPropertyValue("--resize-drawer-width")||U.style.setProperty("--resize-drawer-width",f))},[v.current]);const L=c.useCallback(U=>{var I;const x=Et(v),D=(I=v.current)==null?void 0:I.getBoundingClientRect();if(!D||!x)return;ee.current=U.clientX;const q=new AbortController;x.addEventListener("mousemove",P=>{if(!ee.current||!D.width)return;const F=ee.current,G=d==="right"?F-P.clientX:P.clientX-F,z=Math.max(G+D.width,parseInt(Pt,10));x.style.setProperty("--resize-drawer-width",`clamp(${Pt}, ${z}px, ${Qn})`)},{passive:!0,signal:q.signal}),x.addEventListener("mouseup",()=>{q.abort()},{once:!0})},[d]),O=c.useCallback((U,x)=>{var G;if(!x)return;const D=Et(v),q=document.documentElement.clientWidth*vi,I=(G=v.current)==null?void 0:G.getBoundingClientRect();if(!I||!D||U.code!=="ArrowLeft"&&U.code!=="ArrowRight")return;U.preventDefault();const P=(U.code==="ArrowLeft"?1:-1)*(d==="right"?1:-1),F=Math.max(I.width+P*q,parseInt(Pt,10));D.style.setProperty("--resize-drawer-width",`clamp(${Pt}, ${F}px, ${Qn})`)},[d]),W=h&&_==="open"&&(d==="left"&&E||d==="right"&&R);return _==="closed"&&!r&&M?null:s.jsxs(Ur,{ref:v,position:a,shadow:o&&r,transitionSpeed:u,placement:d,size:f,resizeable:h,open:r,state:_,onTransitionEnd:V,...S,children:[l,W&&s.jsx(Fi,{onMouseDown:L,onKeyDown:O})]})});Ye(Ar,kr);const Ui=({text:e,onClick:t})=>{const n=ke(),{arrowNavigationUnsupported:r}=c.useContext(ht),{start:o}=Xe(),a=c.useCallback(l=>{(l.key==="Enter"||l.key===`Arrow${un(o)}`)&&t()},[t,o]);return s.jsx(oe,{container:{alignItems:"center"},as:jr,onClick:t,onKeyDown:a,"data-collapse":"true","aria-expanded":!0,"aria-label":`${n("menu_expanded",[e||""])} ${n(r?"menu_item_collapse_shift_space":"menu_item_collapse_arrow")}`,children:s.jsx(vn,{visual:s.jsx(Se,{name:`caret-${o}`}),primary:e})})},er=(e,t)=>{e.disabled=t;const n=e.querySelector("legend button");n&&(n.disabled=t)},tr=(e,t)=>e.reduce((n,r)=>!ze.isItem(r)&&r.items?n+r.items.length+1:n+1,t?1:0),zt=e=>e.flatMap(t=>ze.isItem(t)?t:[t,...t.items?t.items:[]]),Br=c.forwardRef(function({items:t,parent:n,id:r,menuRole:o,...a},l){const d=ke(),u=c.useRef(null),f=we(l),h=c.useRef(null),g=c.useRef(null),[y,m]=c.useState(!n),[$,T]=c.useState(),{scrollAt:M,"aria-label":S,loadMore:v,loading:R,emptyText:E,currentItemId:_,onItemExpand:A,focusControl:w,updateActiveDescendants:V,setFocusReturnEl:ee,onItemCollapse:L,expandTo:O}=c.useContext(ht),{end:W}=Xe(),{announcePolite:U}=wn();yr(h,t.length-1,()=>{var I;R||v==null||v((I=n==null?void 0:n.item)==null?void 0:I.id)},":scope > li"),c.useLayoutEffect(()=>{!f.current||$||(u.current=f.current.parentElement,pn(f.current,u.current,tr(t,R),M))}),c.useEffect(()=>{n&&m(!0)},[]),ln(()=>{if($){const I=zt(t).find(P=>P.id===$.id);I&&rt(I)?T(I):T(void 0)}},[$,t]),ln(()=>{if(_){const I=zt(t).find(P=>{var F;return((F=P.items)==null?void 0:F.length)&&ze.getItem(P.items,_)!==void 0});I&&(T(rt(I)?I:void 0),V({preventScroll:!0}))}},[_,t,n]),c.useEffect(()=>{if(O!=null&&O.parentItemId){const I=zt(t).find(P=>P.id===O.parentItemId);if(I)T(rt(I)?I:void 0),V({preventScroll:!0}),O.onComplete();else{const P=zt(t).find(F=>{var G;return((G=F.items)==null?void 0:G.length)&&ze.getItem(F.items,O.parentItemId)!==void 0});P?T(rt(P)?P:void 0):O.onComplete()}}},[O,t,n]);const x=c.useCallback((I,P)=>{var G;const F=ze.getItem(t,I);g.current=P.currentTarget,F&&rt(F)?T(F):T(void 0),(G=F==null?void 0:F.onExpand)==null||G.call(F,I,P),A==null||A(I,P),V({preventScroll:!0})},[t]);c.useEffect(()=>{t.length===0&&!R&&U({message:E??d("no_items")})},[t.length,R]);const D=c.useMemo(()=>t.length?t.map((I,P)=>ze.isItem(I)?c.createElement(Rn,{...I,key:I.id,role:o==="listbox"?"option":"menuitem",onExpand:I.items?x:void 0}):s.jsxs(c.Fragment,{children:[s.jsx(zr,{...I,items:I.items.map(F=>F.items?{...F,onExpand:x}:F),itemRole:o==="listbox"?"option":"menuitem"}),t[P+1]&&ze.isItem(t[P+1])&&s.jsx(Lr,{role:"separator"})]},I.id)):R?null:s.jsx(Sr,{message:E,forwardedAs:"li"}),[t,R,E]),q=s.jsxs(Cn,{id:$?void 0:r,ref:h,role:o,...a,children:[n&&s.jsx(Ui,{text:n.item.primary,onClick:()=>{m(!1)}}),D,R&&!$&&s.jsx(Dr,{children:s.jsx(Sn,{placement:"local",liveConfig:{contextualLabel:S??d("menu")}})})]});return s.jsxs(s.Fragment,{children:[s.jsx(Hi,{"aria-hidden":!!$,as:Mn,ref:f,open:y,style:{opacity:$?0:1},disabled:!!$,placement:W,onBeforeOpen:()=>{n&&(n.el.style.opacity="0"),f.current&&(f.current.style.opacity="1")},onAfterOpen:()=>{n&&er(n.el,!0)},onBeforeClose:()=>{n&&u.current&&(er(n.el,!1),n.el.style.opacity="1",pn(n.el,u.current,tr(n.siblingItems),M)),f.current&&(f.current.style.opacity="0")},onAfterClose:()=>{if(n){w==null||w.focus();const I=n.returnFocusRef.current;n.setExpandedItem(void 0),I&&ee(I==null?void 0:I.closest("li")),L==null||L(n.item.id),V()}},children:q}),$&&f.current&&s.jsx(Br,{id:r,items:$.items,parent:{el:f.current,item:$,siblingItems:t,setExpandedItem:T,returnFocusRef:g},menuRole:o})]})}),Bi=c.forwardRef(function(t,n){var wt,tt;const r=Qe(),{testId:o,id:a=r,items:l=[],itemLayout:d="stacked",onCreateNew:u,mode:f="action",accent:h,scrollAt:g=7,emptyText:y,onItemClick:m,onItemActive:$,onItemExpand:T,loadMore:M,onItemCollapse:S,loading:v=!1,currentItemId:R,header:E,footer:_,variant:A="drill-down",focusControlEl:w,arrowNavigationUnsupported:V,"aria-describedby":ee,"aria-label":L,role:O="menu",listId:W,pauseDescendantEvaluation:U,menuList:x,handleRef:D,...q}=t,I=Le(o,Nr),P=ke(),{end:F,start:G}=Xe(),z=Qe(),be=we(n),Z=c.useRef(0),[Be,N]=c.useState(0),[X,se]=c.useState(null),[Y,Te]=c.useState([a]),[K,ie]=c.useState(),[Ge,We]=c.useState(!1),[ve,Ve]=c.useState([]),[at,st]=c.useState(),Ee=!w,et=c.useMemo(()=>`fieldset[data-flyout-menu-id="${Y[Y.length-1]}"]`,[Y]),de=c.useMemo(()=>w||be.current,[w,be.current]);c.useImperativeHandle(D,()=>({expandTo:J=>{st(J)}}),[]);const gt=c.useCallback(J=>{Te([...Y,J])},[Y]);c.useEffect(()=>{Te([...Y,a])},[a]);const bt=c.useCallback(J=>{Ve([...ve,J])},[ve]),yt=c.useCallback(J=>btoa(encodeURIComponent(J)),[a]),$t=c.useCallback(J=>decodeURIComponent(atob(J)),[a]),ye=c.useCallback(({preventScroll:J=!1}={})=>{We(J),N(Math.random())},[]),_e=c.useMemo(()=>({focusEl:de,scope:be.current,scopeSelector:A==="drill-down"?'fieldset[aria-hidden="false"]':et,selector:`[role="${O==="menu"?"menuitem":"option"}"], legend`,focusDescendantEl:X,clearFocusDescendant:()=>{se(null)},focusReturnEl:K,clearFocusReturn:()=>{ie(null)},currentDescendantId:R?yt(R):void 0,preventInitialScroll:Ge,clearPreventScroll:()=>{We(!1)},pauseDescendantEvaluation:U}),[de,be.current,et,K,X,R,Ge,U]),{activeDescendant:ne,descendants:Ke}=Fo(_e,[Be]),Ot=xr(ne);Ho({loading:v,descendants:Ke,previousActiveDescendant:Ot,activeDescendant:ne,focusReturnEl:K,setFocusReturnEl:ie,scrollEl:(tt=(wt=_e.scope)==null?void 0:wt.querySelector(_e.scopeSelector))==null?void 0:tt.querySelector("ul")}),c.useEffect(()=>{const J=(te=null)=>{if(ne){if(ne.dataset.expand==="true"&&te!=="collapse"){(ne.querySelector('span[aria-hidden="true"]')??ne).click();return}if(te!=="expand")if(A==="flyout"&&Y.length>1&&ve.length>0){Te([...Y].slice(0,-1));const pe=ve.pop();pe!==void 0&&ie(pe),ye()}else ne.dataset.collapse==="true"&&ne.click()}},le=te=>{switch(te.key){case`Arrow${un(F)}`:{if(V)break;J("expand");break}case`Arrow${un(G)}`:{if(V)break;J("collapse");break}case"Escape":{if(A==="flyout"&&Y.length>1&&ve.length>0){te.preventDefault(),te.stopPropagation(),Te([...Y].slice(0,-1));const pe=ve.pop();pe!==void 0&&ie(pe),ye()}break}}V&&(te.key===" "||te.key==="Spacebar")&&te.shiftKey&&(te.preventDefault(),J())};return ne&&($==null||$($t(ne.id))),de==null||de.addEventListener("keydown",le),()=>de==null?void 0:de.removeEventListener("keydown",le)},[de,ne,Y]),c.useEffect(()=>{const J=setTimeout(()=>{var le,te;if(l.length===Z.current){const pe=Ke==null?void 0:Ke.map(Je=>Je.id),lt=(te=(le=_e.scope)==null?void 0:le.querySelector(_e.scopeSelector))==null?void 0:te.querySelectorAll(_e.selector);if(!lt){ye();return}const ct=Array.from(lt);if((ct==null?void 0:ct.length)!==(pe==null?void 0:pe.length)){ye();return}ct.every((Je,Yt)=>Je.id===pe[Yt])||ye();return}Z.current=l.length,ye()},0);return()=>clearTimeout(J)},[l]);const Nt=c.useMemo(()=>({componentId:a,"aria-label":L,mode:f,arrowNavigationUnsupported:V,onItemClick:(J,le)=>{var te;Ee&&((te=be.current)==null||te.focus()),m==null||m(J,le)},onItemActive:$,onItemExpand:T,onItemCollapse:S,itemLayout:d,accent:h,scrollAt:g,emptyText:y,radioName:z,loadMore:M,loading:v,variant:A,focusControl:de,updateActiveDescendants:ye,setFocusReturnEl:ie,setFocusDescendant:se,getScopedItemId:yt,pushFlyoutId:gt,flyOutActiveIdStack:Y,updateParentDescendantStack:bt,expandTo:{parentItemId:at,onComplete:()=>{st(void 0)}}}),[a,L,f,V,m,$,T,S,d,h,g,y,z,M,v,A,de,ye,ie,se,yt,gt,Y,bt,at]),xt=x??(A==="drill-down"?s.jsx(Br,{items:l,id:W,menuRole:O,"aria-multiselectable":f==="multi-select","aria-labelledby":L?`${a}-menuLabel`:void 0}):s.jsx(Fr,{items:l,menuRole:O}));return s.jsxs(Or,{"data-testid":I.root,id:a,"aria-describedby":Ee?`${a}-menuDescription`:void 0,...q,ref:be,tabIndex:Ee?0:void 0,children:[Ee&&s.jsx("span",{id:`${a}-menuDescription`,hidden:!0,children:`${P("menu_selection_instructions")} `&&ee||""}),L&&s.jsx(cn,{id:`${a}-menuLabel`,children:L}),E&&s.jsx("header",{"data-popover-scroll-el":!0,children:E}),s.jsx(Wt,{"data-popover-scroll-el":!0,children:s.jsx(ht.Provider,{value:Nt,children:xt})}),(u||_)&&s.jsx("footer",{"data-popover-scroll-el":!0,children:u?s.jsxs(Ue,{"data-testid":I.createNew,variant:"link",onClick:u,children:[s.jsx(Se,{name:"plus"})," ",P("create_new")]}):_})]})}),Gi=Re(Bi,Nr),Wi="budicon",Vi="arrow-micro-down",qi=()=>s.jsx("path",{d:"M8 9.5h9l-4.402 6-4.597-6H8Z"}),Zi="0 0 25 25",Yi=Object.freeze(Object.defineProperty({__proto__:null,Component:qi,name:Vi,set:Wi,viewBox:Zi},Symbol.toStringTag,{value:"Module"})),Gr=He("menu-button",[]);Ye(Yi);const Wr=C.button(({theme:{base:{spacing:e}}})=>p`
      gap: ${e};
      flex-shrink: 0;
      white-space: nowrap;
      max-width: 100%;

      & + ${dn} + ${gr} {
        margin-inline-start: ${e};
      }
    `);Wr.defaultProps=B;const Xi=C.span(({theme:e,padIcon:t})=>{const{base:{"hit-area":{"mouse-min":n,"finger-min":r}},components:{icon:{size:{s:o}}}}=e;return p`
    max-width: 100%;

    ${t&&p`
      padding-inline-start: calc((${n} - ${o}) / 2);

      @media (pointer: coarse) {
        padding-inline-start: calc(${r} - ${o} * 2);
      }
    `}

    ${hr} {
      text-overflow: ellipsis;
      overflow: hidden;
    }

    ${jt}:last-child:not(:first-child) {
      /* Offsets the flex gap to make the down arrow appear to trail the text. */
      margin-inline-start: -${e.base.spacing};
    }
  `}),Ki=C(_n)`
  min-width: 20ch;
`,Ji=c.forwardRef(function(t,n){const r=Qe(),{testId:o,id:a=r,text:l,menu:d,popover:u,onClick:f,icon:h,count:g,iconOnly:y=!1,showArrow:m=!1,...$}=t,T=Le(o,Gr),[M,S]=c.useState(!1),v=we(n),R=we(u==null?void 0:u.ref),E=we(d==null?void 0:d.ref);jo([R,v],c.useCallback(A=>{A||S(!1)},[])),Gt(A=>{M&&(S(!1),A.stopPropagation())},v),Gt(A=>{var w;M&&(S(!1),A.stopPropagation(),(w=v.current)==null||w.focus())},d==null?void 0:d.focusControlEl);const{rtl:_}=Xe();return s.jsxs(s.Fragment,{children:[s.jsx(Ue,{"data-testid":T.root,as:Wr,"aria-label":l,...$,id:a,ref:v,"aria-expanded":M,"aria-haspopup":"menu","aria-controls":M?`${a}-popover`:void 0,label:y&&!M?l:void 0,onClick:A=>{const w=A.detail>0;M?w&&S(!1):S(!0),(!M||w)&&(f==null||f(A))},icon:y,children:s.jsxs(oe,{as:Xi,container:{alignItems:"center",gap:1},padIcon:y&&m,children:[h&&s.jsx(Se,{name:h}),!y&&s.jsxs(s.Fragment,{children:[s.jsx(Me,{children:l}),typeof g=="number"&&s.jsx(Cr,{children:g})]}),(!y||m)&&s.jsx(Se,{name:"arrow-micro-down"})]})}),s.jsx(Ki,{placement:_?"bottom-end":"bottom-start",hideOnTargetHidden:!0,...u,id:`${a}-popover`,show:!!d&&M,target:v.current,ref:R,children:d&&s.jsx(Gi,{testId:T.root,...d,ref:E,items:d.items,onItemClick:(A,w)=>{var V;d.mode!=="multi-select"&&S(!1),(V=d.onItemClick)==null||V.call(d,A,w)},focusControlEl:d.focusControlEl||v.current||void 0})})]})}),Qi=Re(Ji,Gr),ea=c.forwardRef(function({"data-testid":t,items:n,menuAt:r=2,scrollAt:o,iconOnly:a=!0,menuButtonProps:l,contextualLabel:d,compact:u=!1,disabled:f=!1,tabIndex:h},g){const y=ke(),m=we(g);return!n||n.length===0?null:n.length>=r?s.jsx(Qi,{...t?{"data-testid":t}:{},ref:m,text:y("actions"),"aria-label":d&&y("actions_for",[d]),iconOnly:!0,icon:"more",variant:"simple",compact:u,onClick:l==null?void 0:l.onClick,onKeyDown:l==null?void 0:l.onKeyDown,disabled:f,tabIndex:h,menu:{scrollAt:o,items:n.map(({text:$,onClick:T,...M})=>({...M,primary:$,onClick:T?(S,v)=>{T(S,v,m.current??void 0)}:void 0}))}}):s.jsx(s.Fragment,{children:n.map(({id:$,icon:T,text:M,onClick:S,...v})=>c.createElement(Ue,{...t?{"data-testid":t}:{},key:$,variant:T&&a?"simple":void 0,onClick:R=>S==null?void 0:S($,R),label:T?M:void 0,icon:!!T&&a,compact:u,"aria-label":d?`${M} - ${d}`:M,disabled:f,...v},T&&a?s.jsx(Se,{name:T}):M))})});/*! @license DOMPurify 3.3.1 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.3.1/LICENSE */const{entries:Vr,setPrototypeOf:nr,isFrozen:ta,getPrototypeOf:na,getOwnPropertyDescriptor:ra}=Object;let{freeze:he,seal:Ae,create:mn}=Object,{apply:hn,construct:gn}=typeof Reflect<"u"&&Reflect;he||(he=function(t){return t});Ae||(Ae=function(t){return t});hn||(hn=function(t,n){for(var r=arguments.length,o=new Array(r>2?r-2:0),a=2;a<r;a++)o[a-2]=arguments[a];return t.apply(n,o)});gn||(gn=function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return new t(...r)});const Ft=ge(Array.prototype.forEach),oa=ge(Array.prototype.lastIndexOf),rr=ge(Array.prototype.pop),It=ge(Array.prototype.push),ia=ge(Array.prototype.splice),Bt=ge(String.prototype.toLowerCase),en=ge(String.prototype.toString),tn=ge(String.prototype.match),Tt=ge(String.prototype.replace),aa=ge(String.prototype.indexOf),sa=ge(String.prototype.trim),Ce=ge(Object.prototype.hasOwnProperty),me=ge(RegExp.prototype.test),At=la(TypeError);function ge(e){return function(t){t instanceof RegExp&&(t.lastIndex=0);for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return hn(e,t,r)}}function la(e){return function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return gn(e,n)}}function H(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Bt;nr&&nr(e,null);let r=t.length;for(;r--;){let o=t[r];if(typeof o=="string"){const a=n(o);a!==o&&(ta(t)||(t[r]=a),o=a)}e[o]=!0}return e}function ca(e){for(let t=0;t<e.length;t++)Ce(e,t)||(e[t]=null);return e}function Ne(e){const t=mn(null);for(const[n,r]of Vr(e))Ce(e,n)&&(Array.isArray(r)?t[n]=ca(r):r&&typeof r=="object"&&r.constructor===Object?t[n]=Ne(r):t[n]=r);return t}function kt(e,t){for(;e!==null;){const r=ra(e,t);if(r){if(r.get)return ge(r.get);if(typeof r.value=="function")return ge(r.value)}e=na(e)}function n(){return null}return n}const or=he(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),nn=he(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","enterkeyhint","exportparts","filter","font","g","glyph","glyphref","hkern","image","inputmode","line","lineargradient","marker","mask","metadata","mpath","part","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),rn=he(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),da=he(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),on=he(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),ua=he(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),ir=he(["#text"]),ar=he(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","exportparts","face","for","headers","height","hidden","high","href","hreflang","id","inert","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","part","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","slot","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),an=he(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mask-type","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),sr=he(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),Ht=he(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),fa=Ae(/\{\{[\w\W]*|[\w\W]*\}\}/gm),pa=Ae(/<%[\w\W]*|[\w\W]*%>/gm),ma=Ae(/\$\{[\w\W]*/gm),ha=Ae(/^data-[\-\w.\u00B7-\uFFFF]+$/),ga=Ae(/^aria-[\-\w]+$/),qr=Ae(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),ba=Ae(/^(?:\w+script|data):/i),ya=Ae(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Zr=Ae(/^html$/i),$a=Ae(/^[a-z][.\w]*(-[.\w]+)+$/i);var lr=Object.freeze({__proto__:null,ARIA_ATTR:ga,ATTR_WHITESPACE:ya,CUSTOM_ELEMENT:$a,DATA_ATTR:ha,DOCTYPE_NAME:Zr,ERB_EXPR:pa,IS_ALLOWED_URI:qr,IS_SCRIPT_OR_DATA:ba,MUSTACHE_EXPR:fa,TMPLIT_EXPR:ma});const vt={element:1,text:3,progressingInstruction:7,comment:8,document:9},xa=function(){return typeof window>"u"?null:window},wa=function(t,n){if(typeof t!="object"||typeof t.createPolicy!="function")return null;let r=null;const o="data-tt-policy-suffix";n&&n.hasAttribute(o)&&(r=n.getAttribute(o));const a="dompurify"+(r?"#"+r:"");try{return t.createPolicy(a,{createHTML(l){return l},createScriptURL(l){return l}})}catch{return console.warn("TrustedTypes policy "+a+" could not be created."),null}},cr=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}};function Yr(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:xa();const t=j=>Yr(j);if(t.version="3.3.1",t.removed=[],!e||!e.document||e.document.nodeType!==vt.document||!e.Element)return t.isSupported=!1,t;let{document:n}=e;const r=n,o=r.currentScript,{DocumentFragment:a,HTMLTemplateElement:l,Node:d,Element:u,NodeFilter:f,NamedNodeMap:h=e.NamedNodeMap||e.MozNamedAttrMap,HTMLFormElement:g,DOMParser:y,trustedTypes:m}=e,$=u.prototype,T=kt($,"cloneNode"),M=kt($,"remove"),S=kt($,"nextSibling"),v=kt($,"childNodes"),R=kt($,"parentNode");if(typeof l=="function"){const j=n.createElement("template");j.content&&j.content.ownerDocument&&(n=j.content.ownerDocument)}let E,_="";const{implementation:A,createNodeIterator:w,createDocumentFragment:V,getElementsByTagName:ee}=n,{importNode:L}=r;let O=cr();t.isSupported=typeof Vr=="function"&&typeof R=="function"&&A&&A.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:W,ERB_EXPR:U,TMPLIT_EXPR:x,DATA_ATTR:D,ARIA_ATTR:q,IS_SCRIPT_OR_DATA:I,ATTR_WHITESPACE:P,CUSTOM_ELEMENT:F}=lr;let{IS_ALLOWED_URI:G}=lr,z=null;const be=H({},[...or,...nn,...rn,...on,...ir]);let Z=null;const Be=H({},[...ar,...an,...sr,...Ht]);let N=Object.seal(mn(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),X=null,se=null;const Y=Object.seal(mn(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}}));let Te=!0,K=!0,ie=!1,Ge=!0,We=!1,ve=!0,Ve=!1,at=!1,st=!1,Ee=!1,et=!1,de=!1,gt=!0,bt=!1;const yt="user-content-";let $t=!0,ye=!1,_e={},ne=null;const Ke=H({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let Ot=null;const Nt=H({},["audio","video","img","source","image","track"]);let xt=null;const wt=H({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),tt="http://www.w3.org/1998/Math/MathML",J="http://www.w3.org/2000/svg",le="http://www.w3.org/1999/xhtml";let te=le,pe=!1,lt=null;const ct=H({},[tt,J,le],en);let St=H({},["mi","mo","mn","ms","mtext"]),Je=H({},["annotation-xml"]);const Yt=H({},["title","style","font","a","script"]);let _t=null;const ho=["application/xhtml+xml","text/html"],go="text/html";let ae=null,dt=null;const bo=n.createElement("form"),Dn=function(i){return i instanceof RegExp||i instanceof Function},Xt=function(){let i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(dt&&dt===i)){if((!i||typeof i!="object")&&(i={}),i=Ne(i),_t=ho.indexOf(i.PARSER_MEDIA_TYPE)===-1?go:i.PARSER_MEDIA_TYPE,ae=_t==="application/xhtml+xml"?en:Bt,z=Ce(i,"ALLOWED_TAGS")?H({},i.ALLOWED_TAGS,ae):be,Z=Ce(i,"ALLOWED_ATTR")?H({},i.ALLOWED_ATTR,ae):Be,lt=Ce(i,"ALLOWED_NAMESPACES")?H({},i.ALLOWED_NAMESPACES,en):ct,xt=Ce(i,"ADD_URI_SAFE_ATTR")?H(Ne(wt),i.ADD_URI_SAFE_ATTR,ae):wt,Ot=Ce(i,"ADD_DATA_URI_TAGS")?H(Ne(Nt),i.ADD_DATA_URI_TAGS,ae):Nt,ne=Ce(i,"FORBID_CONTENTS")?H({},i.FORBID_CONTENTS,ae):Ke,X=Ce(i,"FORBID_TAGS")?H({},i.FORBID_TAGS,ae):Ne({}),se=Ce(i,"FORBID_ATTR")?H({},i.FORBID_ATTR,ae):Ne({}),_e=Ce(i,"USE_PROFILES")?i.USE_PROFILES:!1,Te=i.ALLOW_ARIA_ATTR!==!1,K=i.ALLOW_DATA_ATTR!==!1,ie=i.ALLOW_UNKNOWN_PROTOCOLS||!1,Ge=i.ALLOW_SELF_CLOSE_IN_ATTR!==!1,We=i.SAFE_FOR_TEMPLATES||!1,ve=i.SAFE_FOR_XML!==!1,Ve=i.WHOLE_DOCUMENT||!1,Ee=i.RETURN_DOM||!1,et=i.RETURN_DOM_FRAGMENT||!1,de=i.RETURN_TRUSTED_TYPE||!1,st=i.FORCE_BODY||!1,gt=i.SANITIZE_DOM!==!1,bt=i.SANITIZE_NAMED_PROPS||!1,$t=i.KEEP_CONTENT!==!1,ye=i.IN_PLACE||!1,G=i.ALLOWED_URI_REGEXP||qr,te=i.NAMESPACE||le,St=i.MATHML_TEXT_INTEGRATION_POINTS||St,Je=i.HTML_INTEGRATION_POINTS||Je,N=i.CUSTOM_ELEMENT_HANDLING||{},i.CUSTOM_ELEMENT_HANDLING&&Dn(i.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(N.tagNameCheck=i.CUSTOM_ELEMENT_HANDLING.tagNameCheck),i.CUSTOM_ELEMENT_HANDLING&&Dn(i.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(N.attributeNameCheck=i.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),i.CUSTOM_ELEMENT_HANDLING&&typeof i.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(N.allowCustomizedBuiltInElements=i.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),We&&(K=!1),et&&(Ee=!0),_e&&(z=H({},ir),Z=[],_e.html===!0&&(H(z,or),H(Z,ar)),_e.svg===!0&&(H(z,nn),H(Z,an),H(Z,Ht)),_e.svgFilters===!0&&(H(z,rn),H(Z,an),H(Z,Ht)),_e.mathMl===!0&&(H(z,on),H(Z,sr),H(Z,Ht))),i.ADD_TAGS&&(typeof i.ADD_TAGS=="function"?Y.tagCheck=i.ADD_TAGS:(z===be&&(z=Ne(z)),H(z,i.ADD_TAGS,ae))),i.ADD_ATTR&&(typeof i.ADD_ATTR=="function"?Y.attributeCheck=i.ADD_ATTR:(Z===Be&&(Z=Ne(Z)),H(Z,i.ADD_ATTR,ae))),i.ADD_URI_SAFE_ATTR&&H(xt,i.ADD_URI_SAFE_ATTR,ae),i.FORBID_CONTENTS&&(ne===Ke&&(ne=Ne(ne)),H(ne,i.FORBID_CONTENTS,ae)),i.ADD_FORBID_CONTENTS&&(ne===Ke&&(ne=Ne(ne)),H(ne,i.ADD_FORBID_CONTENTS,ae)),$t&&(z["#text"]=!0),Ve&&H(z,["html","head","body"]),z.table&&(H(z,["tbody"]),delete X.tbody),i.TRUSTED_TYPES_POLICY){if(typeof i.TRUSTED_TYPES_POLICY.createHTML!="function")throw At('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof i.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw At('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');E=i.TRUSTED_TYPES_POLICY,_=E.createHTML("")}else E===void 0&&(E=wa(m,o)),E!==null&&typeof _=="string"&&(_=E.createHTML(""));he&&he(i),dt=i}},On=H({},[...nn,...rn,...da]),Nn=H({},[...on,...ua]),yo=function(i){let b=R(i);(!b||!b.tagName)&&(b={namespaceURI:te,tagName:"template"});const k=Bt(i.tagName),Q=Bt(b.tagName);return lt[i.namespaceURI]?i.namespaceURI===J?b.namespaceURI===le?k==="svg":b.namespaceURI===tt?k==="svg"&&(Q==="annotation-xml"||St[Q]):!!On[k]:i.namespaceURI===tt?b.namespaceURI===le?k==="math":b.namespaceURI===J?k==="math"&&Je[Q]:!!Nn[k]:i.namespaceURI===le?b.namespaceURI===J&&!Je[Q]||b.namespaceURI===tt&&!St[Q]?!1:!Nn[k]&&(Yt[k]||!On[k]):!!(_t==="application/xhtml+xml"&&lt[i.namespaceURI]):!1},je=function(i){It(t.removed,{element:i});try{R(i).removeChild(i)}catch{M(i)}},nt=function(i,b){try{It(t.removed,{attribute:b.getAttributeNode(i),from:b})}catch{It(t.removed,{attribute:null,from:b})}if(b.removeAttribute(i),i==="is")if(Ee||et)try{je(b)}catch{}else try{b.setAttribute(i,"")}catch{}},Pn=function(i){let b=null,k=null;if(st)i="<remove></remove>"+i;else{const re=tn(i,/^[\r\n\t ]+/);k=re&&re[0]}_t==="application/xhtml+xml"&&te===le&&(i='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+i+"</body></html>");const Q=E?E.createHTML(i):i;if(te===le)try{b=new y().parseFromString(Q,_t)}catch{}if(!b||!b.documentElement){b=A.createDocument(te,"template",null);try{b.documentElement.innerHTML=pe?_:Q}catch{}}const ue=b.body||b.documentElement;return i&&k&&ue.insertBefore(n.createTextNode(k),ue.childNodes[0]||null),te===le?ee.call(b,Ve?"html":"body")[0]:Ve?b.documentElement:ue},zn=function(i){return w.call(i.ownerDocument||i,i,f.SHOW_ELEMENT|f.SHOW_COMMENT|f.SHOW_TEXT|f.SHOW_PROCESSING_INSTRUCTION|f.SHOW_CDATA_SECTION,null)},Kt=function(i){return i instanceof g&&(typeof i.nodeName!="string"||typeof i.textContent!="string"||typeof i.removeChild!="function"||!(i.attributes instanceof h)||typeof i.removeAttribute!="function"||typeof i.setAttribute!="function"||typeof i.namespaceURI!="string"||typeof i.insertBefore!="function"||typeof i.hasChildNodes!="function")},Fn=function(i){return typeof d=="function"&&i instanceof d};function qe(j,i,b){Ft(j,k=>{k.call(t,i,b,dt)})}const Hn=function(i){let b=null;if(qe(O.beforeSanitizeElements,i,null),Kt(i))return je(i),!0;const k=ae(i.nodeName);if(qe(O.uponSanitizeElement,i,{tagName:k,allowedTags:z}),ve&&i.hasChildNodes()&&!Fn(i.firstElementChild)&&me(/<[/\w!]/g,i.innerHTML)&&me(/<[/\w!]/g,i.textContent)||i.nodeType===vt.progressingInstruction||ve&&i.nodeType===vt.comment&&me(/<[/\w]/g,i.data))return je(i),!0;if(!(Y.tagCheck instanceof Function&&Y.tagCheck(k))&&(!z[k]||X[k])){if(!X[k]&&Bn(k)&&(N.tagNameCheck instanceof RegExp&&me(N.tagNameCheck,k)||N.tagNameCheck instanceof Function&&N.tagNameCheck(k)))return!1;if($t&&!ne[k]){const Q=R(i)||i.parentNode,ue=v(i)||i.childNodes;if(ue&&Q){const re=ue.length;for(let $e=re-1;$e>=0;--$e){const Ze=T(ue[$e],!0);Ze.__removalCount=(i.__removalCount||0)+1,Q.insertBefore(Ze,S(i))}}}return je(i),!0}return i instanceof u&&!yo(i)||(k==="noscript"||k==="noembed"||k==="noframes")&&me(/<\/no(script|embed|frames)/i,i.innerHTML)?(je(i),!0):(We&&i.nodeType===vt.text&&(b=i.textContent,Ft([W,U,x],Q=>{b=Tt(b,Q," ")}),i.textContent!==b&&(It(t.removed,{element:i.cloneNode()}),i.textContent=b)),qe(O.afterSanitizeElements,i,null),!1)},Un=function(i,b,k){if(gt&&(b==="id"||b==="name")&&(k in n||k in bo))return!1;if(!(K&&!se[b]&&me(D,b))){if(!(Te&&me(q,b))){if(!(Y.attributeCheck instanceof Function&&Y.attributeCheck(b,i))){if(!Z[b]||se[b]){if(!(Bn(i)&&(N.tagNameCheck instanceof RegExp&&me(N.tagNameCheck,i)||N.tagNameCheck instanceof Function&&N.tagNameCheck(i))&&(N.attributeNameCheck instanceof RegExp&&me(N.attributeNameCheck,b)||N.attributeNameCheck instanceof Function&&N.attributeNameCheck(b,i))||b==="is"&&N.allowCustomizedBuiltInElements&&(N.tagNameCheck instanceof RegExp&&me(N.tagNameCheck,k)||N.tagNameCheck instanceof Function&&N.tagNameCheck(k))))return!1}else if(!xt[b]){if(!me(G,Tt(k,P,""))){if(!((b==="src"||b==="xlink:href"||b==="href")&&i!=="script"&&aa(k,"data:")===0&&Ot[i])){if(!(ie&&!me(I,Tt(k,P,"")))){if(k)return!1}}}}}}}return!0},Bn=function(i){return i!=="annotation-xml"&&tn(i,F)},Gn=function(i){qe(O.beforeSanitizeAttributes,i,null);const{attributes:b}=i;if(!b||Kt(i))return;const k={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:Z,forceKeepAttr:void 0};let Q=b.length;for(;Q--;){const ue=b[Q],{name:re,namespaceURI:$e,value:Ze}=ue,ut=ae(re),Jt=Ze;let ce=re==="value"?Jt:sa(Jt);if(k.attrName=ut,k.attrValue=ce,k.keepAttr=!0,k.forceKeepAttr=void 0,qe(O.uponSanitizeAttribute,i,k),ce=k.attrValue,bt&&(ut==="id"||ut==="name")&&(nt(re,i),ce=yt+ce),ve&&me(/((--!?|])>)|<\/(style|title|textarea)/i,ce)){nt(re,i);continue}if(ut==="attributename"&&tn(ce,"href")){nt(re,i);continue}if(k.forceKeepAttr)continue;if(!k.keepAttr){nt(re,i);continue}if(!Ge&&me(/\/>/i,ce)){nt(re,i);continue}We&&Ft([W,U,x],Vn=>{ce=Tt(ce,Vn," ")});const Wn=ae(i.nodeName);if(!Un(Wn,ut,ce)){nt(re,i);continue}if(E&&typeof m=="object"&&typeof m.getAttributeType=="function"&&!$e)switch(m.getAttributeType(Wn,ut)){case"TrustedHTML":{ce=E.createHTML(ce);break}case"TrustedScriptURL":{ce=E.createScriptURL(ce);break}}if(ce!==Jt)try{$e?i.setAttributeNS($e,re,ce):i.setAttribute(re,ce),Kt(i)?je(i):rr(t.removed)}catch{nt(re,i)}}qe(O.afterSanitizeAttributes,i,null)},$o=function j(i){let b=null;const k=zn(i);for(qe(O.beforeSanitizeShadowDOM,i,null);b=k.nextNode();)qe(O.uponSanitizeShadowNode,b,null),Hn(b),Gn(b),b.content instanceof a&&j(b.content);qe(O.afterSanitizeShadowDOM,i,null)};return t.sanitize=function(j){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},b=null,k=null,Q=null,ue=null;if(pe=!j,pe&&(j="<!-->"),typeof j!="string"&&!Fn(j))if(typeof j.toString=="function"){if(j=j.toString(),typeof j!="string")throw At("dirty is not a string, aborting")}else throw At("toString is not a function");if(!t.isSupported)return j;if(at||Xt(i),t.removed=[],typeof j=="string"&&(ye=!1),ye){if(j.nodeName){const Ze=ae(j.nodeName);if(!z[Ze]||X[Ze])throw At("root node is forbidden and cannot be sanitized in-place")}}else if(j instanceof d)b=Pn("<!---->"),k=b.ownerDocument.importNode(j,!0),k.nodeType===vt.element&&k.nodeName==="BODY"||k.nodeName==="HTML"?b=k:b.appendChild(k);else{if(!Ee&&!We&&!Ve&&j.indexOf("<")===-1)return E&&de?E.createHTML(j):j;if(b=Pn(j),!b)return Ee?null:de?_:""}b&&st&&je(b.firstChild);const re=zn(ye?j:b);for(;Q=re.nextNode();)Hn(Q),Gn(Q),Q.content instanceof a&&$o(Q.content);if(ye)return j;if(Ee){if(et)for(ue=V.call(b.ownerDocument);b.firstChild;)ue.appendChild(b.firstChild);else ue=b;return(Z.shadowroot||Z.shadowrootmode)&&(ue=L.call(r,ue,!0)),ue}let $e=Ve?b.outerHTML:b.innerHTML;return Ve&&z["!doctype"]&&b.ownerDocument&&b.ownerDocument.doctype&&b.ownerDocument.doctype.name&&me(Zr,b.ownerDocument.doctype.name)&&($e="<!DOCTYPE "+b.ownerDocument.doctype.name+`>
`+$e),We&&Ft([W,U,x],Ze=>{$e=Tt($e,Ze," ")}),E&&de?E.createHTML($e):$e},t.setConfig=function(){let j=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Xt(j),at=!0},t.clearConfig=function(){dt=null,at=!1},t.isValidAttribute=function(j,i,b){dt||Xt({});const k=ae(j),Q=ae(i);return Un(k,Q,b)},t.addHook=function(j,i){typeof i=="function"&&It(O[j],i)},t.removeHook=function(j,i){if(i!==void 0){const b=oa(O[j],i);return b===-1?void 0:ia(O[j],b,1)[0]}return rr(O[j])},t.removeHooks=function(j){O[j]=[]},t.removeAllHooks=function(){O=cr()},t}var Sa=Yr();const Xr=He("html",[]),Mt=Sa(),_a=p`
  ul,
  ol {
    padding-inline-start: 2.5rem;
  }

  li {
    margin: 0.5rem 0;
  }

  ul li {
    ul {
      margin-inline-start: 1rem;
      list-style-type: circle;
    }

    ul ul {
      margin-inline-start: 2rem;
      list-style-type: square;
    }

    ul ul ul {
      margin-inline-start: 3rem;
      list-style-type: disc;
    }
  }

  ol li {
    ol {
      margin-inline-start: 1rem;
      list-style-type: lower-alpha;
    }

    ol ol {
      margin-inline-start: 2rem;
      list-style-type: lower-roman;
    }

    ol ol ol {
      margin-inline-start: 3rem;
      list-style-type: decimal;
    }
  }
`,Ia=e=>p`
  border-collapse: collapse;

  td {
    border: 0.0625rem solid ${e.base.palette["border-line"]};
    min-width: 6.25rem;
  }

  tr:first-child {
    td:first-child {
      border-top-left-radius: 0.125rem;
    }

    td:last-child {
      border-top-right-radius: 0.125rem;
    }
  }

  tr:last-child {
    td:first-child {
      border-bottom-left-radius: 0.125rem;
    }

    td:last-child {
      border-bottom-right-radius: 0.125rem;
    }
  }
`,Ta=e=>{const{base:{"font-size":t,"font-scale":n,palette:r},components:{text:o}}=e,a=it(t,n);return`
    ${_a}
    table {
      ${Ia(e)}
    }
    img {
      max-width: 100%;
      height: auto;
      border-radius: 0.25rem;
    }
    a {
      color: ${r.interactive};
    }
    pre {
      white-space: break-spaces;
    }
    p {
      min-height: ${a[o.primary["font-size"]]};
    }
    h1 {
      font-size: ${a[o.h1["font-size"]]};
      font-weight: ${o.h1["font-weight"]};
      min-height: ${a[o.h1["font-size"]]};
    }
    h2 {
      font-size: ${a[o.h2["font-size"]]};
      font-weight: ${o.h2["font-weight"]};
      min-height: ${a[o.h2["font-size"]]};
    }
    h3 {
      font-size: ${a[o.h3["font-size"]]};
      font-weight: ${o.h3["font-weight"]};
      min-height: ${a[o.h3["font-size"]]};
    }
    h4 {
      font-size: ${a[o.h4["font-size"]]};
      font-weight: ${o.h4["font-weight"]};
      min-height: ${a[o.h4["font-size"]]};
    }
    h5 {
      font-size: ${a[o.h5["font-size"]]};
      font-weight: ${o.h5["font-weight"]};
      min-height: ${a[o.h5["font-size"]]};
    }
    h6 {
      font-size: ${a[o.h6["font-size"]]};
      font-weight: ${o.h6["font-weight"]};
      min-height: ${a[o.h6["font-size"]]};
    }
  `},Kr=C.div(({theme:e})=>p`
    width: 100%;
    overflow-x: auto;
    overflow-wrap: break-word;
    contain: paint;
    ${Ta(e)}

    ${dn} ul {
      ul {
        padding-inline-start: 0;
      }
      ol {
        padding-inline-start: 0;
      }
    }

    ${dn} li {
      margin: 0;
    }
  `);Kr.defaultProps=B;if(Mt.isSupported){const e=new WeakSet;Mt.addHook("beforeSanitizeAttributes",t=>{(t instanceof HTMLElement||t instanceof SVGElement)&&(t.removeAttribute("class"),t.tagName==="A"&&t.hasAttribute("href")&&t.getAttribute("target")==="_blank"&&e.add(t))}),Mt.addHook("afterSanitizeAttributes",t=>{if(t.tagName==="A"&&t.hasAttribute("href")){const n=t.getAttribute("href");let r;try{r=new URL(n,window.location.href)}catch{return}window.location.origin!==r.origin?(t.setAttribute("target","_blank"),t.setAttribute("rel","noopener")):e.has(t)&&(t.setAttribute("target","_blank"),e.delete(t))}})}const Aa=c.forwardRef(function({testId:t,content:n,customTags:r,...o},a){const[l,d]=c.useState(!1),u=c.useMemo(()=>l&&Mt.isSupported?Mt.sanitize(n,{FORBID_TAGS:["style","font"],CUSTOM_ELEMENT_HANDLING:{tagNameCheck:r?h=>r.includes(h):void 0},ALLOWED_URI_REGEXP:Po}):"",[n,r,l]),f=Le(t,Xr);return c.useEffect(()=>{d(!0)},[]),s.jsx(Kr,{"data-testid":f.root,...o,dangerouslySetInnerHTML:{__html:u},ref:a})}),ka=Re(Aa,Xr),va=C.div``,Jr=C.div``,Zt=C.div(({theme:e})=>p`
    position: relative;
    @media (height >= 31.25rem) {
      overflow-y: auto;
      min-height: 4rem;
    }
    padding: calc(2 * ${e.base.spacing});

    /* Small amount of block padding accounts for focus ring clipping within overflow auto. */
    ${Jr} + & {
      padding-block-start: calc(0.5 * ${e.base.spacing});
    }

    &:not(:last-child) {
      padding-block-end: calc(0.5 * ${e.base.spacing});
    }
  `);Zt.defaultProps=B;C.div``;const Qr=C(_n)(({theme:e})=>p`
    display: flex;
    flex-direction: column;
    min-width: min(${e.base["content-width"].sm}, calc(100vw - 2rem));
    max-width: min(${e.base["content-width"].lg}, calc(100vw - 2rem));
    max-height: calc(100vh - 2rem);

    @media (height < 31.25rem) {
      overflow-y: auto;
    }

    &[aria-busy='true'] {
      ${Zt} {
        overflow: hidden;
      }
    }
  `);Qr.defaultProps=B;const Ea=c.forwardRef(function({arrow:t=!0,target:n,portal:r,strategy:o,placement:a,children:l,progress:d,focusTrap:u=!0,...f},h){const g=we(h);return Do(u?g:null,!1),s.jsx(Qr,{...f,role:"dialog",arrow:t,"aria-modal":!1,"aria-busy":!!d,ref:g,target:n,portal:r,strategy:o,placement:a,children:l})}),eo=C(Ue)``,to=C(Ea)(({theme:e})=>p`
    /* When a header is not rendered(e.g. progress state) the button must positioned atop. */
    ${Zt} > ${eo} {
      position: relative;
      z-index: calc(${e.base["z-index"].backdrop} + 1);
      align-self: end;
    }
  `);to.defaultProps=B;const Ca=c.forwardRef(function({target:t,heading:n,children:r,progress:o,onDismiss:a,...l},d){const u=ke(),f=Qe(),h=we(d),g=c.useRef(null),y=c.useRef(null),m=()=>{if(o)return;const S=br(h),v=S.find(R=>{var E;return(E=g.current)==null?void 0:E.contains(R)})??y.current??S[0];v==null||v.focus()};Gt(S=>{a==null||a(),S.stopPropagation()},h,[a]),$r("mousedown",[t,h],()=>{a==null||a()}),c.useLayoutEffect(()=>{const S=xn();return()=>{S instanceof HTMLElement&&S.isConnected&&S.focus()}},[]),c.useEffect(()=>{o||m()},[o]),c.useEffect(()=>{const S=()=>{setTimeout(()=>{a==null||a()},0)};return t.addEventListener("click",S),()=>{t.removeEventListener("click",S)}},[]);const $=n?s.jsx(Me,{id:f,variant:"h2",children:typeof n=="string"?n:n.primary}):null,T=s.jsx(Sn,{visible:!!o,focusOnVisible:!0,placement:"local",message:typeof o=="string"?o:void 0}),M=s.jsx(eo,{icon:!0,variant:"simple",onClick:()=>{a()},label:u("close"),ref:y,children:s.jsx(Se,{name:"times"})});return s.jsxs(to,{...l,...typeof n=="string"?{"aria-labelledby":f}:{"aria-label":n==null?void 0:n.primary},arrow:!0,target:t,progress:o,ref:h,children:[n&&$&&s.jsxs(oe,{container:{alignItems:"center",justify:"between",pad:2,gap:1},item:{shrink:0},as:Jr,children:[typeof n=="string"?$:s.jsx(vn,{primary:$,secondary:n.secondary?s.jsx(Me,{variant:"secondary",children:n.secondary}):void 0,visual:n.visual}),M]}),(!n||r||o)&&s.jsxs(oe,{container:{direction:"column"},item:{grow:1},as:Zt,ref:g,children:[!n&&M,r&&s.jsx(va,{inert:o?"":void 0,children:r}),T]})]})}),Ma="budicon",Ra="information",La=()=>s.jsx("path",{d:"M4.37 20.63C2.122 18.386 1 15.69 1 12.5c0-3.19 1.123-5.885 3.37-8.13C6.614 2.122 9.31 1 12.5 1c3.19 0 5.885 1.123 8.13 3.37C22.878 6.614 24 9.31 24 12.5c0 3.19-1.123 5.885-3.37 8.13C18.386 22.878 15.69 24 12.5 24c-3.19 0-5.885-1.123-8.13-3.37Zm-2.49-8.182c0 2.15.582 4.12 1.791 5.866 1.164 1.79 2.73 3.09 4.701 3.94 1.971.851 4.03 1.03 6.134.627s3.895-1.388 5.418-2.91c1.478-1.478 2.463-3.314 2.91-5.418.404-2.105.224-4.12-.626-6.09-.806-1.97-2.104-3.537-3.85-4.745-1.792-1.21-3.761-1.791-5.91-1.791-2.911 0-5.373 1.03-7.433 3.045-2.06 2.06-3.09 4.567-3.134 7.477ZM13.65 5.14c.843 0 1.61.69 1.61 1.61 0 .92-.69 1.61-1.61 1.61-.843 0-1.61-.69-1.61-1.61 0-.92.69-1.61 1.61-1.61ZM12.1 19.4c-1.263 0-2.175-1.04-1.824-2.274l1.5-4.36c.14-.51.359-1.437-.132-1.437-.328 0-.728.164-1.201.491.35-1.09 1.333-1.62 2.456-1.62 1.264 0 2.176 1.04 1.825 2.274l-1.5 4.36c-.14.51-.17 1.338.322 1.338.328 0 .665-.13 1.011-.392-.35 1.09-1.333 1.62-2.456 1.62Z"}),ja="0 0 25 25",Da=Object.freeze(Object.defineProperty({__proto__:null,Component:La,name:Ra,set:Ma,viewBox:ja},Symbol.toStringTag,{value:"Module"}));Ye(Da);const no=C.div``,Oa=c.forwardRef(function(t,n){const r=ke(),{heading:o=r("additional_info"),contextualLabel:a,children:l,dialogHandle:d,...u}=t,[f,h]=c.useState(null),g=c.useRef(null),y=we(d);return c.useImperativeHandle(y,()=>({open:()=>{h(g.current)},close:()=>{h(null)}})),s.jsxs(oe,{container:!0,as:no,ref:n,...u,children:[s.jsx(Ue,{variant:"simple",label:r("additional_info"),compact:!0,icon:!0,ref:g,onClick:()=>{var m;(m=y.current)==null||m.open()},"aria-label":`${r("additional_info")} - ${a??o}`,children:s.jsx(Se,{name:"information"})}),f&&s.jsx(Ca,{heading:o,target:f,onDismiss:()=>{var m;(m=y.current)==null||m.close()},children:typeof l=="string"?s.jsx(ka,{content:l}):l})]})}),Fe=C.label(({theme:e,labelHidden:t})=>{const{"foreground-color":n}=e.components.label,r=xe(()=>t?Lt:mt(Vt(e.base.palette["primary-background"]),e.base.transparency["transparent-3"])),o=it(e.base["font-size"],e.base["font-scale"]);return t?Lt:p`
          max-width: max-content;
          font-size: ${o[e.components.label["font-size"]]};
          font-weight: ${e.components.label["font-weight"]};
          color: ${n==="auto"?r:n};
        `});Fe.defaultProps=B;const Na=c.forwardRef(function({children:t,labelHidden:n=!1,htmlFor:r,...o},a){return s.jsx(Fe,{ref:a,labelHidden:n,htmlFor:r===""?void 0:r,...o,children:t})}),Pa="budicon",za="warn-solid",Fa=()=>s.jsx("path",{d:"M23.5 22.5h-22l11-20 11 20Zm-9.741-6.935V9.39a1.655 1.655 0 0 0-1.166-.447c-.42 0-.792.134-1.212.447v6.175a3.23 3.23 0 0 0 1.212.223c.466 0 .839-.09 1.166-.223Zm-1.212 4.787c.466 0 .886-.179 1.212-.492.326-.313.466-.671.466-1.074 0-.447-.14-.85-.466-1.163-.326-.313-.746-.447-1.212-.447-.42 0-.792.134-1.119.447a1.594 1.594 0 0 0-.512 1.163c0 .403.186.76.512 1.074.327.313.7.492 1.119.492Z"}),Ha="0 0 25 25",Ua=Object.freeze(Object.defineProperty({__proto__:null,Component:Fa,name:za,set:Pa,viewBox:Ha},Symbol.toStringTag,{value:"Module"})),Ba="budicon",Ga="diamond-minus",Wa=()=>s.jsx("path",{fill:"currentColor",fillRule:"evenodd",d:"M23.219 13.178a.96.96 0 0 0 0-1.356L13.179 1.78a.96.96 0 0 0-1.357 0L1.78 11.821a.96.96 0 0 0 0 1.357l10.04 10.041a.96.96 0 0 0 1.357 0l10.041-10.04ZM18 11.5H7v2h11v-2Z"}),Va="0 0 25 25",qa=Object.freeze(Object.defineProperty({__proto__:null,Component:Wa,name:Ga,set:Ba,viewBox:Va},Symbol.toStringTag,{value:"Module"})),ot=C.div(({theme:{base:{"border-radius":e,"font-size":t,"font-scale":n,animation:{speed:r,timing:o},palette:a},components:{"form-field":l,"form-control":{"foreground-color":d,"background-color":u,"border-color":f,"border-radius":h,"border-width":g,":hover":{"border-color":y},":focus":{"border-color":m,"box-shadow":$},":disabled":{"border-color":T,"background-color":M},":read-only":{"border-color":S,"background-color":v}}}},status:R,hasSuggestion:E})=>{const _=it(t,n),A=R&&l[R]?l[R]["status-color"]:f,w=E&&R?Rt(.1,l[R]["status-color"],a["primary-background"]):u;return p`
      color: ${d};
      background-color: ${w};
      border-radius: calc(${e} * ${h});
      border-color: ${A};
      border-width: ${g};
      border-style: solid;
      transition-property: color, background-color, border-color;
      transition-duration: ${r};
      transition-timing-function: ${o.ease};
      &,
      & > select {
        outline: none;
      }

      &:disabled,
      &[disabled] {
        background-color: ${M};
        border-color: ${T};
        cursor: not-allowed;
      }

      &:focus:not([disabled]) {
        border-color: ${m};
        box-shadow: ${$};
        ${E&&p`
          background-color: ${u};
        `}
      }

      &:focus-within:not([disabled]) {
        ${E&&p`
          background-color: ${u};
        `}
      }

      &:hover:not([readonly]):not([disabled]):not(:focus, :focus-within) {
        ${!R&&p`
          border-color: ${y};
        `}
        ${E&&p`
          background-color: ${u};
          box-shadow: 0 0 0 0.125rem ${mt(A,.2)};
        `}
      }

      ${E&&p`
        border-end-end-radius: 0;
      `}

      &[readonly] {
        background-color: ${v};
        border-color: ${S};
      }

      @media (pointer: coarse) {
        /* stylelint-disable-next-line unit-allowed-list */
        font-size: max(${_.s}, 16px);
      }
    `});ot.defaultProps=B;c.forwardRef(function(t,n){return s.jsx(ot,{ref:n,...t})});const Za=C.span`
  display: none;
`,Ya=c.forwardRef(function(t,n){const{portalTarget:r}=$n();return r?xo.createPortal(s.jsx(Za,{...t,ref:n}),r):null}),Ln=["label","info","additional-info","suggestion-accept","suggestion-reject"],ro=He("form-field",Ln),oo=He("radio-check",["control",...Ln]),Dt=C.div(e=>{const{theme:{base:{spacing:t},components:{"form-field":n,"radio-check":{size:r,"touch-size":o,"background-color":a,"border-color":l,"border-width":d}}},status:u}=e;let f=l;return(u==="error"||u==="warning")&&(f=n[u]["status-color"]),p`
      display: flex;
      flex-shrink: 0;
      position: relative;
      width: ${r};
      height: ${r};
      margin-inline-end: calc(0.5 * ${t});
      border: ${d} solid ${f};
      background-color: ${a};

      @media (pointer: coarse) {
        width: ${o};
        height: ${o};
      }

      &::after {
        content: '';
        display: none;
      }
    `});Dt.defaultProps=B;const jn=C.input(e=>{const{disabled:t,theme:{base:{"border-radius":n},components:{"form-control":{":focus":{"box-shadow":r,"border-color":o},":read-only":{"background-color":a}},"radio-check":{size:l,":checked":{"background-color":d,"border-color":u}},checkbox:{"border-radius":f},"radio-button":{"border-radius":h}}}}=e,g=e.readOnly?a:d,y=xe(()=>Vt(g)),m=`+ ${Fe} ${Dt}`,{ltr:$}=Xe();return p`
    ${Lt}
    margin: 0;

    /* Sets rect size for JAWS focus outline */
    width: ${l};
    height: ${l};

    ${!t&&p`
      &:focus ${m} {
        box-shadow: ${r};
        border-color: ${o};
      }
    `}
    &:checked
      ${m},
      &:checked:disabled
      ${m},
      &[type='checkbox']:indeterminate
      ${m},
      &[type='checkbox']:indeterminate:disabled
      ${m} {
      border-color: ${e.readOnly?"inherit":u};
      background-color: ${g};

      &::after {
        display: block;
      }
    }

    &[type='radio'] ${m}, &[type='radio'] ${m}::after {
      border-radius: ${h};
    }

    &[type='radio'] ${m}::after {
      content: '';
      position: absolute;
      inset: 0;
      margin: auto;
      width: calc(${l} * 0.3);
      height: calc(${l} * 0.3);
      border-radius: ${h};
      border: calc(${l} * 0.2) solid ${y};
    }

    &[type='checkbox'] ${m} {
      border-radius: min(calc(${n} * ${f}), 0.25rem);
    }

    &[type='checkbox']:not(:indeterminate) ${m} {
      &::after {
        width: 40%;
        height: 75%;
        ${$?p`
              transform: rotate(45deg) translate(50%, -30%);
            `:p`
              transform: rotate(45deg) translate(-50%, 30%);
            `}
        border-right: 0.15em solid ${y};
        border-bottom: 0.15em solid ${y};
      }
    }

    &[type='checkbox']:indeterminate ${m} {
      display: flex;

      &::after {
        width: 90%;
        height: 0.15em;
        margin: auto;
        background-color: ${y};
      }
    }
  `});jn.defaultProps=B;const io=C.div(e=>{const{disabled:t,readOnly:n,theme:{base:r,components:{"radio-check":{label:{color:o,"font-weight":a}},"form-control":{":hover":{"border-color":l}}}}}=e,d=it(r["font-size"],r["font-scale"]);return p`
      > ${Fe} {
        cursor: pointer;
        display: flex;
        align-items: center;
        font-weight: ${a};
        word-break: break-word;
        font-size: ${d.s};
        color: ${o};
        margin: 0;
        min-height: ${r["hit-area"]["mouse-min"]};

        @media (pointer: coarse) {
          min-height: ${r["hit-area"]["finger-min"]};
        }
      }

      > ${pt} {
        margin: 0;
        padding-inline-start: calc(${r.spacing} / 4);
      }

      ${!(t||n)&&p`
        &:not(:focus-within) > ${Fe}:hover ${Dt} {
          border-color: ${l};
        }
      `}
    `});io.defaultProps=B;const ao=C.label(({disabled:e,readOnly:t,status:n,theme:{base:{palette:r,shadow:o,spacing:a},components:{card:l,"form-field":d,"radio-check":{label:u},"form-control":{":hover":{"border-color":f}}}}})=>{const h=n==="error"?d.error["status-color"]:r["border-line"];return p`
      min-width: min-content;
      cursor: pointer;
      background-color: ${l.background};
      border-radius: ${l["border-radius"]};
      border: 0.0625rem solid ${h};
      padding: ${a};

      ${e&&p`
        cursor: not-allowed;
      `}
      ${!(e||t)&&p`
        :hover:not(:focus-within) {
          border-color: ${f};

          ${Fe} ${Dt} {
            border-color: ${f};
          }
        }

        :focus-within {
          box-shadow: ${o.focus};
          border-color: transparent;
        }
      `}
        > ${Fe} {
        display: flex;
        align-items: center;
        color: ${u.color};
        font-weight: ${u["font-weight"]};
        margin: 0;
      }

      > ${pt} {
        margin: 0;
        padding-inline-start: calc(${a} / 4);
      }
    `});ao.defaultProps=B;const Xa=c.forwardRef(function(t,n){const r=Qe(),o=ke(),{testId:a,type:l,id:d=r,label:u,required:f=!1,disabled:h=!1,readOnly:g=!1,indeterminate:y=!1,checked:m,defaultChecked:$,variant:T="simple",onClick:M,onKeyDown:S,onChange:v,status:R,info:E,additionalInfo:_,ariaDescribedby:A,className:w,...V}=t,ee=Le(a,oo),L=l==="radio",O=T==="card",W=we(n),U=Qe();return c.useEffect(()=>{!L&&W.current&&(W.current.indeterminate=!!y)},[W,y,L]),c.useEffect(()=>{if(!W.current)return;const x=W.current.nextSibling;if((x==null?void 0:x.nodeName.toUpperCase())!=="LABEL")return;const D=new AbortController;return x.addEventListener("mousedown",q=>{W.current===xn()&&q.preventDefault()},{signal:D.signal}),()=>{D.abort()}},[]),s.jsx(uo,{testId:ee,as:O?ao:io,label:s.jsxs(s.Fragment,{children:[s.jsx(Dt,{status:R,isRadio:L,as:ot,required:f,disabled:h,readOnly:g,onMouseDown:x=>x.preventDefault()}),u,g&&s.jsx(Ya,{id:U,children:o("read_only")})]}),labelAs:O?"div":void 0,id:d,required:f,disabled:h,readOnly:g,status:R,info:E,isRadioCheck:!0,inline:!0,labelAfter:!0,additionalInfo:_,children:s.jsx(jn,{"data-testid":ee.control,...V,className:In("radio-check",w,{variant:T,type:l}),id:d,type:l,required:f,checked:m,defaultChecked:$,"aria-describedby":g?`${A} ${U}`:A,disabled:h,readOnly:g,onChange:v,onClick:x=>{g&&x.preventDefault(),M==null||M(x)},onKeyDown:x=>{l==="checkbox"&&g&&x.key===" "&&x.preventDefault(),l==="radio"&&g&&x.key.includes("Arrow")&&x.preventDefault(),S==null||S(x)},ref:W})})});Re(Xa,oo);Ye(Ua,qa,vr);const so=C(Se)(({theme:e,status:t})=>p`
    height: 1em;
    width: 1em;
    color: ${xe(()=>Tn(e.components["form-field"][t]["status-color"],e.base.palette["primary-background"]),()=>e.components["form-field"][t]["status-color"])};
    vertical-align: baseline;
  `);so.defaultProps=B;const lo=C(Ue)(({theme:e})=>p`
    margin-block-start: calc(${e.base.spacing} / 2);
    align-self: start;
  `);lo.defaultProps=B;const pt=C.div(({status:e,theme:{base:{"font-size":t,"font-scale":n,spacing:r,palette:o},components:{"form-field":a}}})=>{const{xxs:l}=it(t,n);return p`
      max-width: max-content;
      font-size: ${l};
      word-break: break-word;

      &:not(:empty) {
        margin-block-start: calc(0.25 * ${r});
      }

      ${e&&a[e]&&p`
        color: ${xe(()=>Tn(a[e]["status-color"],o["primary-background"]),()=>a[e]["status-color"])};
      `}
    `});pt.defaultProps=B;const bn=C.div``,co=C.div(e=>{const{labelAsLegend:t,isRadioCheck:n,showAdditionalInfo:r,disabled:o,required:a,theme:{base:{palette:{urgent:l},"disabled-opacity":d,spacing:u,"hit-area":{"compact-min":f}}}}=e;return p`
    ${o&&p`
      opacity: ${d};
      -webkit-user-select: none;
      user-select: none;
    `}
    position: relative;
    border: 0;

    &:has(${jn}:only-of-type) {
      ${pt} {
        min-width: 100%;
      }
    }

    > ${Fe}, > ${bn} {
      &:not(:empty) {
        margin-bottom: calc(0.25 * ${u});
        min-height: ${f};
      }
    }

    > ${Fe}, > ${bn} > ${Fe} {
      ${a&&p`
        &::after {
          content: ${'"\\00a0*" / ""'};
          color: ${l};
        }
      `}

      ${o&&p`
        cursor: not-allowed;
      `}
    }

    ${t&&p`
      > legend {
        display: inline-flex;
        align-items: flex-end;
      }
    `}

    ${t&&r&&p`
      display: block;

      > legend {
        float: inline-start;
      }

      > ${no} {
        ${!n&&p`
          float: inline-end;
        `}
        + * {
          clear: both;
        }
      }
    `}
  `});co.defaultProps=B;const yn=C(Ue)(({theme:{base:{"font-size":e,"font-scale":t,"border-radius":n,spacing:r,palette:o},components:{"form-control":{"border-radius":a,"border-width":l},"form-field":d}}})=>{const{xxs:u}=it(e,t),f=xe(()=>Tn(d.pending["status-color"],o["primary-background"]),()=>d.pending["status-color"]),h=Oo(f),g=xe(()=>Vt(f)),y=g&&mt(g,.4);return p`
    background-color: ${f};
    color: ${g};
    font-size: ${u};
    min-width: calc(3 * ${r});
    min-height: calc(3 * ${r});
    padding: 0 ${r};
    border-radius: 0;
    border: none;

    &:first-child {
      border-inline-end: ${l} solid ${y};
      border-end-start-radius: calc(${n} * ${a});
      margin-inline-start: calc(2 * ${r});
    }

    &:last-child {
      border-end-end-radius: calc(${n} * ${a});
      margin-inline-start: 0;
    }

    &:hover {
      color: ${h.foreground};
      background-color: ${h.background};
    }

    @media (pointer: coarse) {
      min-height: 2rem;
    }
  `});yn.defaultProps=B;const Ka={error:"warn-solid",warning:"diamond-minus",success:"check"},Ja=c.forwardRef(function(t,n){const r=Qe(),{testId:o,children:a,id:l=r,as:d="div",label:u,labelAs:f="label",labelFor:h=l,labelId:g,labelHidden:y=!1,labelAfter:m=!1,info:$,status:T,isRadioCheck:M,charLimitDisplay:S,required:v=!1,disabled:R=!1,readOnly:E=!1,inline:_=!1,onClear:A,actions:w,container:V,additionalInfo:ee,onResolveSuggestion:L,"aria-describedby":O,className:W,...U}=t,x=Le(o,ro),D=ke(),{announceAssertive:q}=wn(),I=f==="legend",P=T==="pending"&&!!L,F=we(n),G=c.useRef(null),[z,be]=c.useState(null),Z=!!ee&&!R&&!y,Be=s.jsxs(s.Fragment,{children:[s.jsx(Na,{"data-testid":x.label,id:g,as:f,htmlFor:f==="label"?h:void 0,labelHidden:y,onClick:K=>{E&&K.preventDefault()},inline:_,ref:G,children:u}),Z&&z&&s.jsx(Oa,{"data-testid":x.additionalInfo,heading:ee.heading,contextualLabel:z,children:ee.content})]}),N=!M&&!I&&!y?s.jsx(oe,{as:bn,container:{justify:"between",alignItems:"end"},item:{alignSelf:"stretch"},children:Be}):Be;c.useEffect(()=>{var K;be(((K=G.current)==null?void 0:K.textContent)??null)},[u]),c.useEffect(()=>{var K,ie;if(T==="error"||T==="warning"){let Ge=`${D(T)} ${$}`;(K=G.current)!=null&&K.textContent&&(Ge=`${(ie=G.current)==null?void 0:ie.textContent} ${Ge}`),q({message:Ge,type:T})}},[T,$]);let X;if(I||c.Children.count(a)>1)X=a;else{const K=c.Children.only(a).props["aria-describedby"];X=c.cloneElement(a,{"aria-describedby":[K,$&&!E?`${l}-info`:void 0].join(" ").trim()||void 0})}w&&(X=s.jsxs(oe,{container:{alignItems:"center",gap:.5},children:[X,s.jsx(ea,{items:w,menuAt:3})]}));let se=s.jsxs(oe,{id:`${l}-info`,"data-testid":x.info,status:T,as:pt,container:{alignItems:"center",gap:.5},children:[T&&T!=="pending"&&s.jsxs(s.Fragment,{children:[s.jsx(oe,{item:{alignSelf:"start"},as:so,status:T,name:Ka[T]}),s.jsx(cn,{children:`${D(T)} `})]}),$]});if(S&&(se=s.jsxs(oe,{container:{justify:se?"between":"end",gap:1},children:[se,s.jsx(oe,{item:{shrink:0},children:S})]})),P){const K=br(F);se=s.jsxs(oe,{container:{alignItems:"start",justify:"between"},children:[s.jsxs(pt,{"data-testid":x.info,status:T,id:`${l}-info`,children:[D("suggestion_info"),s.jsx(cn,{"aria-live":"polite",children:D("suggestion_assist")})]}),s.jsxs(oe,{container:{wrap:"nowrap"},children:[s.jsx(yn,{"data-testid":x.suggestionReject,onClick:()=>{var ie;L(!1),(ie=K[0])==null||ie.focus()},"aria-label":`${D("no")}, ${D("reject_suggestion_button_a11y")}${z?` - ${z}`:""}`,children:D("no")}),s.jsx(yn,{"data-testid":x.suggestionAccept,onClick:()=>{var ie;L(!0),(ie=K[0])==null||ie.focus()},"aria-label":`${D("yes")}, ${D("accept_suggestion_button_a11y")}${z?` - ${z}`:""}`,children:D("yes")})]})]})}const Y=K=>{K.key==="Enter"&&(K.target.closest("button")||(K.preventDefault(),L==null||L(!0)))},Te=[];return O&&Te.push(O),I&&$&&Te.push(`${l}-info`),s.jsxs(oe,{"data-testid":x.root,...U,container:{direction:_?"row":"column",alignItems:_?"center":void 0,wrap:M?"wrap":void 0,...V},as:co,labelAsLegend:I,isRadioCheck:M,showAdditionalInfo:Z,id:`${l}-field`,forwardedAs:d,required:v,disabled:R,readOnly:E,onKeyDown:P?Y:void 0,"aria-describedby":Te.length?Te.join(" "):void 0,ref:F,className:In("form-field",W,{status:T}),children:[(I||!m)&&N,X,!I&&m&&N,!E&&se,M&&A&&s.jsx(lo,{variant:"link",onClick:()=>{A()},children:D("clear_selection")})]})}),uo=Re(Ja,ro),Qa=C.div`
  gap: 1rem;

  /* Let flex items be aligned to the baseline of their first child */
  align-items: baseline;
  display: grid;
  grid-template-columns: 1fr 1fr;

  ${ot} {
    position: relative;
  }

  > :first-child {
    > ${ot}:after {
      content: '-';
      position: absolute;
      width: 1rem;
      inset-inline-end: -1rem;
      text-align: center;
    }
  }

  > ${ot}:first-child:after {
    content: '-';
    position: absolute;
    width: 1rem;
    inset-inline-end: -1rem;
    text-align: center;
  }
`;Qa.defaultProps=B;const fo=C.input(({theme:{base:e,components:t}})=>p`
    width: 100%;
    height: ${t.input.height};
    min-height: ${e["hit-area"]["mouse-min"]};
    padding-block: 0;
    padding-inline: ${t.input.padding};
    appearance: none;
    -webkit-appearance: none;
    text-align: inherit;

    @media (pointer: coarse) {
      min-height: ${e["hit-area"]["finger-min"]};
    }
  `);fo.defaultProps=B;const dr=He("input",["control",...Ln]),es=Re(c.forwardRef(function(t,n){const r=Qe(),{testId:o,id:a=r,value:l,defaultValue:d,required:u=!1,disabled:f=!1,readOnly:h=!1,label:g,additionalInfo:y,labelHidden:m,info:$,status:T,actions:M,onResolveSuggestion:S,className:v,...R}=t,E=Le(o,dr),_={};sn(t,"value")?_.value=l??"":sn(t,"defaultValue")&&(_.defaultValue=d??"");const A=s.jsx(ot,{"data-testid":E.control,ref:n,id:a,required:u,disabled:f,readOnly:h,status:T,hasSuggestion:!!S&&T==="pending",..._,autoComplete:"_off",...R,as:fo,className:In("input",v)});return g?s.jsx(uo,{testId:E,additionalInfo:y,label:g,labelHidden:m,id:a,info:$,readOnly:h,status:T,required:u,disabled:f,actions:M,onResolveSuggestion:S,children:A}):A}),dr);window!=null&&window.__webpack_nonce__&&(__webpack_nonce__=window.__webpack_nonce__);const ts=C.div(()=>p`
    margin: 0px 0;

    .masked-input-container {
      position: relative;
      display: inline-block;
      width: 100%;
    }

    .eye-toggle-button {
      position: absolute;
      right: 8px;
      top: 70%;
      transform: translateY(-50%);
      background: none;
      border: none;
      cursor: pointer;
      padding: 4px;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 10;
      transition: background-color 0.2s ease, opacity 0.2s ease;

      &:hover:not(:disabled) {
        background-color: rgba(0, 0, 0, 0.1);
      }

      &:active:not(:disabled) {
        background-color: rgba(0, 0, 0, 0.15);
        transform: translateY(-50%) scale(0.95);
      }
    }

    .eye-icon {
      font-size: 16px;
      line-height: 1;
      user-select: none;
      pointer-events: none;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #666;
      transition: color 0.2s ease;
    }

    .eye-toggle-button:hover:not(:disabled) .eye-icon {
      color: #333;
    }

    .eye-toggle-button:disabled .eye-icon {
      color: #ccc;
    }

    /* Adjust input padding to make room for the eye icon */
    .masked-input-container input[type="text"],
    .masked-input-container input[type="password"] {
      padding-right: 40px !important;
    }

    /* Responsive adjustments */
    @media (max-width: 768px) {
      .eye-toggle-button {
        right: 6px;
        padding: 6px;
      }

      .eye-icon {
        font-size: 14px;
      }
    }
  `),ns=()=>s.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),s.jsx("circle",{cx:"12",cy:"12",r:"3"})]}),rs=()=>s.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"}),s.jsx("line",{x1:"1",y1:"1",x2:"23",y2:"23"})]});function po(e){const{getPConnect:t,value:n,placeholder:r,disabled:o=!1,displayMode:a,readOnly:l=!1,required:d=!1,label:u,hideLabel:f=!1,testId:h,variant:g="inline",defaultMasked:y=!0}=e,m=t(),$=m.getActionsApi(),M=m.getStateProps().value,[S,v]=c.useState(y),R=A=>{const{value:w}=A.target;$.updateFieldValue(M,w)},E=()=>{v(!S)},_=A=>{(A.key==="Enter"||A.key===" ")&&(A.preventDefault(),E())};return s.jsx(ts,{children:s.jsxs("div",{className:"masked-input-container",children:[s.jsx(es,{type:S?"password":"text",value:n,label:u,labelHidden:f,placeholder:r,disabled:o,readOnly:l,required:d,onChange:R,testId:h}),s.jsx("button",{type:"button",className:"eye-toggle-button",onClick:E,onKeyDown:_,"aria-label":S?"Show text":"Hide text","aria-pressed":!S,disabled:o||l,tabIndex:o||l?-1:0,children:s.jsx("span",{className:"eye-icon",role:"img","aria-hidden":"true",children:S?s.jsx(ns,{}):s.jsx(rs,{})})})]})})}const mo=Uo(po);po.__docgenInfo={description:"",methods:[],displayName:"PegaExtensionsMaskedWithEyeInput",props:{variant:{required:!1,tsType:{name:"any"},description:""},defaultMasked:{required:!1,tsType:{name:"boolean"},description:""}},composes:["PConnFieldProps"]};const cs={title:"PegaFieldMaskedwithEyeIcon",component:mo,excludeStories:/.*Data$/},ft=e=>{const[t,n]=c.useState(Ie.value),r={value:t,hasSuggestions:Ie.hasSuggestions,getPConnect:()=>({getStateProps:()=>No,getActionsApi:()=>({updateFieldValue:(o,a)=>{n(a)},triggerFieldChange:()=>{}}),ignoreSuggestion:()=>{},acceptSuggestion:()=>{},setInheritedProps:()=>{},resolveConfigProps:()=>{}})};return s.jsx(s.Fragment,{children:s.jsx(mo,{...r,...e})})};ft.args={label:Ie.label,helperText:Ie.helperText,placeholder:Ie.placeholder,testId:Ie.testId,readOnly:Ie.readOnly,disabled:Ie.disabled,required:Ie.required,status:Ie.status,hideLabel:Ie.hideLabel,displayMode:Ie.displayMode,validatemessage:Ie.validatemessage};ft.__docgenInfo={description:"",methods:[],displayName:"BasePegaFieldMaskedwithEyeIcon"};var ur,fr,pr;ft.parameters={...ft.parameters,docs:{...(ur=ft.parameters)==null?void 0:ur.docs,source:{originalSource:`(args: any) => {
  const [value, setValue] = useState(configProps.value);
  const props = {
    value,
    hasSuggestions: configProps.hasSuggestions,
    getPConnect: () => {
      return {
        getStateProps: () => {
          return stateProps;
        },
        getActionsApi: () => {
          return {
            updateFieldValue: (propName: string, theValue: any) => {
              setValue(theValue);
            },
            triggerFieldChange: () => {/* nothing */}
          };
        },
        ignoreSuggestion: () => {/* nothing */},
        acceptSuggestion: () => {/* nothing */},
        setInheritedProps: () => {/* nothing */},
        resolveConfigProps: () => {/* nothing */}
      };
    }
  };
  return <>
      <PegaFieldMaskedwithEyeIcon {...props} {...args} />
    </>;
}`,...(pr=(fr=ft.parameters)==null?void 0:fr.docs)==null?void 0:pr.source}}};const ds=["BasePegaFieldMaskedwithEyeIcon"];export{ft as BasePegaFieldMaskedwithEyeIcon,ds as __namedExportsOrder,cs as default};
