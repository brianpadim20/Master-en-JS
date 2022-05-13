'use strict'

var bicicleta = {
    color: 'rojo',
    modelo: 'BMX',
    frenos: 'disco',
    vel_max: '60km',
    cambiarColor: function(nuevoColor){
        //bicicleta.color = nuevoColor;
        this.color = nuevoColor;

    }

};
console.log(bicicleta);

bicicleta.cambiarColor("azul");
console.log(bicicleta);