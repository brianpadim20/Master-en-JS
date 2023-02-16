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
    - Version 1.0.0
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

- Crear los middlewares (configuración necesaria):
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

## Como usar el cliente RESTful

#### Métodos HTTP con los que se va a trabajar
- POST: Para guardar nuevos recursos dentro de un API o en el backend
- GET: Consultar detalle de algo, es decir sacar una información
- PUT: Para actualizar
- DELETE: Para borrar recursos de la base de datos y del backend

El cliente RESTful mas conocido y de los mejores se llama postman; para descargarlo solamente se busca en google postman y se busca la opción que vaya a descargas

Para usar postman, una vez descargado:

- click en el símbolo de +
- Puedo copiar la URL que creé, se pega en postman y se puede elegir el método HTTP que se desee
    - Con la ruta de test creada, solamente recibe peticiones por get, se le da enter o click en send y devuelve el formato JSON el resultado de esa petición


## Creación de modelos de la base de datos o entidades del backend

Para este proyecto de portafolio, en la base de datos se creó una colección llamada proyectos; pues ahora se creará una entidad llamada proyecto

- Crear una carpeta nueva llamada models, donde se crearán todos los modelos

- Agregar un archivo.js con el nombre conveniente

- Importar mongoose
    const mongoose = require ('mongoose');

- Definir un esquema de un modelo; para ello se carga el objeto de esquema
    const Schema = mongoose.Schema;

- Crear el esquema de project, el cual es el molde sobre el cual se trabajará para crear nuevos registros en la base de datos; se utiliza el objeto Schema y se le pasa como parámetro un objeto JSON con las propiedades que debe tener un proyecto
    var ProjectSchema = Schema({
        name: String,
        description: String,
        category: String,
        langs: [String],
        year: Number

    })

- exportar el módulo y poder importarlo en otros ficheros, para poder usarlos fuera de este fichero, igualarlo a mongoose.model para coger el esquema y utilizarlo como modelo, a esto se le pasan dos parámetros 'project' (En singular porque mongoose lo que hace es pluralizar y lo pone en minúsculas) y el otro es la variable creada, en este caso, ProjectSchema
    module.exports = mongoose.model('Project', ProjectSchema);

## Modelo vista controlador - MVC

Métodos y rutas que tendrá la aplicación web a nivel de backend

El MVC se encarga de separar la lógica de negocio de la interfaz de usuario.

### Controladores y rutas en node

- Crear una carpeta dentro del backend llamada controller

- Crear un archivo.js con el nombre del controlador, para este caso será project.js

- Quitar las rutas de prueba creadas anteriormente

- Crear una variable llamada controller, dentro de esta variable habrán varios objetos JSON que en su interior contengan una función con los datos req y res necesarios:

    var controller = {
        home: function(req, res){
            return res.status(200).send({
                message: 'Soy home'

            });

        },
        test: function(req, res){
            return res.status(200).send({
                message: 'Soy el método o acción test del controlador del project'
            })
        }

    }

- Exportar el módulo con un module.exports = variable a exportar, en este caso, controller
    module.exports=controller;

- Crear una ruta
    - Crear un fichero de rutas por cada uno de los controladores (crear una nueva carpeta llamada routes)
    - Dentro de esta carpeta crear un fichero con el mismo nombre del controlador.js, fichero configurador de las rutas del controlador en cuestión, en este caso project
    - En este archivo, importar el módulo de express
        var express = require('express');

    - Importar el controlador creado
        var projectController = require('../controllers/project');
    
    - Cargar el servicio de rutas para poder acceder a ellas
        var router=express.Router();
    
    - Crear una ruta dependiendo del método que se necesite, EJEMPLO:
        router.get('/home', projectController.home);//home es el método creado en el controlador project
        router.post('/test', projectController.test);//test es el método creado en el controlador project

    - Exportar el módulo con el método router, así se puede exportar la variable router con toda la configuración de rutas
        module.exports = router;

    - Cargar esta configuración de rutas en el app.js
        - Cargar el archivo de rutas en el apartado que se tiene para él
            var project_routes = require('./routes/project');

        - Cargar las rutas en un middleware (sobre escribir esa ruta) para que la cargue dentro de la app (todas las rutas tendrán por delante un segmento llamado api)

## Método para guardar nuevos documentos en la base de datos

- Importar el modelo en el archivo controllers; project.js
    En la parte inicial del archivo, crear una variable llamada project requiriendo modelo
        var Project = require('../models/project');

- Dentro de la variable controller, agregar un nuevo método llamado saveproject; el cual tendrá una función anónima recibiendo parámetros de request y response

- Dentro de saveProject crear una variable con el mismo nombre (project) igual a new project (crea un objeto de proyecto)
    var project = new Project(); //nuevo objeto de tipo Project

- Probar que haya cargado de manera exitosa mediante un return
    return res.status(200).send({
        message: "Método save project"
    })

    - Crear una ruta (en el archivo de rutas)
        - router.post('/save-project', projectController.saveProject);//Carga el método save project en esta ruta
    
    - Ir a postman, hacer una petición por POST
        http://localhost:3700/api/save-project

- Hacer las acciones:
    - Crear una variable llamada params = req.body

    - Agregar a cada valor del modelo params.valor

        project.name=params.name;
        project.description=params.description;
        project.category=params.category;
        project.langs=params.langs;
        project.year=params.year;

    
    
    - Verificar, agregando estos parametros en postman en la opción body/x-www.form-urlencoded; Postman agrega automáticamente un id

- Guardar este objeto en la base de datos
    - project (objeto que acaba de crear).save()
        - El método save tiene una función de callback dentro que recibe un error o un project stored

## Listar proyectos del portafolio

- En el archivo de controlador crear un método llamado getProject, dicho método recibe una request y una response
    getProject: function(req,res)

- Recoger valor que llega por la url creando una variable llamada projectid de la request, esto igualando a req.params.id, para especificar que busca por el id
    var projectId = req.params.id;

- Posteriormente con la variable asignada al projecto, para este ejemplo, Project, utilizar el método .findByID, pasando como parámetros projectID y una función de callback con dos parámetros: error y project; dentro de la función de callback agregar los casos donde se encuentre un error, donde no se encuentre el proyecto o donde el proyecto cargue con éxito

    Project.findById(projectId,(err, project)=>{
            if (err) return res.status(500).send({message:'Error al devolver los datos'});
            if (!project) return res.status(404).send({message: 'El proyecto no existe'});
            return res.status(200).send({project})

        });
----------------------------------------------------------------------------------------------------------------
**Ej de esta parte del código:**

    getProject: function(req,res){
        var projectId = req.params.id;

        Project.findById(projectId,(err, project)=>{
            if (err) return res.status(500).send({message:'Error al devolver los datos'});
            if (!project) return res.status(404).send({message: 'El proyecto no existe'});
            return res.status(200).send({project})

        }); //Un find con mongoose, simplemente es buscar una cosa de la base de datos

    }
----------------------------------------------------------------------------------------------------------------

- Crear la ruta
    router.get('/project/:id?', projectController.getProject);

## Devolver el listado de proyectos

- En controllers crear un método llamado getprojects, en este método, crear una función que reciba como parámetros una request y una response
    getProjects: function(req,res){}

- Utilizar la variable creada Project, con su funcionalidad find({}) sin pasarle parámetros en las llaves y a su vez también la funcionalidad .exec, exec tiene una función de callback con los siguientes códigos:

    Project.find({}).exec((err, projects)=>{
            if (err) return res.status(500).send({message:'Error al cargar los datos'});
            if (!projects) return res.status(404).send({message: 'No hay proyectos a mostrar'});
            return res.status(200).send({projects});

        });

- Crear la ruta
    router.get('/projects', projectController.getProjects);

- Si se quiere ordenar, en la variable inicial de project, solamente poner Project.find({}).sort('year').exec(()=>{});

**EJEMPLO DEL CÓDIGO**

getProjects: function(req,res){
        Project.find({}).sort('year').exec((err, projects)=>{
            if (err) return res.status(500).send({message:'Error al cargar los datos'});
            if (!projects) return res.status(404).send({message: 'No hay proyectos a mostrar'});
            return res.status(200).send({projects});

        });/*Find lo que hace es sacar todos los documentos que hay dentro de 
        una entidad o colección*/

    }

## Actualizar datos

- Crear un método llamado updateProject, tendrá una función que va a recibir una request y una response
- Se debe recoger un parámetro por la URL para indicarle que objeto se quiere editar
    - Crear una variable llamada projectID = req.params.id para capturar ese valor que lleva por la URL
        var projectID = req.params.id;

    - Crear una variable para actualizar, en este caso, se llama update
        var update = req.body; //objeto completo con los datos actualizados del proyecto
    
    - Usar el modelo Project con el método findbyIdAndUpdate; si le paso un objeto, pues actualiza el documento que tenga en la base de datos con el objeto que se le haya pasado.
        Como parámetro se le pasa la variable anteriormente creada como projectID para que el método sepa que documento de la base de datos tiene que actualizar y luego el objeto update para sustituir los datos que vaya en el objeto por los nuevos, como tercer parámetro se le pasa una función de callback (error y projectUpdated)

        Dentro de la función de callback comprobar lo anterior

- Crear una ruta nueva


**EJEMPLO DEL CÓDIGO**

        updateProject:function(req,res){
        var projectID = req.params.id;
        var update = req.body; //objeto completo con los datos actualizados del proyecto

        Project.findByIdAndUpdate(projectID, update, {new:true} ,(err, projectUpdated)=>{
            if (err) return res.status(500).send({message:'Error al actualizar el proyecto'});
            if (!projectUpdated) return res.status(404).send({message:'No existe el proyecto solicitado'});
            return res.status(200).send({project:projectUpdated});

        });

    }