
const User = require('../models/user');

exports.test = (req, res, next) => {
    console.log('ça marche bien');
    res.status(200).json({ message: 'cest bon ça' });
    // const user = new User({
    //     firstname: 'test',
    //     lastname: 'test',
    //     email: 'test',
    //     password: 'test',
    //     birth: 'test',
    //     sexe: 'test'
    // });
    // user.save()
    //     .then(() => res.status(201).json({ message: 'utilisateur créé!'}))
    //     .catch((err) => res.status(401).json({ message: 'utilisateur non créé :(' + err }));
    
}

exports.singUp = (req, res, next) => {
    
    const user = new User ({
        firstname: req.body.firstname,
        lastname: req.body.name,
        birth: req.body.birth,
        sexe: req.body.sexe,
        email: req.body.email,
        password: req.body.password
    });
    user.save()
        .then(() => res.status(201).json({ message: 'utilisateur créé !'}))
        .catch((error) => res.status(500).json({ message: 'utilisateur non enregistré dans le BDD' + error}));
}