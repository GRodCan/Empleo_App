const User = require('../models/user');
const takeProperty = require('../utils/takeProperty');
const bodyToArray = require('../utils/editUser')

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
        res.redirect('/login');
    }catch(err){
        res.status(400).json({"error":err});
    }
};

const editUserByEmail = async(req, res) => {
    try {
        let admin=false;
        if(req.body.emailAdmin){
            admin=true;
        }
        const current_email=req.body.current_email
        let arrProps=bodyToArray(req.body)
        const result = await User.editUserByEmail(arrProps, current_email);
        console.log('Usuario modificado');
        if(admin===true){res.status(201).redirect("/users")
        }else{
        res.status(201).redirect("/profile");}
        } catch(err){
        res.status(400).json({"error":err});
    }
};


const deleteUserbyEmail=async (req,res)=>{
   try{ 
       console.log(req.body.userEmail)
        const result = await User.deleteUserbyEmail(req.body.userEmail);
        console.log('Usuario Borrado');
        res.status(201).redirect("/users")
}catch(err){
    res.status(400).json({"error":err})}}

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
    editUserByEmail,
    deleteUserbyEmail
    // loginUser
}

module.exports = users