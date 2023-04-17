function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxesEl = document.getElementById("boxes");
const createBtn = document.querySelector("data-create");
const destroyBtn = document.querySelector("data-destroy");

function createBoxes(amount) {}

