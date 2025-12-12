const express = require("express");
const fs = require("fs");
const app = express();
const router = express.Router();

// To read the file directly without creating a route file
router.get("/",(req,res) => {
    const products = fs.readFileSync("data/BlogPost.json")
    res.json(JSON.parse(products));
});

router.get("/:id", (req,res) => {
    const BlogPost = fs.readFileSync("data/BlogPost.json")
    const post = JSON.parse(BlogPost).find((b) => {
        return b.id == req.params.id;
    });
    if(post){
        res.json(post);
    }
    else{
        res.status(404).json({error:"Not Found"});
    }
});

module.exports = router;