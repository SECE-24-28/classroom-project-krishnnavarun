const express = require('express');
const Cart = require('../models/Cart');
const { authenticateToken } = require('../middlewares/authMiddleware');
const router = express.Router();

// Get user's cart items
router.get('/', authenticateToken, async (req, res) => {
    try{
        console.log("GET /cart - fetching cart for user:", req.user.id);
        const cartItems = await Cart.find({userId: req.user.id}).exec();
        console.log("Found", cartItems.length, "items");
        res.status(200).json(cartItems);
    }catch(err){
        console.error("Error in GET /cart:", err);
        res.status(400).json({error: err.message});
    }
});

// Add item to user's cart
router.post('/', authenticateToken, async (req, res) => {
    try{
        console.log("POST /cart received:", req.body);
        const {productId, quantity, price, name, image} = req.body;
        const userId = req.user.id;
        
        if(!productId || !price || !name || !image) {
            return res.status(400).json({error: "Missing required fields: productId, price, name, image"});
        }
        
        // Check if product already exists in user's cart
        const existingItem = await Cart.findOne({userId, productId});
        
        if(existingItem){
            existingItem.quantity = (existingItem.quantity || 1) + (quantity || 1);
            await existingItem.save();
            console.log("Cart item updated:", existingItem);
            return res.status(200).json({message: "Cart item updated", item: existingItem});
        }
        
        const cartItem = await Cart.create({userId, productId, quantity: quantity || 1, price, name, image});
        console.log("Cart item created:", cartItem);
        res.status(201).json({message: "Item added to cart", item: cartItem});
    }catch(err){
        console.error("Error adding to cart:", err);
        res.status(400).json({error: err.message});
    }
});

// Clear user's cart
router.delete('/clear/all', authenticateToken, async (req, res) => {
    try{
        console.log("DELETE /cart/clear/all for user:", req.user.id);
        const result = await Cart.deleteMany({userId: req.user.id});
        res.status(200).json({message: "Cart cleared", deletedCount: result.deletedCount});
    }catch(err){
        console.error("Error clearing cart:", err);
        res.status(400).json({error: err.message});
    }
});

// Remove item from user's cart
router.delete('/:id', authenticateToken, async (req, res) => {
    try{
        const {id} = req.params;
        console.log("DELETE /cart/:id", id, "for user:", req.user.id);
        
        // Delete by cart item id and userId
        let cartItem = await Cart.findByIdAndDelete({_id: id, userId: req.user.id});
        
        if(!cartItem){
            return res.status(404).json({error: "Item not found in your cart"});
        }
        res.status(200).json({message: "Item removed from cart", item: cartItem});
    }catch(err){
        console.error("Error removing from cart:", err);
        res.status(400).json({error: err.message});
    }
});

// Update item quantity in user's cart
router.put('/:id', authenticateToken, async (req, res) => {
    try{
        const {id} = req.params;
        const {quantity} = req.body;
        console.log("PUT /cart/:id", id, "quantity:", quantity, "for user:", req.user.id);
        
        if(!quantity || quantity < 1) {
            return res.status(400).json({error: "Quantity must be at least 1"});
        }
        
        // Update only if item belongs to user
        let cartItem = await Cart.findByIdAndUpdate(
            {_id: id, userId: req.user.id}, 
            {quantity}, 
            {new: true}
        );
        
        if(!cartItem){
            return res.status(404).json({error: "Item not found in your cart"});
        }
        res.status(200).json({message: "Item updated", item: cartItem});
    }catch(err){
        console.error("Error updating cart:", err);
        res.status(400).json({error: err.message});
    }
});

module.exports = router;
