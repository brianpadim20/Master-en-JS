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

# Maquetación de "crear proyecto"

Se va a crear un formulario que permitirá guardar nuevos proyectos en la aplicación

