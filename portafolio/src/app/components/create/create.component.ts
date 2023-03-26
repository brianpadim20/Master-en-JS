import { Component, OnInit } from '@angular/core';

//Importo los modelos creados
import { Project } from 'src/app/models/project';

//Importo los servicios creados
import { ProjectService } from 'src/app/Services/project.service';
import { UploadService } from 'src/app/Services/upload.service';

//Importar la URL desde el archivo global para subir imagenes
import { Global } from 'src/app/Services/global';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  //Cargo los servicios dentro de la propiedad providers en el decorador
  providers:[ProjectService, UploadService]
})
export class CreateComponent {
  public title: string;
  public project: Project;
  public save_project:any;
  public status:string;
  public filesToUpload:Array<File>

  constructor(
    private _projectService: ProjectService, //propiedad del servicio
    private _uploadService: UploadService
  ){
    this.title="Crear proyecto";
    this.project = new Project('','','','',2023,'','');
    this.status="";
    this.filesToUpload=[];
    
  }

  ngOnInit(){}

  onSubmit(){
    //Guardar los datos básicos
    console.log(this.project);
    this._projectService.saveProject(this.project).subscribe(
      response=>{
        console.log(response);
        if (response.project){
          

          //Subir la imagen:
          
          /*Se le pasa como parámetros: la url de la API, el complemento de la URL de la api para subir imagen,
          el id del projecto (que aparece en la response de cuando se guarda), elemento opcional, el archivo
          a cargar llamando al método files to upload, y finalmente el método llamando imagen del la API tiene
          un nombre en el filePath, poner ese nombre, en este caso es image*/

          this. _uploadService.makeFileRequest(Global.url+"upload-image/"+
          response.project._id, [], this.filesToUpload, 'image').then((result:any)=>{
            this.status="sucess";
            this.save_project = result.project;
          });

        }else{
          this.status="failed"
        }

      },
      error=>{
        console.log(<any>error);

      }
    );
    
  }fileChangeEvent(fileInput:any){
    console.log(fileInput);
    this.filesToUpload = <Array<File>>fileInput.target.files;

  }

}
