const elements = {
  form: document.querySelector(".form"),
  inputName: document.querySelector(".inputName"),
  inputEmail: document.querySelector(".inputEmail"),
  inputPassword: document.querySelector(".inputPassword"),
  inputs: document.querySelectorAll(".form-input"),
};

// Валідація полів форми при натисканні кнопки "Submit".
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

// Відправка даних форми за допомогою події submit, якщо всі поля пройшли валідацію.
function validationForm(input) {
  const value = input.value.trim();

  if (input.classList.contains("inputName")) {
    if (value === "") {
      showError(input, "Веддіть імя!");
      return false;
    } else if (value.length < 2) {
      showError(input, "Імя має містити щонайменше 2 символи!");
      return false;
    }
  }

  if (input.classList.contains("inputEmail")) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (value === "") {
      showError(input, "Ведіть електрону адресу");
      return false;
    } else if (!emailRegex.test(value)) {
      showError(input, "Некоректний формат емайлу");
      return false;
    }
  }

  if (input.classList.contains("inputPassword")) {
    if (value === "") {
      showError(input, "Веддіть пароль");
      return false;
    } else if (value.length < 8) {
      showError(input, "Пароль має бути мінімум 8 символів");
      return false;
    }
  }

  removeError(input);
  return true;
}
// Вимоги:

// Використовуйте події focus, blur, input та submit для управління взаємодією користувача.
// Забезпечте динамічну валідацію даних в полях форми.
elements.inputs.forEach((input) => {
  input.addEventListener("input", () => validationForm(input));

  input.addEventListener("focus", () => {
    if (input.classList.contains("inputName")) {
      showHint(input, "Ім'я має бути не менше 2 символів.");
    } else if (input.classList.contains("inputEmail")) {
      showHint(input, "Приклад: name@example.com");
    } else if (input.classList.contains("inputPassword")) {
      showHint(input, "Пароль має містити щонайменше 8 символів.");
    }
  });

  input.addEventListener("blur", () => {
    removeHint(input);
    validationForm(input);
  });
});

// Відображайте та приховуйте повідомлення про помилки та підказки залежно від взаємодії користувача.
