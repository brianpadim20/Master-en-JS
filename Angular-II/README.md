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

## Eventos útiles:

<button (click)>Nombre del botón</button> => (Click) sirve para agregar un evento click, es decir que cuando se haga click en el botón, llame a alguna funcionalidad o componente



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

#### Modelos en Angular (Zapatos.component)

Se crea un objeto con el cual tener un molde y crear varios objetos de ese tipo.

Por lo general su nombre es en singular porque representará a un objeto que se usará como molde para crear otros objetos.

Acá se implementa el OnInit, antes de creado, este no estaba

#### Directivas

- **Directiva *ngIf**: Estas directivas se tienen que declarar con un asterísco: *ngIf

Directiva estructural que permite hacer un condicional en la parte de la vista. 

Funciona como un if normal, se pone dentro de la etiqueta que se desea obtener el dato y si cumple la condición mostrará el valor

- **Directiva *ngFor: Directiva estructural que permite recorrer un array creado en el componente.ts para mostrarlo en la página.

Funciona como un for normal, se pone dentro de la etiqueta donde se desea incluír el array recorrido, generalmente se pone en una lista

- **Directiva ngSwitch**: Esta directiva se usa de manera diferente a ngIf y a ngFor, pues esta va en corchetes ([ngSwitch]="propiedad de la clase de componente"); lo que hace esta directiva es que va a evaluar una propiedad en la clase del componente; posteriormente se hace una lista con las condiciones o casos

**Ejemplo en zapatos:** 

<ul [ngSwitch]="color">
	<li *ngSwitchcase="'caso'"></li> **NOTA** Importante tenerlo entre comillas dobles y dentro de estas unas comillas simples
</ul>

- **Etiqueta de atributo style**: Sirve para agregar estilos a un fragmento de código html, se declara con corchetes : [style.(atributo que se desee poner, ej background, color, etc] = "condición ? 'atributo en caso que cumpla' : 'atributo en caso que no cumpla'"

Hay que tener cuidado con las aperturas y cierres de las etiquetas.