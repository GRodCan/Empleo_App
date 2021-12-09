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
    console.log("esto es payload", payload)
    const token = jwt.sign(payload, secret, {expiresIn: '1d'})
    console.log("Esto es token", token)
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