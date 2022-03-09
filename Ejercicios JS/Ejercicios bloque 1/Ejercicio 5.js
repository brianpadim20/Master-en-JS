'use strict'

/*
Programa que muestre todos los números divisores de un número introducido en un prompt
*/

var numero = parseInt(prompt("Ingrese el número a buscar sus divisores"));

for (var i = numero; i>=0; i--){
    if (numero%i == 0){
        console.log("un número divisor de " + numero + "es: "+ i);

    }

}