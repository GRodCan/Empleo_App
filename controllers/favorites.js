const favorite= require("../models/favorites")
const usersSQL = require('../models/user')
const emailByToken=require('../utils/email_Token')

const createFavorite = async (req,res)=>{
    let result;
    try{
        const email = await emailByToken(req.cookies.jwt).email
        const user = await usersSQL.getUserByEmail(email)
        result = await favorite.createFavorite(req.body.url, req.body.title, req.body.salary, req.body.company, user[0].id_user) //req.body.id_user
        
        res.status(201).json({});
    }catch(err){
        res.status(400).json({"error":err});
    }
}

const deleteFavorite = async (req,res)=>{
    let result;
    try{
        const email = await emailByToken(req.cookies.jwt).email
        const user = await usersSQL.getUserByEmail(email)
        result = await favorite.deleteFavorite(req.body.title,req.body.company,user[0].id_user)

        res.status(201).json({});
    }catch(err){
        res.status(400).json({"error":err});
    }
}

const favorites = {
    createFavorite,
    deleteFavorite
}

module.exports = favorites;