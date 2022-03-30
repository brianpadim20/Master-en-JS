'use strict'

function cambiarColor(color){
    caja.style.background = color;
}

//DOM: Document object model
var caja=document.getElementById("caja")
console.log(caja);
//El . innerHTML es para sacar solo el texto que se tiene

//Para modificar una etiqueta:
caja.innerHTML="Texto en la caja desde JS";
caja.style.background ="red";
caja.style.padding = "20px";
caja.style.color = "black"
caja.className = "hola";