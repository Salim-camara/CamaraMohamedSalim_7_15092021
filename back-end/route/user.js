const express = require('express');
const router = express.Router();
const userControl = require('../controllers/user')


router.get('/inscription', userControl.test);
router.post('/inscription', userControl.singUp);

module.exports = router;