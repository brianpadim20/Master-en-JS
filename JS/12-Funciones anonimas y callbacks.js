'use strict'
//Funciones anónimas: No tienen nombre y se guardará dentro de una variable, usado mucho para callbacks
//Un callback es una función que se ejecuta dentro de otra

function sumame (numero1, numero2, sumaYMuestra, sumaXDos){
    var sumar = numero1 + numero2;
    return sumar;
    sumaYMuestra(sumar);
    sumaXDos(sumar);
    
}sumame(5,7, function(dato){
    console.log("la suma es: ", dato);
},function(dato){
    console.log("La suma por dos es: ", dato*2);
});

