---
sidebar_position: 3
slug: /payment-gateways
title: Setting up supported payment gateways 
---

# How to use Shopify Payments or Paypal Express with Downpay

Shopify allows two gateways to be used with partial payments, Shopify Payments and Paypal Express. One of these gateways must be enabled in order to see Downpay purchase options on products in your storefront. 

## Enabling Shopify Payments

To enable Shopify Payments, review Shopify's documentation found [here](https://help.shopify.com/en/manual/payments/shopify-payments/setting-up-shopify-payments)

:::tip
Shopify Payments is only supported in certain countries, please review support [here](https://help.shopify.com/en/manual/payments/shopify-payments/supported-countries)
::: 

## Enabling Paypal Express

PayPal Express is a great alternative for countries who do not have Shopify Payments. To enable Paypal Express, review Shopify's documentation found [here](https://help.shopify.com/en/manual/payments/paypal/set-up-paypal)

Once enabled and with Downpay installed, Shopify will automatically send Paypal a request for approval of **Reference Transactions**. This is displayed in your Shopify Paypayl management screen as **Automatic Payments** with the status of **Pending Approval**. 

### What is a reference transaction?

Reference Transactions allow you to recharge a customer’s credit card after an initial transaction has been completed. You will not need to input your customer’s credit card information to process a sale.

When a buyer purchases an item on your site, a reference transaction ID is generated. You can use the reference transaction ID later to initiate subsequent transactions. As a merchant, you can use a reference transaction ID to capture future payments against a billing agreement. The capture future payment transaction is a reference transaction.

### What to do if you've been denied


As Reference Transactions carry a higher risk than other products, and PayPal requires an application for Reference Transactions on your behalf. Create a new email with the subject line reading **Approval for use of Reference Transactions with Shopify** and make it out to **payflow-support@paypal.com**. 

#### Information to include in the appeal email

Hi there, I need approval for Reference Transactions on Shopify in order to use an app that enables deposits and recharging a customer's credit card for products that are shipping in the future. My status on my Paypal Express Integration says "Denied".  I have provided details below in order to help appeal this denial.

Business information:

- Business name
-   Business URL
-   Current/anticipated monthly sales via PayPal only (based on the last # months)
-   Number of repeat customers (past # months)

Integration information:

-   Please describe what you intend to use Reference Transaction for.
-   Do you or your buyers need to initiate each subsequent payment themselves or are they processed automatically after the billing agreement is created?
-   Will this service be enabled within your website, mobile app integration, or both?
-   Are you integrating through another payment service provider, such as Worldpay or Ingenico?
-   Do you require the Reference Transactions product for use with your Shopping Cart to offer Subscriptions? (For example Woo-Commerce, Charge-Bee.)

