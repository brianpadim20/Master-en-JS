# Portafolio Frontend

Creación de componentes:
Crear los componentes en una carpeta de componentes:
Mediante el cmd de windows (abrir la carpeta del proyecto y en la ruta, escribir cmd) escribir el comando: ng g component [nombre de la carpeta]/[nombre del componente]
Automáticamente creará una carpeta de componentes y el componente creado allí dentro
Para todos los componentes necesarios será necesario escribir [nombre de la carpeta]/[nombre del componente]

Para este proyecto se van a crear los componentes: 
- About
- Contact
- Create
- Error
- Projects

# Fichero de rutas
Ir a la carpeta app, click derecho, crear archivo, nombre app.routing.ts

Configuración de las rutas:

Importar los módulos del router
---
    import { ModuleWithProviders } from "@angular/core"; 
    import { Routes, RouterModule } from "@angular/router";

---

Importar los componentes creados desde app.module.ts:
---
    import { AppComponent } from './app.component';
    import { AboutComponent } from './components/about/about.component';
    import { ContactComponent } from './components/contact/contact.component';
    import { CreateComponent } from './components/create/create.component';
    import { ErrorComponent } from './components/error/error.component';
    import { ProjectsComponent } from './components/projects/projects.component';

---

Definir las rutas mediante una constante, crear un array de rutas con objetos JSON, para este portafolio se usan las siguientes rutas:
---
    const appRoutes: Routes = [ {path:'', component:AboutComponent}, 
        {path:'sobre-mi', component:AboutComponent}, 
        {path:'proyectos', component:ProjectsComponent}, 
        {path:'crear-proyecto', component:CreateComponent}, 
        {path:'contacto', component:ContactComponent}, 
        {path: '**', component:ErrorComponent} 
    ];

---

Exportar la configuración de las rutas
---
    //Exportar el servicio de rutas:
    export const appRoutingProviders: any [] = [];
    //Exportar el routing 
    export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);

---

Importar este fichero en el app.module.ts (debajo del import { ngModule })

---
    import { routing, appRoutingProviders } from './app.routing';

---
Cargar el routing en el apartado de imports de app.module.ts, porque es un módulo
---
    imports: [ 
        BrowserModule, 
        routing 
    ],

    providers: [ 
        appRoutingProviders 
    ],

---

Si intento ingresar a las rutas creadas no va a funcionar, porque no se está usando el router outlet, que es lo que dispara el funcionamiento del router y carga un componente dentro de la página en función de la URL que se había puesto, si pongo una ruta y corresponde a un componente, entonces va a cargar el componente asociado a esa ruta dentro de una etiqueta, para hacerlo seguir los pasos:

- Ir a app.component.html, borrar lo que hay dentro de ella, agregar una etiqueta de título (opcional)
- Crear una lista de links con los links creados
- Dentro del body de la página, agregar la etiqueta router-outlet
---

    <ul>

        <li><a [routerLink]="['/sobre-mi']">Sobre mi</a></li> 
        < li>< a [routerLink]="['/proyectos']">Proyectos</a></li> 
        <li><a [routerLink]="['/crear-proyecto']">Crear proyecto</a></li> 
        <li><a [routerLink]="['/contacto']">Contacto</a></li> 

    </ul>

    <router-outlet></router-outlet> 

---

# Maquetación del sitio web

**Creación de estilos CSS y fuentes**
- **Crear un archivo de estilos en la carpeta assets:**
    - Crear una nueva carpeta llamada css
    - Dentro de esta carpeta crear un fichero llamado styles.css
    - Para que funcione, se debe llevar al archivo Angular.json:
        - Abrir el archivo angular.json
        - Buscar el array de styles
        - Quitar la que se tiene vinculada (la de src), eliminar el fichero existente de styles en "src"
        - Añadir la creada (la que está en assets); con el path: "src/assets/css/styles.css 
Ya está disponible elfichero css en el proyecto

- **Crear la fuente**

    - Ir a la carpeta donde se encuentra el proyecto
    - Buscar la carpeta "SRC"
    - Carpeta "ASSETS", carpeta CSS allí se van a crear las fuentes:
        - Crear una carpeta llamada fonts
        - Ir a la página web https://fonts.google.com 
        - Buscar las fuentes que se ajusten al proyecto web, para este caso fueron Yanone, Titillium y FingerPaint.
        - Descargar las fuentes, buscar las fuentes light de la carpeta que descarga, copiarlas y pegarlas en la carpeta fonts (creada en la carpeta css de assets)
        - Para importarlas en el proyecto, se va al archivo de css y pone el siguiente código por fuente a importar (es decir, si son 3 fuentes, se implementa este código 3 veces, una por fuente):
        ---
            @font-face {
                font-family: "nombre de la fuente";
                src: url("fonts/nombre de la fuente.ttf");

            }

        ---
    
# Maquetación general del sitio web

Estilos generales de la web:

Ir al archivo de estilos, en el apartado separado por comentario de ajustes generales poner los ajustes de padding y margin en 0px en toda la pantalla, esto se hace mediante *{} para controlar margenes interiores y exteriores

En body se puede elegir el font-family, font-size y el color de fondo

---
    *{ /*Controlar los margenes interiores y exteriores de los elementos del proyecto*/ 
        margin: 0px; 
        padding: 0px; 

    }body{ 
        font-family: "YanoneKaffeesatz-Light", Arial, Helvetica; 
        font-size: 20px; 
        background: url("./img/pattern.jpg");/*Imagen a poner de fondo, guardada en la carpeta css/img */
        position: fixed; /*Para que el fondo se quede quieto, y no de la impresión que también se mueve hacia abajo*/ ;

    }

---

**Para darle estilos al header del portafolio:**
- Guardar la ul de app.component.html dentro de una etiqueta <header></header>
- Agregar una etiqueta <section id="contenido"></section>, donde esté <router-outlet></router-outlet>
- Agregar un footer con una descripción Master en JavaScript &copy; (&copy; es el logo de copyright).

---
    <header>
    <ul>
        <li><a [routerLink]="['/sobre-mi']">Sobre mi</a></li> 
        <li><a [routerLink]="['/proyectos']">Proyectos</a></li>
        <li class="logo"><a href="#">BP</a></li> 
        <li><a [routerLink]="['/crear-proyecto']">Crear proyecto</a></li> 
        <li><a [routerLink]="['/contacto']">Contacto</a></li> 
    </ul>
    </header>

    <section id="content">
    <router-outlet></router-outlet> 
    </section>

    <footer>
    Master en JavaScript &copy;
    </footer>

---

- Ir a los estilos y configurar el encabezado (lo que está en la etiqueta header):
    
---
    header{

    /*Para que actúe como un bloque*/
    display: block;

    /*Para que ocupe el ancho de la pantalla*/
    width: 100%;

    /*Altura*/
    height: 90px;

    /*Color de fondo*/ 
    background: rgba(53, 103, 164, 0.8);

    /*Agranda el 100% de la página, y cuando haga scroll hacia abajo, se quedará fijada labarra de navegación en la parte de arriba*/
    position: fixed; 
    
    /*Para que todo sea en mayúscula*/
    text-transform: uppercase; 

    }header ul{
        display: block;/*Para que actúe como bloque*/
        width: 38%;
        height: inherit; /*Heredado del padre*/
        margin: 0px auto;

    }header ul li{
        /*Para que se ponga un elemento al lado del otro*/
        display: inline-block; 
        margin: 0px auto;
        text-align: center;
        line-height: 90px;

    }header a{
        display: block;/*Para que actúe como bloque, no como elemento en línea*/
        padding-right: 20px;/*Para separar cada elemento del otro*/
        padding-left: 20px;
        height: inherit;/*Altura heredada del padre que serían 90px*/
        text-decoration: none;
        color: white;
        transition: all 300ms;/*para que haga una transición cada vez que haga hover en cada elemento */

    }header a:hover{
        background: rgba(0, 0, 0, 0.8);

    }header #logo a:hover{
        background: transparent; /*Para que no haya hoover cuando se seleccione el logo*/
    }

---

**Contenedor principal:**
---
    /*Contenedor principal*/
    #content{
        min-height: 500px;/*Tamaño mínimo de 700px*/
        padding-top: 120px;
        width: 75%;
        margin: 0 auto; /*Para que se centre el elemento*/
        box-shadow: 0px 0px 40px black;/*Sobra de la caja del contenedor*/
        border-left: 1px solid #b7b7b7;
        border-right: 1px solid #b7b7b7;
        background: rgba(255, 255, 255, 0.7);

    }

---

**Logo:**

---
    #logo{
    font-family: FingerPaint-Regular;
    font-size: 30px;

    }#logo a{
        transition: color 500ms, transform 500ms;
    }

    #logo a:hover{
        background: transparent; /*Para que no haya hoover cuando se seleccione el logo*/
        color: black;
        transform: scale(1.50,1.50);/*Escala el tamaño, no lo modifica como tal, aumenta el tamaño y cambia el colo*/

    }

---

# Maquetación de la página "sobre mi" o "about"

Ir al HTML del componente about y se va a modificar junto con el componente.ts

En el componente.ts: 
- importar ngOnInit
- Debajo de la clase de exportación agregar 3 variables de tipo string: title, subtitle, email y darle valores en el constructor

---
    public title: string;
    public subtitle: string;
    public email: string

    constructor(){
        this.title="Brian Patiño";
        this.subtitle="Desarrollador full stack";
        this.email="brianpadim@hotmail.com";

    }

---

En el HTML:
- Agregar un div con el id "title", dentro de este div agregar en h1 y h2 los atributos creados en el componente.ts de title y de subtitle respectivamente

--- 
    <div id="title">
        
        <h1>{{title}}</h1>
        <h2 id="subtitle">{{subtitle}}</h2>
        <p>{{email}}</p>

    </div>

---

- Agregar una etiqueta de tipo article con la clase "about", allí se pondrá un párrafo con la descripción "sobre mi"

---
<article class="about">
    <h2>Sobre mi</h2>
    <p>
        Soy estudiante de ingeniería informática, actualmente estoy en séptimo semestre, con materias de octavo. En total son 8 semestres de materias más prácticas. Cuento con conocimiento en JavaScript, CSS, HTML, Angular, TypeScript, NodeJS y también en sistemas de control de versiones, como lo son Git y GitHub. Así mismo, estoy relacionado con metodologías de desarrollo ágil, y cuento con conocimiento en plataformas como Azure DevOps. También tengo conocimientos en bases de datos SQL y noSQL En el momento estoy en búsqueda de experiencia laboral en el área de la informática, dado que ya tengo experiencia en otras áreas. Me caracterizo por ser una persona responsable y comprometida en mis actividades tanto académicas, como laborales. Me gusta ayudar a mis compañeros en todo lo que sea posible, respetando las ideas de las personas en mi entorno
    </p>    
</article>

---

## Estilos de los elementos para la maquetación de la página "about":
- Ir al archivo styles.css que está en assets
- aplicar los siguientes estilos:

---
    /*Sobre mi*/

    #title{
        width: 70%;
        margin: 0 auto;
        text-align: center;
        margin-bottom: 70px;
        margin-top: 20px;

    }#title h1{
        font-family: FingerPaint-Regular;
        font-size: 60px;
        border-bottom: 1px solid #ccc;
        padding-bottom: 5px;

    }#title h2{
        font-size: 25px;
        color: gray;
        margin-top: 5px;
        margin-bottom: 5px;
        
    }article.about{
        width: 70%;
        margin: 0px auto;
        margin-bottom: 20px;
        font-size: 23px;

    }.about h2{
        border-bottom: 1px solid #ccc;
        padding-bottom: 5px;
        margin-bottom: 5px;

    }.about p{
        padding-top: 20px;
        padding-bottom: 30px;
        text-align: justify;

    }

---

# Componente "crear proyecto"

Se va a crear un formulario que permitirá guardar nuevos proyectos en la aplicación, usando el API que se debe arrancar para hacer peticiones AJAX y hacer una petición por post para guardar un nuevo proyecto en la base de datos

Pasos:

- Abrir mongodb 
- Abrir la carpeta donde está la APIRest (el backend)
    - Poner su ruta en la consola sobre la cual se está trabajando (en este caso, git bash)
    - Ejecutar el backend
    Así se tiene la API funcionando 
- Una vez esté corriendo la API, se procede a programar el Angular:
- Dentro de la carpeta app crear una carpeta para los modelos y otra para los servicios (models y services)
    - Crear el modelos (representan a un objeto o un documento de la base de datos) y será una entidad; se está utilizando la entidad de proyectos... Un modelo representa a un único proyecto en específico:
        - En la carpeta de models, crear un archivo llamado project.ts y aplicar el código:
---
    //Crear la clase de exportación

    export class Project{

    //Definir el modelo
        constructor(
            public _id: string,
            public nombre: string,
            public description: string,
            public category: string,
            public year: number,
            public langs: string,
            public image: string

        ){}

    }

---

- En la carpeta de servicios, crear un archivo de configuración global llamado global.ts, allí se tendrá una configuración que se usará en varios archivos; aplicar el siguiente código:

---
    export var Global = {
        url:'localhost:3700/api/'

    };

---
- Una vez creada la variable global, se procede a crear el servicio, en la carpeta de services, crear un nuevo archivo llamado project.service.ts donde se importarán todos los módulos para crear un servicio, se podrá ver en el siguiente ejemplo de código:

---
    import { Injectable } from '@angular/core';
    import { HttpClient, HttpHeaders } from '@angular/common/http';
    import { Observable } from 'rxjs';
    import { Project } from '../models/project';
    import { Global } from './global';

    @Injectable()

    export class ProjectService{
        //Propiedad para guardar la url de la api
        public url: string;

        constructor(
            private _http:HttpClient //cargo el httpclient como propiedad privada
        ){
            //Valor a la url dado en la variable del archivo global
            this.url = Global.url;

        }testService(){
            return 'Probando el servicio de Angular'
        }

---
Ir al archivo app.module.ts e importar los módulos tanto de http como de los formularios y cargarlo en los imports del mismo archivo
---
//Importación de los módulos http y módulos de formularios (para el componente "create")
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; //2 way data binding y formularios

---

Ya se pueden cerrar los archivos que se tenían abiertos.

## Maquetación de "create"

Lo primero que se debe hacer es importar el modelo y el servicio para poder estar usandolo en create.component.ts y cargar los servicios dentro de la propiedad providers en el decorador "@component"

---
    import { Component, OnInit } from '@angular/core';

    //Importo los modelos creados
    import { Project } from 'src/app/models/project';

    //Importo los servicios creados
    import { ProjectService } from 'src/app/Services/project.service';

    @Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.css'],
    //Cargo los servicios dentro de la propiedad providers en el decorador
    providers:[ProjectService]
    })
    export class CreateComponent {

    }

---

El siguiente paso es crear las propiedades necesarias, como se ve en el código

---
    export class CreateComponent {
    public title: string;
    public project: Project

    constructor(
        private _projectService: ProjectService //propiedad del servicio
    ){
        this.title="Crear yecto";
        this.project = new Project('','','','',2023,'','')
    }

    ngOnInit(){}

    }


---

## Creación del formulario:
- Lo primero es mostrar el título por interpolación (las dobles llaves {{}})
- Meter el formulario dentro de un div contenedor
    - Tener en cuenta que es un formulario de Angular, entonces, se borra action y se pone un nombre con #
    - poner el evento ngsubmit se recoge lo que el formulario reciba
    - Crear un método que se llame onsubmit para ponerlo en el ngsubmit pasando el projectform como parámetro
    - Recordar que en los imputs o textareas se asigna un nombre con #, igualar a ngModel y luego poner  [(ngModel)]=objeto a modificar.variable que se le va a modificar
    - Esta parte se verá acontinuación en el siguiente código:

---
<div class="container">  
    <h2>{{title}}</h2>
    <form #projectForm="ngForm" (ngSubmit)="onSubmit()">
        <p>
            <label for="name">Nombre</label>
            <input type="text" name="name" #name="ngModel"[(ngModel)]="project.name">
        </p>
        <p>
            <label for="description">Descripción</label>
            <textarea name="descritpion" #description="ngModel"[(ngModel)]="project.description"></textarea>
        </p>
        <p>
            <label for="category">Categoría</label>
            <input type="text" name="category" #category="ngModel"[(ngModel)]="project.category">
        </p>
        <p>
            <label for="year">Año de lanzamiento</label>
            <input type="number" name="year" #year="ngModel"[(ngModel)]="project.year">
        </p>
        <p>
            <label for="langs">Lenguajes de programación utilizados</label>
            <input type="text" name="langs" #langs="ngModel"[(ngModel)]="project.langs">
        </p>
        <p>
            <label for="image">Imagen del proyecto</label>
            <input type="file" name="image" placeholder="Subir imagen">
        </p>
        <input type="submit" value="Enviar">
    </form>    
</div>

---

## Estilos del formulario

.container{
    padding: 50px;
    padding-top: 10px;

}.container h2{
    border-bottom: 1px solid #ccc;
    padding-bottom: 10px;
    margin-bottom: 15px;
    display: block;

/*Estilos formulario: Todos los formularios lucirán iguales*/

}form{
    width: 80%;

}form label{
    display: block;
    width: 100%;
    margin-top: 10px;
    margin-bottom: 5px;

}form input[type="text"],
form input[type="number"],
form input[type="email"],
form textarea{
    width: 40%;
    padding: 5px;

}form button,
form input[type="submit"]{
    font-size: 18px;
    padding: 10px;
    display: block;
    margin-top: 15px;
    color: white;
    background: rgba(53, 103, 164, 1);
    border: 1px solid rgba(13, 67, 133, 1);
    cursor: pointer
    
}form button:hover,
form input[type="submit"]:hover{
    background: rgba(53, 103, 164, 0.8);
    border: 1px solid rgba(13, 67, 133, 1);
    cursor: pointer
    
}form input[disabled]{
    opacity: 0.4;
    cursor: not-allowed;

}.formError{
    padding: 3px;
    background: red;
    color: white;
    font-size: 13px;
    margin-left: 5px;

}.message{
    padding: 5px;
    border: 1px solid #eee;
    width: 50%;

}.sucess{
    background: green;
    color: white;

}.message a{
    color: white;

}.filed{
    background: red;
    color: white;

}

## Validación del formulario

En el formulario se le pone required a los campos de:
- Nombre
- Descripción
- Categoría
- Lenguajes de programación

Luego se ponen los mensajes de validación con la etiqueta span; en cada uno de los campos que tiene required, poner lo siguiente: 

---
<span class="formError" *ngIf="campo a validar.touched && !campo a validar.valid">
    El  campo ** es obligatorio
</span>

---
## Validación del formulario, para que permita guardar información en el backend de la base de datos

En los servicios project.service crear un nuevo método que se llame saveProject(project: Project) para guardar nuevos elementos en la base de datos con el siguiente código (irá explicado)

---
saveProject(project:Project): Observable<any>{ //un objeto del tipo Projecto (modelo) devuelve un osbervable tipo any
        //Parametros a enviar (datos del objeto), se necesita que sea un JSON para que la API pueda cogerlo
        let params = JSON.stringify(project);

        //Cabeceras (como se enviará la información), application/json es el formato en que viajará la información
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        //Petición post, para dar de alta a un nuevo dato a nivel de backend
        return this._http.post(this.url+'save-project', params, {headers:headers});

    }

---

En la parte del componente, en la función creada anteriormente (onSubmit), pasar el siguiente código (en comentarios estará explicado que hace cada parte)
---
    onSubmit(){
        console.log(this.project);

        /*_projectService fue importado con los servicios .saveProject es el servicio de guardado que se creó en el paso anterior; this.project es el modelo creado anteriormente que se usará para guardar esta información .subscribe para indicarle que permite recoger lo que devuelva el API Rest y el observable para recoger los resultados*/
        this._projectService.saveProject(this.project).subscribe(
        response=>{
            console.log(response);
            if (response.project){
            this.status="sucess";

            }else{
            this.status="failed"
            }

        },
        error=>{
            console.log(<any>error);

        }
        )
        
    }

---

Siguiendo esos pasos y estos códigos, se va a guardar información en la base de datos

## Subir imagenes de los proyectos

Lo primero que se hará será crear un nuevo servicio en Angular, para crear un método que permita subir archivos.

En la carpeta de services, crear un nuevo archivo que se llame upload.service.ts; en este nuevo archivo aplicar el código acontinuación, en comentarios está explicado cada fragmento.

---
    import { Injectable } from "@angular/core";
    import { Global } from "./global";

    @Injectable()

    export class UploadService{
        public url: string;

        constructor(){
            this.url = Global.url;

        }
        //Permite hacer petición AJAX clásica en la cual adjunta un archivo para subir
        makeFileRequest(url:string, params: Array<string>, files: Array<File>, name: string){
            return new Promise(function(resolve, reject){
                /*Define una petición AJAX para subir archivos, para eso se necesita simular un formulario clásico
                así que se crea la siguiente variable */
                var formData:any = new FormData(); //Permite crear una especie de formulario en un objeto

                var xhr = new XMLHttpRequest;/*xhr es un sinónimo de AJAX y contiene ese objeto XMLHttpRequest,
                que es el clásico objeto de peticiones asíncronas que siempre ha tenido JS */

                //Recorrer el array de archivos que puede estar llegando

                for (var i = 0; i<files.length; i++){
                    formData.append(name, files[i], files[i].name);/*Recorre todos los ficheros que vayan llegando 
                    y adjuntarlos al formulario con el nombre y luego añadir el archivo y recoger su nombre; es decir
                    que adjunta los archivos*/

                }
                //Hacer la petición AJAX cuando haya algún cambio:
                xhr.onreadystatechange = function(){
                    if (xhr.readyState == 4){//==4 son valores que se pasan así y ya
                        if(xhr.status == 200){
                            resolve(JSON.parse(xhr.response));

                        }else{
                            reject(xhr.response);

                        }

                    }

                };
                
                xhr.open('POST', url, true);
                xhr.send(formData);

            });

        }

    }

---

Utilizar este servicio en el create.component.ts

Importar el servicio, cargarlo en los providers y cargar la propiedad en la clase (en el constructor), así el código quedaría similar al guiente:

---
import { Component, OnInit } from '@angular/core';

//Importo los modelos creados
import { Project } from 'src/app/models/project';

//Importo los servicios creados
import { ProjectService } from 'src/app/Services/project.service';
import { UploadService } from 'src/app/Services/upload.service';

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
  public status:string;

  constructor(
    private _projectService: ProjectService, //propiedad del servicio
    private _uploadService: UploadService
  ){
    this.title="Crear proyecto";
    this.project = new Project('','','','',2023,'','');
    this.status="";
  }

  ngOnInit(){}

  onSubmit(){
    console.log(this.project);
    this._projectService.saveProject(this.project).subscribe(
      response=>{
        console.log(response);
        if (response.project){
          this.status="sucess";

        }else{
          this.status="failed"
        }

      },
      error=>{
        console.log(<any>error);

      }
    );
    
  }

}

---

Ya se puede usar el servicio de subida de archivos, ahora toca modificar el formulario, para que en la parte de la imagen se use el evento change, hace que cuando se haga algún cambio en un inputo, lanza otro método que se tenga en el componente.

Crear el método fileChangeEvent en el componente.ts

Crear una propiedad (variable) donde están las variables llamada filesToUpload:Array<File>, en el código acontinuación se ven las modificaciones pertinentes para hacer al código y poder subir las imagenes.

El código del componente finalmentequedará así: 

---
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
                console.log (result)
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

---

# Sección de proyectos

En project service.ts crear el método correspondiente para sacar de la base de datos y consumir de la API todos los proyectos, entonces, se debe sacar un objeto JSON con todos los objetos de la base de datos, esto se verá en el código a continuación

---
    erProjects():Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.get(this.url+'projects', {headers:headers});

    }

---

Luego ir al componente Projects.ts e importar el servicio, el modelo, etc y cargar el servicio en el array de providers del componente y en el constructor; lo demás se verá explicado en el código acontinuación:

---
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

---

## Implementación de imagenes en las listas de proyectos y maquetación CSS

Para implementar la imagen solo se pone la etiqueta img, como parámetros se pasa la URL que se tiene en el componente.ts y un *ngIf para que se muestre solo si existe una imagen

---
<div class="container">
    <h2>Proyectos</h2>
    <ul>
        <li *ngFor="let project of projects" class = "project">
            <img src="{{url+'get-image/'+project.image}}" *ngIf="project.image">
            <!--En src utilizar la URL que hay en el componente-->
            <h3>{{project.name}}</h3>
            <p>{{project.langs}}</p>
        </li>
    </ul>
</div>

---

Los estilos quedan de la siguiente manera: para que queden en cuadrícula y con líneas de a 3 proyectos:

---
    .project{
    list-style-type: none;
    display: block;
    float: left;
    width: 26%;
    text-align: center;
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 30px;

    /*Máscara para la imagen; recorta lo que sobresalga de el*/
    }.project.image{
        width: 100%;
        height: 120px;
        overflow: hidden;

    }.project img {
        width: 80%;

    }

---