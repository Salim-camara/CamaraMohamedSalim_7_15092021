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

// Middlexare de connexion
exports.login = (req, res, next) => {

    User.findOne({ where: { email: req.body.email } })
        .then((user) => {
            let mdp = user.dataValues.password;
            // Test de comparaison du mdp
            bcrypt.compare(req.body.password, mdp)
                .then((password) => {
                    if(password) {
                        console.log('Mot de passe correct, connexion en cours');
                        res.status(200).json({ message: 'Mot de passe correct, connexion en cours' });
                    } else {
                        console.log('Mot de passe incorrect');
                        res.status(401).json({ message: 'Mot de passe incorrect'});
                    }
                })
                .catch((err) => res.status(500).json({ message: 'Erreur récupération du mot de passe  ' + err}));
        })
        .catch((err) => res.status(500).json({ message: `Cette addresse email n'existe pas` + err}))
}