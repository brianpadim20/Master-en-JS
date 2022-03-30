'use strict'

var lenguajes = new Array("PHP","JS","GO","Java","Python");

document.write("<ul>");
for (let lenguaje in lenguajes){
    document("<li>"+lenguajes[lenguaje]+"</li>");

}document.write("</ul>");