const db = require('../models');
const Cart = db.cart;

const getCart = async (req, res, next) => {
    try {
        let cart = await Cart.findAll();
        res.status(200).json(cart);
    }
    catch (err) {
        console.error(`Erreur dans l'éxécution de la fonction getCart : ${err.message}`);
    }
};

module.exports = {
    getCart,
};