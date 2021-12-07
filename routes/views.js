const views = require('../controllers/views');
const routes= require('express').Router();
const passport = require('passport');

const passportJWTauth = require('../utils/passport')
passportJWTauth(passport)

routes.get('/', views.home);
routes.get('/signup', views.signup);
routes.get('/login', views.login);
routes.get('/favorites',passport.authenticate('jwt', { session: false }), views.favorites); //con el añadido solo deja meterse si está logeado
routes.get('/profile',passport.authenticate('jwt', { session: false }), views.profile);
routes.get('/users',passport.authenticate('jwt', { session: false }), views.users);
routes.get('/dashboard',passport.authenticate('jwt', { session: false }), views.dashboard);

module.exports=routes;
