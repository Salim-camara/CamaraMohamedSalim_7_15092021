// importration de indispensables
const bcrypt = require('bcrypt');
const User = require('../models/user');
const jwt = require('jsonwebtoken');
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
                .catch((error) => res.status(409).json({ message: 'Cette adresse email est déjà utilisée'}));
        })
        .catch((err) => res.status(500).json({ message: 'Erreur serveur' + err }));
    
}

// Middleware de connexion
exports.login = (req, res, next) => {

    User.findOne({ where: { email: req.body.email } }) 
        .then((user) => {
            let mdp = user.dataValues.password;
            const UID = user.dataValues.user_id;
            // Test de comparaison du mdp
            bcrypt.compare(req.body.password, mdp)
                .then((password) => {
                    if(password) {
                        res.status(200).json({
                            token: jwt.sign(
                                { tokenUID: user.user_id },
                                'CLEF_SECRETE',
                                { expiresIn: '1h' }
                            ) 
                        });
                    } else {
                        console.log('Mot de passe incorrect');
                        res.status(401).json({ message: 'Mot de passe incorrect'});
                    }
                })
                .catch((err) => res.status(500).json({ message: 'Erreur serveur'}));
        })
        .catch((err) => res.status(404).json({ message: `Cette adresse email n'existe pas`}))

}
// $$$$$$$$$$$$$$$$$$$$$$$$ FIN INSCRIPTION ET CONNEXION $$$$$$$$$$$$$$$$$

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ RECUPERATION/MODIF/DELETE USER $$$$$$$$$$$$$$$$$$$$$$$$$$$
// Middleware GET
exports.getUser = (req, res, next) => {

    const userToken = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(userToken, 'CLEF_SECRETE');
    const userId = decodedToken.tokenUID;

    User.findOne({ where: { user_id: userId }})
        .then((data) => {
            res.status(200).json(data.dataValues);
        })
        .catch((err) => res.status(404).json({ message: 'utilisateur introuvable ! ' + err}));
}

// Middleware PUT
exports.updateUser = (req, res) => {

    const userToken = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(userToken, 'CLEF_SECRETE');
    const userId = decodedToken.tokenUID;

    User.update(
        {bio: req.body.bio,
         lastname: req.body.lastname,
         firstname: req.body.firstname,
         sexe: req.body.sexe,
         birth: req.body.birth,
        imageUrl: req.body.imageUrl},
        { where: { user_id: userId }})
            .then(() => {
                res.status(200).json({ message: 'les modifications ont bien été enregistrées'});
            })
            .catch((err) => res.status(500).json({ message: 'erreur 500 lors de la modification ' + err}));

    
}


