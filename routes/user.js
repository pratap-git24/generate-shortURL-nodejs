const express = require('express');
const { handleUserSignup } = require('../controllers/user');

const router = express.Router();

router.get('/',handleUserSignup);

module.exports = router