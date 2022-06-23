/** @format */

let number1 = parseInt(prompt("Pick Number1:"));
let number2 = parseInt(prompt("Pick Number2:"));
let operator = prompt(
  "Pick an operator: +, -, /, *, **(raise to the power of)"
);

if (operator == "-") {
  alert(`${number1} - ${number2} = ${number1 - number2}`);
} else if (operator == "+") {
  alert(`${number1} + ${number2} = ${number1 + number2}`);
} else if (operator == "/") {
  alert(`${number1} / ${number2} = ${number1 / number2}`);
} else if (operator == "*") {
  alert(`${number1} * ${number2} = ${number1 * number2}`);
} else if (operator == "**") {
  alert(`${number1} ** ${number2} = ${number1 ** number2}`);
} else {
  alert("Something went wrong, Refresh and Try again");
}
