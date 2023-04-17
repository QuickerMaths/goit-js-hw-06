function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxesEl = document.getElementById("boxes");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${30 + 10 * i}px`;
    box.style.height = `${30 + 10 * i}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesEl.appendChild(box);
  }
}

createBtn.addEventListener("click", () => {
  const amount = document.getElementById("input").value;
  createBoxes(amount);
});

function destroyBoxes() {
  boxesEl.innerHTML = "";
}

destroyBtn.addEventListener("click", destroyBoxes);
