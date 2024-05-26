const inputBtns = document.querySelectorAll(".btn");
const calcToDisplay = document.querySelector(".current-operand");
const resultDisplay = document.querySelector(".result");

let input = "";

for (let inputBtn of inputBtns) {
  const value = inputBtn.value;

  inputBtn.addEventListener("click", () => {
    if (value == "=") {
      let result = eval(input);
      resultDisplay.textContent = result;
    } else if (value == "AC") {
      input = "";
      resultDisplay.textContent = "";
      calcToDisplay.textContent = "";
    } else if (value == "del") {
      input = input.slice(0, -1);
      calcToDisplay.textContent = input;
    } else if (inputBtn.classList.contains("operator")) {
      const lastInput = input[input.length - 1];

      if (lastInput !== undefined) {
        if (isOperator(lastInput)) {
          input = input.slice(0, -1) + value;
          calcToDisplay.textContent = input;
        } else {
          input += value;
          calcToDisplay.textContent = input;
        }
      }
    } else if (value == ".") {
      const lastNumber = getLastNumber(input);

      if (lastNumber.indexOf(".") === -1) {
        input += value;
        calcToDisplay.textContent = input;
      }
    } else {
      input += value;
      calcToDisplay.textContent = input;
    }
  });
}

function isOperator(value) {
  return ["+", "-", "*", "/", "%"].includes(value);
}

function getLastNumber(inputString) {
  const splitInput = inputString.split(/[-+*/%]/);
  return splitInput[splitInput.length - 1];
}
