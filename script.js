// script.js
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle'); // Necesitarías un botón para esto en tu HTML
    const navMenu = document.querySelector('nav ul');

    // Si tienes un botón para el menú responsive (ej: un icono de hamburguesa)
    // navToggle.addEventListener('click', function() {
    //     navMenu.classList.toggle('active');
    // });

    // Para el scroll suave (opcional)
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });

            // Opcional: cerrar el menú en móvil después de hacer clic
            // if (navMenu.classList.contains('active')) {
            //     navMenu.classList.remove('active');
            // }
        });
    });
});
