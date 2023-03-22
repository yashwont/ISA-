const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");
const output = document.getElementById("output");

let currentValue = "";
let operator = "";
let result = 0;

for (let button of buttons) {
  button.addEventListener("click", handleButton);
}

function handleButton(event) {
  const buttonValue = event.target.value;
  if (!isNaN(buttonValue)) {
    // Button is a number
    currentValue += buttonValue;
    display.value = currentValue;
  } else {
    switch (buttonValue) {
      case "C":
        display.value = '';
        break;
        
      case "+":
        // Button is an operator
        if (currentValue !== "") {
          result = parseFloat(currentValue);
          operator = buttonValue;
          currentValue = "";
        }
        break;
      case "-":
        // Button is an operator
        if (currentValue !== "") {
          result = parseFloat(currentValue);
          operator = buttonValue;
          currentValue = "";
        }
        break;
      case "*":
        // Button is an operator
        if (currentValue !== "") {
          result = parseFloat(currentValue);
          operator = buttonValue;
          currentValue = "";
        }
        break;
      case "/":
        // Button is an operator
        if (currentValue !== "") {
          result = parseFloat(currentValue);
          operator = buttonValue;
          currentValue = "";
        }
        break;
      case "=":
        // Button is the equals command
        if (currentValue !== "") {
          calculate();
        }
        break;
      default:
        output.textContent = "Invalid button: " + buttonValue;
    }
  }
}

function calculate() {
  switch (operator) {
    case "+":
      result = result + parseFloat(currentValue);
      break;

    case "-":
      result = result - parseFloat(currentValue);
      break;

    case "*":
      result = result * parseFloat(currentValue);
      break;

    case "/":
      result = result / parseFloat(currentValue);
      break;
  }
  currentValue = "";
  operator = "";
  display.value = result;
}