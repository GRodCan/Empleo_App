const views = require('../controllers/views');
const routes= require('express').Router();

routes.get('/', views.home);
routes.get('/signup', views.signup);
routes.get('/login', views.login);
routes.get('/favorites', views.favorites);
routes.get('/profile', views.profile);
routes.get('/users', views.users);
routes.get('/dashboard', views.dashboard);

module.exports=routes;
