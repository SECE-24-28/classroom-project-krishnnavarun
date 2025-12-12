const express = require('express');
const router = express.Router();
const fs = require('fs');

// Get all cart items
router.get("/", (req, res) => {
    const cart = fs.readFileSync("data/cart.json");
    res.json(JSON.parse(cart));
});

// Get a specific cart item by id
router.get("/:id", (req, res) => {
    const cart = fs.readFileSync("data/cart.json");
    const cartItem = JSON.parse(cart).find((item) => {
        return item.id === parseInt(req.params.id);
    });
    if (cartItem) {
        res.json(cartItem);
    } else {
        res.status(404).json({ error: "Cart item not found" });
    }
});

// Add item to cart
router.post("/", (req, res) => {
    const cart = JSON.parse(fs.readFileSync("data/cart.json"));
    
    // Check if item already exists in cart
    const existingItem = cart.find(item => item.productId === req.body.productId);
    
    if (existingItem) {
        // Update quantity if item already in cart
        existingItem.quantity += req.body.quantity || 1;
    } else {
        // Add new item to cart
        const newCartItem = {
            id: cart.length > 0 ? Math.max(...cart.map(item => item.id)) + 1 : 1,
            productId: req.body.productId,
            name: req.body.name,
            price: req.body.price,
            image: req.body.image,
            quantity: req.body.quantity || 1,
        };
        cart.push(newCartItem);
    }
    
    fs.writeFileSync("data/cart.json", JSON.stringify(cart, null, 2));
    res.status(201).json({ msg: "Item added to cart successfully" });
});

// Update cart item quantity
router.put("/:id", (req, res) => {
    const cart = JSON.parse(fs.readFileSync("data/cart.json"));
    const cartItem = cart.find((item) => item.id === parseInt(req.params.id));
    
    if (cartItem) {
        cartItem.quantity = req.body.quantity;
        fs.writeFileSync("data/cart.json", JSON.stringify(cart, null, 2));
        res.status(200).json({ msg: "Cart item updated successfully" });
    } else {
        res.status(404).json({ error: "Cart item not found" });
    }
});

// Delete item from cart
router.delete("/:id", (req, res) => {
    const cart = fs.readFileSync("data/cart.json");
    const updatedCart = JSON.parse(cart).filter((item) => {
        return item.id !== parseInt(req.params.id);
    });
    fs.writeFileSync("data/cart.json", JSON.stringify(updatedCart, null, 2));
    res.status(200).json({ msg: "Item removed from cart successfully" });
});

// Clear entire cart
router.delete("/", (req, res) => {
    fs.writeFileSync("data/cart.json", JSON.stringify([], null, 2));
    res.status(200).json({ msg: "Cart cleared successfully" });
});

module.exports = router;
