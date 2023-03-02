---
sidebar_position: 9
slug: /order-management
title: Managing orders
---

# Managing Orders

## Viewing purchase plan orders

Downpay sets an order tag equal to the name of the purchase option that was created in Downpay. To view all orders under a purchase option, navigate to the Downpay app and click **View orders** beside the respective purchase option. You will be redirected to a filtered order page based on the respective tag.

## Statuses

Orders with purchase options will appear in your Shopify admin with a **Scheduled** fulfillment status. Orders with partial payments will have a **Partially paid** payment status.

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

<!-- ### Automatic

TBD -->
