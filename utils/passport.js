const passport = require('passport')
const passportJWT = require('passport-jwt')
const User = require('../models/user')
const JWTStrategy = passportJWT.Strategy

const secret = process.env.JWT_SECRET

const cookieExtractor = req =>{
    let jwt = null;
    if(req && req.cookies) {
        jwt = req.cookies['jwt']
    }
    return jwt
};



const passportJWTauth = (passport) => {
    passport.use('jwt', new JWTStrategy({
        jwtFromRequest: cookieExtractor,
        secretOrKey: secret
    }, async (jwtPayload, done) => {
        const user = await User.existUser(jwtPayload.email, jwtPayload.pass);
            if (user) {
                done(null, user);
            } else {
                done(null, false);
            }
    }))

    return passport;
}

module.exports = passportJWTauth;

