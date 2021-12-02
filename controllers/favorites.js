const favorite= require("../models/favorites")

const createFavorite = async (req,res)=>{
    let result;
    try{
        data = await favorite.createFavorite            
        result = await data
        console.log("Favorite added!");
        res.status(201);
    }catch(err){
        res.status(400).json({"error":err});
    }finally{
        client.release();    
    }
}



//     deleteFavorite: async (req,res)=>{
//          try{
//              client=await pool.connect()
//              const data= await client.query(`)`
//              res.status(200).json(data);
//              console.log("Offert delete!");
//              }catch(err){
//                  res.status(400).json({"error":err})
//          }
//      },
// }

const favorites = {
    createFavorite
}

module.exports = favorites;