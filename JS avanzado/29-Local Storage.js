'use strict'

/*Localstorage

Hay un local storage por dominio. Cada página web tiene un local storage diferente

*/ 


//Comprobar disponibilidad del local storage
if(typeof(Storage)!=='undefined'){
    console.log("Local storage disponible");

}else{
    console.log("Local storage no compatible");

}//Para guardar datos en un local storage: 
localStorage.setItem("Titulo", "Curso de JS");

//Recuperar elemento y meterlo en mi página web 
console.log(localStorage.getItem("Titulo"));

//Si se quiere meter en el cuerpo de la página web el elemento recuperado:
document.querySelector("#peliculas").innerHTML=(localStorage.getItem("Titulo"));

//Guardar objetos en el local storage
var usuario={
    nombre: "Brian Patiño",
    email: "brianpadim@hotmail.com",
    username: "brianpadim",         
    edad: 28

};
localStorage.setItem("usuario", JSON.stringify(usuario));
//Stringify sirve para pasar un objeto tipo JSON a un string

//Recuperar un objeto del local storage ya que es un JSON string
var objetoJS=JSON.parse(localStorage.getItem("usuario"));

console.log(objetoJS);

document.querySelector("#datos").append(objetoJS.username + " " + objetoJS.nombre);

//Para borrar datos del local storage: 
//localStorage.removeItem("usuario")//Borra un campo específico
//localStorage.clear(); //Vacía todo el local storage