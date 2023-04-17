const inputEl = document.getElementById("font-size-control");
const textEl = document.getElementById("text");

inputEl.addEventListener("change", () => {
  textEl.style.fontSize = `${inputEl.value}px`;
  console.log(inputEl.value);
});
