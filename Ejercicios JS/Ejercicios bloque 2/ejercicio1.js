'use strict'
/*
Hacer un programa que: <br/>
1-pida 6 números por pantalla y los meta en un array<br/> OK
2-Mostrar el array entero (todos sus elementos) en el cuerpo de página y consola<br/> OK
3-Sacar el array ordenado y mostrarlo<br/>OK
4-Invertir su orden y mostrarlo<br/> OK
5-Mostrar cuántos elementos tiene el array.<br/> OK
6-Hacer una búsqueda de un valor introducido por el usuario y que diga si está en el array y 
su posición<br/>
*/

var listanums = [];

for (var i=0; i<6; i++){
    var numero = parseInt(prompt("Digite un núemero"));
    listanums[i]= numero;
}

console.log(listanums);
document.write("<p>"+listanums+"</p>");

listanums.sort();
document.write("<p>"+listanums+"</p>");
console.log(listanums);

listanums.reverse();
document.write("<p>"+listanums+"</p>");
console.log(listanums);

var longitudLista = listanums.length;
document.write("<p> la longitud de la lista es: "+longitudLista+"</p>");


var buscar = parseInt(prompt("Ingrese un valor a buscar dentro de la lista"));
var posicion = listanums.findIndex(numero => numero == buscar);
if (posicion != -1){
    document.write("<p> El número que ha buscado existe y está en la posición: "+posicion
    +"</p>");
}else{
    document.write("<p> El número que ha buscado no existe en el array</p>")
}