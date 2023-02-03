# Curso de Angular
# Instalar Angular:

Para la última versión de Angular se hacen los siguientes pasos: 

### Si ya tiene instalado Angular:

- Abrir consola de comandos (recomendable Cygwin)

- npn uninstall -g @angular/cli, para desinstalar la versión obsoleta

- npm cache verify para borrar la caché

- npm cache clear --force para asegurarse de borrar por completo la caché

- npm install -g @angular/cli para instalar Angular cli (la última versión)

### Para crear un proyecto de Angular:

(Recomendable buscar en google angular cli)

- Importante estar dentro del directorio del proyecto que se está trabajando

- ng new [nombre del proyecto](Generar un nuevo proyecto en una nueva carpeta)
	- Creará una serie de archivos y directorios para una aplicación de angular. Después se conecta vía npm y descarga todas las librerias paquetes y dependecinas que necesita Angular.

	- Una vez descargado todo esto, estaría listo el proyecto de Angular y se podría empezar a programar sobre él.
	
- Para arrancar la app en angular se tira el comando: ng serve (recomendado), también npm start
	-Importante estar dentro del directorio de Angular que se desee ejecutar.

#### Elementos que componen una aplicación de Angular:

Una app de angunar está formada básicamente por componentes, plantillas, decoradores y meta datos, servicios, provider, directivas y módulos

- **Componente**: Es una parte o un elemento que compone la app web de Angular, va a controlar un trozo de pantalla o de la vista de la aplicación, todo lo que se puede ver en pantalla dentro de un proyecto de Angular es controlado y gestionado por este tipo de elementos, la lógica de un componente dentro de una clase de Angular es que da soporte a una vista interactuando con ella através de una serie de propiedades y métodos que hay dentro de Framework.

También se encarga de servir como mediador entre la vista y la lógica de programación que estará en la parte de la clase del componente donde se incluirá el modelo de datos, interacción y lógica que vaya a tener la aplicación. 

En general, un componente es una especie de controlador y toda la aplicación estará formada por pequeñas partes o elementos que serán los componentes.

- **Plantillas**: Son las vistas de los componentes, son ficheros HTML que tienen una sintaxis especial de Angular y trabajan con data binding, directivas y con una serie de elementos y carácterísticas.

- **Decoradores y metadatos**: Con los decoradores se configuran dinámicamente los atributos, los metadatos que va a tener la clase del componente de Angular.

Los metadatos dentro de un decorador en una clase de Angular van a describir una serie de relaciones que van a tener los     componentes o las clases.

- **Servicios**: Clases con un objetivo claro: facilitar la reutilización del código, interactura con un servicio RES de una entidad concreta, son elementos fundamentales dentro de un proyecto de Angular y mediante la inyección de dependencia se va a poder estar usando dentro de unos componentes y la app en general.

A un servicio también se le puede llamar **Proevider**, que son servicios que proveen datos o funcionalidades mediante sus métodos, existen varios providers propios de Angular o también se pueden crear.

- **Directivas**: Son funcionalidades aplicables al DOM y a los elementos HTML que hay en las plantillas de un componente, al final, todo se traduce en una directiva, que es una etiqueta.

Son atributos de HTML, puede servir para controlar que un DIV se muestre o no, o recurrer un array en la vista

# Componentes
#### ¿Qué es un componente?

Un componente no es mas que un trozo de la pantalla de la app.

#### Componentes de Angular

Ir en al directorio src, y al directorio app, aparece por defecto el componente app.component.ts, está formado por una serie de imports que son módulos u objetos que se tienen que importar para poder usarlo.

el from que aparece en el import está guardado en el archivo package.json

lo que aparece con @component es un decorador.

Con selector se puede ver en que etiqueta se estará cargando este componente.
Template url indica cual es la vista del componente, que sería el archivo html que aparece por defecto (app.component.html). Allí es donde está toda la información.

StyleUrls: es para darle el estilo que se desee para esta página

Export class se usa para usar esta clase en otros archivos y se ponen las funcionalidades que tendrá la clase y los valores que uno desee que aparezcan en la aplicación

Para definir el módulo, se usa el archivo app.module.ts; aquí se importan los objetos que se encargar de hacer esto (browserModule y ngmodule), se importa el componente y se usa @ngModule, que es el decorador que permite configurar el módulo, se indican las declarations que sirven para cargar componentes, pipes, directivas, imports que sirve pra cargar modulos de Angular, módulos externos o módulos creados, providers sirve para cargar servicios y bootstrap que es el modulo principal a cargar, dentro de las llaves se puede indicar cual es componente a cargar de primero y por último se exporta el módulo.

## Cómo crear un componente:

Hay varias opciones: Usar consola, definir una carpeta de components y crear allí todos los componentes, otra carpeta de views donde se tengan las plantillas del componente y así sucesivamente y la que se va a usar, es creando una carpeta por componente dentro de la carpeta de app

Pasos:

- Dentro de la carpeta app, crear una carpeta con el nombre del componente; para este ejemplo será la carpeta videojuego

- Dentro de la carpeta creada, crear un nuevo archivo que tendra por nombre: [nombre de la carpeta].component.ts
EJ: videojuego.component.ts (importante poner el .ts porque es la extensión typeScript que se utiliza para definir todos los archivos JS dentro de Angular)

- Dentro de la carpeta creada, crear también la vista: que será: [mismo nombre del componente].component.html, EJ:
videojuego.component.html

- Dentro de la clase componente (archivo.ts)
	- **Importar el componente**: import {component} from '@angular/core' (no preocuparse por el error, con el export se soluciona)
	- **Definir el decorador**: @component({}) para definir un componente **No cerrar con ;**
	- **Definir el selector (dentro de las llaves)**: va dentro de comillas simples, allí se pone el nombre de la etiqueta que se le dará, en este caso videojuego así: selector: 'videoJuego'. para la plantilla no usar ; sino ,
	- **Definir una plantilla**: En el archivo .html del componente crear la plantilla a usar y dentro del componente.ts usar la palbra templateUrl: 'ruta de la plantilla' (si está en el directorio actual se pone 
	./nombre del archivo)
	- **Exportar la clase**: export class [nombre del componente]Component{}

- **Cargar el componente**: Para darle de alta al componente; se debe dar de alta en app.module.ts de la siguiente manera:
	- **Hacer un import del componente creado**: palabra import {nombre del componente} from 'ruta' 
	EJ: import {videoJuegoComponent} from './videojuego/videojuego.component';
	- Cargarlo en las declarations: separar por una coma, poner el nombre dentro del array declarations; vease con videojuego
	- para cargar el componente en la página web se debe usar su selector

### Porpiedades de los componentes
Dentro de la clase del componente.ts (donde está el export) se pueden definir una serie de propiedades públicas
y se puede pasar el valor que se guarde en las propiedades a la vista, lo mas normal es asignarlo en el constructor y mediante doble llave {{}} se puede mostrar en el componente como se ve en el ejemplo de videojuegos, esto se llama interpolación (muestro el valor de una propiedad)

### Generar componentes con la consola

**Siempre** usar la consola del sistema operativo (CMD), escribir ng generate component [nombre]

Para el ejemplo: ng generate component cursos

Crea el componente, lo agrega a declaraciones y queda listo para ser implementado

### Agregar hoja de estilo .CSS a un componente
- Se pueden agregar directamente en el archivo de estilos.css que viene por defecto en la aplicación de Angular, o hacer los siguientes pasos: 
	- En la carpeta assets, crear el archivo styles.css, cargarlo en el idex.html
	- **En caso que no funcione, hacer los siguientes pasos:
		- Abrir el archivo angular.json
		- Buscar donde diga styles, allí agregar "src/assets/styles.css"
		- Cortar la ejecución de compilación, y ejecutarla de nuevo

### Hooks/Eventos ciclo de vida de los componentes (Se trabajó sobre el componente de videojuegos)

- **OnInit()**: Permite usar el método ngOnInit, que es el método que se ejecuta al cargar un componente.

Para el OnInit se usará el componente videojuego y se demostrará como usarlo.

- **DoCheck()**: Se ejecuta cada vez que se produce un cambio en un componente o en una app de Angular, es un método que se estará ejecutando frecuentemente una vez suceda esto

- **OnDestroy**: Sirve para que se ejecute algo antes de eliminar la instancia del componente; es decir, se ejecuta cuando se vaya a eliminar un componente

### Importar y exportar

#### Cómo crear una clase e importarla dentro de otra clase (se puede ver en app.component.ts lo que se trabajó aquí)

- Dentro de la carpeta app, crear       una que se llame models
- En esta carpeta crear un archivo llamado configuracion.ts
- En el archivo crear un objeto Json, antes del nombre poner la palabra reservada export, y allí, poner las características que se requieran para la aplicación
- En app.component.ts importar la variable creada
- Allí mismo crear un constructor e implementar las características de la clase creada 

#### Modelos en Angular (componente zapatos)

Se crea un objeto con el cual tener un molde y crear varios objetos de ese tipo.

Por lo general su nombre es en singular porque representará a un objeto que se usará como molde para crear otros objetos.

Acá se implementa el OnInit, antes de creado, este no estaba

#### Directivas

- **Directiva *ngIf**: Estas directivas se tienen que declarar con un asterísco: *ngIf

Directiva estructural que permite hacer un condicional en la parte de la vista. 

Funciona como un if normal, se pone dentro de la etiqueta que se desea obtener el dato y si cumple la condición mostrará el valor

- **Directiva *ngFor: Directiva estructural que permite recorrer un array creado en el componente.ts para mostrarlo en la página.

Funciona como un for normal, se pone dentro de la etiqueta donde se desea incluír el array recorrido, generalmente se pone en una lista

**IMPORTANTE!!!!!!** poner la función que recorre el for en el archivo.ts dentro del ngOnInit, sino no aparecerá

- **Directiva ngSwitch**: Esta directiva se usa de manera diferente a ngIf y a ngFor, pues esta va en corchetes ([ngSwitch]="propiedad de la clase de componente"); lo que hace esta directiva es que va a evaluar una propiedad en la clase del componente; posteriormente se hace una lista con las condiciones o casos

**Ejemplo en zapatos:** 

< ul [ngSwitch]="color">
	< li *ngSwitchcase="'caso'">< /li> **NOTA** Importante tenerlo entre comillas dobles y dentro de estas unas comillas simples
< /ul>

- **Etiqueta de atributo style**: Sirve para agregar estilos a un fragmento de código html, se declara con corchetes : [style.(atributo que se desee poner, ej background, color, etc] = "condición ? 'atributo en caso que cumpla' : 'atributo en caso que no cumpla'"

Hay que tener cuidado con las aperturas y cierres de las etiquetas.

#### Enlace de datos - data binding en Angular (componente zapatos)

- Primero que todo, se debe importar y cargar el módulo de formularios en Angular
	- Ir a app.module.ts
	- import {{ FormsModule }} from '@angular/forms'; 
	- cargarlo en los imports, que es el array dentro del ngModule que permite cargar módulos internos de Angular, módulos externos creados por uno mismo o módulos externos que se hayan instalado en el proyecto
- Generalmente se trabaja con una etiqueta de imput
- Se trabaja con la directiva [(ngModel)]="variable del componente a trabajar"
Ejemplo: <input type="text" [(ngModel)]="miMarca">
< p >{{miMarca}}< /p > **Nota** Este párrafo es para mostrar lo que se está guardando en el input

- Donde se está mostrando el componente, aparecerá un cuadro de dialogo donde permite escribir un texto y aparece inmediatamente en la página, esto es porque se trabaja a nivel bidireccional, tanto a la clase de componente como en la vista, es decir, que si se muestra ese valor, o si se agrega un valor a la propiedad, se mostrará en el input y en la vista porque se está imprimiendo 

#### Eventos en Angular

##### Evento click (componente zapatos)

Como ejemplo, se va a crear un botón para eliminar una marca del listado de marcas

- Crear la función que se desee realizar con el evento click en el componente.ts
- Agregar el botón o el link donde se le dará el evento de click < button (click)= "nombre de la funcion(parametro (opcional))>nombre del botón < /button >

##### Eventos Blur y KeyUp

- Evento Blur: Se trabajará sobre un input, aquí también se trabaja sobre el componente zapatos
	- En el input que se tiene, de tipo texto, entre paréntesis irá (blur)="método creado en la clase del componente.ts"

- Evento KeyUp: Se trabajará sobre un input, aquí también se trabaja sobre el componente zapatos
	- Este evento se activa cada vez que se levanta una tecla, por ejemplo, capturando la tecla enter sería algo así: (keyup.enter)="método creado en la clase del componente.ts";

#### Directiva ngClass en atributos (Componente Zapatos)

ngClass permite asignarle a un elemento una clase cuando se cumpla una condición

En el componente zapatos se ve un ejemplo en la directiva *ngFor para listar el nombre del zapato y el precio.

Se hace [class.nombre de la clase] y en el archivo .css se agrega el estilo del nombre de la clase que se le dará este estilo.

Otra forma de usarla es: 

[ngClass] = " [array de atributos] " Ejemplo

[ngClass]="['fondoRojo','subrayado']"

#### Agregar estilos .CSS
- En la carpeta assets crear el archivo styles.css, allí agregar los estilos
- Agregar el link de la carpeta en el archivo index.html

### Páginas y rutas en Angular

#### Configuración del Routing

- Asegurarse que en el index.html esté el < base href ="/">, debajo de la etiqueta de title, pues si esto no está puesto, el router no va a funcionar
- crear el fichero app.routing.ts en la carpeta de app, allí irá toda la configuración de rutas en la app de Angular, es decir, que aquí se configuran las nuevas URL de la web
- En app.routing.ts importar los módulos del router
	- import { ModuleWithProviders } from "@angular/core";
	- import { Routes,RouterModule } from '@angular/router';
- Importar los componentes creados para ponerle las rutas
- Crear un array de configuración de las rutas; aquí es donde se crean todas las rutas y se configuran
	- Crear una constante, llamada app routes de tipo routes
		- EJ: const appRoutes: Routes = []
	- Dentro de este array, agregar objetos de tipo JSon
		- Crear una ruta inicial, que es vacía, es la que se carga por default
			- {path: '', component: HomeComponent},
		- Crear las rutas para cada componente dentro del array creado
			- {path: 'home', component: HomeComponent},
			  {path:'zapatos', component: zapatosComponent},
			  {path:'videouegos', component: videoJuegoComponent},
			  {path:'cursos', component: CursosComponent},
			  {path:'**', component:HomeComponent}
	- Exportar el módulo del router
		- export const appRoutingProviders:any[] = []; es el servicio del router, necesita exportarse y luego importarse para que funcionen los servicios de rutas a nivel interno
		- eexport const routing:ModuleWithProviders< any> =RouterModule.forRoot(appRoutes); carga toda la configuración de la ruta y le da de alta en el routing y hará que la configuración del router funcione
	- Importar las rutas en el app.module.ts
		- import { routing, appRoutingProviders } from './app.routing';
	- Cargar los objetos en el @ngModule del app.module.ts
		- El routing, al ser un módulo se tiene que cargar en los imports
		- Providers, al ser un servicio, y si quiero utilizar el router, se carga en providers
	- Una vez hecho todo esto, ya estará compilando correctamente, pero para que todo funcione se agrega una directiva
		- En el app.component.html, en lucar de cargar un componente estático, es decir, de manera fija, se pone la etiqueta < router-outlet>< /router-outlet>, que es la etiqueta del sistema de rutas, y dentro de esta etiqueta, se va a cargar el componente que se le indique a la ruta actual

#### Menú de navegación instantáneo

- En app.component.html, agregar un menú, con una etiqueta < nav>
- Dentro de la etiqueta < nav>, agregar diferentes etiquetas < a> con la directiva [routerLink], y dentro de esta directiva, agregar la ruta a la que se desea ir entre corchetes y comillas individuales así:
	- < a [routerLink]= "['/home']">
	- < a [routerLink]= "['/zapatos']">
- Se puede poner una separación a los links con un &nbsp; entre cada etiqueta < a>

#### Resaltar página actual en el menú de navegación

- Se aplica con una directiva llamada [routerLinkActive]="['active']" al lado de la ruta que se pone en cada etiqueta < a>
- Dentro de las comillas, se les pueden agregar una o varias clases de CSS al elemento del menú
- Dentro de la carpeta assets, en el archivo css

#### Parámetros por las URL

Pasar parámetros por la URL es lo mismo que pasar valores por la URL, para hacer la configuración correcta se debe hacer lo siguiente:

- Abrir el archivo app.routing.ts
- En el componente deseado hacer la siguiente funcionalidad:
	- Por ejemplo en el componente de cursos, agregar un parámetro, por ejemplo nombre
		- {path:'cursos/:nombre/', component: CursosComponent},
	- Si se quiere que un parámetro sea opcional, se crea un nuevo path idéntico al existente con parámetro y se le agrega el parámetro opcional que se desee crear:
		- {path:'cursos/:nombre/', component: CursosComponent}, 
		  {path:'cursos/:nombre/:apellidos', component: CursosComponent},
	- Abrir la clase.ts del componente sobre el cual se pasarán parámetros, en este caso, cursos.component.ts también su vista, es decir, cursos.component.html
	- Si se abre la ruta a la que se le ponen los parámetros, no abrirá porque no existe, entonces si deseo que la ruta exista también, se tiene que crear primero y ya se tendría el parámetro nombre como uno opcional, sino se tendrá que poner un parámetro
	- Para recoger los parámetros se tendrán que cargar varios componentes del router
	- Dentro del archivo.ts del componente que se desee trabajar se importa lo siguiente:
		- import { Router, ActivatedRoute, Params } from '@angular/router';
		- Poner todos esos parámetros en el constructor:
			- constructor(
			  private _route: ActivatedRoute,
			  private _router: Router
			  ){}
		- Si quiero acceder a las propiedades o los parámetros que digan por la URL, en el ngOnInit hacer:
			- ngOnInit(){
				this._route.params.subscribe((params:Params)=>{
				this.nombre=params['nombre'];
				console.log(params);
				console.log(this.nombre);
				})//Recoge el parámetro por la URL

			}
			- si el dato que se quiere recoger es un tipo numérico; se pone un + antes de params
				- this.nombre=+params['followers'];
			- Para mostrar los datos recogidos desde la URL se hace lo siguiente: 
				< h3 *ngIf="nombre">Bienvenido {{nombre}}< /h3>
				< h3 *ngIf="followers">Tus seguidores son: {{followers}}< /h3>

#### Redirecciones Router Navigate

Una redirección es cuando programáticamente se redirige al usuario a otra página de la web

Para las ilustraciones se trabajará sobre el componente de cursos

- En el archivo.html del componente que se desea agregar la ruta, se agrega un evento click con la dirección del componente al cual se desee navegar 
- en el archivo.ts se crea una función y allí agrega un this._router.navigate(['/nombre del componente']); ejemplo:
	- redirigirzapatos(){
    	this._router.navigate(['/zapatos']);
  	  }
- También se puede hacer por medio de peticiones AJAX, por formularios o similares, ejemplo:
	- ngOnInit(){
    	this._route.params.subscribe((params:Params)=>{
			this.nombre=params['nombre'];
			this.followers= +params['followers'];
			console.log(params);
			console.log(this.nombre);
			
			//Ejemplo de redireccionamiento 
			if(this.nombre=="ninguno"){
				this._router.navigate(['/home']);
			}

    })