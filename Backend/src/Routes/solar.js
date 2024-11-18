const express = require('express');
const router = express.Router();
const solarControllers = require('../controllers/solarControllers');

// Route to fetch closest building insights
router.get('/building-insights', solarControllers.findClosestBuilding);

// Route to fetch data layers
router.get('/data-layers', solarControllers.getDataLayers);

module.exports = router;
