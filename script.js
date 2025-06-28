// Menú hamburguesa para mobile
document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.querySelector('.nav-toggle');
  const navUl = document.querySelector('.nav ul');
  navToggle.addEventListener('click', () => {
    navUl.classList.toggle('open');
    navToggle.classList.toggle('open');
  });
});