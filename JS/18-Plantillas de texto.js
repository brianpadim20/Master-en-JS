'use strict'

var nombre = prompt("Ingresa un nombre: ");
var apellidos = prompt ("Ingresa tus apellidos");
var texto =`
    <h1>Hola que tal</h1>
    <h3>Mi nombre es: ${nombre}
    <h3>Mi apellido es: ${apellidos}
`
document.write (texto);