'use strict'

/*Arrays, arreglos o matrices: colección de tipos de datos de valores que puede tener
una variable */

var nombres = ["Brian", "Andrés", "Manolo", "Andrea", "Daniela", 52, true];
//              0     ,     1   ,    2    ,     3   ,     4    , 5 ,   6
var lenguajes = new Array("PHP","JS","GO","Java","Python");

console.log(nombres);
console.log(lenguajes);

//Para acceder a una posición en específico:
console.log (nombres[1]);

console.log (nombres.length); //Ver la longitud de un array
/*
var elemento = parseInt(prompt("Que indice del array quieres ver?"));
if (elemento>=nombres.length){
    alert("El valor ingresado no es válido, debe ser menor que: " + nombres.length);

}else{
    alert("El usuario seleccionado es: " + nombres[elemento]);
}

alert(nombres[elemento]);
*/
/*
document.write ("<h1>Lenguajes de programación del 2018: </h1>");
document.write ("<ul>")
for(var i = 0; i<lenguajes.length; i++){
    document.write ("<li>"+ lenguajes[i] +"</li>");
}document.write ("</ul>");
*/

//usando for each
document.write ("<h1>Lenguajes de programación del 2018: </h1>");
document.write ("<ul>")
lenguajes.forEach((dato)=>{
    document.write ("<li>"+ dato +"</li>");
});
document.write ("</ul>");

//Utilizando los 3 parámetros para un array: 
document.write ("<h1>Lenguajes de programación del 2018: </h1>");
document.write ("<ul>")
lenguajes.forEach((dato,indice, arreglo)=>{
    console.log(arreglo);//Tiene el array original que coge el método for each. (opcional)
    document.write ("<li>"+ indice + "-" + dato +"</li>");
});git status
document.write ("</ul>");