const elements = {
  data: document.querySelector(".data"),
  prevBtn: document.querySelector(".prevBtn"),
  nextBtn: document.querySelector(".nextBtn"),
  calendar: document.querySelector(".calendar-day"),
  eventList: document.querySelector(".event-list"),
  eventInput: document.querySelector(".eventInput"),
  eventBtn: document.querySelector(".addEventBtn"),
};

const date = new Date();
let currentYear = date.getFullYear();
let currentMonth = date.getMonth();
let selectedDate = `${currentYear}-${currentMonth + 1}-${date.getDate()}`;

const shortDaysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

let events = [];

if (localStorage.getItem("events")) {
  events = JSON.parse(localStorage.getItem("events"));
}

function displayEvents(date) {
  const eventList = elements.eventList;
  eventList.innerHTML = "";

  if (events[date]) {
    events[date].forEach((event, index) => {
      const eventItem = document.createElement("li");
      eventItem.textContent = event;

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Видалити";
      deleteBtn.addEventListener("click", () => {
        events[date].splice(index, 1);
        if (events[date].length === 0) delete events[date];

        localStorage.setItem("events", JSON.stringify(events));
        displayEvents(date);
      });

      eventItem.appendChild(deleteBtn);
      eventList.appendChild(eventItem);
    });
  }
}

elements.eventBtn.addEventListener("click", addEvent);
function addEvent() {
  const eventText = elements.eventInput.value.trim();

  if (!eventText) return;

  if (!events[selectDate]) {
    events[selectDate] = [];
  }

  events[selectDate].push(eventText);
  localStorage.setItem("events", JSON.stringify(events));

  displayEvents(selectDate);
}

function createCalendar(year, month) {
  elements.calendar.innerHTML = "";
  const firstDay = (new Date(year, month, 1).getDay() + 6) % 7;
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const table = document.createElement("table");
  table.className = "calendar-table";

  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");
  shortDaysOfWeek.forEach((day) => {
    const th = document.createElement("th");
    th.textContent = day;
    headerRow.appendChild(th);
  });
  thead.appendChild(headerRow);
  table.appendChild(thead);

  const tbody = document.createElement("tbody");

  let dayCounter = 1;

  for (let i = 0; i < 6; i++) {
    const row = document.createElement("tr");
    for (let j = 0; j < 7; j++) {
      const cell = document.createElement("td");
      cell.className = "calendar-cell";

      if (i === 0 && j < firstDay) {
        cell.classList.add("empty-cell");
      } else if (dayCounter > daysInMonth) {
        cell.classList.add("empty-cell");
      } else {
        cell.textContent = dayCounter;
        cell.dataset.date = `${year}-${month + 1}-${dayCounter}`;
        cell.addEventListener("click", () => selectDate(cell.dataset.date));
        dayCounter++;
      }
      row.appendChild(cell);
    }
    tbody.appendChild(row);
  }
  table.appendChild(tbody);

  elements.calendar.appendChild(table);
}

function updateHeader() {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  elements.data.textContent = `${monthNames[currentMonth]} ${currentYear}`;
}

function selectDate(date) {
  selectDate = date;
  displayEvents(date);
}

elements.prevBtn.addEventListener("click", () => {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  updateHeader();
  createCalendar(currentYear, currentMonth);
});

elements.nextBtn.addEventListener("click", () => {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  updateHeader();
  createCalendar(currentYear, currentMonth);
});

updateHeader();
createCalendar(currentYear, currentMonth);
