const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = Schema({
  _id: Schema.Types.ObjectId,
  quantity: Number,
  price: Number,
  carts: [{ type: Schema.Types.ObjectId, ref: 'Cart' }],
  product: [{ type: Schema.Types.ObjectId, ref: 'Product' }]
});

const Item =  mongoose.model('Item', itemSchema);

module.exports = Item;
