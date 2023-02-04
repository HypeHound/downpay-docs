"use strict";(self.webpackChunkdownpay_docs=self.webpackChunkdownpay_docs||[]).push([[916],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3901:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(7294),o=n(3743);const a="tableOfContentsInline_prmo";function i(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:i}=e;return r.createElement("div",{className:a},r.createElement(o.Z,{toc:t,minHeadingLevel:n,maxHeadingLevel:i,className:"table-of-contents",linkClassName:null}))}},3743:(e,t,n)=>{n.d(t,{Z:()=>f});var r=n(7462),o=n(7294),a=n(6668);function i(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const r=n.slice(2,e.level);e.parentIndex=Math.max(...r),n[e.level]=t}));const r=[];return t.forEach((e=>{const{parentIndex:n,...o}=e;n>=0?t[n].children.push(o):r.push(o)})),r}function l(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:r}=e;return t.flatMap((e=>{const t=l({toc:e.children,minHeadingLevel:n,maxHeadingLevel:r});return function(e){return e.level>=n&&e.level<=r}(e)?[{...e,children:t}]:t}))}function s(e){const t=e.getBoundingClientRect();return t.top===t.bottom?s(e.parentNode):t}function u(e,t){let{anchorTopOffset:n}=t;const r=e.find((e=>s(e).top>=n));if(r){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(s(r))?r:e[e.indexOf(r)-1]??null}return e[e.length-1]??null}function c(){const e=(0,o.useRef)(0),{navbar:{hideOnScroll:t}}=(0,a.L)();return(0,o.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){const t=(0,o.useRef)(void 0),n=c();(0,o.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:r,linkActiveClassName:o,minHeadingLevel:a,maxHeadingLevel:i}=e;function l(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(r),l=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const r=[];for(let o=t;o<=n;o+=1)r.push(`h${o}.anchor`);return Array.from(document.querySelectorAll(r.join()))}({minHeadingLevel:a,maxHeadingLevel:i}),s=u(l,{anchorTopOffset:n.current}),c=e.find((e=>s&&s.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(o),e.classList.add(o),t.current=e):e.classList.remove(o)}(e,e===c)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),()=>{document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,n])}function p(e){let{toc:t,className:n,linkClassName:r,isChild:a}=e;return t.length?o.createElement("ul",{className:a?void 0:n},t.map((e=>o.createElement("li",{key:e.id},o.createElement("a",{href:`#${e.id}`,className:r??void 0,dangerouslySetInnerHTML:{__html:e.value}}),o.createElement(p,{isChild:!0,toc:e.children,className:n,linkClassName:r}))))):null}const m=o.memo(p);function f(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:s="table-of-contents__link",linkActiveClassName:u,minHeadingLevel:c,maxHeadingLevel:p,...f}=e;const v=(0,a.L)(),h=c??v.tableOfContents.minHeadingLevel,y=p??v.tableOfContents.maxHeadingLevel,g=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:r}=e;return(0,o.useMemo)((()=>l({toc:i(t),minHeadingLevel:n,maxHeadingLevel:r})),[t,n,r])}({toc:t,minHeadingLevel:h,maxHeadingLevel:y});return d((0,o.useMemo)((()=>{if(s&&u)return{linkClassName:s,linkActiveClassName:u,minHeadingLevel:h,maxHeadingLevel:y}}),[s,u,h,y])),o.createElement(m,(0,r.Z)({toc:g,className:n,linkClassName:s},f))}},8838:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(7462),o=(n(7294),n(3905)),a=n(3901);const i={sidebar_position:1,slug:"/overview"},l="Overview",s={unversionedId:"Intro to Downpay/overview",id:"Intro to Downpay/overview",title:"Overview",description:"Learn about use cases for Downpay, features, pricing, and where to get help.",source:"@site/docs/Intro to Downpay/1-overview.md",sourceDirName:"Intro to Downpay",slug:"/overview",permalink:"/overview",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/overview"},sidebar:"tutorialSidebar",previous:{title:"Intro to Downpay",permalink:"/"},next:{title:"Initial Setup",permalink:"/initial-setup"}},u={},c=[{value:"Use cases",id:"use-cases",level:2},{value:"Preorders",id:"preorders",level:3},{value:"Made to Order",id:"made-to-order",level:3},{value:"Out of Stock",id:"out-of-stock",level:3},{value:"High-end Products",id:"high-end-products",level:3},{value:"Key features",id:"key-features",level:2},{value:"Pricing plans",id:"pricing-plans",level:2},{value:"Where to get help",id:"where-to-get-help",level:2}],d={toc:c};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"overview"},"Overview"),(0,o.kt)("p",null,"Learn about use cases for Downpay, features, pricing, and where to get help."),(0,o.kt)("h1",{id:"on-this-page"},"On this page"),(0,o.kt)(a.Z,{toc:c.filter((e=>1===e.level||2===e.level||3===e.level)),minHeadingLevel:1,maxHeadingLevel:3,mdxType:"TOCInline"}),(0,o.kt)("h2",{id:"use-cases"},"Use cases"),(0,o.kt)("h3",{id:"preorders"},"Preorders"),(0,o.kt)("p",null,"If you are releasing a new product and want to gauge demand to map out production you can use Downpay to give customers a way to leave a minimal deposit while they wait for your product to release."),(0,o.kt)("h3",{id:"made-to-order"},"Made to Order"),(0,o.kt)("p",null,"If you want to make products on demand, Downpay is a great way to take an upfront deposit and only charge the remainder once you're ready to ship the product our."),(0,o.kt)("h3",{id:"out-of-stock"},"Out of Stock"),(0,o.kt)("p",null,"If you've run out of stock on products you know you'll be stocking again soon, you can use Downpay to allow customers to continue buying and holding their place in line. If you're used to back in stock notifications alone, Downpay is a way to level up your selling strategy by ensuring customers commit to the purchase up front. "),(0,o.kt)("h3",{id:"high-end-products"},"High-end Products"),(0,o.kt)("p",null,"If you're selling products that are challenging for customers to pay off in full at checkout, you can use Downpay as a layaway solution to split their payment in two and make it easier on their wallets. This method is also useful when your high end products are coupled with longer shipping times."),(0,o.kt)("h2",{id:"key-features"},"Key features"),(0,o.kt)("p",null,"Downpay includes many features to help enable payment flexibility with many more on the way. Some features are only avaiable for certain pricing plans.\nSome of Downpay's key features are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Taking deposits per product on your store or deferred payment per product"),(0,o.kt)("li",{parentName:"ul"},"Manual and automatic payment collection"),(0,o.kt)("li",{parentName:"ul"},"Storefront payment option content customization "),(0,o.kt)("li",{parentName:"ul"},"Order tags and scheduled order status for future fulfillments"),(0,o.kt)("li",{parentName:"ul"},"Customer payment method changes and/or cancellations"),(0,o.kt)("li",{parentName:"ul"},"Customer purchase options cancellation policy at checkout")),(0,o.kt)("admonition",{title:"Note",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Hypehound encourages merchants to review ",(0,o.kt)("a",{parentName:"p",href:"https://help.shopify.com/en/manual/products/purchase-options/pre-orders"},"Shopify\u2019s guidelines")," for managing preorder purchase options and also understand the current limitations.  ")),(0,o.kt)("h2",{id:"pricing-plans"},"Pricing plans"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Coming soon")),(0,o.kt)("h2",{id:"where-to-get-help"},"Where to get help"),(0,o.kt)("p",null,"For any questions, please contact us in of the following ways:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Email us at: ",(0,o.kt)("a",{parentName:"li",href:"mailto:support@hypehound.io"},"support@hypehound.io")),(0,o.kt)("li",{parentName:"ul"},"Join our Discord community ",(0,o.kt)("a",{parentName:"li",href:"https://discord.gg/9rfcd3jGUq"},"here")," and engage with us and other merchants using Downpay ",(0,o.kt)("br",null))))}p.isMDXComponent=!0}}]);