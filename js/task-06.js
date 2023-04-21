const input = document.getElementById("validation-input");

input.addEventListener("input", () => {
  if (input.getAttribute("data-length") === input.value.length.toString()) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.add("invalid");
  }
});
