// ===========================
// CUSTOM CURSOR
// ===========================

const dot = document.getElementById('cursorDot');
const outline = document.getElementById('cursorOutline');

let mouseX = 0, mouseY = 0;
let outlineX = 0, outlineY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  dot.style.left = mouseX + 'px';
  dot.style.top = mouseY + 'px';
});

// Smooth outline follow
function animateOutline() {
  outlineX += (mouseX - outlineX) * 0.12;
  outlineY += (mouseY - outlineY) * 0.12;

  outline.style.left = outlineX + 'px';
  outline.style.top = outlineY + 'px';

  requestAnimationFrame(animateOutline);
}
animateOutline();

// Hover effects on interactive elements
const interactives = document.querySelectorAll('a, button, .project-card, .skill-pill, .contact-card, .stat-card');

interactives.forEach(el => {
  el.addEventListener('mouseenter', () => {
    dot.classList.add('active');
    outline.classList.add('active');
  });
  el.addEventListener('mouseleave', () => {
    dot.classList.remove('active');
    outline.classList.remove('active');
  });
});
