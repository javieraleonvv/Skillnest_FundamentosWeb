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

 const boton1 =document.getElementById("miboton2");

boton1.addEventListener("mouseover" , function ()); {
    console.log("la salsapica?");
    boton2.style.backgroundColor = "yellow";
    boton2.style.color = "grey";
    boton2.textContent = "claro que pica";

}

