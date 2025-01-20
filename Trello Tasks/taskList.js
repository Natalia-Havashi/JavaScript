const elements = {
  form: document.querySelector(".form"),
  inputTask: document.querySelector(".inputTask"),
  btnAddTask: document.querySelector(".btnAddTask"),
  listTask: document.querySelector(".list"),
  filter: document.querySelector(".task-filter"),
};
let tasks = [];
let filter = "all";

if (localStorage.getItem("tasks")) {
  tasks = JSON.parse(localStorage.getItem("tasks"));
  renderTask();
}

elements.btnAddTask.addEventListener("click", function () {
  const inputValue = elements.inputTask.value.trim();

  if (inputValue) {
    const newTask = {
      task: inputValue,
      completed: false,
    };
    tasks.push(newTask);
    elements.inputTask.value = "";
    console.log(tasks);
    renderTask();
  }
});

function filterTasks() {
  return tasks.filter(({ completed }) => {
    if (filter === "all") return true;
    if (filter === "completed") return completed;
    if (filter === "not-completed") return !completed;
  });
}

function renderTask() {
  const filteredTasks = filterTasks();
  const item = filteredTasks
    .map(({ task, completed }, i) => {
      return ` 
      <li class="item" data-index="${i}">
            <input type="checkbox" id="${i}" ${completed ? "checked" : ""}>
            <label>${task}</label>
            <button class="btnDeleteTask">Х</button>
        </li>`;
    })
    .join("");

  elements.listTask.innerHTML = item;
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

elements.listTask.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    const index = e.target.closest(".item").dataset.index;
    tasks.splice(index, 1);
    renderTask();
  }
});

elements.listTask.addEventListener("change", (e) => {
  if (e.target.tagName === "INPUT" && e.target.type === "checkbox") {
    const index = e.target.closest(".item").dataset.index;
    tasks[index].completed = e.target.checked;
    renderTask();
  }
});

elements.filter.addEventListener("change", () => {
  filter = elements.filter.value;
  renderTask();
});
