const inputEl = document.getElementById("name-input");
const outputEl = document.getElementById("name-output");

inputEl.addEventListener("input", () => {
  inputEl.value === ""
    ? (outputEl.innerHTML = "Anonymous")
    : (outputEl.innerHTML = inputEl.value);
});
