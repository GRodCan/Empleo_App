const Offert= require("../models/offert")
const collection= require("../utils/mongoDB")
const offerts={

    createOffert: async (req,res)=>{
        try{
            const offert = new Offert(req.body); //genera nuevo documento con la info recibida del req
            await collection.insertOne(offert); //lo guarda en BBDD
            res.status(201).json(offert);
            console.log("Offert created!");
            }catch(err){
                res.status(400).json({"error":err})
        }
    },
}

module.exports=offerts