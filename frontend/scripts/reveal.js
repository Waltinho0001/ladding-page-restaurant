export function initReveal() {
  const elements = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      entry.target.classList.add('revealed');
      obs.unobserve(entry.target);
    });
  }, {
    threshold: 0.15
  });

  elements.forEach(el => observer.observe(el));
}