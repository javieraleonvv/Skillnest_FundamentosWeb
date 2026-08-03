console.log("conexion exitosa");

//ejemplo funcion simple (sin parametros)
function saludar(/*parametros*/) {
   console.log("¡Hola, bienvenido!");
}

//saludar(); //ejecucion con parametros
//el parametro recibe un valor para trabajar dentro de la funcion
//el parametro recibe el tipo de dato al momento de tomar valor.
function saludarParam(nombre) {
   console.log("¡Hola, " + nombre + "!");
}
saludarParam("javiera");
saludarParam("vicki"); //ejecucion con parametros

//funciones con return 
function encontrarMaximo(a, b) {
   if (a > b) {
       return a;
   } else {
       return b;
   }
}
let numero1 = 10;
let numero2 = 20;
let maximo = encontrarMaximo(numero1 ,numero2);
//maximo guardar el valor del retorno!!
alert(`el numero mayor es: ${numero1} y ${numero2} y el numero mayor es: ${maximo}`);

function encontrarMaximo(a, b) {
   if (a > b) {
       return a;//este valor se devuelve porque cumple la condicion

   } else {
       return b;
   }
}

//tarea 
/*
crear una funcion que recibe 3 parametros, a ,b yc.
debe sumar a +b y el resultado restarlo por c.
devolver el valor final y mostrarlo con un alert
*/ 
function operaciones(a, b, c) {
    return a + b - c;
}
let num1 =parseInt(prompt("Ingrese el primer numero:"));
let num2 =pasrseInt(prompt("ingrse el segundo numero:"));
let num3 =parseInt(prompt("ingrese el tercer numero:"));
let resultado =operaciones(num1,num2,num3);
alert(`la operacion de ${num1} + ${num2} + ${num3} = ${resultado}`);


/*
crear una funcion que reciba parametros y permita a traves de un bucle contar hasta este.

eje: se recibe el numero 5 y muestra: 1-2-3-4-5
*/

function mostrarConteo(a){
    let parametros =parseInt(prompt(`ingrese ellimite del contador`));

    resultado = contadorNumeros(parametros);
    alert(resultado.join("-"));
    
}
function contadorNumeros(a){
    let numeros =[];
    for (let i=1; i <= a; i++) {
        numeros.push(i);
    }
    return numeros;
} 