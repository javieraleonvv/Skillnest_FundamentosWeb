console.log(`conexion exitosa`)

// variables a lista

let nombre1 = "ana";
let nombre2 = "pedro";
let nombre3 = "maria";
let nombre4 = "carlos";

// transformar en array y mostrar

let nombres = ("ana", "pedro", "maria", "carlos");

//mostrar a maria en una alerta
console.log(nombres[2]); //muestra maria
let compras = [5000, 12000, 4500, 3000];
let alumnos = ["ana", "pedro", "maria", "jose"];
let datos = ["carlos", 18, true]
let frutas = ["manzana", "pera", "kiwi", "sandia"];
//desafio formar una oracion con elementos
//de las distintas variables
//pedro tiene 18 años, y compro una sandia a $2300

function recorrerArregglo() {

    let notas = [6.2, 5.8, 4.1, 7.0, 3.0, 6.9];

    for (let i = 0; i < notas.length; i++) {

        alert(`mostrando nota ${i} de ${notas.length}: ${notas[i]}`);
    }
}

//Sumar elementos dentro de un bucle}
function sumarElementos() {

    let ventas = [10000, 5000, 12000, 8000];

    let total = 0;

    for (let i = 0; i < ventas.length; i++) {

        total += ventas[i]; //+=acumula

    }

    alert(`el resultado final es:${total}`);

}

//calcular un promedio

function calcularPromedio() {
    let notas = [5.8, 6.2, 4.9, 6.5];
    let suma = 0;
    for (let i = 0; i < notas.length; i++) {
        suma += notas[i];

    }
    alert(`la suma acumulada es: ${suma}`)
    let promedio = suma / notas.length;
    alert(`el promedio de las notas: ${notas.join(" - ")} \nPromedio: ${promedio}`);
}

//condicion en bucle
function buuscarMayoresEdad() {
    let edades = [12, 15, 18, 20, 25];

    for (let i = 0; i < edades.length; i++) {
        //condicion para bucar mayores de 18
        if (edades[i] >= 18) {
            mayores.push(edades[i]);
        }
    }
    alert(`de la lista de edades: $${édades.join(" / ")}`)
}

//encontrar el menor y el mayor
let numeros = [10, 35, 7, 90, 22, 90, 2];
let menor = numeros[0];
let mayor = numeros[0];
for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > menor) {
        menor = numeros[i];
    } else if (numeros[i] > mayor) {
        mayor = numero[i];
    } else {
        console.log(`valor que no afecta: ${numeros[i]} `)
    }
}
alert(`de los numeros ${numeros.join(" / ")}
el menor es: ${menor}
el mayor es: ${mayor}`)


//ejemplo completo
//tarea: unir los console.log en una alerta
//eliminar el ulltimo valor y mostrarlo
//añadir dos valores nuevos con .push (prompt)

function calcularVentas() {
    let ventas = [10000, 5000, 12000, 8000];
    let total = 0;
    let mayores = [];
    let contadorVentas = 0;
    let mayor = ventas[0];
    let valorEliminado = ventyas.pop();
    let valor1 = parseInt(prompt("ingrese primer valor: "));
    let valor2 = parseInt(prompt("ingrse segundo valor"));
    for (let i = 0; i < ventas.length; i++) {
        total += ventas[i];
        if (ventas[i] > mayor){
            mayor = ventas[i];
            if(ventas[i] >=10000)
                mayores.push(ventas[i])
            contadorVentas++;
        }
    }
    
}
alert(`total ventas: ${total}\nMayor: ${mayor})
promedio:${total / ventas.length}
valores sobres $10.000: ${mayores.join(" / ")};
conteo de mayores: ${contadorVentas} ventas
valor Eliminado:${valorEliminado}`);














































