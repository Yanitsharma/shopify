const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  ageGroup: { type: String, required: true },
  price: { type: Number, default: 5500 },
  description: { type: String, required: true },
  image: { type: String, required: true }
});

module.exports = mongoose.model('Product', productSchema);