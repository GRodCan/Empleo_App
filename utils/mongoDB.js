const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://GRodCan:2g77uNvkYxKzbN7@empleoapp.ok6yt.mongodb.net/EmpleoApp?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
    if(err){throw err}
    console.log("Connect MongoDB sucess");
})
const db = client.db("EmpleoApp")
const col= db.collection("Offerts")


module.exports=col