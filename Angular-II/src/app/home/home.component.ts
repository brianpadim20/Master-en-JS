import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  public identificado:boolean;
  public fecha:any;

  constructor(){
    this.identificado=false;

  }ngOnInit(){
    this.fecha = new Date();
      
  }setIdentificado(){
    this.identificado=true;

  }unsetIdentificado(){
    this.identificado=false;
    
  }

}
