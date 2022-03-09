'use strict'
/*
Hacer una calculadora que pida dos números por pantalla
Si se meten mal los #, pedirlos de nuevo,
Luego que muestre en el cuerpo de la página y por consola el resultado de
sumar, restar, multiplicar y dividir.
 */

var a = parseInt(prompt("Ingrese el primer número"));
var b = parseInt(prompt("Ingrese el segundo número"));

var suma = a+b
var resta = a-b
var multiplicacion = a*b
var division = a/b

while(isNaN(a) || isNaN(b)){
    alert("Los valores ingresados son incorrectos, no sea idiota");
    var a = parseInt(prompt("Ingrese el primer número"));
    var b = parseInt(prompt("Ingrese el segundo número"));

}document.write("<p> la suma de " + a + " y " + b + " es: " + suma + "</p><br/>");
document.write("<p> la resta de " + a + " y " + b + " es: " + resta+ "</p><br/>");
document.write("<p> la multiplicación de " + a + " y " + b + " es: " + multiplicacion + "</p><br/>");
document.write("<p> la división de " + a + " y " + b + " es: " + division + "</p><br/>");

console.log("la suma de " + a + " y " + b + " es: " + suma);
console.log("la resta de " + a + " y " + b + " es: " + resta);
console.log("la multiplicación de " + a + " y " + b + " es: " + multiplicacion);
console.log("la división de " + a + " y " + b + " es: " + division);

