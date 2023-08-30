"use strict";(self.webpackChunkdownpay_docs=self.webpackChunkdownpay_docs||[]).push([[63],{8819:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var a=o(7462),n=(o(7294),o(4137)),i=o(2004);const l={sidebar_position:1,slug:"/date-management",title:"Adjusting Language and Dates in Storefront and Checkout"},r=void 0,s={unversionedId:"downpay-workflows/date-management",id:"downpay-workflows/date-management",title:"Adjusting Language and Dates in Storefront and Checkout",description:"Introduction",source:"@site/docs/downpay-workflows/date-management.md",sourceDirName:"downpay-workflows",slug:"/date-management",permalink:"/date-management",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/date-management",title:"Adjusting Language and Dates in Storefront and Checkout"},sidebar:"tutorialSidebar",previous:{title:"Bulk Workflows",permalink:"/bulk-workflows"},next:{title:"Editing purchase options",permalink:"/editing-plans"}},d={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Product Page",id:"product-page",level:3},{value:"Cart",id:"cart",level:3},{value:"Checkout Order Summary",id:"checkout-order-summary",level:3},{value:"Change date label for deposit orders on Checkout",id:"change-date-label-for-deposit-orders-on-checkout",level:4},{value:"Change customer payment charge approval language",id:"change-customer-payment-charge-approval-language",level:4},{value:"Change &quot;Subscription policy&quot; language on Checkout",id:"change-subscription-policy-language-on-checkout",level:4},{value:"Checkout Order Confirmation Page",id:"checkout-order-confirmation-page",level:3},{value:"Email Confirmation",id:"email-confirmation",level:3}],u={toc:c};function p(e){let{components:t,...l}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"This documentation provides instructions on how to adjust the language and hide dates for orders with Downpay Purchase Options. The following sections outline the steps to customize language and dates in different parts of your storefront and checkout process."),(0,n.kt)("h3",{id:"product-page"},"Product Page"),(0,n.kt)("p",null,"The Downpay theme block and embed now offers enhanced customization options, including a customizable help text and release date functionality. To make adjustments, follow these steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Locate the Downpay theme block on the Product Page."),(0,n.kt)("li",{parentName:"ol"},"Customize the desired elements according to your needs.")),(0,n.kt)("h3",{id:"cart"},"Cart"),(0,n.kt)("p",null,'We are developing a customizable product description that will allow merchants to change the default text "Deposit only due at checkout."'),(0,n.kt)("h3",{id:"checkout-order-summary"},"Checkout Order Summary"),(0,n.kt)("p",null,"To modify the language and date display in the Checkout Order Summary, use the following steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"In the Online Store section, navigate to your respective theme."),(0,n.kt)("li",{parentName:"ol"},"Click the ",(0,n.kt)("strong",{parentName:"li"},"...")," menu and select ",(0,n.kt)("strong",{parentName:"li"},"Edit default theme content"),"."),(0,n.kt)("li",{parentName:"ol"},"Within the theme content section, find the ",(0,n.kt)("strong",{parentName:"li"},"Checkout & system")," option (if not visible, search for it using the ",(0,n.kt)("strong",{parentName:"li"},"...")," menu).")),(0,n.kt)("h4",{id:"change-date-label-for-deposit-orders-on-checkout"},"Change date label for deposit orders on Checkout"),(0,n.kt)("p",null,"To hide the due date on Checkout, follow these steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Scroll down to the ",(0,n.kt)("strong",{parentName:"li"},"Checkout order summary")," section and locate the ",(0,n.kt)("strong",{parentName:"li"},"Deferred total due date label"),"."),(0,n.kt)("li",{parentName:"ol"},"Modify the default copy to something like ",(0,n.kt)("strong",{parentName:"li"},"Total due later")," or ",(0,n.kt)("strong",{parentName:"li"},"Total due before delivery"),".")),(0,n.kt)("h4",{id:"change-customer-payment-charge-approval-language"},"Change customer payment charge approval language"),(0,n.kt)("p",null,"By default, the language found on the checkout page that customers have to read and agree to in order to proceed with their order includes broad recurring billing verbiage: "),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Shopify customer checkout payment charge agreement",src:o(1012).Z,width:"589",height:"125"})),(0,n.kt)("p",null,'"I understand that one or more items in my cart is a deferred or recurring purchase. By continuing, I agree to the cancellation policy and authorize you to charge my payment method at the prices, frequency, and dates listed on this page until my order is fulfilled or I cancel, if permitted."'),(0,n.kt)("p",null,"To modify this, follow these steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Scroll down to the ",(0,n.kt)("strong",{parentName:"li"},"Checkout payment")," section and locate the ",(0,n.kt)("strong",{parentName:"li"},"Purchase options agreement label"),"."),(0,n.kt)("li",{parentName:"ol"},"Modify the default copy to something like ",(0,n.kt)("strong",{parentName:"li"},"I understand that one or more items in my cart is a deferred. By continuing, I agree to the {{ cancellation_policy_label }} and authorize you to charge my payment method at the prices listed on this page until my order is fulfilled or I cancel, if permitted."))),(0,n.kt)("h4",{id:"change-subscription-policy-language-on-checkout"},'Change "Subscription policy" language on Checkout'),(0,n.kt)(i.Z,{controls:!0,url:"https://hypehound-public.s3.amazonaws.com/checkout-policy.mp4",mdxType:"ReactPlayer"}),(0,n.kt)("p",null,"Due to a bug on Shopify, deposit cancellation policy is mislabeled as ",(0,n.kt)("strong",{parentName:"p"},"Subscription Policy")," on checkout. Follow these steps to change it: "),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Scroll down to the ",(0,n.kt)("strong",{parentName:"li"},"Checkout shop policies")," section and locate the ",(0,n.kt)("strong",{parentName:"li"},"Subscription policy"),"."),(0,n.kt)("li",{parentName:"ol"},"Modify the default copy to something like ",(0,n.kt)("strong",{parentName:"li"},"Cancellation policy"),".")),(0,n.kt)("h3",{id:"checkout-order-confirmation-page"},"Checkout Order Confirmation Page"),(0,n.kt)("p",null,"To hide the due date on the Checkout Order Confirmation page, follow these steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"In the Online Store section, navigate to your respective theme."),(0,n.kt)("li",{parentName:"ol"},"Click the ",(0,n.kt)("strong",{parentName:"li"},"...")," menu and select ",(0,n.kt)("strong",{parentName:"li"},"Edit default theme content"),"."),(0,n.kt)("li",{parentName:"ol"},"Within the theme content section, find the ",(0,n.kt)("strong",{parentName:"li"},"Checkout & system")," option (if not visible, search for it using the ",(0,n.kt)("strong",{parentName:"li"},"...")," menu)."),(0,n.kt)("li",{parentName:"ol"},"Scroll down to the ",(0,n.kt)("strong",{parentName:"li"},"Checkout order summary deferred payment info")," section and locate the ",(0,n.kt)("strong",{parentName:"li"},"Title"),"."),(0,n.kt)("li",{parentName:"ol"},"Modify the default copy to something like ",(0,n.kt)("strong",{parentName:"li"},"Payment of {{ amount_due }} is due before the product ships"),"."),(0,n.kt)("li",{parentName:"ol"},"Scroll further down to the ",(0,n.kt)("strong",{parentName:"li"},"Checkout order summary payment terms totals")," section and locate ",(0,n.kt)("strong",{parentName:"li"},"Due later"),"."),(0,n.kt)("li",{parentName:"ol"},"Modify the default copy to something like ",(0,n.kt)("strong",{parentName:"li"},"Total due later"),".")),(0,n.kt)("h3",{id:"email-confirmation"},"Email Confirmation"),(0,n.kt)("p",null,"To hide the due date on the email confirmation, follow these steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Open ",(0,n.kt)("strong",{parentName:"li"},"Shopify settings"),", click the ",(0,n.kt)("strong",{parentName:"li"},"Notifications")," subsection, and scroll down to ",(0,n.kt)("strong",{parentName:"li"},"Order confirmation"),". Click ",(0,n.kt)("strong",{parentName:"li"},"Edit"),"."),(0,n.kt)("li",{parentName:"ol"},'Click into the email body and search for "due". You should find one around line 457, which you can change from the date to ',(0,n.kt)("strong",{parentName:"li"},"later")," within the span tag."),(0,n.kt)("li",{parentName:"ol"},"Around line 606, find ",(0,n.kt)("strong",{parentName:"li"},"{{ payment_terms.translated_name }}: Due {{ due_date | date: format: 'date' }}"),", which you can change to: ",(0,n.kt)("strong",{parentName:"li"},"{{ payment_terms.translated_name }}: Due later"),".")),(0,n.kt)("p",null,"These instructions will help you customize the language and hide dates at various stages of the purchasing process in your storefront and checkout flow."))}p.isMDXComponent=!0},1012:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/checkout_card_vault-2b731ad94328620267b16c12bb883799.png"}}]);