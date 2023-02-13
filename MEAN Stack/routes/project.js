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

//Exportar la ruta; así se puede usar la variable router, con toda la configuración de rutas fuera de aquí
module.exports = router;