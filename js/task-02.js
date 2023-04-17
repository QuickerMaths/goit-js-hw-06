const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const btn = document.getElementById("btn");
const listEl = document.getElementById("ingredients");

btn.addEventListener("click", () => {
  for (let i = 0; i < ingredients.length; i++) {
    const listItem = document.createElement("li");
    listItem.classList.add("item");
    listItem.innerHTML = `${ingredients[i]}`;
    listEl.appendChild(listItem);
  }
});
