const monthNames = [
  "Baisakh",
  "Jestha",
  "Ashadh",
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

// List of festival holidays (for simplicity, we'll use static data for now)
const festivalHolidays = {
  9: [5, 6, 7], // Dashain (Assumed dates in September)
  11: [21, 22, 23], // Tihar (Assumed dates in November)
};

// Get today's Nepali date (use API for accurate conversion)
async function fetchNepaliDate() {
  try {
    const response = await fetch("https://nepalidateapi.com/api/date"); // Example API URL
    const data = await response.json();
    const nepaliDate = `${data.nepali_month_name} ${data.nepali_day}, ${data.nepali_year}`;
    document.getElementById("nepali-date").innerText = nepaliDate;
  } catch (error) {
    console.error("Error fetching Nepali date:", error);
    document.getElementById("nepali-date").innerText =
      "Error loading Nepali date";
  }
}

// Set Festival News (for Dashain, Tihar etc.)
function setFestivalNews() {
  const newsContent = document.getElementById("news-content");
  const currentMonth = new Date().getMonth() + 1; // Current month (1-12)

  if (currentMonth === 9) {
    newsContent.innerHTML =
      "Dashain is a festival of victory over evil. Celebrated with family gatherings, tika, and jamara.";
  } else if (currentMonth === 11) {
    newsContent.innerHTML =
      "Tihar is a festival of lights and worship. It celebrates the bond between brothers and sisters, and the goddess Laxmi.";
  } else {
    newsContent.innerHTML = "No major festival today. Stay tuned for updates!";
  }
}

// Function to generate the calendar dynamically for the current month
function generateCalendar() {
  const currentMonthIndex = new Date().getMonth(); // Current month (0-11)
  const currentYear = new Date().getFullYear();
  const firstDayOfMonth = new Date(currentYear, currentMonthIndex, 1); // First day of the month
  const daysInMonth = new Date(currentYear, currentMonthIndex + 1, 0).getDate(); // Get the number of days in the month

  const monthName = monthNames[currentMonthIndex];
  document.getElementById(
    "month-name"
  ).textContent = `${monthName} ${currentYear}`;

  const tbody = document.querySelector(".calendar-table tbody");
  tbody.innerHTML = ""; // Clear previous calendar

  let row = document.createElement("tr");
  // Fill the first week with empty cells if the first day of the month isn't Sunday (0)
  for (let i = 0; i < firstDayOfMonth.getDay(); i++) {
    row.appendChild(document.createElement("td")); // Empty cells before the first day
  }

  // Add days to the calendar table
  for (let day = 1; day <= daysInMonth; day++) {
    const dayCell = document.createElement("td");
    dayCell.textContent = day;

    // Highlight today's date
    const currentDate = new Date();
    if (
      day === currentDate.getDate() &&
      currentDate.getMonth() === currentMonthIndex
    ) {
      dayCell.classList.add("today");
    }

    // Highlight Saturdays (Festive day)
    if (new Date(currentYear, currentMonthIndex, day).getDay() === 6) {
      dayCell.classList.add("festive-day");
    }

    // Add festival holidays for the current month (from the festivalHolidays object)
    if (
      festivalHolidays[currentMonthIndex + 1] &&
      festivalHolidays[currentMonthIndex + 1].includes(day)
    ) {
      dayCell.classList.add("holiday");
      const holidayText = document.createElement("span");
      holidayText.classList.add("holiday-text");
      holidayText.textContent = "Holiday"; // Text to indicate holiday
      dayCell.appendChild(holidayText);
    }

    row.appendChild(dayCell);

    // Start a new row after 7 cells (for a new week)
    if (row.children.length === 7) {
      tbody.appendChild(row);
      row = document.createElement("tr");
    }
  }

  // Append the last row if there are remaining days
  if (row.children.length > 0) {
    tbody.appendChild(row);
  }
}

// Initialize the calendar and fetch Nepali date
fetchNepaliDate();
generateCalendar();
setFestivalNews();
