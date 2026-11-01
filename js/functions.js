
/*
  Name: Biplov Parajuli
  Section: CSCI 3803
  Date: November 1, 2026
*/

// Calculate the total price
function calculateTotal(quantity, price) {
  return quantity * price;
}

// Display one shopping cart row
function outputCartRow(file, title, quantity, price, total) {
  document.write("<tr>");
  document.write('<td><img src="images/' + file + '" alt="' + title + '"></td>');
  document.write("<td>" + title + "</td>");
  document.write("<td>" + quantity + "</td>");
  document.write("<td>$" + price.toFixed(2) + "</td>");
  document.write("<td>$" + total.toFixed(2) + "</td>");
  document.write("</tr>");
}
