import { Component } from '@angular/core';
import { configuracion } from './models/configuracion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Curso Angular-II';
  
  public config;
  public mostrarVideoJuegos: boolean = true;
  public descripcion: string;

  constructor(){
    this.title=configuracion.titulo;
    this.descripcion = configuracion.descripcion;
    this.config = configuracion; 
  }

  ocultarVideojuegos(){
    this.mostrarVideoJuegos=false;

  }mostrarVideojuegos(){
    this.mostrarVideoJuegos= true;

  }
  
}
