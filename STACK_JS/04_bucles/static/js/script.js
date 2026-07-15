console.log(`conexion exitosa`)

/*ejemplo bucle for*/
function contarHasta2() {
    (let i = 0; i < usuarios.length; i++) {
        console.log("Bienvenido, " + usuarios[i]);
    }
}
/*ejemplo bucle while*/
function reproducciónCancion() {
    let reproduciendo = true;

    while (reproduciendo) {
        alert("La canción sigue sonando...");
        // Simulación de una acción que detendría la reproducción
        reproduciendo = false;
    }
}
function cargadeDatos() {
    let datosPendientes = 5;

    while (datosPendientes > 0) {
        alert(`Cargando datos...`);
        datosPendientes--;

    }

}
function validarContraseña() {
    let contraseñaCorrecta = false;
//!variables = variable es distinto a a verdadera
while (!contraseñaCorrecta) {
    let intento = prompt("Ingresa tu contraseña:");
    if (intento === "1234") {
        contraseñaCorrecta = true;
        alert("Acceso concedido.");
        break;
        alert("no se ejecuta")
    } else {
        alert("Contraseña incorrecta, intenta de nuevo.");
    }
}

}
