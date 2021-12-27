require('dotenv').config();
var express = require('express');
var cors = require('cors')
var app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.MDB_CONNECTION_STRING)
  .then(() => console.log('Database connected'))
  .catch((err) => console.error(err));

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('cat created successfully'));

// app.use(cors());

// app.get('/', function (req, res) {
//   res.send('Inside the server')
// })

// app.listen(process.env.PORT, () => {
//   console.log(`server running on ${process.env.PORT}`)
// });
