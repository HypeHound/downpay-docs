---
sidebar_position: 2
slug: /cart-refresh
title: Cart Refresh
---

# Removing cart refresh 

By default, Downpay refreshes subtotals for a short period of time after page load to account for other apps modifying prices and products on the cart page. 

If you'd like to remove this functionality, add the following code in the `<head>` section of theme.liquid or equivalent.

```js
"hypehound.downpay".split(".").reduce(function(o, x) { if (!o[x]) {o[x] ={};} return o[x] }, window);
window.hypehound.downpay.cartRefreshOn = false;
```
