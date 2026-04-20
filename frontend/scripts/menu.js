export function initMenu() {
  const menuBtn = document.querySelector('.menu-btn');
  const navLinks = document.querySelector('.nav-links');
  const links = document.querySelectorAll('.nav-links li a');

  if (!menuBtn) return;

  menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');

    const icon = menuBtn.querySelector('i');

    if (navLinks.classList.contains('active')) {
      icon.classList.replace('fa-bars', 'fa-times');
      document.body.style.overflow = 'hidden';
    } else {
      icon.classList.replace('fa-times', 'fa-bars');
      document.body.style.overflow = 'auto';
    }
  });

  links.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      document.body.style.overflow = 'auto';
    });
  });
}