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

# Componentes de Angular

Es una parte o un elemento que compone la app web de angular, al final controlará un trozo de pantalla o de la vista de la app.

Todo lo que se puede ver es gestionado por este tipo de elementos, da soporte a una vista interactuando con ella.

También es mediador entre la vista y la lógica de la app.

En resumidas cuentas, es un controlador de la aplicación y toda la app estará formada por pequeñas partes o elementos que serán los componentes y harán una cosa específica.

# Plantillas en Angular

Vistas de los componentes (de la app) fichero html que tiene sintaxis especial de angular, y trabaja con el data building, directivas y con una serie de elementos y caracterísitcas que se verán a lo largo del curso

# Decoradores y meta datos

## Decoradores

Permiten controlar dinámicamente los atributos que va a tener la clase del componente de Angular, e incluso la clase de cualquier otro tipo dentro del framework.

Describirán una serie de relaciones o características que tendrá el componente o la clase.

# Servicios

Clases con un objetivo claro, facilita reutilización del código, interactúa con un servicio RES de una entidad concreta.

Elemento fundamental dentro de un proyecto de Angular.

También se llama provider.

Proveen datos o funcionalidades mediante sus métodos, existen muchos de estos propios en Angular o se pueden crear también

## Directivas:

Funcionalidades aplicables al DOM y a los elementos HTML que hay en las plantillas de un componente. Al final todo se traduce en una directiva.

Un componente se puede mostrar en una plantilla o se puede hacer visible mediante una directiva, que es una etiqueta o un atributo. También son atributos de HTML

### EJ: 
Una directiva puede controlar que un div se muestre o no, o recorrer un array en la vista.

También puede servir para darle un estilo u otro a un elemento del HTML con la directiva del Gclase o Gstyle.




# Creación de componentes en Angular:

**Ver la carpeta videojuego de este proyecto los pasos para crear un componente en Angular**

- Primero ir al directorio de src, y luego de app

- Por defecto se ejectura el componente app.components.ts

- La aplicación sobre la cual se trabajará es app.components.html

- Las librerías se importarán desde app.components.ts

- Cuando se vaya a agregar un componente, se usa el decorador @components para indicar que es un
componente

- Se define la clase con un export class, con us propiedades y componentes a usar.

Un componente está formado por una serie de imports o módulos que se deben importar para poder
usarlo, se importa con la palabra reservada import

import { nombre del modulo } from @paquete en el que está guardado en el package.json

- Para que el componente funcione, se tiene un modulo (app.module.ts)

## ¿Cómo crear un componente?

Para crear un componente hay varias opciones: usando consola, definir una carpeta de componentes
o tener una carpeta de componentes.

- Para el caso de este ejercicio, se crea una carpeta (videojuego); dentro de esta carpeta, se 
agrega un archivo llamado videoJuego.component.ts, importante definir el .ts como extensión, porque
esa es la extensión TypeScript, que es la que se utiliza para definir todos los archivos de JS
dentro de Angular.

- También se debe crear la vista: Nuevo archivo (videojuego.component.html): Las vitas deben ser 
.html

## ¿Cómo cargar el componente nuevo en el proyecto de Angular?
- Para que el componente nuevo sea agregado en la app que se está creando, se debe cargar en el 
archivo app.module.ts; mediante la siguiente estructura
   - import { nombre del componente } from 'ruta donde se tenga guardado el componente creado';
    Se cierra con punto y coma (;), el .ts no es necesario ponerlo, pues lo detecta automáticamente
    el framework
    - Luego se debe cargar dentro de la red de declarations, esto solamente poniendo coma(,)
    en el primer término de las declarations, luego enter, y pone el nombre que se le dio al 
    componente 

## Para cargar el componente en el programa:

- Abrir apps.components.html

- usar el selector (etiqueta), en el ejemplo creado, es la etiqeta <videojuego>, cerrando esta misma
etiqueta

# Recomendado: 
**Como generar un componente e importarlo de manera automática desde Angular cli**

Angular cli a parte de poder generar un proyecto de Angular, también tiene varios comandos para generar código, esto se puede notar revisando la documentación de Angular cli, allí se podrán ver comandos para hacer Scaffolding (Scaffold).
    - Scaffold es generar código de manera automática.

**Importante: Generar estos comandos en la consola del sistema operativo, pues en una emulada, como el caso de cygwin, puede generar errores o conflictos** 

- El comando para generar un nuevo componente desde el cmd es: ng generate component [nombre del componente]

Automáticamente genera todo el código, fichero, clase y también una hoja de estilo CSS para ese componente en específico y, a parte actualiza del app module.ts añadiendo el import de ese componente y lo agrega a declarations para tenerlo automáticamente disponible

## Hooks o eventos del ciclo de vida de un componente

Los hooks son eventos que se ejecutan en un momento dado del ciclo de vida de los componentes, son eventos que se ejecutan en un momento dado del ciclo de vida de un componente, es decir, son eventos que se van a lanzar dependiendo del estado en el que esté el componente. Por ejemplo cuando se inicie, cuando haya algún cambio etc.

Uno de los hooks mas más importante es el OnInit(). Esta es una interfaz, se ejecuta para cargar un componente.

**De nuevo se estudiará en el componente de videojuegos para saber como funcionan estos hooks.**

***Ejemplos de hooks en Angular:***

- **OnInit():** Se ejecutará cuando se cargue el componente

- **DoCheck():** Este método se ejecuta cada vez que se produce algún cambio en el componente o en la app de Angular, se estará ejecutando frecuentemente, cada vez que suceda algo de esto.
    - Necesita que se implemente el método ngDoCheck

- **OnDestroy():** Este hook sirve para que se ejecute algo antes de eliminar la instancia de un componente
    - Se ejecutará solamente cuando vaya a eliminar un componente

## Importar y exportar clases y modelos

**Para mirar como importar y exportar, se trabajará con el componente de Zapatos de este repositorio**

Aquí se crea una clase y se importará dentro de otra clase y también se creará un modelo de datos

**Modelo de datos:** es una clase con una serie de propiedades que representan una entidad.(Zapatos)

**PASOS:** 
- Crear una nueva carpeta dentro de app que se llame models, dentro de esta carpeta, se trabajarán con los modelos. Aquí se puede crear un fichero y guardarlo.

- En este fichero (carpeta) se puede crear un archivo.ts en el cual se agregue un objeto JSON.

Para usar la variable y el objeto de configuración en el resto de archivos de la app web:

   - Se puede exportar una variable, una clase o cualquier elemento de TS para usarlo en otro archivo. Esto simplemente poniendo la palabra export antes de la declaración de la variable **vease carpeta models, archivo configuracion.ts**
        - Para usarlo en cualquier otro archivo, abrir app.components.ts y en la cabecera del código poner el import. 
        - para este ejempo: import { configuracion } from './models/configuracion' 
        Al ser un objeto, puedo usar las propiedas que se necesiten.
        - en app.components.ts, crear un constructor de la clase que se acaba de crear, así se podrá modificar la información que se desee con los atributos del objeto creado
        - Para usar todos los elementos que se están exportando desde models, se puede crear un objeto en app.components.ts un objeto cuyo valor sea igual al objeto JSON que se acaba de crear; para este ejemplo: public config; (objeto creado) y en el constructor: this.config = configuracion;

## Modelos de datos

Cuando se tiene un componente, para ejemplo se trabaja con el componente de Zapatos, lo normal es que se trabaje con una entidad de tipo zapato, que sea una clase que tenga varias propiedades que sean los datos que va a tener cada uno de los objetos de Zapato.

Un modelo de una entidad, puede tener las propiedades del objeto de la entidad con la que se trabaja.

**Para crear el modelo de datos:**

- Crear un objeto que sea una estructura básica con todas las propiedades que va a tener cada uno de los objetos de ese tipo de entidad concreta de zapato. Esto con el fin de usarlo como molde para crear nuevos objetos y estar trabajando de manera correcta con estos objetos.

- Dentro de la carpeta models crear un nuevo archivo .ts (para este ejemplo: zapato.ts). Lo normal es que cuando se crea un modelo, tenga un nombre en singular, porque ese modelo va a representar a un solo objeto, no a muchos objetos.

- Crear una clase para la entidad de zapato

    - export para exportar la clase y poder usarla e importarla en otros archivos del proyecto

**ver el ejemplo en models/Zapato.ts**

Una vez se tenga el modelo creado, se usará dentro de una clase de un componente

## Directivas estructurales

**¿Qué es una directiva estructural?**

Es una funcional que se va a tener en las vistas o en las plantillas. Por ejemplo una directiva sería la etiqueta de un componente, ya que en el html se crea un nuevo elemento que es ese componente, y esto tiene una etiqueta, con lo cual esto es una directiva, también hay directivas para hacer estructuras de control, condicionales y bucles, condiciones con cierto atributo en las etiquetas, para hacer eventos, para data binding, simplemente son atributos o nuevas etiquetas que se tienen en la parte de la vista y en html.

**Directiva condicional: ngIf:** Permite hacer un condicional en la parte de la vista, si cumple una condición específica, entonces que haga ciertas instrucciones que se le de, vease el ejemplo en zapatos.component.html.

**Directiva para recorrer: ngFor:** Sirve para recorrer un array y mostrarlo en la vista. También puede acceder a las propiedades del objeto de interés. Vease ejemplo del componente zapatos

**Directiva switch: ngSwitch:** Es como el switch que siempre se ha trabajado. También se trabajará con el componente de zapatos.

## Enlace de datos (two way data binding) en Angular

Para explicar este tema se trabajará agregando marcas en el componente de Zapatos.

Para poder usar el two way data binding y las directivas que se usarán como lo son el ng model se hace lo siguiente: 

- Importar el módulo de formularios en Angular en app.module.ts
    - Para hacer esto, primero importar: **import { FormsModule } from '@angular/forms';**
    - En el apartado que dice imports, que es el array dentro del ngModule, que permite cargar módulos internos de Angular, módulos externos creados propios, o módulos externos que se hayan instalado en el proyecto. Para este caso:
        imports: [
        BrowserModule,
        AppRoutingModule
        **FormsModule**
        ],
       

- crear una etiqueta de tipo input, poner el atributo [(ngModel)], importante usar el corchete y las llaves para este atributo. Este atributo es una directiva que con el two way data binding, permitirá modificar una propiedad que se tendrá en el modelo de datos, que en este caso es la clase del componente, permitirá modificar una propiedad que se tenga en una clase de una manera instantánea y reactiva, y que los cambios se vean reflejados de manera automática tanto en la vista como en la parte de los datos en la clase del componente. 

    - En este atributo, se puede poner cualquiera de los elementos que componen el objeto sobre el cual se está trabajando. por ejemplo: <input type "text"[(ngmodel)]="miMarca"/>

# Eventos
## Evento click

Es simplemente cuando se crea un botón o algún otro elemento en el que se pueda interactuar con el mouse, por ejemplo <button (click)= "Evento a hacer cuando haga click">Nombre para el boton </button>

## Evento blur

Es un evento que dice cuando se sale de un campo de input.

## Evento Keyup

Cada vez que se levanta una tecla este evento va a capturarla y si está asociada a algún evento, este se ejecutará automáticamente.

Ejemplo: <input type="text"[(ngModel)]="miMarca" (keyup.enter)="mostrarPalabra()"/> **Ejemplo tomando del componente Zapatos**

# Directiva ngClass

Es otra directiva y, atributo también, que permite asignar a un elemento una clase cuando se cumpla una condición.

Para esto, se toma como ejemplo el listado de productos.

Hay dos formas de usarlo:
    - **En forma de atributo:** usando class. en cualquier atributo (etiqueta) de html; se le asignará una clase a dicho atributo si cumple una condición específica o no (vease en zapatos, la etqieuta strong, class.altoPrecio como ejemplo), y se podrá modificar a conveniencia usando CSS.
    - **Directiva ngClass:** El atributo ngClass para poder hacer varias condiciones y poder poner varias clases de un golpe si se cumple una condición. **SIEMPRE SE UTILIZA CON LOS CORCHETES**... Esta directiva se puede usar creando objetos tipo JSON, como se ve en el ejemplo con ngClass de Zapatos en zapatos.component.html

# Páginas y rutas en Angular

## Counfigurar el routing en Angular

Con esto se puede hacer que un componente no sea solamente un trozo de la página que haga una funcionalidad pequeña, sino que se puede hacer que un componente sea una página de la web.

Para configurar el sistema de rutas de Angular
- Asegurarse que en el index.html se tenga la etiqueta <base href="/"> ya que si no se tiene puesto, el router no va a funcionar, así que si no existe esta etiqueta, hay que agregarla.

- Crear el fichero app routing en la carpeta de app (abrir la carpeta app, crear el fichero app.routing.ts), ya que dentro de este archivo va a ir toda la configuración de rutas de la app de Angular, aquí se configura el router y, a parte se le dará de alta a las nuevas rutas (URL) que se vaya teniendo la aplicación.

    - Para configurar este fichero se hace lo siguiente (tal cual se ve en app.routing.ts):
        - Importar los módulos del router de Angular 
        - Importar módulos de rutas y clases 
        - Importar los componentes
        - Crear un array de configuración de las rutas (Aquí es donde se le da de alta a las nuevas rutas y donde se van a configurar)
            - Dentro del array se crearán objetos JSON, y dentro de estos objetos se indica el path y el component
        - Exportar el módulo
        - Importar esta configuración en app.module.ts (import { routing, appRoutingProviders } from './app.routing';)
            - El routing, como es un módulo, se debe cargar en los imports
            - El appRoutingProviders se carga en el array de providers.

Para que toda esta configuración funcione, se debe crear una etiqueta en el app.component.html, la cual es <router-outlet></router-outlet>