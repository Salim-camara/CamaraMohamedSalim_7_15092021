// importration de indispensables
const bcrypt = require('bcrypt');
const User = require('../models/user');
const token = require('jsonwebtoken');
const multer = require('../middlewares/multer');
const { fstat } = require('fs');
const fs = require('fs');



// $$$$$$$$$$$$$$$$$$$$$$$$$ INSCRIPTION ET CONNEXION $$$$$$$$$$$$$$$$$$$
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

// Middleware de connexion
exports.login = (req, res, next) => {

    User.findOne({ where: { email: req.body.email } })
        .then((user) => {
            let mdp = user.dataValues.password;
            const UID = user.dataValues.user_id;
            console.log(UID);
            // Test de comparaison du mdp
            bcrypt.compare(req.body.password, mdp)
                .then((password) => {
                    if(password) {
                        res.status(200).json({
                            userId: UID,
                            token: 'token'
                        });
                    } else {
                        console.log('Mot de passe incorrect');
                        res.status(401).json({ message: 'Mot de passe incorrect'});
                    }
                })
                .catch((err) => res.status(500).json({ message: 'Erreur récupération du mot de passe  ' + err}));
        })
        .catch((err) => res.status(500).json({ message: `Cette addresse email n'existe pas` + err}))

}
// $$$$$$$$$$$$$$$$$$$$$$$$ FIN INSCRIPTION ET CONNEXION $$$$$$$$$$$$$$$$$

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ RECUPERATION/MODIF/DELETE USER $$$$$$$$$$$$$$$$$$$$$$$$$$$
// Middleware GET
exports.getUser = (req, res, next) => {

    User.findOne({ where: { user_id: '11' }})
        .then((data) => {
            res.status(200).json(data.dataValues);
        })
        .catch((err) => res.status(404).json({ message: 'utilisateur introuvable ! ' + err}));
}

// Middleware PUT
exports.updateUser = (req, res) => {

    User.update(
        {bio: req.body.bio,
         lastname: req.body.lastname,
         firstname: req.body.firstname,
         sexe: req.body.sexe,
         birth: req.body.birth,
        imageUrl: req.body.imageUrl},
        { where: { user_id: '11' }})
            .then(() => {
                res.status(200).json({ message: 'les modifications ont bien été enregistrées'});
            })
            .catch((err) => res.status(500).json({ message: 'erreur 500 lors de la modification ' + err}));

    
}


