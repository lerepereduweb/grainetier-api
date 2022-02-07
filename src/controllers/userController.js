const db = require('../models');
const User = db.users;

 const getUsers = async (req, res, next) => {
    try {
        let contact = await User.findAll();
        res.status(200).json(contact);
    }
    catch (err) {
        console.error(`Erreur dans l'éxécution de la fonction getUsers : ${err.message}`);
    }
 };

 module.exports = {
    getUsers
 };