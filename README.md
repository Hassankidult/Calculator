---

# Calculator App

This is a simple calculator application built with HTML, CSS, and JavaScript. The calculator supports basic arithmetic operations such as addition, subtraction, multiplication, and division. It also includes functionalities for clearing the input, deleting the last character, and calculating the result.

## Features

- Basic arithmetic operations: addition, subtraction, multiplication, division, and modulus.
- Clear all input with the "AC" button.
- Delete the last character with the "del" button.
- Display the current input and the result separately.
- Operator precedence
- Responsive design

### Technical Details

- Built with HTML, CSS and Javascript.
- Uses the eval() function to evaluate mathematical expressions.

### Usage

- Click on the number buttons (0-9) to enter numbers.
- Click on the operator buttons (+, -, *, /, %) to perform operations.
- Click on the "." button to enter a decimal point.
- Click the "=" button to calculate the result.
- Click the "AC" button to clear all input.
- Click the "del" button to delete the last character entered.

### Code Overview

#### HTML Structure

The HTML file contains the structure of the calculator, including buttons for digits, operators, and other functionalities.

#### CSS Styling

The CSS file contains styles to make the calculator visually appealing and responsive.

#### JavaScript Functionality

The JavaScript file contains the logic for the calculator's functionality. Here are some key parts of the code:

- **Event Listeners:** Each button has an event listener that triggers a specific function based on the button's value.
- **Evaluation:** Uses the `eval` function to calculate the result based on the input string.
- **Operators Handling:** Ensures that multiple operators are not entered consecutively.
- **Decimal Handling:** Ensures that a decimal point is not entered multiple times in the same number.

#### Functions

- **getLastNumber(inputString):** Gets the last number in the input string to handle decimals correctly.
- **isOperator(value):** Checks if a value is an operator.

### Example

Here's an example of how the calculator handles input:

1. User clicks `2`, `+`, `3`, and `=`.
2. The display shows `5` as the result.

### Contributing

If you want to contribute to the project, feel free to fork the repository and submit a pull request.

### Live Demo

[Check out the calculator in action](https://hassankidult.github.io/Calculator/)

### Contact

For any questions or feedback, please contact [hassanaliyu33@gmail.com](mailto:hassanaliyu33@gmail.com).

---
