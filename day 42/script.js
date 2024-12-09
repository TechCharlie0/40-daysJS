const today = new Date();
const currentMonth = today.getMonth(); // Current month (0-indexed)
const currentYear = today.getFullYear(); // Current year
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

// Function to create a calendar for a given month and year
function createCalendar(month, year) {
  const firstDay = new Date(year, month, 1); // First day of the month
  const daysInMonth = new Date(year, month + 1, 0).getDate(); // Number of days in the month
  const todayDate = today.getDate(); // Today's date number

  // Get the starting day of the month (0-6, Sunday-Saturday)
  const startDay = firstDay.getDay();

  const calendarContainer = document.createElement("div");
  calendarContainer.classList.add("calendar-month");

  const header = document.createElement("div");
  header.classList.add("header");
  header.innerHTML = `<h2>${monthNames[month]} ${year}</h2>`;

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const daysRow = document.createElement("div");
  daysRow.classList.add("days");
  daysOfWeek.forEach((day) => {
    const dayDiv = document.createElement("div");
    dayDiv.classList.add("day");
    dayDiv.textContent = day;
    daysRow.appendChild(dayDiv);
  });

  const datesContainer = document.createElement("div");
  datesContainer.classList.add("dates");

  // Add empty divs for the days before the 1st of the month
  for (let i = 0; i < startDay; i++) {
    const emptyDiv = document.createElement("div");
    emptyDiv.classList.add("date-box");
    datesContainer.appendChild(emptyDiv);
  }

  // Add date boxes for each day in the month
  for (let i = 1; i <= daysInMonth; i++) {
    const dateBox = document.createElement("div");
    dateBox.classList.add("date-box");

    // Highlight Today
    if (i === todayDate && month === currentMonth && year === currentYear) {
      dateBox.classList.add("today");
    }

    // Highlight Saturdays
    const dayOfWeek = new Date(year, month, i).getDay();
    if (dayOfWeek === 6) {
      // Saturday
      dateBox.classList.add("holiday");
    }

    dateBox.textContent = i;

    // Hover effect to change background color
    dateBox.addEventListener("mouseenter", () => {
      dateBox.style.backgroundColor = "#3b82f6";
      dateBox.style.color = "white";
    });
    dateBox.addEventListener("mouseleave", () => {
      if (!dateBox.classList.contains("today")) {
        dateBox.style.backgroundColor = "#f0f0f0";
        dateBox.style.color = "black";
      }
    });

    datesContainer.appendChild(dateBox);
  }

  calendarContainer.appendChild(header);
  calendarContainer.appendChild(daysRow);
  calendarContainer.appendChild(datesContainer);

  return calendarContainer;
}

// Function to generate all 12 months in the year
function generateYearCalendar() {
  const yearContainer = document.getElementById("calendar-year-container");
  yearContainer.innerHTML = "";

  for (let month = 0; month < 12; month++) {
    const monthCalendar = createCalendar(month, currentYear);
    yearContainer.appendChild(monthCalendar);
  }
}

generateYearCalendar();
