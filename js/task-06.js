const input = document.getElementById("validation-input");

input.addEventListener("change", () => {
  if (input.getAttribute("data-length") === input.value.length.toString()) {
    input.classList.add("valid");
  } else {
    input.classList.add("invalid");
  }
});
