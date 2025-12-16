const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerUser = async(req,res) => {
    try{
        const {email, password, name} = req.body;
        const userExists = await User.findOne({email});
        if(userExists){
            return res.status(400).json({error: "User already exists"});
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const existingUser = await User.create({email,password:hashedPassword,name});
        res.status(201).json({mesage:"User created successfully"});
    }
    catch(err){
        res.status(400).json({error: err.message});
    }
};


const loginUser = async(req,res) => {
    try{
        const {email, password} = req.body;
        const user = await User.findOne({email});

        if(!user){
            return res.status(400).json({error:"User Not Found"});
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if(!isPasswordValid){
            return res.status(400).json({errror:"Invalid password"});
        }
        const token = jwt.sign({id:user._id,email:user.email},process.env.SECRET_KEY,{expiresIn:process.env.TOKEN_EXPIRES_IN});
        res.status(200).json({message:"Login successful", token});
    }catch(err){
        res.status(400).json({error:err.message});
    }
}



module.exports = {registerUser,loginUser};