'use strict'

//Parámetros rest y spread

function listadoFrutas(fruta1, fruta2,...restoFrutas){/*Con los 3 puntos 
se creará un parámetro que organizará los parámetros que se pongan de más en la función */
    console.log("Fruta 1 " + fruta1);
    console.log("Fruta 2: " + fruta2);
    console.log(restoFrutas)

}
listadoFrutas("Manzana", "Naranja", "Sandía", "Pera", "Melón", "Coco");

var frutas=["Manzana", "Naranja"];
listadoFrutas(...frutas, "Sandía", "Pera", "Melón", "Coco");