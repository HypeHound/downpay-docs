---
sidebar_position: 6
slug: /customer-portal-setup
title: Enabling customer accounts
---

# Customer accounts

Downpay allows customers to manage the payment method for orders with purchase options with a secure portal located on the order status page. <!-- Enable either or both to allow customers more control to manage their orders. -->

<!-- >:::info Note
To set up Shopify customer accounts, review instructions provided [here](https://help.shopify.com/en/manual/customers/customer-accounts).
:::

## Shopify classic customer accounts

#### Steps

**1.** Click **Online Store** from your left navigation bar in Shopify Admin.

**2.** Click **Customize** on the theme you wish to add Downpay blocks to.

**3.** Login with a customer account using the top right account icon. 

Navigate to the **Classic customer accounts** template you are using from the dropdown menu at the top of the editor and then click the **Customer order** template. You may be asked to login to continue to the next step.

**4.** Select an order from the order list provided and hover below the order details section until you see a **+**. Click **Add block** and select the block named **Downpay App**. -->

## Setting up the order management customer portal

A script will need to be installed into the order status page to enable the Downpay order management customer portal.

#### Steps

**1.** Navigate to your store's settings page from the ⚙️ located in the left navigation bar.

**2.** Click **Checkout** and scroll down to the **Order status page** section and insert the below script into the box provided.

```
<script>
  {% assign items_with_plans = checkout.line_items | where: "selling_plan_allocation" %}

  {% if items_with_plans.size != 0 %}

  Shopify.Checkout.OrderStatus.addContentBox(
      `<h2 class="heading-2">This order has a payment due in the future</h2>
       <p>To manage your deferred payment 
        <a href="/apps/downpay?shop_id={{shop.id}}&order_id={{checkout.order_id}}">click here</a>
        </p>
       `
    )

  {% endif %}
</script>
```

**3.** Click **Save** at the top right of the settings page.

### Enabling customer cancellations in the Order management customer portal settings

Downpay includes an optional feature to allow customers to cancel their own orders.

:::info Note
Cancellations do not refund deposits. Customers will have to contact your store's support to receive refunds. Ensure your **Purchase option cancellation policy** found in **Shopify Settings** within **Policies** is update to date with your sale terms.
:::

#### Steps

**1.** Navigate to Downpay and click **Settings** from the left navigation bar

**2.** To allow cancellations, check the box labelled **Enable customer cancellations**

### How to use the portal

Customers can access the portal using the order status page. This page is accessible after checkout or using the **View your order** link in the their order confirmation email.

#### Steps

**1.** To modify payment method, click **View order** from the email confirmation or from the order status page after checkout.

**2.** Under the section **This order has a payment due in the future**, click **click here**.

**3.** Select **click here** under **Update your payment method** to receive an email link that will take you through the process.

### Using the Downpay portal from Shopify classic customer accounts

You may also include a link to the Downpay portal on your Shopify classic customer account portal. To set this up, please contact us at [support@hypehound.io](mailto:support@hypehound.io) or if you are comfortable with editing your theme code, use the instructions below: 

#### Steps

**1.** Create a new snippet with the code below in the **Snippets** folder to the corresponding theme called **downpay-customer-order.liquid**

```liquid
{% assign items_with_plans = order.line_items | where: 'selling_plan_allocation' %}
{% if items_with_plans.size != 0 %}
  <p>
    To manage your deferred payment
    <a href="/apps/downpay?shop_id={{ shop.id }}&order_id={{ order.id }}">click here</a>
  </p>
{% endif %}
```

**2.** Locate the **Customers/order.json** or the corresponding section that powers the store's Customer Account Order. This could be **main-order.liquid** found in Sections. Place the code below where you would like to see the link to the Downpay portal. We recommend placing it above the order details table. 

```
{% render 'downpay-customer-order' %}
```
