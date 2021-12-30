const mongoose = require('mongoose');
const User = require('../api/models/user');

mongoose.connect(process.env.MDB_CONNECTION_STRING)
  .then(() => console.log('Database connected'))
  .catch((err) => console.error(err));

const user1 = new User({ name: 'petudeveloper2' });
user1.save().then(() => console.log('user created successfully')).then(() => mongoose.connection.close());
