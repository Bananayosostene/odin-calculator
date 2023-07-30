let expression = "";
const resultElement = document.getElementById("result");

function clearResult() {
  expression = "";
  resultElement.value = "";
}

function deleteStep() {
  expression = expression.slice(0, -1);
  resultElement.value = expression;
}
function appendValue(value) {
  expression += value;
  resultElement.value = expression;
}

function calculate() {
  try {
    const result = eval(expression);
    expression = result.toString();
    resultElement.value = expression;
  } catch (error) {
    expression = "";
    resultElement.value = "Error";
  }
}
