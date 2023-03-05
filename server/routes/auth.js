const express = require('express');
const router = express.Router();

const {signup, login} = require('../controllers/auth.js')
//post routes used to send data from front end to the backend
router.post('/signup',signup);
router.post('/login',login);

module.exports = router;