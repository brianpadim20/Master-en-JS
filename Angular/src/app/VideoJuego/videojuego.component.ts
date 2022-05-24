import { Template } from "@angular/compiler/src/render3/r3_ast";
import { Component } from "@angular/core"; /**
Importar el componente, de donde se va a descargar (en este caso @angular/core)
*/

/**Definir el decorador @Component, para definir un componente */
@Component({
    /**
     * Dentro del JSON del component, se pueden definir diferentes propiedades
     */
    selector: 'videojuego',
    //Selector es una propiedad que permitiría decir que nombre va a tener la etiqueta
    template: `
        <h2>Componente de videojuegos</h2>
        <ul>
            <li>GTA</li>
            <li>FIFA</li>
            <li>Tekken</li>
            <li>Mario</li>
        </ul>

        <!--//El template puede ser un archivo local o externo-->
    `
    
})//No cerrar con punto y coma, porque esto es un decorador para una clase

export class VideojuegoComponent{
    //Se pone el nombre del archivo y Component junto, como en este caso: videojuegoComponent
    //Convirtiéndolo en camel case
    //Se puede definir un constructor dentro del componente
    constructor(){
        console.log ("Se ha cargado el componente videojuego.component.ts");
    }
}

/**
 * Para cargar el componente, se le debe dar de alta en la app de Angular, en el módulo principal
 * app.module.ts
 * Allí se importará el componente
 */