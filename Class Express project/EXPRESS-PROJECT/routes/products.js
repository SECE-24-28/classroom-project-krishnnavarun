const express = require('express');
const Product = require('../models/Product');
const router = express.Router();

// Get all products
router.get('/', async (req, res) => {
    try{
        const products = await Product.find();
        res.status(200).json(products);
    }catch(err){
        res.status(400).json({error: err.message});
    }
});

// Add new product (POST directly to /products)
router.post('/', async (req, res) => {
    try{
        const {name, price, image} = req.body;
        const product = await Product.create({name, price, image});
        res.status(201).json({message: "Product created successfully", product});
    }catch(err){
        res.status(400).json({error: err.message});
    }
});

// Get product by ID
router.get('/:id', async (req, res) => {
    try{
        const product = await Product.findById(req.params.id);
        if(!product){
            return res.status(404).json({error: "Product not found"});
        }
        res.status(200).json(product);
    }catch(err){
        res.status(400).json({error: err.message});
    }
});

// Add new product (Alternative route with /add)
router.post('/add', async (req, res) => {
    try{
        const {name, price, image} = req.body;
        const product = await Product.create({name, price, image});
        res.status(201).json({message: "Product created successfully", product});
    }catch(err){
        res.status(400).json({error: err.message});
    }
});

// Update product
router.put('/:id', async (req, res) => {
    try{
        const {name, price, image} = req.body;
        const product = await Product.findByIdAndUpdate(req.params.id, {name, price, image}, {new: true});
        if(!product){
            return res.status(404).json({error: "Product not found"});
        }
        res.status(200).json({message: "Product updated", product});
    }catch(err){
        res.status(400).json({error: err.message});
    }
});

// Delete product
router.delete('/:id', async (req, res) => {
    try{
        const product = await Product.findByIdAndDelete(req.params.id);
        if(!product){
            return res.status(404).json({error: "Product not found"});
        }
        res.status(200).json({message: "Product deleted"});
    }catch(err){
        res.status(400).json({error: err.message});
    }
});

module.exports = router;
