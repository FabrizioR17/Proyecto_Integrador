document.getElementById("registro-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Aquí juntamos los datos del formu para el registro
    // Por ahor solo imprim los datos en la consola
    const formData = new FormData(this);
    const registroData = {};
    formData.forEach((value, key) => {
        registroData[key] = value;
    });
    console.log("Datos de registro:", registroData);
});


function registrar() {
    // Obtener los valores de los campos del formulario
    var tipoDocumento = document.getElementById("tipo-doc-reg").value;
    var numeroDocumento = document.getElementById("num-doc-reg").value;
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password-reg").value;

    // Variables para control de errores
    var error = false;
    var mensajeError = "";

    // Validar el dni
    if (tipoDocumento === "dni" && isNaN(numeroDocumento)) {
        error = true;
        mensajeError += "El número de documento debe ser numérico.\n";
    } else if (tipoDocumento === "dni" && numeroDocumento.length !== 8) {
        error = true;
        mensajeError += "El DNI debe tener 8 dígitos.\n";
    }

    // Validar el nombre y el apellido
    if (nombre.length < 3) {
        error = true;
        mensajeError += "El nombre debe tener al menos 3 caracteres.\n";
    }
    if (apellido.length < 3) {
        error = true;
        mensajeError += "El apellido debe tener al menos 3 caracteres.\n";
    }

    // Validar el formato del correo electrónico
    var emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegExp.test(email)) {
        error = true;
        mensajeError += "Ingrese un correo electrónico válido.\n";
    }

    // Validar la contraseña
    if (password.length < 6 || password.length > 12) {
        error = true;
        mensajeError += "La contraseña debe tener entre 6 y 12 caracteres.\n";
    } else if (!/[A-Z]/.test(password) || !/\d/.test(password)) {
        error = true;
        mensajeError += "La contraseña debe contener al menos una letra mayúscula y un número.\n";
    }

    // Mostrar mensaje de error si es necesario
    if (error) {
        alert(mensajeError);
    } else {
       
        console.log("Registro exitoso.");
        // redirigimos al usuario a una página proximamente sera la pagina con los permisos de usuario
        window.location.href = "bienvenida.html";
    }
}