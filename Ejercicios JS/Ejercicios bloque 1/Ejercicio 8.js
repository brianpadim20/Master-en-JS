/**
Hacer las tablas de multiplicar del 1 al 10
 */

var multiplicando = 0;
var multiplicador = 0;

for (var i=multiplicando; i<=10; i++){
    document.write ("<h1>Tabla del " + i + "</h1>");

    for (var j=multiplicador; j<= 10; j++){
        var multiplicacion = i*j;
        document.write (i + " * " + j + " = " + multiplicacion + "<br/>");

    }
    
}