const User = require('../models/user');

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
        const result = await User.editUserByEmail(req.body.avatar, req.body.name, req.body.new_email, req.body.new_Password, req.body.current_email, req.body.current_Password);
        res.status(201).json({datos_guardados:result,status:"ÉXITO"});
        res.redirect('http://localhost:3000/profile');
    } catch(err){
        res.status(400).json({"error":err});
    }
};


const users = {
    getUsers,
    createUser,
    editUserByEmail
}

module.exports = users