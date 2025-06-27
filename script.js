// script.js

document.addEventListener('DOMContentLoaded', () => {
    // 1. Mensaje simple en la consola para confirmar que el script se ha cargado
    console.log('¡Script del sitio web cargado y listo para interactividad!');

    // 2. Funcionalidad de desplazamiento suave (smooth scrolling)
    //    Esto asume que tienes enlaces en tu HTML que apuntan a IDs de sección,
    //    por ejemplo: <a href="#experience">Experiencia</a>

    // Selecciona todos los enlaces que tienen un 'href' que empieza con '#'
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Previene el comportamiento de salto predeterminado

            // Obtiene el ID del elemento al que se debe desplazar (por ejemplo, "experience")
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Desplaza la vista al elemento de destino con un comportamiento suave
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
