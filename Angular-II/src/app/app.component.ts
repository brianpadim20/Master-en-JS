import { Component } from '@angular/core';

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
