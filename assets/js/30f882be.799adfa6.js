"use strict";(self.webpackChunkdownpay_docs=self.webpackChunkdownpay_docs||[]).push([[127],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||a;return n?o.createElement(h,i(i({ref:t},c),{},{components:n})):o.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2206:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var o=n(7462),r=(n(7294),n(3905));const a={sidebar_position:5,slug:"/customer-portal-setup",title:"Enabling customer accounts"},i="Customer accounts",s={unversionedId:"Intro to Downpay/Downpay Guide/customer-portal",id:"Intro to Downpay/Downpay Guide/customer-portal",title:"Enabling customer accounts",description:"Downpay allows customers to manage the payment method for orders with purchase options with a secure no-login portal from the order status page.",source:"@site/docs/Intro to Downpay/Downpay Guide/customer-portal.md",sourceDirName:"Intro to Downpay/Downpay Guide",slug:"/customer-portal-setup",permalink:"/customer-portal-setup",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,slug:"/customer-portal-setup",title:"Enabling customer accounts"},sidebar:"tutorialSidebar",previous:{title:"Installing Downpay to themes",permalink:"/installing-to-themes"},next:{title:"Creating a cancellation policy",permalink:"/customer-purchase-policy"}},l={},p=[{value:"Setting up the no-login order management customer portal",id:"setting-up-the-no-login-order-management-customer-portal",level:2},{value:"Steps",id:"steps",level:4},{value:"How to use the no-login customer portal",id:"how-to-use-the-no-login-customer-portal",level:3},{value:"Steps",id:"steps-1",level:4},{value:"Enabling customer cancellations in the no-login customer portal",id:"enabling-customer-cancellations-in-the-no-login-customer-portal",level:3}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"customer-accounts"},"Customer accounts"),(0,r.kt)("p",null,"Downpay allows customers to manage the payment method for orders with purchase options with a secure no-login portal from the order status page. "),(0,r.kt)("h2",{id:"setting-up-the-no-login-order-management-customer-portal"},"Setting up the no-login order management customer portal"),(0,r.kt)("p",null,"A script will need to be installed into the order status page to enable the no-login order management portal."),(0,r.kt)("h4",{id:"steps"},"Steps"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1.")," Navigate to your store's settings page from the \u2699\ufe0f located in the left navigation bar."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2.")," Click ",(0,r.kt)("strong",{parentName:"p"},"Checkout")," and scroll down to the ",(0,r.kt)("strong",{parentName:"p"},"Order status page")," section and insert the below script into the box provided."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'<script>\n  {% assign items_with_plans = checkout.line_items | where: "selling_plan_allocation" %}\n\n  {% if items_with_plans.size != 0 %}\n\n  Shopify.Checkout.OrderStatus.addContentBox(\n      `<h2 class="heading-2">This order has a payment due in the future</h2>\n       <p>To manage your deferred payment \n        <a href="/apps/downpay?shop_id={{shop.id}}&order_id={{checkout.order_id}}">click here</a>\n        </p>\n       `\n    )\n\n  {% endif %}\n<\/script>\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"3.")," Click ",(0,r.kt)("strong",{parentName:"p"},"Save")," at the top right of the settings page."),(0,r.kt)("h3",{id:"how-to-use-the-no-login-customer-portal"},"How to use the no-login customer portal"),(0,r.kt)("p",null,"Customers can access the portal using the order status page. This page is accessible after checkout or using the ",(0,r.kt)("strong",{parentName:"p"},"View your order")," link in the their order confirmation email."),(0,r.kt)("h4",{id:"steps-1"},"Steps"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1.")," To modify payment method, click ",(0,r.kt)("strong",{parentName:"p"},"View order")," from the email confirmation or from the order status page after checkout."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2.")," Under the section ",(0,r.kt)("strong",{parentName:"p"},"This order has a payment due in the future"),", click ",(0,r.kt)("strong",{parentName:"p"},"click here"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"3.")," Select ",(0,r.kt)("strong",{parentName:"p"},"click here")," under ",(0,r.kt)("strong",{parentName:"p"},"Update your payment method")," to receive an email link that will take you through the process."),(0,r.kt)("h3",{id:"enabling-customer-cancellations-in-the-no-login-customer-portal"},"Enabling customer cancellations in the no-login customer portal"),(0,r.kt)("p",null,"Downpay includes an optional feature to allow customers to cancel their own orders. To enable this feature, navigate to the Downpay app and click ",(0,r.kt)("strong",{parentName:"p"},"Settings")," in the Shopify left hand toolbar and check ",(0,r.kt)("strong",{parentName:"p"},"Enable customer cancellations"),"."))}u.isMDXComponent=!0}}]);