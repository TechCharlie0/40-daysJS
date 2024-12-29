const canvas = document.getElementById("fireworksCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Fireworks Particle Constructor
function Firework() {
  this.x = Math.random() * canvas.width;
  this.y = Math.random() * canvas.height;
  this.size = Math.random() * 3 + 1;
  this.speedX = Math.random() * 3 - 1.5;
  this.speedY = Math.random() * 3 - 1.5;
  this.alpha = Math.random() * 0.5 + 0.5;
  this.color = `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(
    Math.random() * 255
  )}, ${Math.floor(Math.random() * 255)}, ${this.alpha})`;
}

Firework.prototype.update = function () {
  this.x += this.speedX;
  this.y += this.speedY;
  this.alpha -= 0.005;
  this.size *= 0.98;
};

Firework.prototype.draw = function () {
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
  ctx.fillStyle = this.color;
  ctx.fill();
  ctx.closePath();
};

// Create multiple fireworks
const fireworks = [];
function createFireworks() {
  for (let i = 0; i < 150; i++) {
    fireworks.push(new Firework());
  }
}

function animateFireworks() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = fireworks.length - 1; i >= 0; i--) {
    fireworks[i].update();
    fireworks[i].draw();
    if (fireworks[i].alpha <= 0) {
      fireworks.splice(i, 1);
    }
  }
  requestAnimationFrame(animateFireworks);
}

// Start fireworks after a delay
setTimeout(() => {
  createFireworks();
  animateFireworks();
}, 1000);

// Add more firework effects scattered around the screen
function addFireworkEffect() {
  const fireworkElement = document.createElement("div");
  fireworkElement.classList.add("firework");
  fireworkElement.style.top = `${Math.random() * window.innerHeight}px`;
  fireworkElement.style.left = `${Math.random() * window.innerWidth}px`;
  document.body.appendChild(fireworkElement);

  setTimeout(() => {
    fireworkElement.remove();
  }, 1500); // Firework disappears after 1.5 seconds
}

// Add fireworks continuously
setInterval(addFireworkEffect, 300);

// Function to create bubbles
function createBubble() {
  const bubble = document.createElement("div");
  bubble.classList.add("bubble");
  bubble.style.bottom = "0"; // Start from the bottom of the screen
  bubble.style.left = `${Math.random() * window.innerWidth}px`;
  document.body.appendChild(bubble);

  // Remove the bubble after animation ends
  setTimeout(() => {
    bubble.remove();
  }, 4000); // Duration of the floatUp animation
}

// Add bubbles continuously
setInterval(createBubble, 500);
