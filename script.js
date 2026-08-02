
const header = document.querySelector('.site-header');
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

window.addEventListener('scroll', () => {
  header?.classList.toggle('scrolled', window.scrollY > 18);
});

menuBtn?.addEventListener('click', () => {
  navLinks?.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', navLinks?.classList.contains('open') ? 'true' : 'false');
});

document.querySelectorAll('.nav-links a').forEach(a => a.addEventListener('click', () => {
  navLinks?.classList.remove('open');
}));

const io = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: .15 });

document.querySelectorAll('.reveal').forEach(el => io.observe(el));
