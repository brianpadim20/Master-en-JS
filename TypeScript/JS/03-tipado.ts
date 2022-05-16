/**La diferencia entre let y var el TS, es similar a la de JS, es decir.
 * Las variables con let se usan a nivel de bloque, mientras que las variables
 * con var se usan a nivel global
 * 
 */

//string
var cadena: string = "Cadena";
//numero
var numero: number=25;
//boolean
var booleano: boolean = true;
//any
var random: any = "hola!";//Permite meter cualquier valor
//arrays
var lenguajes: Array<any> = ["JS", "Python", "Java", 25, true, false];
//En los corchetes se pone el tipo de dato que va a recibir el array

var years: number[] = [2020, 2019,2021, 2022];
//Se puede poner el tipo de dato y también especificar que este será un array.


console.log(cadena, numero, booleano, random, lenguajes);

//Con TypeScript se le pueden asignar diferentes tipos de datos a una variable, ejemplo:

var nombreEdad: string | number = "Brian Patiño";
nombreEdad = 28;

//También se puede crear un tipo de datos:

type alfanumerico = string | number

var dato: alfanumerico = "Brian Patiño";

//Ejemplo var vs let

var a = 10;
var b = 22

if(a == 10){
    var a = 25;
    let b = 12;

    console.log(a,b);//Aqui imprime 25, 12
}console.log(a,b); //Aqui imprime 25, 22