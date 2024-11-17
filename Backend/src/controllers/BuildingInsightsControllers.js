console.log('Fetching solar insight')
import { getSolarInsights } from '../services/buildingInsights.js';
console.log('.....')

export const fetchBuildingInsights = async (req, res) => {
  const { latitude, longitude } = req.query;

  // Input Validation
  if (!latitude || !longitude) {
    return res.status(400).json({ error: 'Latitude and longitude are required' });
  }

  if (isNaN(latitude) || isNaN(longitude)) {
    return res.status(400).json({ error: 'Latitude and longitude must be numbers' });
  }

  console.log(`Fetching insights for latitude: ${latitude}, longitude: ${longitude}`);

  try {
    // Call the Solar API service
    const insights = await getSolarInsights(latitude, longitude);

    // Success Response
    res.json({
      status: 'success',
      data: insights,
    });
  } catch (error) {
    console.error('Error in controller:', error.message);
    res.status(500).json({ error: error.message || 'Failed to fetch building insights' });
  }
};
