// Timer Countdown Logic
const countdown = () => {
  const targetDate = new Date("January 1, 2025 00:00:00").getTime();
  const now = new Date().getTime();
  const difference = targetDate - now;

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;

  if (difference < 0) {
    clearInterval(timerInterval);
    document.querySelector(".subtitle").textContent = "Happy New Year!";
  }
};

const timerInterval = setInterval(countdown, 1000);

// Fireworks Animation
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Particle {
  constructor(x, y, angle, speed, color) {
    this.x = x;
    this.y = y;
    this.angle = angle;
    this.speed = speed;
    this.color = color;
    this.alpha = 1; // Opacity for fade-out effect
    this.size = Math.random() * 3 + 2; // Random size for variety
  }

  update() {
    this.x += Math.cos(this.angle) * this.speed; // Update X position
    this.y += Math.sin(this.angle) * this.speed; // Update Y position
    this.alpha -= 0.01; // Reduce opacity over time
    this.speed *= 0.98; // Slow down over time
  }

  draw() {
    ctx.save();
    ctx.globalAlpha = this.alpha;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.restore();
  }
}

let particles = [];

const createFirework = (x, y) => {
  const numParticles = 50; // Number of particles per firework
  const baseColor = Math.random() * 360;
  for (let i = 0; i < numParticles; i++) {
    const angle = ((Math.PI * 2) / numParticles) * i; // Spread particles in a circle
    const speed = Math.random() * 4 + 2; // Random speed for variety
    const color = `hsl(${baseColor + Math.random() * 30}, 100%, 60%)`;
    particles.push(new Particle(x, y, angle, speed, color));
  }
};

const animate = () => {
  ctx.fillStyle = "rgba(0, 0, 0, 0.2)"; // Slight trail effect
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  particles.forEach((particle, index) => {
    if (particle.alpha <= 0) {
      particles.splice(index, 1); // Remove faded-out particles
    } else {
      particle.update();
      particle.draw();
    }
  });

  requestAnimationFrame(animate);
};

const randomFirework = () => {
  const x = Math.random() * canvas.width;
  const y = (Math.random() * canvas.height) / 2; // Fireworks only appear in the top half
  createFirework(x, y);
};

setInterval(randomFirework, 800); // Create fireworks at intervals
animate();
