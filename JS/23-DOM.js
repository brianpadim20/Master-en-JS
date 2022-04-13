'use strict'
/*
function cambiarColor(color){
    caja.style.background = color;
}

//Conseguir elementos con un ID concreto

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

//Conseguir elementos por su etiqueta
var todosDivs = document.getElementsByTagName('div');
console.log(todosDivs);
var contTexto=todosDivs[2].textContent; //Para ver el contenido del texto

var modTexto = todosDivs[2].innerHTML = "Este es otro texto"; //Inner permite asigar un nuevo valor
contTexto.style.background = "red";

//todosDivs.forEach(valor, indice => {

var valor;
for (valor in todosDivs){
    var parrafo = document.createElement("p");
    var texto = document.createTextNode(todosDivs[valor].textContent);
    parrafo.appendChild(texto);
    document.querySelector("#seccion").appendChild(parrafo);
}
//});

//console.log(modTexto);
*/
//Conseguir elementos por su clase

var divsRojos = document.getElementsByClassName('rojo');
var divsAmarillos = document.getElementsByClassName('amarillo');
divsAmarillos[0].style.background ="yellow"

for(var div in divsRojos){
    if(divsRojos[div].className == "rojo"){
    divsRojos[div].style.background = "red";
    console.log(divsRojos);

    }
}

//Query selector
var etiqueta = document.querySelector("div");
console.log(etiqueta);/*
Query selector solo selecciona un solo id
 */