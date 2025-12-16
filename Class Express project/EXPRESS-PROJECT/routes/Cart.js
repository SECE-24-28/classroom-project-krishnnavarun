const express = require('express');
const Cart = require('../models/Cart');
const router = express.Router();

// Get all cart items
router.get('/', async (req, res) => {
    try{
        console.log("GET /cart - fetching all cart items");
        const cartItems = await Cart.find().exec();
        console.log("Found", cartItems.length, "items");
        res.status(200).json(cartItems);
    }catch(err){
        console.error("Error in GET /cart:", err);
        res.status(400).json({error: err.message});
    }
});

// Add item to cart (POST directly to /cart or /cart/add)
router.post('/', async (req, res) => {
    try{
        console.log("POST /cart received:", req.body);
        const {productId, quantity, price, name, image} = req.body;
        
        if(!productId || !price || !name || !image) {
            return res.status(400).json({error: "Missing required fields: productId, price, name, image"});
        }
        
        // Check if product already exists in cart
        const existingItem = await Cart.findOne({productId});
        
        if(existingItem){
            existingItem.quantity = (existingItem.quantity || 1) + (quantity || 1);
            await existingItem.save();
            console.log("Cart item updated:", existingItem);
            return res.status(200).json({message: "Cart item updated", item: existingItem});
        }
        
        const cartItem = await Cart.create({productId, quantity: quantity || 1, price, name, image});
        console.log("Cart item created:", cartItem);
        res.status(201).json({message: "Item added to cart", item: cartItem});
    }catch(err){
        console.error("Error adding to cart:", err);
        res.status(400).json({error: err.message});
    }
});

// Remove item from cart by MongoDB ID or productId
router.delete('/:id', async (req, res) => {
    try{
        const {id} = req.params;
        console.log("DELETE /cart/:id", id);
        
        // Try to delete by MongoDB _id first
        let cartItem = await Cart.findByIdAndDelete(id);
        
        // If not found, try to delete by productId
        if(!cartItem){
            console.log("Not found by _id, trying productId...");
            cartItem = await Cart.findOneAndDelete({productId: id});
        }
        
        if(!cartItem){
            return res.status(404).json({error: "Item not found in cart"});
        }
        res.status(200).json({message: "Item removed from cart", item: cartItem});
    }catch(err){
        console.error("Error removing from cart:", err);
        res.status(400).json({error: err.message});
    }
});

// Update cart item quantity by MongoDB ID or productId
router.put('/:id', async (req, res) => {
    try{
        const {id} = req.params;
        const {quantity} = req.body;
        console.log("PUT /cart/:id", id, "quantity:", quantity);
        
        if(!quantity || quantity < 1) {
            return res.status(400).json({error: "Quantity must be at least 1"});
        }
        
        // Try to update by MongoDB _id first
        let cartItem = await Cart.findByIdAndUpdate(id, {quantity}, {new: true});
        
        // If not found, try to update by productId
        if(!cartItem){
            console.log("Not found by _id, trying productId...");
            cartItem = await Cart.findOneAndUpdate({productId: id}, {quantity}, {new: true});
        }
        
        if(!cartItem){
            return res.status(404).json({error: "Item not found in cart"});
        }
        res.status(200).json({message: "Item updated", item: cartItem});
    }catch(err){
        console.error("Error updating cart:", err);
        res.status(400).json({error: err.message});
    }
});

// Clear all items from cart
router.delete('/clear/all', async (req, res) => {
    try{
        console.log("DELETE /cart/clear/all");
        const result = await Cart.deleteMany({});
        res.status(200).json({message: "Cart cleared", deletedCount: result.deletedCount});
    }catch(err){
        console.error("Error clearing cart:", err);
        res.status(400).json({error: err.message});
    }
});

module.exports = router;
