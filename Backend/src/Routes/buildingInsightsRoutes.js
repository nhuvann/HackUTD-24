import express from 'express';
import { fetchBuildingInsights } from '../controllers/BuildingInsightsControllers';


const router = express.Router;

router.get('/building-insights', fetchBuildingInsights);

export default router; 