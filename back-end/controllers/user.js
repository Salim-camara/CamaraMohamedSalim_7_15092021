// importration de indispensables
const bcrypt = require('bcrypt');
const User = require('../models/user');




// Middleware d'inscription
exports.singUp = (req, res, next) => {

    bcrypt.hash(req.body.password, 10)
        .then((hash) => {
            const user = new User ({
                firstname: req.body.firstname,
                lastname: req.body.name,
                birth: req.body.birth,
                sexe: req.body.sexe,
                email: req.body.email,
                password: hash
            });
            user.save()
                .then(() => res.status(201).json({ message: 'utilisateur créé !'}))
                .catch((error) => res.status(500).json({ message: 'Cette adresse mail est déjà urilisée !!  ' + error}));
        })
        .catch((err) => res.status(500).json({ message: 'Fail to hash ' + err }));
    
}