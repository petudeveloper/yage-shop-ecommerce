/* eslint-disable no-useless-escape */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email);
};

const userSchema = Schema(
    {
        firstName: {
            type: String,
            required: 'First Name is required'
        },
        lastName: {
            type: String,
            required: 'Last Name is required'
        },
        email: {
            type: String,
            required: 'Email is required',
            validate: [validateEmail, 'Please fill a valid email address'],
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
            unique: true
        },
        password: {
            type: String,
            required: 'Password is required'
        },
        shippingAddres: {
            type: String,
            required: 'Shipping address is required'
        },
        carts: [{ type: Schema.Types.ObjectId, ref: 'Cart' }]
    },
    {'strict': 'throw'}
);

const User =  mongoose.model('User', userSchema);

module.exports = User;
