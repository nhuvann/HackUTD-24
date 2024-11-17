
import axios from 'axios';

export const getSolarInsight = async (latitude, longitude) => {
    const apiKey = process.env.GOOGLE_API_KEY;
  const url = `https://solar.googleapis.com/v1/buildingInsights:findClosest`;

  try {
    const response = await axios.get(url, {
      params: {
        'location.latitude': latitude,
        'location.longitude': longitude,
        requiredQuality: 'HIGH',
        key: apiKey,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching solar insights:', error.message);
    throw new Error(error.response?.data?.error?.message || 'Failed to fetch solar insights');
  }
};
