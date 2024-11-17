import axios from 'axios';

console.log('Get solar insights.....')
export const getSolarInsight = async (latitude, longitude) => {
  const apiKey = process.env.GOOGLE_API_KEY;

  if (!apiKey) {
    throw new Error('Google API Key is not set. Please check your environment variables.');
  }

  if (isNaN(latitude) || isNaN(longitude)) {
    throw new Error('Invalid latitude or longitude values.');
  }

  const baseUrl = 'https://solar.googleapis.com/v1';
  const url = `${baseUrl}/buildingInsights:findClosest`;

  try {
    console.log(`Fetching solar insights for latitude: ${latitude}, longitude: ${longitude}`);

    const response = await axios.get(url, {
      params: {
        'location.latitude': latitude,
        'location.longitude': longitude,
        requiredQuality: 'HIGH',
        key: apiKey,
      },
    });

    console.log('Solar insights received:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching solar insights:', error.response?.data || error.message);
    throw new Error(error.response?.data?.error?.message || 'Failed to fetch solar insights');
  }
};
