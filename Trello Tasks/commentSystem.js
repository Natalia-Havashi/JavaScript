const elements = {
  formComment: document.querySelector(".formComment"),
  commentName: document.querySelector(".commentName"),
  textarea: document.querySelector(".textarea"),
  commentList: document.querySelector(".comment-list"),
};

let comments = [];

if (localStorage.getItem("comments")) {
  comments = JSON.parse(localStorage.getItem("comments"));
  renderComments();
}

// Додавання нових коментарів через форму.
elements.formComment.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  const name = elements.commentName.value.trim();
  const comment = elements.textarea.value.trim();

  if (name && comment) {
    const newComment = {
      name,
      comment,
    };
    comments.push(newComment);

    renderComments();

    elements.commentName.value = "";
    elements.textarea.value = "";
  }

  console.log(comments);
}

function renderComments() {
  elements.commentList.innerHTML = "";
  localStorage.setItem("comments", JSON.stringify(comments));
  if (comments.length === 0) {
    const emptyMessage = document.createElement("p");
    emptyMessage.textContent = "Коментарів немає";
    elements.commentList.appendChild(emptyMessage);
    return;
  }
}

comments.forEach(({ name, comment }, i) => {
  const li = document.createElement("li");
  li.classList.add("comment-item");
  li.setAttribute("data-index", i);

  const div = document.createElement("div");
  div.classList.add("comment");

  const strong = document.createElement("strong");
  strong.textContent = `${name}`;

  const span = document.createElement("span");
  span.textContent = new Date();

  div.appendChild(strong);
  div.appendChild(span);

  const p = document.createElement("p");
  p.textContent = `${comment}`;

  li.appendChild(div);
  li.appendChild(p);

  elements.commentList.appendChild(li);
});
// Відповіді на коментарі (вкладені коментарі).

// Видалення коментарів.

// Відображення часу додавання коментаря.

// Вимоги:

// Використовуйте методи document.createElement, appendChild, addEventListener для створення елементів системи коментарів та управління ними.

// Забезпечте динамічне оновлення списку коментарів при додаванні, відповіді та видаленні.

// Зберігайте коментарі в LocalStorage, щоб вони зберігались між перезавантаженнями сторінки.

// Підказка:

// Створіть структуру системи коментарів з використанням HTML-елементів ul та li. Додайте форми для додавання та відповіді на коментарі, а також кнопку для видалення коментарів.
