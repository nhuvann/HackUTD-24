import express from 'express';
import dotenv from 'dotenv';
//import { dot } from 'node:test/reporters';

dotenv.config();

const app = express();
app.use(express.json());

import buildingInsights from './Routes/buildingInsightsRoutes.js';

app.use('./api/solar', buildingInsights);

app.get("/", (req,res) => {
    res.send("Google BuildingInsight is running");
});

const PORT = process.env.PORT
app.listen (PORT, () => console.log('Server running....'));

  


