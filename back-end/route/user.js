const express = require('express');
const router = express.Router();
const userControl = require('../controllers/user');


// route d'inscription
router.post('/inscription', userControl.singUp);
// route de connexion
router.post('/connexion', userControl.login);
// route de récupération du user
router.get('/profils', userControl.getUser);


module.exports = router;