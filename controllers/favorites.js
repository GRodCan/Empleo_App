const favorite= require("../models/favorites")

const createFavorite = async (req,res)=>{
    let result;
    try{
        result = await favorite.createFavorite(req.body.url, req.body.title, req.body.salary, req.body.company) //req.body.id_user          
        console.log(req.body)
        
        res.status(201).json({});
    }catch(err){
        res.status(400).json({"error":err});
    }
}

const deleteFavorite = async (req,res)=>{
    let result;
    try{
        result = await favorite.deleteFavorite(req.body.title,)

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