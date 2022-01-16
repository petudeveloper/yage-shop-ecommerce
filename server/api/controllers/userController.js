const User = require('../models/User');

const createUser = (req, res) => {
    const email = req.body.email;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const shippingAddres = req.body.shippingAddres;
    
    const newUser = new User ({
        firstName: firstName,
        lastName: lastName,
        email: email,
        shippingAddres: shippingAddres
    });

    newUser.save().then(() => res.send({ message: 'User created succesfully' }));
};

const loginUser = (req, resp) => {

};

module.exports = { createUser, loginUser };
