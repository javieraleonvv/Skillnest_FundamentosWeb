console.log(`conexion exitosa`)

// # Ejercicio 1: Calculadora de Envío

// ## Enunciado

// Una empresa de despacho cobra el envío dependiendo del peso del paquete.

// Solicitar:

// - Nombre del cliente
// - Peso del paquete (kg)

// Condiciones:

// - Hasta 2 kg
// - Más de 2 kg y hasta 5 kg
// - Más de 5 kg y hasta 10 kg
// - Más de 10 kg

// El programa debe indicar:

// - Nombre del cliente
// - Categoría del envío
// - Valor correspondiente al despacho

function ejercicio1() {
    let nombreCliente = prompt("ingresar nombre de cliente:");
    let peso = parseint(prompt("ingresar peso de paquete: "));
    let valorDespacho = 2000;
    let mensaje = "";


    // # Ejercicio 2: Acceso a Biblioteca

    // ## Enunciado

    // Una biblioteca posee dos tipos de usuarios:

    // - Estudiante
    // - Profesor

    // Solicitar:

    // - Tipo de usuario
    // - Cantidad de libros solicitados

    // Condiciones:

    // Cada tipo de usuario posee un límite distinto de préstamos.

    // El programa debe indicar:

    // - Si el préstamo está permitido.
    // - Si supera el límite permitido.
    // - Mostrar un mensaje diferente según el tipo de usuario.

    // Utilizar operadores lógicos para realizar las validaciones.


    function ejercicio2() {
        let nombre = prompt(`ingrese su usuario`)
        let prestamo = parseInt(prompt(`Coloque la cantidad del prestamo`))
        if (nombre == "profesor") {
            if (prestamo > 0 && prestamo <= 50) {
                alert(`cantidad de libros aceptada`)
            } else {
                alert(`cantidad de libros denegada`)
            }

        } else if (nombre == "estudiante") {
            if (prestamo > 0 && prestamo <= 20)
                alert(`cantidad de libros aceptada`)
        }
        else {
            alert(`cantidad de libros denegada`)
        }

    }

}

// # Ejercicio 3: Clasificación Deportiva

// ## Enunciado

// Solicitar:

// - Nombre del participante
// - Edad

// Clasificar al participante según su edad.

// Debe existir al menos cuatro categorías distintas.

// Finalmente mostrar:

// - Nombre
// - Edad
// - Categoría asignada

function ejercicio3() {
    let nombreParticipante = prompt(`ingresar nombre participante`)
    let edadParticipante = parseInt(prompt(`ingresar edad`))
    if (edadParticipante > 14 && edad <= 19) {
        alert(` ${nombreParticipante} su  ${edadParticipante} fue admitida a clasificacion: adolecente`)
    }
    else if (edadParticipante > 20 && edad <= 30) {
        alert(` ${nombreParticipante} su ${edadParticipante} fue admitida a clasificacion: adultojoven`)
    }
    else if (edadParticipante > 30 && edad <= 58) {
        alert(`${nombreParticipante} su ${edadParticipante} fue admitida a clasificacion: adulto`)
    }
    else if (edadParticipante > 58 && edad <= 70) {
        alert(`${nombreParticipante} su ${edadParticipante} fue admitida a clasificacion: mayor edad`)
    } else {
        alert(`su datos no son validos`)
    }
}

// # Ejercicio 4: Sistema de Bonificación

// ## Enunciado

// Una empresa entrega bonos según los años trabajados.

// Solicitar:

// - Nombre del trabajador
// - Años de servicio

// Clasificar según distintos rangos de antigüedad.

// Mostrar:

// - Nombre
// - Nivel de antigüedad
// - Mensaje indicando si recibe o no bonificación.

function ejercicio4() {
    let nombreTrabajador = prompt(`ingresar su nombre`)
    let añosdeServicio = parseInt(prompt(`ingresar años de servicio`))
    let bono = 50000
    if (añosdeServicio > 3 && añosdeServicio <= 5)
        alert(` ${nombreTrabajador} su ${añosdeServicio} años de antigüedad fue aceptada para recibir el bono de ${bono} `)
    else if (añosdeServicio > 6 && añosdeServicio <= 20) {
        alert(` ${nombreTrabajador} su ${añosdeServicio} años de antiguedad fue aceptada para recibir el bono de ${bono}`)
    } else if(añosdeServicio > 20 && añosdeServicio <= 40) {
        alert(` ${nombreTrabajador} su ${añosdeServicio} años de antiguedad fue aceptada para recibir el bono de ${bono}`)
    } else{
        alert(`su antiguedad no es valida para recibir el bono`)
    }


}

// # Ejercicio 5: Evaluación de Velocidad

// ## Enunciado

// Solicitar:

// - Nombre del conductor
// - Velocidad registrada

// Condiciones:

// Clasificar la velocidad en distintos rangos.

// Además:

// Si supera un determinado límite, mostrar un mensaje indicando que ha excedido la velocidad permitida.

function evaluacionVelocidad(){
    let nombreConductor = prompt(`Ingrese nombre del conductor:`)
    let velocidadRegristada = parseInt(prompt(`Ingresela velocidad registrada:`))
    let informe = ""
    if(velocidadRegristada > 0 && velocidadRegristada <= 10){
        informe = `Conductor: ${nombreConductor}
        Velocidad Registrada: ${velocidadRegristada}
        Rango de velocidad: lento`
    }else if(velocidadRegristada > 10 && velocidadRegristada <= 30){
        informe = `Conductor: ${nombreConductor}
        Velocidad Registrada: ${velocidadRegristada}
        Rango de velocidad: moderada`
    }else if(velocidadRegristada > 30 && velocidadRegristada <= 50){
        informe = `Conductor: ${nombreConductor}
        Velocidad Registrada: ${velocidadRegristada}
        Rango de velocidad: rapido`
    }else if(velocidadRegristada > 50 && velocidadRegristada <= 120){
        informe = `Conductor: ${nombreConductor}
        Velocidad Registrada: ${velocidadRegristada}
        Rango de velocidad: muy rapido`
    }else if(velocidadRegristada > 120){
        informe = `Conductor: ${nombreConductor}
        Velocidad Registrada: ${velocidadRegristada}
        Excediste el limite de velocidad`
    }

    }
        