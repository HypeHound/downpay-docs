---
sidebar_position: 2
slug: /installing-to-themes
title: Installing Downpay to themes
---

## Installing Downpay to your Storefront

:::caution
In order for purchase options to appear in your theme on products, Shopify Payments or Paypal Express with `approved` Automatic Payment status must be enabled. Follow the guide [here](/payment-gateways)
:::

On first setup, Downpay will scan your store to determine if you are running an Online store 1.0 or 2.0 theme. Downpay will then suggest the correct setup instructions in app.

## Online Store 2.0 Themes

### Installing Downpay Product and Cart blocks into your storefront

If you are running a new Online Store 2.0 theme that supports app blocks, you can add Downpay to your store in a the product page and the cart templates.

#### Steps

**1.** Click **Online Store** from your left navigation bar in Shopify Admin.

**2.** Click **Customize** on the theme you wish to add Downpay blocks to.

**3.** Navigate to the **Product page** template you are using from the dropdown menu at the top of the editor.

**4.** To add product options, hover near your add to cart button until you see a **+**. Click **Add block** and select the block named **Downpay App**.

:::tip Tip
Click the Downpay block to customize the content displayed
:::

**5.** To continue to the next step, add the product to cart and then navigate to the cart template.

**6.** To add deposit totals, hover near the cart total area until you see a **+**. Click **Add block** and select the block named **Downpay App**

**7.** Click **Save** at the top right to finish setup.

### Downpay theme block features

#### Product block features

The Product block includes several features to help you customize the look of the Downpay purchase options block.

Below is a breakdown of all the current features.

![Product block features](/img/product_theme_features.png)

Have a request for additional functionality? Email us at [support@hypehound.io](mailto:support@hypehound.io).

#### Cart block

The cart block features an amount due today and an amount due later. Currently these are not customizable but CSS can be used to adjust the look and feel.

## Legacy Themes

To install Downpay into legacy themes [contact us](mailto:support@hypehound.io) and we will set everything up for you. 

<!-- **1.** Find the store's theme and navigate to "Edit Files."

**2.** Request the latest assets from [Downpay support](mailto:support@hypehound.io)

**3.** Copy the following files from the app's extensions/preorder-basic/assets folder into the theme's Assets folder:
`downpay-cart.css, downpay-cart.js, downpay-product.css, downpay-product.js`

**4.** Create two new snippets titled **downpay-purchase-options-box.liquid** and **downpay-cart-subtotals.liquid** and copy the respective content from:
`downpay-purchase-options-box.liquid, downpay-cart-subtotals.liquid`

**5.** Copy all the files from the app's extensions/preorder-basic/locales folder into the theme's Locales folder.

**6.** Locate the liquid template in the theme that renders the product page. It could be templates/product.liquid, snippets/product-template.liquid, or sections/product-template.liquid. 

In that template, find the product form element, and choose a suitable place to insert the Downpay block. A recommended location is underneath the quantity selector. Insert the following code:

```{% render 'downpay-purchase-options-box' %}```

**7.** Similarly, locate the cart template in the theme. It might be named templates/cart.template or snippets/cart-template.liquid. Find where the subtotals are displayed and insert the following line of code above the subtotals block:

```{% render 'downpay-cart-subtotals' %}```

### Customer Account

To set up the customer account, follow these steps:

Create a new snippet called downpay-customer-order.liquid and place it in the Snippets folder.
Add the following code to the snippet:

```
{% if items_with_plans.size != 0 %}
  <p>
    To manage your deferred payment
    <a href="/apps/downpay?shop_id={{ shop.id }}&order_id={{ order.id }}">click here</a>
  </p>
{% endif %}
```

Find the customer orders template or section and add the following line above the order table:

``{% render 'downpay-customer-order' %}``

For further help with legacy themes installation, please reach out to us at [support@hypehound.io](mailto:support@hypehound.io).
-->