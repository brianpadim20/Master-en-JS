# Creación de componentes en Angular:

### Ver la carpeta videojuego de este proyecto los pasos para crear un componente en Angular

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

## Como generar un componente e importarlo de manera automática desde Angular cli

Angular cli a parte de poder generar un proyecto de Angular, también tiene varios comandos para generar código, esto se puede notar revisando la documentación de Angular cli, allí se podrán ver comandos para hacer Scaffolding (Scaffold).

- Scaffold es generar código de manera automática.

**Importante: Generar estos comandos en la consola del sistema operativo, pues en una emulada, como el caso de cywin, puede generar errores o conflictos** 
