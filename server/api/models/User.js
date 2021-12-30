const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = Schema({
  firstName: String,
  lastName: String,
  password: String,
  shippingAddres: String,
  carts: [{ type: Schema.Types.ObjectId, ref: 'Cart' }]
});

const User =  mongoose.model('User', userSchema);

module.exports = User;
