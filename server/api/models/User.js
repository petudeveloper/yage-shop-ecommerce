const mongoose = require('mongoose');

const User = mongoose.model('User', { name: String, lastName: String, email: String, password: String });

module.exports = User;