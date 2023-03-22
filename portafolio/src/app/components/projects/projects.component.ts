import { Component, OnInit } from '@angular/core';
//Importar el modelo
import { Project } from 'src/app/models/project';
//Importar los servicios
import { ProjectService } from 'src/app/Services/project.service';
//Importar la url de la API
import { Global } from 'src/app/Services/global';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  //Agregar el servicio importado en el array de providers
  providers:[ProjectService]
})
export class ProjectsComponent {
  //Propiedad para guardar los proyectos en una lista
  public projects: Project[];
  //Propiedad para tener acceso a la url de la API en el backend
  public url: string;
  constructor(
    private _projectService: ProjectService
  ){
    this.projects=[];
    this.url = Global.url;

  }ngOnInit(){
    /*getProjects se ejecuta en onInit, porque apenas se seleccione este componente debe mostrar la 
    lista de proyetos*/
    this.getProjects();

  }getProjects(){

    /*Se usa el project service; con el servicio creado de get projects y se subscribe al observable
    y recoger la respuesta que devuelve el API*/
    this._projectService.getProjects().subscribe({
      next:(response)=>{
        if(response.projects){
          this.projects=response.projects
        }
      },
      error:(err)=>{console.log(err)}
      
    });

  }

}
