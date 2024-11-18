require('dotenv').config();
const express = require('express');
const cors = require('cors');


const app = express();
const PORT = process.env.PORT ;


app.use(cors());
app.use(express.json());

// Mount Solar routes
const solarRoutes = require('./src/Routes/solar');
app.use('/api/solar', solarRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
