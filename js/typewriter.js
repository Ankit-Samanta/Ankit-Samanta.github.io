// ===========================
// TYPEWRITER EFFECT
// ===========================

const phrases = [
  'responsive interfaces.',
  'clean React components.',
  'REST API integrations.',
  'pixel-perfect UIs.',
  'reusable components.',
];

const typewriterEl = document.getElementById('typewriter');
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let speed = 80;

function type() {
  const currentPhrase = phrases[phraseIndex];

  if (isDeleting) {
    typewriterEl.textContent = currentPhrase.substring(0, charIndex - 1);
    charIndex--;
    speed = 40;
  } else {
    typewriterEl.textContent = currentPhrase.substring(0, charIndex + 1);
    charIndex++;
    speed = 80;
  }

  if (!isDeleting && charIndex === currentPhrase.length) {
    // Pause at end
    speed = 1800;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    speed = 300;
  }

  setTimeout(type, speed);
}

// Start after a short delay so page loads first
setTimeout(type, 1000);
