require('dotenv').config({path:__dirname+'/./../../.env'});
const mongoose = require('mongoose');

const connetDB = () => {
  mongoose.connect(process.env.MDB_CONNECTION_STRING)
    .then(() => console.log('Database connected'))
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });
};

module.exports = connetDB;
