// db.js
const mongoose = require('mongoose');

// MongoDB connection URL
const DB_URI = 'mongodb://localhost:27017';

// Connect to MongoDB
mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Database connected successfully'))
    .catch(err => console.error('Database connection error:', err));

module.exports = mongoose.connection;
