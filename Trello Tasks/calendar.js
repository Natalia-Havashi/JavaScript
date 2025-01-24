const elements = {
  data: document.querySelector(".data"),
  prevBtn: document.querySelector(".prevBtn"),
  nextBtn: document.querySelector(".nextBtn"),
  calendar: document.querySelector(".calendar-day"),
  eventList: document.querySelector("event-list"),
  eventInput: document.querySelector(".eventInput"),
  eventBtn: document.querySelector(".addEventBtn"),
};

const now = new Date();
const month = now.getMonth();
const year = now.getFullYear();
