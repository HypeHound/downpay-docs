---
sidebar_position: 1
slug: /order-confirmation-email
title: Order Confirmation Email
---

# Adding deposit information to order confirmation emails

There are "due now" and "due later" totals you can add to your order email confirmation. By default these are available in Shopify's default templates however if you have modified the templates you use, you will need to manually add this code in order to display these new subtotal fields. 

### Steps

1. Navigate to your Shopify settings page and click Notifications in the right hand column. 
2. Click the **Order Confirmation** template and click **Edit code**. 
3. Add the following code above or below your subtotal-line within the table. 
```html
{% assign transaction_size = 0 %}
{% assign transaction_amount = 0 %}
{% for transaction in transactions %}
    {% if transaction.status == "success" %}
        {% unless transaction.kind == "authorization" or transaction.kind == "void" %}
            {% assign transaction_size = transaction_size | plus: 1 %}
            {% assign transaction_amount = transaction_amount | plus: transaction.amount %}
        {% endunless %}
    {% endif %}
{% endfor %}
{% if payment_terms and payment_terms.automatic_capture_at_fulfillment == false or b2b?%}
{% assign due_at_date = payment_terms.next_payment.due_at | date: "%b %d, %Y" %}

<tr class="subtotal-line">
    <td class="subtotal-line__title">
        <p>
            <span>Total paid today</span>
        </p>
    </td>
    <td class="subtotal-line__value">
        <strong>{{ transaction_amount | money_with_currency }}</strong>
    </td>
</tr>

<div class="payment-terms">

    <tr class="subtotal-line">
        <td class="subtotal-line__title">
            <p>
                <span>Total due later</span>
            </p>
        </td>
        <td class="subtotal-line__value">
            <strong>{{ payment_terms.next_payment.amount_due | money_with_currency }}</strong>
        </td>
    </tr>

</div>
{% endif %}
```