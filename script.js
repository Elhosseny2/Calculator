let addBTN = document.querySelector("#add");
let multiplyBTN = document.querySelector("#multiply");
let subtractBTN = document.querySelector("#subtract");
let divideBTN = document.querySelector("#divide");
let one = document.querySelector(".one")
let two = document.querySelector(".two")
let three = document.querySelector(".three")
let four = document.querySelector(".four")
let five = document.querySelector(".five")
let six = document.querySelector(".six")
let seven = document.querySelector(".seven")
let eight = document.querySelector(".eight")
let nine = document.querySelector(".nine")
let dot = document.querySelector(".dot")
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
let Number1 = 0;
let operator ;
let Number2 = 0;
// let displayInput = display;

//Create a new function (operate) that takes an operator and two numbers and then calls one of the above functions on the numbers.
function operate(num1, num2, operator) {
  switch (operator) {
    case "+":
      add(num1 + num2)
      break;
    case "-":
      subtract(num1 - num2)
      break;
    case "*":
      multiply(num1 * num2);
      break;
    case "/":
      divide(num1 / num2);
      break;
  }
}
``