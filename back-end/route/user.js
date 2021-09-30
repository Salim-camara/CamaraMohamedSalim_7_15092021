const express = require('express');
const router = express.Router();
const userControl = require('../controllers/user');
const multer = require('../middlewares/multer');


// route d'inscription
router.post('/inscription', userControl.singUp);
// route de connexion
router.post('/connexion', userControl.login);
// route de récupération du user
router.get('/profils', userControl.getUser);
// route de modification user
router.put('/profils', multer, userControl.updateUser);


module.exports = router;