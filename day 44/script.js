const canvas = document.getElementById("fireworksCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Firework Particle Constructor
function Firework(x, y, color, particleCount) {
  this.x = x;
  this.y = y;
  this.color = color;
  this.particleCount = particleCount;
  this.particles = [];

  // Create the particles
  for (let i = 0; i < this.particleCount; i++) {
    this.particles.push(new Particle(this.x, this.y, this.color));
  }
}

// Particle Constructor (each burst of firework)
function Particle(x, y, color) {
  this.x = x;
  this.y = y;
  this.size = Math.random() * 3 + 1;
  this.speedX = Math.random() * 4 - 2; // Random X speed
  this.speedY = Math.random() * 4 - 2; // Random Y speed
  this.alpha = 1;
  this.color = color;
}

Particle.prototype.update = function () {
  this.x += this.speedX;
  this.y += this.speedY;
  this.alpha -= 0.02; // Fade out over time
  this.size *= 0.98; // Shrink the particles over time
};

Particle.prototype.draw = function () {
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
  ctx.fillStyle = `rgba(${this.color[0]}, ${this.color[1]}, ${this.color[2]}, ${this.alpha})`;
  ctx.fill();
  ctx.closePath();
};

Firework.prototype.update = function () {
  for (let i = 0; i < this.particles.length; i++) {
    this.particles[i].update();
    this.particles[i].draw();
    if (this.particles[i].alpha <= 0) {
      this.particles.splice(i, 1);
      i--;
    }
  }
};

Firework.prototype.launch = function (launchPosition) {
  // Random color for the firework
  const colors = [
    [255, 99, 71], // Red
    [0, 255, 0], // Green
    [30, 144, 255], // Blue
    [255, 215, 0], // Yellow
    [255, 105, 180], // Pink
  ];
  const color = colors[Math.floor(Math.random() * colors.length)];

  // Create a firework at the launch position (top or bottom)
  const x = Math.random() * canvas.width;
  const y = launchPosition === "top" ? 50 : canvas.height - 50; // Launch from top or bottom
  const particleCount = Math.random() * 100 + 50;
  const firework = new Firework(x, y, color, particleCount);
  return firework;
};

// Store fireworks
const fireworks = [];

// Function to add fireworks
function addFirework() {
  const launchPosition = Math.random() > 0.5 ? "top" : "bottom"; // Randomly choose top or bottom
  const firework = new Firework().launch(launchPosition);
  fireworks.push(firework);
}

// Animate fireworks
function animateFireworks() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = fireworks.length - 1; i >= 0; i--) {
    fireworks[i].update();
    if (fireworks[i].particles.length === 0) {
      fireworks.splice(i, 1);
    }
  }

  requestAnimationFrame(animateFireworks);
}

// Start the animation
setInterval(addFirework, 1000); // Add fireworks every second
animateFireworks(); // Start the animation loop

// Function to create crackers (diwali-like explosion effects)
function createCracker() {
  const cracker = document.createElement("div");
  cracker.classList.add("cracker");
  cracker.style.top = `${Math.random() * (window.innerHeight / 2)}px`; // Start from top half of the screen
  cracker.style.left = `${Math.random() * window.innerWidth}px`;
  document.body.appendChild(cracker);

  // Remove the cracker after animation ends
  setTimeout(() => {
    cracker.remove();
  }, 1000); // Duration of cracker explosion
}

// Add crackers continuously
setInterval(createCracker, 500);
