const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = Schema(
  {
    _id: Schema.Types.ObjectId,
    cart: [{ type: Schema.Types.ObjectId, ref: 'Cart' }],
    user: [{ type: Schema.Types.ObjectId, ref: 'User' }]
  },
  {"strict": "throw"}
);

const Order =  mongoose.model('Order', orderSchema);

module.exports = Order;