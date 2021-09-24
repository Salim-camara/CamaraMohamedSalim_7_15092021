const express = require('express');
const router = express.Router();
const userControl = require('../controllers/user')


// route d'inscription
router.post('/inscription', userControl.singUp);
// route de connexion
router.post('/connexion', userControl.login);


module.exports = router;