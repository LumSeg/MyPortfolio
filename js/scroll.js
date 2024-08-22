// scroll.js

document.addEventListener('DOMContentLoaded', function () {
    // Agregar evento de clic a los enlaces de navegación
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 60, // Ajuste de desplazamiento para el encabezado fijo
                    behavior: 'smooth'
                });
            }
        });
    });
});


