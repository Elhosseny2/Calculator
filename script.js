let addBTN = document.querySelector("#add");
let multiplyBTN = document.querySelector("#multiply");
let subtractBTN = document.querySelector("#subtract");
let divideBTN = document.querySelector("#divide");
let numberBTN = document.querySelectorAll(".num");
let clearBTn = document.querySelector(".clear");
let display = document.querySelector("#display");
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
  if (b === 0) {
    return "Cannot divide by Zero";
  }
  return a / b;
}
let Number1;
let operator;
let Number2;
// let displayInput = display;

//Create a new function (operate) that takes an operator and two numbers and then calls one of the above functions on the numbers.
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

