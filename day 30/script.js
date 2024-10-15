const cursor = document.querySelectorAll(".cursor");
const links = document.querySelectorAll(".link");
const toggleButton = document.getElementById("modeToggle");

// Function to handle mouse movement
window.addEventListener("mousemove", (e) => {
  let x = e.pageX;
  let y = e.pageY;

  cursor.forEach((el) => {
    el.style.left = `${x}px`;
    el.style.top = `${y}px`;
  });
});

// Add hover effect for links
links.forEach((link) => {
  link.addEventListener("mouseenter", () => {
    cursor.forEach((el) => el.classList.add("hover"));
  });
  link.addEventListener("mouseleave", () => {
    cursor.forEach((el) => el.classList.remove("hover"));
  });
});

// Add hover effect for toggle button
toggleButton.addEventListener("mouseenter", () => {
  cursor.forEach((el) => el.classList.add("hover"));
});
toggleButton.addEventListener("mouseleave", () => {
  cursor.forEach((el) => el.classList.remove("hover"));
});

// Dark & Light mode toggle functionality
const icon = document.getElementById("icon");

toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    icon.classList.replace("fa-moon", "fa-sun");
  } else {
    icon.classList.replace("fa-sun", "fa-moon");
  }
});
