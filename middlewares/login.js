const User = require('../models/user')

const login = async(req, res, next) => {
    try {
        let user
        if(req.body.emailAdmin){
            const{emailAdmin, current_pass} = req.body
        
             user = await User.existUser(emailAdmin, current_pass)  
        }else{
        const{current_email, current_pass} = req.body
        
         user = await User.existUser(current_email, current_pass)
        }
        if(user){
            req.user = user
            next()   
        }else{
            // res.status(400).json({error: 'Incorrect username or password'}) 
            res.status(401).render('errors')
        }
    } catch (error) {
       res.status(500).json({error}) 
    }
}





module.exports = login