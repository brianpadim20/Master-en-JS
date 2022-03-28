'use strict'

var numero =444;
var texto1 = "Bienvenido al curso de JS";
var texto2 = "Es un curso muy muy práctico";

var busqueda = texto1.indexOf("curso"); //para buscar una palabra se usa indexOf();
console.log (busqueda);

//Para buscar la última palabra dentro del texto: lastIndexOf();
busqueda = texto2.lastIndexOf("muy");

busqueda = texto2.search("muy"); //Hace lo mismo del indexOf();
console.log(busqueda);

busqueda = texto2.match(/muy/g); //Devuelve un array con los resultados que encuentre
//para que haga una búsqueda global se debe poner entre barras y al final poner gi.
console.log(busqueda);

busqueda = texto2.match("un");
console.log(busqueda);

busqueda = texto1.substring(14,5); //desde el caracter 3, que saque las 5 siguientes letras
console.log(busqueda); 

busqueda=texto1.charAt(14); //saca una letra de una cadena de caracteres.
console.log(busqueda);

busqueda=texto1.startsWith("Bienvenido");/*busca al inicio del string, si encuentra la palabra
arrojará true, si no la encuentra arrojará false*/
console.log(busqueda);

busqueda = texto1.endsWith("JS");/*hace lo mismo que el startWith, pero buscará al final del array
y no al principio del mismo */
console.log(busqueda);

busqueda = texto1.includes("JS");//Muestra si una palabra está en un string
