'use strict'

/*Usando un bucle, mostrar la media y la suma de los números
introducidos por el usuario hasta que se meta un número negativo
y se mostraría el resultado*/

var suma = 0;
var contador = 0;
var digito = parseInt(prompt("Introduzca un número(para parar, ingrese un valor negativo)"));

if (isNaN(digito)){
    digito = 0;

}while(digito>=0){
    var digito = parseInt(prompt("Introduzca un número: "));
    
    if (isNaN(digito)){
    digito = 0;
    
    }contador ++;
    suma+=digito;

}

console.log("La suma de los dígitos ingresados es: "+suma);
console.log("El promedio de los dígitos ingresados es: "+(suma/contador));
