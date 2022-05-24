import { Template } from "@angular/compiler/src/render3/r3_ast";
import { Component, OnInit, DoCheck, OnDestroy } from "@angular/core"; /**
Importar el componente, de donde se va a descargar (en este caso @angular/core)
*/

/**Definir el decorador @Component, para definir un componente */
@Component({
    /**
     * Dentro del JSON del component, se pueden definir diferentes propiedades
     */
    selector: 'videojuego',
    //Selector es una propiedad que permitiría decir que nombre va a tener la etiqueta
    templateUrl: './videojuego.component.html'
    /*Es recomendable guardar las templates en archivos externos, para luego pasarlos mediante
    templateURL*/
    
})//No cerrar con punto y coma, porque esto es un decorador para una clase

export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy{
    //Propiedades
    public titulo: string;
    public listado: string;


    /*Se pone el nombre del archivo y Component junto, como en este caso: videojuegoComponent
    Convirtiéndolo en camel case
    Se puede definir un constructor dentro del componente*/
    constructor(){
        this.titulo = "Componente de videojuegos";
        this.listado = "Listado de los juegos mas populares";

        console.log ("Se ha cargado el componente videojuego.component.ts");
    }

    ngOnInit() {
        console.log("OnInit ejecutado");

    }ngDoCheck() {
        console.log ("DoCheck ejecutado");

    }cambiarTitulo(){
        this.titulo = "Nuevo Titulo para probar DoCheck";

    }tituloOriginal(){
        this.titulo = "Componente de videojuegos";

    }ngOnDestroy(): void {
        console.log("OnDestroy ejecutado");
    }
}

/**
 * Para cargar el componente, se le debe dar de alta en la app de Angular, en el módulo principal
 * app.module.ts
 * Allí se importará el componente
 */