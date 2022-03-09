'use strict'
/**
 * 
 * Hacer un programa que diga si un número es par o impar
 * Debe tener ventana prompt.
 * Si un número no es válido, debe pedir de nuevo el número.
 * 
 */

var numero = parseInt(prompt("Digite un número"));
while (isNaN(numero)){
    alert("Valor ingresado no válido"); 
    numero = parseInt(prompt("Digite un número"));

}if (numero%2==0){
    alert("El número es par");
}else{
    alert("El número es impar");
}