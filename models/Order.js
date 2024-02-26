// Order.js
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  foodId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Food'
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  orderId: Number,
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    default: 'pending'
  },
  // Other fields like address ID, payment mode, etc.
});

module.exports = mongoose.model('Order', orderSchema);
