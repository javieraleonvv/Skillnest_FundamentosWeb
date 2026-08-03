document.getElementById("colorButton").addEventListener("click", function () {
   cambiarColorBody();
});

document.getElementById("colorButton").addEventListener("click", function () {
   cambiarColorCaja1();
});


document.getElementById("colorButton").addEventListener("click", function () {
   cambiarColorCaja2();
});


// Función que cambia el color de fondo al hacer clic
function cambiarColorBody() {
   let colores = ["#fa0000", "#ff8800", "#09ff00", "#ffd700", "#0004ff", "#ff00f2"];
   let colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
   let elemento = document.querySelector("body")
   document.body.style.backgroundColor = colorAleatorio;
}