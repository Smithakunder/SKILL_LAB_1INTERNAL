// Food.js
const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: String,
  price: Number,
  image: String,
  category: {
    type: String,
    enum: ['veg', 'non-veg', 'dessert']
  }
});

module.exports = mongoose.model('Food', foodSchema);
