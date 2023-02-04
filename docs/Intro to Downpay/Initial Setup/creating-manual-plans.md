---
sidebar_position: 4
slug: /create-plans
title: Creating payment options
---

## On this page

import TOCInline from '@theme/TOCInline';

<TOCInline
  // Only show h1 - h3
  toc={toc.filter((node) => node.level === 1 || node.level === 2 || node.level === 3)}
  minHeadingLevel={1}
  // Show h4 headings in addition to the default h2 and h3 headings
  maxHeadingLevel={3}
/>

:::info Note
This guide assumes you already have a product in your store that you are ready to create a payment option for. If you do not have a product, begin by creating one in the **Products** section of the Shopify admin before beginning. A Shopify help guide can be found [here](https://help.shopify.com/en/manual/products/add-update-products).
:::

## Creating plans using Downpay's interface

**1.** Navigate to the Downpay app from the Shopify admin by clicking **Apps** in the left hand navigation bar
**2.** Select **Downpay** from the search drop down
:::tip Tip
Once Downpay is open, you can pin the app to your admin left navigation bar by using the 📌 icon located in the top right of the app page.
:::

**3.** Click **Create a new Downpay plan** in the top right

**4.** Name your plan by inserting a title into the **Name** field. This **Name** will also be used as an order tag.

**5.** Click **Select product(s)** and use the search bar or select the product(s) you wish to create a plan for.

**6.** Select whether you would like to offer a deposit on your plan as either a percentage or an exact amount.

- To also offer a **Full Payment** option to be displayed, check the box that says **Enable Full Payment Option**


**7.** Select the date at which your product is available.
- Exact dates are useful for upcoming preorders with release dates
- Relative dates are useful for custom made products

:::info Note
  When using automatic payment collection, Downpay will collect any remaining payment on the date that is chosen. This can be changed per order.
::: 

For more information on automatic payment collection, review [this](this).

**8.** Click **Save** to create the plan
:::info Note
Once you save a plan, it will be live on your store. Ensure you’re working on a draft product if you would like to make the plan available at a later date.
:::


### Disable regular buy now option if Downpay Plans exist on a product

:::info Note
Downpay plans are only available for certain sales channels and payment methods that are listed on [this page](https://help.shopify.com/en/manual/products/purchase-options/subscriptions/setup#subscription-products) under **Eligibility requirements**. If you choose to limit products to Downpay plans only, your customers may lose the ability to purchase these products on unsupported channels and payment methods.
:::

**1.** Navigate to the Product index in Shopify and find the Product you created a Downpay plan for and click it to open the product details page.
**2.** Scroll down and find the *Purchase options** section and check the box titled **Only show this product with these purchase options** to disable regular purchasing of this product.

:::tip Troubleshooting
 If you do not see this box, ensure you have created a Downpay plan for that specific product and hard refresh the page by holding shift and clicking your browser refresh button.
 :::




