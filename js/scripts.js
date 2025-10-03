// Smooth scrolling
document.querySelectorAll('nav a').forEach(link => {
  if (link.getAttribute('href').startsWith('#')) {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        window.scrollTo({ top: target.offsetTop - 60, behavior: 'smooth' });
      }
    });
  }
});

// Highlight active nav
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('.section');
  let scrollPos = window.scrollY + 70;
  sections.forEach(sec => {
    if (scrollPos >= sec.offsetTop && scrollPos < sec.offsetTop + sec.offsetHeight) {
      const id = sec.id;
      document.querySelectorAll('nav a').forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === `#${id}`);
      });
    }
  });
});