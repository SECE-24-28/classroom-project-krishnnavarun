 const mongoose = require("mongoose");


const productSchema = new mongoose.Schema(
    {
     name:{
        type:String,
        required:true,
        minlength:3
     },
     price:{
        type:Number,
        required:true,
     },
     image:{
        type:String,
        required:true,
     },
    },{timestamps:true}
);



const Product = mongoose.model("Product", productSchema);

module.exports = Product;