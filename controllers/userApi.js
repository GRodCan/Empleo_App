const User = require('../models/user');
const takeProperty = require('../utils/takeProperty');

const getUsers = async(req, res) => {
    let data;
    try{
        data = await User.getUserByEmail(req.body.email);
        res.status(200).json({users:data})
    }catch(err){
        res.status(400).json({"error":err})
    }
};

const createUser = async(req, res) => {
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
        const result = await User.editUserByEmail(req.body, req.body.current_email, req.body.current_pass);
        

        res.status(201).redirect("/profile");
    } catch(err){
        res.status(400).json({"error":err});
    }
};

// const loginUser = async(req, res) => {
//     try {
//         const result = await User.existUser(req.body.email, req.body.pass)
//         if(result == 1){
//             res.redirect('http://localhost:3000/profile')
//         }else{
//             res.redirect('http://localhost:3000/login')
//         }
//     } catch (err) {
//         res.status(400).json({"error":err});  
//     }
// }

const users = {
    getUsers,
    createUser,
    editUserByEmail
    // loginUser
}

module.exports = users