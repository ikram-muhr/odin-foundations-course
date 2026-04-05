let num1 = "";
let operator = "";
let num2 = "";
let isResultOrErrorDisplayed = false;

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
    return "Cannot divide by zero";
  }
  return a / b;
}

function operate(operator, num1, num2) {
  let result;
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);

  switch (operator) {
    case "+":
      result = add(num1, num2);
      break;
    case "-":
      result = subtract(num1, num2);
      break;
    case "*":
      result = multiply(num1, num2);
      break;
    case "/":
      result = divide(num1, num2);
      break;
    default:
      result = "Invalid operator";
  }

  // Formatting the results
  if (Number.isInteger(result)) {
    if (String(result).length > 15) {
      return result.toExponential();
    }
    return result;
  } else if (typeof result === "string") {
    return result;
  } else {
    return Number(result).toFixed(2);
  }
}

/*
DOM manipulation and event listeners
*/
const displayText = document.getElementById("displayText");
displayText.textContent = num1 || "0";

const digitButtons = document.querySelectorAll(".digits");
digitButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (!num2 && !operator) {
      // Check if a result is currently displayed.
      // If so, start a new calculation with the clicked digit as num1.
      if (isResultOrErrorDisplayed) {
        num1 = e.target.textContent;
        // Reset num2, operator, and isResultOrErrorDisplayed for the new calculation.
        // And prevent display errors
        num2 = "";
        operator = "";
        isResultOrErrorDisplayed = false;
      } else {
        num1 === "0"
          ? (num1 = e.target.textContent)
          : (num1 += e.target.textContent);
      }
      displayText.textContent = num1;
    } else {
      num2 === "0"
        ? (num2 = e.target.textContent)
        : (num2 += e.target.textContent);
      displayText.textContent = num2;
    }
  });
});

const operatorButtons = document.querySelectorAll(".operator");
operatorButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let result;
    const operatorName = e.target.value;

    if (num2) {
      result = operate(operator, num1, num2);
      /*
      If the result is a string, it means it's an error message, so we display it and return early
      without updating num1, num2, and operator.
      */
      if (typeof result === "string") {
        displayText.textContent = result;
        isResultOrErrorDisplayed = true;
        return;
      }

      displayText.textContent = result;
      num1 = result;
      num2 = "";
      operator = operatorName;
    } else {
      operator = operatorName;
    }
  });
});

const equalsButton = document.getElementById("equals");
equalsButton.addEventListener("click", () => {
  if (num1 && operator && num2) {
    const result = operate(operator, num1, num2);
    // Only update num1 if the result is not an error message (i.e., not a string)
    if (typeof result !== "string") {
      num1 = result;
    }
    num2 = "";
    operator = "";
    displayText.textContent = result;
    isResultOrErrorDisplayed = true;
    return;
  }
});

const clearButton = document.getElementById("ac");
clearButton.addEventListener("click", () => {
  num1 = "";
  num2 = "";
  operator = "";
  displayText.textContent = "0";
  isResultOrErrorDisplayed = false;
});

const deleteButton = document.getElementById("delete");
deleteButton.addEventListener("click", () => {
  if (!num2) {
    num1 = num1.slice(0, -1);
    displayText.textContent = num1 || "0";
  } else {
    num2 = num2.slice(0, -1);
    displayText.textContent = num2 || "0";
  }
});

const decimalButton = document.getElementById("decimal");
decimalButton.addEventListener("click", () => {
  const decimal = ".";
  if (!operator && !num1.includes(decimal)) {
    num1 === "0" ? (num1 = "0.") : (num1 += decimal);
    displayText.textContent = num1;
  } else if (!num2.includes(decimal)) {
    num2 === "0" ? (num2 = "0.") : (num2 += decimal);
    displayText.textContent = num2;
  }
});
