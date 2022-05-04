'use strict'
/*
Crear un formulario que permita añadir películas
*/

var formulario = document.querySelector("#formPeliculas")

formulario.addEventListener('submit', ()=>{
    var titulo = document.querySelector('#AddPelicula').value;
    if(titulo.length>=1){
        localStorage.setItem(titulo, titulo);

    }
    

});
var ul = document.querySelector("#peliculas-list")
for(var i in localStorage){
    if(typeof localStorage[i]== 'string'){
        var li = document.createElement("li");
        li.append(localStorage[i]);
        ul.append(li);

    }
    
}var formulariob = document.querySelector("#formBorrarPeliculas")

formulariob.addEventListener('submit', ()=>{
    var titulo = document.querySelector('#BorrarPelicula').value;
    if(titulo.length>=1){
        localStorage.removeItem(titulo, titulo);

    }
    

});
