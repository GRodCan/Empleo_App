const api_sql = require('../controllers/userApi');
const routes= require('express').Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const login = require('../middlewares/login')
const favorites = require('../controllers/favorites.js')

const passportJWTauth = require('../utils/passport')
passportJWTauth(passport)

const expirationTimeInMs = process.env.JWT_EXPIRATION_TIME
const secret = process.env.JWT_SECRET

routes.post('/user', api_sql.createUser);

routes.post('/user/edit', api_sql.editUserByEmail);

routes.delete('/user', (req,res)=>res.send("Borrar un usuario de la base de datos (admin)"));

routes.post('/login', login, async(req,res)=>{
    let user
    if(req.user){
        user = req.user
    }else{
        res.status(400).json({
            error: 'User not found'
        })
    }
    const payload = {
        email: user.email,
        pass: user.pass
    }
    console.log("esto es payload", payload)
    const token = jwt.sign(payload, secret, {expiresIn: '1d'})
    console.log("Esto es token", token)
    res
    .cookie('jwt',
        token,{
            httpOnly:true,
            secure: false //Set to true in production
        })
    .cookie('email',
        payload.email,{
            httpOnly:true,
            secure: false
        })
    .status(200)
    .redirect(
        '/profile'
    )
    console.log('login correcto')
});

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

routes.delete('/favorites', (req,res)=>res.send("Borrar favorito"));

module.exports = routes;