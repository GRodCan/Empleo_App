const favorite= require("../models/favorites")

const createFavorite = async (req,res)=>{
    let result;
    try{
        result = await favorite.createFavorite(req.body.url, req.body.title, req.body.salary, req.body.company) //req.body.id_user          
        console.log(req.body.url)
        
        res.status(201).json({});
    }catch(err){
        res.status(400).json({"error":err});
    }
    //finally{
    //     client.release();    
    // }
}

    // "url": "https://http.cat/405",
    // "title": "ofertavaorita1",
    // "salary": "21000",
    // "company": "indra",
    // "description": "blablabla"

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