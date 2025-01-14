const elements = {
  theme: document.querySelector(".js-theme"),
  currentTheme: document.querySelector(".js-current-theme"),
};
const initialState = {
  theme: "black",
  language: "uk",
  statusLog: true,
};

// Реалізуйте fallback для старіших браузерів, які можливо не підтримують LocalStorage або SessionStorage.
function storageAvailable(type) {
  try {
    const storage = window[type];
    const testKey = "__test__";
    storage.setItem(testKey, "test");
    storage.removeItem(testKey);
    return true;
  } catch (error) {
    return false;
  }
}
if (storageAvailable("localStorage")) {
  console.log("LocalStorage підтримується");
} else {
  console.log("LocalStorage не підтримується");
}

if (storageAvailable("sessionStorage")) {
  console.log("SessionStorage підтримується");
} else {
  console.log("SessionStorage не підтримується");
}
// Забезпечте обробку помилок, наприклад, коли LocalStorage досягає ліміту квоти.
function limit(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    if (error instanceof DOMException && error.code === 22) {
      console.error("LocalStorage quota exceeded!");
    } else {
      console.error("Failed to save data in LocalStorage:", error);
    }
  }
}

if (!localStorage.getItem("appState")) {
  localStorage.setItem("appState", JSON.stringify(initialState));
}

let appState = JSON.parse(localStorage.getItem("appState"));
console.log(appState);

applyTheme(appState.theme);

function applyTheme(theme) {
  document.body.style.backgroundColor = theme === "black" ? "#000" : "#fff";
  document.body.style.color = theme === "black" ? "#fff" : "#000";

  elements.currentTheme.textContent = theme === "black" ? "Black" : "White";
}

elements.theme.addEventListener("click", handleClick);

function handleClick() {
  appState.theme = appState.theme === "black" ? "white" : "black";

  localStorage.setItem("appState", JSON.stringify(appState));

  applyTheme(appState.theme);
}

window.addEventListener("storage", (e) => {
  console.log(e);
  if (e.key === "appState") {
    appState = JSON.parse(e.newValue);

    applyTheme(appState.theme);
  }
});

// Додаткові завдання для розширення проекту:
// Автоматичне видалення старих даних: Розробіть механізм для очищення застарілих або неактивних даних зі сховища.

// Захист даних: Впровадіть шифрування даних перед їх зберіганням у LocalStorage/SessionStorage для підвищення безпеки
//
// .
// console.log(Storage);
