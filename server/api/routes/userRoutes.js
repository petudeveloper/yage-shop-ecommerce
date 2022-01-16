const express = require('express');
const router = express.Router();
const { createUser, loginUser } = require('../controllers/userController');

// users#create POST /users
router.post('/users', createUser);

// users#login POST /users/login
router.post('/users/login', loginUser);

module.exports = router;
