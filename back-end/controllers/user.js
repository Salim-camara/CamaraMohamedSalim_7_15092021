
const User = require('../models/user');

exports.test = (req, res, next) => {
    res.status(200).json({ message: 'ok'});
    const user = new User({
        firstname: 'testnom',
        lastname: 'testprenom',
        email: 'tomate',
        password: 'aubergine'
    });
    user.save();
    
}