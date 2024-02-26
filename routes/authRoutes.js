// authRoutes.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
router.get('/auth/google', authController.googleLogin);
router.get('/auth/google/callback', authController.googleCallback);
router.post('/auth/facebook', authController.facebookLogin);
router.post('/auth/facebook/callback', authController.facebookCallback);
module.exports = router;
export { router as authRoutes };