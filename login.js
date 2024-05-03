
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Aquí obtienes los datos del formulario y los procesas para el inicio de sesión
    // Por ahora, simplemente imprimimos los datos en la consola
    const formData = new FormData(this);
    const loginData = {};
    formData.forEach((value, key) => {
        loginData[key] = value;
    });
    console.log("Datos de inicio de sesión:", loginData);
});

function login() {
    // Obtener los valores de los campos del formulario
    var tipoDocumento = document.getElementById("tipo-doc").value;
    var numeroDocumento = document.getElementById("num-doc").value;
    var password = document.getElementById("password").value;

    // Variables para control de errores
    var error = false;
    var mensajeError = "";

    // Validar el número de documento
    if (tipoDocumento === "dni" && isNaN(numeroDocumento)) {
        error = true;
        mensajeError += "El número de documento debe ser numérico.\n";
    } else if (tipoDocumento === "dni" && numeroDocumento.length !== 8) {
        error = true;
        mensajeError += "El DNI debe tener 8 dígitos.\n";
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
        // Aquí se pued enviar los datos del formulario para el inicio de sesión
        // y redirigir al usuario a la página principal si el inicio de sesión es exitoso
        console.log("Inicio de sesión exitoso.");
        // por ahora a una pagina que no exite mas adelante igual a la pagina comn permisos de uisuairo
        window.location.href = "bienvenida.html";
    }
}
