'use strict'

var numero =444;
var texto1 = "Bienvenido al curso de JS";
var texto2 = "Es un curso muy muy práctico";

var busqueda = texto1.replace("JS", "Python"); //reemplaza una palabra por otra
console.log (busqueda);

busqueda = texto1.slice(14);//muestra el texto a partir del caracter que se le acaba de ingresar
console.log (busqueda);

busqueda = texto1.slice(14,22); //Recorta desde una posición hasta otra definida por el programador
console.log(busqueda);

busqueda = texto1.split(); //mete todos los valores de una variable en un array
console.log(busqueda);

busqueda = texto1.split(" "); /*Mete todos los valores de una variable en un array, separado por
lo que se indica dentro de las comillas, en este caso, un espacio */
console.log(busqueda);

busqueda = texto2.trim();//quita los espacios por delante y por detrás dentro del stream
console.log(busqueda);
