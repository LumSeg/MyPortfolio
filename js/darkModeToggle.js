document.addEventListener('DOMContentLoaded', function () {
    const toggleSwitch = document.querySelector('#darkModeToggle');
    const body = document.body;

    // Chequear si el modo oscuro está habilitado en el localStorage
    if (localStorage.getItem('darkMode') === 'enabled') {
        body.classList.add('dark-mode');
        toggleSwitch.innerHTML = '<i class="bi bi-sun"></i>'; // Cambiar a icono de sol
    }

    toggleSwitch.addEventListener('click', function () {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
            toggleSwitch.innerHTML = '<i class="bi bi-sun"></i>'; // Cambiar a icono de sol
        } else {
            localStorage.setItem('darkMode', 'disabled');
            toggleSwitch.innerHTML = '<i class="bi bi-moon"></i>'; // Cambiar a icono de luna
        }
    });
});

