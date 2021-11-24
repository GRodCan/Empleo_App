// const views = require('../controllers/api'); CUANDO TENGAMOS CONTROLLER
const routes= require('express').Router();

routes.post('/user', (req,res)=>res.send("Registrarse en la aplicación"));

routes.put('/user', (req,res)=>res.send("Editar datos del perfil del usuario o administrador"));

routes.delete('/user', (req,res)=>res.send("Borrar un usuario de la base de datos (admin)"));

routes.post('/login', (req,res)=>res.send("Hacer login en la aplicación"));

routes.post('/logout', (req,res)=>res.send("Salir de la aplicación"));

routes.get('/search', (req,res)=>res.send("Resultados busqueda"));

routes.post('/ads', (req,res)=>res.send("Crear oferta (admin)"));

routes.put('/ads', (req,res)=>res.send("Editar oferta (admin)"));

routes.delete('/ads', (req,res)=>res.send("Borrar oferta (admin)"));

routes.post('/favorites', (req,res)=>res.send("Guardar favorito"));

routes.delete('/favorites', (req,res)=>res.send("Borrar favorito"));

module.exports=routes;