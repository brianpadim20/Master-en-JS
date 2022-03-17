'use strict'

function porConsola (numero1,numero2){
    console.log("suma: " + (numero1+numero2));
    console.log("resta: " + (numero1-numero2));
    console.log("multiplicación: " + (numero1*numero2));
    console.log("división: " + (numero1/numero2));
}function porPantalla(numero1, numero1){
    document.write("suma: " + (numero1+numero2)+"<br>");
    document.write("resta: " + (numero1-numero2)+"<br>");
    document.write("multiplicación: " + (numero1*numero2)+"<br>");
    document.write("división: " + (numero1/numero2)+"<br>");

}function calculadora (numero1, numero2, mostrar = false){

    if (mostrar = false){
        porConsola(numero1, numero2)
        
    }else{
        porPantalla(numero1,numero2)

    }
}

calculadora (1,4);
calculadora (2,5, true);
calculadora (4,5, true);