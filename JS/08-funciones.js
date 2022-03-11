'use strict'

/**
 * Una función es una agrupación reutilizable de un conjunto de instrucciones
 * 
 */

//Definición de la función
function calculadora (numero1, numero2){
    console.log("suma: " + (numero1+numero2));
    console.log("resta: " + (numero1-numero2));
    console.log("multiplicación: " + (numero1*numero2));
    console.log("división: " + (numero1/numero2));

}var numero1=parseInt(prompt("Ingrese el primer número"));
var numero2=parseInt(prompt("Ingrese el segundo número"));

calculadora(numero1, numero2); //call de la función

//Otra forma:

for (var i=0; i<= 10; i++){
    console.log (i);
    calculadora(i, 10);
}