const db = require('../models');
const Order = db.order;

const getOrder = async (req, res, next) => {
    try {
        let order = await Order.findAll();
        res.status(200).json(order);
    }
    catch (err) {
        console.error(`Erreur dans l'éxécution de la fonction getOrder : ${err.message}`);
    }
};

module.exports = {
    getOrder,
};