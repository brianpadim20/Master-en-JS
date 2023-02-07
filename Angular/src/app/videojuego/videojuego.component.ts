import { Component, OnInit, DoCheck, OnDestroy } from "@angular/core";

@Component({
    selector: 'videoJuego',
    templateUrl: './videoJuego.component.html'
})

export class videoJuegoComponent implements OnInit, DoCheck, OnDestroy{
    public titulo:string;
    public listado: string;

    constructor(){
        this.titulo = "Componente de videojuegos";
        this.listado = "Listado de los juegos que se me pasaron por la cabeza";
        
        console.log("Se ha cargado el componente: videojuego.component.ts")

    }ngOnInit() {
        console.log("OnInit ejecutado.");
        
    }ngDoCheck(){
        console.log("DoCheck ejecutado");
        
    }ngOnDestroy(){
        console.log("OnDestroy ejecutado");
        
    }cambiarTitulo(){
        this.titulo = "Nuevo título del componente";
    
    }

}