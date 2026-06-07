const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const errorHandler = require('./middleware/errorHandler');

dotenv.config();

const app = express();
// allow both development and production client URLs if provided
const DEV_CLIENT = process.env.CLIENT_URL || 'http://localhost:5173';
const PROD_CLIENT = process.env.PRODUCTION_CLIENT_URL || process.env.CLIENT_URL || '';
const allowedOrigins = [DEV_CLIENT];
if (PROD_CLIENT) allowedOrigins.push(PROD_CLIENT);

app.use(cors({ origin: function(origin, callback){
  // allow requests with no origin like mobile apps or curl
  if (!origin) return callback(null, true)
  if (allowedOrigins.indexOf(origin) !== -1) return callback(null, true)
  return callback(new Error('Not allowed by CORS'))
}}));
app.use(express.json());

app.use('/api', authRoutes);

// error handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/korean-ai-academy';

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error('MongoDB connection error', err);
    process.exit(1);
  });
