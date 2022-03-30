'use strict'

var lenguajes = new Array("PHP","JS","GO","Java","Python");

//Para realizar una búsqueda en un array:
var busqueda = lenguajes.find(lenguaje=>lenguaje == "PHP");

//Para realizar la búsqueda de un índice en un array:
var busqueda = lenguajes.findIndex(lenguaje=>lenguaje == "PHP");

console.log(busqueda);

var precios = [10, 20, 50, 80, 12];
//Hacer un filtro para ver si hay números mayores, menores o iguales a un valor que quiera buscar
var busqueda = precios.some(precio=>precio >= 20); //mayores o iguales a 20

