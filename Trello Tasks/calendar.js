const elements = {
  data: document.querySelector(".data"),
  prevBtn: document.querySelector(".prevBtn"),
  nextBtn: document.querySelector(".nextBtn"),

  calendar: document.querySelector(".calendar-day"),

  eventList: document.querySelector(".event-list"),
  eventInput: document.querySelector(".eventInput"),
  eventBtn: document.querySelector(".addEventBtn"),
  eventForm: document.querySelector(".event-form"),
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

      if ((i === 0 && j < firstDay) || dayCounter > daysInMonth) {
        cell.classList.add("empty-cell");
      } else {
        const formattedDate = `${year}-${month + 1}-${dayCounter}`;
        cell.textContent = dayCounter;
        cell.dataset.date = formattedDate;

        if (events.some((event) => event.date === formattedDate)) {
          cell.classList.add("has-event");
        }

        if (
          year === currentYear &&
          month === currentMonth &&
          dayCounter === date.getDate()
        ) {
          cell.classList.add("today");
        }
        cell.addEventListener("click", () => displayEvents(formattedDate));
        dayCounter++;
      }
      row.appendChild(cell);
    }
    tbody.appendChild(row);
  }
  table.appendChild(tbody);

  elements.calendar.appendChild(table);
}

function displayEvents(date) {
  selectedDate = date;
  elements.eventList.innerHTML = "";

  const eventObj = events.find((event) => event.date === date);

  if (eventObj) {
    eventObj.events.forEach((event, index) => {
      const eventItem = document.createElement("li");

      const [year, month, day] = date.split("-");
      const formattedDate = `${String(day).padStart(2, "0")}.${String(
        month
      ).padStart(2, "0")}.${year}`;

      eventItem.textContent = `${formattedDate} - ${event}`;

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Видалити";
      deleteBtn.addEventListener("click", () => {
        eventObj.events.splice(index, 1);

        if (eventObj.events.length === 0) {
          events = events.filter((e) => e.date !== date);
        }

        localStorage.setItem("events", JSON.stringify(events));
        displayEvents(date);
      });

      eventItem.appendChild(deleteBtn);
      elements.eventList.appendChild(eventItem);
    });
  }

  elements.eventForm.style.display = "flex";

  updateCalendarHighlight();
}

elements.eventBtn.addEventListener("click", addEvent);

function addEvent() {
  const eventText = elements.eventInput.value.trim();

  if (!eventText) return;

  let eventObj = events.find((event) => event.date === selectedDate);

  if (!eventObj) {
    eventObj = { date: selectedDate, events: [] };
    events.push(eventObj);
  }
  eventObj.events.push(eventText);
  localStorage.setItem("events", JSON.stringify(events));

  elements.eventInput.value = "";

  displayEvents(selectedDate);
  elements.eventForm.style.display = "none";
}

function updateCalendarHighlight() {
  document.querySelectorAll(".calendar-cell").forEach((cell) => {
    const cellDate = cell.dataset.date;
    if (cellDate && events.some((event) => event.date === cellDate)) {
      cell.classList.add("has-event");
    } else {
      cell.classList.remove("has-event");
    }
  });
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
  console.log(`Changed to: ${currentMonth + 1}/${currentYear}`);
  updateHeader();
  createCalendar(currentYear, currentMonth);
});

updateHeader();
createCalendar(currentYear, currentMonth);
