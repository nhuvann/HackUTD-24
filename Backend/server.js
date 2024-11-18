const express = require('express');
const cors = require('cors');
require('dotenv').config({path: 'Backend\.env'});

const app = express();
const PORT = process.env.PORT ||3000;
const apiKey= process.env.GOOGLE_API_KEY;

console.log("Port is: ", PORT);
console.log("API KEY is: ", apiKey);

app.use(cors());
app.use(express.json());

// Mount Solar routes
const solarRoutes = require('./src/Routes/solar');
app.use('/api/solar', solarRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
