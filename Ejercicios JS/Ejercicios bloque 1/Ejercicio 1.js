'use strict'
/*Ejercicio 1

Hacer un programa que pida dos números, que diga cual es mayor, cual es menor o si son iguales
*/

var a = parseInt(prompt("Ingrese el primer número"));
var b = parseInt(prompt("Ingrese el segundo número"));

if (a<b){
    document.write("<p>El número a es menor que el número b</p>");

}else if(a>b){
    document.write("<p>El número a es mayor que el npumero b</p>");

}else{
    document.write("<p>Los números son iguales b</p>");

}while(a<=0 || b<=0 || isNaN(a) || isNaN(b)){
    a = parseInt(prompt("Ingrese el primer número"));
    b = parseInt(prompt("Ingrese el segundo número"));
    
}