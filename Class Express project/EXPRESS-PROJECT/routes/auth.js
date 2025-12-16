const express = require('express');
const router = express.Router();

const { registerUser, loginUser, logoutUser } = require('../controllers/authController');
const { authenticateToken, isAdmin } = require('../middlewares/authMiddleware');

// Public routes
router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/logout', logoutUser);

// Protected admin route
router.get('/admin', authenticateToken, isAdmin, (req, res) => {
    res.status(200).json({ 
        message: "Welcome to Admin Panel",
        user: req.user 
    });
});

module.exports = router; 