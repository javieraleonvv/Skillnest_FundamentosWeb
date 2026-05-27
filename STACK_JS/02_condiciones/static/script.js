// ✅ Ejercicio 1: Sistema de descuento
// 📝 Enunciado
// Una tienda realiza descuentos según el monto de compra:
// Si la compra es mayor o igual a $50.000 → 20% descuento
// Si la compra es mayor o igual a $30.000 → 10% descuento
// Si la compra es menor a $30.000 → sin descuento
// El programa debe solicitar:
// Nombre del cliente
// Monto de compra
// Luego mostrar:
// Descuento aplicado
// Total a pagar
function sistemaDescuento(){
    let nombre = prompt("ingrsa su nombre: ");
    let monto = parseInt(prompt("ingresa el monto de compra: "))
    if (monto >=50000){
        alert(`el monto con descuento es: ${monto - (monto * 0,2)}`)
        else if (monto >= 30000) 
    }
}