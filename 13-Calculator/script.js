let display = document.querySelector('input[name="display"]');

function clearDisplay() {
  display.value = "";
}

function deleteChar() {
  display.value = display.value.toString().slice(0, -1);
}

function appendChar(char) {
  display.value += char;
}

function evaluateExpression() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}
