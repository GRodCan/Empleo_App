const { MongoClient } = require('mongodb');

const uri = process.env.DATABASE_MONGO;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
    if(err){throw err}
    console.log("Connect MongoDB sucess");
})
const db = client.db("EmpleoApp")
const col= db.collection("Offerts")


module.exports=col