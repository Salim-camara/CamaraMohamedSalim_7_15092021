const express = require('express');
const router = express.Router();
const userControl = require('../controllers/user')


router.get('/test', userControl.test);

module.exports = router;