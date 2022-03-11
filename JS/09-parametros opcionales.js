'use strict'
/*
Los parámetros opcionales son parámetros que no son necesarios para obtener un resultado.
sino que ya vienen inicializados a algo por defecto
*/
function calculadora (numero1, numero2, mostrar = false){

    if (mostrar = false){

        console.log("suma: " + (numero1+numero2));
        console.log("resta: " + (numero1-numero2));
        console.log("multiplicación: " + (numero1*numero2));
        console.log("división: " + (numero1/numero2));
        
    }else{
        document.write("suma: " + (numero1+numero2)+"<br>");
        document.write("resta: " + (numero1-numero2)+"<br>");
        document.write("multiplicación: " + (numero1*numero2)+"<br>");
        document.write("división: " + (numero1/numero2)+"<br>");

    }

}calculadora(2,5);
calculadora(2,5, true);