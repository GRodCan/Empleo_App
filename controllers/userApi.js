const User = require('../models/user');
const takeProperty = require('../utils/takeProperty');

const getUsers = async(req, res) => {
    console.log(req.body.email);
    let data;
    try{
        data = await User.getUserByEmail(req.body.email);
        res.status(200).json({users:data})
    }catch(err){
        res.status(400).json({"error":err})
    }
};

const createUser = async(req, res) => {
    console.log(req.body);
    try{
        const result = await User.createUser(req.body.nombre, req.body.email, req.body.pass, req.body.img);
        console.log('Usuario creado');
        res.redirect('http://localhost:3000/profile');
    }catch(err){
        res.status(400).json({"error":err});
    }
};

const editUserByEmail = async(req, res) => {
    try {
        let property = takeProperty(req.body)
        const result = await User.editUserByEmail(property, req.body[`${property}`], req.body.current_email, req.body.current_pass);
        res.status(201).json({datos_guardados:result,status:"ÉXITO"});
    } catch(err){
        res.status(400).json({"error":err});
    }
};

const loginUser = async(req, res) => {
    try {
        const result = await User.existUser(req.body.email, req.body.pass)
        if(result == 1){
            res.redirect('http://localhost:3000/profile')
        }
    } catch (err) {
        res.status(400).json({"error":err});  
    }
}

const users = {
    getUsers,
    createUser,
    editUserByEmail,
    loginUser
}

module.exports = users