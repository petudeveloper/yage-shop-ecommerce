require('dotenv').config();
const connetDB = require('./config/Database');
const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 5001

app.use(express.json());
app.use(cors({ origin: true, credentials: true }))

connetDB();

app.listen(PORT, () => {
    console.log(`Backend is running on ${PORT}`);
});
