function validar() {
    var retorno_correo = validar_correo();
    var retorno_contrasena = validar_contrasena();
    var retorno_confirmacion = validar_confirmacion_contrasena();
    var retorno_direccion = validar_direccion();
    var retorno_telefono = validar_telefono();
    var retorno_aficiones = validar_aficiones();
    var retorno_comuna = validar_comuna();
    return retorno_correo && retorno_contrasena && retorno_confirmacion && retorno_direccion && retorno_telefono && retorno_aficiones && retorno_comuna;
}

function validar_correo() {
    var input_email = document.getElementById("input-email");
    var div_error_email = document.getElementById("error-email");
    var correo = input_email.value;
    var pos_arroba = correo.indexOf("@");
    var pos_punto = correo.lastIndexOf(".");
    var arr_correo = correo.split(".");
    var extension = arr_correo[arr_correo.length - 1];
    if (correo == "") {
        div_error_email.innerHTML = "El correo electrónico es obligatorio";
        div_error_email.className = "text-danger small mt-1";
        return false;
    } else if (pos_arroba > 0 && pos_punto > pos_arroba && (extension.length > 1 && extension.length <= 3 )) {
        div_error_email.innerHTML = "";
        return true;
    } else {
        div_error_email.innerHTML = "El correo electrónico no tiene el formato correcto";
        div_error_email.className = "text-danger small mt-1";
        return false;
    }
}

function validar_contrasena() {
    var input_pwd = document.getElementById("input-pwd");
    var div_error_pwd = document.getElementById("error-pwd");
    var contrasena = input_pwd.value;
    var tieneDigito = /\d/.test(contrasena);
    var tieneLetra = /[a-zA-Z]/.test(contrasena);
    if (contrasena == "") {
        div_error_pwd.innerHTML = "La contraseña es obligatoria";
        div_error_pwd.className = "text-danger small mt-1";
        return false;
    } else if (contrasena.length < 3 || contrasena.length > 6) {
        div_error_pwd.innerHTML = "La contraseña debe tener de 3 a 6 caracteres";
        div_error_pwd.className = "text-danger small mt-1";
        return false;
    } else if (!tieneDigito || !tieneLetra) {
        div_error_pwd.innerHTML = "La contraseña debe tener al menos un dígito y una letra";
        div_error_pwd.className = "text-danger small mt-1";
        return false;
    } else {
        div_error_pwd.innerHTML = "";
        return true;
    }
}

function validar_confirmacion_contrasena() {
    var input_pwd = document.getElementById("input-pwd");
    var input_confirm_pwd = document.getElementById("input-confirmar_pwd");
    var div_error_confirm_pwd = document.getElementById("error-confirmar_pwd");
    var contrasena = input_pwd.value;
    var confirmacion_contrasena = input_confirm_pwd.value;
    if (confirmacion_contrasena != contrasena) {
        div_error_confirm_pwd.innerHTML = "Las contraseñas no coinciden";
        div_error_confirm_pwd.className = "text-danger small mt-1";
        return false;
    } else {
        div_error_confirm_pwd.innerHTML = "";
        return true;
    }
}

function validar_direccion() {
    var input_direccion = document.getElementById("input-direccion");
    var div_error_direccion = document.getElementById("error-direccion");
    var direccion = input_direccion.value;
    if (direccion == "") {
        div_error_direccion.innerHTML = "La dirección es obligatoria";
        div_error_direccion.className = "text-danger small mt-1";
        return false;
    } else {
        div_error_direccion.innerHTML = "";
        return true;
    }
}

function validar_comuna() {
    var select_comuna = document.getElementById("select-comuna");
    var div_error_comuna = document.getElementById("error-comuna");
    var comuna = select_comuna.value;
    if (comuna == "default") {
        div_error_comuna.innerHTML = "Debe seleccionar una comuna";
        div_error_comuna.className = "text-danger small mt-1";
        return false;
    } else {
        div_error_comuna.innerHTML = "";
        return true;
    }
}

function validar_telefono() {
    var input_telefono = document.getElementById("input-telefono");
    var div_error_telefono = document.getElementById("error-telefono");
    var telefono = input_telefono.value;
    if (telefono == "") {
        div_error_telefono.innerHTML = "El número de teléfono es obligatorio";
        div_error_telefono.className = "text-danger small mt-1";
        return false;
    } else {
        div_error_telefono.innerHTML = "";
        return true;
    }
}

function validar_url(){
    var input_url = document.getElementById("input-url");
    var div_error_url = document.getElementById("error-url");
    var url = input_url.value;
    var regex = /^(http|https):\/\/[^ "]+$/;
    if (url == "") {
        div_error_url.innerHTML = "La URL es obligatoria";
        div_error_url.className = "text-danger small mt-1";
        return false;
    } else if (!regex.test(url)) {
        div_error_url.innerHTML = "La URL no tiene formato correcto";
        div_error_url.className = "text-danger small mt-1";
        return false;
    } else {
        div_error_url.innerHTML= "";
        return true;
    }
}

function validar_aficiones() {
    var input_aficiones = document.getElementById("input-aficiones");
    var div_error_aficiones = document.getElementById("error-aficiones");
    var aficiones = input_aficiones.value.split(',');
    var regex = /^[a-zA-Z\s]+$/;

    if (aficiones.length < 2) {
        div_error_aficiones.innerHTML = "Debe ingresar al menos 2 aficiones";
        div_error_aficiones.className = "text-danger small mt-1";
        return false;
    } else {
        for (var i = 0; i < aficiones.length; i++) {
            if (!regex.test(aficiones[i].trim())) {
                div_error_aficiones.innerHTML = "Las aficiones deben contener solo letras y espacios";
                div_error_aficiones.className = "text-danger small mt-1";
                return false;
            }
        }
        div_error_aficiones.innerHTML = "";
        return true;
    }
}


document.getElementById("Formulario").addEventListener("submit", function(event){
    event.preventDefault();
    var esValido = validar();
    if (esValido) {
        this.submit();
    }
});





