---
sidebar_position: 5
slug: /customer-portal-setup
title: Enabling customer accounts
---

# Customer accounts

Downpay allows customers to manage orders with purchase options using Shopify's classic customer accounts as well as a no-login portal. 

## Shopify classic customer accounts

#### Steps

**1.** Click **Online Store** from your left navigation bar in Shopify Admin.

**2.** Click **Customize** on the theme you wish to add Downpay blocks to.

**3.** Navigate to the **Classic customer accounts** template you are using from the dropdown menu at the top of the editor and then click the **Customer order** template. You may be asked to login to continue to the next step.

**4.** Select an order from the order list provided and hover below the order details section until you see a **+**. Click **Add block** and select the block named **Downpay App**.

## Setting up the no-login order management customer portal

A script will need to be installed into the order status page to enable the no-login order management portal.
#### Steps

**1.** Navigate to your store's settings page from the ⚙️ located in the left navigation bar.

**2.** Click **Checkout and accounts** and scroll down to the **Order status page** section and insert the below script into the box provided.

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


### How to use the no-login customer portal


Customers can access the portal using the order status page. This page is accessible after checkout or using the **View your order** link in the their order confirmation email.

#### Steps

**1.** To modify payment method or cancel an order, click **View order** from the email confirmation or from the order status page after checkout.

**2.** Under the section **This order has a payment due in the future**, click **click here**.

**3.** Select either **click here** under **Update your payment method** or **Cancelling your order** to receive an email link that will take you through the process.