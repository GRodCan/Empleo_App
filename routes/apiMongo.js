const api_Mongo = require('../controllers/api_mongo');
const routes= require('express').Router();

routes.post('/user', (req,res)=>res.send("Registrarse en la aplicación"));

routes.put('/user', (req,res)=>res.send("Editar datos del perfil del usuario o administrador"));

routes.delete('/user', (req,res)=>res.send("Borrar un usuario de la base de datos (admin)"));

routes.post('/login', (req,res)=>res.send("Hacer login en la aplicación"));

routes.post('/logout', (req,res)=>res.send("Salir de la aplicación"));

routes.get('/search/:from?',  api_Mongo.getAllOfferts);

routes.post('/ads', api_Mongo.createOffert);

routes.put('/ads', api_Mongo.editOffert);

routes.delete('/ads', api_Mongo.deleteOffert);

routes.post('/favorites', (req,res)=>res.send("Guardar favorito"));

routes.delete('/favorites', (req,res)=>res.send("Borrar favorito"));

module.exports=routes;