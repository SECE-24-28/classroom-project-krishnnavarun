const jwt = require("jsonwebtoken");

const authenticateToken = (req,res,next) => {

    const token = req.headers.authorization;
    if(!token){
        return  res.status(401).json({error:"Access Denied. No token provided"});
    }

    try{
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        console.log(decoded);
        req.userData = {id:decoded.id, email:decoded.email};
    }catch(err){
        return res.status(400).json({error:"Unauthorized",message:err.message});
    }
    // next();
}



module.exports = authenticateToken;