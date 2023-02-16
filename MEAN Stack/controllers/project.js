'use strict'

//importar el modelo projecs
var Project = require('../models/project');

/**
 * la función recibe una request y una response (req, res), req es para recibir los datos que
 * se envíen por post y res es para retornar una respuestastatus 200 (bien recibido) enviando 
 * un mensaje
 */

var controller = {
    home: function(req, res){
        return res.status(200).send({
            message: 'Soy home'

        });

    },
    test: function(req, res){
        return res.status(200).send({
            message: 'Soy el método o acción test del controlador del project'
            
        });
    },
    
    //Guardar una nueva colección en la base de datos
    saveProject: function(req, res){
        var project = new Project(); //nuevo objeto de tipo Project

        var params = req.body;

        project.name=params.name;
        project.description=params.description;
        project.category=params.category;
        project.langs=params.langs;
        project.year=params.year;
        project.image=null; // Se añade mas tarde

        project.save((err, projectStored)=>{
            //Si arroja un error:
            if (err) return res.status(500).send({message:'Error al guardar datos'});/**status 500 error */

            //Si no se guarda el project stored
            if(!projectStored) return res.status(404).send({message:'No se ha podido guardar el proyecto'});
                    //404 error al guardar
        
            //En caso de que guarde bien
            return res.status(200).send({project:projectStored});/**Si no se pone la propiedad project
            y solamente se pasa projectStored, crearía una propiedad llamada projectSotred, esto guarda
            en la base de datos el nuevo proyecto */
            
        });
        

    },

    //Obtener un proyecto de la base de datos
    getProject: function(req,res){
        var projectId = req.params.id;

        //-----------------------------------------------------
        //Si se pone en la dirección opcional se hace este paso: 

        if (projectId==null) return res.status(404).send({message: 'El proyecto no existe'});

        //-----------------------------------------------------
        
        Project.findById(projectId,(err, project)=>{
            if (err) return res.status(500).send({message:'Error al devolver los datos'});
            if (!project) return res.status(404).send({message: 'El proyecto no existe'});
            return res.status(200).send({project})

        }); //Un find con mongoose, simplemente es buscar una cosa de la base de datos

    },
    
    // Obtener la lista completa de la base de datos
    getProjects: function(req,res){
        Project.find({}).sort('year').exec((err, projects)=>{
            if (err) return res.status(500).send({message:'Error al cargar los datos'});
            if (!projects) return res.status(404).send({message: 'No hay proyectos a mostrar'});
            return res.status(200).send({projects});

        });/*Find lo que hace es sacar todos los documentos que hay dentro de 
        una entidad o colección*/

    },

    //Actualizar un proyecto
    updateProject:function(req,res){
        var projectID = req.params.id;
        var update = req.body; //objeto completo con los datos actualizados del proyecto

        Project.findByIdAndUpdate(projectID, update, {new:true} ,(err, projectUpdated)=>{
            if (err) return res.status(500).send({message:'Error al actualizar el proyecto'});
            if (!projectUpdated) return res.status(404).send({message:'No existe el proyecto solicitado'});
            return res.status(200).send({project:projectUpdated});

        });

    },

    //Eliminar un proyecto
    deleteProject: function(req,res){
        var projectID = req.params.id;
        Project.findByIdAndRemove(projectID, (err,projectRemoved)=>{
            if (err) return res.status(500).send({message:'Error al eliminar el proyecto'});
            if (!projectRemoved) res.status(404).send({message:'No se puede eliminar ese proyecto'});
            return res.status(200).send({project:projectRemoved});

        });

    }

};

module.exports=controller;