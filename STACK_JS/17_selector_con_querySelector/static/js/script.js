console.log("conexion exitosa...");


let title = document.querySelector("#title");
console.log(title); // <h1 id="title">¡Hola, mundo!</h1>
console.log(`el contenido del titulo es: ${tittle.textContent }`)

//seleccionar un parrafo con la etiqueta
let parrafo= document.querySelector("p");
console.log(parrafo);

let logoImg = document.querySelector(".nav img");
console.log(logoImg); // <img src="logo.png" alt="logo">

//seleccionar parrafos

let parrafos = document.querySelector(".texto");
console.log(parrafo.textContent); // "Este es el primer párrafo."

//elemento inexistente
let boton = document.querySelector("#boton-inexistente");
console.log(boton); // null

if (boton !== null) {
   boton.textContent = "Nuevo Texto";
} else {
   console.log("El botón no existe.");
}

//tarea:
/*crear un boton y aplicar condicion al igual ejemplo...
-debe cambiar su texto al momento de hacerle click
-debe activarse un hover js cambiando el color de fondo
*/

let.boton = document.querySelector(".texto")
console.log(boton.textContent); //"pan connqueso y manqtella"