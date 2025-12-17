require('dotenv').config();

const express = require('express');
const app = express();

const productsRouter = require('./routes/products');
const cartRouter = require('./routes/Cart');
const authRouter = require('./routes/auth');

const connectDB = require('./config/db');
connectDB().catch(err => console.log("Failed to connect DB:", err));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS middleware
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, PATCH');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.header('Access-Control-Max-Age', '3600');
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    }
    next();
});

// Test route
app.get('/test', (req, res) => {
    console.log('Test route hit');
    res.status(200).json({ message: "Server is working" });
});

// Routes
app.use('/api/auth', authRouter);
app.use('/products', productsRouter);
app.use('/api/cart', cartRouter);

// 404 Error handling
app.use((req, res) => {
    res.status(404).json({ error: "Route not found" });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error("Server error:", err);
    res.status(500).json({ 
        error: "Internal server error",
        message: err.message 
    });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});