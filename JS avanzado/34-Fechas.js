'use strict'

var fecha = new Date();
var year = fecha.getFullYear();
var month = fecha.getMonth();
var day = fecha.getDate();
var time = fecha.getHours();

var textoHora=`
El año es: ${year}
El mes es: ${month+1}
El día es: ${day}
La hora es: ${time}
`
console.log(textoHora); 

