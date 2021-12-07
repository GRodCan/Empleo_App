const User = require('../models/user')

const login = async(req, res, next) => {
    try {
        const{email, pass} = req.body
        const user = await User.existUser(email, pass)
        if(user){
            req.user = user
            next()   
        }else{
            res.status(400).json({error: 'Incorrect username or password'}) 
        }
    } catch (error) {
       res.status(500).json({error}) 
    }
}

module.exports = login