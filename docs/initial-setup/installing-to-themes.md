---
sidebar_position: 3
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

To install Downpay into legacy themes, Downpay's onboarding offers a once click theme install button with an app embed. Make sure to hit save after the embed has been enabled.

Alternatively, you can navigate to the **app embeds** section of the respective theme in Shopify's theme editor and toggle the Downpay embed on. 

You may also click the Downpay Embed for several options to help you design the look and feel of your purchase option box. 

![Product legacy app embed](/img/legacy-dp-product-embed.png)

### Modifying placement of the embed 

In the Downpay embed, the **HTML element to insert after** will allow you to move the purchase option box around the product page. The box will be inserted after the selector that is in the box. 

Two options to modifying the placement of the box are:
- Unique element id attribute
- Unique CSS Class

#### Steps

1. Locate the HTML element that you want to insert the box after

2. Find the unique CSS or element id attribute and then insert this into the box in the Downpay embed

**Example** 
Let’s say you want to insert after this element under the cart button, find HTML element you want to insert under and determine it's unique css class or unique element id attribute. 

In this example I want to insert the options below the add to cart button so my id would be **addToCartForm-product-template**. The classes are likely not unique and may cause issues.

```html
<button type="submit" name="add" id="addToCart-product-template" class="btn btn--large btn--full">
    <span class="add-to-cart-text">Preorder</span>
</button>
```
As for syntax, classes will be inserted as `.class` and element ids will be `#id`.

