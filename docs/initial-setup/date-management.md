---
sidebar_position: 7
slug: /date-management
title: Adjusting language and hiding dates in Storefront and Checkout
---
import ReactPlayer from 'react-player'

## Introduction

While Downpay is required to set a date when creating a purchase option, sometimes businesses have a range instead of a specific date when orders will be ready to ship. This guide will help hide or modify language on your storefront to reflect this reality.

This documentation provides instructions on how to adjust the language and hide dates for orders with Downpay Purchase Options. The following sections outline the steps to customize language and dates in different parts of your storefront and checkout process.

### Product Page

The Downpay theme block and embed now offers enhanced customization options, including a customizable help text and release date functionality. To make adjustments, follow these steps:

1. Locate the Downpay theme block on the Product Page.
2. Customize the desired elements according to your needs.

### Cart

We are developing a customizable product description that will allow merchants to change the default text "Deposit only due at checkout."

### Checkout Order Summary

To modify the language and date display in the Checkout Order Summary, use the following steps:

1. In the Online Store section, navigate to your respective theme.
2. Click the **...** menu and select **Edit default theme content**.
3. Within the theme content section, find the **Checkout & system** option (if not visible, search for it using the **...** menu).


#### Change date label for deposit orders on Checkout

To hide the due date on Checkout, follow these steps:

1. Scroll down to the **Checkout order summary** section and locate the **Deferred total due date label**.
2. Modify the default copy to something like **Total due later** or **Total due before delivery**.

#### Change customer payment charge approval language

By default, the language found on the checkout page that customers have to read and agree to in order to proceed with their order includes broad recurring billing verbiage: 

![Shopify customer checkout payment charge agreement](/img/checkout_card_vault.png)

"I understand that one or more items in my cart is a deferred or recurring purchase. By continuing, I agree to the cancellation policy and authorize you to charge my payment method at the prices, frequency, and dates listed on this page until my order is fulfilled or I cancel, if permitted."

To modify this, follow these steps:

1. Scroll down to the **Checkout payment** section and locate the **Purchase options agreement label**.
2. Modify the default copy to something like **I understand that one or more items in my cart is a deferred. By continuing, I agree to the {{ cancellation_policy_label }} and authorize you to charge my payment method at the prices listed on this page until my order is fulfilled or I cancel, if permitted.**


#### Change "Subscription policy" language on Checkout

<ReactPlayer controls url='https://hypehound-public.s3.amazonaws.com/checkout-policy.mp4'/>

Due to a bug on Shopify, deposit cancellation policy is mislabeled as **Subscription Policy** on checkout. Follow these steps to change it: 

1. Scroll down to the **Checkout shop policies** section and locate the **Subscription policy**.
2. Modify the default copy to something like **Cancellation policy**.

### Checkout Order Confirmation Page

To hide the due date on the Checkout Order Confirmation page, follow these steps:

1. In the Online Store section, navigate to your respective theme.
2. Click the **...** menu and select **Edit default theme content**.
3. Within the theme content section, find the **Checkout & system** option (if not visible, search for it using the **...** menu).
4. Scroll down to the **Checkout order summary deferred payment info** section and locate the **Title**.
5. Modify the default copy to something like **Payment of {{ amount_due }} is due before the product ships**.
6. Scroll further down to the **Checkout order summary payment terms totals** section and locate **Due later**.
7. Modify the default copy to something like **Total due later**.

### Email Confirmation

To hide the due date on the email confirmation, follow these steps:

1. Open **Shopify settings**, click the **Notifications** subsection, and scroll down to **Order confirmation**. Click **Edit**.
2. Click into the email body and search for "due". You should find one around line 457, which you can change from the date to **later** within the span tag.
3. Around line 606, find **{{ payment_terms.translated_name }}: Due {{ due_date | date: format: 'date' }}**, which you can change to: **{{ payment_terms.translated_name }}: Due later**.

These instructions will help you customize the language and hide dates at various stages of the purchasing process in your storefront and checkout flow.
