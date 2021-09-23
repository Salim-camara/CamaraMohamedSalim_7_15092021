
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

exports.testPost = (req, res, next) => {
    console.log(req.body);
    res.status(200).json({ message: 'inchallah' });
}