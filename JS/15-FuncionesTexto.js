'use strict'
/**
 * Transformación de textos
 */

var numero = 444;
var texto1 = "bienvenido al curso. ";
var texto2 = "Es un curso muy práctico";

var dato = numero.toString();//transforma un número a string
console.log (dato);
console.log (typeof dato);

dato = texto1.toUpperCase();
console.log(dato);

dato = texto2.toLocaleLowerCase();
console.log (dato);

//Calcular la longitud de un texto

var nombre = "";
console.log(nombre.length);

var nombre = ["hola","hola"];
console.log(nombre.length);

//Concatenar textos

var textoTotal = texto1+texto2;
console.log(textoTotal);