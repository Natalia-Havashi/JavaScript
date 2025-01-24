const elements = {
  formComment: document.querySelector(".formComment"),
  commentName: document.querySelector(".commentName"),
  textarea: document.querySelector(".textarea"),
  commentList: document.querySelector(".comment-list"),
  formRepliesBox: document.querySelector(".form-replies-box"),
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
      date: new Date().toLocaleString(),
      replies: [],
    };
    comments.push(newComment);

    elements.commentName.value = "";
    elements.textarea.value = "";

    renderComments();
  }
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

  comments.forEach(({ name, comment, date, replies }, i) => {
    const li = document.createElement("li");
    li.classList.add("comment-item");
    li.setAttribute("data-index", i);

    const div = document.createElement("div");
    div.classList.add("comment");

    const strong = document.createElement("strong");
    strong.textContent = `${name}`;

    const span = document.createElement("span");
    span.textContent = `${date}`;

    div.appendChild(strong);
    div.appendChild(span);

    const p = document.createElement("p");
    p.textContent = `${comment}`;

    const boxBtn = document.createElement("div");
    boxBtn.classList.add("boxBtnComment");

    const btnDelete = document.createElement("button");
    btnDelete.textContent = "Видалити";
    btnDelete.classList.add("btnDeleteComment");

    const btnAnswer = document.createElement("button");
    btnAnswer.textContent = "Відповісти";
    btnAnswer.classList.add("btnAnswerComment");

    boxBtn.appendChild(btnAnswer);
    boxBtn.appendChild(btnDelete);

    li.appendChild(div);
    li.appendChild(p);
    li.appendChild(boxBtn);

    if (replies.length > 0) {
      const repliesList = document.createElement("ul");
      repliesList.classList.add("replies");
      replies.forEach((reply) => {
        const replyItem = document.createElement("li");
        replyItem.classList.add("reply");

        const replyDiv = document.createElement("div");
        replyDiv.classList.add("comment");

        const replyStrong = document.createElement("span");
        renderComments.textContent = `${reply.name}`;

        const replySpan = document.createElement("span");
        replySpan.textContent = `${reply.date}`;

        replyDiv.appendChild(replyStrong);
        replyDiv.appendChild(replySpan);

        const replyP = document.createElement("p");
        replyP.textContent = `${reply.comment}`;

        replyItem.appendChild(replyDiv);
        replyItem.appendChild(replyP);
        repliesList.appendChild(replyItem);
      });
      li.appendChild(repliesList);
    }

    elements.commentList.appendChild(li);
  });
}
// Відповіді на коментарі (вкладені коментарі).

elements.commentList.addEventListener("click", handleDeleteComment);

function handleDeleteComment(e) {
  if (
    e.target.tagName === "BUTTON" &&
    e.target.classList.contains("btnDeleteComment")
  ) {
    const index = e.target.closest(".comment-item").dataset.index;
    comments.splice(index, 1);
    renderComments();
  } else if (
    e.target.tagName === "BUTTON" &&
    e.target.classList.contains("btnAnswerComment")
  ) {
    const replyForm = e.target
      .closest(".comment-item")
      .querySelector(".form-replies-box");
    replyForm.style.display = "block";
  }
}
// Відображення часу додавання коментаря.

// Вимоги:

// Забезпечте динамічне оновлення списку коментарів при додаванні, відповіді та видаленні.

// Підказка:

// Створіть структуру системи коментарів з використанням HTML-елементів ul та li. Додайте форми для додавання та відповіді на коментарі, а також кнопку для видалення коментарів.
