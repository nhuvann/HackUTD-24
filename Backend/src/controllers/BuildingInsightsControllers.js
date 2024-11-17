import { getSolarInsights } from '../services/buildingInsights.js';

export const fetchBuildingInsights = async (req, res) => {
  const { latitude, longitude } = req.query;

  if (!latitude || !longitude) {
    return res.status(400).json({ error: 'Latitude and longitude are required' });
  }

  try {
    const insights = await getSolarInsights(latitude, longitude);
    res.json({
      status: 'success',
      data: insights,
    });
  } catch (error) {
    console.error('Error in controller:', error.message);
    res.status(500).json({ error: 'Failed to fetch building insights' });
  }
};
