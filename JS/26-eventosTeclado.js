'use strict'

//window.addEventListener('load', () =>{
/**
 * 
 *  El load permite esperar a que la página esté cargada completamente
 *  para ejecutar el código de JS que queremos ejecutar y así no habrá que poner las etiquetas
 * de script al final del HTML, sino que se puede cargar en el head que es el sitio
 * mas recomendable ponerlo en el header
 * 
 */

//focus
var input = document.querySelector("#nombre");
input.addEventListener('focus',function(){
    console.log("[focus] Estás dentro del input");
});

/**
Sirve para cuando uno selecciona un campo de entrada de teclado.
*/

//blur
var input = document.querySelector("#nombre");
input.addEventListener('blur',function(){
    console.log("[blur] Estás fuera del input");
});

/**
Sirve para cuando uno se sale de un campo de entrada de teclado.
*/

//keydown
var input = document.querySelector("#nombre");
input.addEventListener('keydown',function(event){
    console.log("[keydown] Estás pulsando la tecla: ", String.fromCharCode(event.keyCode));
});

/*
Pcuando está pulsando una tecla
*/

//keypress
var input = document.querySelector("#nombre");
input.addEventListener('keypress',function(event){
    console.log("[keypress] tecla presionada: ", String.fromCharCode(event.keyCode));
});

/*
Devuelve la tecla presionada.
*/

//keyup
var input = document.querySelector("#nombre");
input.addEventListener('keyup',function(event){
    console.log("[keypress] tecla soltada: ", String.fromCharCode(event.keyCode));
});
/*
Muestra la tecla que se presiona, pero después de soltarla.
*/

//}); //end load