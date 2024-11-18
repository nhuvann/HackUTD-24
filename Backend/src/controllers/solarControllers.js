const axios = require('axios');

// Fetch closest building insights
exports.findClosestBuilding = async (req, res) => {
  try {
    const { latitude, longitude } = req.query;
    const apiKey = process.env.GOOGLE_API_KEY;

    const response = await axios.get(
      `https://solar.googleapis.com/v1/buildingInsights:findClosest`,
      {
        params: {
          'location.latitude': latitude,
          'location.longitude': longitude,
          key: apiKey,
        },
      }
    );

    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error fetching building insights:', error.message);
    res.status(error.response?.status || 500).json({
      error: 'Failed to fetch building insights',
      details: error.response?.data || 'Unknown error',
    });
  }
};

// Fetch data layers
exports.getDataLayers = async (req, res) => {
  try {
    const { latitude, longitude, radiusMeters } = req.query;
    const apiKey = process.env.GOOGLE_API_KEY;

    const response = await axios.get(
      `https://solar.googleapis.com/v1/dataLayers:get`,
      {
        params: {
          'location.latitude': latitude,
          'location.longitude': longitude,
          radius_meters: radiusMeters,
          required_quality: 'LOW', // Adjust quality if needed
          key: apiKey,
        },
      }
    );

    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error fetching data layers:', error.message);
    res.status(error.response?.status || 500).json({
      error: 'Failed to fetch data layers',
      details: error.response?.data || 'Unknown error',
    });
  }
};
