// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (toggle && navLinks) {
  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    navLinks.classList.toggle('open');
  });

  // Close nav when a link is clicked (mobile)
  navLinks.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      toggle.setAttribute('aria-expanded', 'false');
      navLinks.classList.remove('open');
    });
  });

  // Close nav on outside click
  document.addEventListener('click', (e) => {
    if (!toggle.contains(e.target) && !navLinks.contains(e.target)) {
      toggle.setAttribute('aria-expanded', 'false');
      navLinks.classList.remove('open');
    }
  });
}
