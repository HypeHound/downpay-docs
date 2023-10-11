---
sidebar_position: 3
slug: /payment-collection
title: Managing orders
---
import ReactPlayer from 'react-player'

# Payment Collection

### Sending invoices

All non-multicurrency stores have the option to send invoices to customers directly from the Shopify order details page is an option. 

To use this feature, review Shopify's [send an invoice to a customer](https://help.shopify.com/en/manual/orders/deferred-payments#email-an-order-invoice-to-a-customer) guide.

### Manual payment collection

Payment can be manually collected from the payment method on file for a specific order that has only been partially paid. 

#### Steps

**1.** Open the order you wish to collect payment on from the Shopify order index page in the admin.

**2.** Click **Collect payment** and choose the payment method you wish to collect from and confirm the charge in the next screen.

The order's payment status will now be **Paid** and you can begin fulfillment.

### Manual date adjustment

The payment due date can be adjusted in order to track when payment should be collected. This date is also used to collect payment automatically if that option is enabled.

#### Steps

**1.** Open the order you wish to adjust the payment due date on from the Shopify order index page in the admin.

**2.** Click **Edit** beside **Payment due on** line and choose the payment method you wish to collect from and then adjust the payment terms to match the new expected shipping date.

:::info Note
Shopify currently only supports one future payment date. This means that any order with more than one deposit will be charged the remainder amount upon the next manual or automatic payment collection.
:::

### Changing the payment due date

When payment collection is set to manual mode in a Downpay purchase option, the payment due date is used to inform customers of the expected date they will be charged the remainder of the payment. If the payment collection estimate date changes, you may edit the date on the order details page. 

#### Steps

**1.** Open the order you wish to modify the purchase due date for from the Shopify order index page in the admin.

**2.** Click **Edit** in the **Payment due on** line and adjust the due date and click **Save**.

:::caution Caution
Selecting other payment term types will not email notify customers of changes to the expected payment collection date
:::

## Order Editing

Currently most of the Shopify Order Editing functionality is not compatible with partial payments. Below are ways to manage certain scenarios with these limitations.  

### Removing products from an order

<ReactPlayer controls url='https://hypehound-public.s3.amazonaws.com/order-editing-remove.mp4'/>

Navigate to the specific order you need to modify, click **Edit** at the top right and click **adjust quantity** and use the down arrow to lower the quantity. Shopify will modify the future payment amount in order to accomodate the new quantity. 

:::info
Shopify will not refund the deposit for the item that was removed, instead they will use the funds to pay off a portion of the future payment and issue a refund if the deposit is greater than the remaining due amount.  
:::

### Adding products to an order

<ReactPlayer controls url='https://hypehound-public.s3.amazonaws.com/order-editing-add.mp4'/>

Currently, you can only add custom items to an order. Click **Edit** at the top right and click **Add custom item**. The cost of the product will be added to the future balance due. 

:::info
You may send customers an invoice however they do not need to pay off the total right away. The saved credit card is still available on the order with the new updated total and can be be charged later. 
:::

### Exchanging a product in an order

To exchange a deposit product on an order, you can remove the deposit product from the order using the order editing flow. You'll need to remove the deposit product first, save the order and enter into order editing again to add a product using the **Add product** search box. This will allow you to still collect the remainder payment in the future.

## Refunding fees or portions of an order

<ReactPlayer controls url='https://hypehound-public.s3.amazonaws.com/refunding.mov'/>

Currently Shopify cannot refund just a deposit or just a future payment. The total is treated as one entity and can lead to strange behaviour for orders with deposits. Below are some trips to navigate refunds on Shopify until they made the necessary updates to their refunding system.

### Refunding shipping


When offering discounted shipping, use the **Refund Shipping** section of the Shopify Refund page.

### Refunding portions of products

When offering discounts due to delays or for other reasons, use the **Summary** section of the Refund page without change the quantity of the product. 

:::caution
We discourage use of refunding to adjust the quantity of products in an order with deposits as the refund is not deposit or future payment specific and can cause discrepancies such as **Paid by Customer** not reflecting any refunded amounts and overcharging taxes and having to file a second refund. 
:::

## Draft Orders

Currently, Shopify does not support deposits on draft orders. Once this functionality is released, Downpay will be fully compatible. 
