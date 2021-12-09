const views = require('../controllers/views');
const routes= require('express').Router();
const passport = require('passport');
const logged = require('../utils/loggedIn')

const passportJWTauth = require('../utils/passport')
passportJWTauth(passport)

routes.get('/', logged, views.home);
routes.get('/signup', logged, views.signup);
routes.get('/login', logged, views.login);
routes.get('/favorites',passport.authenticate('jwt', { session: false }), logged, views.favorites); //con el añadido solo deja meterse si está logeado
routes.get('/profile',passport.authenticate('jwt', { session: false }), logged, views.profile);
routes.get('/users',passport.authenticate('jwt', { session: false }), logged, views.users);
routes.get('/dashboard',passport.authenticate('jwt', { session: false }), logged, views.dashboard);

module.exports=routes;
