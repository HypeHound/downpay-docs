"use strict";(self.webpackChunkdownpay_docs=self.webpackChunkdownpay_docs||[]).push([[890],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,h=u["".concat(p,".").concat(m)]||u[m]||c[m]||o;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8474:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:9,slug:"/order-management",title:"Managing orders"},i="Managing Orders",l={unversionedId:"Intro to Downpay/Downpay Guide/order-management",id:"Intro to Downpay/Downpay Guide/order-management",title:"Managing orders",description:"Viewing purchase plan orders",source:"@site/docs/Intro to Downpay/Downpay Guide/order-management.md",sourceDirName:"Intro to Downpay/Downpay Guide",slug:"/order-management",permalink:"/order-management",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9,slug:"/order-management",title:"Managing orders"},sidebar:"tutorialSidebar",previous:{title:"Editing purchase options",permalink:"/editing-plans"},next:{title:"FAQs",permalink:"/faqs"}},p={},s=[{value:"Viewing purchase plan orders",id:"viewing-purchase-plan-orders",level:2},{value:"Statuses",id:"statuses",level:2},{value:"Mixed cart orders",id:"mixed-cart-orders",level:2},{value:"Payment collection",id:"payment-collection",level:2},{value:"Manual payment collection",id:"manual-payment-collection",level:3},{value:"Steps",id:"steps",level:4},{value:"Manual date adjustment",id:"manual-date-adjustment",level:3},{value:"Steps",id:"steps-1",level:4},{value:"Fulfilling orders",id:"fulfilling-orders",level:2},{value:"Steps",id:"steps-2",level:4}],d={toc:s};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"managing-orders"},"Managing Orders"),(0,r.kt)("h2",{id:"viewing-purchase-plan-orders"},"Viewing purchase plan orders"),(0,r.kt)("p",null,"Downpay sets an order tag equal to the name of the purchase option that was created in Downpay. To view all orders under a purchase option, navigate to the Downpay app and click ",(0,r.kt)("strong",{parentName:"p"},"View orders")," beside the respective purchase option. You will be redirected to a filtered order page based on the respective tag."),(0,r.kt)("h2",{id:"statuses"},"Statuses"),(0,r.kt)("p",null,"Orders with purchase options will appear in your Shopify admin with a ",(0,r.kt)("strong",{parentName:"p"},"Scheduled")," fulfillment status. Orders with partial payments will have a ",(0,r.kt)("strong",{parentName:"p"},"Partially paid")," payment status."),(0,r.kt)("h2",{id:"mixed-cart-orders"},"Mixed cart orders"),(0,r.kt)("p",null,"Downpay allows mixed cart orders. These orders will have multiple cards in the order details page and will appear ",(0,r.kt)("strong",{parentName:"p"},"Unfulfilled")," until the in stock items are fulfilled. The order status will then change to ",(0,r.kt)("strong",{parentName:"p"},"Scheduled"),". "),(0,r.kt)("admonition",{title:"Note",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Mixed cart orders collect entire shipping cost and some taxes up front that represent the available products")),(0,r.kt)("h2",{id:"payment-collection"},"Payment collection"),(0,r.kt)("h3",{id:"manual-payment-collection"},"Manual payment collection"),(0,r.kt)("p",null,"Payment can be manually collected from the payment method on file for a specific order that has only been partially paid. "),(0,r.kt)("h4",{id:"steps"},"Steps"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1.")," Open the order you wish to collect payment on from the Shopify order index page in the admin."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2.")," Click ",(0,r.kt)("strong",{parentName:"p"},"Collect payment")," and choose the payment method you wish to collect from and confirm the charge in the next screen."),(0,r.kt)("p",null,"The order's payment status will now be ",(0,r.kt)("strong",{parentName:"p"},"Paid")," and you can begin fulfillment."),(0,r.kt)("h3",{id:"manual-date-adjustment"},"Manual date adjustment"),(0,r.kt)("p",null,"The payment due date can be adjusted in order to track when payment should be collected. This date is also used to collect payment automatically if that option is enabled."),(0,r.kt)("h4",{id:"steps-1"},"Steps"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1.")," Open the order you wish to adjust the payment due date on from the Shopify order index page in the admin."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2.")," Click ",(0,r.kt)("strong",{parentName:"p"},"Edit")," beside ",(0,r.kt)("strong",{parentName:"p"},"Payment due on")," line and choose the payment method you wish to collect from and then adjust the payment terms to match the new expected shipping date."),(0,r.kt)("admonition",{title:"Note",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Shopify currently only supports one future payment date. This means that any order with more than one deposit will be charged the remainder amount upon the next manual or automatic payment collection.")),(0,r.kt)("h2",{id:"fulfilling-orders"},"Fulfilling orders"),(0,r.kt)("p",null,"Once the remainder of the payment is automatically or manually collected on an order with a Downpay purchase option, you can begin fulfillment. "),(0,r.kt)("h4",{id:"steps-2"},"Steps"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1.")," Open the order you wish to start fulfilling from the Shopify order index page in the admin"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2.")," Click ",(0,r.kt)("strong",{parentName:"p"},"Fulfill Early")," in order to release the fulfillment and allow you to begin your usual workflow."),(0,r.kt)("admonition",{title:"Caution",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Downpay and Shopify do not block fulfilling and shipping orders that are only partially paid. Ensure you have received the expected payment before fulfilling orders.")))}u.isMDXComponent=!0}}]);