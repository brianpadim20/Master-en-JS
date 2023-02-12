'use strict'

var params = process.argv.slice(2); /*Para recibir los parámetros por consola, el 2 es para que no tome el
primer parámetro, pues este es la ruta del programa*/

var a=parseFloat(params[0]); //Primer número del array arrojado en params
var b=parseFloat(params[1]); //Segundo número del array arrojado en params

var plantilla = `
La suma es: ${a+b}
La resta es: ${a-b}
La multiplicación es: ${a*b}
La división es: ${a/b}
`;

console.log (params);

console.log ("Hola mundo con Node JS");

console.log (a);
console.log(b);
console.log (plantilla);