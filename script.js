let addBTN = document.querySelector("#add");
let multiplyBTN = document.querySelector("#multiply");
let subtractBTN = document.querySelector("#subtract");
let divideBTN = document.querySelector("#divide");
let numberBTN = document.querySelector(".num");
let clearBTn = document.querySelector(".clear");
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
addBTN.addEventListener("click",  () => {
add()
});
multiplyBTN.addEventListener("click",  () => {
multiply()
});
subtractBTN.addEventListener("click",  () => {
subtract()
});
divideBTN.addEventListener("click",  () => {
divide()
});

