const Offert= require("../models/offert")
const mongoDB= require("../utils/mongoDB")
const scrap_Workana = require("../utils/workana_scrap");
const scrap_Domestika = require("../utils/domestika_scrap");
const offerts={
    getAllOfferts: async (req,res)=>{
        try{
            console.log(req.params.search);
            const data_mongo= await mongoDB.getOfferts(req.params.search);
            const scrap_D= await scrap_Domestika(req.params.search)
            const scrap_W= await scrap_Workana(req.params.search)
            const scrap= await scrap_D.concat(scrap_W)
            const data= await scrap.concat(data_mongo)        
            res.status(200).json(data)
        }catch(err){
            res.status(400).json({"error":err})
        }
    },

    createOffert: async (req,res)=>{
        try{
            console.log(req.body);
            const offert = await new Offert(req.body); //genera nuevo documento con la info recibida del req
            await mongoDB.createOffert(offert)
            res.status(201).redirect("/dashboard");
        }catch(err){
            res.status(400).json({"error":err})
        }
    },
    deleteOffert: async (req,res)=>{
        try{
            console.log("controller");
            const query=req.body
            const data= await mongoDB.deleteOffert(query)
            console.log("vuelve de borrar");
            res.status(200).json(data);
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
            let title= req.body.oldTitle
            let update={
                "title": req.body.title,
                "company": req.body.company,
                "salary": req.body.salary
            }
            await mongoDB.editOffert(title,update);
            res.status(200).redirect("/dashboard");
        }catch(err){
            res.status(400).json({"error":err})
        }
    },
}

module.exports=offerts