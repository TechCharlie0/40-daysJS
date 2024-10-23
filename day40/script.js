const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

function createFirework(x, y) {
  const particleCount = 80; // Adjust this for more or fewer particles
  for (let i = 0; i < particleCount; i++) {
    const angle = (i / particleCount) * Math.PI * 2;
    const speed = Math.random() * 4 + 2;
    particles.push({
      x: x,
      y: y,
      radius: Math.random() * 2 + 1,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      gravity: 0.05,
      alpha: 1,
      life: Math.random() * 60 + 40,
      color: `hsl(${Math.random() * 360}, 100%, 50%)`,
    });
  }
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach((particle, index) => {
    particle.x += particle.vx;
    particle.y += particle.vy;
    particle.vy += particle.gravity;
    particle.alpha -= 0.015;
    particle.life--;

    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = `rgba(${hexToRgb(particle.color)}, ${particle.alpha})`;
    ctx.fill();

    if (particle.alpha <= 0 || particle.life <= 0) {
      particles.splice(index, 1); // Remove particle once it's faded out
    }
  });

  requestAnimationFrame(animateParticles);
}

// Converts HSL color to RGB format for the particle fill
function hexToRgb(hsl) {
  let rgb = hsl.match(/\d+/g);
  return `${rgb[0]},${rgb[1]},${rgb[2]}`;
}

// Trigger fireworks at random positions every few seconds
function randomFireworks() {
  createFirework(Math.random() * canvas.width, Math.random() * canvas.height);
}

canvas.addEventListener("click", (e) => {
  createFirework(e.clientX, e.clientY);
});

// Keep creating random fireworks in the sky
setInterval(randomFireworks, 1000);

// Start the animation loop
animateParticles();
