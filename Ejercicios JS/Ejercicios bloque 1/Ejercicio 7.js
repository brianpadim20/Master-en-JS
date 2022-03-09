'use strict'
/**
    Tabla de multiplicar de un número introducido por pantalla
 */

var numero = parseInt(prompt("Cual es la tabla de multiplicar que desea saber?"));

while(isNaN(numero)){
    alert ("Número ingresado inválido, intente de nuevo.");
    numero = parseInt(prompt("Cual es la tabla de multiplicar que desea saber?"));

    document.write("<p>Tabla de multiplicar del </p>" + numero);

}for(var i=0; i<=10; i++){
    document.write(numero + " * "+ i +" = " + (numero*i) +"<br/>");
}