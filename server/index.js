require('dotenv').config();
require('./config/Database')
var express = require('express');
var cors = require('cors');
const mongoose = require('mongoose');

const User = require('./api/models/user');


const user1 = new User({ firstName: 'david', lastName: 'Alvarez', password: 123456, shippingAddres: 'carrera 0 # 10-15' });
user1.save().then(() => console.log('user created successfully')).then(() => mongoose.connection.close());


// app.use(cors());

// app.get('/', function (req, res) {
//   res.send('Inside the server')
// })

// app.listen(process.env.PORT, () => {
//   console.log(`server running on ${process.env.PORT}`)
// });
