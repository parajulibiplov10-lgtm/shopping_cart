#### Instructions Practice

- You must submit valid and semantically appropriate HTML5.
- You have been provided with the HTML file `BasicJavaScript.html` that include the markup for the finished version, as well as a css stylesheet and 3 javascript files. Preview the files in a browser.
- All pages in your site must contain a comment with your name, section, and date.

#### Functional Requirements: Basic JavaScript Hands-on Practice

Demonstrate your proficiency with loops, conditionals, arrays, and functions in JavaScript. The final product should look similar to that shown below.

- Complete the assignment as directed below and within the image.
- Test the page in the browser. Verify that the calculations work appropriately by changing the values in the `data.js` file.

1. You have been provided with the HTML file `BasicJavaScript.html` that includes the markup for the finished version. Preview the file in a browser.
2. Examine the data file `data.js`. It contains 4 arrays that we are going to use to programmatically generate the data rows (and replace the hard-coded values supplied in the HTML file).
3. Open the JavaScript file `functions.js` and create a function called `calculateTotal()` that is passed a quantity and price and returns their product (i.e., multiply the two parameter values and return the result).
4. Within `functions.js`, create a function called `outputCartRow()` that has the following signature: function `outputCartRow(file, title, quantity, price, total) {}`
5. Implement the body of this function. It should use `document.write()` calls to display a row of the table using the passed data. Use the `toFixed()` method of number variables to display two decimal places.
6. Replace the three cart table rows in the original markup with a JavaScript Loop that repeatedly calls `outputCartRow()` function. Put this loop within the `BasicJavaScript.js` file. Add the appropriate `<script>` tag to reference this `BasicJavaScript.js` file within the `<tbody>` element.
7. Calculate the subtotal, tax, shipping, and grand total using JavaScript calculations. Use `15%` as the tax amount. The shipping amount should be `$40` unless the subtotal is above `$1000`, in which case it will be `$0`.

#### Test

- Test the page in the browser. Verify that the calculations work appropriately by changing the values in the `data.js` file.

![Replace Markup with JavaScript Loop using supplied array;Create function to output a single cart row, replace markup with calls to function, and create function to calculate these values](images/JS-Basic-instructions.jpg?raw=true "Basic JavaScript instructions image with annotations")

## Submitting

Post the link to your GitHub Classroom Repository to the Canvas Assignment Basic JavaScript assignment dropbox in Canvas.
