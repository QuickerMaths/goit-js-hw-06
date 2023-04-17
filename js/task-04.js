const valueEl = document.getElementById("value");
const buttons = document.querySelectorAll("[data-action]");

let counterValue = 0;

function increment() {
  return (counterValue += 1);
}

function decrement() {
  return (counterValue -= 1);
}

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    let type = btn.getAttribute("data-action");
    type === "increment" ? increment() : decrement();
    valueEl.innerHTML = counterValue;
  });
});
