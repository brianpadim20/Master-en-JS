'use strict'

/*
Mostrar todos los números impares que estén entre 2 números introducidos por teclado
*/

var a = parseInt(prompt("Ingrese el primer número"));
var b = parseInt(prompt("Ingrese el segundo número"));

for (var i = a; i<b; i++){
    if(i%2 != 0){
        console.log ("El número " + i + "es impar");
    }

}