const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = Schema({
  _id: Schema.Types.ObjectId,
  category: String,
  description: String,
  name: String,
  price: Number,
});

const Product =  mongoose.model('Product', productSchema);

module.exports = Product;
