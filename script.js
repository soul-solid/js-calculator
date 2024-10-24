// DOM containers

let button = document.querySelectorAll(".btn");
let input = document.querySelector(".input");

let previousOutput = document.querySelector(".left-output");
let currentOutput = document.querySelector(".right-output");

// js containers

let userInput = input.value;
let decimalCount = 0;
let operatorCount = 0;
let displayResult = 0;

let currentValue = "";
let previousValue = "";
let operator = "";

//----- VARIABLE DECLARATIONS END -----//

// populate DOM input

button.forEach(element => {
  let buttonTxt = element.textContent;

  element.addEventListener("click", () => {
    if (buttonTxt === "CE") {
      clear();
    } else if (buttonTxt === "AC") {
      allClear();
    } else if (buttonTxt === "=") {
      display();
    } else if (buttonTxt === ".") {
      if (decimalCount === 0) {
        input.value += buttonTxt;
        decimalCount++;
      } else if (decimalCount > 0) {
        return;
      }
    } else if (
      buttonTxt === "+" ||
      buttonTxt === "-" ||
      buttonTxt === "*" ||
      buttonTxt === "/" ||
      buttonTxt === "%"
    ) {
      handleOperator(buttonTxt);
    } else {
      input.value += buttonTxt;
      currentValue += input.value;
    }
  });
});

// output display

function display() {
  let previousText = document.createElement("span");
  previousText.classList.add("previous-txt");

  let currentText = document.createElement("span");
  currentText.classList.add("current-txt");

  previousText.textContent = previousValue;
  previousOutput.appendChild(previousText);

  currentText.textContent = currentValue;
  currentOutput.appendChild(currentText);
}

// clear DOM

function clear() {
  input.value = "";
}

function allClear() {
  input.value = "";
  previousValue = "";
  currentValue = "";
  previousOutput.textContent = "";
  currentOutput.textContent = "";
}

// operator function

function handleOperator(op) {
  if (previousValue && currentValue) {
    operate(op, previousValue, currentValue);
  }

  operator = op;
  previousValue = currentValue;
  currentValue = "";
}

// basic math operations

function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function multi(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function modulo(a, b) {
  return a % b;
}

// operation function

function operate(op, operand1, operand2) {
  if (!operand1 && !operand2) return;

  let num1 = parseFloat(operand1);
  let num2 = parseFloat(operand2);
  
  if (op === "+") {
    displayResult = add(num1, num2);
  } else if (op === "-") {
    displayResult = sub(num1, num2);
  } else if (op === "*") {
    displayResult = multi(num1, num2);
  } else if (op === "/") {
    displayResult = divide(num1, num2);
  } else if (op === "%") {
    displayResult = modulo(num1, num2);
  }
}

// test
console.log(operate(op, num1, num2));