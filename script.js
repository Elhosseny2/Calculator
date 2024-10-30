function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}
let Number1;
let operator;
let Number2;

function operate(num1, num2, operator) {
  switch (operator) {
    case "+":
      num1 + num2;
      break;
    case "-":
      num1 - num2;
      break;
    case "*":
      num1 * num2;
      break;
    case "/":
      num1 / num2;
      break;
  }
}

