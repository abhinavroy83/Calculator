const buttons = document.querySelectorAll(".button-box");
const display = document.querySelector(".inner-div1");
console.log("helo");
var operand1 = "";
var operand2 = "";
var operator = "";
var fullExpression = "";

function updateDisplay() {
  fullExpression = operand1 + " " + operator + " " + operand2;
  display.textContent = fullExpression;
}

function isOperator(value) {
  return value == "+" || value == "-" || value == "*" || value == "/";
}

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    value = this.getAttribute("data-value");

    if (isOperator(value)) {
      console.log(value);
      if (operator === "") {
        operator = value;
        updateDisplay();
      }
    } else if (value === "del") {
      // Handle the DEL functionality
      if (operator === "") {
        operand1 = operand1.slice(0, -1);
      } else {
        operand2 = operand2.slice(0, -1);
      }
      updateDisplay();
    } else if (value == "ac") {
      operand1 = "";
      operand2 = "";
      operator = "";
      fullExpression = "";
      display.textContent = "";
    } else if (value == "=") {
      console.log(operand1, operand2);
      var result = eval(operand1 + " "+ operator + " " + operand2);
      console.log(result);
      if (!isNaN(result)) {
        operand1 = result.toString();
        operand2 = "";
        operator = "";
        fullExpression = operand1;
        display.textContent = result;
      }
    } else {
      if (operator === "") {
        operand1 += value;
        console.log(value);
      } else {
        operand2 += value;
        console.log(value);
      }
      updateDisplay();
    }
  });
}
