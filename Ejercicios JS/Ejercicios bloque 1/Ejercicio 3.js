'use strict'

/*
Hacer un programa que muestre todos los números que hay entre dos números
introducidos por el usuario
*/

var a = parseInt(prompt("Introduce el primer número"));
var b = parseInt(prompt("Introduce el segundo número"));

if (a<b){

    for(var i = a; i < b; i++){
        console.log(i);
    }
}