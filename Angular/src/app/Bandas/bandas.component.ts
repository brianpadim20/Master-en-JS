import { Component } from "@angular/core";

@Component({
    selector:'bandas',
    templateUrl: './bandas.component.html'

})
export class bandasComponent{
    public titulo:string;

    constructor(){
        this.titulo = "Componente de bandas";
        console.log("Componente de bandas agregado desde Angular");

    }
}