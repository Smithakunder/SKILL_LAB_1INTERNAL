// foodRoutes.js
const express = require('express');
const router = express.Router();
const foodController = require('../controllers/foodController');

router.get('/foods', foodController.getAllFood);
// Define other routes for CRUD operations on food

module.exports = router;
export { router as foodRoutes };