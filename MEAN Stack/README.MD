# MEAN Stack

## Mongo DB:

Sistema gestor de bases de datos No SQL líder en el mercado

## SQL vs No SQL

- **SQL**: 
    - Relacionales: Hay un conjunto de tablas, de capsulas de información, la cual se relaciona mediante índices
    - Tablas: La información se guarda en una tabla de una manera ordenada y de un sistema claro
    - Esquema
    - Guarda información de manera separada y luego se relaciona de alguna forma

- **NoSQL**: 
    - No relacionales: No tiene por qué existir ningún tipo de relación entre una colección y otra, aunque se puede simular este funcionamiento usando código nodeJs o mongus
    - JavaScript 
    - Orientada a documentos (Json, Bson): No se tienen tablas, se tienen colecciones de documentos (objetos JSON) pero en NoSQL se tienen objetos BSON: JSON binarios
    - Sencillez
    - Velocidad: Es muy rápida la velocidad y el rendimiento a la hora de trabajar con grandes cantidades de datos
    - Esquema libre: En cada uno de los documentos, no hay por qué tener la misma cantidad de campos o de columnas como una tabla SQL

    En una base de datos noSQL también se conoce como colección en lugar de tablas, en vez de filas tiene documentos y en vez de columnas tiene campos, en vez de registros tiene datos de documentos 

## Instalar Mongo DB

- Buscar en Google Mongodb y entrar en su página oficial que es: https://www.mongodb.com/
- Click en productos
- Por defecto aparece en comunity server
- Click en download
- Lanzar el ejecutable
- Aceptar el acuerdo de licencia
- En setup type, seleccionar complete
- En service configuration, dejarlo como default
- Click next
- Click next
- Click en install
- Crear en el directorio de disco local C una carpeta llamada data
- Dentro de la carpeta data crear otra carpeta llamada db; aquí se almacenarán las bases de datos y configuraciones de mongo
- Ir a archivos de programa
- Mongo db
- Acceder a la carpeta donde están los ejecutables (bin)
- Ejecutar mongod.exe; este programa es el que se debe tener en segundo plano siempre para poder estar trabajando con mongo
- Para ejecutar consulta se ejecuta mongo.exe
- Instalar mongo 3t

# Nodejs

## Aplicación de consola con node

Se crea un archivo.js
En la consola si se quiere verificar si se tiene instalado node, escribir node -v
    **Nota:** En caso de no tener instalado nodejs; se googlea nodejs; desde la página oficial se descarga y se instala
Para ejecutar el comando que se hizo por consola; se lanza el comando y node + nombre del archivo y esto mostrará lo que se tenga en el archivo

Con esto se puede hacer cualquier tipo de peticiones, incluso peticiones AJAX

## Cómo hacer una calculadora:

Simplemente se recogen los parámetros que llegan por consola; para ello:
- crear una variable parámetros = process.argv.slice(2);

Dentro del paréntesis se pone slice(2) para que no devuelva el primer índice que es el primer parámetro del comando que es la ruta del archivo completa, pues eso no interesa

Ahora si uno por consola pone como en este caso node calculadora.js 1 2 3; devolverá un array con los elementos agregados como parámetros, en este caso ['1', '2', '3'];
    Ejemplo: 

    node claculadora.js 1 2 3
- Entonces, como se requieren varios parámetros; el primer número es así:
    - Se crea la variable
    - Se iguala a parseFloat, para convertir el string a float
    - se recoge de params el índice 0 (que sería el primer número) y luego el número 2 que será el índice número 1
- Mostrar todas las operaciones con estos números
    - Crear una variable llamada plantilla, y allí, crear una plantilla de JS con las comillas invertidas (alt+96)
    - Agregar las operaciones a aplicar en la plantilla, es este caso, suma, resta, multiplicación y división. Teniendo en cuenta que la operación se pone así: ${v1 operación v2}
    Ejemplo: 

        var plantilla = `
        La suma es: ${a+b}
        La resta es: ${a-b}
        La multiplicación es: ${a*b}
        La división es: ${a/b}
        `;

# Creación de backend o API Rest

Servicio o programa en el backend que permite recibir peticiones http sea por get, por post, put o delete, por diferentes métodos que afecta al protocolo http, interactúa con una base de datos y devuelve un resultado en formato JSON

Pasos para crear:

- Ir a la consola sobre la cual se esté trabajando y lanzar el comando npm init; para iniciar un proyecto de nodejs y crear el fichero package.json, donde va la configuración del proyecto, las dependencias del proyecto etc
    - Pide el nombre del proyecto
    - Version 1
    - Descripción: Agregar una descripción
    - Entry point: punto de inicio del programa; se llamará index.js
    - Test command: nada, solo se le da enter
    - Git Repository nada, se le da enter
    - KeyWords nada, solo se le da enter
    - Autor: Poner el nombre
    - Licencia: MIT; luego yes
Con esos pasos queda el proyecto nodejs creado

## Dependencias

Instalar paquetes necesarios para desarrollar el backend con js; la instalación creará una carpeta llamada node_modules que es donde instalará todas las dependencias, además, en package.json agregará una nueva línea llamada dependencies, con todas estas dependencias

- Abrir la consola que se utilice
- Ir a la carpeta del proyecto y lanzar los siguientes comandos:
    - **npm install express --save** (--save lo que hace es guardar esa dependencia en el proyecto actual, en este caso en el proyecto del backen que se va a hacer) (Framework para trabajar con el protocolo HTTP; permite definir rutas, tener un sistema de rutas, recibir peticiones HTTP, crear acciones, crear métodos y demás cosas fundamentales en cualquier desarollo web)
    - **npm install body-parser --save** (Sirve para convertir las peticiones que se hacen al backend a un objeto JSON usable por JavaScript mediante un post)
    - **npm install connect-multiparty --save** (Permite subir archivos al backend y poder trabajar con el protocolo file, puede recoger ficheros y guardarlo en una carpeta del servidor)
    - **npm install mongoose --save** (Es un ORM para trabajar con mongodb, se tiene uns serie de métodos que facilitan a la hora de trabajar con mongodb, permite crear modelos, entidades, permite hacer y trabajar con métodos que ya vienen hechos y son fáciles de usar y están documentados)
    - **npm install nodemon --save-dev** save-dev todo junto (dev indica que es una dependencia que solo va a funcionar en desarrollo, es decir que cuando se suba a un servidor, esta dependencia no tendrá que tenerse en cuenta) (Cuando se ejecute un servidor de nodejs, cada que se haga un cambio en el código, automáticamente se refresque y se vuelva a reiniciar el servidor, para no tener que hacerse manualmente)

## Alistar todo para crear el backend

- Crear el archivo index.js: es el fichero donde se va a configurar el proyecto de nodejs, la parte principal, la creación del servidor, la conexión a la base de datos, y sobre este archivo se estarán importando otros archivos

- Configurar un script en package.json
    - En el objeto JSON llamado "scripts", agregar uno llamado "start":"nodemon index.js"

## Creación de la base de datos

Utilizar robomongo (studio 3t); pasos para crear la base de datos:

- Abrir mongodb compass
- Donde dice databases dar click en el símbolo de más (+)
- Agregar el nombre de la base de datos y de la primera colección (tabla)
- Si se le quieren agregar datos, click en add data, insert document y agregar la información en un objeto JSON (arrojará automáticamente un id con la información agregada)
    EJEMPLO:
        {
            "name": "Blog",
            "description": "Blog personal",
            "category": "Informática",
            "langs": [
                "PHP",
                "MySQL",
                "CSS"
            ],
            "year": 2023.0
        }
- Si se quiere ver la información en formato JSON, se le da click en el símbolo "{}"

## Conectar mongodb con nodejs y con el proyecto

- Abrir el archivo index.js, activar el modo estricto ('use strict')
- Crear una variable que se llame mongoose; dentro de esta se cargará el módulo mongoose
    var mongoose = requiere('mongoose');
- Para la conexión a la base de datos, se debe usar el código mongoose.promise, indicándole que esto es una promesa y se iguala a global.promise
    mongoose.promise = global.promise;
- Ahora se hace la conexión a la base de datos
    - mongoose.connect('url de la base de datos');
        - La url de una base de datos es: 'mongodb://127.0.0.1:puerto de mongo db (por defecto es 27017)/nombre de la base de datos
        - Al ser una promesa, se puede usar el método .then() para comprobar si sí conectó a la base de datos
        - En caso que haya un error, se puede capturar también

        **EJEMPLO:**
            mongoose.connect('mongodb://127.0.0.1:27017/projects', {useNewUrlParser: true, useUnifiedTopology:true})
            .then(()=>{
                console.log("Conexión a la base de datos establecida exitosamente...");
            })
            .catch(err=>console.log(err));
    
- Para ejecutar el script y ver si nodejs conecta a mongodb, se usa por consola el comando npm start (dentro de la carpeta del backend)

## Creación de servidor con nodejs y express

Esto será el motor de la aplicación a nivel de backend porque express permitirá tener un sistema de rutas y recibir peticiones http y trabajar con el protocolo http de manera sencilla

pasos:

- crear un archivo llamado app.js, donde se guardará toda la configuración de express y de las peticiones body parcell

- Crear una variable para express y otra para body parser:
    var express = require('express');
    var bodyParser = require('body-parser');

- Crear los middlewares:
    - app.use(bodyParser.urlencoded({extended:false})); //configuración necesaria para bodyParser
    - app.use(bodyParser.json());//cualquier tipo de petición se convierte a JSON

- Exportar el módulo:
    module.exports = app;

- Ir al index.js, crear una variable que se llame app, donde se carga el archivo app.js, indicando la ruta donde está
    var app = require('./app');

- Crear una variable llamada port, donde se le indica el puerto del servidor, para este ejemplo se usa el 3700

- Dentro de la conexión a la base de datos (en el then), allí crear el servidor
    - Usar el objeto app con el método listen
    - Si se lanza el backend con npm start, todo debe funcionar correctamente
        - Agregar una ruta de pruebas
            - ir a app.js
            - En el apartado de rutas: 
                app.get('/',(req, res)=>{
                    res.status(200).send(
                        "< h1>Página de inicio< /h1>"
                    )//el (200 sería una respuesta exitosa por parte del servidor)
                });

                app.get('/test',(req, res)=>{
                    res.status(200).send({
                        message:"Hola mundo desde mi API de NodeJS"
                    })
                });

