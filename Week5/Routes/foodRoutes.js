const express = require('express');
const router = express.Router();
const foodController = require('../Controllers/foodController');
router.get('/', foodController.getAllFood);

module.exports = router;
