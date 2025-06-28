// Navegación responsive: toggle menú
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
navToggle.addEventListener('click', () => {
  nav.classList.toggle('open');
  navToggle.classList.toggle('active');
});

// Cerrar menú al hacer click fuera (móvil)
document.addEventListener('click', (e) => {
  if (!nav.contains(e.target) && !navToggle.contains(e.target)) {
    nav.classList.remove('open');
    navToggle.classList.remove('active');
  }
});