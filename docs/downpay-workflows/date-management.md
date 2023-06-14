---
sidebar_position: 1
slug: /date-management
title: Adjusting language and dates storefront and checkout
---

Adjusting language and hiding dates has become easier for orders with Downpay Purchase Options. 

## Product Page

Theme block now includes a customizable help text, release date functionality and more. Adjust as needed using the Downpay theme block. 


## Cart

Card no longer surfaces a date, we are working on a customizable product description to allow merchants to change "Deposit only due at checkout".

## Checkout Order Summary

Language and date display at Checkout can be changed using the **Edit default theme content** button found in Online store found in the **...** menu beside your respective theme.

### Steps to hide due date on Checkout

**1.** Once inside the theme content section, click **Checkout & system** or the **...** to find this option if it's not visible.

**2.** Scroll far down until you find the **Deferred total due date label** under the **Checkout order summary** section and modify the default copy to something like **Total due later** or **Total due before delivery**.


## Checkout Order Confirmation Page

### Steps to hide due date on Checkout order confirmation 

**1.** Once inside the theme content section, click **Checkout & system** or the **...** to find this option if it's not visible.

**2.** Scroll far down until you find the **Title** under the **Checkout order summary deferred payment info** section and modify the default copy to something like **Payment of {{ amount_due }} is due before the product ships.**.

**3.** Scroll far down until you find the **Due later** under the **Checkout order summary payment terms totals** section and modify the default copy to something like **Total due later**.


## Email confirmation

### Steps to hide due date on email confirmation

**1.** Open **Shopify settings**, click the **Notifications** subsection and scroll down to **Order confirmation** and click **Edit**.

**2** Click into the email body and search for "due". You should find one around line 457, which you can change from the date to **later** within the span tag.

**3** Around line 606, find **{{ payment_terms.translated_name }}: Due {{ due_date | date: format: 'date' }}**, which you can change to: **{{ payment_terms.translated_name }}: Due later**