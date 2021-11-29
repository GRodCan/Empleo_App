const mongoose= require ("mongoose")
//Esqueleto esquema
const objectSchema = {
    title: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    company:{
        type:String,
        required:true
    },
    description: {
        type: String,
        required: true
    },
    url:{
        type:String,
        required:true
    }  
};
const productSchema = mongoose.Schema(objectSchema);//crear ESQUEMA
const Product = mongoose.model("Offert", productSchema)//crear MODELO

module.exports = Product;