function enviarCorreo() {
    var nombre = document.getElementById("nombre").value;
    var nombreEmpresa = document.getElementById("nombre-empresa").value;
    var email = document.getElementById("email").value;
    var telefono = document.getElementById("telefono").value;
    var mensaje = document.getElementById("mensaje").value;

    var contenidoCorreo = `
        Nombre: ${nombre}
        Nombre de la Empresa o Usuario: ${nombreEmpresa}
        Correo electrónico: ${email}
        Teléfono: ${telefono}
        Mensaje: ${mensaje}
    `;

    fetch('https://formspree.io/f/xyyrpjnp', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nombre: nombre,
            email: email,
            mensaje: contenidoCorreo
        })
    })
    .then(response => {
        if (response.ok) {
            mostrarMensaje('¡El correo ha sido enviado correctamente!');
            limpiarFormulario();
            setTimeout(() => {
                ocultarMensaje();
            }, 10000); // Tiempo en milisegundos
        } else {
            throw new Error('Error al enviar el correo.');
        }
    })
    .catch(error => {
        mostrarMensaje(error.message);
    });
}

function mostrarMensaje(mensaje) {
    var mensajeElement = document.getElementById("mensaje-enviado");
    mensajeElement.textContent = mensaje;
    mensajeElement.style.display = "block";
}

function ocultarMensaje() {
    var mensajeElement = document.getElementById("mensaje-enviado");
    mensajeElement.style.display = "none";
}

function limpiarFormulario() {
    document.getElementById("nombre").value = "";
    document.getElementById("nombre-empresa").value = "";
    document.getElementById("email").value = "";
    document.getElementById("telefono").value = "";
    document.getElementById("mensaje").value = "";
}
