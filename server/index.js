require('dotenv').config();
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Inside the server')
})

app.listen(process.env.PORT, () => {
  console.log(`server running on ${process.env.PORT}`)
});
