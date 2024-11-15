let addBTN = document.querySelector("#add");
let multiplyBTN = document.querySelector("#multiply");
let subtractBTN = document.querySelector("#subtract");
let divideBTN = document.querySelector("#divide");
let zero = document.querySelector(".zero")
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
let input = document.querySelector("#display");
let equal = document.querySelector("#Equals");


//old logic (to be continued)
// function add(a, b) {
//   return a + b;
// }
// function subtract(a, b) {
//   return a - b;
// }
// function multiply(a, b) {
//   return a * b;
// }
// function divide(a, b) {
//   if (b === 0) {
//     return "Cannot divide by Zero";
//   }
//   return a / b;
// }
// let Number1 = 0;
// let operator ;
// let Number2 = 0;

// let displayInput = display;

//Create a new function (operate) that takes an operator and two numbers and then calls one of the above functions on the numbers.
// function operate(num1, num2, operator) {
//   switch (operator) {
//     case "+":
//       add(num1 + num2)
//       break;
//     case "-":
//       subtract(num1 - num2)
//       break;
//     case "*":
//       multiply(num1 * num2);
//       break;
//     case "/":
//       divide(num1 / num2);
//       break;
//   }
// }

let savedVariable = '';
let savedArray = [];

clearBTn.addEventListener('click', () => {
  display.value = '';
  savedVariable = '';
  savedArray = [];
});

addBTN.addEventListener('click', () => {
  input.value += '+';
  savedVariable += '+';
  savedArray.push('+');
});
multiplyBTN.addEventListener('click', () => {
  input.value += 'x';
  savedVariable += '*';
  savedArray.push('x');
});
subtractBTN.addEventListener('click', () => {
  input.value += '-';
  savedVariable += '-';
  savedArray.push('-');
});
divideBTN.addEventListener('click', () => {
  input.value += '÷';
  savedVariable += "/";
  savedArray.push('÷');
});
nine.addEventListener('click', () => {
  input.value += '9';
  savedVariable += 9;
  savedArray.push('9');
});

eight.addEventListener('click', () => {
  input.value += '8';
  savedVariable += 8;
  savedArray.push('8');
});

seven.addEventListener('click', () => {
  input.value += '7';
  savedVariable += 7;
  savedArray.push('7');
});

six.addEventListener('click', () => {
  input.value += '6';
  savedVariable += 6;
  savedArray.push('6');
});

five.addEventListener('click', () => {
  input.value += '5';
  savedVariable += 5;
  savedArray.push('5');
});

four.addEventListener('click', () => {
  input.value += '4';
  savedVariable += 4;
  savedArray.push('4');
});

three.addEventListener('click', () => {
  input.value += '3';
  savedVariable += 3;
  savedArray.push('3');
});

two.addEventListener('click', () => {
  input.value += '2';
  savedVariable += 2;
  savedArray.push('2');
});

one.addEventListener('click', () => {
  input.value += '1';
  savedVariable += 1;
  savedArray.push('1');
});
zero.addEventListener('click', () => {
  input.value += '0';
  savedVariable += 0;
  savedArray.push('0');
});
dot.addEventListener('click', () => {
  input.value += '.';
  savedVariable += '.';
  savedArray.push('.');
});
equal.addEventListener('click', () => {
  input.value = eval(savedVariable);
});