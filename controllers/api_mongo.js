const Offert= require("../models/offert")
const mongoDB= require("../utils/mongoDB")
// const scrap_Glassdoor = require("../utils/glassdoor_scrap")
const scrap_Workana = require("../utils/workana_scrap");
const scrap_Domestika = require("../utils/domestika_scrap");
const offerts={
    getAllOfferts: async (req,res)=>{
            try{            
            const data_mongo= await mongoDB.getAllOfferts();
            const scrap_W= await scrap_Workana(req.query.search)
            const scrap_D= await scrap_Domestika(req.query.search)
            const scrap= scrap_W.concat(scrap_D)
            const data= await scrap.concat(data_mongo)
            console.log(req.query.search)
            if(req.params.from){
            res.status(200).render(req.params.from, {data:data})
            }else{
            res.status(200).send(data)
            }
            }catch(err){
            res.status(400).json({"error":err})
         }
    },

    createOffert: async (req,res)=>{
        try{
            const offert = await new Offert(req.body); //genera nuevo documento con la info recibida del req
            mongoDB.getAllOfferts(offert)
            res.status(201).redirect("/dashboard");
            }catch(err){
                res.status(400).json({"error":err})
        }
    },
    deleteOffert: async (req,res)=>{
        try{
            const query=req.body
            const data= await mongoDB.deleteOffert(query)
            res.status(200).json(data);;
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
            const result= await mongoDB.editOffert(req.body.title,req.body.update);
            res.status(200).json(result);
            }catch(err){
                res.status(400).json({"error":err})
        }
    },
}

module.exports=offerts