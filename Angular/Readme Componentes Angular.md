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