let screen = document.getElementById("screen");
buttons = document.querySelectorAll("button");
let screenValue = "";
let sum = "";
for (item of buttons) {
  item.addEventListener("click", (e) => {
    buttonText = e.target.innerText;
    console.log(buttonText);
    if (buttonText == "c") {
      screenValue = "";
      screen.value = screenValue;
    } else if (buttonText == "=") {
      screen.value = eval(screenValue);
      sum = screen.value;
      screenValue = "" + sum;
      screen.value = sum;
    } else {
      screenValue += buttonText;
      screen.value = screenValue;
    }
  });
}
