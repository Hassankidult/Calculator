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
    } else {
      input += value;
      calcToDisplay.textContent = input;
    }
  });
}
