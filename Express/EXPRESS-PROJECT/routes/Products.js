const express = require('express');
const router = express.Router();

const Product = require('../models/Product');




router.get('/', async(req, res) => {
    const products = await Product.find();
    if(products){
        res.status(200).json(products);
    }
    else{
        res.status(404).json({error: "No product found"});
    }
});



router.post('/', async(req, res) => {
    try{
        console.log('Request body:', req.body);
        const {name,price,image} = req.body;
        
        if(!name || !price || !image) {
            return res.status(400).json({error: "Missing required fields: name, price, image"});
        }
        
        const newProduct = await Product.create({name,price,image});
        res.status(201).json({message: "Product created successfully", product: newProduct});

    }
    catch(err){
        console.error('Error creating product:', err.message);
        res.status(400).json({error: err.message});
    }
});


module.exports = router;




// router.get("/",(req,res) => {
//     const products = fs.readFileSync("data/products.json")
//     res.json(JSON.parse(products));
// });



// router.get("/:id", (req,res) => {
//     const products = fs.readFileSync("data/products.json")

//     const product = JSON.parse(products).find((p) => {
//         return p.id === parseInt(req.params.id)
//     });
//     if(product){
//         res.json(product);
//     }else{
//         res.status(404).json({error:"Product Not Found"})
//     }
// });
// -


// router.delete("/:id", (req,res) => {
//     const products = fs.readFileSync("data/products.json")
//     const updatedProducts = JSON.parse(products).filter((p) => {
//         return p.id !== parseInt(req.params.id);
//     });
//     fs.writeFileSync("data/products.json",JSON.stringify(updatedProducts,null,2));
//     res.status(200).json({message:"Product deleted successfully"})
// });




// router.post("/",(req,res) => {
//     const products = JSON.parse(fs.readFileSync("data/products.json"));
//     const newProduct = {
//         id:products[products.length - 1].id + 1,
//         name:req.body.name,
//         price:req.body.price,
//         image:req.body.image,
//     }


//     const updatedProducts = [...products,newProduct];
//     fs.writeFileSync("data/products.json",JSON.stringify(updatedProducts,null,2));
//     res.status(201).json({msg : "Product added successfully"});
// });


// module.exports = router;