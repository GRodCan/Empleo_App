const emailByToken=require('./email_Token');
const userSQL = require('../models/user');

const isLoggedIn = async(req, res, next) => {
    let user;
    let log = {loggedIn:false, admin:false};
    if(req.cookies.jwt){
        log.loggedIn = true
        const email = await emailByToken(req.cookies.jwt).email
        user = await userSQL.getUserByEmail(email)
        if(user[0]){
            if(user[0].administrador === true){
            log.admin = true
            }
        }else{
            log.loggedIn = false  
        };
    };
    req.log = log;
    next()
};

module.exports = isLoggedIn;

