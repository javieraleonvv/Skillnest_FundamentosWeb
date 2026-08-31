const boton = document.getElementById("miBoton");

boton.addEventListener("mouseover", function () {
   console.log("El ratón está sobre el botón");
   boton.style.backgroundColor = "blue";
});

boton.addEventListener("mouseout", function () {
   console.log("El ratón ha salido del botón");
   boton.style.backgroundColor = "red";

});

//tarea
/*
crear dos botones con evento onmouseover y onmouseout 

-cambiar el texto de un boton
-cambiar el color de fondo y color de texto del segundo boton
*/

 const boton =document.getElementById("miboton2");

boton.addEventListener("mouseover" , function ()) {
    console.log("pan con queso y mantequilla");
    boton.style.backgroundColor = "yellow";
}

