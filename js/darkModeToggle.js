document.addEventListener('DOMContentLoaded', function () {
    const toggleSwitch = document.querySelector('#darkModeToggle');
    const body = document.body;
    const logo = document.getElementById('logo');

    // Definir las rutas de las imágenes para los modos claro y oscuro
    const logoLightMode = './assets/Portfolio Presentation in Black White and Orange Modern Minimal Style.png';
    const logoDarkMode = './assets/Logo Black White.png';

    // Chequear si el modo oscuro está habilitado en el localStorage
    if (localStorage.getItem('darkMode') === 'enabled') {
        body.classList.add('dark-mode');
        toggleSwitch.innerHTML = '<i class="bi bi-sun"></i>'; // Cambiar a icono de sol
        logo.src = logoDarkMode; // Cambiar logo a versión oscura
    }

    toggleSwitch.addEventListener('click', function () {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
            toggleSwitch.innerHTML = '<i class="bi bi-sun"></i>'; // Cambiar a icono de sol
            logo.src = logoDarkMode; // Cambiar logo a versión oscura
        } else {
            localStorage.setItem('darkMode', 'disabled');
            toggleSwitch.innerHTML = '<i class="bi bi-moon"></i>'; // Cambiar a icono de luna
            logo.src = logoLightMode; // Cambiar logo a versión clara
        }
    });
});

