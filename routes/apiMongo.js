const api_Mongo = require('../controllers/api_mongo');
const routes= require('express').Router();

routes.get('/search/:search?',  api_Mongo.getAllOfferts);

routes.post('/ads', api_Mongo.createOffert);

routes.put('/ads', api_Mongo.editOffert);

routes.delete('/ads', api_Mongo.deleteOffert);

module.exports=routes;