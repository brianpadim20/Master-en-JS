import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
import { Component } from '@angular/core';
import { configuracion } from './Models/Configuracion'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';
  public descripcion: String;
  public mostrar_videojuegos: boolean = true;
  public config;

  constructor(){
    this.title = configuracion.titulo;
    this.descripcion = configuracion.descripcion;
    this.config=configuracion;
    this.mostrar_Videojuegos;
  }

  ocultar_videojuegos(){
    this.mostrar_videojuegos=false;
  }mostrar_Videojuegos(){
    this.mostrar_videojuegos=true;
  }
}
