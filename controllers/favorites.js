const Offert= require("../models/offert")

const { Pool } = require('pg');
const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "postgres",
    password: "0000"
})

const favorites={
    createFavorite: async (req,res)=>{
        let result;
        try{
            client = await pool.connect(); // Espera a abrir conexio
            const data = await client.query(`INSERT INTO favorites(url,title,salary,company,description) 
            VALUES ($1,$2,$3,$4,$5)`
            ,[req.body.url,req.body.title,req.body.salary,req.body.company,req.body.description]); //lo guarda en BBDD
            result=data
            console.log("Favorite added!");
            res.status(201).redirect("/dashboard");
            }
            
        catch(err){
                res.status(400).json({"error":err});
        }

        finally{
            client.release();    
        }

        return result
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
}
module.exports = favorites;