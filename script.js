const buttons = document.querySelectorAll(".button-box");
const display = document.querySelector(".inner-div1");
console.log("helo");
var operand1 = 0;
var operand2 = null;
var operator = null;
function isOperator(value) {
  return value == "+" || value == "-" || value == "*" || value == "/";
}

var inputSequence = ""; // Variable to store the entire input sequence

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    value = this.getAttribute("data-value");
    var text = display.textContent.trim();

    if (isOperator(value)) {
      if (operand1 === null) {
        operand1 = parseFloat(inputSequence);
        operator = value;
        inputSequence += " " + value + " "; // Update the input sequence
        display.textContent = inputSequence; // Update the display
      }
    } else if (value == "del") {
      inputSequence = inputSequence.slice(0, -1); // Remove last character from the sequence
      display.textContent = inputSequence; // Update the display
    } else if (value == "=") {
      if (operand1 !== null && operator !== null) {
        operand2 = parseFloat(inputSequence);
        var result = eval(operand1 + " " + operator + " " + operand2);
        console.log(result);
        if (!isNaN(result)) {
          inputSequence = result.toString(); // Store the result in the sequence
          display.textContent = inputSequence; // Update the display
          operand1 = result;
          operand2 = null;
          operator = null;
        }
      }
    } else {
      inputSequence += value; // Update the input sequence
      display.textContent = inputSequence; // Update the display
    }
  });
}
