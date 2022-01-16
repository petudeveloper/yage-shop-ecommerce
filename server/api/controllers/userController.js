const User = require('../models/User');

const createUser = (req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const password = req.body.password;
    const email = req.body.email;
    const shippingAddres = req.body.shippingAddres;
    
    const newUser = new User ({
        firstName: firstName,
        lastName: lastName,
        password: password,
        email: email,
        shippingAddres: shippingAddres
    });

    newUser.save().then(() => res.send('User created succesfully'));
};

const loginUser = (req, resp) => {
    const email = req.body.email;
    const firstName = req.body.firstName;

    User.find({ email: email, firstName: firstName}, (err, data) => {
        if (err) {
            resp.send(err);
        };

        if (data.length > 0) {
            resp.send(data);
        } else {
            res.send({ message: "User doesn't exist" })
        }
    })
};

module.exports = { createUser, loginUser };
