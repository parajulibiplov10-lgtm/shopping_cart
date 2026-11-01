
/*
  Name: Biplov Parajuli
  Section: CSCI 3803
  Date: November 1, 2026
*/

// Calculate subtotal
var subtotal = 0;

// Loop through all products
for (var i = 0; i < filenames.length; i++) {
  var total = calculateTotal(quantities[i], prices[i]);

  // Display each product row
  outputCartRow(
    filenames[i],
    titles[i],
    quantities[i],
    prices[i],
    total
  );

  subtotal += total;
}

// Calculate tax
var tax = subtotal * 0.15;

// Calculate shipping
var shipping = 40;

if (subtotal > 1000) {
  shipping = 0;
}

// Calculate grand total
var grandTotal = subtotal + tax + shipping;

// Display subtotal
document.write('<tr class="totals">');
document.write('<td colspan="4">Subtotal</td>');
document.write('<td>$' + subtotal.toFixed(2) + '</td>');
document.write('</tr>');

// Display tax
document.write('<tr class="totals">');
document.write('<td colspan="4">Tax</td>');
document.write('<td>$' + tax.toFixed(2) + '</td>');
document.write('</tr>');

// Display shipping
document.write('<tr class="totals">');
document.write('<td colspan="4">Shipping</td>');
document.write('<td>$' + shipping.toFixed(2) + '</td>');
document.write('</tr>');

// Display grand total
document.write('<tr class="totals focus">');
document.write('<td colspan="4">Grand Total</td>');
document.write('<td>$' + grandTotal.toFixed(2) + '</td>');
document.write('</tr>');
