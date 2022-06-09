## Instalar Angular:

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


