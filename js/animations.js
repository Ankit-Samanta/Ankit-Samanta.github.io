// ===========================
// SCROLL REVEAL ANIMATIONS
// ===========================

const revealElements = document.querySelectorAll('.reveal-up');

const observerOptions = {
  threshold: 0.12,
  rootMargin: '0px 0px -40px 0px',
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      // Unobserve after visible for performance
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

revealElements.forEach(el => observer.observe(el));
