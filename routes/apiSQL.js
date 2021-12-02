const api_sql = require('../controllers/userApi');
const routes= require('express').Router();
const favorites = require('../controllers/favorites.js')

routes.post('/user', api_sql.createUser);

routes.post('/user', api_sql.createUser);

routes.put('/user', (req,res)=>res.send("Editar datos del perfil del usuario o administrador"));

routes.delete('/user', (req,res)=>res.send("Borrar un usuario de la base de datos (admin)"));

routes.post('/login', (req,res)=>res.send("Hacer login en la aplicación"));

routes.post('/logout', (req,res)=>res.send("Salir de la aplicación"));

routes.post('/favorites', favorites.createFavorite);

routes.delete('/favorites', (req,res)=>res.send("Borrar favorito"));

module.exports = routes;