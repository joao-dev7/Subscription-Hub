const form = document.querySelector("form");
const submit = document.querySelector(".submit");
const input = document.querySelector("input");
const error = document.querySelector(".error");
const icon = document.querySelector(".icon");

form.addEventListener("submit", validate);
submit.addEventListener("click", validate);

function validate(e) {
  e.preventDefault();

  const inputValue = input.value.trim();

  if (!isEmail(inputValue)) {
    error.style.display = "block";
    icon.style.display = "inline";
    ativarErro();
  } else {
    error.style.display = "none";
    icon.style.display = "none";
    desativarErro();

    form.submit();
  }
}
function ativarErro() {
  input.style.border = "1px solid hsl(0, 93%, 68%)";
}
function desativarErro() {
  input.style.border = "1px solid hsl(0, 80%, 86%)";
}
function isEmail(input) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input);
}
