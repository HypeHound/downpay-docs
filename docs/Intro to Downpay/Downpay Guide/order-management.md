---
sidebar_position: 9
slug: /order-management
title: Managing orders
---
import ReactPlayer from 'react-player'

# Managing Orders

## Viewing purchase plan orders

Downpay sets an order tag equal to the name of the purchase option that was created in Downpay. To view all orders under a purchase option, navigate to the Downpay app and click **View orders** beside the respective purchase option. You will be redirected to a filtered order page based on the respective tag.

## Statuses

Orders with purchase options that have a specific date set for their release will appear in your Shopify admin with a **Scheduled** fulfillment status. Orders with time after checkout date will appear as **On Hold** and need to be manually moved to unfulfilled.  Orders with partial payments will have a **Partially paid** payment status.

## Mixed cart orders

Downpay allows mixed cart orders. These orders will have multiple cards in the order details page and will appear **Unfulfilled** until the in stock items are fulfilled. The order status will then change to **Scheduled**. 

:::info Note
Mixed cart orders collect entire shipping cost and some taxes up front that represent the available products
:::

## Fulfilling orders

Once the remainder of the payment is automatically or manually collected on an order with a Downpay purchase option, you can begin fulfillment. 

#### Steps

**1.** Open the order you wish to start fulfilling from the Shopify order index page in the admin

**2.** Click **Fulfill Early** in order to release the fulfillment and allow you to begin your usual workflow.


:::caution Caution
Downpay and Shopify do not block fulfilling and shipping orders that are only partially paid. Ensure you have received the expected payment before fulfilling orders.
:::

## Payment collection

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

When payment collection is set to manual mode in a Downpay purchase option, the payment due date is used to inform customers of the expected date they will be charged the remainder of the payment. If the payment collection estimate date changes, you may edit the date on the order details page and Downpay will automatically send an email notification to customers with the new date.

#### Steps

**1.** Open the order you wish to modify the purchase due date for from the Shopify order index page in the admin.

**2.** Click **Edit** in the **Payment due on** line and adjust the due date and click **Save**.

:::caution Caution
Selecting other payment term types will not email notify customers of changes to the expected payment collection date
:::

## Order Editing

Currently most of the Shopify Order Editing functionality is not compatible with partial payments. Below are ways to manage certain scenarios with these limitations.  

### Removing products from an order

<ReactPlayer controls url='/order-editing.mp4'/>

Navigate to the specific order you need to modify, click **Edit** at the top right and click **adjust quantity** and use the down arrow to lower the quantity. Shopify will modify the future payment amount in order to accomodate the new quantity. 

:::info
Shopify will not refund the deposit for the item that was removed, instead they will use the funds to pay off a portion of the future payment and issue a refund if the deposit is greater than the remaining due amount.  
:::

### Adding products to an order

<ReactPlayer controls url='/order-editing-add.mp4'/>

Currently, you can only add custom items to an order. Click **Edit** at the top right and click **Add custom item**. The cost of the product will be added to the future balance due. 

:::info
You may send customers an invoice however they do not need to pay off the total right away. The saved credit card is still available on the order with the new updated total and can be be charged later. 
:::

## Refunding fees or portions of an order

<ReactPlayer controls url='/refunding.mp4'/>

Currently Shopify cannot refund just a deposit or just a future payment. The total is treated as one entity and can lead to strange behaviour for orders with deposits. Below are some trips to navigate refunds on Shopify until they made the necessary updates to their refunding system.

### Refunding shipping

When offering discounted shipping, use the **Refund Shipping** section of the Shopify Refund page.

### Refunding portions of products

When offering discounts due to delays or for other reasons, use the **Summary** section of the Refund page without change the quantity of the product. 

:::caution
We discourage use of refunding to adjust the quantity of products in an order with deposits as the refund is not deposit or future payment specific and can cause discrepencies such as **Paid by Customer** not reflecting any refunded amounts and overcharging taxes and having to file a second refund. 
:::

## Draft Orders

Currently, Shopify does not support deposits on draft orders. Once this functionality is released, Downpay will be fully compatible. 
