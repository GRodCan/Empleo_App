const jwt = require('jsonwebtoken');
const expirationTimeInMs = process.env.JWT_EXPIRATION_TIME
const secret = process.env.JWT_SECRET

const generateToken=async(req,res)=>{
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
    const token = jwt.sign(payload, secret, {expiresIn: '1d'})
    res
    .cookie('jwt',
        token,{
            httpOnly:true,
            secure: false //Set to true in production
        })
    .status(200)
    .redirect(
        '/profile'
    )
    console.log('login correcto')
};

module.exports=generateToken