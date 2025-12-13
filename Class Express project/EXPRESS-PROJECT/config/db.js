const mongoose = require("mongoose");



async function connectDB() {
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/school");
        console.log("Database connected successfully");
    }catch(err){
        console.log("Database connection failed", err.message);
        process.exit(1);
    }   
}


module.exports = connectDB;