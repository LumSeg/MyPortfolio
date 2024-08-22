document.addEventListener('DOMContentLoaded', function () {
    // Selecciona todos los enlaces del menú
    var navLinks = document.querySelectorAll('#navbarNav .nav-link');

    // Añade un evento click a cada enlace
    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            // Selecciona el botón del toggler y el menú colapsable
            var toggler = document.getElementById('navbar-toggler');
            var collapseElement = document.getElementById('navbarNav');

            // Si el menú está desplegado, colapsa el menú
            if (collapseElement.classList.contains('show')) {
                toggler.click();
            }
        });
    });
});