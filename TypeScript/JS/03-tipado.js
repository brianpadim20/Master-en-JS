/**La diferencia entre let y var el TS, es similar a la de JS, es decir.
 * Las variables con let se usan a nivel de bloque, mientras que las variables
 * con var se usan a nivel global
 *
 */
//string
var cadena = "Cadena";
//numero
var numero = 25;
//boolean
var booleano = true;
//any
var random = "hola!"; //Permite meter cualquier valor
//arrays
var lenguajes = ["JS", "Python", "Java", 25, true, false];
//En los corchetes se pone el tipo de dato que va a recibir el array
var years = [2020, 2019, 2021, 2022];
//Se puede poner el tipo de dato y también especificar que este será un array.
console.log(cadena, numero, booleano, random, lenguajes);
//Con TypeScript se le pueden asignar diferentes tipos de datos a una variable, ejemplo:
var nombreEdad = "Brian Patiño";
nombreEdad = 28;
var dato = "Brian Patiño";
//Ejemplo var vs let
var a = 10;
var b = 22;
if (a == 10) {
    var a = 25;
    var b_1 = 12;
    console.log(a, b_1); //Aqui imprime 25, 12
}
console.log(a, b); //Aqui imprime 25, 22
