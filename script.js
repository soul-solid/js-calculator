// DOM containers

let button = document.querySelectorAll(".btn");
let input = document.querySelector(".input");

let previousOutput = document.querySelector(".left-output");
let currentOutput = document.querySelector(".right-output");

// js containers

let userInput = input.value;
let decimalCount = 0;
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
      if (operator && currentValue) {
        operate(operator, previousValue, currentValue);
        display();
      }
    } else if (buttonTxt === ".") {
      if (!currentValue.includes(".")) {
        currentValue += ".";
        input.value = currentValue;
      }
    } else if (
      buttonTxt === "+" ||
      buttonTxt === "-" ||
      buttonTxt === "*" ||
      buttonTxt === "/" ||
      buttonTxt === "%"
    ) {
      input.value += buttonTxt;
      handleOperator(buttonTxt);
    } else {
      currentValue += buttonTxt;
      input.value += buttonTxt;
    }
  });
});

// output display

function display() {
  let previousText = document.createElement("span");
  previousText.classList.add("previous-txt");
  previousText.textContent = input.value;
  previousOutput.appendChild(previousText);

  let currentText = document.createElement("span");
  currentText.classList.add("current-txt");
  currentText.textContent = displayResult;
  currentOutput.appendChild(currentText);

  previousValue = displayResult.toString();
  currentValue = "";
  operator = "";
  input.value = displayResult;
}

// DOM clear functions

function clear() {
  input.value = "";
  currentValue = "";
  decimalCount = 0;
}

function allClear() {
  input.value = "";
  previousValue = "";
  currentValue = "";
  decimalCount = 0;
  displayResult = 0;
  previousOutput.textContent = "";
  currentOutput.textContent = "";
}

// operator function

function handleOperator(op) {
  if (currentValue) {
    if (previousValue && operator) {
      operate(operator, previousValue, currentValue);
      display();
    } else {
      previousValue = currentValue;
    }

    currentValue = "";
  } 
  operator = op;
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
  if (b === 0) {
    alert("Nuh-uh can't divide by zero boss!");
    return 0;
  }
  return a / b;
}

function modulo(a, b) {
  return a % b;
}

// operation function

function operate(op, operand1, operand2) {
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
  } else {
    displayResult = num2;
  }
}