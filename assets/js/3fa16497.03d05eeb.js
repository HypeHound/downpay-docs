"use strict";(self.webpackChunkdownpay_docs=self.webpackChunkdownpay_docs||[]).push([[30],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3901:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),o=n(3743);const r="tableOfContentsInline_prmo";function i(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:i}=e;return a.createElement("div",{className:r},a.createElement(o.Z,{toc:t,minHeadingLevel:n,maxHeadingLevel:i,className:"table-of-contents",linkClassName:null}))}},3743:(e,t,n)=>{n.d(t,{Z:()=>f});var a=n(7462),o=n(7294),r=n(6668);function i(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...o}=e;n>=0?t[n].children.push(o):a.push(o)})),a}function l(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=l({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function s(e){const t=e.getBoundingClientRect();return t.top===t.bottom?s(e.parentNode):t}function p(e,t){let{anchorTopOffset:n}=t;const a=e.find((e=>s(e).top>=n));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(s(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function c(){const e=(0,o.useRef)(0),{navbar:{hideOnScroll:t}}=(0,r.L)();return(0,o.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function u(e){const t=(0,o.useRef)(void 0),n=c();(0,o.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:o,minHeadingLevel:r,maxHeadingLevel:i}=e;function l(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),l=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let o=t;o<=n;o+=1)a.push(`h${o}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:r,maxHeadingLevel:i}),s=p(l,{anchorTopOffset:n.current}),c=e.find((e=>s&&s.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(o),e.classList.add(o),t.current=e):e.classList.remove(o)}(e,e===c)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),()=>{document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,n])}function d(e){let{toc:t,className:n,linkClassName:a,isChild:r}=e;return t.length?o.createElement("ul",{className:r?void 0:n},t.map((e=>o.createElement("li",{key:e.id},o.createElement("a",{href:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),o.createElement(d,{isChild:!0,toc:e.children,className:n,linkClassName:a}))))):null}const m=o.memo(d);function f(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:s="table-of-contents__link",linkActiveClassName:p,minHeadingLevel:c,maxHeadingLevel:d,...f}=e;const h=(0,r.L)(),g=c??h.tableOfContents.minHeadingLevel,y=d??h.tableOfContents.maxHeadingLevel,v=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,o.useMemo)((()=>l({toc:i(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:g,maxHeadingLevel:y});return u((0,o.useMemo)((()=>{if(s&&p)return{linkClassName:s,linkActiveClassName:p,minHeadingLevel:g,maxHeadingLevel:y}}),[s,p,g,y])),o.createElement(m,(0,a.Z)({toc:v,className:n,linkClassName:s},f))}},7344:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(7462),o=(n(7294),n(3905)),r=n(3901);const i={sidebar_position:4,slug:"/create-plans",title:"Creating payment options"},l=void 0,s={unversionedId:"Intro to Downpay/Initial Setup/creating-manual-plans",id:"Intro to Downpay/Initial Setup/creating-manual-plans",title:"Creating payment options",description:"On this page",source:"@site/docs/Intro to Downpay/Initial Setup/creating-manual-plans.md",sourceDirName:"Intro to Downpay/Initial Setup",slug:"/create-plans",permalink:"/create-plans",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,slug:"/create-plans",title:"Creating payment options"},sidebar:"tutorialSidebar",previous:{title:"Installing into themes",permalink:"/installing-storefront-blocks"},next:{title:"Order management",permalink:"/order-management"}},p={},c=[{value:"On this page",id:"on-this-page",level:2},{value:"Creating plans using Downpay&#39;s interface",id:"creating-plans-using-downpays-interface",level:2},{value:"Disable regular buy now option if Downpay Plans exist on a product",id:"disable-regular-buy-now-option-if-downpay-plans-exist-on-a-product",level:3}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"on-this-page"},"On this page"),(0,o.kt)(r.Z,{toc:c.filter((e=>1===e.level||2===e.level||3===e.level)),minHeadingLevel:1,maxHeadingLevel:3,mdxType:"TOCInline"}),(0,o.kt)("admonition",{title:"Note",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This guide assumes you already have a product in your store that you are ready to create a payment option for. If you do not have a product, begin by creating one in the ",(0,o.kt)("strong",{parentName:"p"},"Products")," section of the Shopify admin before beginning. A Shopify help guide can be found ",(0,o.kt)("a",{parentName:"p",href:"https://help.shopify.com/en/manual/products/add-update-products"},"here"),".")),(0,o.kt)("h2",{id:"creating-plans-using-downpays-interface"},"Creating plans using Downpay's interface"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"1.")," Navigate to the Downpay app from the Shopify admin by clicking ",(0,o.kt)("strong",{parentName:"p"},"Apps")," in the left hand navigation bar\n",(0,o.kt)("strong",{parentName:"p"},"2.")," Select ",(0,o.kt)("strong",{parentName:"p"},"Downpay")," from the search drop down"),(0,o.kt)("admonition",{title:"Tip",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Once Downpay is open, you can pin the app to your admin left navigation bar by using the \ud83d\udccc icon located in the top right of the app page.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"3.")," Click ",(0,o.kt)("strong",{parentName:"p"},"Create a new Downpay plan")," in the top right"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"4.")," Name your plan by inserting a title into the ",(0,o.kt)("strong",{parentName:"p"},"Name")," field. This ",(0,o.kt)("strong",{parentName:"p"},"Name")," will also be used as an order tag."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"5.")," Click ",(0,o.kt)("strong",{parentName:"p"},"Select product(s)")," and use the search bar or select the product(s) you wish to create a plan for."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"6.")," Select whether you would like to offer a deposit on your plan as either a percentage or an exact amount."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"To also offer a ",(0,o.kt)("strong",{parentName:"li"},"Full Payment")," option to be displayed, check the box that says ",(0,o.kt)("strong",{parentName:"li"},"Enable Full Payment Option"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"7.")," Select the date at which your product is available."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Exact dates are useful for upcoming preorders with release dates"),(0,o.kt)("li",{parentName:"ul"},"Relative dates are useful for custom made products")),(0,o.kt)("admonition",{title:"Note",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"  When using automatic payment collection, Downpay will collect any remaining payment on the date that is chosen. This can be changed per order.")),(0,o.kt)("p",null,"For more information on automatic payment collection, review this."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"8.")," Click ",(0,o.kt)("strong",{parentName:"p"},"Save")," to create the plan"),(0,o.kt)("admonition",{title:"Note",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Once you save a plan, it will be live on your store. Ensure you\u2019re working on a draft product if you would like to make the plan available at a later date.")),(0,o.kt)("h3",{id:"disable-regular-buy-now-option-if-downpay-plans-exist-on-a-product"},"Disable regular buy now option if Downpay Plans exist on a product"),(0,o.kt)("admonition",{title:"Note",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Downpay plans are only available for certain sales channels and payment methods that are listed on ",(0,o.kt)("a",{parentName:"p",href:"https://help.shopify.com/en/manual/products/purchase-options/subscriptions/setup#subscription-products"},"this page")," under ",(0,o.kt)("strong",{parentName:"p"},"Eligibility requirements"),". If you choose to limit products to Downpay plans only, your customers may lose the ability to purchase these products on unsupported channels and payment methods.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"1.")," Navigate to the Product index in Shopify and find the Product you created a Downpay plan for and click it to open the product details page.\n",(0,o.kt)("strong",{parentName:"p"},"2.")," Scroll down and find the *Purchase options",(0,o.kt)("strong",{parentName:"p"}," section and check the box titled "),"Only show this product with these purchase options** to disable regular purchasing of this product."),(0,o.kt)("admonition",{title:"Troubleshooting",type:"tip"},(0,o.kt)("p",{parentName:"admonition"}," If you do not see this box, ensure you have created a Downpay plan for that specific product and hard refresh the page by holding shift and clicking your browser refresh button.\n:::")))}d.isMDXComponent=!0}}]);