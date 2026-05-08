const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    siteNav.classList.toggle('open');
  });
}

const navLinks = document.querySelectorAll('.site-nav a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (siteNav.classList.contains('open')) {
      siteNav.classList.remove('open');
    }
  });
});

const form = document.querySelector('.contact-form');
if (form) {
  form.addEventListener('submit', event => {
    event.preventDefault();
    alert('Message form submitted! Thank you for reaching out. I will get back to you soon.');
    form.reset();
  });
}