import { Component } from "@angular/core";

@Component({
    selector: 'videoJuego',
    templateUrl: './videoJuego.component.html'
})

export class videoJuegoComponent{
    public titulo:string;
    public listado: string;

    constructor(){
        this.titulo = "Componente de videojuegos";
        this.listado = "Listado de los juegos que se me pasaron por la cabeza";
        
        console.log("Se ha cargado el componente: videojuego.component.ts")

    }

}