'use strict'

function sumame (numero1, numero2, sumaYMuestra, sumaXDos){
    var sumar = numero1 + numero2;
    return sumar;
    sumaYMuestra(sumar);
    sumaXDos(sumar);
    
}sumame(5,7, dato=>{
    console.log("la suma es: ", dato);
},dato=>{
    console.log("La suma por dos es: ", dato*2);
});

