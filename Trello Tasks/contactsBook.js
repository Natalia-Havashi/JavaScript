const elements = {
  form: document.querySelector(".form-book"),
  inputName: document.querySelector(".contact-name"),
  inputNumber: document.querySelector(".contact-tel"),
  inputSearch: document.querySelector(".input-search"),
  listContact: document.querySelector(".contact-list"),
};

let contacts = [];

if (localStorage.getItem("contacts")) {
  contacts = JSON.parse(localStorage.getItem("contacts"));
  renderContacts();
}

elements.form.addEventListener("submit", (e) => {
  e.preventDefault();
  const valueName = elements.inputName.value.trim();
  const valueNumber = elements.inputNumber.value.trim();

  if (valueName && valueNumber) {
    const newContact = {
      name: valueName,
      number: valueNumber,
    };

    contacts.push(newContact);

    renderContacts();
    console.log(contacts);

    elements.inputName.value = "";
    elements.inputNumber.value = "";
  }
});

function renderContacts() {
  elements.listContact.innerHTML = "";
  if (contacts.length === 0) {
    const emptyMessage = document.createElement("p");
    emptyMessage.textContent = "Контактів немає";
    elements.listContact.appendChild(emptyMessage);
    return;
  }
  contacts.forEach(({ name, number }, i) => {
    const li = document.createElement("li");
    li.classList.add("contact");
    li.setAttribute("data-index", i);

    const infoDiv = document.createElement("div");
    infoDiv.classList.add("info");

    const nameP = document.createElement("p");
    nameP.classList.add("name");
    nameP.textContent = `${name}`;

    const numberP = document.createElement("p");
    numberP.classList.add("number");
    numberP.textContent = `${number}`;

    infoDiv.appendChild(nameP);
    infoDiv.appendChild(numberP);

    const actionsDiv = document.createElement("div");
    actionsDiv.classList.add("actions");

    const editBtn = document.createElement("button");
    editBtn.type = "button";
    editBtn.classList.add("btnEditContact");
    editBtn.textContent = "Редагувати";

    const btnDelete = document.createElement("button");
    btnDelete.type = "button";
    btnDelete.classList.add("btnDeleteContact");
    btnDelete.textContent = "X";

    actionsDiv.appendChild(editBtn);
    actionsDiv.appendChild(btnDelete);
    li.appendChild(infoDiv);
    li.appendChild(actionsDiv);

    elements.listContact.appendChild(li);
  });

  localStorage.setItem("contacts", JSON.stringify(contacts));
}

elements.listContact.addEventListener("click", handleDeleteContact);

function handleDeleteContact(e) {
  if (e.target.classList.contains("btnDeleteContact")) {
    const index = e.target.closest(".contact").getAttribute("data-index");
    contacts.splice(index, 1);
    renderContacts();
  }
}

elements.inputSearch.addEventListener("input", searchContact);

function searchContact(e) {
  const searchValue = e.currentTarget.value.toLowerCase();

  const contactValue = document.querySelectorAll(".contact");

  contactValue.forEach((contact) => {
    const name = contact.querySelector(".name").textContent.toLowerCase();
    const number = contact.querySelector(".number").textContent.toLowerCase();

    if (name.startsWith(searchValue) || number.startsWith(searchValue)) {
      contact.style.display = "";
    } else {
      contact.style.display = "none";
    }
  });
}

elements.listContact.addEventListener("click", handleEditContact);

function handleEditContact(e) {
  const li = e.target.closest(".contact");

  if (e.target.classList.contains("btnEditContact")) {
    const infoDiv = li.querySelector(".info");
    const nameElement = li.querySelector(".name");
    const numberElement = li.querySelector(".number");

    const editInputName = document.createElement("input");
    editInputName.type = "text";
    editInputName.value = nameElement.textContent.trim();

    const editInputNumber = document.createElement("input");
    editInputNumber.type = "tel";
    editInputNumber.value = numberElement.textContent.trim();

    infoDiv.replaceChild(editInputName, nameElement);
    infoDiv.replaceChild(editInputNumber, numberElement);

    e.target.textContent = "Зберегти";
    e.target.classList.remove("btnEditContact");
    e.target.classList.add("btnSaveContact");
  } else if (e.target.classList.contains("btnSaveContact")) {
    const infoDiv = li.querySelector(".info");
    const editInputName = infoDiv.querySelector('input[type="text"]');
    const editInputNumber = infoDiv.querySelector("input[type='tel']");
    const index = li.getAttribute("data-index");

    const updatedName = editInputName.value.trim();
    const updatedNumber = editInputNumber.value.trim();

    if (updatedName && updatedNumber) {
      contacts[index] = {
        name: updatedName,
        number: updatedNumber,
      };

      renderContacts();
    }
  }
}
