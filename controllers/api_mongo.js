const Offert= require("../models/offert")
const collection= require("../utils/mongoDB")
const offerts={
    getAllOfferts: async (req,res)=>{
        try{
            const query={};
            const cursor = await collection.find(query);
            const data= await cursor.toArray();
            console.log("*******************************************************************************")
            console.log(data)
            console.log("*******************************************************************************")
            res.status(200).render('home', {data:data})
            }catch(err){
                res.status(400).json({"error":err})
        }
    },

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
    deleteOffert: async (req,res)=>{
        try{
            const query=req.body
            const data= await collection.deleteOne(query); //lo guarda en BBDD
            res.status(200).json(data);
            console.log("Offert delete!");
            }catch(err){
                res.status(400).json({"error":err})
        }
    },

    //req.body={title:, update}
    /*
        {"title":"Crack de Amazon", 
        "update":{
        "company":"NASA"}}
    */
    editOffert: async (req,res)=>{
        try{
            const filter={title: req.body.title}
            const updateDocument={
                $set:req.body.update            
            }
            const result= await collection.updateOne(filter,updateDocument); //busca por titulo y aplica cambios en los cambios especificados en el req.body.update
            res.status(200).json(result);
            console.log("Offert update!");
            }catch(err){
                res.status(400).json({"error":err})
        }
    },
}

module.exports=offerts