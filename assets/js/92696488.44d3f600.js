"use strict";(self.webpackChunkdownpay_docs=self.webpackChunkdownpay_docs||[]).push([[496],{4137:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||o;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6328:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var a=n(7462),r=(n(7294),n(4137));const o={sidebar_position:1,slug:"/order-confirmation-email",title:"Order Confirmation Email"},i="Adding deposit information to order confirmation emails",s={unversionedId:"advanced-setup/order-confirmation-email",id:"advanced-setup/order-confirmation-email",title:"Order Confirmation Email",description:'There are "due now" and "due later" totals you can add to your order email confirmation. By default these are available in Shopify\'s default templates however if you have modified the templates, you will need to manually add this code in order to display these new subtotal fields.',source:"@site/docs/advanced-setup/order-confirmation-email.md",sourceDirName:"advanced-setup",slug:"/order-confirmation-email",permalink:"/order-confirmation-email",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/order-confirmation-email",title:"Order Confirmation Email"},sidebar:"tutorialSidebar",previous:{title:"Advanced setup",permalink:"/advanced-setup"},next:{title:"Cart Refresh",permalink:"/cart-refresh"}},l={},d=[{value:"Steps",id:"steps",level:3}],c={toc:d};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"adding-deposit-information-to-order-confirmation-emails"},"Adding deposit information to order confirmation emails"),(0,r.kt)("p",null,'There are "due now" and "due later" totals you can add to your order email confirmation. By default these are available in Shopify\'s default templates however if you have modified the templates, you will need to manually add this code in order to display these new subtotal fields. '),(0,r.kt)("h3",{id:"steps"},"Steps"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Navigate to your Shopify settings page and click Notifications in the right hand column. "),(0,r.kt)("li",{parentName:"ol"},"Click the ",(0,r.kt)("strong",{parentName:"li"},"Order Confirmation")," template and click ",(0,r.kt)("strong",{parentName:"li"},"Edit code"),". "),(0,r.kt)("li",{parentName:"ol"},"Add the following code above or below your subtotal-line within the table. ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'{% assign transaction_size = 0 %}\n{% assign transaction_amount = 0 %}\n{% for transaction in transactions %}\n    {% if transaction.status == "success" %}\n        {% unless transaction.kind == "authorization" or transaction.kind == "void" %}\n            {% assign transaction_size = transaction_size | plus: 1 %}\n            {% assign transaction_amount = transaction_amount | plus: transaction.amount %}\n        {% endunless %}\n    {% endif %}\n{% endfor %}\n{% if payment_terms and payment_terms.automatic_capture_at_fulfillment == false or b2b?%}\n{% assign due_at_date = payment_terms.next_payment.due_at | date: "%b %d, %Y" %}\n\n<tr class="subtotal-line">\n    <td class="subtotal-line__title">\n        <p>\n            <span>Total paid today</span>\n        </p>\n    </td>\n    <td class="subtotal-line__value">\n        <strong>{{ transaction_amount | money_with_currency }}</strong>\n    </td>\n</tr>\n\n<div class="payment-terms">\n\n    <tr class="subtotal-line">\n        <td class="subtotal-line__title">\n            <p>\n                <span>Total due later</span>\n            </p>\n        </td>\n        <td class="subtotal-line__value">\n            <strong>{{ payment_terms.next_payment.amount_due | money_with_currency }}</strong>\n        </td>\n    </tr>\n\n</div>\n{% endif %}\n')))}u.isMDXComponent=!0}}]);