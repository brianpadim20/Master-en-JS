import { Component } from "@angular/core";

@Component({
    selector:'zapatos',
    templateUrl: './zapatos.component.html'

})
export class zapatosComponent{
    public titulo: string;

    constructor(){
        this.titulo = "Componente de zapatos";
    }
}