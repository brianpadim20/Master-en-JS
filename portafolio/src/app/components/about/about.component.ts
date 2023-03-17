import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  public title: string;
  public subtitle: string;
  public email: string;

  constructor (){
    this.title="Brian Patiño";
    this.subtitle="Desarrollador full stack";
    this.email="brianpadim@hotmail.com";

  }

}
