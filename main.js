/*****************
 Variables
******************/

const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");
const inputNumber = document.querySelector("#inputNumber");
let randomNumberResult = Math.round(Math.random() * 10);
let xAttempts = 1;
inputNumber.focus();

/*****************
 Events
******************/

btnTry.addEventListener("click", handleTryClick);
btnReset.addEventListener("click", handleResetClick);
document.addEventListener("keydown", function (e) {
  if (e.key == "Enter" && screen1.classList.contains("hide")) {
    handleResetClick();
  }
});

/*****************
 Functions
******************/

function randomNumber() {
  let randomNumberReset = Math.round(Math.random() * 10);
  randomNumberResult = randomNumberReset;
  return randomNumberResult;
}

function handleTryClick(event) {
  event.preventDefault();

  if (Number(inputNumber.value) == randomNumberResult) {
    toggleScreen();
    screen2.querySelector(
      "h2"
    ).innerText = `Congrats!! You guessed it in ${xAttempts} attempts`;
    return;
  }

  inputNumber.value = "Wrong, try again!";
  inputNumber.focus();
  inputNumber.select();
  xAttempts++;
}

function handleResetClick() {
  xAttempts = 1;
  inputNumber.focus();
  inputNumber.value = "";
  randomNumber();
  toggleScreen();
}

function toggleScreen() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}
