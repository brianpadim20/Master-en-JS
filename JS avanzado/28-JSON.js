'use strict'

//JSON - Notación de objetos de JS

var pelicula = {
    titulo: 'Batman',
    year: '2022',
    Pais: 'USA',

};
var peliculas =[
    {titulo: "La verdad duele", year: 2016, pais: "Francia"}, pelicula
]

//console.log(peliculas);

//Para escribir un listado de objetos en el documento:

var cajapelis = document.querySelector("#peliculas")
for(var i in peliculas){
    var parrafo = document.createElement("p");
    parrafo.append(peliculas[i].titulo + " - " + peliculas[i].year); 
    cajapelis.append(parrafo);

}