---
sidebar_position: 1
slug: /installing-downpay
title: Installing Downpay
---

## Installing Downpay to your store

#### Steps 

**1.** Install Downpay from the Shopify App Store or the link Hypehound provides you. 

**2.** Read through and approve Downpay’s access to your Store and click Install App. Read more about Downpay permissions [below](#permissions).

**3.** Once approved, you’ll arrive at the Downpay overview screen and can begin using the onboarding guide to enable app blocks in your theme before creating your first purchase option.

:::info Note
After the free private beta, we will release pricing plans and introduce plan selection screens to the installation process.
:::

### Permissions

Below we have listed our permissions details and reasoning:

| Permission | Reasoning |
| --- | --- |
| Write Customers | Used to allow to customers to directly change the payment method on file for an order or cancel their order through the order status page. |
| Read/Write Orders | Used to keep track of orders which were processed using a Downpay purchase option in order to enable core app features. |
| Read fulfillments | Used for order management features of our app. |
| Read/Write Products | Used to keep track of products and associate them with core functionality. Write permissions are used to toggle the **Only show this product with these purchase options** box automatically for merchants.|
| Write Purchase Options | Used to enable Downpay to create different selling plans on products, such as deposits. |
| Read Payment Terms | With each order enabled through the app, the customer's payment information is stored in a secure vault made available by Shopify. This access scope allows the app to read these payment terms, so that it can help manage workflows around orders and deferred payments on those orders. |
| Read/Write Payment Mandates | Used to issue a charge to the customer's payment method at a time later than checkout - for example a partial paid preorder. |
| Read Themes | Used to detect support for app blocks on storefront. |
| Read Locales | Used to offer you a localized experience for your region. |
| Write draft orders | Used for experiences focused on draft orders. |
| Read Shopify Payment Accounts | Used to check for compatibility with your payment gateway. |
| Read Reports | Used to collect data on how our product is performing for your store. |
| Write Inventory | Used for placing stock limits on pre orders | 
| Storefront Permissions| Fetch data from the storefront API in order to provide integrated theme experiences with Downpay | 


