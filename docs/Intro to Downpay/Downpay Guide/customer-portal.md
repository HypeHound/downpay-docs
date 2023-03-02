---
sidebar_position: 5
slug: /customer-portal-setup
title: Customer portal
---

## Setting up the non-login based customer portal

Downpay allows customers to directly manage orders that have a Downpay purchase option without needing to login with an account. To provide this feature, a script will need to be installed into the order status page. 

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


### How to use the customer portal


Customers can access the portal using the order status page. This page is accessible after checkout or using the **View your order** link in the their order confirmation email.

#### Steps

**1.** To modify payment method or cancel an order, click **View order** from the email confirmation or from the order status page after checkout.

**2.** Under the section **This order has a payment due in the future**, click **click here**.

**3.** Select either **click here** under **Update your payment method** or **Cancelling your order** to receive an email link that will take you through the process.