"use strict";(self.webpackChunkdownpay_docs=self.webpackChunkdownpay_docs||[]).push([[883],{4137:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),l=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},y="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),y=l(a),m=r,h=y["".concat(p,".").concat(m)]||y[m]||c[m]||o;return a?n.createElement(h,i(i({ref:t},u),{},{components:a})):n.createElement(h,i({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[y]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9050:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>y,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=a(7462),r=(a(7294),a(4137));const o={sidebar_position:3,slug:"/payment-gateways",title:"Setting up supported payment gateways"},i="How to use Shopify Payments or Paypal Express with Downpay",s={unversionedId:"initial-setup/payment-gateways",id:"initial-setup/payment-gateways",title:"Setting up supported payment gateways",description:"Shopify allows two gateways to be used with partial payments, Shopify Payments and Paypal Express. One of these gateways must be enabled in order to see Downpay purchase options on products in your storefront.",source:"@site/docs/initial-setup/payment-gateways.md",sourceDirName:"initial-setup",slug:"/payment-gateways",permalink:"/payment-gateways",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,slug:"/payment-gateways",title:"Setting up supported payment gateways"},sidebar:"tutorialSidebar",previous:{title:"Installing Downpay to themes",permalink:"/installing-to-themes"},next:{title:"Creating purchase options",permalink:"/create-options"}},p={},l=[{value:"Enabling Shopify Payments",id:"enabling-shopify-payments",level:2},{value:"Enabling Paypal Express",id:"enabling-paypal-express",level:2},{value:"What is a reference transaction?",id:"what-is-a-reference-transaction",level:3},{value:"What to do if you&#39;ve been denied",id:"what-to-do-if-youve-been-denied",level:3},{value:"Information to include in the appeal email",id:"information-to-include-in-the-appeal-email",level:4}],u={toc:l};function y(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"how-to-use-shopify-payments-or-paypal-express-with-downpay"},"How to use Shopify Payments or Paypal Express with Downpay"),(0,r.kt)("p",null,"Shopify allows two gateways to be used with partial payments, Shopify Payments and Paypal Express. One of these gateways must be enabled in order to see Downpay purchase options on products in your storefront. "),(0,r.kt)("h2",{id:"enabling-shopify-payments"},"Enabling Shopify Payments"),(0,r.kt)("p",null,"To enable Shopify Payments, review Shopify's documentation found ",(0,r.kt)("a",{parentName:"p",href:"https://help.shopify.com/en/manual/payments/shopify-payments/setting-up-shopify-payments"},"here")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Shopify Payments is only supported in certain countries, please review support ",(0,r.kt)("a",{parentName:"p",href:"https://help.shopify.com/en/manual/payments/shopify-payments/supported-countries"},"here"))),(0,r.kt)("h2",{id:"enabling-paypal-express"},"Enabling Paypal Express"),(0,r.kt)("p",null,"PayPal Express is a great alternative for countries who do not have Shopify Payments. To enable Paypal Express, review Shopify's documentation found ",(0,r.kt)("a",{parentName:"p",href:"https://help.shopify.com/en/manual/payments/paypal/set-up-paypal"},"here")),(0,r.kt)("p",null,"Once enabled and with Downpay installed, Shopify will automatically send Paypal a request for approval of ",(0,r.kt)("strong",{parentName:"p"},"Reference Transactions"),". This is displayed in your Shopify Paypayl management screen as ",(0,r.kt)("strong",{parentName:"p"},"Automatic Payments")," with the status of ",(0,r.kt)("strong",{parentName:"p"},"Pending Approval"),". "),(0,r.kt)("h3",{id:"what-is-a-reference-transaction"},"What is a reference transaction?"),(0,r.kt)("p",null,"Reference Transactions allow you to recharge a customer\u2019s credit card after an initial transaction has been completed. You will not need to input your customer\u2019s credit card information to process a sale."),(0,r.kt)("p",null,"When a buyer purchases an item on your site, a reference transaction ID is generated. You can use the reference transaction ID later to initiate subsequent transactions. As a merchant, you can use a reference transaction ID to capture future payments against a billing agreement. The capture future payment transaction is a reference transaction."),(0,r.kt)("h3",{id:"what-to-do-if-youve-been-denied"},"What to do if you've been denied"),(0,r.kt)("p",null,"As Reference Transactions carry a higher risk than other products, and PayPal requires an application for Reference Transactions on your behalf. Create a new email with the subject line reading ",(0,r.kt)("strong",{parentName:"p"},"Approval for use of Reference Transactions with Shopify")," and make it out to ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"mailto:payflow-support@paypal.com"},"payflow-support@paypal.com")),". "),(0,r.kt)("h4",{id:"information-to-include-in-the-appeal-email"},"Information to include in the appeal email"),(0,r.kt)("p",null,'Hi there, I need approval for Reference Transactions on Shopify in order to use an app that enables deposits and recharging a customer\'s credit card for products that are shipping in the future. My status on my Paypal Express Integration says "Denied".  I have provided details below in order to help appeal this denial.'),(0,r.kt)("p",null,"Business information:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Business name"),(0,r.kt)("li",{parentName:"ul"},"Business URL"),(0,r.kt)("li",{parentName:"ul"},"Current/anticipated monthly sales via PayPal only (based on the last # months)"),(0,r.kt)("li",{parentName:"ul"},"Number of repeat customers (past # months)")),(0,r.kt)("p",null,"Integration information:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Please describe what you intend to use Reference Transaction for."),(0,r.kt)("li",{parentName:"ul"},"Do you or your buyers need to initiate each subsequent payment themselves or are they processed automatically after the billing agreement is created?"),(0,r.kt)("li",{parentName:"ul"},"Will this service be enabled within your website, mobile app integration, or both?"),(0,r.kt)("li",{parentName:"ul"},"Are you integrating through another payment service provider, such as Worldpay or Ingenico?"),(0,r.kt)("li",{parentName:"ul"},"Do you require the Reference Transactions product for use with your Shopping Cart to offer Subscriptions? (For example Woo-Commerce, Charge-Bee.)")))}y.isMDXComponent=!0}}]);