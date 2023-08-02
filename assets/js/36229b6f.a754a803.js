"use strict";(self.webpackChunkdownpay_docs=self.webpackChunkdownpay_docs||[]).push([[540],{8271:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7462),o=(n(7294),n(4137)),r=n(2004);const i={sidebar_position:3,slug:"/order-management",title:"Managing orders"},d="Managing Orders",l={unversionedId:"downpay-workflows/order-management",id:"downpay-workflows/order-management",title:"Managing orders",description:"Viewing purchase plan orders",source:"@site/docs/downpay-workflows/order-management.md",sourceDirName:"downpay-workflows",slug:"/order-management",permalink:"/order-management",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,slug:"/order-management",title:"Managing orders"},sidebar:"tutorialSidebar",previous:{title:"Editing purchase options",permalink:"/editing-plans"},next:{title:"FAQs",permalink:"/faqs"}},s={},p=[{value:"Viewing purchase plan orders",id:"viewing-purchase-plan-orders",level:2},{value:"Statuses",id:"statuses",level:2},{value:"Mixed cart orders",id:"mixed-cart-orders",level:2},{value:"Fulfilling orders",id:"fulfilling-orders",level:2},{value:"Steps",id:"steps",level:4},{value:"Payment collection",id:"payment-collection",level:2},{value:"Manual payment collection",id:"manual-payment-collection",level:3},{value:"Steps",id:"steps-1",level:4},{value:"Manual date adjustment",id:"manual-date-adjustment",level:3},{value:"Steps",id:"steps-2",level:4},{value:"Changing the payment due date",id:"changing-the-payment-due-date",level:3},{value:"Steps",id:"steps-3",level:4},{value:"Order Editing",id:"order-editing",level:2},{value:"Removing products from an order",id:"removing-products-from-an-order",level:3},{value:"Adding products to an order",id:"adding-products-to-an-order",level:3},{value:"Refunding fees or portions of an order",id:"refunding-fees-or-portions-of-an-order",level:2},{value:"Refunding shipping",id:"refunding-shipping",level:3},{value:"Refunding portions of products",id:"refunding-portions-of-products",level:3},{value:"Draft Orders",id:"draft-orders",level:2}],u={toc:p};function h(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"managing-orders"},"Managing Orders"),(0,o.kt)("h2",{id:"viewing-purchase-plan-orders"},"Viewing purchase plan orders"),(0,o.kt)("p",null,"Downpay sets an order tag equal to the name of the purchase option that was created in Downpay. To view all orders under a purchase option, navigate to the Downpay app and click ",(0,o.kt)("strong",{parentName:"p"},"View orders")," beside the respective purchase option. You will be redirected to a filtered order page based on the respective tag."),(0,o.kt)("h2",{id:"statuses"},"Statuses"),(0,o.kt)("p",null,"Orders with purchase options that have a specific date set for their release will appear in your Shopify admin with a ",(0,o.kt)("strong",{parentName:"p"},"Scheduled")," fulfillment status. Orders with time after checkout date will appear as ",(0,o.kt)("strong",{parentName:"p"},"On Hold")," and need to be manually moved to unfulfilled.  Orders with partial payments will have a ",(0,o.kt)("strong",{parentName:"p"},"Partially paid")," payment status."),(0,o.kt)("h2",{id:"mixed-cart-orders"},"Mixed cart orders"),(0,o.kt)("p",null,"Downpay allows mixed cart orders. These orders will have multiple cards in the order details page and will appear ",(0,o.kt)("strong",{parentName:"p"},"Unfulfilled")," until the in stock items are fulfilled. The order status will then change to ",(0,o.kt)("strong",{parentName:"p"},"Scheduled"),". "),(0,o.kt)("admonition",{title:"Note",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Mixed cart orders collect entire shipping cost and some taxes up front that represent the available products")),(0,o.kt)("h2",{id:"fulfilling-orders"},"Fulfilling orders"),(0,o.kt)("p",null,"Once the remainder of the payment is automatically or manually collected on an order with a Downpay purchase option, you can begin fulfillment. "),(0,o.kt)("h4",{id:"steps"},"Steps"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"1.")," Open the order you wish to start fulfilling from the Shopify order index page in the admin"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"2.")," Click ",(0,o.kt)("strong",{parentName:"p"},"Fulfill Early")," in order to release the fulfillment and allow you to begin your usual workflow."),(0,o.kt)("admonition",{title:"Caution",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Downpay and Shopify do not block fulfilling and shipping orders that are only partially paid. Ensure you have received the expected payment before fulfilling orders.")),(0,o.kt)("h2",{id:"payment-collection"},"Payment collection"),(0,o.kt)("h3",{id:"manual-payment-collection"},"Manual payment collection"),(0,o.kt)("p",null,"Payment can be manually collected from the payment method on file for a specific order that has only been partially paid. "),(0,o.kt)("h4",{id:"steps-1"},"Steps"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"1.")," Open the order you wish to collect payment on from the Shopify order index page in the admin."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"2.")," Click ",(0,o.kt)("strong",{parentName:"p"},"Collect payment")," and choose the payment method you wish to collect from and confirm the charge in the next screen."),(0,o.kt)("p",null,"The order's payment status will now be ",(0,o.kt)("strong",{parentName:"p"},"Paid")," and you can begin fulfillment."),(0,o.kt)("h3",{id:"manual-date-adjustment"},"Manual date adjustment"),(0,o.kt)("p",null,"The payment due date can be adjusted in order to track when payment should be collected. This date is also used to collect payment automatically if that option is enabled."),(0,o.kt)("h4",{id:"steps-2"},"Steps"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"1.")," Open the order you wish to adjust the payment due date on from the Shopify order index page in the admin."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"2.")," Click ",(0,o.kt)("strong",{parentName:"p"},"Edit")," beside ",(0,o.kt)("strong",{parentName:"p"},"Payment due on")," line and choose the payment method you wish to collect from and then adjust the payment terms to match the new expected shipping date."),(0,o.kt)("admonition",{title:"Note",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Shopify currently only supports one future payment date. This means that any order with more than one deposit will be charged the remainder amount upon the next manual or automatic payment collection.")),(0,o.kt)("h3",{id:"changing-the-payment-due-date"},"Changing the payment due date"),(0,o.kt)("p",null,"When payment collection is set to manual mode in a Downpay purchase option, the payment due date is used to inform customers of the expected date they will be charged the remainder of the payment. If the payment collection estimate date changes, you may edit the date on the order details page and Downpay will automatically send an email notification to customers with the new date."),(0,o.kt)("h4",{id:"steps-3"},"Steps"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"1.")," Open the order you wish to modify the purchase due date for from the Shopify order index page in the admin."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"2.")," Click ",(0,o.kt)("strong",{parentName:"p"},"Edit")," in the ",(0,o.kt)("strong",{parentName:"p"},"Payment due on")," line and adjust the due date and click ",(0,o.kt)("strong",{parentName:"p"},"Save"),"."),(0,o.kt)("admonition",{title:"Caution",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Selecting other payment term types will not email notify customers of changes to the expected payment collection date")),(0,o.kt)("h2",{id:"order-editing"},"Order Editing"),(0,o.kt)("p",null,"Currently most of the Shopify Order Editing functionality is not compatible with partial payments. Below are ways to manage certain scenarios with these limitations.  "),(0,o.kt)("h3",{id:"removing-products-from-an-order"},"Removing products from an order"),(0,o.kt)(r.Z,{controls:!0,url:"https://hypehound-public.s3.amazonaws.com/order-editing-remove.mp4",mdxType:"ReactPlayer"}),(0,o.kt)("p",null,"Navigate to the specific order you need to modify, click ",(0,o.kt)("strong",{parentName:"p"},"Edit")," at the top right and click ",(0,o.kt)("strong",{parentName:"p"},"adjust quantity")," and use the down arrow to lower the quantity. Shopify will modify the future payment amount in order to accomodate the new quantity. "),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Shopify will not refund the deposit for the item that was removed, instead they will use the funds to pay off a portion of the future payment and issue a refund if the deposit is greater than the remaining due amount.  ")),(0,o.kt)("h3",{id:"adding-products-to-an-order"},"Adding products to an order"),(0,o.kt)(r.Z,{controls:!0,url:"https://hypehound-public.s3.amazonaws.com/order-editing-add.mp4",mdxType:"ReactPlayer"}),(0,o.kt)("p",null,"Currently, you can only add custom items to an order. Click ",(0,o.kt)("strong",{parentName:"p"},"Edit")," at the top right and click ",(0,o.kt)("strong",{parentName:"p"},"Add custom item"),". The cost of the product will be added to the future balance due. "),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"You may send customers an invoice however they do not need to pay off the total right away. The saved credit card is still available on the order with the new updated total and can be be charged later. ")),(0,o.kt)("h2",{id:"refunding-fees-or-portions-of-an-order"},"Refunding fees or portions of an order"),(0,o.kt)(r.Z,{controls:!0,url:"https://hypehound-public.s3.amazonaws.com/refunding.mov",mdxType:"ReactPlayer"}),(0,o.kt)("p",null,"Currently Shopify cannot refund just a deposit or just a future payment. The total is treated as one entity and can lead to strange behaviour for orders with deposits. Below are some trips to navigate refunds on Shopify until they made the necessary updates to their refunding system."),(0,o.kt)("h3",{id:"refunding-shipping"},"Refunding shipping"),(0,o.kt)("p",null,"When offering discounted shipping, use the ",(0,o.kt)("strong",{parentName:"p"},"Refund Shipping")," section of the Shopify Refund page."),(0,o.kt)("h3",{id:"refunding-portions-of-products"},"Refunding portions of products"),(0,o.kt)("p",null,"When offering discounts due to delays or for other reasons, use the ",(0,o.kt)("strong",{parentName:"p"},"Summary")," section of the Refund page without change the quantity of the product. "),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"We discourage use of refunding to adjust the quantity of products in an order with deposits as the refund is not deposit or future payment specific and can cause discrepancies such as ",(0,o.kt)("strong",{parentName:"p"},"Paid by Customer")," not reflecting any refunded amounts and overcharging taxes and having to file a second refund. ")),(0,o.kt)("h2",{id:"draft-orders"},"Draft Orders"),(0,o.kt)("p",null,"Currently, Shopify does not support deposits on draft orders. Once this functionality is released, Downpay will be fully compatible."))}h.isMDXComponent=!0}}]);