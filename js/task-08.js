const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const {
    elements: { email, password },
  } = e.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("uzupełnij wszystkie pola");
  } else {
    console.log({
      email: email.value,
      password: password.value,
    });
    e.currentTarget.reset();
  }
});
