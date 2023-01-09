import { Component } from '@angular/core';
import { configuracion } from './models/configuracion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Curso Angular-II';
  public mostrarVideoJuegos: boolean = true;

  

  ocultarVideojuegos(){
    this.mostrarVideoJuegos=false;

  }mostrarVideojuegos(){
    this.mostrarVideoJuegos= true;

  }
  
}
