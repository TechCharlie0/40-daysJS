// script.js
const monthYear = document.getElementById("monthYear");
const calendarDates = document.getElementById("calendarDates");
const prevMonth = document.getElementById("prevMonth");
const nextMonth = document.getElementById("nextMonth");

const months = [
  "Baisakh",
  "Jestha",
  "Ashad",
  "Shrawan",
  "Bhadra",
  "Ashwin",
  "Kartik",
  "Mangsir",
  "Poush",
  "Magh",
  "Falgun",
  "Chaitra",
];
const daysInMonth = [30, 32, 31, 32, 31, 30, 29, 30, 30, 29, 30, 30];

let currentMonth = new Date().getMonth();
let currentYear = 2081; // Use Nepali year mapping
let today = new Date().getDate();

const holidays = {}; // Store API holiday data

// Fetch holiday details from an API
async function fetchHolidays() {
  try {
    const response = await fetch("https://nepali-holiday-api.example.com/2081"); // Replace with actual API
    const data = await response.json();
    data.forEach((holiday) => {
      const key = `${holiday.month}-${holiday.day}`;
      holidays[key] = holiday;
    });
    renderCalendar();
  } catch (error) {
    console.error("Error fetching holidays:", error);
  }
}

function renderCalendar() {
  monthYear.textContent = `${months[currentMonth]} ${currentYear}`;
  calendarDates.innerHTML = "";

  const days = daysInMonth[currentMonth];
  for (let date = 1; date <= days; date++) {
    const dateDiv = document.createElement("div");
    dateDiv.classList.add("date");

    const key = `${currentMonth + 1}-${date}`;

    // Highlight today's date
    if (currentMonth === new Date().getMonth() && date === today) {
      dateDiv.classList.add("today");
    }

    // Mark holidays
    if (holidays[key]) {
      dateDiv.classList.add("event");
      dateDiv.title = `${holidays[key].name}: ${holidays[key].description}`;
    }

    dateDiv.textContent = date;
    calendarDates.appendChild(dateDiv);
  }
}

prevMonth.addEventListener("click", () => {
  currentMonth = (currentMonth - 1 + months.length) % months.length;
  if (currentMonth === months.length - 1) currentYear--;
  renderCalendar();
});

nextMonth.addEventListener("click", () => {
  currentMonth = (currentMonth + 1) % months.length;
  if (currentMonth === 0) currentYear++;
  renderCalendar();
});

// Update today's date at midnight
setInterval(() => {
  const now = new Date();
  if (now.getDate() !== today) {
    today = now.getDate();
    renderCalendar();
  }
}, 1000 * 60 * 60); // Check every hour

fetchHolidays();
