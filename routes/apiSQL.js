const api_sql = require('../controllers/userApi');
const routes= require('express').Router();

routes.post('/user', api_sql.createUser);

routes.post('/user/edit', api_sql.editUserByEmail);

routes.delete('/user', (req,res)=>res.send("Borrar un usuario de la base de datos (admin)"));

routes.post('/login', api_sql.loginUser);

routes.post('/logout', (req,res)=>res.send("Salir de la aplicación"));

routes.post('/favorites', (req,res)=>res.send("Guardar favorito"));

routes.delete('/favorites', (req,res)=>res.send("Borrar favorito"));

module.exports = routes;