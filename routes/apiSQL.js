const api_sql = require('../controllers/userApi');
const routes= require('express').Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const login = require('../middlewares/login')
const favorites = require('../controllers/favorites.js')
const generateToken=require('../utils/generateToken')

const passportJWTauth = require('../utils/passport')
passportJWTauth(passport)

const expirationTimeInMs = process.env.JWT_EXPIRATION_TIME
const secret = process.env.JWT_SECRET

routes.post('/user', api_sql.createUser);

routes.post('/user/edit',login, api_sql.editUserByEmail);

routes.delete('/user', api_sql.deleteUserbyEmail);

routes.post('/login', login, generateToken)

routes.post('/logout', (req, res) => {
    if (req.cookies['jwt']) {
        res
        .clearCookie('jwt')
        .status(200)
        .redirect(
            '/'
        )
    } else {
        res.status(401).json({
            error: 'Invalid jwt'
        })
    }
});

routes.get('/protected', 
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        res.status(200).json({
            message: 'welcome to the protected route!'
        })
    }
);

routes.post('/favorites', favorites.createFavorite);

routes.delete('/favorites', favorites.deleteFavorite);

module.exports = routes;