'use strict'

//arrays dentro de otros arrays

var categorias = ["accion", "terror", "comedia"];
var peliculas = ["La verdad duele", "La vida es bella", "Gran torino"];
var cine = [categorias, peliculas];//Este es un array multidimensional.

//Para ordenar un array:
peliculas.sort();
console.log (peliculas);

//Para darle el orden inverso a un array:
peliculas.reverse();
console.log(peliculas);


//console.log(cine[0][1]);//Primero elijo el elemento categorias, luego elijo la categoria a ver
//console.log(cine[1][2]);

//Añadir un elemento a un array:

peliculas.push("Batman");
var elemento = prompt("introduce una pelicula");

do{
    elemento = prompt("introduce una pelicula");
    peliculas.push(elemento);

}while(elemento!=acabar);

peliculas.pop();//Elimina el último elemento de un array.

//Para eliminar un elemento de un array: 
var indice = peliculas.indexOf("Gran torino");
if(indice >-1){
    peliculas.splice(indice);
}

//Para convertir un array a texto:
var stringpelis=peliculas.join();

console.log(peliculas);

var cadena = "este es un texto para pasar a tring";
var arrayCad = cadena.split(" ");
console.log(arrayCad);

