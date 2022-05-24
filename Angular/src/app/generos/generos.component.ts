import { Component } from "@angular/core";

@Component({
    selector: "generos",
    templateUrl: "./generos.component.html"

})
export class generosComponent{
    public titulo: string;
    public lista: string;

    constructor(){
        this.titulo = "Componente de generos músicales";
        this.lista = "Listado de géneros musicales";
        
    }
}