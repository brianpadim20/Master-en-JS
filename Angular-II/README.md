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

# Componentes de Angular