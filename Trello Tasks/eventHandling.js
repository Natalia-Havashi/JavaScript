const elements = {
  form: document.querySelector(".form"),
  inputName: document.querySelector(".inputName"),
  inputEmail: document.querySelector(".inputEmail"),
  inputPassword: document.querySelector(".inputPassword"),
  inputs: document.querySelectorAll(".form-input"),
};

// Валідація полів форми при натисканні кнопки "Submit".
const validationRules = {
  inputName: {
    validate: (value) => value.length >= 2,
    errorMessage: "Ім'я має містити щонайменше 2 символи!",
    hint: "Ім'я має бути не менше 2 символів.",
  },
  inputEmail: {
    validate: (value) =>
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value),
    errorMessage: "Некоректний формат емейлу!",
    hint: "Приклад: name@example.com",
  },
  inputPassword: {
    validate: (value) => value.length >= 8,
    errorMessage: "Пароль має бути мінімум 8 символів",
    hint: "Пароль має містити щонайменше 8 символів.",
  },
};

elements.form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();

  let isValid = true;

  elements.inputs.forEach((input) => {
    if (!validationForm(input)) {
      isValid = false;
    }
  });

  if (isValid) {
    alert("Форма успішно відправленна!");
    clearInputs();
  }
}

function clearInputs() {
  elements.inputs.forEach((input) => {
    input.value = "";
    removeError(input);
    input.classList.remove("valid", "invalid");
  });
}
// Відображення повідомлень про помилки під відповідними полями.
function showError(input, message) {
  const errorSpan = input.parentElement.querySelector(".error");
  errorSpan.textContent = message;
  errorSpan.style.display = "block";
  input.classList.add("invalid");
  input.classList.remove("valid");
}
function removeError(input) {
  const errorSpan = input.parentElement.querySelector(".error");
  errorSpan.textContent = "";
  errorSpan.style.display = "none";
  input.classList.remove("invalid");
  input.classList.add("valid");
}
// Динамічне відображення підказок при фокусуванні на поле вводу.
function showHint(input, message) {
  const hintSpan = input.parentElement.querySelector(".hint");
  hintSpan.textContent = message;
  hintSpan.style.display = "block";
}

function removeHint(input) {
  const hintSpan = input.parentElement.querySelector(".hint");
  hintSpan.textContent = "";
  hintSpan.style.display = "none";
}

function validationForm(input) {
  const rule = validationRules[input.classList[0]];
  if (!rule) return true;

  const value = input.value.trim();
  if (!rule.validate(value)) {
    showError(input, rule.errorMessage);
    return false;
  }

  removeError(input);
  return true;
}

elements.inputs.forEach((input) => {
  input.addEventListener("input", () => validationForm(input));

  input.addEventListener("focus", () => {
    const rule = validationRules[input.classList[0]];
    if (rule) {
      showHint(input, rule.hint);
    }
  });

  input.addEventListener("blur", () => {
    removeHint(input);
    validationForm(input);
  });
});
