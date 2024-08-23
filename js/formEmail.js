document.getElementById('contact-form').addEventListener('submit', async function(event) {
    event.preventDefault(); // Previene el comportamiento predeterminado del formulario

    const formData = new FormData(this);
    const formObject = {};
    formData.forEach((value, key) => {
        formObject[key] = value;
    });

    try {
        const response = await fetch('https://apiemail-cyd9.onrender.com/api/email/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formObject)
        });

        if (!response.ok) {
            throw new Error('Error en la solicitud');
        }

        const result = await response.text();
        alert('Mensaje enviado exitosamente');
        console.log(result);

        // Opcional: Limpiar el formulario
        this.reset();
    } catch (error) {
        console.error('Error al enviar el mensaje:', error);
        alert('Hubo un error al enviar el mensaje');
    }
});