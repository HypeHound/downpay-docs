---
sidebar_position: 4
slug: /order-management-overview
Title: Order Management
---

# Order Management

## Viewing all orders for a purchase option

Downpay sets an order tag equal to the name of the purchase option that was created in Downpay. To view all orders under a purchase option, navigate to the Downpay app and click **View orders** beside the respective purchase option. You will be redirected to the filtered Shopify order page based on the respective tag.

## Statuses

### Fulfillment Status

- Orders with purchase options that have a specific date set for their release will appear in your Shopify admin with a **Scheduled** fulfillment status. This status will automatically move to "unfulfilled" when the release date is reached.
- Orders created with the release date listed as number of days after checkout will appear as **On Hold** and need to be manually moved to unfulfilled. 

### Payment Status
- Orders with partial payments will have a **Partially paid** status.
- Orders with deferred payments will have a **Payment pending** status

## Mixed cart orders

Downpay does not block customers from checking our with deposit and non-deposit products. This is called a "mixed cart."

These orders will have multiple fulfillment cards in the order details page and will appear **Unfulfilled** until the in stock items are fulfilled. The order status will then change to **Scheduled** to reflect the products that are not available yet. 

:::info Note
Mixed cart orders collect the entire shipping and tax cost upfront.
:::

## Fulfilling orders

:::caution Caution
Downpay and Shopify do not block fulfilling and shipping orders that are only partially paid. Ensure you have received the expected payment before fulfilling orders.
:::

To begin fulfillment early, release the fulfillment using the Shopify order details page.

#### Steps

**1.** Open the order you wish to start fulfilling from the Shopify order index page in the admin

**2.** Click **Fulfill Early** for **Scheduled** orders or **Release fulfillment** for **On Hold** orders. This action allow you to begin your usual workflow.


