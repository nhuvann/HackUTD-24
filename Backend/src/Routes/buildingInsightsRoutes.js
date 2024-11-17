import express from 'express';
import { fetchBuildingInsights } from '../controllers/buildingInsightsControllers.js';

// Initialize the router (ensure the parentheses are included)
const router = express.Router();

// Define the route for fetching building insights
router.get('/buildingInsights', fetchBuildingInsights);

// Export the router to be used in app.js
export default router;
