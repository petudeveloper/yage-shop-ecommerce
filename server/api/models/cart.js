const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartSchema = Schema({
  _id: Schema.Types.ObjectId,
  totalPrice: Number
});

const Cart =  mongoose.model('Cart', cartSchema);

module.exports = Cart;
