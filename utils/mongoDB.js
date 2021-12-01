const { MongoClient } = require('mongodb');


const uri = process.env.DATABASE_MONGO;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
    if(err){throw err}
    console.log("Connect MongoDB sucess");
})
const db = client.db("EmpleoApp")
const col= db.collection("Offerts")


const getAllOfferts=async ()=>{
    const query={};
     const cursor = await col.find(query);
    const data= await cursor.toArray();
    console.log("Ofertas mongo adquiridas", data.length);
    return data
}

const createOffert=async(offert)=>{
    await col.insertOne(offert); //lo guarda en BBDD
    console.log("Offert created!");
}

const deleteOffert=async (query)=>{
    await col.deleteOne(query); //lo guarda en BBDD
    console.log("Offert delete!")
}

const editOffert=async (title,update)=>{
    const filter={title: title}
    const updateDocument={
        $set:update            
    }
    await collection.updateOne(filter,updateDocument); //busca por titulo y aplica cambios en los cambios especificados en el req.body.update
            console.log("Offert update!");
}

const methods={
    getAllOfferts,
    createOffert,
    deleteOffert,
    editOffert
}


module.exports=methods