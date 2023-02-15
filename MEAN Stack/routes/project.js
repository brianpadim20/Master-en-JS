'use strict'

//Importar el módulo express, para poder crear las rutas
var express = require('express');

//Importar el controlador de projects
var projectController = require('../controllers/project');

//Cargar el router o servicio de rutas para acceder a ellas
var router=express.Router();

//crear una ruta por get, en este caso será la ruta home
router.get('/home', projectController.home);//home es el método creado en el controlador project
router.post('/test', projectController.test);//test es el método creado en el controlador project
router.post('/save-project', projectController.saveProject);//Carga el método save project en esta ruta
router.get('/project/:id?', projectController.getProject); /*Se le pasa parámetro por la url que sea 
obligatorio (/:id), si se quiere que el parámetro sea opcional, se le pone un signo de iterrogación al 
final (/id?), si queda vacío, se toma como null */
router.get('/projects', projectController.getProjects);//Lista de proyectos de la base de datos
router.put('/project/:id', projectController.updateProject);//Actualizar un proyecto


//Exportar la ruta; así se puede usar la variable router, con toda la configuración de rutas fuera de aquí
module.exports = router;